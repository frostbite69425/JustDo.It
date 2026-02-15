import updateListener from "../../utils/uiUtils/updateListener.js";

function sidebarToggler() {
  const sidebarToggleElement = document.querySelector(".sidebar-toggle");
  const toggleBtn = document.querySelector(".hamburger-menu");
  const toggleBtnInput = document.querySelector(".hamburger-menu input");

  updateListener(
    toggleBtn,
    () => {
      sidebarToggleElement.classList.toggle("sidebar-btn-hidden");
      toggleBtnInput.checked = !toggleBtnInput.checked;
    },
    "noupdate",
  );
}

export default sidebarToggler;
