import projectContainer from "../../components/projectContainer.component.js";

import updateListener from "../../utils/uiUtils/updateListener.js";
import deleteProjectsController from "../../controllers/uiControllers/deleteProjects.controller.js";

const projectView = () => {
  const content = document.querySelector(".content");
  while (content.lastChild) {
    content.removeChild(content.firstChild);
  }
  const container = projectContainer();
  content.appendChild(container.domElement);

  deleteProjectsController();

  const addNewProjectBtn = document.querySelector(".add-new-project-btn");
  updateListener(addNewProjectBtn, () => {
    console.log(1);
  });

  // THE LISTENER WORKS. ADD THE FUNCTION
};

export default projectView;
