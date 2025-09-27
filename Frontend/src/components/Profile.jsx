import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { User, Heart, MessageCircle, Share2, Bookmark, TrendingUp, Users, Eye, Calendar, Instagram, Twitter, Youtube, ChevronDown, Bell, Settings, Grid, Film, Image } from 'lucide-react';

const InfluencerProfile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');

  // Sample data
  const engagementData = [
    { month: 'Jan', likes: 45000, comments: 8200, shares: 3400 },
    { month: 'Feb', likes: 52000, comments: 9100, shares: 4200 },
    { month: 'Mar', likes: 48000, comments: 8800, shares: 3800 },
    { month: 'Apr', likes: 61000, comments: 11200, shares: 5100 },
    { month: 'May', likes: 58000, comments: 10500, shares: 4800 },
    { month: 'Jun', likes: 72000, comments: 13400, shares: 6200 },
  ];

  const categoryData = [
    { name: 'Lifestyle', value: 35, color: '#10b981' },
    { name: 'Fashion', value: 28, color: '#8b5cf6' },
    { name: 'Travel', value: 20, color: '#3b82f6' },
    { name: 'Food', value: 17, color: '#f59e0b' },
  ];

  const reachData = [
    { day: 'Mon', reach: 125000 },
    { day: 'Tue', reach: 142000 },
    { day: 'Wed', reach: 138000 },
    { day: 'Thu', reach: 156000 },
    { day: 'Fri', reach: 172000 },
    { day: 'Sat', reach: 185000 },
    { day: 'Sun', reach: 168000 },
  ];

  const posts = [
    { id: 1, type: 'image', thumbnail: 'https://images.unsplash.com/photo-1525904097878-94fb15835963?w=400', likes: 15420, comments: 342, date: '2d ago' },
    { id: 2, type: 'reel', thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400', likes: 28900, comments: 856, date: '4d ago' },
    { id: 3, type: 'image', thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', likes: 12100, comments: 224, date: '1w ago' },
    { id: 4, type: 'reel', thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400', likes: 34500, comments: 1023, date: '1w ago' },
    { id: 5, type: 'image', thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400', likes: 19800, comments: 445, date: '2w ago' },
    { id: 6, type: 'reel', thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400', likes: 41200, comments: 1342, date: '2w ago' },
  ];

  const metrics = [
    { label: 'Impressions', value: '85%', subtext: 'IMPRESSIVE', color: 'text-green-400', bgColor: 'bg-green-400/10' },
    { label: 'CPM', value: 'Mid', subtext: 'AFFORDABLE', color: 'text-yellow-400', bgColor: 'bg-yellow-400/10' },
    { label: 'Eng Rate', value: '8.2/10', subtext: 'SOCIAL TOPICS', color: 'text-blue-400', bgColor: 'bg-blue-400/10' },
    { label: 'Risk Score', value: 'Low Risk', subtext: 'INFLUENCER', color: 'text-green-400', bgColor: 'bg-green-400/10' },
    { label: 'Avg views', value: '8.0/10', subtext: 'ER/VIEW', color: 'text-red-400', bgColor: 'bg-red-400/10' },
  ];

  const personalityTraits = [
    { trait: 'Adventurous', percentage: 85 },
    { trait: 'Extrovert', percentage: 78 },
    { trait: 'Positive', percentage: 92 },
    { trait: 'Authentic', percentage: 88 },
  ];

  const interests = [
    { category: 'Adventurous', value: 80 },
    { category: 'Extrovert', value: 64 },
    { category: 'Sportscar', value: 80 },
    { category: 'Medicine', value: 23 },
    { category: 'Altruistic', value: 64 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Profile Scrapper
              </h1>
              {/* <nav className="hidden md:flex space-x-6">
                <button className="hover:text-blue-400 transition">Dashboard</button>
                <button className="hover:text-blue-400 transition">Analytics</button>
                <button className="hover:text-blue-400 transition">Campaigns</button>
              </nav> */}
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              <button className="px-4 py-2 bg-blue-500 rounded-xl text-white font-semibold hover:bg-blue-600 transition">
                Enter
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Profile Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-gray-700">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200"
                  alt="Ralph Edwards"
                  className="w-32 h-32 rounded-2xl object-cover ring-4 ring-gray-700"
                />
                <div className="absolute -bottom-2 -right-2 bg-green-400 w-6 h-6 rounded-full border-2 border-gray-800"></div>
              </div>
              <h2 className="text-3xl font-bold mt-4">Ralph Edwards</h2>
              <p className="text-gray-400 mt-1">@ralphedwards</p>

              <div className="flex gap-3 mt-4">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition" />
                <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition" />
              </div>

              <div className="flex gap-4 mt-6">
                <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition transform hover:scale-105">
                  Follow
                </button>
                <button className="px-6 py-2 border border-gray-600 rounded-xl hover:bg-gray-700 transition">
                  Message
                </button>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-2 lg:grid-cols-5 gap-4">
              {metrics.map((metric, index) => (
                <div key={index} className={`${metric.bgColor} backdrop-blur-sm rounded-xl p-4 border border-gray-700`}>
                  <div className="text-2xl font-bold mb-1">{metric.value}</div>
                  <div className="text-xs text-gray-400 uppercase">{metric.subtext}</div>
                  <div className={`text-sm mt-2 ${metric.color}`}>{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-300">Followers</h3>
              <div className="text-3xl font-bold">245.8K</div>
              <div className="text-green-400 text-sm mt-1">↑ 12.5% this month</div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-300">Engagement Rate</h3>
              <div className="text-3xl font-bold">8.2%</div>
              <div className="text-yellow-400 text-sm mt-1">Above average</div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-300">Avg. Reach</h3>
              <div className="text-3xl font-bold">156K</div>
              <div className="text-blue-400 text-sm mt-1">Per post</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {['overview', 'posts', 'analytics', 'audience'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-semibold transition whitespace-nowrap ${activeTab === tab
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700'
                }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content based on active tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Engagement Trend */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Engagement Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={engagementData}>
                  <defs>
                    <linearGradient id="colorLikes" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorComments" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }} />
                  <Area type="monotone" dataKey="likes" stroke="#3b82f6" fillOpacity={1} fill="url(#colorLikes)" />
                  <Area type="monotone" dataKey="comments" stroke="#10b981" fillOpacity={1} fill="url(#colorComments)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Content Categories */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Content Categories</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Weekly Reach */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Weekly Reach</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={reachData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="day" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }} />
                  <Bar dataKey="reach" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Personality & Interests */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Personality & Interests</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-3 uppercase">Personality</h4>
                  {personalityTraits.map((item, index) => (
                    <div key={index} className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span>{item.trait}</span>
                        <span>{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-3 uppercase">Interests</h4>
                  <div className="space-y-2">
                    {interests.map((interest, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm">{interest.category}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-gray-700 rounded-full h-1.5">
                            <div
                              className="bg-gradient-to-r from-green-400 to-blue-400 h-1.5 rounded-full"
                              style={{ width: `${interest.value}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-400 w-10">{interest.value}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'posts' && (
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
              {posts.map((post) => (
                <div key={post.id} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition group">
                  <div className="relative">
                    <img
                      src={post.thumbnail}
                      alt={`Post ${post.id}`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                    />
                    {post.type === 'reel' && (
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
        )}

        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Performance Metrics */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Performance Metrics</h3>
                <select className="bg-gray-700 text-white px-3 py-1 rounded-lg text-sm">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="text-sm text-gray-400">Growth Rate</span>
                  </div>
                  <div className="text-2xl font-bold">+24.5%</div>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-gray-400">Impressions</span>
                  </div>
                  <div className="text-2xl font-bold">1.2M</div>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-gray-400">New Followers</span>
                  </div>
                  <div className="text-2xl font-bold">+8.4K</div>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Share2 className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm text-gray-400">Shares</span>
                  </div>
                  <div className="text-2xl font-bold">15.6K</div>
                </div>
              </div>
            </div>

            {/* Best Performing Content */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Best Performing Content</h3>
              <div className="space-y-3">
                {['Travel Vlog - Bali', 'Fashion Week Highlights', 'Morning Routine', 'Q&A Session'].map((title, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400"></div>
                      <div>
                        <div className="font-medium">{title}</div>
                        <div className="text-xs text-gray-400">Posted {index + 1} days ago</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{(Math.random() * 100 + 50).toFixed(1)}K views</div>
                      <div className="text-xs text-green-400">+{(Math.random() * 50 + 10).toFixed(1)}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'audience' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Demographics */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Demographics</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm text-gray-400 mb-2">Age Distribution</h4>
                  <div className="space-y-2">
                    {['18-24', '25-34', '35-44', '45+'].map((age, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-sm w-12">{age}</span>
                        <div className="flex-1 bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full"
                            style={{ width: `${[45, 35, 15, 5][index]}%` }}
                          ></div>
                        </div>
                        <span className="text-sm w-10">{[45, 35, 15, 5][index]}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-2">Gender</h4>
                  <div className="flex gap-4">
                    <div className="flex-1 bg-gray-700/30 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-pink-400">62%</div>
                      <div className="text-sm text-gray-400">Female</div>
                    </div>
                    <div className="flex-1 bg-gray-700/30 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-blue-400">38%</div>
                      <div className="text-sm text-gray-400">Male</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Locations */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Top Locations</h3>
              <div className="space-y-3">
                {[
                  { country: 'United States', percentage: 35, flag: '🇺🇸' },
                  { country: 'United Kingdom', percentage: 18, flag: '🇬🇧' },
                  { country: 'Canada', percentage: 12, flag: '🇨🇦' },
                  { country: 'Australia', percentage: 10, flag: '🇦🇺' },
                  { country: 'Germany', percentage: 8, flag: '🇩🇪' },
                ].map((location, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-2xl">{location.flag}</span>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">{location.country}</span>
                        <span className="text-sm text-gray-400">{location.percentage}%</span>
                      </div>
                      <div className="bg-gray-700 rounded-full h-1.5">
                        <div
                          className="bg-gradient-to-r from-blue-400 to-purple-400 h-1.5 rounded-full"
                          style={{ width: `${location.percentage * 2.8}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfluencerProfile;