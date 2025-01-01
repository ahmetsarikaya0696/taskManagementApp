import TaskItem from "./TaskItem";
import "./TaskList.css";

function TaskList({ tasks }) {
  if (!tasks || tasks.length == 0) return <div>Henüz task eklenmemiş!</div>;

  return (
    <div className="taskList">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
