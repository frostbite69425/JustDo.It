import elementFactory from "../controllers/uiControllers/elementFactory.controller.js";

function projectProgressDiv(project) {
  const progressDiv = elementFactory("div", "project-progress");
  const totalTodos = project.getProjectToDos;

  if (totalTodos.length == 0) {
    progressDiv.insertText(
      "You have 0 tasks in this project. Let's add some tasks!",
    );
  } else {
    const doneTodos = totalTodos.filter((todo) => todo.todoDoneState).length;
    const doneRatio = doneTodos / totalTodos.length;

    if (doneRatio !== 1 && doneRatio !== 0) {
      progressDiv.insertText(
        `You have completed ${doneRatio * 100} % of your tasks in this project. Keep it up!`,
      );
    } else if (doneRatio !== 1 && doneRatio == 0) {
      progressDiv.insertText(
        `You have completed ${doneRatio * 100} % of your tasks in this project. Let's get started!`,
      );
    } else {
      progressDiv.insertText("You have completed all of your tasks. Good job");
    }
  }

  return progressDiv;
}

export default projectProgressDiv;
