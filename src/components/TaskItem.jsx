import { useState } from "react";
import "./TaskItem.css";
import TaskUpdate from "./TaskUpdate";

function TaskItem({ task, onDelete, onUpdate }) {
  const [isUpdate, setIsUpdate] = useState(false);
  const handleClick = () => {
    onDelete(task.id);
  };

  const handleIsUpdating = () => {
    setIsUpdate((prevState) => !prevState);
  };

  const handleUpdate = (task) => {
    setIsUpdate((prevState) => !prevState);
    onUpdate(task);
  };

  if (isUpdate) return <TaskUpdate task={task} onUpdate={handleUpdate} />;

  return (
    <div className="task">
      <h3>Göreviniz</h3>
      <p>{task.title}</p>
      <h3>Yapılacaklar</h3>
      <p>{task.content}</p>
      <div className="buttonWrapper">
        <button onClick={handleClick} className="btnSil">
          Sil
        </button>
        <button onClick={handleIsUpdating} className="btnGuncelle">
          Güncelle
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
