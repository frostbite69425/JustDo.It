import updateListener from "../../utils/uiUtils/updateListener.js";
import projectView from "../../services/uiServices/projectView.service.js";
import projectInitialiser from "../appControllers/projectInitialiser.controller.js";

function addProjectsController() {
  const modal = document.querySelector(".new-project-modal");
  const addProjectBtn = document.querySelector(".add-new-project-btn");
  const inputField = document.querySelector("input.project-name");
  const createProjectModalBtn = document.querySelector(
    ".new-project-confirm-modal-btn",
  );
  const cancelProjectModalBtn = document.querySelector(
    ".new-project-cancel-modal-btn",
  );
  const newProjectForm = document.querySelector(".new-project-form");

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
    if (!inputField.checkValidity()) {
      return newProjectForm.reportValidity();
    } else if (inputField.value == "default" || inputField.value == "") {
      modal.close();
      newProjectForm.reset();
      return;
    } else {
      const newProject = projectInitialiser(inputField.value);
      projectView();
    }
  }

  updateListener(createProjectModalBtn, addFunction);
}

export default addProjectsController;
