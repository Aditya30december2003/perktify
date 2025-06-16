// components/ClientLegalContent.jsx
'use client';

import { FaHome } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import PdfFile from "@/modules/components/PdfFile";
import { useState } from "react";

const ClientLegalContent = ({ data }) => {
  const { LegalTitle, image, ContentTitle, Content, pdf_file_id } = data;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-gray-900 min-h-screen pt-20">
      {/* Hero Section */}
      <div
        className="w-full py-16 md:py-24 relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(8, 15, 40, 0.9), rgba(8, 15, 40, 0.9)), url(${image})`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {LegalTitle || "Privacy Policy"}
            </h1>

            <nav className="flex items-center justify-center text-blue-300 text-sm md:text-base">
              <a href="/" className="flex items-center hover:text-white transition-colors">
                <FaHome className="mr-2" />
                Home
              </a>
              <MdOutlineKeyboardArrowRight className="mx-2" />
              <a href="/legals" className="hover:text-white transition-colors">
                Legals
              </a>
              <MdOutlineKeyboardArrowRight className="mx-2" />
              <span className="text-white">{LegalTitle}</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-12">
            {ContentTitle?.map((title, index) => (
              <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex justify-between items-center bg-gray-800 hover:bg-gray-750 transition-colors"
                >
                  <h3 className="text-lg font-medium text-white text-left">{title}</h3>
                  <svg
                    className={`w-5 h-5 text-blue-400 transform transition-transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-screen py-4" : "max-h-0"
                  }`}
                >
                  <div className="pb-4 text-gray-300">
                    <p>{Content[index]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {pdf_file_id && (
  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h3 className="text-xl font-semibold text-white mb-1">Document Download</h3>
        <p className="text-gray-400 text-sm">Access the full document in PDF format</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <PdfFile 
          fileId={pdf_file_id} 
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
          </svg>
          Download PDF
        </PdfFile>
        
        <button 
          onClick={() => window.open(`/api/pdf-viewer?id=${pdf_file_id}`, '_blank')}
          className="px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
          </svg>
          Preview
        </button>
      </div>
    </div>
    
    <div className="mt-4 pt-4 border-t border-gray-700">
      <div className="flex items-center text-sm text-gray-400">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
        <span>File size: 2.4MB • Last updated: {new Date().toLocaleDateString()}</span>
      </div>
    </div>
  </div>
)}
        </div>
      </main>

      <div className="pb-20"></div>
    </div>
  );
};

export default ClientLegalContent;
