import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import TypeScript from "../assets/typescript.png";
import Docker from "../assets/docker.png";

const Skills = () => {
  return (
    <div className="bg-[#0a192f] text-gray-300 w-full" name="skills">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl inline border-b-4 border-pink-600 font-bold ">
            Skills
          </p>
          <p className="py-4"> These are the technologies I've worked with</p>
        </div>
        <div className="width-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:cursor-pointer">
            <img src={HTML} alt="/" className="w-20 mx-auto" />
            <p>HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:cursor-pointer hover:cursor-pointer">
            <img src={CSS} alt="/" className="w-20 mx-auto" />
            <p>CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:cursor-pointer">
            <img src={JavaScript} alt="/" className="w-20 mx-auto" />
            <p>JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:cursor-pointer">
            <img src={ReactImg} alt="/" className="w-20 mx-auto" />
            <p>REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:cursor-pointer">
            <img src={GitHub} alt="/" className="w-20 mx-auto" />
            <p>GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:cursor-pointer">
            <img src={Node} alt="/" className="w-20 mx-auto" />
            <p>NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:cursor-pointer">
            <img src={Mongo} alt="/" className="w-20 mx-auto" />
            <p>MONGODB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:cursor-pointer">
            <img src={Tailwind} alt="/" className="w-20 mx-auto" />
            <p>TAILWIND</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:cursor-pointer">
            <img src={TypeScript} alt="/" className="w-20 mx-auto" />
            <p>TYPESCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:cursor-pointer">
            <img src={Docker} alt="/" className="w-20 mx-auto" />
            <p>DOCKER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
