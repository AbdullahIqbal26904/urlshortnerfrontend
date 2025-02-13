import { IoHomeOutline } from "react-icons/io5";
import { FaLinkSlash, FaQrcode, FaRegFile, FaChartLine, FaBullhorn, FaGlobe, FaPlus } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
function Leftbar() {
    const { openleftbar } = useSelector(state => state.allCart);
    const router = useRouter();
    let buttons = [
        { name: "Home", icon: <IoHomeOutline /> },
        { name: "Links", icon: <FaLinkSlash /> },
        { name: "QR Codes", icon: <FaQrcode /> },
        { name: "Pages", icon: <FaRegFile /> }, // Corrected this line
        { name: "Analytics", icon: <FaChartLine /> },
        { name: "Campaigns", icon: <FaBullhorn /> },
        { name: "Custom domains", icon: <FaGlobe /> },
    ];

    function gotohome(butoname) {
        if(butoname === "Home"){
            router.push('/home-page');
        }
    }

    return (
        <div className={`fixed flex items-center justify-center flex-col h-full bg-white border-r-2 ${openleftbar ? 'w-1/6' : 'w-16'}`}>
            {/* Logo */}
            <img className={`absolute left-3 top-3 h-12 w-12 ${openleftbar ? 'h-12 w-12' : "h-8 w-8"}`} src="/images/bitly.png" alt="Logo" />
            {/* Create New Button */}
            <button 
            
            className={`absolute top-20 bg-[#022d94] font-medium  text-white rounded-md flex items-center justify-center gap-2
                ${openleftbar ? 'w-[90%] h-[40px]' : "h-10 w-10"}`}>
                <FaPlus /> 
                {openleftbar && <span className="font-semibold">Create new</span>}
            </button>

            <hr className="w-full absolute top-[135px] border-gray-300" />

            {/* Sidebar Buttons */}
            <div className="w-full absolute top-[150px]">
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        className="w-full h-12 flex items-center justify-start pl-5 hover:bg-gray-100 gap-3"
                        onClick={() => gotohome(button.name)}
                    >
                        {button.icon}
                        {openleftbar && <span className="font-montserrat font-medium">{button.name}</span>}
                    </button>
                ))}
            </div>
            <hr className="w-full absolute top-[510px] border-gray-300" />
            <div className="w-full absolute top-[520px]">
                <button
                    className="w-full h-12 flex items-center justify-start pl-5 hover:bg-gray-100 gap-3"
                >
                    <IoSettingsSharp />

                    {openleftbar && <span className="font-montserrat font-medium">Settings</span>}
                </button>
            </div>
        </div>
    );
}

export default Leftbar;
