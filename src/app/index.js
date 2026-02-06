import "../styles.css";
import ToDo from "./utils/appUtils/toDoClass.js";
import {
  setSubTasks,
  deleteSubTasks,
} from "./utils/appUtils/subTasksUtility.js";
import Project from "./utils/appUtils/ProjectClass.js";
import todoMigrator from "./utils/appUtils/todoMigrator.js";
import {
  saveProjectToLocalStorage,
  saveToDoToLocalStorage,
  getItemFromLocalStorage,
} from "./utils/appUtils/localStorageUtilities.js";

// const toDoOne = new ToDo("x", "high", new Date(2026, 11, 17));
const projectOne = new Project("new Project");
const projectTwo = new Project("old Project");

projectOne.createNewToDo("x", "high", new Date(2026, 11, 17));
projectOne.createNewToDo("y", "low", new Date(2036, 12, 19));
// console.log(projectOne);
// console.log(Project.getProjectArray());

saveProjectToLocalStorage(projectOne);
// saveProjectToLocalStorage(projectTwo);

const test = getItemFromLocalStorage("project");
console.log(test);
// console.log(projectOne.projectToDos[0].subTasks);
