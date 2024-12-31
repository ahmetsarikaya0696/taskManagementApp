import { useState } from "react";
import "./TaskCreate.css";

function TaskCreate({ addTask }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle("");
    setContent("");
    addTask({ title, content });
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="task-create">
      <h3>Lütfen Task Ekleyiniz!</h3>
      <form onSubmit={handleSubmit} className="task-form">
        <label className="task-label">Başlık</label>
        <input
          className="task-input"
          value={title}
          onChange={handleTitleChange}
        />
        <label className="task-label">Task Giriniz!</label>
        <textarea
          rows={5}
          className="task-input"
          value={content}
          onChange={handleContentChange}
        ></textarea>
        <button className="task-button" type="submit">
          Oluştur
        </button>
      </form>
    </div>
  );
}

export default TaskCreate;
