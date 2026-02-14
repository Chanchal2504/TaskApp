import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import {
  getTasks,
  createTask,
  deleteTask,
} from "../services/taskService";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { logout } = useContext(AuthContext);
const navigate = useNavigate();

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAdd = async () => {
    await createTask({
      title,
      description
    });

    setTitle("");
    setDescription("");
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
  <div className="dashboard-container">
    <div className="top-bar">
        <button className="logout-btn" onClick={handleLogout}>
        Logout
        </button>
    </div>
    <h2>Task Dashboard</h2>
    <div className="form-group">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />

      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />

      <button onClick={handleAdd}>Add</button>
    </div>

    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <span>{task.title}</span>
          <button onClick={() => handleDelete(task.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

};

export default Dashboard;
