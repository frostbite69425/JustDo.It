import elementFactory from "../controllers/uiControllers/elementFactory.controller.js";
import Project from "../utils/appUtils/ProjectClass.js";

function sideBar() {
  const newSideBar = elementFactory("aside", "sidebar");
  const totalProjects = Project.projectArray;
  for (const projects of totalProjects) {
    const newButton = elementFactory("button", "project-buttons button");
    newButton.insertText(projects.getProjectName);
    newSideBar.setChildren(newButton.domElement);
  }

  return newSideBar;
}

export default sideBar;
