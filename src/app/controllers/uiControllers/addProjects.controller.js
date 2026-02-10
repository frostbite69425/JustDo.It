import updateListener from "../../utils/uiUtils/updateListener.js";
import projectView from "../../services/uiServices/projectView.service.js";
import Project from "../../utils/appUtils/ProjectClass.js";
import projectInitialiser from "../appControllers/projectInitialiser.controller.js";

function addProjectsController() {
  const modal = document.querySelector(".modal");
  const addProjectBtn = document.querySelector(".add-new-project-btn");
  const inputField = document.querySelector("input.project-name");
  const createProjectModalBtn = document.querySelector(
    ".new-project-confirm-modal-btn",
  );
  const cancelProjectModalBtn = document.querySelector(
    ".new-project-cancel-modal-btn",
  );

  updateListener(
    addProjectBtn,
    () => {
      modal.showModal();
    },
    "noupdate",
  );

  updateListener(
    cancelProjectModalBtn,
    () => {
      modal.close();
    },
    "noupdate",
  );

  function addFunction() {
    const newProject = projectInitialiser(inputField.value);
    projectView();
  }

  updateListener(createProjectModalBtn, addFunction);
}

export default addProjectsController;
