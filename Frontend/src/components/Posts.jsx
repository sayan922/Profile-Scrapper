import React, { useEffect, useState } from "react";
import { Grid, Image, Film, Heart, MessageCircle } from "lucide-react";
const API_URL = import.meta.env.VITE_API_URL;
function Posts({ username }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  
  useEffect(() => {
    if (!username) return;

    setLoading(true);
    setError(null);

    fetch(`${API_URL}/api/instagram/by-username/${username}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
      })
      .then((data) => {
        // Assuming Flask backend returns `latestPosts` array along with profile data
        setPosts(data.latestPosts || []);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [username]);

  if (loading)
    return <div className="text-center py-8 text-gray-400">Loading posts...</div>;

  if (error)
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  if (posts.length === 0)
    return <div className="text-center py-8 text-gray-400">No posts found</div>;

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex gap-4 mb-6">
        <button className="px-4 py-2 bg-gray-800/50 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition">
          <Grid className="w-4 h-4" />
          All Posts
        </button>
        <button className="px-4 py-2 bg-gray-800/50 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition">
          <Image className="w-4 h-4" />
          Images
        </button>
        <button className="px-4 py-2 bg-gray-800/50 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition">
          <Film className="w-4 h-4" />
          Reels
        </button>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition group"
          >
            <div className="relative">
              <img
                src={post.thumbnail}
                alt={`Post ${idx + 1}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
              />
              {post.type === "reel" && (
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                  <Film className="w-4 h-4" />
                  <span className="text-xs">Reel</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-red-400" />
                    <span className="text-sm">{(post.likes / 1000).toFixed(1)}k</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 text-blue-400" />
                    <span className="text-sm">{post.comments}</span>
                  </div>
                </div>
                <span className="text-xs text-gray-400">{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
