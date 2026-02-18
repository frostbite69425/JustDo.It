import updateListener from "../../utils/uiUtils/updateListener.js";
import projectView from "../../services/uiServices/projectView.service.js";
import Project from "../../utils/appUtils/ProjectClass.js";
import projectUpdater from "../appControllers/localStorageUpdater.controller.js";

function editProjectsController() {
  const editProjectBtnNodes = document.querySelectorAll(".edit-project-btn");
  const modal = document.querySelector(".edit-project-modal");
  const inputField = document.querySelector("#edited-project-name");
  const editProjectModalBtn = document.querySelector(
    ".edit-project-confirm-modal-btn",
  );
  const cancelProjectModalBtn = document.querySelector(
    ".edit-project-cancel-modal-btn",
  );
  const editProjectForm = document.querySelector(".edit-project-form");

  let selectedBtn;

  updateListener(
    cancelProjectModalBtn,
    () => {
      modal.close();
    },
    "noupdate",
  );

  editProjectBtnNodes.forEach((btn) => {
    updateListener(
      btn,
      () => {
        modal.showModal();
        selectedBtn = btn;
      },
      "noupdate",
    );
  });

  function editFunction() {
    if (!inputField.checkValidity()) {
      return editProjectForm.reportValidity();
    } else if (inputField.value == "") {
      modal.close();
      editProjectForm.reset();
      return;
    } else {
      const projectName = selectedBtn.parentNode.parentNode.dataset.projectname;
      const projectArr = Project.projectArray;

      for (let i = 0; i < projectArr.length; i++) {
        if (projectArr[i].getProjectUid == projectName) {
          const selectedProject = projectArr[i];
          selectedProject.setProjectName = inputField.value;
          projectUpdater();
          projectView();
        }
      }
    }
  }

  updateListener(editProjectModalBtn, editFunction);
}

export default editProjectsController;
