import projectInitialiser from "../../controllers/appControllers/projectInitialiser.controller.js";
import projectView from "./projectView.service.js";
import { getAllLocalStorageItems } from "../../utils/appUtils/localStorageUtilities.js";
import projectUpdater from "../../controllers/appControllers/localStorageUpdater.controller.js";
import { startOfTomorrow, endOfMonth } from "date-fns";

function initialisePage() {
  const localStorageProjects = getAllLocalStorageItems();
  if (localStorageProjects.length == 0) {
    const defaultProject = projectInitialiser("Demo Project");
    defaultProject.createNewToDo(
      "Demo Task",
      "low",
      endOfMonth(startOfTomorrow()),
    );
    defaultProject.getProjectToDos[0].subTasks = "Demo subtask";
    defaultProject.getProjectToDos[0].subTasks = "Another demo subtask";
    defaultProject.getProjectToDos[0].todoDescription =
      "Describe the task you need to get done!";
    defaultProject.getProjectToDos[0].todoNotes =
      "Maybe some notes to help you complete your task.";

    projectUpdater();
  }
  projectView();
}

export default initialisePage;
