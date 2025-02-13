import { useState } from "react";
import { setopenleftbar } from '@/redux/slices/urlslice';
import { useDispatch, useSelector } from "react-redux";
export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { openleftbar } = useSelector(state => state.allCart);
  const dispatch = useDispatch();
  function closeleftbar() {
    dispatch(setopenleftbar(!openleftbar));
  }
  return (
    <div
      className={`fixed z-50 flex items-center justify-end space-x-8 h-16 bg-white border-b-2 px-4 transition-all duration-300 ease-in-out 
    ${openleftbar ? 'left-[238px] w-5/6' : 'left-16 w-[95%]'}`}
    >

      <button
        onClick={closeleftbar}
        className="absolute top-10 left-[-20px] rounded-full z-50 bg-pink-100 text-black w-10 h-10 flex items-center justify-center  text-lg font-bold
               hover:bg-pink-200 hover:scale-110 transition-all duration-300 shadow-md"
      >
        {openleftbar ? "◄" : "►"}
      </button>

      <input
        type="text"
        placeholder="Search..."
        className="w-[262px] h-10 bg-gray-200 rounded-lg px-4 outline-none"
      />
      <div className="flex items-center space-x-4 relative">
        <button className="px-4 py-2 bg-[#007c8c] text-white  rounded-md">Upgrade</button>

        <button className="text-white text-2xl bg-gray-800 font-bold rounded-full w-8 h-8">?</button>
        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="flex items-center space-x-2 px-3 py-2 border rounded-lg">
            <div className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full text-lg font-semibold">
              A
            </div>
            <span className="font-semibold">Abdullah Iqbal</span>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg">
              <div className="p-4 border-b">
                <div className="text-lg font-semibold">Abdullah Iqbal</div>
                <div className="text-sm text-gray-500">abdullah.iqbal1505@gmail.com</div>
              </div>
              <div className="p-4 border-b">
                <div className="text-sm">o_3ios48upht</div>
                <div className="text-xs text-gray-500">Free account</div>
                <button className="mt-2 px-3 py-1 text-sm text-white bg-blue-500 rounded">Upgrade</button>
              </div>
              <ul className="p-2 text-sm">
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Support</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">API Documentation</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Webinars</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Bitly Terms</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer text-red-500">Sign Out</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
