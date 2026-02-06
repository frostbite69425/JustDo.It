import subTask from "./subTaskClass.js";

const setSubTasks = (todo, ...subTaskTitles) => {
  for (const title of subTaskTitles) {
    const newSubTask = new subTask(title);
    todo.subTasks = newSubTask;
  }
};

const checkSubTaskDoneState = (subTaskArr) => {
  if (
    subTaskArr.filter((task) => task.subTaskDoneState == true).length ==
    subTaskArr.length
  ) {
    return true;
  } else {
    return false;
  }
};

export { setSubTasks, checkSubTaskDoneState };
