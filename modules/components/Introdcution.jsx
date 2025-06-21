"use client";
import React from "react";
import { useTheme } from '@/app/contexts/ThemeContext';

const Introduction = ({ introData }) => {
  const { isDarkMode } = useTheme();
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
    <section 
      id="about" 
      className={`relative w-full py-20 overflow-hidden ${
        isDarkMode ? 'bg-black' : 'bg-white'
      }`}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute top-10 left-10 font-mono text-xs opacity-60 animate-float" style={{
        color: isDarkMode ? '#93c5fd' : '#1e40af'
      }}>
        {'</>'} function() {'{'}return innovation;{'}'}
      </div>
      <div className="absolute top-40 right-20 font-mono text-xs opacity-60 animate-bounce" style={{
        color: isDarkMode ? '#7dd3fc' : '#1d4ed8'
      }}>
        console.log("Building the future...");
      </div>
      <div className="absolute bottom-20 left-20 font-mono text-xs opacity-60 animate-pulse" style={{
        color: isDarkMode ? '#60a5fa' : '#1e3a8a'
      }}>
        import {'{'}future{'}'} from 'technology';
      </div>
      <div className="absolute top-32 left-1/4 font-mono text-xs opacity-50 animate-float" style={{
        color: isDarkMode ? '#38bdf8' : '#1e40af'
      }}>
        const success = await deploy();
      </div>
      <div className="absolute bottom-40 right-1/4 font-mono text-xs opacity-50 animate-bounce" style={{
        color: isDarkMode ? '#3b82f6' : '#1d4ed8'
      }}>
        {'<Component />'} render();
      </div>
      <div className="absolute top-60 left-1/3 font-mono text-xs opacity-40 animate-pulse" style={{
        color: isDarkMode ? '#2563eb' : '#1e3a8a'
      }}>
        npm install innovation
      </div>
      <div className="absolute bottom-32 right-10 font-mono text-xs opacity-50 animate-float" style={{
        color: isDarkMode ? '#1d4ed8' : '#1e40af'
      }}>
        git commit -m "✨ magic"
      </div>
      <div className="absolute top-20 right-1/3 font-mono text-xs opacity-45 animate-bounce" style={{
        color: isDarkMode ? '#0284c7' : '#1e3a8a'
      }}>
        {'{'}"status": "online"{'}'}
      </div>
      <div className="absolute bottom-60 left-1/2 font-mono text-xs opacity-40 animate-pulse" style={{
        color: isDarkMode ? '#0369a1' : '#1d4ed8'
      }}>
        API.connect() {'→'} success
      </div>
      <div className="absolute top-80 left-16 font-mono text-xs opacity-45 animate-float" style={{
        color: isDarkMode ? '#60a5fa' : '#1e40af'
      }}>
        ['tech', 'innovation'].map()
      </div>
      <div className="absolute bottom-16 right-1/2 font-mono text-xs opacity-50 animate-bounce" style={{
        color: isDarkMode ? '#3b82f6' : '#1d4ed8'
      }}>
        while(true) {'{'}innovate();{'}'}
      </div>
      <div className="absolute top-96 right-16 font-mono text-xs opacity-40 animate-pulse" style={{
        color: isDarkMode ? '#2563eb' : '#1e3a8a'
      }}>
        export default Future;
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Main Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Text Content */}
          <div className="space-y-8" data-aos="fade-right">
            {/* Subtitle with glow effect */}
            <div className="relative">
              <span className="inline-block text-sm font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 relative">
                {subTitle}
                <div className={`absolute inset-0 blur-sm bg-gradient-to-r from-blue-400 to-blue-600 ${
                  isDarkMode ? 'opacity-30' : 'opacity-20'
                }`}></div>
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                isDarkMode 
                  ? 'from-white via-blue-200 to-blue-400' 
                  : 'from-blue-900 via-blue-700 to-blue-500'
              }`}>
                {title}
              </span>
            </h2>

            {/* Description */}
            <p className={`text-xl leading-relaxed max-w-lg ${
              isDarkMode ? 'text-gray-300' : 'text-blue-900/80'
            }`}>
              {para}
            </p>

            {/* Features List with modern styling */}
            <div className="space-y-4">
              {points.map((point, index) => (
                <div 
                  key={index} 
                  className={`group flex items-center space-x-4 p-3 rounded-lg transition-all duration-300 ${
                    isDarkMode 
                      ? 'hover:bg-white/5' 
                      : 'hover:bg-blue-50'
                  }`}
                >
                  <div className="relative">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform ${
                      isDarkMode 
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                        : 'bg-gradient-to-r from-blue-400 to-blue-500'
                    }`}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div className={`absolute inset-0 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity ${
                      isDarkMode 
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                        : 'bg-gradient-to-r from-blue-400 to-blue-500'
                    }`}></div>
                  </div>
                  <span className={`font-medium text-lg transition-colors ${
                    isDarkMode 
                      ? 'text-gray-200 group-hover:text-white' 
                      : 'text-blue-900 group-hover:text-blue-800'
                  }`}>
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
                className={`group relative px-8 py-4 text-white rounded-xl font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-blue-500/25' 
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-blue-500/25'
                }`}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-400 to-blue-500' 
                    : 'bg-gradient-to-r from-blue-500 to-blue-600'
                }`}></div>
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
            <div className={`absolute inset-0 rounded-3xl blur-3xl ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-500/20 to-blue-600/20' 
                : 'bg-gradient-to-r from-blue-400/20 to-blue-500/20'
            }`}></div>
            
            {/* Tech frame border */}
            <div className={`relative p-2 rounded-3xl backdrop-blur-sm ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-500/20 to-blue-600/20' 
                : 'bg-gradient-to-r from-blue-400/20 to-blue-500/20'
            }`}>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={introImage || ""}
                  alt="Intro"
                  className="w-full max-w-md rounded-2xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay effects */}
                <div className={`absolute inset-0 rounded-2xl ${
                  isDarkMode 
                    ? 'bg-gradient-to-t from-blue-700/50 to-transparent' 
                    : 'bg-gradient-to-t from-blue-600/30 to-transparent'
                }`}></div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
              </div>
            </div>

            {/* Floating tech elements */}
            <div className={`absolute -top-4 -left-4 w-16 h-16 rounded-lg animate-spin-slow ${
              isDarkMode 
                ? 'border-2 border-blue-400/30' 
                : 'border-2 border-blue-500/30'
            }`}></div>
            <div className={`absolute -bottom-4 -right-4 w-12 h-12 rounded-full opacity-60 animate-pulse ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                : 'bg-gradient-to-r from-blue-400 to-blue-500'
            }`}></div>
          </div>
        </div>

        {/* Banner Highlights - Tech Dashboard Style */}
        <div className="relative" data-aos="zoom-in-up">
          {/* Glass morphism container */}
          <div className={`relative p-8 backdrop-blur-xl rounded-3xl shadow-2xl ${
            isDarkMode 
              ? 'bg-white/5 border border-white/10' 
              : 'bg-blue-50/80 border border-blue-200/50'
          }`}>
            {/* Header */}
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              <h3 className={`text-xl font-bold ${
                isDarkMode ? 'text-white' : 'text-blue-900'
              }`}>System Status</h3>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bannerPoints.map((point, index) => (
                <div
                  key={index}
                  className={`group relative p-6 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:transform hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-blue-400/50' 
                      : 'bg-gradient-to-br from-white/50 to-white/30 border border-blue-200/50 hover:border-blue-400/50'
                  }`}
                >
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-blue-500/10 to-blue-500/10' 
                      : 'bg-gradient-to-r from-blue-400/10 to-blue-400/10'
                  }`}></div>
                  
                  <div className="relative flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm ${
                      isDarkMode 
                        ? 'bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-white/10' 
                        : 'bg-gradient-to-br from-blue-400/20 to-blue-500/20 border border-blue-200/30'
                    }`}>
                      {bannerIcons?.[index] ? (
                        <img
                          src={bannerIcons[index]}
                          alt="Icon"
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        <div className={`w-8 h-8 rounded-lg ${
                          isDarkMode 
                            ? 'bg-gradient-to-r from-blue-400 to-blue-500' 
                            : 'bg-gradient-to-r from-blue-500 to-blue-600'
                        }`}></div>
                      )}
                    </div>
                    <div>
                      <p className={`font-bold text-lg transition-colors ${
                        isDarkMode 
                          ? 'text-white group-hover:text-blue-300' 
                          : 'text-blue-900 group-hover:text-blue-700'
                      }`}>
                        {point}
                      </p>
                      <div className={`w-full rounded-full h-2 mt-2 ${
                        isDarkMode ? 'bg-gray-700' : 'bg-blue-200'
                      }`}>
                        <div className={`h-2 rounded-full animate-pulse ${
                          isDarkMode 
                            ? 'bg-gradient-to-r from-blue-400 to-blue-500' 
                            : 'bg-gradient-to-r from-blue-500 to-blue-600'
                        }`} style={{ width: '95%' }}></div>
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