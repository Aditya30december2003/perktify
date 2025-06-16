// import React from "react";
// import FeatureSlider from "./FeatureSlider";

// const KeyFeatures = ({ headData, cardData }) => {
//   const { title, subTitle } = headData;

//   return (
//     <section className="bg-gradient-to-b from-[#e6ceff] to-[#ab46e6] py-16 w-full">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div
//           className="text-center mb-12"
//           data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 900, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
//         >
//           <span className="text-white text-sm uppercase tracking-widest block mb-2">
//             {subTitle || ""}
//           </span>
//           <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
//             {title || ""}
//           </h2>
//         </div>

//         {/* Feature Slider (or Grid, if needed) */}
//         <div>
//           <FeatureSlider cardData={cardData} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default KeyFeatures;
"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const KeyFeatures = ({ headData, cardData }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  // Special animation for center cards
  const centerItem = {
    hidden: { y: 80, opacity: 0, scale: 0.95 },
    show: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 80,
        mass: 1.5
      }
    },
    hover: {
      y: -15,
      transition: { 
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <section id="features" className="bg-black py-32 w-full overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 xl:px-24">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={container}
          className="text-center mb-28"
        >
          <motion.span variants={item} className="text-[#6b8cff] text-xs uppercase tracking-[0.3em] block mb-6">
            {headData?.subTitle || ""}
          </motion.span>
          <motion.h2 variants={item} className="text-white text-5xl md:text-6xl font-medium tracking-tight leading-[1.15]">
            {headData?.title || ""}
          </motion.h2>
        </motion.div>

        {/* Feature Grid - Custom layout for 5 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Top Row - 3 Cards */}
          {cardData?.slice(0, 3).map((card, index) => (
            <motion.div
              key={`top-${index}`}
              variants={item}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              whileHover={{ y: -10 }}
              className={`group relative ${index === 1 ? 'md:col-start-2 lg:col-start-auto' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-[#0a0a0a] rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute inset-0 border border-[#1e3a8a]/30 group-hover:border-[#3b82f6]/50 rounded-2xl pointer-events-none transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="relative h-full p-10 flex flex-col">
                <div className="mb-10 flex justify-center">
                  <div className="relative w-40 h-40 rounded-xl bg-[#111827] border border-[#1e3a8a]/30 group-hover:border-[#3b82f6]/50 transition-all duration-500 flex items-center justify-center overflow-hidden">
                    <motion.img
                      src={card.icon}
                      alt="icon"
                      className="w-28 h-28 object-contain"
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="inline-block px-4 py-1 bg-[#1e3a8a]/20 text-[#93c5fd] text-xs uppercase tracking-wider rounded-full mb-4 border border-[#1e3a8a]/30 group-hover:border-[#3b82f6]/50 transition-colors duration-300">
                    Coming soon
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-[#bfdbfe] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-[#93c5fd]/80 leading-relaxed group-hover:text-[#bfdbfe] transition-colors duration-300">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom Row - 2 Centered Cards - Now responsive for mobile */}
          <div className="md:col-span-2 lg:col-span-3 flex flex-col md:flex-row justify-center gap-8 mt-8">
            {cardData?.slice(3, 5).map((card, index) => (
              <motion.div
                key={`bottom-${index}`}
                variants={centerItem}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                whileHover="hover"
                className="group relative w-full md:w-1/2 lg:max-w-md"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-[#0a0a0a] rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/30">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                  <div className="absolute inset-0 border border-[#1e3a8a]/40 group-hover:border-[#3b82f6]/60 rounded-2xl pointer-events-none transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="relative h-full p-8 md:p-10 flex flex-col">
                  <div className="mb-6 md:mb-10 flex justify-center">
                    <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-xl bg-[#111827] border border-[#1e3a8a]/40 group-hover:border-[#3b82f6]/60 transition-all duration-500 flex items-center justify-center overflow-hidden">
                      <motion.img
                        src={card.icon}
                        alt="icon"
                        className="w-24 h-24 md:w-32 md:h-32 object-contain"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="inline-block px-4 py-1.5 bg-[#1e3a8a]/30 text-[#93c5fd] text-xs uppercase tracking-wider rounded-full mb-4 border border-[#1e3a8a]/40 group-hover:border-[#3b82f6]/60 transition-colors duration-300">
                      Coming soon
                    </div>
                    <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-[#bfdbfe] transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-[#93c5fd]/80 leading-relaxed group-hover:text-[#bfdbfe] transition-colors duration-300">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;