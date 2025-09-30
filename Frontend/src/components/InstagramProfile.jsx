import { useEffect, useState } from "react";
import { Users, UserPlus, FileText } from 'lucide-react';
const API_URL = import.meta.env.VITE_API_URL;


export default function InstagramProfile({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    if (!username) return;

    setLoading(true);
    setError(null);

    fetch(`${API_URL}/api/instagram/by-username/${username}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch Instagram data");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [username]);

  if (loading)
    return (
      <div className="container mx-auto px-4 py-8 flex flex-col items-center gap-8">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Skeleton Card */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 flex flex-col lg:flex-row items-center gap-8 w-full max-w-4xl animate-pulse">
          {/* Profile Skeleton */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="w-32 h-32 bg-gray-700 rounded-2xl"></div>
            <div className="w-40 h-6 bg-gray-700 rounded-md"></div>
            <div className="w-32 h-4 bg-gray-700 rounded-md"></div>
          </div>

          {/* Stats Skeleton */}
          <div className="flex-1 grid grid-cols-3 gap-8">
            {Array(3)
              .fill(0)
              .map((_, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div className="w-24 h-4 bg-gray-700 rounded-md"></div>
                  <div className="w-16 h-6 bg-gray-700 rounded-md"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );

  if (error)
    return <div className="text-red-500 text-center mt-8">Error: {error}</div>;
  if (!data) return null;

  return (
    <div className=" bg-gradient-to-br flex items-center justify-center p-4">
      <div className="container mx-auto max-w-5xl">
        <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-gray-700/50 shadow-2xl overflow-hidden">
          {/* Decorative gradient orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
            {/* Profile Section */}
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <img
                  src={data.profilePic}
                  alt={data.username}
                  className="relative w-36 h-36 rounded-3xl object-cover ring-4 ring-gray-700/50 shadow-xl transition-transform group-hover:scale-105"
                />
                <div className="absolute -bottom-2 -right-2 bg-green-400 w-7 h-7 rounded-full border-4 border-gray-800 shadow-lg animate-pulse"></div>
              </div>
              
              <div className="text-center lg:text-left space-y-2">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {data.username}
                </h2>
                <p className="text-gray-400 text-lg">@{data.username}</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="flex-1 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors">
                      <Users className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-400 mb-1">Followers</p>
                      <p className="text-3xl font-bold text-white">{data.followers}</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                      <UserPlus className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-400 mb-1">Following</p>
                      <p className="text-3xl font-bold text-white">{data.following}</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-1">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="p-3 bg-green-500/10 rounded-xl group-hover:bg-green-500/20 transition-colors">
                      <FileText className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-400 mb-1">Total Posts</p>
                      <p className="text-3xl font-bold text-white">{data.totalPosts}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
