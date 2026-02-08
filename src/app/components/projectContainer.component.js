import elementFactory from "../controllers/uiControllers/elementFactory.controller.js";
import Project from "../utils/appUtils/ProjectClass.js";
import projectComponent from "./projects.component.js";

function projectContainer() {
  const projectContainer = elementFactory("div", "display-container");
  const title = elementFactory("h1", "projects-page-title title");
  title.insertText("Your Projects");
  const projectLayoutDiv = elementFactory("div", "projects-container");
  projectContainer.setChildren(title.domElement, projectLayoutDiv.domElement);

  const totalProjects = Project.projectArray;
  for (const project of totalProjects) {
    const newProjectCard = projectComponent(project);
    projectLayoutDiv.setChildren(newProjectCard.domElement);
  }

  return projectContainer;
}

export default projectContainer;
