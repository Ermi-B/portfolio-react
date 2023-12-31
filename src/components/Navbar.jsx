import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import resumeFile from "../assets/files/Resume.pdf";
const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-white ">
      <div className="flex justify-between items-center h-20 max-w-[1240px] px-4 mx-auto ">
        <Link to="/">
          <h1 className="w-full text-4xl font-bold hover:border-b-4 hover:border-orange-400 ">
            ermi.dev
          </h1>
        </Link>
        <ul className="hidden md:flex">
          <Link to="/">
            <li className="px-4 py-2 hover:border-b font-semibold border-spacing-4 hover:border-orange-400 ">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="px-4 py-2 hover:border-b font-semibold border-spacing-4 hover:border-orange-400 ">
              About
            </li>
          </Link>
          <Link to="/projects">
            <li className="px-4 py-2 hover:border-b font-semibold border-spacing-4 hover:border-orange-400 ">
              Projects
            </li>
          </Link>
          <Link to="/contact">
            <li className="px-4 py-2 hover:border-b font-semibold border-spacing-4 hover:border-orange-400 ">
              Contact
            </li>
          </Link>
          <Link
         to={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            download="ErmiyasResume.pdf"
          >
            <li className="px-4 py-2 hover:border-b font-semibold border-spacing-4 hover:border-orange-400 ">
              Resume
            </li>
          </Link>
        </ul>
        <div onClick={handleNav} className="md:hidden">
          {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] border-r border-gray-900 h-full bg-[#e3e3e3] transition ease-in duration-500"
              : "fixed hidden"
          }
        >
          <Link href="/">
          <h1 className="w-full text-4xl font-bold hover:border-b-4 hover:border-orange-400 ">
            ermi.dev
          </h1>
        </Link>
          <ul className="pt-12 uppercase p-4 transition ease-in-out duration-500">
            <Link to="/">
              
              <li className="p-4 border-b border-gray-600 hover:border-b border-spacing-4 hover:border-orange-400 hover:bg-orange-300  ">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="p-4 border-b border-gray-600 hover:border-b border-spacing-4 hover:border-orange-400 hover:bg-orange-300 ">
                About
              </li>
            </Link>
            <Link to="/contact">
              <li className="p-4 border-b border-gray-600 hover:border-b border-spacing-4 hover:border-orange-400 hover:bg-orange-300 ">
                Contact
              </li>
            </Link>
            <Link to="/projects">
              <li className="p-4 border-b border-gray-600 hover:border-b border-spacing-4 hover:border-orange-400 hover:bg-orange-300 ">
                Projects
              </li>
            </Link>
            <Link
              to={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              download="ErmiyasResume.pdf"
            >
              <li className="px-4 py-2 hover:border-b font-semibold border-spacing-4 hover:border-orange-400 ">
                Resume
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
