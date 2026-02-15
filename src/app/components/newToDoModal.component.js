import elementFactory from "../controllers/uiControllers/elementFactory.controller.js";
import { startOfToday, sub } from "date-fns";

function makeNewToDoModal() {
  const dialog = elementFactory("dialog", "new-todo-modal modal");

  const form = elementFactory("form", "new-todo-form form");
  form.domElement.setAttribute("id", "new-todo-form");

  //name input

  const nameLabel = elementFactory("label", "label");
  nameLabel.insertText("ToDo Title:");
  nameLabel.domElement.setAttribute("for", "todo-title");

  const nameInput = elementFactory("input", "name-input");
  nameInput.domElement.setAttribute("type", "text");
  nameInput.domElement.setAttribute("name", "todoName");
  nameInput.domElement.setAttribute("maxlength", "20");
  nameInput.domElement.setAttribute("id", "todo-title");
  nameInput.domElement.setAttribute("autofocus", "");
  nameInput.domElement.setAttribute("placeholder", "Do your laundry.");
  nameInput.domElement.setAttribute("required", "");

  nameLabel.setChildren(nameInput.domElement);

  //prio input

  const prioLabel = elementFactory("label", "label");
  prioLabel.insertText("Choose a priority level");
  prioLabel.domElement.setAttribute("for", "todo-prio");
  nameInput.domElement.setAttribute("name", "todoPrio");

  const prioSelect = elementFactory("select", "priority-select");
  prioSelect.domElement.setAttribute("id", "todo-prio");

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
  dateLabel.domElement.setAttribute("for", "todo-date");
  dateLabel.domElement.setAttribute("name", "todoDate");

  const dateInput = elementFactory("input", "date-input");
  dateInput.domElement.setAttribute("type", "date");
  dateInput.domElement.setAttribute("name", "todoDate");
  dateInput.domElement.setAttribute("id", "todo-date");
  dateInput.domElement.setAttribute("value", `${startOfToday}`);
  dateInput.domElement.setAttribute("min", `${startOfToday}`);
  dateInput.domElement.setAttribute("required", "");

  dateLabel.setChildren(dateInput.domElement);

  // desc input

  const descLabel = elementFactory("label", "label");
  descLabel.insertText("ToDo Description:");
  descLabel.domElement.setAttribute("for", "todo-desc");

  const descInput = elementFactory("input", "desc-input");
  descInput.domElement.setAttribute("type", "text");
  descInput.domElement.setAttribute("name", "todoDesc");
  descInput.domElement.setAttribute("maxlength", "120");
  descInput.domElement.setAttribute("id", "todo-desc");
  descInput.domElement.setAttribute(
    "placeholder",
    "Fold your clothes in half before trying to stuff them in your closet...",
  );

  descLabel.setChildren(descInput.domElement);

  // notes input

  const notesLabel = elementFactory("label", "label");
  notesLabel.insertText("ToDo Notes:");
  notesLabel.domElement.setAttribute("for", "todo-notes");

  const notesInput = elementFactory("textarea", "notes-input");
  notesInput.domElement.setAttribute("name", "todoNotes");
  notesInput.domElement.setAttribute("maxlength", "300");
  notesInput.domElement.setAttribute("id", "todo-notes");
  notesInput.domElement.setAttribute(
    "placeholder",
    "Here's a note about you on how to fold clothes.",
  );

  notesLabel.setChildren(notesInput.domElement);

  const subTasksLabel = elementFactory("label", "label");
  subTasksLabel.insertText("Sub Tasks:");
  subTasksLabel.domElement.setAttribute("for", "todo-subtTasks");

  const subTasksInput = elementFactory("textarea", "subTasks-input");
  subTasksInput.domElement.setAttribute("name", "todoSubTasks");
  subTasksInput.domElement.setAttribute("id", "todo-subTasks");
  subTasksInput.domElement.setAttribute(
    "placeholder",
    "You can add multiple subtasks at once by separating each one with a comma",
  );

  subTasksLabel.setChildren(subTasksInput.domElement);

  // submission btns and holder

  const modalBtnContainer = elementFactory(
    "div",
    "new-project-modal-btn-container btn-container",
  );

  const cancelBtn = elementFactory(
    "button",
    "new-todo-cancel-modal-btn cancel-btn button",
  );
  cancelBtn.insertText("Cancel");
  const confirmBtn = elementFactory(
    "button",
    "new-todo-confirm-modal-btn confirm-btn button",
  );
  confirmBtn.insertText("Add ToDo");

  cancelBtn.domElement.setAttribute("value", "cancel");
  cancelBtn.domElement.setAttribute("formmethod", "dialog");

  confirmBtn.domElement.setAttribute("value", "default");
  modalBtnContainer.setChildren(cancelBtn.domElement, confirmBtn.domElement);

  form.setChildren(
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

export default makeNewToDoModal;
