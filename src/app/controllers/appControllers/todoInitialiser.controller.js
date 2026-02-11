import projectUpdater from "./localStorageUpdater.controller.js";

const toDoInitialiser = (project, toDoTItle, toDoPriority, toDoDate) => {
  project.createNewToDo(toDoTItle, toDoPriority, toDoDate);
  projectUpdater();
};
