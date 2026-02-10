import elementFactory from "../controllers/uiControllers/elementFactory.controller.js";

function makeNewProjectModal() {
  const dialog = elementFactory("dialog", "new-project-modal modal");

  const form = elementFactory("form", "new-project-form form");
  form.domElement.setAttribute("id", "new-project-form");

  const namePara = elementFactory("p", "new-project-para");

  const nameLabel = elementFactory("label", "label");
  nameLabel.insertText("Project Name:");
  nameLabel.domElement.setAttribute("for", "project-name");

  const nameInput = elementFactory("input", "project-name input");
  nameInput.domElement.setAttribute("type", "text");
  nameInput.domElement.setAttribute("name", "projectName");
  nameInput.domElement.setAttribute("maxlength", "20");
  nameInput.domElement.setAttribute("id", "project-name");
  nameInput.domElement.setAttribute("autofocus", "");

  const modalBtnContainer = elementFactory(
    "div",
    "new-project-modal-btn-container btn-container",
  );

  const cancelBtn = elementFactory(
    "button",
    "new-project-cancel-modal-btn cancel-btn button",
  );
  cancelBtn.insertText("Cancel");
  const confirmBtn = elementFactory(
    "button",
    "new-project-confirm-modal-btn confirm-btn button",
  );
  confirmBtn.insertText("Create  Project");

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

export default makeNewProjectModal;
