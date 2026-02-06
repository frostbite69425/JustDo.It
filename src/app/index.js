import "../styles.css";
import ToDo from "./utils/appUtils/toDoClass.js";
import { setSubTasks } from "./utils/appUtils/subTasksUtility.js";
import Project from "./utils/appUtils/ProjectClass.js";

const newTodo = new ToDo("x", "high", new Date(2026, 11, 17));
const newProject = new Project("new Project");

setSubTasks(newTodo, "a", "b", "c");

const testArr = newTodo.subTasks;
for (const x of testArr) {
  x.toggleSubTaskDoneState();
}

newProject.addToDo(newTodo);

console.log(newProject.projectToDos[0].todoDoneState);

newTodo.checkDoneState();
console.log(newProject.projectToDos[0].todoDoneState);

// console.log(newTodo);
