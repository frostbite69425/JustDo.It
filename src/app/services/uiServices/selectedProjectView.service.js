import selectedProjectContainer from "../../components/selectedProjectContainer.component.js";
import elementFactory from "../../controllers/uiControllers/elementFactory.controller.js";
import sideBar from "../../components/sideBar.component.js";

function selectedProjectView(project) {
  const content = document.querySelector(".content");
  while (content.lastChild) {
    content.removeChild(content.firstChild);
  }
  const layoutDiv = elementFactory(
    "div",
    "selected-project-layout-div display-container",
  );

  const selectedContainer = selectedProjectContainer(project);
  const sidebar = sideBar();
  layoutDiv.setChildren(sidebar.domElement, selectedContainer.domElement);
  content.appendChild(layoutDiv.domElement);
}

export default selectedProjectView;
