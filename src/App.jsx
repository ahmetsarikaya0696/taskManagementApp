import { useContext, useEffect } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import TaskContext from "./contexts/task-context";

function App() {
  const { tasks, fetchTasks } = useContext(TaskContext);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App">
      <TaskCreate />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
