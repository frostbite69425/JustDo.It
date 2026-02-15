import selectedProjectContainer from "../../components/selectedProjectContainer.component.js";
import elementFactory from "../../controllers/uiControllers/elementFactory.controller.js";
import sideBar from "../../components/sideBar.component.js";
import sidebarToggler from "../../controllers/uiControllers/navToggler.controller.js";
import toggleViewMore from "../../controllers/uiControllers/viewMoreToggler.controller.js";
import makeNewToDoModal from "../../components/newToDoModal.component.js";
import addTodosController from "../../controllers/uiControllers/addToDos.controller.js";

function selectedProjectView(project) {
  const content = document.querySelector(".content");
  while (content.lastChild) {
    content.removeChild(content.firstChild);
  }
  const layoutDiv = elementFactory(
    "div",
    "selected-project-layout-div display-container",
  );
  layoutDiv.domElement.setAttribute("data-projectname", project.getProjectName);

  const selectedContainer = selectedProjectContainer(project);
  const sidebar = sideBar();
  const addNewTodoModal = makeNewToDoModal();

  layoutDiv.setChildren(sidebar.domElement, selectedContainer.domElement);
  content.append(layoutDiv.domElement, addNewTodoModal.domElement);

  sidebarToggler();
  toggleViewMore();
  addTodosController();
}

export default selectedProjectView;
