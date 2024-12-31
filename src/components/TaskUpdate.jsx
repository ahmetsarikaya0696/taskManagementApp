import { useState } from "react";
import "./TaskUpdate.css";

function TaskUpdate({ task, onUpdate }) {
  const [content, setContent] = useState(task.content);
  const [title, setTitle] = useState(task.title);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate({ id: task.id, title, content });
  };

  return (
    <div className="task-update">
      <h3>Lütfen Taskı Düzenleyiniz!</h3>
      <form onSubmit={handleSubmit} className="task-update-form">
        <label className="task-label">Başlık</label>
        <input
          className="task-update-input"
          value={title}
          onChange={handleTitleChange}
        />
        <label className="task-label">Task</label>
        <textarea
          rows={5}
          className="task-input"
          value={content}
          onChange={handleContentChange}
        ></textarea>
        <button className="task-update-button" type="submit">
          Düzenle
        </button>
      </form>
    </div>
  );
}

export default TaskUpdate;
