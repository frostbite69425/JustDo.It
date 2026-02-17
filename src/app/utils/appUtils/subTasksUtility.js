const setSubTasks = (todo, titleArr) => {
  for (const title of titleArr) {
    if (title !== "") {
      todo.subTasks = title;
    }
  }
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
