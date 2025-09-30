import React from 'react'
import { User, Heart, MessageCircle, Share2, Bookmark, TrendingUp, Users, Eye, Calendar, Instagram, Twitter, Youtube, ChevronDown, Bell, Settings, Grid, Film, Image } from 'lucide-react';

function Analytics() {
  return (
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
  )
}

export default Analytics
