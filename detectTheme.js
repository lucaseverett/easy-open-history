const extensionIds = [
  "fhflojkafggeikipigbihdlcedlfcfda",
  "oojokgdfajbdmoembmnnhanompipcmii",
];

export function detectTheme() {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const currentTheme = isDark ? "dark" : "light";
  chrome.runtime.sendMessage({ theme: currentTheme });
  extensionIds.forEach((id) => {
    chrome.runtime.sendMessage(id, { theme: currentTheme });
  });
  return currentTheme;
}
