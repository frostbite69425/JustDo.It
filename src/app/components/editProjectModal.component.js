import elementFactory from "../controllers/uiControllers/elementFactory.controller.js";

function makeEditProjectModal() {
  const dialog = elementFactory("dialog", "edit-project-modal modal");

  const form = elementFactory("form", "edit-project-form form");
  form.domElement.setAttribute("id", "edit-project-form");

  const namePara = elementFactory("p", "edit-project-para");

  const nameLabel = elementFactory("label", "label");
  nameLabel.insertText("Project Name:");
  nameLabel.domElement.setAttribute("for", "edited-project-name");

  const nameInput = elementFactory("input", "project-name input");
  nameInput.domElement.setAttribute("type", "text");
  nameInput.domElement.setAttribute("name", "editProjectName");
  nameInput.domElement.setAttribute("maxlength", "25");
  nameInput.domElement.setAttribute("id", "edited-project-name");
  nameInput.domElement.setAttribute("autofocus", "");
  nameInput.domElement.setAttribute("required", "");

  const modalBtnContainer = elementFactory(
    "div",
    "edit-project-modal-btn-container btn-container",
  );

  const cancelBtn = elementFactory(
    "button",
    "edit-project-cancel-modal-btn cancel-btn button",
  );
  cancelBtn.insertText("Cancel");
  const confirmBtn = elementFactory(
    "button",
    "edit-project-confirm-modal-btn confirm-btn button",
  );
  confirmBtn.insertText("Edit Project");

  cancelBtn.domElement.setAttribute("value", "cancel");
  cancelBtn.domElement.setAttribute("formmethod", "dialog");

  confirmBtn.domElement.setAttribute("value", "default");

  dialog.setChildren(form.domElement);
  form.setChildren(namePara.domElement, modalBtnContainer.domElement);
  namePara.setChildren(nameLabel.domElement);
  nameLabel.setChildren(nameInput.domElement);
  modalBtnContainer.setChildren(cancelBtn.domElement, confirmBtn.domElement);

  return dialog;
}

export default makeEditProjectModal;
