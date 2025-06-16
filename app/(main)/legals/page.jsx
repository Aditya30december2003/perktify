import { fetchData } from "@/appwrite/data";
import React from "react";

const Legals = async () => {
  const data = await fetchData();
  const legalData = data?.LegalsData ?? [];
  const filteredData = legalData.find((doc) => doc.id === "terms");

  //its for getting the heading, title and cover image for the legal page
  const { coverImage, Heading, subHeading } = filteredData;

  return (
    <section className="pt-0 bg-gray-900" style={{overflowX:"hidden"}}>
      {/* Hero Section */}
      <div 
        className="w-full py-32 position-relative"
        style={{
          backgroundImage: `linear-gradient(rgba(8, 15, 40, 0.9), rgba(8, 15, 40, 0.9)), url(${coverImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 text-center position-relative">
              <div className="d-flex flex-column justify-content-center">
                <h1 className="text-white alt-font font-bold text-4xl md:text-5xl mb-4">
                  {Heading || ""}
                </h1>
                <p className="text-white max-w-3xl mx-auto text-lg md:text-xl opacity-90">
                  {subHeading || ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {legalData && legalData.map((legal) => (
                  <div key={legal.$id} className="flex">
                    <div className="card bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full w-full">
                      <a href={`legals/${legal.link}`} className="block">
                        <img
                          src={legal.image || "placeholder-image.webp"}
                          alt="image"
                          className="w-full h-48 object-cover"
                        />
                      </a>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          <a
                            href={`legals/${legal.link}`}
                            className="text-white hover:text-blue-300 transition-colors"
                          >
                            {legal.LegalTitle}
                          </a>
                        </h3>
                        <div className="mt-auto pt-4">
                          <a 
                            href={`legals/${legal.link}`} 
                            className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center transition-colors"
                          >
                            Read more
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legals;