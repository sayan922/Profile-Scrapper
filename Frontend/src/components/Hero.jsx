import React from 'react'

function hero() {
  return (
    
    <div className="min-h-screen bg-gradient-to-r from-purple-700 via-pink-600 to-blue-500 text-white flex flex-col items-center justify-center text-center relative overflow-hidden">

  {/* Decorative gradient circles */}
  <div className="absolute top-0 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
  <div className="absolute bottom-0 right-1/3 w-[28rem] h-[28rem] bg-blue-400/20 rounded-full translate-x-1/2 translate-y-1/4 animate-pulse"></div>

  {/* Main Content */}
  <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg px-4">
    Search for Your Favourite Influencer
  </h1>
  
  <p className="text-lg md:text-2xl text-gray-100 max-w-3xl mb-8 drop-shadow-md px-4">
    Discover metrics, followers, engagement rates, and more by simply entering their Instagram username.
  </p>

</div>



  )
}

export default hero
