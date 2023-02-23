import React, { useContext } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="p-2">
      {theme === "dark" ? (
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          <HiSun className="text-primary text-xl mr-2 hover:scale-110 duration-200" />{" "}
        </div>
      ) : (
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          <HiMoon className="text-primary text-xl mr-2 hover:scale-110 duration-200" />{" "}
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
