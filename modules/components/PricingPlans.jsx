
"use client";
import React, { useEffect, useState } from "react";
import { BuyPerktify } from "@/lib/actions";
import { useTheme } from '@/app/contexts/ThemeContext';

const PricingPlans = ({ pricingCards }) => {
  const { isDarkMode } = useTheme();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleSelectPackage = (pkg) => {
    setSelectedPackage(pkg);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPopup]);

  return (
    <section 
      id="buysubscription" 
      className={`py-20 ${isDarkMode ? 'bg-[#0a0a0a]' : 'bg-blue-50'}`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`font-semibold text-lg mb-2 block ${
            isDarkMode ? 'text-white' : 'text-blue-900'
          }`}>
            Purchase Lifetime Deal With One Payment
          </span>
          <h2 className={`text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
            isDarkMode ? 'text-white' : 'text-blue-900'
          }`}>
            Grab Our Limited-Time Lifetime Deal
          </h2>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-6xl mx-auto">
          {pricingCards.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer w-full max-w-sm flex flex-col group ${
                isDarkMode 
                  ? 'bg-[#111111] border border-gray-800 hover:border-blue-500 hover:shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]' 
                  : 'bg-white border border-blue-200 hover:border-blue-400 hover:shadow-[0_0_15px_-3px_rgba(59,130,246,0.2)]'
              }`}
            >
              {/* Blue glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute inset-0 rounded-2xl blur-md filter opacity-20 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                    : 'bg-gradient-to-r from-blue-400 to-blue-500'
                }`}></div>
              </div>

              <div className="p-8 flex flex-col h-full relative z-0">
                <div className="text-center mb-6">
                  <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold mb-3 ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                      : 'bg-gradient-to-r from-blue-400 to-blue-500 text-white'
                  }`}>
                    {item.title}
                  </div>
                  <span className={`block text-sm mb-4 ${
                    isDarkMode ? 'text-gray-400' : 'text-blue-700'
                  }`}>
                    {item.duration} billing
                  </span>
                  <h2 className={`text-3xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-blue-900'
                  }`}>
                    <sup className="text-lg">$</sup>
                    {item.price}
                  </h2>
                  <p className={`mt-2 ${
                    isDarkMode ? 'text-gray-400' : 'text-blue-700'
                  }`}>{item.subTitle}</p>
                </div>
                
                <ul className="space-y-3 text-left mb-8 flex-1">
                  {item.KeyPoints.map((point, i) => (
                    <li key={i} className={`flex items-start ${
                      isDarkMode ? 'text-gray-300' : 'text-blue-900'
                    }`}>
                      <svg
                        className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => handleSelectPackage(item)}
                  className={`w-full py-3 font-semibold text-white rounded-lg transition mt-auto ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' 
                      : 'bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600'
                  }`}
                >
                  Choose Package
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{
            backgroundColor: isDarkMode ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.5)'
          }}>
            <div className={`w-full max-w-2xl rounded-xl shadow-xl p-8 relative ${
              isDarkMode 
                ? 'bg-[#111111] border border-gray-800' 
                : 'bg-white border border-blue-200'
            }`}>
              <button
                onClick={closePopup}
                className={`absolute top-6 right-6 ${
                  isDarkMode ? 'text-gray-400 hover:text-white' : 'text-blue-500 hover:text-blue-700'
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h3 className={`text-2xl font-bold text-center mb-6 capitalize ${
                isDarkMode ? 'text-white' : 'text-blue-900'
              }`}>
                {selectedPackage?.title} Plan
              </h3>
              <form action={BuyPerktify}>
                <input
                  type="hidden"
                  name="pricingPackageId"
                  value={selectedPackage?.$id || ""}
                />
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-[#0a0a0a] border border-gray-700 text-white' 
                        : 'bg-blue-50 border border-blue-200 text-blue-900'
                    }`}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-[#0a0a0a] border border-gray-700 text-white' 
                        : 'bg-blue-50 border border-blue-200 text-blue-900'
                    }`}
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    name="company"
                    placeholder="Enter your company"
                    className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-[#0a0a0a] border border-gray-700 text-white' 
                        : 'bg-blue-50 border border-blue-200 text-blue-900'
                    }`}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full py-3 text-white font-semibold rounded-lg transition ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' 
                      : 'bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600'
                  }`}
                >
                  Purchase
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingPlans;