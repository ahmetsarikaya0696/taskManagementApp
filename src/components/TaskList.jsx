import TaskItem from "./TaskItem";
import "./TaskList.css";

function TaskList({ tasks, onDelete, onUpdate }) {
  if (!tasks || tasks.length == 0) return <div>Henüz task eklenmemiş!</div>;

  return (
    <div className="taskList">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default TaskList;
