import elementFactory from "../controllers/uiControllers/elementFactory.controller.js";
import Project from "../utils/appUtils/ProjectClass.js";

function sideBar() {
  const newSideBar = elementFactory("aside", "sidebar more-hidden");
  const sideBarHeader = elementFactory("div", "sidebar-header more-hidden");
  const sideBarHideBtn = elementFactory(
    "button",
    "hide-sidebar-btn button more-hidden",
  );
  sideBarHideBtn.insertText("Hide Sidebar");
  const sideBarTitle = elementFactory("h2", "sidebar-title title more-hidden");
  sideBarTitle.insertText("Your projects");
  sideBarHeader.setChildren(sideBarHideBtn.domElement, sideBarTitle.domElement);

  const sideBarBtnHolder = elementFactory(
    "nav",
    "side-bar-btn-holder nav more-hidden",
  );
  const totalProjects = Project.projectArray;
  for (const projects of totalProjects) {
    const newLink = elementFactory("a", "project-link link");
    newLink.insertText(projects.getProjectName);
    newLink.domElement.setAttribute("href", "");
    sideBarBtnHolder.setChildren(newLink.domElement);
  }

  newSideBar.setChildren(sideBarHeader.domElement, sideBarBtnHolder.domElement);

  return newSideBar;
}

export default sideBar;
