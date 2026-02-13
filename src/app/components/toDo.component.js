import elementFactory from "../controllers/uiControllers/elementFactory.controller.js";
import { format } from "date-fns";

function toDoComponent(todo) {
  const toDoCard = elementFactory("div", "todo-card card");
  const toDoTitle = elementFactory("h2", "todo-title title");
  const toDoPriority = elementFactory("div", "todo-priority-div");
  const toDoDueDate = elementFactory("div", "todo-due-date");
  const toDoViewMoreBtn = elementFactory("button", "todo-view-more-btn button");

  toDoTitle.insertText(todo.todoTitle);
  toDoPriority.insertText(`Priority Level: ${todo.todoPriority}`);

  const formattedDate = format(todo.todoDueDate, "dd / MMMM / yyyy");

  const doneCheckLabel = elementFactory("label", "todo-done-state-label");
  const doneCheck = elementFactory("input", "todo-done-state-toggler");
  doneCheck.domElement.setAttribute("type", "checkbox");
  doneCheckLabel.insertText("Task completed");

  doneCheckLabel.setChildren(doneCheck.domElement);

  toDoDueDate.insertText(`Due date: ${formattedDate}`);
  toDoViewMoreBtn.insertText("View More");
  const toDoDescription = elementFactory("div", "todo-desc more-hidden");
  toDoDescription.insertText(`Description: ${todo.todoDescription}`);
  const toDoNotes = elementFactory("div", "todo-notes more-hidden");
  toDoNotes.insertText(`Notes: ${todo.todoNotes}`);

  toDoCard.setChildren(
    toDoTitle.domElement,
    toDoPriority.domElement,
    toDoDueDate.domElement,
    doneCheckLabel.domElement,
    toDoViewMoreBtn.domElement,
    toDoDescription.domElement,
    toDoNotes.domElement,
  );

  const totalSubtasks = todo.subTasks;
  if (totalSubtasks.length > 0) {
    const toDoSubtasks = elementFactory("ul", "todo-subTasks ul more-hidden");
    toDoSubtasks.insertText(`${todo.subTasks}`);
    for (const task of totalSubtasks) {
      const subTaskHolder = elementFactory(
        "div",
        "todo-subtask-holder more-hidden",
      );
      const newSubtask = elementFactory("li", "todo-subtask-li li more-hidden");
      const subTaskDelBtn = elementFactory(
        "button",
        "subtask-del-btn cancel-btn button more-hidden",
      ); // cancel-btn could potentially introduce bugs. Check
      newSubtask.insertText(task.subTaskTitle);
      subTaskDelBtn.insertText("Delete");

      subTaskHolder.setChildren(
        newSubtask.domElement,
        subTaskDelBtn.domElement,
      );
    }
    toDoCard.setChildren(toDoSubtasks);
  }

  return toDoCard;
}

export default toDoComponent;
