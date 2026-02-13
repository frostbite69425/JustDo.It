import updateListener from "../../utils/uiUtils/updateListener.js";

function sidebarToggler() {
  const sidebarToggleElement = document.querySelector(".sidebar-toggle");
  const toggleBtn = document.querySelector(".hamburger-menu");
  const toggleBtnInput = document.querySelector(".hamburger-menu input");
  const selectedProjectLayoutDiv = document.querySelector(
    ".selected-project-layout-div",
  );

  updateListener(
    toggleBtn,
    () => {
      sidebarToggleElement.classList.toggle("sidebar-btn-hidden");
      toggleBtnInput.checked = !toggleBtnInput.checked;
      selectedProjectLayoutDiv.classList.toggle("grid-area-toggle");
    },
    "noupdate",
  );
}

export default sidebarToggler;
