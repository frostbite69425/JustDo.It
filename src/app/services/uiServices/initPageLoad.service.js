import projectInitialiser from "../../controllers/appControllers/projectInitialiser.controller.js";
import projectView from "./projectView.service.js";
import { getAllLocalStorageItems } from "../../utils/appUtils/localStorageUtilities.js";

function initialisePage() {
  const localStorageProjects = getAllLocalStorageItems();
  if (localStorageProjects.length == 0) {
    const defaultProject = projectInitialiser("default Project");
    defaultProject.createNewToDo("default", "low", new Date(2026, 1, 14));
  }
  projectView();
}

export default initialisePage;
