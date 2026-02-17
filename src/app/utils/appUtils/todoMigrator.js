import Project from "./ProjectClass.js";

const todoMigrator = (fromProject, toProjectTitle, ...todos) => {
  for (const todo of todos) {
    fromProject.removeToDo(todo);
    const projectArr = Project.getProjectArray();
    for (let i = 0; i < projectArr.length; i++) {
      if (projectArr[i].getProjectName == toProjectTitle) {
        const toProject = projectArr[i];
        toProject.addToDo(todo);
        break;
      }
    }
  }
};

export default todoMigrator;
