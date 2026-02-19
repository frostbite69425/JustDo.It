import updateListener from "../../utils/uiUtils/updateListener.js";
import selectedProjectView from "../../services/uiServices/selectedProjectView.service.js";
import todoInitialiser from "../appControllers/todoInitialiser.controller.js";
import projectUpdater from "../appControllers/localStorageUpdater.controller.js";
import { toDate, isFuture, startOfToday } from "date-fns";
import logMessage from "../../utils/appUtils/logMessage.js";

function addTodosController(projectInput) {
  const modal = document.querySelector(".new-todo-modal");
  const newToDoForm = document.querySelector(".new-todo-form");
  const addToDoBtn = document.querySelector(".add-todo-btn");

  const titleInput = document.querySelector("#todo-title");
  const prioInput = document.querySelector("#todo-prio");
  const dateInput = document.querySelector("#todo-date");
  const descInput = document.querySelector("#todo-desc");
  const notesInput = document.querySelector("#todo-notes");
  const subTasksInput = document.querySelector("#todo-subTasks");

  const cancelToDoModalBtn = document.querySelector(
    ".new-todo-cancel-modal-btn",
  );
  const createTodoModalBtn = document.querySelector(
    ".new-todo-confirm-modal-btn",
  );

  updateListener(
    addToDoBtn,
    () => {
      modal.showModal();
    },
    "noupdate",
  );

  updateListener(
    cancelToDoModalBtn,
    () => {
      modal.close();
    },
    "noupdate",
  );

  function addFunction() {
    if (!isFuture(toDate(dateInput.value))) {
      dateInput.setCustomValidity(
        "You need to select a date that's in the future!",
      );
      return newToDoForm.reportValidity();
    } else {
      dateInput.setCustomValidity("");
    }

    if (!titleInput.checkValidity() || !dateInput.checkValidity()) {
      return newToDoForm.reportValidity();
    } else if (
      titleInput.value == "" ||
      dateInput.value == "default" ||
      dateInput.value == ""
    ) {
      modal.close();
      newProjectForm.reset();
      return;
    } else {
      const requiredProject = projectInput;
      const newToDo = todoInitialiser(
        requiredProject,
        titleInput.value,
        prioInput.value,
        toDate(dateInput.value),
        descInput.value,
        notesInput.value,
        subTasksInput.value,
      );
      projectUpdater();
      selectedProjectView(requiredProject);
      logMessage("Task added successfully.", "success");
    }
  }

  updateListener(createTodoModalBtn, addFunction);
}

export default addTodosController;
