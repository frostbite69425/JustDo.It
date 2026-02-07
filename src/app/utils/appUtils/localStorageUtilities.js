import Project from "./ProjectClass.js";
import ToDo from "./toDoClass.js";

function saveProjectToLocalStorage(project) {
  const stringifiedProject = JSON.stringify(project);
  localStorage.setItem(project.getProjectName, stringifiedProject);
}

function getProjectFromLocalStorage(project) {
  const retrievedProject = localStorage.getItem(project);
  const parsedProject = JSON.parse(retrievedProject);
  Object.setPrototypeOf(parsedProject, Project.prototype);

  const todosInProject = parsedProject.getProjectToDos;

  for (const item of todosInProject) {
    Object.setPrototypeOf(item, ToDo.prototype);
  }

  return parsedProject;
}

function removeProjectFromLocalStorage(project) {
  localStorage.removeItem(project);
}

function getAllLocalStorageItems() {
  const localStorageArray = [];
  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      localStorageArray.push(getProjectFromLocalStorage(key));
    }
  }
  return localStorageArray;
}

export {
  saveProjectToLocalStorage,
  getAllLocalStorageItems,
  removeProjectFromLocalStorage,
};
