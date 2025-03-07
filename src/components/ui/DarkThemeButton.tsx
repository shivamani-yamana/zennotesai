"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

function DarkThemeButton() {
  const [darkMode, setDarkMode] = useState(false);
  const { setTheme } = useTheme();
  useEffect(() => {
    if (darkMode) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [darkMode, setTheme]);
  return (
    <div className="p-[1px] relative scale-75">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full dark:from-purple-100 dark:to-purple-50" />
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="px-2 py-2 bg-white dark:bg-black rounded-full relative group transition duration-200 text-gray-900 dark:text-purple-50 hover:text-white hover:bg-transparent w-full"
      >
        {darkMode ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}

export default DarkThemeButton;
