import elementFactory from "../controllers/uiControllers/elementFactory.controller.js";

function confirmDeleteModal(element) {
  const dialog = elementFactory("dialog", "confirm-delete-modal modal");
  const modalBtnContainer = elementFactory(
    "div",
    "modal-btn-container btn-container",
  );
  const para = elementFactory("p", "modal-text");
  para.insertText(`Are you sure you want to delete this ${element}?`);
  const cancelBtn = elementFactory("button", "cancel-modal-btn button");
  cancelBtn.insertText("Cancel");
  const confirmBtn = elementFactory("button", "confirm-modal-btn button");
  confirmBtn.insertText("Confirm");

  cancelBtn.domElement.setAttribute("value", "cancel");
  cancelBtn.domElement.setAttribute("formmethod", "dialog");

  confirmBtn.domElement.setAttribute("value", "default");

  dialog.setChildren(para, modalBtnContainer);
  modalBtnContainer.setChildren(cancelBtn, confirmBtn);

  return dialog;
}

export default confirmDeleteModal;
