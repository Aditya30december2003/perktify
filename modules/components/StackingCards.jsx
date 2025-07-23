"use client"
import React, { useState, useEffect } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { useTheme } from '@/app/contexts/ThemeContext';

const SmoothCarousel = ({ whyCards, WhyHead }) => {
  const { isDarkMode } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const { float2 } = WhyHead;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || !whyCards?.length) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % whyCards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, whyCards?.length]);

  const nextSlide = () => {
    if (!whyCards?.length) return; 
    setCurrentIndex((prev) => (prev + 1) % whyCards.length);
  };

  const prevSlide = () => {
    if (!whyCards?.length) return;
    setCurrentIndex((prev) => (prev - 1 + whyCards.length) % whyCards.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!whyCards?.length) {
    return null;
  }

  return (
    <section className={`relative w-full py-20 overflow-hidden ${
      isDarkMode ? 'bg-black' : 'bg-blue-900'
    }`}>
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 animate-pulse animate-blink-plus" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Code Elements */}
      {/* <div className="absolute top-20 left-16 font-mono text-xs opacity-50 animate-float" style={{
        color: isDarkMode ? '#93c5fd' : '#bfdbfe'
      }}>
        features.map(f {'=>'} benefit)
      </div> */}
      <div className="absolute top-40 right-20 font-mono text-xs opacity-45 animate-bounce" style={{
        color: isDarkMode ? '#7dd3fc' : '#93c5fd'
      }}>
        stack.push(innovation);
      </div>
      <div className="absolute bottom-40 left-24 font-mono text-xs opacity-40 animate-pulse" style={{
        color: isDarkMode ? '#60a5fa' : '#3b82f6'
      }}>
        cards.forEach(reveal);
      </div>
      <div className="absolute bottom-20 right-16 font-mono text-xs opacity-50 animate-float" style={{
        color: isDarkMode ? '#38bdf8' : '#60a5fa'
      }}>
        const value = premium;
      </div>
      <div className="absolute top-60 left-1/3 font-mono text-xs opacity-45 animate-bounce" style={{
        color: isDarkMode ? '#3b82f6' : '#2563eb'
      }}>
        {'{'}sticky: smooth{'}'}
      </div>

      <div className="max-w-screen-xl mx-auto px-6 pt-0 mb-24 relative z-10">
        
        {/* Carousel Container */}
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left sticky float image with tech styling */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing backdrop */}
              <div className={`absolute inset-0 rounded-3xl blur-3xl ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-blue-500/20 to-blue-600/20' 
                  : 'bg-gradient-to-r from-blue-400/20 to-blue-500/20'
              }`}></div>
              
              {/* Tech frame border */}
              <div className={`relative p-4 rounded-3xl backdrop-blur-sm border ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-white/10' 
                  : 'bg-gradient-to-r from-blue-400/10 to-blue-500/10 border-blue-300/30'
              }`}>
                <img
                  src={float2 || ""}
                  alt=""
                  className="w-[250px] md:w-[280px] lg:w-[300px] relative z-10 animate-float rounded-2xl"
                />
                {/* Overlay effects */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              </div>

              {/* Floating tech elements around image */}
              <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-lg animate-spin-slow ${
                isDarkMode 
                  ? 'border-2 border-blue-400/30' 
                  : 'border-2 border-blue-300/40'
              }`}></div>
              <div className={`absolute -bottom-4 -right-4 w-10 h-10 rounded-full animate-pulse ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-blue-500/40 to-blue-600/40' 
                  : 'bg-gradient-to-r from-blue-400/40 to-blue-500/40'
              }`}></div>
            </div>
          </div>

          {/* Right Carousel Section */}
          <div className="w-full lg:w-2/3 relative">
            
            {/* Carousel Container */}
            <div 
              className={`relative overflow-hidden rounded-3xl backdrop-blur-xl border ${
                isDarkMode 
                  ? 'bg-white/5 border-white/10' 
                  : 'bg-white/10 border-blue-300/30'
              }`}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              
              {/* Cards Container */}
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {whyCards.map((card, index) => (
                  <div
                    key={index}
                    className={`min-w-full relative ${
                      isDarkMode 
                        ? 'bg-gradient-to-br from-white/10 to-white/5' 
                        : 'bg-gradient-to-br from-white/20 to-white/10'
                    }`}
                  >
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-3xl ${
                      isDarkMode 
                        ? 'bg-gradient-to-r from-blue-500/5 to-blue-600/5' 
                        : 'bg-gradient-to-r from-blue-400/5 to-blue-500/5'
                    }`}></div>
                    
                    {/* Card number indicator */}
                    <div className={`absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg z-20 ${
                      isDarkMode 
                        ? 'bg-gradient-to-r from-blue-400 to-blue-500' 
                        : 'bg-gradient-to-r from-blue-500 to-blue-600'
                    }`}>
                      {index + 1}
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 md:p-12 relative z-10">
                      {/* Icon section with tech styling */}
                      <div className="w-full md:w-2/5 relative">
                        <div className={`relative p-6 rounded-3xl backdrop-blur-sm border ${
                          isDarkMode 
                            ? 'bg-gradient-to-br from-white/15 to-white/5 border-white/10' 
                            : 'bg-gradient-to-br from-white/20 to-white/10 border-blue-300/30'
                        }`}>
                          <img 
                            src={card.icon} 
                            alt="" 
                            className="w-full h-auto object-contain filter drop-shadow-2xl transform hover:scale-105 transition-transform duration-500" 
                          />
                          {/* Icon glow effect */}
                          <div className={`absolute inset-0 rounded-3xl ${
                            isDarkMode 
                              ? 'bg-gradient-to-br from-blue-400/10 to-blue-500/10' 
                              : 'bg-gradient-to-br from-blue-300/10 to-blue-400/10'
                          }`}></div>
                        </div>
                      </div>

                      {/* Content section */}
                      <div className="w-full relative">
                        <h2 className={`text-3xl lg:text-4xl font-bold leading-tight mb-6 ${
                          isDarkMode ? 'text-white' : 'text-white'
                        }`}>
                          {card.title}
                        </h2>
                        <p className={`text-lg lg:text-xl leading-relaxed ${
                          isDarkMode ? 'text-gray-300' : 'text-blue-100'
                        }`}>
                          {card.description}
                        </p>
                        
                        {/* Progress indicator */}
                        <div className={`mt-8 w-full rounded-full h-2 ${
                          isDarkMode ? 'bg-white/10' : 'bg-white/20'
                        }`}>
                          <div 
                            className={`h-2 rounded-full transition-all duration-1000 ${
                              isDarkMode 
                                ? 'bg-gradient-to-r from-blue-400 to-blue-500' 
                                : 'bg-gradient-to-r from-blue-300 to-blue-400'
                            }`} 
                            style={{ width: `${((index + 1) / whyCards.length) * 100}%` }}
                          ></div>
                        </div>

                        {/* Floating tech indicator */}
                        <div className={`absolute -right-2 top-2 w-4 h-4 rounded-full animate-pulse opacity-80 ${
                          isDarkMode ? 'bg-blue-400' : 'bg-blue-300'
                        }`}></div>
                      </div>
                    </div>

                    {/* Bottom tech line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-px ${
                      isDarkMode 
                        ? 'bg-gradient-to-r from-transparent via-blue-400/50 to-transparent' 
                        : 'bg-gradient-to-r from-transparent via-blue-300/50 to-transparent'
                    }`}></div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 ${
                  isDarkMode 
                    ? 'bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300' 
                    : 'bg-white/20 hover:bg-white/30 border border-blue-300/30 text-white hover:text-blue-200'
                }`}
              >
                <FaCircleChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextSlide}
                className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 ${
                  isDarkMode 
                    ? 'bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300' 
                    : 'bg-white/20 hover:bg-white/30 border border-blue-300/30 text-white hover:text-blue-200'
                }`}
              >
                <FaCircleChevronRight size={24} />
              </button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-8 gap-3">
              {whyCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? `w-8 ${
                          isDarkMode 
                            ? 'bg-gradient-to-r from-blue-400 to-blue-500' 
                            : 'bg-gradient-to-r from-blue-300 to-blue-400'
                        }`
                      : `w-3 ${
                          isDarkMode ? 'bg-white/30 hover:bg-white/50' : 'bg-white/40 hover:bg-white/60'
                        }`
                  }`}
                />
              ))}
            </div>

            {/* Auto-play indicator */}
            <div className={`absolute top-4 left-4 flex items-center gap-2 text-sm cursor-pointer ${
              isDarkMode ? 'text-white/60' : 'text-white/70'
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                isAutoPlaying 
                  ? `animate-pulse ${isDarkMode ? 'bg-blue-400' : 'bg-blue-300'}` 
                  : isDarkMode ? 'bg-gray-400' : 'bg-white/50'
              }`}></div>
              {isAutoPlaying ? 'Auto-play' : 'Paused'}
            </div>
          </div>
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className={`absolute top-1/4 left-8 w-16 h-16 rounded-full animate-spin-slow hidden lg:block ${
        isDarkMode 
          ? 'border-2 border-blue-400/20' 
          : 'border-2 border-blue-300/30'
      }`}></div>
      <div className={`absolute bottom-1/4 right-8 w-20 h-20 rounded-lg animate-pulse hidden lg:block ${
        isDarkMode 
          ? 'bg-gradient-to-r from-blue-500/10 to-blue-600/10' 
          : 'bg-gradient-to-r from-blue-400/20 to-blue-500/20'
      }`}></div>
      <div className={`absolute top-1/2 left-1/4 w-4 h-4 rounded-full animate-bounce hidden lg:block ${
        isDarkMode 
          ? 'bg-blue-400/30' 
          : 'bg-blue-300/40'
      }`}></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes blink-plus {
          0%, 50% { opacity: 0.3; }
          51%, 100% { opacity: 1; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-blink-plus {
          animation: blink-plus 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SmoothCarousel;