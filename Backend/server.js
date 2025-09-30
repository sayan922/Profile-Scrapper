// server.js
import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const ACCESS_TOKEN = process.env.IG_ACCESS_TOKEN;

app.use(cors());
app.use(express.json());

/**
 * Convert Instagram username → numeric ID
 * Only works for connected Business/Creator accounts
 */
async function getInstagramUserId(username) {
  try {
    const pagesRes = await axios.get(
      `https://graph.facebook.com/v17.0/me/accounts?access_token=${ACCESS_TOKEN}`
    );

    for (const page of pagesRes.data.data) {
      if (!page.instagram_business_account) continue;

      const instaId = page.instagram_business_account.id;
      const instaRes = await axios.get(
        `https://graph.facebook.com/v17.0/${instaId}?fields=username&access_token=${ACCESS_TOKEN}`
      );

      if (instaRes.data.username === username) return instaId;
    }

    throw new Error(
      "Instagram username not found or not connected to this account"
    );
  } catch (err) {
    console.error("getInstagramUserId error:", err.message);
    throw err;
  }
}

/**
 * Route: Get Instagram profile + metrics by username
 */
app.get("/api/instagram/by-username/:username", async (req, res) => {
  try {
    const username = req.params.username;

    // Step 1: Convert username → userId
    const userId = await getInstagramUserId(username);

    // Step 2: Fetch profile info
    const profileRes = await axios.get(
      `https://graph.facebook.com/v17.0/${userId}?fields=username,followers_count,follows_count,media_count&access_token=${ACCESS_TOKEN}`
    );

    // Step 3: Fetch last 5 posts
    const mediaRes = await axios.get(
      `https://graph.facebook.com/v17.0/${userId}/media?fields=id,like_count,comments_count,impressions,reach,engagement&limit=5&access_token=${ACCESS_TOKEN}`
    );

    const media = mediaRes.data.data;

    // Step 4: Calculate engagement rate
    const totalEngagement = media.reduce(
      (acc, post) => acc + (post.engagement || 0),
      0
    );
    const avgEngagementRate =
      media.length > 0
        ? (totalEngagement / media.length / profileRes.data.followers_count) * 100
        : 0;

    res.json({
      username: profileRes.data.username,
      followers: profileRes.data.followers_count,
      following: profileRes.data.follows_count,
      totalPosts: profileRes.data.media_count,
      engagementRate: avgEngagementRate.toFixed(2),
      metrics: media.map((m) => ({
        likes: m.like_count || 0,
        comments: m.comments_count || 0,
        reach: m.reach || 0,
        impressions: m.impressions || 0,
      })),
    });
  } catch (err) {
    console.error("Instagram API error:", err.message);
    res.status(400).json({
      error:
        err.message ||
        "Failed to fetch Instagram data. Make sure the username is connected to your account.",
    });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
