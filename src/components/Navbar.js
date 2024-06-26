import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const handleClick = () => {
    const pdfUrl = "manishcv.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "manishcv.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="navbar fixed w-full h-[80px] flex justify-end items-center px-4 bg-[#0a192f] text-gray-300">
      <ul className="hidden md:flex">
        <Link to="home" smooth={true} spy={true} activeClass="active">
          <li>Home</li>
        </Link>
        <Link to="about" smooth={true} spy={true} activeClass="active">
          <li>About</li>
        </Link>
        <Link to="timeline" smooth={true} spy={true} activeClass="active">
          <li>TimeLine</li>
        </Link>
        <Link to="skills" smooth={true} spy={true} activeClass="active">
          <li>Skills</li>
        </Link>
        <Link to="work" smooth={true} spy={true} activeClass="active">
          <li>Work</li>
        </Link>
        <Link to="contact" smooth={true} spy={true} activeClass="active">
          <li>Contact</li>
        </Link>
      </ul>

      {/* hamburger */}
      <div className="md:hidden z-10" onClick={handleNav}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center md:hidden"
        }
      >
        <Link to="home" smooth={true} spy={true} activeClass="active">
          <li className="py-6 text-4xl">Home</li>
        </Link>
        <Link to="about" smooth={true} spy={true} activeClass="active">
          <li className="py-6 text-4xl">About</li>
        </Link>
        <Link to="timeline" smooth={true} spy={true} activeClass="active">
          <li className="py-6 text-4xl">TimeLine</li>
        </Link>
        <Link to="skills" smooth={true} spy={true} activeClass="active">
          <li className="py-6 text-4xl">Skills</li>
        </Link>
        <Link to="work" smooth={true} spy={true} activeClass="active">
          <li className="py-6 text-4xl">Work</li>
        </Link>
        <Link to="contact" smooth={true} spy={true} activeClass="active">
          <li className="py-6 text-4xl">Contact</li>
        </Link>
      </ul>

      {/* Social Menu */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              href="https://linkedin.com/in/manish--aryal"
              className="flex justify-between items-center w-full text-gray-300"
              target="blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="https://github.com/Manish-bit"
              className="flex justify-between items-center w-full text-gray-300"
              target="blank"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
              onClick={handleClick}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
