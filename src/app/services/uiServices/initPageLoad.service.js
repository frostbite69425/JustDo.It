import projectInitialiser from "../../controllers/appControllers/projectInitialiser.controller.js";
import projectView from "./projectView.service.js";
import { getAllLocalStorageItems } from "../../utils/appUtils/localStorageUtilities.js";
import projectUpdater from "../../controllers/appControllers/localStorageUpdater.controller.js";
import { startOfTomorrow, endOfMonth } from "date-fns";

function initialisePage() {
  const localStorageProjects = getAllLocalStorageItems();
  if (localStorageProjects.length == 0) {
    const defaultProject = projectInitialiser("default Project");
    defaultProject.createNewToDo(
      "default",
      "low",
      endOfMonth(startOfTomorrow()),
    );
    defaultProject.getProjectToDos[0].subTasks = "default subtask";
    defaultProject.getProjectToDos[0].subTasks = "default subtask 2";
    defaultProject.getProjectToDos[0].todoDescription =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iste tenetur sit, repellendus ut iusto eligendi iure accusantium unde necessitatibus. Aperiam repudiandae pariatur harum voluptate! Amet fugiat quia sunt laboriosam.";
    defaultProject.getProjectToDos[0].todoNotes =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iste tenetur sit, repellendus ut iusto eligendi iure accusantium unde necessitatibus. Aperiam repudiandae pariatur harum voluptate! Amet fugiat quia sunt laboriosam.";

    const defaultProject2 = projectInitialiser("default Project 2");
    defaultProject2.createNewToDo(
      "default",
      "high",
      endOfMonth(startOfTomorrow()),
    );

    projectUpdater();
  }
  projectView();
}

export default initialisePage;
