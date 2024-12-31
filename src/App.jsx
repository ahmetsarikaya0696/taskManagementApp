import { useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const handleDelete = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };
  const handleUpdate = (updatedTask) => {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
      )
    );
  };

  return (
    <div className="App">
      <TaskCreate addTask={addTask} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
}

export default App;
