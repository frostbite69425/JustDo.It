import projectUpdater from "./localStorageUpdater.controller.js";

const toDoInitialiser = (
  project,
  toDoTitle,
  toDoPriority,
  toDoDate,
  toDoDesc,
  toDoNotes,
  toDoSubTasks,
) => {
  project.createNewToDo(
    toDoTitle,
    toDoPriority,
    toDoDate,
    toDoDesc,
    toDoNotes,
    toDoSubTasks,
  );
  projectUpdater();
};

export default toDoInitialiser;
