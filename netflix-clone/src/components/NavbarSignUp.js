import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const NavbarSignUp = () => {
  const [scrolled, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setScroll(true);
      else setScroll(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled && "bg-[#141414] bg-gradient-to-br from-black"}>
      <Link to="/">
        <div className="flex items-center justify-betweenspace-x-2 md:space-x-10">
          <img
            src="https://rb.gy/ulxxee"
            width={120}
            height={120}
            className="cursor-pointer object-contain"
            alt="Netflix"
          />
        </div>
      </Link>

      <div className="flex space-x-2 justify-end p-4 z-[100] w-full relative">
        <Link to="/login">
          <button className="text-white py-1 px-6 rounded hover:bg-slate-200/20 flex space-x-2">
            Sign In
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-red-600 text-white py-1 px-6 rounded hover:opacity-60">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarSignUp;
