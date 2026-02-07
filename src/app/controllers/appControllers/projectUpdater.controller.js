import Project from "../../utils/appUtils/ProjectClass.js";
import {
  saveProjectToLocalStorage,
  getAllLocalStorageItems,
  removeProjectFromLocalStorage,
} from "../../utils/appUtils/localStorageUtilities.js";

const projectUpdater = () => {
  const projectArray = Project.projectArray;
  localStorage.clear();
  for (const project of projectArray) {
    saveProjectToLocalStorage(project);
  }
};

export default projectUpdater;
