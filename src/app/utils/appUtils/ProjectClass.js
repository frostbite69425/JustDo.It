import logMessage from "./logMessage.js";
import ToDo from "./toDoClass.js";

export default class Project {
  #projectToDos;
  #projectName;

  static projectArray = [];

  static getProjectArray = () => Project.projectArray;

  constructor(name) {
    this.#projectName = name;
    this.#projectToDos = [];
    Project.projectArray.push(this);
  }

  get projectName() {
    return this.#projectName;
  }

  set projectName(text) {
    this.#projectName = text;
  }

  addToDo(todo) {
    if (this.#projectToDos.includes(todo)) {
      logMessage("This task is already part of the current project.");
      return;
    }
    this.#projectToDos.push(todo);
  }

  removeToDo(todo) {
    if (!this.#projectToDos.includes(todo)) {
      logMessage("Provided task is not part of this project!");
      return;
    }
    const index = this.#projectToDos.indexOf(todo);
    this.#projectToDos.splice(index, 1);
  }

  createNewToDo(title, prio, date) {
    const newToDo = new ToDo(title, prio, date);
    this.addToDo(newToDo);
  }

  get projectToDos() {
    return this.#projectToDos;
  }

  get ProjectForStorage() {
    console.log(this);
    console.log(JSON.stringify(this));

    return JSON.stringify(this);
  }
}
