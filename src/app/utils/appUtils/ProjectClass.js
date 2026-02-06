export default class Project {
  #projectToDos;
  #projectName;
  constructor(name) {
    this.#projectName = name;
    this.#projectToDos = [];
  }

  get projectName() {
    return this.#projectName;
  }

  set projectName(name) {
    this.#projectName = name;
  }

  addToDo(...todos) {
    for (const todo of todos) {
      this.#projectToDos.push(todo);
    }
  }

  removeToDo(...todos) {
    for (const todo of todos) {
      const index = this.#projectToDos.indexOf(todo.todoTitle);
      this.#projectToDos.splice(index, 1);
    }
  }

  get projectToDos() {
    return this.#projectToDos;
  }
}
