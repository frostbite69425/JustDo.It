import updateListener from "../../utils/uiUtils/updateListener.js";
import projectView from "../../services/uiServices/projectView.service.js";
import Project from "../../utils/appUtils/ProjectClass.js";
import projectUpdater from "../appControllers/localStorageUpdater.controller.js";

function deleteProjectsController() {
  const deleteProjectButtonNodes = document.querySelectorAll(
    "button.delete-project-btn",
  );

  function deleteFunction(button) {
    const projectName = button.parentNode.parentNode.dataset.projectname;

    const projectArr = Project.projectArray;

    for (let i = 0; i < projectArr.length; i++) {
      if (projectArr[i].getProjectUid == projectName) {
        const selectedProject = projectArr[i];
        Project.deleteProjectPermanently(selectedProject);
        projectUpdater();
        projectView();
      }
    }
  }

  deleteProjectButtonNodes.forEach((btn) =>
    updateListener(btn, deleteFunction, btn),
  );
}

export default deleteProjectsController;
