import updateListener from "../../utils/uiUtils/updateListener.js";
import selectedProjectView from "../../services/uiServices/selectedProjectView.service.js";
import projectUpdater from "../appControllers/localStorageUpdater.controller.js";

function deleteTodosController(project) {
  const deleteTodosBtnNodes = document.querySelectorAll(
    "button.delete-todo-btn",
  );

  function deleteFunction(btn) {
    const todoArr = project.getProjectToDos;
    const datasetTodoTitle = btn.parentNode.parentNode.dataset.todotitle;
    for (let i = 0; i < todoArr.length; i++) {
      if (todoArr[i].todoTitle == datasetTodoTitle) {
        project.removeToDo(todoArr[i]);
      }
      projectUpdater();
      selectedProjectView(project);
      break;
    }
  }

  deleteTodosBtnNodes.forEach((btn) => {
    updateListener(btn, deleteFunction, btn);
  });
}

export default deleteTodosController;
