import { useState } from "react";
import { setopenSlider,setshowloader,setsliderData } from "@/redux/slices/urlslice";
import { useDispatch } from "react-redux";
function ResponsiveNavbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();
  const buttons = [
    { name: "My URLs", link: "/" },
    { name: "Plans", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Features", link: "/" },
    { name: "Sign Up", link: "/" },
    { name: "Sign In", link: "/" },
  ];

  function openSidebar(item){
    if(item.name === "My URLs") {
      window.location.href = '/Myurls';
      return;
    }
    if(item.name === "Plans") {
      window.location.href = '/plans';
      return;
    }
    if(item.name === "Sign Up" || item.name === "Sign In") {
      dispatch(setopenSlider(true));
      dispatch(setsliderData(item.name));
      return;
    }
    dispatch(setopenSlider(true));
    dispatch(setsliderData(item.name));
  }

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <div className="relative text-white">
      {/* Navbar Header */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <img className="w-[190px]" src="/images/logo.svg" alt="Logo" />

        {/* Hamburger Icon */}
        <div onClick={toggleMenu} className="flex flex-col space-y-1 cursor-pointer">
          <span className="block h-1 w-6 bg-white rounded transition-all duration-300"></span>
          <span className="block h-1 w-6 bg-white rounded transition-all duration-300"></span>
          <span className="block h-1 w-6 bg-white rounded transition-all duration-300"></span>
        </div>
      </div>

      {/* Slide-Down Buttons */}
      <div
        className={`overflow-hidden bg-[#eee] rounded-lg transition-all w-full duration-300 flex justify-center ${
          openMenu ? "max-h-106 opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 bg-transparent py-4 px-6 rounded-lg w-full max-w-sm">
          {buttons.map((button, index) => (
            <li key={index} className="w-full flex justify-center">
              <button
                onClick={() => {
                  toggleMenu();
                  openSidebar(button);
                }}
                className="block w-full font-montserrat text-center py-3 px-6 text-lg font-semibold text-white bg-[#084074] rounded-lg transition-all duration-300 hover:bg-blue-500 hover:scale-105"
              >
                {button.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResponsiveNavbar;
