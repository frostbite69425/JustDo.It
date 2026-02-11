import projectContainer from "../../components/projectContainer.component.js";

import updateListener from "../../utils/uiUtils/updateListener.js";
import deleteProjectsController from "../../controllers/uiControllers/deleteProjects.controller.js";
import makeNewProjectModal from "../../components/newProjectModal.component.js";
import addProjectsController from "../../controllers/uiControllers/addProjects.controller.js";
import makeEditProjectModal from "../../components/editProjectModal.component.js";
import editProjectsController from "../../controllers/uiControllers/editProjects.controller.js";

const projectView = () => {
  const content = document.querySelector(".content");
  while (content.lastChild) {
    content.removeChild(content.firstChild);
  }
  const container = projectContainer();
  const newProjectModal = makeNewProjectModal();
  const editProjectModal = makeEditProjectModal();

  content.append(
    container.domElement,
    newProjectModal.domElement,
    editProjectModal.domElement,
  );

  deleteProjectsController();
  addProjectsController();
  editProjectsController();
};

export default projectView;
