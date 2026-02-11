import elementFactory from "../controllers/uiControllers/elementFactory.controller.js";
import toDoComponent from "./toDo.component.js";

function selectedProjectContainer(project) {
  const toDoContainer = elementFactory(
    "section",
    "display-container todo-container",
  );

  const topNav = elementFactory("nav", "todo-page-nav nav");

  const title = elementFactory("h1", "todo-page-title title");
  title.insertText(project.getProjectName);

  const displaySideBarBtn = elementFactory(
    "button",
    "display-sidebar-btn button",
  );
  displaySideBarBtn.insertText("sidebarBtn"); // replace with the svg path for the three bars thingy

  const addToDoBtn = elementFactory("button", "add-todo-btn button");
  addToDoBtn.insertText("Add ToDo."); // replace with the svg path for the plus sign

  topNav.setChildren(
    displaySideBarBtn.domElement,
    title.domElement,
    addToDoBtn.domElement,
  );

  const toDoCardHolder = elementFactory("div", "projects-container");

  toDoContainer.setChildren(topNav.domElement, toDoCardHolder.domElement);

  const totalToDos = project.getProjectToDos;
  for (const toDo of totalToDos) {
    const newToDoCard = toDoComponent(toDo);
    toDoCardHolder.setChildren(newToDoCard.domElement);
  }

  return toDoContainer;
}

export default selectedProjectContainer;
