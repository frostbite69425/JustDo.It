const todoMigrator = (formProject, toProject, ...todos) => {
  for (const todo of todos) {
    formProject.removeToDo(todo);
    toProject.addToDo(todo);
  }
};

export default todoMigrator;
