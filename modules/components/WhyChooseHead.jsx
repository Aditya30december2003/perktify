// "use client";
// import React from "react";

// const WhyChooseHead = ({ WhyHead }) => {
//   const { floatHead, backgroundHead, float1, float2, float3 } = WhyHead;
//   return (
//     <section className="overflow-hidden py-0 pb-0 h-[50vh] md:h-auto">
//       {/* Decorative floats */}
//       <img
//         src={float1}
//         alt=""
//         className="hidden sm:block absolute top-[150px] left-[150px] w-[140px] animate-spin-slow"
//         data-bottom-top="transform: rotate(-50deg) translateY(-50px)"
//         data-top-bottom="transform: rotate(10deg) translateY(50px)"
//       />
//       <img
//         src={float3}
//         alt=""
//         className="hidden sm:block bottom-[150px] right-[150px] w-[120px] animate-spin-slow"
//         data-bottom-top="transform: rotate(-10deg) translateX(-80px)"
//         data-top-bottom="transform: rotate(10deg) translateX(80px)"
//       />

//       {/* Background Head Text */}
//       <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center pointer-events-none">
//         <span className="text-[3rem] lg:text-[5rem] font-semibold leading-none text-gray-300 opacity-30 select-none">
//           {backgroundHead}
//         </span>
//       </div>

//       <div className="container mx-auto px-6 relative">
//         <div className="flex justify-center items-center">
//           {/* (Optionally render the middle float image) */}
//           {/* <img
//             src={float2}
//             alt=""
//             className="hidden sm:block w-[200px] md:w-[250px] lg:w-[300px] mx-auto relative z-10"
//             data-bottom-top="transform: translateX(-250px)"
//             data-top-bottom="transform: translateX(250px)"
//           /> */}
//         </div>

//         {/* Scrolling marquee text */}
//         <div className="absolute top-[120px] left-[-150px] whitespace-nowrap text-[2.5rem] lg:text-[4rem] font-semibold text-gray-800 animate-marquee">
//           {floatHead}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseHead;
"use client";
import React from "react";

const WhyChooseHead = ({ WhyHead }) => {
  const { floatHead, backgroundHead, float1, float2, float3 } = WhyHead;

  return (
    <section className="relative w-full bg-black py-20 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 animate-pulse animate-blink-plus" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute top-16 left-16 text-blue-200 font-mono text-xs opacity-50 animate-float">
        const quality = true;
      </div>
      <div className="absolute top-32 right-20 text-cyan-200 font-mono text-xs opacity-45 animate-bounce">
        service.excellence();
      </div>
      <div className="absolute bottom-32 left-24 text-purple-200 font-mono text-xs opacity-40 animate-pulse">
        {'{'}"trusted": "worldwide"{'}'}
      </div>
      <div className="absolute bottom-16 right-16 text-green-200 font-mono text-xs opacity-50 animate-float">
        return bestChoice;
      </div>

      {/* Decorative Dashboard Cards */}
      <div className="absolute top-12 left-12 hidden lg:block">
        <div className="w-72 h-40 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300 text-sm font-medium">System Status</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400 text-xs">Performance</span>
              <span className="text-cyan-300 text-xs">99.9%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-1">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-1 rounded-full w-[99%]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 hidden lg:block">
        <div className="w-64 h-36 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-4 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <span className="text-gray-300 text-sm font-medium">Analytics</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">2.4M+</div>
          <div className="text-gray-400 text-xs">Happy Customers</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Subtitle with glow effect */}
        <div className="relative mb-6">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 relative">
            Why Choose Us
            <div className="absolute inset-0 blur-sm bg-gradient-to-r from-cyan-400 to-blue-400 opacity-30"></div>
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-400">
            Experience Excellence
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-white">
            That Drives Success
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
          We combine cutting-edge technology with unmatched expertise to deliver solutions that transform your business and exceed expectations.
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="group p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-cyan-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
              99.9%
            </div>
            <div className="text-gray-300 font-medium">Uptime Guarantee</div>
          </div>
          
          <div className="group p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-cyan-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
              24/7
            </div>
            <div className="text-gray-300 font-medium">Expert Support</div>
          </div>
          
          <div className="group p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-cyan-400/50 transition-all duration-300">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
              2M+
            </div>
            <div className="text-gray-300 font-medium">Satisfied Clients</div>
          </div>
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-8 w-20 h-20 border-2 border-cyan-400/20 rounded-full animate-spin-slow hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-8 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg animate-pulse hidden lg:block"></div>

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

export default WhyChooseHead;