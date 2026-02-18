import updateListener from "../../utils/uiUtils/updateListener.js";
import selectedProjectView from "../../services/uiServices/selectedProjectView.service.js";
import projectUpdater from "../appControllers/localStorageUpdater.controller.js";
import todoMigrator from "../../utils/appUtils/todoMigrator.js";
import Project from "../../utils/appUtils/ProjectClass.js";
import logMessage from "../../utils/appUtils/logMessage.js";

function todoMigratorController(project) {
  const moveTodoBtnNodes = document.querySelectorAll(".move-todo-btn");
  const modal = document.querySelector(".migrate-todo-modal");
  const migrateToDoForm = document.querySelector(".migrate-todo-form");
  const projectSelect = document.querySelector(".migrate-todo-select");

  const migrateCancelTodoModalBtn = document.querySelector(
    ".migrate-todo-cancel-modal-btn",
  );

  const migrateConfirmTodoModalBtn = document.querySelector(
    ".migrate-todo-confirm-modal-btn",
  );

  const projectArray = Project.getProjectArray();

  let selectedBtn;

  moveTodoBtnNodes.forEach((btn) => {
    updateListener(
      btn,
      () => {
        if (projectArray.length > 1) {
          modal.showModal();
          selectedBtn = btn;
        } else {
          logMessage(
            "You only have one project! Please create another project before trying to migrate your tasks.",
          );
        }
      },
      "noupdate",
    );
  });

  updateListener(
    migrateCancelTodoModalBtn,
    () => {
      modal.close();
    },
    "noupdate",
  );

  function migrateFunction() {
    const todoArr = project.getProjectToDos;
    const datasetTodoTitle =
      selectedBtn.parentNode.parentNode.dataset.todotitle;
    const selectedTargetProject = projectSelect.value;

    for (let i = 0; i < todoArr.length; i++) {
      if (todoArr[i].todoUid == datasetTodoTitle) {
        const selectedToDo = todoArr[i];
        todoMigrator(project, selectedTargetProject, selectedToDo);
        modal.close();
        migrateToDoForm.reset();
        projectUpdater();
        selectedProjectView(project);
        logMessage(`Task successfully migrated to ${selectedTargetProject}`);
        break;
      }
    }
  }

  updateListener(migrateConfirmTodoModalBtn, migrateFunction);
}

export default todoMigratorController;
