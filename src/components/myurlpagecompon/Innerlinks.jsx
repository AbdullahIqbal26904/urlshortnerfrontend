import { useState } from "react";
import { useSelector } from "react-redux";
import QRBitlySection from "./QRBitlySection";
export default function Innerlinks() {
  const { openleftbar } = useSelector(state => state.allCart);
  const [details, setDetails] = useState(false);
  const [links, setLinks] = useState([
    {
      id: 1,
      title: "YouTube",
      shortLink: "bit.ly/3WTFFzL",
      originalLink: "https://www.youtube.com/watch?v=Gz38Yj09k3A&list=RDGz38Yj09k3A&start_radio=1",
      date: "Feb 11, 2025",
    },

  ]);
  function opendetails() {
    setDetails(!details);
  }

  return (
    <div className={`absolute top-[63px] px-6 py-4 bg-[#f4f6fa] 
      ${openleftbar ? 'w-[83%] left-[239px]' : 'left-16 w-[95%] '} min-h-screen overflow-y-hidden overflow-x-hidden`}>

      {/* Header */}
      <div className="flex justify-between items-center mt-4 ml-5 mb-6">
        <h2 className="text-3xl font-bold font-montserrat">Bitly Links</h2>
        <button className="px-4 py-2 bg-[#2a5bd7] hover:bg-[#022d94] text-white rounded-md">Create link</button>
      </div>

      {/* Search & Filters */}
      <div className="flex space-x-2 mb-6 mt-4 ml-5">
        <input
          type="text"
          placeholder="Search links..."
          className="w-[280px] px-4 py-2 bg-white font-montserrat border rounded-sm border-1 focus outline-blue-700"
        />
        <button className="px-4 py-2 bg-white font-medium font-montserrat border rounded-sm hover:bg-gray-300">Filter by created date</button>
        <button className="px-4 py-2 bg-white border rounded-sm font-medium font-montserrat hover:bg-gray-300">Add filters</button>
      </div>

      <hr className="w-[95%] absolute opacity-25 mt-4 top-[135px] border-gray-300" />
      <select className="px-4 hover:bg-gray-300 cursor-pointer mt-4 font-montserrat ml-5 mb-4  mt-10 py-2 border rounded-lg">
        <option>Show: Active</option>
        <option>Hidden</option>
      </select>
      <div className="flex mb-[200px] flex-col items-center justify-center w-full">
        {/* Links List */}
        {links.map((link) => (
          <div
            key={link.id}
            onClick={setDetails}
            className="bg-white p-4 w-[97%] h-[200px] rounded-lg shadow-md mb-4 flex items-start justify-between 
                     transition-all duration-300 hover:shadow-lg hover:border hover:border-blue-300"
          >
            {/* Left Section */}
            <div className="flex items-center space-x-4 w-full h-full p-4 bg-white">
              {/* Checkbox for selection */}
              <input
                type="checkbox"
                className="w-5 h-5 accent-blue-500 cursor-pointer transition-transform duration-200 hover:scale-110"
              />

              {/* YouTube logo */}
              <img
                src="https://www.youtube.com/s/desktop/8e44db35/img/favicon_144x144.png"
                alt="YouTube"
                className="w-12 h-12 rounded-full transition-transform duration-300 hover:scale-110"
                onError={(e) => { e.target.src = "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"; }}
              />

              {/* Link Details */}
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg">{link.title}</h3>
                <a
                  href={`https://${link.shortLink}`}
                  className="text-blue-500 hover:text-blue-700 hover:underline transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.shortLink}
                </a>
                <p className="text-gray-500 text-sm">{link.originalLink}</p>
                <p className="text-gray-500 text-xs mt-1">{link.date} | No tags</p>
              </div>
            </div>

            {/* Right Section (Buttons) */}
            <div className="flex space-x-3">
              <button className="text-gray-600 px-3 py-1 border rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-md">
                Copy
              </button>
              <button className="text-gray-600 px-3 py-1 border rounded-lg transition-all duration-300 hover:bg-green-500 hover:text-white hover:shadow-md">
                Share
              </button>
              <button className="text-gray-600 px-3 py-1 border rounded-lg transition-all duration-300 hover:bg-yellow-500 hover:text-white hover:shadow-md">
                ✏️
              </button>
              <button className="text-gray-600 px-3 py-1 border rounded-lg transition-all duration-300 hover:bg-gray-500 hover:text-white hover:shadow-md">
                ⋮
              </button>
            </div>
          </div>

        ))}
      </div>
      {/* Footer */}
      <div className=" absolute bottom-4 w-full text-center text-gray-500 text-sm mb-6">
        <p>🔹 Change a link's destination, even after you've shared it. Get redirects with every plan. <a href="#" className="text-blue-500">View plans</a></p>
        <hr className="my-4 border-gray-300" />
        <p>You've reached the end of your links</p>
      </div>
    </div>
  );
}
