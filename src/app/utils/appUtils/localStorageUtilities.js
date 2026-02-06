function saveToDoToLocalStorage(toDo) {
  const stringifiedToDo = toDo.ToDoForStorage;
  localStorage.setItem("todo", stringifiedToDo);
}

function saveProjectToLocalStorage(project) {
  const stringifiedProject = project.ProjectForStorage;
  console.log({ project, stringifiedProject });
  localStorage.setItem("project", stringifiedProject);
}

function getItemFromLocalStorage(item) {
  const retrievedItem = localStorage.getItem(item);
  return JSON.parse(retrievedItem);
}

export {
  saveProjectToLocalStorage,
  saveToDoToLocalStorage,
  getItemFromLocalStorage,
};
