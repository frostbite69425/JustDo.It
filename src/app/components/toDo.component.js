import elementFactory from "../controllers/uiControllers/elementFactory.controller.js";

function toDoComponent(
  todoTitle,
  todoPriority,
  todoDueDate,
  todoDescription = null,
  todoNotes = null,
  todoSubtasks = null,
) {
  const toDoCard = elementFactory("div", "todo-card card");
  const toDoTitle = elementFactory("h2", "todo-title title");
  toDoTitle.insertText(todoTitle);

  const toDoPriority = elementFactory("div", "todo-priority-div");
  const toDoPriorityTextDiv = elementFactory("div", "todo-priority-text-div");
  const toDoPriorityVariableDiv = elementFactory(
    "div",
    "todo-priority-var-div",
  );
  toDoPriorityTextDiv.insertText("Priority: ");
  toDoPriorityVariableDiv.insertText(todoPriority);
  toDoPriority.setChildren(
    toDoPriorityTextDiv.domElement,
    toDoPriorityVariableDiv.domElement,
  );

  const toDoDueDate = elementFactory("div", "todo-due-date");
  const toDoDueDateTextDiv = elementFactory("div", "todo-date-text-div");
  const toDoDueDateVariableDiv = elementFactory("div", "todo-date-var-div");
  toDoDueDateTextDiv.insertText("Due Date: ");
  toDoDueDateVariableDiv.insertText(todoDueDate);
  toDoDueDate.setChildren(
    toDoDueDateTextDiv.domElement,
    toDoDueDateVariableDiv.domElement,
  );

  const doneCheckLabel = elementFactory("label", "todo-done-state-label");
  const doneCheckText = elementFactory("div", "todo-done-state-text");
  doneCheckText.insertText("Task completed");
  const doneCheck = elementFactory("input", "todo-done-state-toggler");
  doneCheck.domElement.setAttribute("type", "checkbox");

  doneCheckLabel.setChildren(doneCheckText.domElement, doneCheck.domElement);

  const toDoViewMoreBtn = elementFactory("button", "todo-view-more-btn button");
  toDoViewMoreBtn.insertText("View More");

  toDoCard.setChildren(
    toDoTitle.domElement,
    toDoPriority.domElement,
    toDoDueDate.domElement,
    doneCheckLabel.domElement,
    toDoViewMoreBtn.domElement,
  );

  if (todoDescription !== null) {
    const toDoDescription = elementFactory(
      "div",
      "todo-desc more-hidden more-toggle",
    );
    const toDoDescTextDiv = elementFactory("div", "todo-desc-text-div");
    const toDoDescVariableDiv = elementFactory("div", "todo-desc-var-div");
    toDoDescTextDiv.insertText("Description: ");
    toDoDescVariableDiv.insertText(todoDescription);
    toDoDescription.setChildren(
      toDoDescTextDiv.domElement,
      toDoDescVariableDiv.domElement,
    );
    toDoCard.setChildren(toDoDescription.domElement);
  }

  if (todoNotes !== null) {
    const toDoNotes = elementFactory(
      "div",
      "todo-notes more-hidden more-toggle",
    );
    const toDoNotesTextDiv = elementFactory("div", "todo-notes-text-div");
    const toDoNotesVariableDiv = elementFactory("div", "todo-notes-var-div");
    toDoNotesTextDiv.insertText("Notes: ");
    toDoNotesVariableDiv.insertText(todoNotes);
    toDoNotes.setChildren(
      toDoNotesTextDiv.domElement,
      toDoNotesVariableDiv.domElement,
    );
    toDoCard.setChildren(toDoNotes.domElement);
  }

  const todoBtnContainer = elementFactory(
    "div",
    "todo-btn-container btn-container more-hidden more-toggle",
  );
  const editTodoButton = elementFactory("button", "edit-todo-btn button");
  editTodoButton.insertText("Edit ToDo");
  const moveTodoButton = elementFactory("button", "move-todo-btn button");
  moveTodoButton.insertText("Move Todo");
  const deleteTodoButton = elementFactory("button", "delete-todo-btn button");
  deleteTodoButton.insertText("Delete ToDo");

  todoBtnContainer.setChildren(
    editTodoButton.domElement,
    moveTodoButton.domElement,
    deleteTodoButton.domElement,
  );

  if (todoSubtasks.length > 0 && todoSubtasks !== null) {
    const toDoSubtasksList = elementFactory(
      "ul",
      "todo-subTasks ul more-hidden more-toggle",
    );
    toDoSubtasksList.insertText(`Sub Tasks:`);
    for (const task of todoSubtasks) {
      const subTaskHolder = elementFactory(
        "div",
        "todo-subtask-holder more-hidden more-toggle",
      );
      const newSubtask = elementFactory(
        "li",
        "todo-subtask-li li more-hidden more-toggle",
      );
      const subTaskDelBtn = elementFactory(
        "button",
        "subtask-del-btn cancel-btn button more-hidden more-toggle",
      ); // cancel-btn could potentially introduce bugs. Check
      newSubtask.insertText(task.subTaskTitle);
      subTaskDelBtn.insertText("Delete");

      subTaskHolder.setChildren(
        newSubtask.domElement,
        subTaskDelBtn.domElement,
      );

      toDoSubtasksList.setChildren(subTaskHolder.domElement);
    }
    toDoCard.setChildren(toDoSubtasksList.domElement);
  }

  const toDoViewLessBtn = elementFactory(
    "button",
    "todo-view-less-btn button more-hidden more-toggle",
  );
  toDoViewLessBtn.insertText("View Less");

  toDoCard.setChildren(todoBtnContainer.domElement, toDoViewLessBtn.domElement);

  toDoCard.domElement.classList.add(todoPriority);

  return toDoCard;
}

export default toDoComponent;
