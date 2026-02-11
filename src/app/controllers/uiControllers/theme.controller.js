import updateListener from "../../utils/uiUtils/updateListener.js";

function themeSwitcher() {
  const themeBtn = document.querySelector("button.theme-switcher");
  updateListener(
    themeBtn,
    () => {
      document.body.classList.toggle("light");
    },
    "noupdate",
  );
}

export default themeSwitcher;
