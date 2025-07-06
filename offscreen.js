import { detectTheme } from "./detectTheme.js";

detectTheme();

// Listen for changes in the system theme
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", detectTheme);
