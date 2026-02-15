const setSubTasks = (todo, titleArr) => {
  for (const title of titleArr) {
    todo.subTasks = title;
    console.log(todo.subTasks);
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
