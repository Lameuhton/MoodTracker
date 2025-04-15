"use client";

import { useEffect, useState } from "react";

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
    <div className="flex flex-col items-center gap-4 mt-8">
      <div className="flex gap-2 flex-wrap justify-center">
        <button
          className="px-4 py-2 rounded bg-[var(--color-primary)] text-white hover:opacity-80"
          onClick={() => changeTheme("default")}
        >
          Default
        </button>
        <button
          className="px-4 py-2 rounded bg-pink-400 text-white hover:opacity-80"
          onClick={() => changeTheme("sunset")}
        >
          Sunset
        </button>
        <button
          className="px-4 py-2 rounded bg-teal-400 text-white hover:opacity-80"
          onClick={() => changeTheme("minty")}
        >
          Minty
        </button>
        <button
          className="px-4 py-2 rounded bg-purple-300 text-black hover:opacity-80"
          onClick={() => changeTheme("pastel")}
        >
          Pastel
        </button>
      </div>

      <button
        className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-white dark:text-gray-900 hover:opacity-90 transition"
        onClick={toggleDarkMode}
      >
        {isDark ? "☀️ Mode clair" : "🌙 Mode sombre"}
      </button>
    </div>
  );
}
