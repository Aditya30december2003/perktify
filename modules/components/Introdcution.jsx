"use client";
import React from "react";

const Introduction = ({ introData }) => {
  const {
    title,
    subTitle, 
    para,
    introImage,
    points = [],
    bannerPoints = [],
    bannerIcons = [],
  } = introData;

  return (
    <section id="about" className="relative w-full bg-black py-20 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute top-10 left-10 text-blue-200 font-mono text-xs opacity-60 animate-float">
        {'</>'} function() {'{'}return innovation;{'}'}
      </div>
      <div className="absolute top-40 right-20 text-cyan-200 font-mono text-xs opacity-60 animate-bounce">
        console.log("Building the future...");
      </div>
      <div className="absolute bottom-20 left-20 text-purple-200 font-mono text-xs opacity-60 animate-pulse">
        import {'{'}future{'}'} from 'technology';
      </div>
      <div className="absolute top-32 left-1/4 text-green-200 font-mono text-xs opacity-50 animate-float">
        const success = await deploy();
      </div>
      <div className="absolute bottom-40 right-1/4 text-pink-200 font-mono text-xs opacity-50 animate-bounce">
        {'<Component />'} render();
      </div>
      <div className="absolute top-60 left-1/3 text-yellow-200 font-mono text-xs opacity-40 animate-pulse">
        npm install innovation
      </div>
      <div className="absolute bottom-32 right-10 text-indigo-200 font-mono text-xs opacity-50 animate-float">
        git commit -m "✨ magic"
      </div>
      <div className="absolute top-20 right-1/3 text-teal-200 font-mono text-xs opacity-45 animate-bounce">
        {'{'}"status": "online"{'}'}
      </div>
      <div className="absolute bottom-60 left-1/2 text-orange-200 font-mono text-xs opacity-40 animate-pulse">
        API.connect() {'→'} success
      </div>
      <div className="absolute top-80 left-16 text-red-200 font-mono text-xs opacity-45 animate-float">
        ['tech', 'innovation'].map()
      </div>
      <div className="absolute bottom-16 right-1/2 text-blue-200 font-mono text-xs opacity-50 animate-bounce">
        while(true) {'{'}innovate();{'}'}
      </div>
      <div className="absolute top-96 right-16 text-purple-200 font-mono text-xs opacity-40 animate-pulse">
        export default Future;
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Main Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Text Content */}
          <div className="space-y-8" data-aos="fade-right">
            {/* Subtitle with glow effect */}
            <div className="relative">
              <span className="inline-block text-sm font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 relative">
                {subTitle}
                <div className="absolute inset-0 blur-sm bg-gradient-to-r from-cyan-400 to-blue-400 opacity-30"></div>
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-400">
                {title}
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              {para}
            </p>

            {/* Features List with modern styling */}
            <div className="space-y-4">
              {points.map((point, index) => (
                <div key={index} className="group flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  </div>
                  <span className="text-gray-200 font-medium text-lg group-hover:text-white transition-colors">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button with enhanced styling */}
            <div className="flex space-x-4 pt-4">
              <button 
                onClick={() =>
                  document
                    .getElementById("buysubscription")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  <span>Buy Now</span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Image with tech styling */}
          <div className="relative flex justify-center" data-aos="fade-left">
            {/* Glowing backdrop */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
            
            {/* Tech frame border */}
            <div className="relative p-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={introImage || ""}
                  alt="Intro"
                  className="w-full max-w-md rounded-2xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-700/50 to-transparent rounded-2xl"></div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
              </div>
            </div>

            {/* Floating tech elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-cyan-400/30 rounded-lg animate-spin-slow"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60 animate-pulse"></div>
          </div>
        </div>

        {/* Banner Highlights - Tech Dashboard Style */}
        <div className="relative" data-aos="zoom-in-up">
          {/* Glass morphism container */}
          <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
            {/* Header */}
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="text-xl font-bold text-white">System Status</h3>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bannerPoints.map((point, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                      {bannerIcons?.[index] ? (
                        <img
                          src={bannerIcons[index]}
                          alt="Icon"
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg"></div>
                      )}
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg group-hover:text-cyan-300 transition-colors">
                        {point}
                      </p>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full animate-pulse" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Introduction;