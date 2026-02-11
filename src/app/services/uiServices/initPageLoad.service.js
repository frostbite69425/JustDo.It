import projectInitialiser from "../../controllers/appControllers/projectInitialiser.controller.js";
import projectView from "./projectView.service.js";
import { getAllLocalStorageItems } from "../../utils/appUtils/localStorageUtilities.js";
import projectUpdater from "../../controllers/appControllers/localStorageUpdater.controller.js";

function initialisePage() {
  const localStorageProjects = getAllLocalStorageItems();
  if (localStorageProjects.length == 0) {
    const defaultProject = projectInitialiser("default Project");
    defaultProject.createNewToDo("default", "low", new Date(2026, 1, 14));
    projectUpdater();
  }
  projectView();
}

export default initialisePage;
