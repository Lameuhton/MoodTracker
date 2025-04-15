// src/components/ThemeBar.js
"use client";

import ThemeSelector from "./ThemeSelector";

export default function ThemeBar() {
  return (
    <div className="fixed top-4 right-4 z-50">
      <ThemeSelector />
    </div>
  );
}
