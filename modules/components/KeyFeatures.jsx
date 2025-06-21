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
import { useTheme } from '@/app/contexts/ThemeContext';

const KeyFeatures = ({ headData, cardData }) => {
  const { isDarkMode } = useTheme();
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
    <section id="features" className={`py-32 w-full overflow-hidden ${
      isDarkMode ? 'bg-black' : 'bg-white'
    }`}>
      <div className="max-w-8xl mx-auto px-6 lg:px-12 xl:px-24">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={container}
          className="text-center mb-28"
        >
          <motion.span variants={item} className={`text-xs uppercase tracking-[0.3em] block mb-6 ${
            isDarkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            {headData?.subTitle || ""}
          </motion.span>
          <motion.h2 variants={item} className={`text-5xl md:text-6xl font-medium tracking-tight leading-[1.15] ${
            isDarkMode ? 'text-white' : 'text-blue-900'
          }`}>
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
              <div className={`absolute inset-0 rounded-2xl overflow-hidden shadow-2xl ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-blue-900/20 to-blue-900/10 shadow-blue-900/20' 
                  : 'bg-gradient-to-br from-blue-50 to-white shadow-blue-200/50'
              }`}>
                <div className={`absolute inset-0 border rounded-2xl pointer-events-none transition-all duration-500 ${
                  isDarkMode 
                    ? 'border-blue-800/30 group-hover:border-blue-500/50' 
                    : 'border-blue-200/50 group-hover:border-blue-400/70'
                }`}></div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${
                  isDarkMode ? 'from-blue-500' : 'from-blue-400'
                } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>

              <div className="relative h-full p-10 flex flex-col">
                <div className="mb-10 flex justify-center">
                  <div className={`relative w-40 h-40 rounded-xl border transition-all duration-500 flex items-center justify-center overflow-hidden ${
                    isDarkMode 
                      ? 'bg-blue-900/10 border-blue-800/30 group-hover:border-blue-500/50' 
                      : 'bg-white border-blue-200/50 group-hover:border-blue-400/70 shadow-sm'
                  }`}>
                    <motion.img
                      src={card.icon}
                      alt="icon"
                      className="w-28 h-28 object-contain"
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent ${
                      isDarkMode 
                        ? 'to-blue-900/10' 
                        : 'to-blue-100/30'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                </div>

                <div className="text-center">
                  <div className={`inline-block px-4 py-1 text-xs uppercase tracking-wider rounded-full mb-4 border transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-blue-900/20 text-blue-300 border-blue-800/30 group-hover:border-blue-500/50' 
                      : 'bg-blue-100/50 text-blue-700 border-blue-200/50 group-hover:border-blue-400/70'
                  }`}>
                    Coming soon
                  </div>
                  <h3 className={`text-2xl font-medium mb-4 transition-colors duration-300 ${
                    isDarkMode 
                      ? 'text-white group-hover:text-blue-300' 
                      : 'text-blue-900 group-hover:text-blue-700'
                  }`}>
                    {card.title}
                  </h3>
                  <p className={`leading-relaxed transition-colors duration-300 ${
                    isDarkMode 
                      ? 'text-blue-300/80 group-hover:text-blue-200' 
                      : 'text-blue-700/80 group-hover:text-blue-600'
                  }`}>
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom Row - 2 Centered Cards */}
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
                <div className={`absolute inset-0 rounded-2xl overflow-hidden shadow-2xl ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-blue-900/20 to-blue-900/10 shadow-blue-900/30' 
                    : 'bg-gradient-to-br from-blue-50 to-white shadow-blue-200/70'
                }`}>
                  <div className={`absolute inset-0 border rounded-2xl pointer-events-none transition-all duration-500 ${
                    isDarkMode 
                      ? 'border-blue-800/40 group-hover:border-blue-500/60' 
                      : 'border-blue-200/60 group-hover:border-blue-400/80'
                  }`}></div>
                  <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${
                    isDarkMode ? 'from-blue-400 to-blue-600' : 'from-blue-400 to-blue-600'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>

                <div className="relative h-full p-8 md:p-10 flex flex-col">
                  <div className="mb-6 md:mb-10 flex justify-center">
                    <div className={`relative w-32 h-32 md:w-44 md:h-44 rounded-xl border transition-all duration-500 flex items-center justify-center overflow-hidden ${
                      isDarkMode 
                        ? 'bg-blue-900/10 border-blue-800/40 group-hover:border-blue-500/60' 
                        : 'bg-white border-blue-200/60 group-hover:border-blue-400/80 shadow-sm'
                    }`}>
                      <motion.img
                        src={card.icon}
                        alt="icon"
                        className="w-24 h-24 md:w-32 md:h-32 object-contain"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent ${
                        isDarkMode 
                          ? 'to-blue-900/20' 
                          : 'to-blue-100/40'
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className={`inline-block px-4 py-1.5 text-xs uppercase tracking-wider rounded-full mb-4 border transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-blue-900/30 text-blue-300 border-blue-800/40 group-hover:border-blue-500/60' 
                        : 'bg-blue-100/60 text-blue-700 border-blue-200/60 group-hover:border-blue-400/80'
                    }`}>
                      Coming soon
                    </div>
                    <h3 className={`text-2xl font-medium mb-4 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'text-white group-hover:text-blue-300' 
                        : 'text-blue-900 group-hover:text-blue-700'
                    }`}>
                      {card.title}
                    </h3>
                    <p className={`leading-relaxed transition-colors duration-300 ${
                      isDarkMode 
                        ? 'text-blue-300/80 group-hover:text-blue-200' 
                        : 'text-blue-700/80 group-hover:text-blue-600'
                    }`}>
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