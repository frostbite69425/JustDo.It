import { add, isFuture, isDate } from "date-fns";
import log from "./logMessage.js";
import { checkSubTaskDoneState } from "./subTasksUtility.js";

class ToDo {
  #title;
  #priority;
  #description;
  #dueDate;
  #doneState;
  #notes;
  #subTaskArr = [];
  constructor(title, priority, date) {
    this.#title = title;
    this.#priority = priority;
    if (!isDate(date) || !isFuture(date)) {
      log("Not a valid Date!");
    } else {
      this.#dueDate = date;
    }
    this.#doneState = false;
  }

  #setDoneState(state) {
    this.#doneState = state;
  }

  get todoDoneState() {
    return this.#doneState;
  }

  toggleTodoDoneState() {
    this.#doneState = this.#doneState == false ? true : false;
  }

  get todoDueDate() {
    return this.#dueDate;
  }

  set todoDueDate(date) {
    if (!isDate(date) || !isFuture(date)) {
      log("Not a valid Date!");
    } else {
      this.#dueDate = date;
    }
  }

  get todoPriority() {
    return this.#priority;
  }

  set todoPriority(text) {
    this.#priority = text;
  }

  get todoTitle() {
    return this.#title;
  }

  set todoTitle(text) {
    this.#title = text;
  }

  set todoDescription(text) {
    this.#description = text;
  }

  get todoDescription() {
    return this.#description;
  }

  set todoNotes(userNotes) {
    this.#notes = userNotes;
  }

  get todoNotes() {
    return this.#notes;
  }

  get subTasks() {
    return this.#subTaskArr;
  }

  set subTasks(subtask) {
    this.#subTaskArr.push(subtask);
  }

  checkDoneState() {
    if (this.#subTaskArr.length > 0) {
      this.#setDoneState(checkSubTaskDoneState(this.#subTaskArr));
    }
  }
}

export default ToDo;
