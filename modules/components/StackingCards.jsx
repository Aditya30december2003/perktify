"use client"
import React, { useState, useEffect } from "react";
import { FaCircleChevronLeft,FaCircleChevronRight } from "react-icons/fa6";
const SmoothCarousel = ({ whyCards, WhyHead }) => {
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
    <section className="relative w-full bg-black py-20 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 animate-pulse animate-blink-plus" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute top-20 left-16 text-blue-200 font-mono text-xs opacity-50 animate-float">
        features.map(f {'=>'} benefit)
      </div>
      <div className="absolute top-40 right-20 text-cyan-200 font-mono text-xs opacity-45 animate-bounce">
        stack.push(innovation);
      </div>
      <div className="absolute bottom-40 left-24 text-purple-200 font-mono text-xs opacity-40 animate-pulse">
        cards.forEach(reveal);
      </div>
      <div className="absolute bottom-20 right-16 text-green-200 font-mono text-xs opacity-50 animate-float">
        const value = premium;
      </div>
      <div className="absolute top-60 left-1/3 text-pink-200 font-mono text-xs opacity-45 animate-bounce">
        {'{'}sticky: smooth{'}'}
      </div>

      <div className="max-w-screen-xl mx-auto px-6 pt-0 mb-24 relative z-10">
        
        {/* Carousel Container */}
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left sticky float image with tech styling */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing backdrop */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
              
              {/* Tech frame border */}
              <div className="relative p-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-3xl backdrop-blur-sm border border-white/10">
                <img
                  src={float2 || ""}
                  alt=""
                  className="w-[250px] md:w-[280px] lg:w-[300px] relative z-10 animate-float rounded-2xl"
                />
                {/* Overlay effects */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>

              {/* Floating tech elements around image */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-2 border-cyan-400/30 rounded-lg animate-spin-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Right Carousel Section */}
          <div className="w-full lg:w-2/3 relative">
            
            {/* Carousel Container */}
            <div 
              className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
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
                    className="min-w-full relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl"
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-3xl"></div>
                    
                    {/* Card number indicator */}
                    <div className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg z-20">
                      {index + 1}
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 md:p-12 relative z-10">
                      {/* Icon section with tech styling */}
                      <div className="w-full md:w-2/5 relative">
                        <div className="relative p-6 bg-gradient-to-br from-white/15 to-white/5 rounded-3xl backdrop-blur-sm border border-white/10">
                          <img 
                            src={card.icon} 
                            alt="" 
                            className="w-full h-auto object-contain filter drop-shadow-2xl transform hover:scale-105 transition-transform duration-500" 
                          />
                          {/* Icon glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-3xl"></div>
                        </div>
                      </div>

                      {/* Content section */}
                      <div className="w-full relative">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                          {card.title}
                        </h2>
                        <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
                          {card.description}
                        </p>
                        
                        {/* Progress indicator */}
                        <div className="mt-8 w-full bg-white/10 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000" 
                            style={{ width: `${((index + 1) / whyCards.length) * 100}%` }}
                          ></div>
                        </div>

                        {/* Floating tech indicator */}
                        <div className="absolute -right-2 top-2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse opacity-80"></div>
                      </div>
                    </div>

                    {/* Bottom tech line */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:text-cyan-300 transition-all duration-300 hover:scale-110 z-20"
              >
                <FaCircleChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:text-cyan-300 transition-all duration-300 hover:scale-110 z-20"
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Auto-play indicator */}
            <div className="absolute top-4 left-4 flex items-center gap-2 text-white/60 text-sm cursor-pointer">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
              {isAutoPlaying ? 'Auto-play' : 'Paused'}
            </div>
          </div>
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-8 w-16 h-16 border-2 border-cyan-400/20 rounded-full animate-spin-slow hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-8 w-20 h-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg animate-pulse hidden lg:block"></div>
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-cyan-400/30 rounded-full animate-bounce hidden lg:block"></div>

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