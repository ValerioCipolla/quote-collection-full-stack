// switch between dark and light mode

let darkMode = false;

export default function switchMode() {
  if (!darkMode) {
    document.documentElement.style.setProperty("--background-color", "#121212");
    document.documentElement.style.setProperty("--quote-color", "#FFFFFF");
    document.documentElement.style.setProperty("--author-color", "#d3d3d3");
    document.documentElement.style.setProperty("--inactive-button", "#dcdcdc");
    document.documentElement.style.setProperty("--active-button", "#FF5733");
    darkMode = true;
  } else {
    document.documentElement.style.setProperty("--background-color", "#ffffff");
    document.documentElement.style.setProperty("--quote-color", "#000000");
    document.documentElement.style.setProperty("--author-color", "#101010");
    document.documentElement.style.setProperty("--inactive-button", "#303030");
    document.documentElement.style.setProperty("--active-button", "#4f345a");
    darkMode = false;
  }
}
