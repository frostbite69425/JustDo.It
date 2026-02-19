import updateListener from "../../utils/uiUtils/updateListener.js";
import selectedProjectView from "../../services/uiServices/selectedProjectView.service.js";
import projectUpdater from "../appControllers/localStorageUpdater.controller.js";
import { deleteSubTasks } from "../../utils/appUtils/subTasksUtility.js";
import logMessage from "../../utils/appUtils/logMessage.js";

function deleteSubtasksController(project) {
  const deleteSubtaskBtnNodes = document.querySelectorAll(".subtask-del-btn");

  function deleteFunction(btn) {
    const todoArr = project.getProjectToDos;
    const datasetTodoTitle =
      btn.parentNode.parentNode.parentNode.dataset.todotitle;
    const subTaskTitle = btn.parentNode.dataset.subtasktitle;
    for (let i = 0; i < todoArr.length; i++) {
      if (todoArr[i].todoUid == datasetTodoTitle) {
        deleteSubTasks(todoArr[i], subTaskTitle);
        projectUpdater();
        selectedProjectView(project);
        logMessage("Subtask deleted permanently.");
        break;
      }
    }
  }

  deleteSubtaskBtnNodes.forEach((btn) => {
    updateListener(btn, deleteFunction, btn);
  });
}

export default deleteSubtasksController;
