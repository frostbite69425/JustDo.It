import Project from "../../utils/appUtils/ProjectClass.js";
import { saveProjectToLocalStorage } from "../../utils/appUtils/localStorageUtilities.js";

const projectUpdater = () => {
  const projectArray = Project.projectArray;
  for (const project of projectArray) {
    saveProjectToLocalStorage(project);
  }
};

export default projectUpdater;
