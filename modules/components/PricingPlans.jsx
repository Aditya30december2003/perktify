// "use client";
// import React, { useEffect, useState } from "react";
// import { BuyPerktify } from "@/lib/actions";

// const PricingPlans = ({ pricingCards }) => {
//   const [selectedPackage, setSelectedPackage] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);

//   // Handle package selection
//   const handleSelectPackage = (pkg) => {
//     setSelectedPackage(pkg);
//     setShowPopup(true); // Show the popup
//   };

//   // Close the popup
//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   // Disable scrolling when popup is visible
//   useEffect(() => {
//     if (showPopup) {
//       document.body.style.overflow = "hidden"; // Disable page scroll
//     } else {
//       document.body.style.overflow = "auto"; // Enable page scroll
//     }
//     // return () => {
//     //   document.body.style.overflow = "auto"; // Cleanup: Ensure scrolling is re-enabled when component unmounts
//     // };
//   }, [showPopup]);
//   return (
//    <section
//   id="buysubscription"
//   className="pt-10 pb-20 bg-gradient-to-b from-[#e6ceff] to-[#ab46e6]"
// >
//   <div className="container mx-auto px-4">
//     <div className="text-center max-w-2xl mx-auto mb-12">
//       <span className="text-white font-semibold text-lg mb-2 block">
//         Purchase Lifetime Deal With One Payment
//       </span>
//       <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
//         Grab Our Limited-Time Lifetime Deal
//       </h2>
//     </div>

//     <div className="flex flex-wrap justify-center gap-6">
//       {pricingCards.map((item, index) => (
//         <div
//           key={index}
//           className="bg-white rounded-2xl shadow-lg w-full max-w-sm p-6 hover:scale-105 transition-transform duration-300"
//         >
//           <div className="text-center mb-4">
//             <div className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-full text-sm font-bold mb-2">
//               {item.title}
//             </div>
//             <span className="block text-gray-500 capitalize text-sm mb-3">
//               {item.duration} billing
//             </span>
//             <h2 className="text-3xl font-bold text-gray-900">
//               <sup className="text-lg">$</sup>
//               {item.price}
//             </h2>
//             <p className="text-gray-600 mt-2">{item.subTitle}</p>
//           </div>
//           <ul className="space-y-2 text-left mb-6">
//             {item.KeyPoints.map((point, i) => (
//               <li key={i} className="flex items-center text-gray-700">
//                 <i className="fa fa-check-circle text-green-500 mr-2" />
//                 {point}
//               </li>
//             ))}
//           </ul>
//           <button
//             onClick={() => handleSelectPackage(item)}
//             className="w-full py-2 font-semibold text-white rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 hover:opacity-90 transition"
//           >
//             Choose Package
//           </button>
//         </div>
//       ))}
//     </div>

//     {/* Popup */}
//     {showPopup && (
//       <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4">
//         <div className="bg-white w-full max-w-2xl rounded-xl shadow-xl p-8 relative">
//           <button
//             onClick={closePopup}
//             className="absolute top-4 right-4 text-gray-500 hover:text-black"
//           >
//             <i className="fa fa-times text-xl" />
//           </button>
//           <h3 className="text-xl font-bold text-center mb-6 capitalize">
//             {selectedPackage?.title} Plan
//           </h3>
//           <form action={BuyPerktify}>
//             <input
//               type="hidden"
//               name="pricingPackageId"
//               value={selectedPackage?.$id || ""}
//             />
//             <div className="mb-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your name"
//                 className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 required
//               />
//             </div>
//             <div className="mb-6">
//               <input
//                 type="text"
//                 name="company"
//                 placeholder="Enter your company"
//                 className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full py-2 bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-semibold rounded-full hover:opacity-90 transition"
//             >
//               Purchase
//             </button>
//           </form>
//         </div>
//       </div>
//     )}
//   </div>
// </section>

//   );
// };

// export default PricingPlans;

"use client";
import React, { useEffect, useState } from "react";
import { BuyPerktify } from "@/lib/actions";

const PricingPlans = ({ pricingCards }) => {
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
    <section id="buysubscription" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-white font-semibold text-lg mb-2 block">
            Purchase Lifetime Deal With One Payment
          </span>
          <h2 className="text-white text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Grab Our Limited-Time Lifetime Deal
          </h2>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-6xl mx-auto">
          {pricingCards.map((item, index) => (
            <div
              key={index}
              className={`relative bg-[#111111] rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_-3px_rgba(99,102,241,0.3)] cursor-pointer w-full max-w-sm flex flex-col group`}
            >
              {/* Rainbow glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-md filter opacity-20"></div>
              </div>

              <div className="p-8 flex flex-col h-full relative z-0">
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-bold mb-3">
                    {item.title}
                  </div>
                  <span className="block text-gray-400 text-sm mb-4">
                    {item.duration} billing
                  </span>
                  <h2 className="text-3xl font-bold text-white">
                    <sup className="text-lg">$</sup>
                    {item.price}
                  </h2>
                  <p className="text-gray-400 mt-2">{item.subTitle}</p>
                </div>
                
                <ul className="space-y-3 text-left mb-8 flex-1">
                  {item.KeyPoints.map((point, i) => (
                    <li key={i} className="flex items-start text-gray-300">
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
                  className="w-full py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition mt-auto"
                >
                  Choose Package
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Popup - Styled to match dark theme */}
        {showPopup && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4">
            <div className="bg-[#111111] w-full max-w-2xl rounded-xl shadow-xl p-8 relative border border-gray-800">
              <button
                onClick={closePopup}
                className="absolute top-6 right-6 text-gray-400 hover:text-white"
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
              <h3 className="text-2xl font-bold text-center mb-6 text-white capitalize">
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
                    className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    name="company"
                    placeholder="Enter your company"
                    className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition"
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