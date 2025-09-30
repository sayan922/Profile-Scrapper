from flask import Flask, jsonify
import requests
from bs4 import BeautifulSoup
from flask_cors import CORS
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Instagram base URL from env



@app.route("/api/instagram/by-username/<username>")
def instagram_profile(username):
    headers = {"User-Agent": "Mozilla/5.0"}

    # ---------- 1. Try JSON endpoint for posts ----------
    json_url = f"https://www.instagram.com/{username}/?__a=1&__d=dis"
    latest_posts = []
    try:
        r_json = requests.get(json_url, headers=headers)
        if r_json.status_code == 200:
            data = r_json.json()
            edges = data.get("graphql", {}).get("user", {}).get("edge_owner_to_timeline_media", {}).get("edges", [])
            for edge in edges[:5]:  # latest 5 posts
                node = edge["node"]
                post = {
                    "id": node["id"],
                    "shortcode": node["shortcode"],
                    "thumbnail": node["display_url"],
                    "isVideo": node["is_video"],
                    "likes": node.get("edge_liked_by", {}).get("count", 0),
                    "comments": node.get("edge_media_to_comment", {}).get("count", 0),
                    "postUrl": f"https://www.instagram.com/p/{node['shortcode']}/",
                }
                latest_posts.append(post)
    except Exception as e:
        print("Error fetching JSON endpoint:", e)

    # ---------- 2. Fallback: scrape profile info ----------
    url = f"https://www.instagram.com/{username}/"
    r = requests.get(url, headers=headers)
    soup = BeautifulSoup(r.text, "html.parser")

    meta = soup.find("meta", attrs={"name": "description"})
    og_image = soup.find("meta", attrs={"property": "og:image"})

    if not meta or not og_image:
        return jsonify({"error": "Could not fetch profile"}), 404

    content = meta.get("content", "")
    parts = content.split("-")[0].split(",")

    followers = parts[0].strip() if len(parts) > 0 else "0"
    following = parts[1].strip() if len(parts) > 1 else "0"
    posts = parts[2].strip() if len(parts) > 2 else "0"
    profile_pic_url = og_image.get("content")

    # ---------- Final response ----------
    data = {
        "username": username,
        "followers": followers,
        "following": following,
        "totalPosts": posts,
        "profilePic": profile_pic_url,
        "latestPosts": latest_posts,  # may be [] if fetch fails
    }
    return jsonify(data)


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=False, host="0.0.0.0", port=port)
