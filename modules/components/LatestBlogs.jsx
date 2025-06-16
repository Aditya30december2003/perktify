// import React from "react";
// import Link from "next/link";

// const LatestBlogs = ({ BlogCards }) => {
//   return (
//     <section
//       className="mt-6 pb-12 pt-6"
//       style={{ backgroundImage: `linear-gradient(0deg, #e6ceff, #ab46e6)` }}
//     >
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h2 className="text-white text-3xl font-bold">Latest Blogs</h2>
//           <p className="text-white mt-2">
//             Get the latest updates, tips & tricks from our experts.
//           </p>
//           <Link
//             href="/blogs"
//             className="inline-flex items-center gap-2 px-6 py-2 mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-medium hover:scale-105 transition-all duration-300"
//           >
//             <i className="bi bi-calendar-check"></i> See All Blogs
//           </Link>
//         </div>

//         {/* Blog Cards */}
//         <div className="flex flex-wrap justify-center gap-6">
//           {BlogCards.map((blog, index) => (
//             <div
//               key={blog.$id}
//               className="bg-white rounded-xl shadow-md overflow-hidden max-w-xs w-full transition-all hover:scale-105"
//             >
//               <Link href={`/blogs/${blog.$id}`}>
//                 <img
//                   src={blog.thumbnail || "/placeholder-image.webp"}
//                   alt={blog.title}
//                   className="w-full h-48 object-cover"
//                 />
//               </Link>
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold mb-1 text-gray-800 line-clamp-2">
//                   <Link href={`/blogs/${blog.$id}`}>{blog.title}</Link>
//                 </h3>
//                 <p className="text-sm text-gray-500 mb-2">
//                   {blog.authorName} •{" "}
//                   {new Date(blog.$createdAt).toLocaleDateString("en-GB", {
//                     day: "2-digit",
//                     month: "short",
//                     year: "numeric",
//                   })}
//                 </p>
//                 <Link
//                   href={`/blogs/${blog.$id}`}
//                   className="text-indigo-600 text-sm font-medium hover:underline" 
//                 >
//                   Read More...
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestBlogs;

'use client'

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LatestBlogs = ({ BlogCards }) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const circuitRef = useRef(null);

  useEffect(() => {
    // Animate the circuit lines
    gsap.fromTo(
      circuitRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
      }
    );

    // Animate cards on scroll
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { 
            y: 50, 
            opacity: 0, 
            scale: 0.9,
            rotateY: -15 
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'bottom 15%',
            },
          }
        );
      }
    });

    // Floating animation for geometric shapes
    gsap.to('.floating-shape', {
      y: -10,
      duration: 2,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.3,
    });

  }, [BlogCards]);

  return (
    <section
      id='blogs'
      ref={containerRef}
      className="relative py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0e1419 100%)',
      }}
    >
      {/* Circuit Pattern Background */}
      <div
        ref={circuitRef}
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #3b82f6 1px, transparent 1px),
            linear-gradient(180deg, #3b82f6 1px, transparent 1px),
            radial-gradient(circle at 20% 30%, #1e40af 2px, transparent 2px),
            radial-gradient(circle at 70% 20%, #3b82f6 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, #1e40af 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 100px 100px, 150px 150px, 200px 200px',
        }}
      />

      {/* Floating Geometric Shapes */}
      <div className="absolute top-10 left-10 floating-shape">
        <div className="w-20 h-20 border-2 border-blue-500 rotate-45 opacity-30"></div>
      </div>
      <div className="absolute top-32 right-20 floating-shape">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full opacity-20"></div>
      </div>
      <div className="absolute bottom-20 left-1/4 floating-shape">
        <div className="w-12 h-12 border-2 border-indigo-400 rounded-full opacity-25"></div>
      </div>
      <div className="absolute bottom-32 right-1/3 floating-shape">
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-30"></div>
      </div>

      {/* Header Section */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-block">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">
              Product Updates
            </span>
            <div className="w-8 h-1 bg-gradient-to-l from-blue-500 to-indigo-600"></div>
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
          Latest Insights & Updates
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Discover our latest product innovations, AI-powered features, and industry insights 
          that drive the future of digital experiences.
        </p>
        
        <Link
          href="/blogs"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-full font-medium hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          <span className="relative z-10">Explore All Updates</span>
          <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Blog Cards Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BlogCards.map((blog, index) => (
            <div
              key={blog.$id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-2"
            >
              {/* Card Header with Image */}
              <div className="relative overflow-hidden">
                <Link href={`/blogs/${blog.$id}`}>
                  <img
                    src={blog.thumbnail || '/placeholder-image.webp'}
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </Link>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-blue-500/30">
                    Product
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {blog.authorName?.charAt(0) || 'A'}
                      </span>
                    </div>
                    <span>{blog.authorName}</span>
                  </div>
                  <span>•</span>
                  <span>
                    {new Date(blog.$createdAt).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors duration-300 line-clamp-2 leading-tight">
                  <Link href={`/blogs/${blog.$id}`}>
                    {blog.title}
                  </Link>
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {blog.excerpt || "Discover the latest insights and innovations that are shaping the future of digital experiences and AI-powered solutions."}
                </p>

                <Link
                  href={`/blogs/${blog.$id}`}
                  className="group/link inline-flex items-center gap-2 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors duration-300"
                >
                  <span>Read Full Article</span>
                  <svg 
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-600/10 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-600/10 to-transparent rounded-tr-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="mt-16 flex justify-center">
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      </div>
    </section>
  );
};

export default LatestBlogs;