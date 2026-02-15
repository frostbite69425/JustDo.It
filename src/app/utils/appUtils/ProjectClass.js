import logMessage from "./logMessage.js";
import ToDo from "./toDoClass.js";
import { setSubTasks } from "./subTasksUtility.js";

export default class Project {
  static projectArray = [];

  static getProjectArray = () => Project.projectArray;

  static setProjectArray = (array) => (Project.projectArray = array);

  static deleteProjectPermanently = (project) => {
    const index = Project.projectArray.indexOf(project);
    Project.projectArray.splice(index, 1);
  };

  constructor(name) {
    this.projectName = name;
    this.projectToDos = [];
    Project.projectArray.push(this);
  }

  get getProjectName() {
    return this.projectName;
  }

  set setProjectName(text) {
    this.projectName = text;
  }

  addToDo(todo) {
    if (this.projectToDos.includes(todo)) {
      logMessage("This task is already part of the current project.");
      return;
    }
    this.projectToDos.push(todo);
  }

  removeToDo(todo) {
    if (!this.projectToDos.includes(todo)) {
      logMessage("Provided task is not part of this project!");
      return;
    }
    const index = this.projectToDos.indexOf(todo);
    this.projectToDos.splice(index, 1);
  }

  createNewToDo(
    title,
    prio,
    date,
    userDescription = null,
    userNotes = null,
    subTaskString = null,
  ) {
    const newToDo = new ToDo(title, prio, date);
    newToDo.todoDescription = userDescription;
    newToDo.todoNotes = userNotes;
    if (subTaskString !== null && subTaskString.indexOf(",") !== -1) {
      const subTaskArr = subTaskString.trim().split(",");
      setSubTasks(newToDo, subTaskArr);
    }
    this.addToDo(newToDo);
    console.log(newToDo);
  }

  get getProjectToDos() {
    return this.projectToDos;
  }
}
