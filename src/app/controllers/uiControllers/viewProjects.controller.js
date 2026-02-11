import updateListener from "../../utils/uiUtils/updateListener.js";
import selectedProjectView from "../../services/uiServices/selectedProjectView.service.js";
import Project from "../../utils/appUtils/ProjectClass.js";

function viewProjectsController() {
  const viewProjectBtnNodes = document.querySelectorAll(".view-project-btn");

  function viewProjectFunction(button) {
    const projectName = button.parentNode.parentNode.dataset.projectname;
    const projectArr = Project.projectArray;
    for (let i = 0; i < projectArr.length; i++) {
      if (projectArr[i].getProjectName == projectName) {
        const selectedProject = projectArr[i];
        selectedProjectView(selectedProject);
      }
    }
  }

  viewProjectBtnNodes.forEach((btn) => {
    updateListener(btn, viewProjectFunction, btn);
  });
}

export default viewProjectsController;
