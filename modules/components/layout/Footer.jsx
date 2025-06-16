// import React from "react";

// const Footer = ({ footerData }) => {
//   const {
//     footerPara,
//     address,
//     phone,
//     bottomText,
//     infoMail,
//     salesMail,
//     facebook,
//     linkedin,
//     twitter,
//     instagram,
//   } = footerData;
//   return (
//     <>
//       {/* start footer */}
//       <footer
//         // style={{ backgroundImage: "url('/demo-hosting-footer-bg.jpg')" }}
//         className="pb-0 cover-background background-position-left-top footerGradient "
//       >
//         <div className="">
//           <div
//             className="row justify-content-between sm-mb-40px maxWidth-Full"
//             // style={{ maxWidth: "100%", width: "95%", margin: "0 auto" }}
//           >
//             <div className="d-none d-lg-flex col-12 col-md-6 col-lg-2 mb-4">
//               <div
//                 className=" d-flex justify-content-center align-items-center border bg-white rounded-circle overflow-hidden"
//                 style={{ aspectRatio: "1/1", height: "200px" }}
//               >
//                 <img
//                   src="/logoblack.png"
//                   className="mt-4"
//                   style={{
//                     objectFit: "contain",
//                     width: "70%",
//                     height: "70%",
//                   }}
//                   alt="Logo"
//                 />
//               </div>
//             </div>

//             {/* Footer Column 4 (Dummy content) */}
//             <div className="col-12 col-md-6 col-lg-2 mb-4">
//               <a href="/legals" className="fs-17 fw-500 d-block text-white mb-5px text-center">
//                 Legals
//               </a>
//               <ul className="text-white lh-22 list-unstyled text-center d-flex flex-column gap-2">
//                 <li>
//                   <a href="/legals/privacy">Privacy Policy</a>
//                 </li>
//                 <li>
//                   <a href="/legals/cookies">Cookie Policy</a>
//                 </li>
//                 <li>
//                   <a href="/legals/use">Terms of use</a>
//                 </li>
//                 <li>
//                   <a href="/legals/terms">Terms & conditions</a>
//                 </li>
//               </ul>
//             </div>

//             <div className="col-12 col-md-6 col-lg-2 mb-4 d-flex flex-column gap-3 align-items-center">
//               <span className="fs-17 fw-500 d-block text-white mb-5px">
//                 Let's Connect
//               </span>
//               <a
//                 href="mailto:info@sapriseconsultancy.com"
//                 className="text-white/60 lh-22 d-inline-block mb-10px"
//               >
//                 {infoMail || ""}
//               </a>
//               <a
//                 href="mailto:sales@sapriseconsultancy.com"
//                 className="text-white/60 lh-22 d-inline-block mb-20px"
//               >
//                 {salesMail || ""}
//               </a>
//               <span className="text-white text-center">Phone No</span>
//               <div className="text-white lh-22 d-inline-flex">
//                 {phone || ""}
//               </div>
//             </div>

//             <div className="col-12 col-md-6 col-lg-2 mb-4 text-center">
//               <p className=" text-center fs-5 mb-1 text-white">
//                 Where to Find Us
//               </p>
//               <span className="fs-17 fw-500 d-block text-center text-white mb-5px mt-3 mb-1">
//                 City of London
//               </span>
//               <div className="text-white d-inline-flex text-center">
//                 {address || ""}
//               </div>
//             </div>

