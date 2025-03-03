import React from "react";
import { Link, NavLink } from "react-router-dom";
import {FaBarsStaggered, FaXmark} from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post A Job" },
  ];
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        <a className="flex items-center gap-2 text-2xl text-black" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
          >
            <circle
              cx="12.0143"
              cy="12.5143"
              r="12.0143"
              fill="#3575E2"
              fillOpacity="0.4"
            />
            <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2" />
          </svg>{" "}
          <span>Job Portal</span>
        </a>
        {/* // nav items for large device // */}
        <ul className="hidden md:flex gap-12">
            {
                navItems?.map(({path, title}) => (
                    <li key={path} className="text-base text-primary ">
                        <NavLink 
                        to={path}
                        className={({isActive})=> isActive?"active":""}
                        >{title}</NavLink>
                    </li>
                ))
            }
        </ul>
        <div className="text-base text-primary font-medium space-x-5 lg:block hidden">
            <Link to="/login" className="py-2 px-5 border rounded">Login</Link>
            <Link to="/sign-up" className="py-2 px-5 border rounded bg-blue text-white">Sign Up</Link>
        </div>
        {/* mobile menu */}
        <div className="md:hidden block">
            <button onClick={toggleMenu}>
                {isMenuOpen?<FaXmark className="w-5 h-5 text-primary "  />:<FaBarsStaggered className="w-5 h-5 text-primary " />}
            </button>
        </div>
      </nav>
      {/* mobile menu nav items */}
      <div>
        <ul className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen?"block":"hidden"} md:hidden`}>
            {
                navItems?.map(({path, title}) => (
                    <li key={path} className="text-base text-white first:text-white py-1 ">
                        <NavLink 
                        to={path}
                        className={({isActive})=> isActive?"active":""}
                        >{title}</NavLink>
                    </li>
                ))
            }
            <li className="text-white"><Link to="/login" >Login</Link></li>
            <li className="text-white"><Link to="/sign-up" >Sign Up</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
