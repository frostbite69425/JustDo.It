import projectContainer from "../../components/projectContainer.component.js";
import sideBar from "../../components/sideBar.component.js";

const projectView = () => {
  const content = document.querySelector(".content");
  const container = projectContainer();
  content.appendChild(container.domElement);
};

export default projectView;
