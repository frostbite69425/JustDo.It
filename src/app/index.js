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
  getAllLocalStorageItems,
} from "./utils/appUtils/localStorageUtilities.js";
import projectInitialiser from "./controllers/appControllers/projectInitialiser.controller.js";
import projectUpdater from "./controllers/appControllers/projectUpdater.controller.js";

// const toDoOne = new ToDo("x", "high", new Date(2026, 11, 17));
// const projectOne = projectInitialiser("new project");
// const projectTwo = new Project("old Project");

// projectOne.createNewToDo("x", "high", new Date(2026, 11, 17));
// projectOne.createNewToDo("y", "low", new Date(2036, 12, 19));

// projectUpdater();
// console.log(projectOne);
// console.log(Project.getProjectArray());

// saveProjectToLocalStorage(projectOne);
// saveProjectToLocalStorage(projectTwo);
// saveProjectToLocalStorage(projectTwo);

// const test = getProjectFromLocalStorage("new Project");
// console.log(test);
// console.log(test.getProjectToDos);

const savedProjects = getAllLocalStorageItems();
for (const x of savedProjects) {
  console.log(x);
}

// console.log(projectOne.projectToDos[0].subTasks);
