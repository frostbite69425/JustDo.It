import projectUpdater from "../appControllers/localStorageUpdater.controller.js";

function doneToggler(project) {
  const doneToggleBtnNodes = document.querySelectorAll(
    "input.todo-done-state-toggler",
  );

  function toggleFunction(btn) {
    const selectedProject = project;
    const todoArr = selectedProject.getProjectToDos;
    const datasetTodoTitle = btn.parentNode.parentNode.dataset.todotitle;
    const parentDiv = btn.parentNode.parentNode;

    for (let i = 0; i < todoArr.length; i++) {
      if (todoArr[i].todoTitle == datasetTodoTitle) {
        todoArr[i].toggleTodoDoneState();
        parentDiv.classList.toggle("completed-todo");
      }
      projectUpdater();
    }
  }

  doneToggleBtnNodes.forEach((btn) => {
    btn.addEventListener("click", () => {
      toggleFunction(btn);
    });
  });
}

export default doneToggler;
