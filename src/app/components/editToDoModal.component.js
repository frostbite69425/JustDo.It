import elementFactory from "../controllers/uiControllers/elementFactory.controller.js";
import { startOfToday, toDate } from "date-fns";

function makeEditToDoModal() {
  const dialog = elementFactory("dialog", "edit-todo-modal modal");

  const form = elementFactory("form", "edit-todo-form form");
  form.domElement.setAttribute("id", "edit-todo-form");

  //name input

  const editFormHeading = elementFactory("h2", "title");
  editFormHeading.insertText("Edit Task Details");

  const nameLabel = elementFactory("label", "label");
  nameLabel.insertText("ToDo Title:");
  nameLabel.domElement.setAttribute("for", "edit-todo-title");

  const nameInput = elementFactory("input", "edit-name-input");
  nameInput.domElement.setAttribute("type", "text");
  nameInput.domElement.setAttribute("name", "todoName");
  nameInput.domElement.setAttribute("maxlength", "20");
  nameInput.domElement.setAttribute("id", "edit-todo-title");
  nameInput.domElement.setAttribute("autofocus", "");
  nameInput.domElement.setAttribute(
    "placeholder",
    "Perhaps something different...",
  );

  nameLabel.setChildren(nameInput.domElement);

  //prio input

  const prioLabel = elementFactory("label", "label");
  prioLabel.insertText("Choose a priority level");
  prioLabel.domElement.setAttribute("for", "edit-todo-prio");
  nameInput.domElement.setAttribute("name", "editTodoPrio");

  const prioSelect = elementFactory("select", "edit-priority-select");
  prioSelect.domElement.setAttribute("id", "edit-todo-prio");

  const lowPrioOption = elementFactory("option", "option-low");
  lowPrioOption.insertText("low");
  lowPrioOption.domElement.setAttribute("value", "low");

  const medPrioOption = elementFactory("option", "option-med");
  medPrioOption.insertText("medium");
  medPrioOption.domElement.setAttribute("value", "medium");

  const highPrioOption = elementFactory("option", "option-high");
  highPrioOption.insertText("high");
  highPrioOption.domElement.setAttribute("value", "high");

  const emergencyPrioOption = elementFactory("option", "option-emergency");
  emergencyPrioOption.insertText("emergency");
  emergencyPrioOption.domElement.setAttribute("value", "emergency");

  prioLabel.setChildren(prioSelect.domElement);
  prioSelect.setChildren(
    lowPrioOption.domElement,
    medPrioOption.domElement,
    highPrioOption.domElement,
    emergencyPrioOption.domElement,
  );

  // date input

  const dateLabel = elementFactory("label", "label");
  dateLabel.insertText("Set your due date:");
  dateLabel.domElement.setAttribute("for", "edit-todo-date");
  dateLabel.domElement.setAttribute("name", "editTodoDate");

  const dateInput = elementFactory("input", "edit-date-input");
  dateInput.domElement.setAttribute("type", "date");
  dateInput.domElement.setAttribute("name", "todoDate");
  dateInput.domElement.setAttribute("id", "edit-todo-date");
  dateInput.domElement.setAttribute("value", `${startOfToday}`);
  dateInput.domElement.setAttribute("min", `${startOfToday}`);

  dateLabel.setChildren(dateInput.domElement);

  // desc input

  const descLabel = elementFactory("label", "label");
  descLabel.insertText("ToDo Description:");
  descLabel.domElement.setAttribute("for", "edit-todo-desc");

  const descInput = elementFactory("input", "edit-desc-input");
  descInput.domElement.setAttribute("type", "text");
  descInput.domElement.setAttribute("name", "editTodoDesc");
  descInput.domElement.setAttribute("maxlength", "120");
  descInput.domElement.setAttribute("id", "edit-todo-desc");
  descInput.domElement.setAttribute(
    "placeholder",
    "Maybe more tips about folding clothes...",
  );

  descLabel.setChildren(descInput.domElement);

  // notes input

  const notesLabel = elementFactory("label", "label");
  notesLabel.insertText("ToDo Notes:");
  notesLabel.domElement.setAttribute("for", "edit-todo-notes");

  const notesInput = elementFactory("textarea", "edit-notes-input");
  notesInput.domElement.setAttribute("name", "editTodoNotes");
  notesInput.domElement.setAttribute("maxlength", "300");
  notesInput.domElement.setAttribute("id", "edit-todo-notes");
  notesInput.domElement.setAttribute(
    "placeholder",
    "Here's a note for you on how to wash clothes.",
  );

  notesLabel.setChildren(notesInput.domElement);

  const subTasksLabel = elementFactory("label", "label");
  subTasksLabel.insertText("Sub Tasks:");
  subTasksLabel.domElement.setAttribute("for", "edit-todo-subTasks");

  const subTasksInput = elementFactory("textarea", "edit-subTasks-input");
  subTasksInput.domElement.setAttribute("name", "editTodoSubTasks");
  subTasksInput.domElement.setAttribute("id", "edit-todo-subTasks");
  subTasksInput.domElement.setAttribute(
    "placeholder",
    "You can add multiple subtasks at once by separating each one with a comma",
  );

  subTasksLabel.setChildren(subTasksInput.domElement);

  // submission btns and holder

  const modalBtnContainer = elementFactory(
    "div",
    "edit-todo-modal-btn-container btn-container",
  );

  const cancelBtn = elementFactory(
    "button",
    "edit-todo-cancel-modal-btn cancel-btn button",
  );
  cancelBtn.insertText("Cancel");
  const confirmBtn = elementFactory(
    "button",
    "edit-todo-confirm-modal-btn confirm-btn button",
  );
  confirmBtn.insertText("Add ToDo");

  cancelBtn.domElement.setAttribute("value", "cancel");
  cancelBtn.domElement.setAttribute("formmethod", "dialog");

  confirmBtn.domElement.setAttribute("value", "default");
  modalBtnContainer.setChildren(cancelBtn.domElement, confirmBtn.domElement);

  form.setChildren(
    editFormHeading.domElement,
    nameLabel.domElement,
    prioLabel.domElement,
    dateLabel.domElement,
    descLabel.domElement,
    notesLabel.domElement,
    subTasksLabel.domElement,
    modalBtnContainer.domElement,
  );

  dialog.setChildren(form.domElement);
  return dialog;
}

export default makeEditToDoModal;
