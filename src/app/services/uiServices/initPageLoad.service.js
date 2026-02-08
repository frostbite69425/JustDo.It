import projectInitialiser from "../../controllers/appControllers/projectInitialiser.controller.js";
import projectView from "./projectView.service.js";

function test() {
  const defaultProject = projectInitialiser("default Project");
  defaultProject.createNewToDo("default", "low", new Date(2026, 1, 14));
  const defaultProjectTwo = projectInitialiser("default Project Two");
  defaultProjectTwo.createNewToDo("default", "low", new Date(2026, 1, 14));
  projectView();
}

export default test;
