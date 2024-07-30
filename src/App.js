import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { asyncTasks } from "./reducers/tasksSlice";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const loading = useSelector((state) => state.tasks.loading);
  useEffect(() => {
    dispatch(asyncTasks());
  }, [dispatch]);
  return (
    <div className="App">
      <h3>List of tasks: </h3>
      {loading ? (
        <p>Task is loading</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title}-{task.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
