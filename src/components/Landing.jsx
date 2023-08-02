import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillHtml5  } from "react-icons/ai";
import {DiCss3} from "react-icons/di"
import {SiJavascript, SiTailwindcss} from "react-icons/si"
import {FaReact,FaBootstrap} from "react-icons/fa"
import landingImage from "../assets/img/photo_2023-07-30_21-37-58.jpg";

const Landing = () => {
  return (
   <>
    <div className="max-w-[1240px] mx-auto mt-8 md:mt-32 m-4 p-4 flex flex-col md:flex-row justify-start items-center">
      <div className="flex flex-col md:w-1/2 justify-center items-start md:mr-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide leading-loose mb-4 mt-32 md:mt-8">
          Full-Stack Developer
        </h1>
        <p className="md:mr-8">
          Hi, I'm Ermiyas Bekele, a passionate and tech-savvy full-stack web developer based in
          Minnesota, USA
        </p>
        <div className="flex mt-4">
          <a href="https://www.linkedin.com/in/ermiyas-bekele-2918b1264/"><AiFillLinkedin size={40} className="mr-4 hover:scale-150 hover:border-b-2 hover:border-orange-400  transition-transform ease-in-out" /></a>
          <a href="https://github.com/Ermi-B"><AiFillGithub size={40} className="hover:scale-150 hover:border-b-2 hover:border-orange-400  transition-transform ease-in-out" /></a>
        </div>
      </div>

      <div className="flex justify-center items-start md:w-1/2 overflow-hidden">
  <img
    className="w-72 h-72 mt-4 md:w-96 md:h-96 object-cover border rounded-full"
    src={landingImage}
    alt="/"
  />
</div>
    
    </div>
    <div className="flex flex-wrap justify-center items-center mt-16">
      <h4 className="font-bold text-lg md:text-2xl mt-2">Tech Stack</h4>
      <div className="flex ml-8 mt-4">
        <AiFillHtml5 size={40} className="mx-4 hover:scale-150  transition-transform ease-in-out"/>
        <DiCss3  size={40} className="mx-4 hover:scale-150  transition-transform ease-in-out"/>
        <SiJavascript size={40}  className="mx-4 hover:scale-150  transition-transform ease-in-out"/>
        <FaReact size={40}  className="mx-4 hover:scale-150  transition-transform ease-in-out"/>
        <SiTailwindcss size={40}  className="mx-4 hover:scale-150  transition-transform ease-in-out"/>
        <FaBootstrap size={40}  className="mx-4 hover:scale-150  transition-transform ease-in-out"/>
       
      </div>
    </div>
   </>
  );
};

export default Landing;