//             <div className=" d-flex flex-column  col-12 col-md-6 col-lg-2 mb-4">
//               <p className=" text-center fs-4 mb-1 text-white">Get In touch</p>
//               <div className="d-flex justify-content-center elements-social social-icon-style-02 mt-10px xs-mt-15px">
//                 <ul className="small-icon light">
//                   <li className="my-0">
//                     <a className="facebook" href={facebook} target="_blank">
//                       <i className="fa-brands fa-facebook-f " />
//                     </a>
//                   </li>
//                   <li className="my-0">
//                     <a className="linkedin" href={linkedin} target="_blank">
//                       <i className="fa-brands fa-linkedin-in " />
//                     </a>
//                   </li>
//                   <li className="my-0">
//                     <a className="twitter" href={twitter} target="_blank">
//                       <i className="fa-brands fa-twitter " />
//                     </a>
//                   </li>
//                   <li className="my-0">
//                     <a className="instagram" href={instagram} target="_blank">
//                       <i className="fa-brands fa-instagram " />
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="fs-8 text-white">
//                 <p className="mb-1 text-center ">Phone No</p>
//                 <p className="text-center  mb-1">{phone || ""}</p>
//               </div>
//               <div className="text-white">
//                 <p className="mb-1 text-center">Email</p>
//                 <p className="text-center mb-1"> {infoMail || ""}</p>
//               </div>
//             </div>
//           </div>

//           <div className="border-top border-black py-3 text-center">
//             <span className="fs-6 w-60 lg-w-70 md-w-100 d-block mx-auto lh-22 text-white">
//               {`©${new Date().getFullYear()} - Designed by `}
//               <a href="https://techistlab.co.uk" target="_blank">
//                 {bottomText || ""}
//               </a>
//             </span>
//           </div>
//         </div>
//       </footer>
//       {/* end footer */}
//     </>
//   );
// };

// export default Footer;

import React from "react";

const Footer = ({ footerData }) => {
  const {
    footerPara,
    address,
    phone,
    bottomText,
    infoMail,
    salesMail,
    facebook,
    linkedin,
    twitter,
    instagram,
  } = footerData;

  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Legals Section */}
          <div className="mb-8">
            <a href='/legals' className="text-blue-400 text-lg font-semibold mb-4 tracking-wider cursor-pointer">
              Legals
            </a>
            <ul className="space-y-2">
              <li>
                <a href="/legals/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/legals/cookies" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/legals/use" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="/legals/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Terms & conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="mb-8">
            <h3 className="text-blue-400 text-lg font-semibold mb-4 tracking-wider">
              Let's Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <a href={`mailto:${infoMail}`} className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                  {infoMail || "Info Email"}
                </a>
              </li>
              <li>
                <a href={`mailto:${salesMail}`} className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                  {salesMail || "Sales Email"}
                </a>
              </li>
              <li className="text-gray-400 text-sm">
                {phone || "Phone Number"}
              </li>
            </ul>
          </div>

          {/* Location Section */}
          <div className="mb-8">
            <h3 className="text-blue-400 text-lg font-semibold mb-4 tracking-wider">
              Where to Find Us
            </h3>
            <p className="text-gray-400 text-sm mb-2">City of London</p>
            <p className="text-gray-400 text-sm">{address}</p>
          </div>

          {/* Social Media Section */}
          <div className="mb-8">
            <h3 className="text-blue-400 text-lg font-semibold mb-4 tracking-wider">
              Get In Touch
            </h3>
            <div className="flex space-x-4 mb-4">
              {facebook && (
                <a href={facebook} className="text-gray-400 hover:text-blue-400">
                  <i className="fab fa-facebook-f text-lg"></i>
                </a>
              )}
              {linkedin && (
                <a href={linkedin} className="text-gray-400 hover:text-blue-400">
                  <i className="fab fa-linkedin-in text-lg"></i>
                </a>
              )}
              {twitter && (
                <a href={twitter} className="text-gray-400 hover:text-blue-400">
                  <i className="fab fa-twitter text-lg"></i>
                </a>
              )}
              {instagram && (
                <a href={instagram} className="text-gray-400 hover:text-blue-400">
                  <i className="fab fa-instagram text-lg"></i>
                </a>
              )}
            </div>
            <p className="text-gray-400 text-sm mb-1">Phone No: {phone}</p>
            <p className="text-gray-400 text-sm">Email: {infoMail}</p>
          </div>

          {/* Logo Section */}
          <div className="">
            <div className="bg-blue-700 w-full rounded-full">
              <img
                src="/logo.png"
                className="p-12 "
                alt="Logo"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              {`©${new Date().getFullYear()} - Designed by `}
              <a href="https://techistlab.co.uk" className="text-blue-400 hover:underline">
                {bottomText}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
