// src/components/ThemeDropdown.js
"use client";

import { useState } from "react";
import { Palette } from "lucide-react";

export default function ThemeDropdown({ changeTheme }) {
  const [open, setOpen] = useState(false);

  const themes = [
    { name: "Default", value: "default" },
    { name: "Sunset", value: "sunset" },
    { name: "Minty", value: "minty" },
    { name: "Pastel", value: "pastel" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        aria-label="Choisir un thème"
      >
        <Palette className="w-5 h-5 text-gray-800" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
          {themes.map((theme, i) => {
            const colors = {
              default: "hover:bg-indigo-500 hover:text-white",
              sunset: "hover:bg-pink-400 hover:text-white",
              minty: "hover:bg-teal-400 hover:text-white",
              pastel: "hover:bg-purple-300 hover:text-black",
            };

            return (
              <button
                key={theme.value}
                onClick={() => {
                  changeTheme(theme.value);
                  setOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm border-b border-gray-200 transition
                    ${colors[theme.value]}
                    ${i === 0 ? "rounded-t-md" : ""}
                    ${i === themes.length - 1 ? "rounded-b-md border-b-0" : ""}
                `}
              >
                {theme.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
