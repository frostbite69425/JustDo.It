import projectContainer from "../../components/projectContainer.component.js";

import updateListener from "../../utils/uiUtils/updateListener.js";
import deleteProjectsController from "../../controllers/uiControllers/deleteProjects.controller.js";
import makeNewProjectModal from "../../components/newProjectModal.component.js";
import addProjectsController from "../../controllers/uiControllers/addProjects.controller.js";

const projectView = () => {
  const content = document.querySelector(".content");
  while (content.lastChild) {
    content.removeChild(content.firstChild);
  }
  const container = projectContainer();
  const newProjectModal = makeNewProjectModal();
  content.append(container.domElement, newProjectModal.domElement);

  deleteProjectsController();
  addProjectsController();
};

export default projectView;
