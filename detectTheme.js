const extensionIds = [
  "fhflojkafggeikipigbihdlcedlfcfda",
  "oojokgdfajbdmoembmnnhanompipcmii",
];

export function detectTheme() {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const currentTheme = isDark ? "dark" : "light";
  const message = { message: "set-theme", theme: currentTheme };
  chrome.runtime.sendMessage(message);
  extensionIds.forEach((id) => {
    chrome.runtime.sendMessage(id, message);
  });
  return currentTheme;
}
