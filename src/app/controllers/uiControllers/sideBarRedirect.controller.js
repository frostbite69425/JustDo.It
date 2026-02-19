import selectedProjectView from "../../services/uiServices/selectedProjectView.service.js";
import projectView from "../../services/uiServices/projectView.service.js";
import updateListener from "../../utils/uiUtils/updateListener.js";
import Project from "../../utils/appUtils/ProjectClass.js";

function sidebarRedirectController() {
  const homeBtn = document.querySelector(".home-btn");
  const projectLinks = document.querySelectorAll(".project-link");

  homeBtn.addEventListener("click", () => {
    projectView();
  });

  function linkRedirect(link) {
    const uid = link.dataset.uid;
    const projectArr = Project.getProjectArray();

    for (let i = 0; i < projectArr.length; i++) {
      if (projectArr[i].getProjectUid == uid) {
        selectedProjectView(projectArr[i]);
        break;
      }
    }
  }

  projectLinks.forEach((link) => {
    link.addEventListener("click", () => {
      linkRedirect(link);
    });
  });
}

export default sidebarRedirectController;
