import { IoHomeOutline } from "react-icons/io5";
import { FaLinkSlash, FaQrcode, FaRegFile, FaChartLine, FaBullhorn, FaGlobe, FaPlus } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

function Leftbar() {
    const { openleftbar } = useSelector(state => state.allCart);
    let buttons = [
        { name: "Home", icon: <IoHomeOutline /> },
        { name: "Links", icon: <FaLinkSlash /> },
        { name: "QR Codes", icon: <FaQrcode /> },
        { name: "Pages", icon: <FaRegFile /> }, // Corrected this line
        { name: "Analytics", icon: <FaChartLine /> },
        { name: "Campaigns", icon: <FaBullhorn /> },
        { name: "Custom domains", icon: <FaGlobe /> },
    ];



    return (
        <div className={`fixed flex items-center justify-center flex-col h-full bg-white border-r-2 ${openleftbar ? 'w-1/6' : 'w-16'}`}>
            {/* Logo */}
            <img className="absolute left-3 top-3 h-12 w-12" src="/images/bitly.png" alt="Logo" />
            {/* Create New Button */}
            <button className="absolute top-20 bg-[#022d94] font-semibold text-white w-[90%] h-[40px] rounded-md flex items-center justify-center gap-2">
                <FaPlus /> Create new
            </button>

            <hr className="w-full absolute top-[135px] border-gray-300" />

            {/* Sidebar Buttons */}
            <div className="w-full absolute top-[150px]">
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        className="w-full h-12 flex items-center justify-start pl-5 hover:bg-gray-100 gap-3"
                    >
                        {button.icon}
                        {openleftbar && <span className="font-semibold">{button.name}</span>}
                    </button>
                ))}
            </div>
            <hr className="w-full absolute top-[510px] border-gray-300" />
            <div className="w-full absolute top-[520px]">
                <button
                    className="w-full h-12 flex items-center justify-start pl-5 hover:bg-gray-100 gap-3"
                >
                    <IoSettingsSharp />

                    {openleftbar && <span className="font-semibold">Settings</span>}
                </button>
            </div>
        </div>
    );
}

export default Leftbar;
