import elementFactory from "../controllers/uiControllers/elementFactory.controller.js";
import projectProgressDiv from "./projectProgressDiv.component.js";
import illustrationOne from "../../assets/illustrations/illustrationPlanning.svg";
import illustrationTwo from "../../assets/illustrations/illustrationPlanning2.svg";
import illustrationThree from "../../assets/illustrations/illustrationPlanning3.svg";

function projectComponent(project) {
  const illustrationArr = [illustrationOne, illustrationTwo, illustrationThree];
  const randInt = Math.floor(Math.random() * 3);

  const projectCard = elementFactory("div", "project-card card");
  const projcetTitle = elementFactory("h1", "project-title title");
  const projectImage = elementFactory("img", "project-image image");
  const progressDiv = projectProgressDiv(project);

  const projectBtnContainer = elementFactory(
    "div",
    "project-btn-container btn-container",
  );
  const viewProjectButton = elementFactory("button", "view-project-btn button");
  viewProjectButton.insertText("View Project");
  const editProjectButton = elementFactory("button", "edit-project-btn button");
  editProjectButton.insertText("Edit Project");
  const deleteProjectButton = elementFactory(
    "button",
    "delete-project-btn button",
  );
  deleteProjectButton.insertText("Delete Project");

  projcetTitle.insertText(project.getProjectName);
  projectImage.domElement.src = illustrationArr[randInt];

  projectCard.setChildren(
    projcetTitle.domElement,
    projectImage.domElement,
    progressDiv.domElement,
    projectBtnContainer.domElement,
  );
  projectBtnContainer.setChildren(
    viewProjectButton.domElement,
    editProjectButton.domElement,
    deleteProjectButton.domElement,
  );

  projectCard.domElement.setAttribute(
    "data-projectname",
    project.getProjectName,
  );

  return projectCard;
}

export default projectComponent;
