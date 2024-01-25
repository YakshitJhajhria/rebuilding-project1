import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-blue-500 px-3 py-5 text-white sticky top-0 flex justify-between items-center">
      <div>
        <Link
          href="/"
          className="text-[20px] leading-7 font-bold duration-300 w-[90px] h-fit"
        >
          Navbar
        </Link>
      </div>
      <div className="flex gap-5 justify-center items-center">
        <div className="h-fit relative group">
          <Link
            href=""
            className="text-[20px] leading-7 font-bold duration-300 w-[90px] h-fit"
          >
            Home
          </Link>
          <div className="absolute hidden group-hover:block w-full bottom-[-3px] left-0 h-[2px] rounded-[10px] bg-white"></div>
        </div>
        <div className="h-fit relative group">
          <Link
            href=""
            className="text-[20px] leading-7 font-bold duration-300 w-[90px] h-fit"
          >
            About
          </Link>
          <div className="absolute hidden group-hover:block w-full bottom-[-3px] left-0 h-[2px] rounded-[10px] bg-white"></div>
        </div>
        <div className="h-fit relative group">
          <Link
            href=""
            className="text-[20px] leading-7 font-bold duration-300 w-[90px] h-fit"
          >
            Couses
          </Link>
          <div className="absolute hidden group-hover:block w-full bottom-[-3px] left-0 h-[2px] rounded-[10px] bg-white"></div>
        </div>
        <div className="h-fit relative group">
          <Link
            href=""
            className="text-[20px] leading-7 font-bold duration-300 w-[90px] h-fit"
          >
            Services
          </Link>
          <div className="absolute hidden group-hover:block w-full bottom-[-3px] left-0 h-[2px] rounded-[10px] bg-white"></div>
        </div>
        <div className="h-fit relative group">
          <Link
            href=""
            className="text-[20px] leading-7 font-bold duration-300 w-[90px] h-fit"
          >
            Our Team
          </Link>
          <div className="absolute hidden group-hover:block w-full bottom-[-3px] left-0 h-[2px] rounded-[10px] bg-white"></div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button type="submit">Contact Us</button>
      </div>
    </div>
  );
};

export default Navbar;
