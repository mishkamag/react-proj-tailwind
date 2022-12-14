import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import geocamp from "../assets/geocamp.jpg";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  const handleClose = () => {
    setNav(!nav);
  };

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <img className="w-12 h-auto" src={geocamp} alt="/" />
          <ul className="hidden md:flex">
            <li>
              <Link
                className="cursor-pointer"
                to="home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer"
                to="about"
                smooth={true}
                offset={-200}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer"
                to="support"
                smooth={true}
                offset={-50}
                duration={500}
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer"
                to="platforms"
                smooth={true}
                offset={-100}
                duration={500}
              >
                Platform
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer"
                to="pricing"
                smooth={true}
                offset={-50}
                duration={500}
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li>
          <Link
            onClick={handleClose}
            className="cursor-pointer border-b-2 border-zinc-300 w-full"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={handleClose}
            className="cursor-pointer border-b-2 border-zinc-300 w-full"
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            onClick={handleClose}
            className="cursor-pointer border-b-2 border-zinc-300 w-full"
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Support
          </Link>
        </li>
        <li>
          <Link
            onClick={handleClose}
            className="cursor-pointer border-b-2 border-zinc-300 w-full"
            to="platforms"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Platform
          </Link>
        </li>
        <li>
          <Link
            onClick={handleClose}
            className="cursor-pointer border-b-2 border-zinc-300 w-full"
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Pricing
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
