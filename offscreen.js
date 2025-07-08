import { detectTheme } from "./detectTheme.js";

detectTheme();

chrome.runtime.onMessage.addListener(({ message }) => {
  if (message === "get-theme") {
    detectTheme();
  }
});
