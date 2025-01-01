import { createContext } from "react";
import axios from "axios";
import { useState } from "react";

const TaskContext = createContext();

const Provider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    var response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
  };

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

  var sharedValuesAndMethods = {
    tasks,
    fetchTasks,
    addTask,
    handleDelete,
    handleUpdate,
  };

  return (
    <TaskContext.Provider value={sharedValuesAndMethods}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
export { Provider };
