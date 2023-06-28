import { async } from "@firebase/util";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HiSearch,
  HiOutlineBell,
  HiOutlineUserCircle,
  HiOutlineLogout,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const [scrolled, setScroll] = React.useState(false);

  React.useEffect(() => {
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
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
          alt="Netflix"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="navLink">
            <Link to="/home">Home</Link>{" "}
          </li>
          <li className="navLink">TV Shows</li>
          <li className="navLink">Movies</li>
          <li className="navLink">New & Popular</li>
          <li className="navLink">
            <Link to="/account">My List</Link>{" "}
          </li>
        </ul>
      </div>

      <div className="flex items-center space-x-3 text-sm font-light">
        {/* < HiSearch className='hidden sm:inline h-6 w-6'/>
            <p className='hidden lg:inline'>Kids</p>
            < HiOutlineBell className='h-6 w-6'/> */}
        <HiOutlineLogout
          className="cursor-pointer rounded h-6 w-6 hover:opacity-50"
          onClick={handleLogout}
        />
        <Link to="/account">
          <HiOutlineUserCircle className="cursor-pointer rounded h-6 w-6 hover:opacity-50" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
