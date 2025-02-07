import {useState,useEffect, use} from "react";
import { useSelector,useDispatch } from "react-redux";
import { setopenSlider,setshowloader,setsliderData } from "@/redux/slices/urlslice";

function Navbarcomp() {
    const {loading,openSlider,sliderData} = useSelector(state => state.allCart);
    const dispatch = useDispatch();
    const buttons = [
        {
            name: "My URLs",
            link: "/",
        },
        {
            name: "Plans",
            link: "/",
        },
        {
            name: "Blog",
            link: "/",
        },
        {
            name: "Features",
            link: "/",
        },
        {
            name: "Sign Up",
            link: "/",
        },
        {
            name: "Sign In",
            link: "/",
        },
    ];
    function handleClick(e, item) {
        e.preventDefault();
        // console.log(loading,openSlider);
        dispatch(setopenSlider(true));
        dispatch(setsliderData(item.name));
        // console.log('The link was clicked.', item);
        // console.log('The link was clicked 2.', sliderData);
    }
    return (
        <div className="absolute right-12 top-4 w-[35.5rem] h-[3rem] bg-[#087da8] rounded-lg text-white flex items-center justify-center gap-1">
            
            {
                buttons.map((button, item) => {
                    return (
                        <button
                            key={item}
                            onClick={(e) => handleClick(e,button)}
                            className="font-montserrat font-medium h-full w-full text-white rounded-lg hover:bg-[#23a4c4] transition-colors duration-300 ease-in-out"
                        >
                            {button.name}
                        </button>
                    )
                })
            }
        </div>

    )
}

export default Navbarcomp;