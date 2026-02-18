const setSubTasks = (todo, titleArr) => {
  for (const title of titleArr) {
    if (title !== "") {
      todo.subTasks = title;
    }
  }
};

const deleteSubTasks = (todo, uid) => {
  const subTaskArray = todo.subTasks;
  for (const task of subTaskArray) {
    if (task.subTaskUid == uid) {
      todo.delSubTask(task);
    }
  }
};

export { setSubTasks, deleteSubTasks };
