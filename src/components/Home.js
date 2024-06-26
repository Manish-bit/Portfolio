import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Profile from "../assets/profile.jpg";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className="bg-[#0a192f] w-full h-screen" name="home">
      {/* Container */}
      <div className="max-w-[1000px] m-auto px-8 flex flex-col justify-center h-full">
        <div className="w-[200px] h-[100px] mx-auto aspect-auto">
          <img src={Profile} alt="error" className="w-[100%] rounded-[50%]" />
        </div>
        <div className="mt-[10rem] flex flex-col items-center">
          <p className="text-pink-600">Hi,my name is </p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Manish Aryal
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold  text-[#8892b0]">
            I am a{" "}
            <ReactTyped
              strings={[
                "Full Stack Developer",
                "Software Engineer",
                "Tech Enthusiast",
              ]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            I'm a full stack developer specializing in building(and occasionally
            designing) exceptional digital experiences. Currently, I'm focused
            in building responsive full-stacks web applications
          </p>
          <div>
            <Link to="work" smooth>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                View Work
                <HiArrowNarrowRight className="ml-3 group-hover:rotate-90 duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
