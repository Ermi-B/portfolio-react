import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import landingImage from "../assets/photo_2023-07-30_21-37-58.jpg";

const Landing = () => {
  return (
    <div className="max-w-[1240px] mx-auto mt-32 m-4 p-4 flex flex-col md:flex-row justify-start items-center">
      <div className="flex flex-col md:w-1/2 justify-center items-start md:mr-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide leading-loose mb-4">
          Full-Stack Developer
        </h1>
        <p className="md:mr-8">
          Hi, I'm Ermiyas Bekele, a passionate and tech-savvy full-stack web developer based in
          Minnesota, USA
        </p>
        <div className="flex mt-4">
          <AiFillLinkedin size={40} className="mx-4 hover:border-inset-1 rounded" />
          <AiFillGithub size={40} className="hover:border-inset-1 rounded" />
        </div>
      </div>

      <div className="flex justify-center items-start md:w-1/2">
        <img
          className="w-72 mt-4 md:w-96 rounded-lg border"
          src={landingImage}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Landing;
