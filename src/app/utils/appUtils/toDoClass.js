import { isFuture, isDate } from "date-fns";
import log from "./logMessage.js";
import subTaskMaker from "./subTaskClass.js";

class ToDo {
  subTaskArr = [];

  constructor(title, priority, date) {
    this.title = title;
    this.priority = priority;
    if (!isDate(date) || !isFuture(date)) {
      log("Not a valid Date!");
    } else {
      this.dueDate = date;
    }
    this.doneState = false;
    this.uuid = crypto.randomUUID();
  }

  get todoUid() {
    return this.uuid;
  }

  get todoDoneState() {
    return this.doneState;
  }

  toggleTodoDoneState() {
    this.doneState = this.doneState == false ? true : false;
  }

  get todoDueDate() {
    return this.dueDate;
  }

  set todoDueDate(date) {
    if (!isDate(date) || !isFuture(date)) {
      log("Not a valid Date!");
    } else {
      this.dueDate = date;
    }
  }

  get todoPriority() {
    return this.priority;
  }

  set todoPriority(text) {
    this.priority = text;
  }

  get todoTitle() {
    return this.title;
  }

  set todoTitle(text) {
    this.title = text;
  }

  set todoDescription(text) {
    this.description = text;
  }

  get todoDescription() {
    return this.description;
  }

  set todoNotes(userNotes) {
    this.notes = userNotes;
  }

  get todoNotes() {
    return this.notes;
  }

  get subTasks() {
    return this.subTaskArr;
  }

  set subTasks(subtaskTitle) {
    const newSubTask = new subTaskMaker(subtaskTitle);
    this.subTaskArr.push(newSubTask);
  }

  delSubTask(subtask) {
    const index = this.subTaskArr.indexOf(subtask);
    this.subTaskArr.splice(index, 1);
  }
}

export default ToDo;
