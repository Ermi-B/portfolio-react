import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div className="flex justify-between items-center h-20 max-w-[1240px] px-4 mx-auto ">
            <h1 className="w-full text-4xl font-bold">
                ermi.dev
            </h1>
            <ul className="hidden md:flex">
                <a href="/"><li className="px-4 py-2 hover:border-b border-spacing-4 hover:border-orange-400 ">Home</li></a>
                <a href="/"><li className="px-4 py-2 hover:border-b border-spacing-4 hover:border-orange-400 ">About</li></a>
                <a href="/"><li className="px-4 py-2 hover:border-b border-spacing-4 hover:border-orange-400 ">Projects</li></a>
                <a href="/"><li className="px-4 py-2 hover:border-b border-spacing-4 hover:border-orange-400 ">Contact</li></a>
                <a href="/"><li className="px-4 py-2 hover:border-b border-spacing-4 hover:border-orange-400 ">Resume</li></a>
            </ul>
            <div onClick={handleNav} className="md:hidden">
                {!nav ? <AiOutlineClose size={30} />:<AiOutlineMenu size={30} />}
                
            </div>
            <div className={!nav ? "fixed left-0 top-0 w-[60%] border-r border-gray-900 h-full bg-[#e3e3e3] transition ease-in duration-500" : 
            "fixed hidden"}>
                <h1 className=" w-full text-3xl font-bold m-4 ">
                    ermi.dev
                </h1>
                <ul className="pt-12 uppercase p-4 transition ease-in-out duration-500">
                    <a href="/"> <li className="p-4 border-b border-gray-600 hover:border-b border-spacing-4 hover:border-orange-400 hover:bg-orange-300  ">Home</li></a>
                    <a href="/"><li className="p-4 border-b border-gray-600 hover:border-b border-spacing-4 hover:border-orange-400 hover:bg-orange-300 ">About</li></a>
                    <a href="/"><li className="p-4 border-b border-gray-600 hover:border-b border-spacing-4 hover:border-orange-400 hover:bg-orange-300 ">Contact</li></a>
                    <a href="/"><li className="p-4 border-b border-gray-600 hover:border-b border-spacing-4 hover:border-orange-400 hover:bg-orange-300 ">Projects</li></a>

                    <a href="/"><li className="p-4 hover:border-b border-spacing-4 hover:border-orange-400 hover:bg-orange-300">Resume</li></a>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
