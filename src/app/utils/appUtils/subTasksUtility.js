import subTask from "./subTaskClass.js";

const setSubTasks = (todo, title) => {
  const newSubTask = new subTask(title);
  todo.subTasks = newSubTask;
};

const deleteSubTasks = (todo, Title) => {
  const subTaskArray = todo.subTasks;
  for (const task of subTaskArray) {
    if (task.subTaskTitle == Title) {
      todo.delSubTask(task);
    }
  }
};

export { setSubTasks, deleteSubTasks };
