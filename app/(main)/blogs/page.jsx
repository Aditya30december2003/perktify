import { fetchData } from "@/appwrite/data";
import React from "react";
import Link from "next/link";

const BlogPage = async () => {
  const data = await fetchData();
  const blogHead = data?.blogPageData ?? {};
  const BlogCards = data?.blogCardsData ?? [];
  const { heading, paragraph, coverImage } = blogHead

  return (
    <section 
      className="relative pt-24 lg:pt-28 min-h-screen" // Increased padding-top and added min-height
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0e1419 100%)',
        zIndex: 1, // Ensure section is below header
      }}
    >
      {/* Circuit Pattern Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #3b82f6 1px, transparent 1px),
            linear-gradient(180deg, #3b82f6 1px, transparent 1px),
            radial-gradient(circle at 20% 30%, #1e40af 2px, transparent 2px),
            radial-gradient(circle at 70% 20%, #3b82f6 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, #1e40af 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 100px 100px, 150px 150px, 200px 200px',
          zIndex: -1,
        }}
      />

      {/* Floating Geometric Shapes */}
      <div className="absolute top-32 left-10 animate-pulse" style={{ zIndex: 2 }}>
        <div className="w-20 h-20 border-2 border-blue-500 rotate-45 opacity-20"></div>
      </div>
      <div className="absolute top-48 right-20 animate-pulse delay-150" style={{ zIndex: 2 }}>
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full opacity-15"></div>
      </div>
      <div className="absolute bottom-20 left-1/4 animate-pulse delay-300" style={{ zIndex: 2 }}>
        <div className="w-12 h-12 border-2 border-indigo-400 rounded-full opacity-20"></div>
      </div>

      {/* Hero Section */}
      <div 
        className="py-20 overflow-hidden relative z-10" // Added relative z-10
        style={{
          backgroundImage: coverImage ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${coverImage})` : 'none',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center relative z-20">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">
                Our Blog
              </span>
              <div className="w-8 h-1 bg-gradient-to-l from-blue-500 to-indigo-600"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent leading-tight">
            {heading || "Latest Insights & Updates"}
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            {paragraph || "Discover our latest product innovations, AI-powered features, and industry insights that drive the future of digital experiences."}
          </p>
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="relative py-16 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BlogCards &&
              BlogCards.map((blog, index) => (
                <div
                  key={blog.$id}
                  className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-2"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    zIndex: 5, // Ensure cards are properly layered
                  }}
                >
                  {/* Card Header with Image */}
                  <div className="relative overflow-hidden">
                    <Link href={`/blogs/${blog.$id}`}>
                      <img
                        src={blog.thumbnail || "/placeholder-image.webp"}
                        alt={blog.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy" // Added lazy loading
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </Link>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-blue-500/30">
                        Article
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 relative z-10">
                    <div className="flex items-center gap-3 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            {blog.authorName?.charAt(0) || 'A'}
                          </span>
                        </div>
                        <span className="text-gray-200 font-medium">{blog.authorName}</span>
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

                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors duration-300 line-clamp-2 leading-tight">
                      <Link href={`/blogs/${blog.$id}`} className="hover:text-blue-300">
                        {blog.title}
                      </Link>
                    </h3>

                    <Link
                      href={`/blogs/${blog.$id}`}
                      className="group/link inline-flex items-center gap-2 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors duration-300 mt-auto"
                    >
                      <span>Read More</span>
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
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-600/10 to-transparent rounded-bl-full pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-600/10 to-transparent rounded-tr-full pointer-events-none"></div>
                </div>
              ))}
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;