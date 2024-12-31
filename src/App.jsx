import { useEffect, useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("http://localhost:3000/tasks").then((response) => {
      setTasks(response.data);
    });
  }, []);

  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    axios.post("http://localhost:3000/tasks", task).then((response) => {
      setTasks((prevState) => [...prevState, response.data]);
    });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/tasks/${id}`).then(() => {
      setTasks((prevState) => prevState.filter((task) => task.id !== id));
    });
  };
  const handleUpdate = (updatedTask) => {
    axios
      .put(`http://localhost:3000/tasks/${updatedTask.id}`, updatedTask)
      .then(() => {
        setTasks((prevState) =>
          prevState.map((task) =>
            task.id === updatedTask.id ? { ...task, ...updatedTask } : task
          )
        );
      });
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
