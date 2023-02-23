import React, { useState } from "react";
import logo from "../assets/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="section-div">
      <header className="w-full py-3 flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="w-8 h-8 object-cover rounded-full shadow-md"
          />
          <p className="text-lg">貨幣貓</p>
        </div>
        <div className="sm:flex items-center justify-between gap-6 hidden ">
          <ThemeToggle />
          <Link className="hover:text-accent duration-300"> 首頁</Link>
          <button type="button" className="hover:text-accent duration-300">
            登入
          </button>
          <button type="button" className="filled-button">
            註冊
          </button>
        </div>
        <div className="sm:hidden">
          <ThemeToggle />
        </div>

        {/* toggle icon */}
        <div
          className="block sm:hidden cursor-pointer"
          onClick={() => {
            setNav(!nav);
          }}
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </header>

      {/* mobile menu */}
      <div
        className={
          nav
            ? "flex flex-col fixed top-16 left-0 md:hidden w-full bg-primary items-center justify-between h-[90%] duration-300 ease-in-out z-10"
            : "fixed left-[-100%] top-16 h-[90%] flex flex-col items-center justify-between ease-in duration-300"
        }
      >
        <ul className="w-full p-4 text-center">
          <li className="border-b py-6 text-lg">
            <Link
              to="/"
              onClick={() => {
                setNav((prev) => !prev);
              }}
            >
              首頁
            </Link>
          </li>
          <li className="border-b py-6 text-lg">
            <Link
              onClick={() => {
                setNav((prev) => !prev);
              }}
            >
              帳戶
            </Link>
          </li>
        </ul>
        <div className="flex flex-col w-full text-center p-4">
          <Link>
            <button
              onClick={() => {
                setNav((prev) => !prev);
              }}
              type="button"
              className="w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-xl shadow-md"
            >
              登入
            </button>
          </Link>
          <Link>
            <button
              onClick={() => {
                setNav((prev) => !prev);
              }}
              type="button"
              className="w-full my-2 p-3 bg-button text-btnText rounded-xl shadow-md"
            >
              註冊
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
