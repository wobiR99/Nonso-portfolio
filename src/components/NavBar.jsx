import React, { useRef, useState } from "react";
import { close, hamburger } from "../assets";
import { Link } from "react-router-dom";

const NavBar = ({ active, setActive }) => {
  const [showItems, setShowItems] = useState(false);
  const menuRef = useRef();

  return (
    <nav className="flex justify-between items-center px-4 py-6 md:px-[120px] md:py-5 ">
      <Link to="/" onClick={() => setActive("")}>
        <h1 className="font-bold text-base">OBI CHUKWUNONSO C.</h1>
      </Link>

      <ul className="md:flex list-none justify-center items-center gap-3 p-1 bg-[#E8E8E8] hidden cursor-pointer">
        <Link
          to="works"
          className={`text-sm font-normal ${
            active === "works"
              ? "text-black bg-white font-semibold"
              : "text-[#888080] "
          } px-2 py-[6px] `}
          onClick={() => {
            setActive("works");
            //navigate to works page
          }}
        >
          <li>Works</li>
        </Link>
        <Link
          to="aboutme"
          className={`text-sm font-normal ${
            active === "aboutme"
              ? "text-black bg-white font-semibold"
              : "text-[#888080] "
          } px-2 py-[6px] `}
          onClick={() => {
            setActive("aboutme");
            //navigate to aboutme page
          }}
        >
          <li>About Me</li>
        </Link>
        <Link
          to="get-in-touch"
          className={`text-sm font-normal ${
            active === "getintouch"
              ? "text-black bg-white font-semibold"
              : "text-[#888080] "
          } px-2 py-[6px] `}
          onClick={() => {
            setActive("getintouch");
            //navigate to getintouch page
          }}
        >
          <li>Get in touch</li>
        </Link>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        {!showItems ? (
          <img
            src={hamburger}
            onClick={() => setShowItems((prevValue) => !prevValue)}
            className="w-8 h-8 object-contain cursor-pointer"
          />
        ) : (
          <div
            ref={menuRef}
            className={`${
              !showItems ? "hidden" : "flex"
            } flex-col  absolute h-full items-center gap-4   top-0 right-0 min-w-full z-10 transition-all ease-in duration-500  bg-menuBg`}
          >
            <div className="flex items-center justify-end w-full p-4">
              {/* <Link to="/" onClick={() => setShowItems(false)}>
                <h1 className="font-bold text-base ">OBI CHUKWUNONSO C.</h1>
              </Link> */}
              <img
                src={close}
                className="w-4 h-4 cursor-pointer"
                onClick={() => {
                  setShowItems((prevValue) => !prevValue);
                  setActive("");
                }}
              />
            </div>
            <ul className="list-none flex flex-col gap-4 items-center justify-end w-full px-6">
              <Link
                to="works"
                className={`text-sm font-semibold text-white   cursor-pointer w-full  border-b border-white text-left py-4 `}
                onClick={() => setShowItems(false)}
              >
                <li
                  onClick={() => {
                    setActive("works");
                    //navigate to works page
                  }}
                >
                  Works
                </li>
              </Link>
              <Link
                to="/aboutme"
                className={`text-sm font-semibold text-white   cursor-pointer w-full  border-b border-white text-left py-4 `}
                onClick={() => setShowItems(false)}
              >
                <li
                  onClick={() => {
                    setActive("aboutme");
                    //navigate to aboutme page
                  }}
                >
                  About Me
                </li>
              </Link>
              <Link
                to="get-in-touch"
                className={`text-sm font-semibold text-white   cursor-pointer w-full  border-b border-white text-left py-4 `}
                onClick={() => setShowItems(false)}
              >
                <li
                  onClick={() => {
                    setActive("getintouch");
                    //navigate to getintouch page
                  }}
                >
                  Get in touch
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
