export default class Subtask {
  constructor(title) {
    this.title = title;
    this.subTaskDoneState = false;
  }

  get subTaskTitle() {
    return this.title;
  }

  set subTaskTitle(text) {
    this.title = text;
  }

  get subTaskState() {
    return this.subTaskDoneState;
  }

  toggleSubTaskDoneState() {
    this.subTaskDoneState = this.subTaskDoneState == false ? true : false;
  }
}
