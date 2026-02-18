import toDoComponent from "../../components/toDo.component.js";
import { format } from "date-fns";

function toDoVariablesParser(todo) {
  const todoTitle = todo.todoTitle;
  const todoPriority = todo.todoPriority;
  const todoDueDate = format(todo.todoDueDate, "dd / MMMM / yyyy");
  const todoDescription = todo.todoDescription;
  const todoNotes = todo.todoNotes;
  const todoSubtasks = todo.subTasks;
  const todoDoneState = todo.todoDoneState;
  const todoUid = todo.todoUid;
  const todoComponent = new toDoComponent(
    todoTitle,
    todoPriority,
    todoDueDate,
    todoDescription,
    todoNotes,
    todoSubtasks,
    todoDoneState,
    todoUid,
  );

  return todoComponent;
}

export default toDoVariablesParser;
