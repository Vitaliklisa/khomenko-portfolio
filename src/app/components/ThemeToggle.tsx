"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle day and night theme"
      title="Switch between day and night themes"
    >
      <Sun className="theme-toggle-sun" size={16} aria-hidden="true" />
      <Moon className="theme-toggle-moon" size={16} aria-hidden="true" />
    </button>
  );
}
