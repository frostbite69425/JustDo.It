import Project from "../../utils/appUtils/ProjectClass.js";
import { saveProjectToLocalStorage } from "../../utils/appUtils/localStorageUtilities.js";

const projectInitialiser = (projectName) => {
  const project = new Project(projectName);
  saveProjectToLocalStorage(project);
  return project;
};

export default projectInitialiser;
