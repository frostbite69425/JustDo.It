import updateListener from "../../utils/uiUtils/updateListener.js";
import selectedProjectView from "../../services/uiServices/selectedProjectView.service.js";
import projectUpdater from "../appControllers/localStorageUpdater.controller.js";
import { isFuture, toDate } from "date-fns";
import { setSubTasks } from "../../utils/appUtils/subTasksUtility.js";

function editTodoController(project) {
  const editToDoBtnNodes = document.querySelectorAll(".edit-todo-btn");
  const modal = document.querySelector(".edit-todo-modal");
  const editTodoForm = document.querySelector(".edit-todo-form");
  const newToDoForm = document.querySelector(".edit-todo-form");
  const titleInput = document.querySelector("#edit-todo-title");
  const prioInput = document.querySelector("#edit-todo-prio");
  const dateInput = document.querySelector("#edit-todo-date");
  const descInput = document.querySelector("#edit-todo-desc");
  const notesInput = document.querySelector("#edit-todo-notes");
  const subTasksInput = document.querySelector("#edit-todo-subTasks");

  const editCancelToDoModalBtn = document.querySelector(
    ".edit-todo-cancel-modal-btn",
  );
  const editConfirmToDoModalBtn = document.querySelector(
    ".edit-todo-confirm-modal-btn",
  );

  let selectedBtn;

  editToDoBtnNodes.forEach((btn) => {
    updateListener(
      btn,
      () => {
        modal.showModal();
        selectedBtn = btn;
      },
      "noupdate",
    );
  });
  updateListener(
    editCancelToDoModalBtn,
    () => {
      modal.close();
    },
    "noupdate",
  );

  function editFunction() {
    const selectedProject = project;
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
    } else {
      const todoArr = selectedProject.getProjectToDos;
      const datasetTodoTitle =
        selectedBtn.parentNode.parentNode.dataset.todotitle;
      for (let i = 0; i < todoArr.length; i++) {
        if (todoArr[i].todoUid == datasetTodoTitle) {
          const selectedToDo = todoArr[i];
          const inputPropertyValueObject = {
            todoTitle: titleInput.value,
            todoPriority: prioInput.value,
            todoDescription: descInput.value,
            todoNotes: notesInput.value,
          };
          const subTaskString = subTasksInput.value;

          for (const key in inputPropertyValueObject) {
            if (inputPropertyValueObject[key] !== "") {
              selectedToDo[key] = inputPropertyValueObject[key];
            }
          }

          if (subTaskString !== null && subTaskString.indexOf(",") !== -1) {
            const subTaskArr = subTaskString.trim().split(",");
            setSubTasks(selectedToDo, subTaskArr);
          } else if (
            subTaskString !== null &&
            subTaskString.indexOf(",") == -1
          ) {
            const subTaskArr = [subTaskString.trim()];
            setSubTasks(selectedToDo, subTaskArr);
            modal.close();
            editTodoForm.reset();
            projectUpdater();
            selectedProjectView(project);

            return;
          }

          modal.close();
          projectUpdater();
          selectedProjectView(project);

          break;
        }
      }
    }
  }

  updateListener(editConfirmToDoModalBtn, editFunction);
}

export default editTodoController;
