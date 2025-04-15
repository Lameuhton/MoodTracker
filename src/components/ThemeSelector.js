// src/components/ThemeSelector.js
"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import ThemeDropdown from "./ThemeDropdown";

export default function ThemeSelector() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const changeTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <div className="flex items-center gap-2">
      <ThemeDropdown changeTheme={changeTheme} />
      <button
        onClick={toggleDarkMode}
        className={`p-2 rounded-full transition ${
          isDark
            ? "bg-white text-gray-900 hover:bg-gray-100"
            : "bg-gray-800 text-white hover:bg-gray-700"
        }`}
        aria-label="Basculer le mode sombre"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </div>
  );
}
