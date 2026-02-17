import selectedProjectContainer from "../../components/selectedProjectContainer.component.js";
import elementFactory from "../../controllers/uiControllers/elementFactory.controller.js";
import sideBar from "../../components/sideBar.component.js";
import sidebarToggler from "../../controllers/uiControllers/navToggler.controller.js";
import toggleViewMore from "../../controllers/uiControllers/viewMoreToggler.controller.js";
import makeNewToDoModal from "../../components/newToDoModal.component.js";
import addTodosController from "../../controllers/uiControllers/addToDos.controller.js";
import makeEditToDoModal from "../../components/editToDoModal.component.js";
import editTodoController from "../../controllers/uiControllers/editToDos.controller.js";
import doneToggler from "../../controllers/uiControllers/doneStateToggler.controller.js";
import deleteTodosController from "../../controllers/uiControllers/deleteToDos.controller.js";

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
  const editToDoModal = makeEditToDoModal();

  layoutDiv.setChildren(sidebar.domElement, selectedContainer.domElement);
  content.append(
    layoutDiv.domElement,
    addNewTodoModal.domElement,
    editToDoModal.domElement,
  );

  sidebarToggler();
  toggleViewMore();
  addTodosController(project);
  editTodoController(project);
  doneToggler(project);
  deleteTodosController(project);
}

export default selectedProjectView;
