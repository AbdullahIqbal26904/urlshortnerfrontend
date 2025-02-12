import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setopenSlider, setshowloader, setsliderData } from "@/redux/slices/urlslice";
import { useSelector } from "react-redux";
import { SocialIcon } from 'react-social-icons'
function Slider() {
  const { openSlider, loading, sliderData } = useSelector(state => state.allCart);
  const [animate, setAnimate] = useState(false);
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    dispatch(setopenSlider(false));
  }
  useEffect(() => {
    if (openSlider) {
      setTimeout(() => setAnimate(true), 10); // Small delay for animation
    } else {
      setAnimate(false);
    }
  }, [openSlider]);
  function signupkholo() {
    dispatch(setopenSlider(false)); // Close the slider first
    dispatch(setsliderData("Sign Up"));

    // Add a small delay before opening the slider to allow transition effect
    setTimeout(() => {
      dispatch(setopenSlider(true));
    }, 300); // Adjust the delay time as needed (300ms is a good starting point)
  }
  function signinkholo() {
    dispatch(setopenSlider(false)); // Close the slider first
    dispatch(setsliderData("Sign In"));

    // Add a small delay before opening the slider to allow transition effect
    setTimeout(() => {
      dispatch(setopenSlider(true));
    }, 300); // Adjust the delay time as needed (300ms is a good starting point)
  }

  if (sliderData === "My URLs") {
    return (
      <div
        className={`fixed top-0 right-0 w-full sm:w-[44%] h-full bg-white z-50 transform transition-transform duration-500 ${animate ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Cross Button */}
        <div className="flex items-center justify-between w-full px-4">
          <p className="font-Montserrat font-bold text-2xl mt-4 flex-grow text-left">Your Recent TinyURLs</p>
          <div
            onClick={(e) => handleClick(e)}
            className="w-10 mt-5 h-10 flex items-center justify-center cursor-pointer bg-gray-700 text-gray-300 rounded-md hover:text-white text-2xl"
          >
            ✖
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t border-gray-300 w-full mt-10" />
      </div>
    );
  } else if (sliderData === "Sign Up") {
    return (
      <div
        className={`fixed top-0 right-0 w-full sm:w-[35%] h-full bg-white z-50 transform transition-transform duration-500 ${animate ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Cross Button */}
        <div className="flex items-center justify-end w-full px-4">
          <div
            onClick={(e) => handleClick(e)}
            className="w-10 mt-5 h-10 flex items-center justify-center cursor-pointer bg-gray-700 text-gray-300 rounded-md hover:text-white text-2xl"
          >
            ✖
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t border-gray-300 w-full mt-5" />

        {/* Sign Up Form */}
        <div className="w-full h-full mt-5 flex flex-col items-center justify-start">
          <p className="font-bungee text-[#087da8] font-medium text-3xl">Tiny URLs</p>
          <p className="text-gray-600">Welcome to TinyURL</p>

          {/* Input Fields */}
          <input
            type="text"
            placeholder="Name"
            className="w-[80%] mt-5 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#087da8]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-[80%] mt-5 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#087da8]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[80%] mt-5 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#087da8]"
          />

          {/* Agreement Text */}
          <p className="w-[80%] mt-5 text-center text-s text-gray-900">
            By clicking on <span className="font-semibold">“Create Account”</span>, I agree to the
            <span className="text-[#087da8] cursor-pointer"> Terms of Service</span>,
            <span className="text-[#087da8] cursor-pointer"> Privacy Policy</span>, and
            <span className="text-[#087da8] cursor-pointer"> Use of Cookies</span>.
          </p>

          {/* Create Account Button */}
          <button className="w-[80%] mt-5 p-2 bg-[#087da8] text-white font-semibold rounded-md hover:bg-[#065c81] transition">
            Create Account
          </button>

          {/* Already a user? Log In */}
          <p className="mt-4 text-s text-gray-600">
            Already a user? <span onClick={signinkholo} className="text-[#087da8] font-semibold cursor-pointer">Log In</span>
          </p>

          {/* Or register via */}
          <p className="mt-6 text-gray-600 text-sm">Or register via:</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-3">
            <div className="rounded-full flex items-center justify-center bg-gray-200 cursor-pointer hover:bg-gray-300">
              <SocialIcon url="https://facebook.com" />
            </div>
            <div className="rounded-full flex items-center justify-center bg-gray-200  cursor-pointer hover:bg-gray-300">
              <SocialIcon url="https://github.com" />
            </div>
            <div className=" rounded-full flex items-center justify-center bg-gray-200 cursor-pointer hover:bg-gray-300">
              <SocialIcon url="https://www.google.com" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  else if (sliderData === "Sign In") {
    return (
      <div
        className={`fixed top-0 right-0 w-full sm:w-[35%] h-full bg-white z-50 transform transition-transform duration-500 ${animate ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Cross Button */}
        <div className="flex items-center justify-end w-full px-4">
          <div
            onClick={(e) => handleClick(e)}
            className="w-10 mt-5 h-10 flex items-center justify-center cursor-pointer bg-gray-700 text-gray-300 rounded-md hover:text-white text-2xl"
          >
            ✖
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t border-gray-300 w-full mt-5" />

        {/* Sign Up Form */}
        <div className="w-full h-full mt-5 flex flex-col items-center justify-start">
          <p className="font-bungee text-[#087da8] font-medium text-3xl">Tiny URLs</p>
          <p className="text-gray-600">Welcome to TinyURL</p>

          {/* Input Fields */}
          <input
            type="email"
            placeholder="Email"
            className="w-[80%] mt-6 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#087da8]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[80%] mt-6 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#087da8]"
          />

          {/* Agreement Text */}
          <div class="flex items-center justify-between w-[80%] mt-7">
            <label class="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" class="hidden peer" />
              <div class="w-5 h-5 border-2 border-gray-400 rounded-md flex items-center justify-center peer-checked:bg-blue-500 peer-checked:border-blue-500 transition-all">
                <svg class="hidden w-4 h-4 text-white peer-checked:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fill-rule="evenodd" d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20 8l-1.4-1.4z" clip-rule="evenodd" />
                </svg>
              </div>
              <span>Remember Me</span>
            </label>
            <a href="/forgot-password" class="text-blue-500 hover:underline">Forgot Password?</a>
          </div>



          {/* Create Account Button */}
          <button className="w-[80%] mt-8 p-2 bg-[#087da8] text-white font-semibold rounded-md hover:bg-[#065c81] transition">
            Sign In
          </button>

          {/* Already a user? Log In */}
          <p className="mt-4 text-s text-gray-600">
            Don't have an account? <span onClick={signupkholo} className="text-[#087da8] font-semibold cursor-pointer">Sign Up</span>
          </p>

          {/* Or register via */}
          <p className="mt-6 text-gray-600 text-sm">Or login via:</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-3">
            <div className="rounded-full flex items-center justify-center bg-gray-200 cursor-pointer hover:bg-gray-300">
              <SocialIcon url="https://facebook.com" />
            </div>
            <div className="rounded-full flex items-center justify-center bg-gray-200  cursor-pointer hover:bg-gray-300">
              <SocialIcon url="https://github.com" />
            </div>
            <div className=" rounded-full flex items-center justify-center bg-gray-200 cursor-pointer hover:bg-gray-300">
              <SocialIcon url="https://www.google.com" />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return;
  }
}

export default Slider;