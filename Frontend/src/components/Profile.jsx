import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { User, Heart, MessageCircle, Share2, Bookmark, TrendingUp, Users, Eye, Calendar, Instagram, Twitter, Youtube, ChevronDown, Bell, Settings, Grid, Film, Image } from 'lucide-react';
import InstagramProfile from './InstagramProfile';
import Hero from './Hero';
import Posts from './Posts';
import Analytics from './Analytics';
const InfluencerProfile = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
    const [searchInput, setSearchInput] = useState(''); // input from search bar
  const [myInstagramUsername, setMyInstagramUsername] = useState(''); // default profile
  
  
  // Handle form submit
  const handleSearch = (e) => {
    e.preventDefault(); // prevent page refresh
    if (searchInput.trim() !== '') {
      setMyInstagramUsername(searchInput.trim());
      setSearchInput(''); // optional: clear input after submit
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
    <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-40">
    <div className="container mx-auto px-4 py-3">
    <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
      
      {/* Logo / Title */}
      <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Profile Scrapper
      </h1>
      
      {/* Search bar */}
      <form onSubmit={handleSearch} className="flex w-full md:w-auto items-center space-x-2">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search Instagram username..."
                className="flex-1 px-4 py-2 rounded-l-xl md:rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 rounded-r-xl md:rounded-xl text-white font-semibold hover:bg-blue-600 transition"
              >
                Enter
              </button>
            </form>
      
    </div>
    </div>
    </header>
     {/* Conditionally show Hero */}
    {!myInstagramUsername && <Hero/>}

    {/* Only show Instagram profile if a username exists */}
    {myInstagramUsername && <InstagramProfile username={myInstagramUsername} />}
      
      {myInstagramUsername && 
      <div className="container mx-auto px-4 py-8">
        

        {/* Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {['posts', 'analytics'].map((tab) => (
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
        
            
        {activeTab === 'posts' && (
            <Posts/>
        )}

        {activeTab === 'analytics' && (
          <Analytics/>
        )}

      </div>}
    </div>
  );
};

export default InfluencerProfile;