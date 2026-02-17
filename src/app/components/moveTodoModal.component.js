import elementFactory from "../controllers/uiControllers/elementFactory.controller.js";
import Project from "../utils/appUtils/ProjectClass.js";

function migrateTodoModal(project) {
  const dialog = elementFactory("dialog", "migrate-todo-modal modal");

  const form = elementFactory("form", "migrate-todo-form form");
  form.domElement.setAttribute("id", "migrate-todo-form");

  const formHeading = elementFactory("h2", "migrate-todo-heading title");
  formHeading.insertText("Migrate task to another project?");

  const projectsLabel = elementFactory("label", "label");
  projectsLabel.insertText("Choose a project to migrate this task to:");
  projectsLabel.domElement.setAttribute("for", "migrate-todo");
  projectsLabel.domElement.setAttribute("name", "migrateTodo");

  const projectSelect = elementFactory("select", "migrate-todo-select");
  projectSelect.domElement.setAttribute("id", "migrate-todo");
  projectsLabel.setChildren(projectSelect.domElement);

  const totalProjects = Project.getProjectArray();
  const currentProject = project;
  for (const userProject of totalProjects) {
    if (userProject != currentProject) {
      const availableProject = elementFactory("option", "available-project");
      availableProject.insertText(userProject.getProjectName);
      projectSelect.setChildren(availableProject.domElement);
    }
  }

  const modalBtnContainer = elementFactory(
    "div",
    "migrate-todo-modal-btn-container btn-container",
  );

  const cancelBtn = elementFactory(
    "button",
    "migrate-todo-cancel-modal-btn cancel-btn button",
  );
  cancelBtn.insertText("Cancel");
  const confirmBtn = elementFactory(
    "button",
    "migrate-todo-confirm-modal-btn confirm-btn button",
  );
  confirmBtn.insertText("Migrate Task");

  cancelBtn.domElement.setAttribute("value", "cancel");
  cancelBtn.domElement.setAttribute("formmethod", "dialog");

  confirmBtn.domElement.setAttribute("value", "default");
  modalBtnContainer.setChildren(cancelBtn.domElement, confirmBtn.domElement);

  form.setChildren(
    formHeading.domElement,
    projectsLabel.domElement,
    modalBtnContainer.domElement,
  );

  dialog.setChildren(form.domElement);
  return dialog;
}

export default migrateTodoModal;
