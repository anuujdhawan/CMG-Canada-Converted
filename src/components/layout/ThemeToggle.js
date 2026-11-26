"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import styles from "./ThemeToggle.module.css";

const STORAGE_KEY = "cmg-theme";

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const current = document.documentElement.dataset.theme;
    const next = saved === "light" || saved === "dark"
      ? saved
      : current === "light" || current === "dark"
        ? current
        : "light";
    if (current !== next) document.documentElement.dataset.theme = next;
    const frame = window.requestAnimationFrame(() => setTheme(next));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.dataset.theme = next;
  };

  const isLight = theme === "light";
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      className={cn(styles.toggle, className)}
      onClick={toggle}
      aria-label="Dark theme"
      aria-pressed={isDark}
      title={`Switch to ${isLight ? "dark" : "light"} theme`}
    >
      <span className={styles.track} aria-hidden="true">
        <Sun className={`${styles.icon} ${styles.sun}`} size={15} strokeWidth={2.2} />
        <Moon className={`${styles.icon} ${styles.moon}`} size={15} strokeWidth={2.2} fill="currentColor" />
        <span className={styles.thumb} />
      </span>
    </button>
  );
}
