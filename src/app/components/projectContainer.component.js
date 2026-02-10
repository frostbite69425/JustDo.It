import elementFactory from "../controllers/uiControllers/elementFactory.controller.js";
import Project from "../utils/appUtils/ProjectClass.js";
import projectComponent from "./projects.component.js";
import { getAllLocalStorageItems } from "../utils/appUtils/localStorageUtilities.js";

function projectContainer() {
  const projectContainer = elementFactory("div", "display-container");
  const title = elementFactory("h1", "projects-page-title title");
  title.insertText("Your Projects");
  const addNewProjectBtn = elementFactory(
    "button",
    "add-new-project-btn button",
  );
  addNewProjectBtn.insertText("Add New Project");
  const projectLayoutDiv = elementFactory("div", "projects-container");
  projectContainer.setChildren(
    title.domElement,
    projectLayoutDiv.domElement,
    addNewProjectBtn.domElement,
  );

  Project.setProjectArray(getAllLocalStorageItems());

  const totalProjects = Project.projectArray;
  for (const project of totalProjects) {
    const newProjectCard = projectComponent(project);
    projectLayoutDiv.setChildren(newProjectCard.domElement);
  }

  return projectContainer;
}

export default projectContainer;
