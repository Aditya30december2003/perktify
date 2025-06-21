// components/BlogPost.jsx
'use client';

import Link from "next/link";

const BlogPost = ({ blogPost, RecentBlogs }) => {
  return (
    <section 
      className="relative min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0e1419 100%)',
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
        }}
      />

      {/* Floating Geometric Shapes */}
      <div className="top-10 left-10 animate-pulse">
        <div className="w-16 h-16 border-2 border-blue-700 rotate-45 opacity-20"></div>
      </div>
      <div className="absolute top-32 right-20 animate-pulse delay-150  mt-[10rem] bg-yellow-900">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full opacity-15"></div>
      </div>

      {/* Main Content */}
      <div className="relative pb-16 my-32">
        <div className="max-w-4xl mx-auto px-4">
          {/* Blog Post Card */}
          <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-800/50 shadow-2xl">
            {/* Blog Thumbnail */}
            <div className="relative overflow-hidden">
              {blogPost.thumbnail?<img
                src={blogPost.thumbnail}
                alt={blogPost.title}
                className="w-full h-96 object-cover"
              />: <img src="/placeholder-image.webp" alt='TITLE'/>}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Back Button */}
              <div className="absolute top-6 left-6">
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-sm text-white rounded-full border border-gray-700/50 hover:bg-black/80 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-sm font-medium">Back to Blog</span>
                </Link>
              </div>
            </div>

            {/* Blog Content */}
            <div className="p-8">
              {/* Blog Title */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                {blogPost.title}
              </h1>

              {/* Blog Author and Date */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-800/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-bold">
                      {blogPost.authorName?.charAt(0) || 'A'}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">By {blogPost.authorName}</p>
                    <p className="text-gray-400 text-sm">
                      Published on{" "}
                      {new Date(blogPost.$createdAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Blog Description */}
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {blogPost.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="relative py-16 border-t border-gray-800/30">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-6 py-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm text-blue-400 text-sm font-medium tracking-wider uppercase rounded-full border border-blue-500/30">
                You may also like
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Recent Posts
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto"></div>
          </div>

          {/* Recent Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {RecentBlogs &&
              RecentBlogs.slice(0, 6).map((blog, index) => (
                <div
                  key={blog.$id}
                  className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Card Header with Image */}
                  <div className="relative overflow-hidden">
                    <Link href={`/blogs/${blog.$id}`}>
                      <img
                        src={blog.thumbnail || "/placeholder-image.webp"}
                        alt={blog.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </Link>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-blue-500/30">
                        Article
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
                        <span className="text-gray-300">{blog.authorName}</span>
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

                    <h4 className="text-lg font-bold mb-4 text-white group-hover:text-blue-100 transition-colors duration-300 line-clamp-2 leading-tight">
                      <Link href={`/blogs/${blog.$id}`} className="hover:text-blue-300">
                        {blog.title}
                      </Link>
                    </h4>

                    <Link
                      href={`/blogs/${blog.$id}`}
                      className="group/link inline-flex items-center gap-2 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors duration-300"
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
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-600/10 to-transparent rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-600/10 to-transparent rounded-tr-full"></div>
                </div>
              ))}
          </div>

          {/* See All Blogs Button */}
          <div className="text-center">
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-full font-medium hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <span className="relative z-10">See All Blogs</span>
              <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
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

export default BlogPost;