import elementFactory from "../controllers/uiControllers/elementFactory.controller.js";
import Project from "../utils/appUtils/ProjectClass.js";

function sideBar() {
  const newSideBar = elementFactory(
    "aside",
    "sidebar sidebar-toggle sidebar-btn-hidden",
  );
  const sideBarHomeBtnHolder = elementFactory(
    "div",
    "sidebar-home-btn-container",
  );
  const sideBarHomeBtn = elementFactory("button", "button home-btn");
  sideBarHomeBtn.insertText("Home");

  sideBarHomeBtnHolder.setChildren(sideBarHomeBtn.domElement);

  const sideBarHeader = elementFactory("div", "sidebar-header");

  const sideBarTitle = elementFactory("h2", "sidebar-title title");
  sideBarTitle.insertText("Your projects");
  sideBarHeader.setChildren(sideBarTitle.domElement);

  const sideBarBtnHolder = elementFactory("nav", "side-bar-link-holder nav");
  const totalProjects = Project.projectArray;
  for (const projects of totalProjects) {
    const newLink = elementFactory("a", "project-link link");
    newLink.insertText(projects.getProjectName);
    newLink.domElement.setAttribute("data-uid", projects.getProjectUid);
    sideBarBtnHolder.setChildren(newLink.domElement);
  }

  newSideBar.setChildren(
    sideBarHomeBtnHolder.domElement,
    sideBarHeader.domElement,
    sideBarBtnHolder.domElement,
  );

  return newSideBar;
}

export default sideBar;
