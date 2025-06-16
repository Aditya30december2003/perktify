import React from 'react';

const StickyElements = ({ linksUrl }) => {
  const { facebook, instagram, linkedin, twitter } = linksUrl;

  return (
    <>
      {/* Sticky Social Icons */}
      <div
        className="fixed left-0 top-1/3 z-10 hidden xl:flex flex-col items-start gap-5 p-3 bg-white shadow-md rounded-r-md"
        data-animation-delay={100}
        data-shadow-animation="true"
      >
        <ul className="text-sm space-y-3">
          <li>
            <a
              className="flex items-center text-blue-600 hover:text-blue-800 transition"
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook-f mr-2" />
              <span className="font-semibold">Facebook</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center text-blue-700 hover:text-blue-900 transition"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin-in mr-2" />
              <span className="font-semibold">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center text-sky-500 hover:text-sky-700 transition"
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter mr-2" />
              <span className="font-semibold">Twitter</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center text-pink-500 hover:text-pink-700 transition"
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram mr-2" />
              <span className="font-semibold">Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default StickyElements;
