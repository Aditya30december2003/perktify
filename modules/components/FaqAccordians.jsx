"use client";
import React, { useState } from "react";
import { useTheme } from '@/app/contexts/ThemeContext';

const FaqAccordians = ({ faqData }) => {
  const { isDarkMode } = useTheme();
  const categories = [...new Set(faqData.map(item => item.category))];
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFaqs = faqData.filter(item => item.category === activeCategory);

  return (
    <section id="faq" className={`py-16 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold sm:text-4xl ${
            isDarkMode ? 'text-white' : 'text-blue-900'
          }`}>
            Frequently Asked Questions
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-blue-800/80'
          }`}>
            Find answers to the most commonly asked questions below.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? `${
                      isDarkMode 
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" 
                        : "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                    }`
                  : `${
                      isDarkMode 
                        ? "bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-800" 
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                    }`
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* FAQ Accordions */}
        <div className="max-w-3xl mx-auto">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, index) => (
              <div 
                key={index} 
                className={`mb-4 rounded-xl overflow-hidden transition-all duration-300 ${
                  isDarkMode 
                    ? `${
                        openIndex === index 
                          ? "bg-gray-900 border border-gray-800 shadow-lg shadow-blue-900/20" 
                          : "bg-gray-900 border border-gray-800"
                      }`
                    : `${
                        openIndex === index 
                          ? "bg-gray-50 border border-gray-200 shadow-lg shadow-blue-200/20" 
                          : "bg-white border border-gray-200"
                      }`
                }`}
              >
                <button
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`text-lg font-medium ${
                    isDarkMode 
                      ? `${
                          openIndex === index ? "text-white" : "text-gray-300"
                        }`
                      : `${
                          openIndex === index ? "text-blue-900" : "text-gray-700"
                        }`
                  }`}>
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    } ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-500'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className={`px-6 pb-5 pt-0 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{item.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>No FAQs available for this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordians;