import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumns from "./components/TaskColums.jsx";
import { STATUS } from "./utils/constant.jsx";
import { useEffect, useState } from "react";
import { deleteTask, updateTaskList } from "./utils/taskListSlice.jsx";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  let tasks = useSelector((store) => store.tasks.taskList);
  const activeCard = useSelector((store) => store.tasks.activeCard);
  const updateTask = () => {
    dispatch(
      updateTaskList(JSON.parse(window.localStorage.getItem("taskList")) || [])
    );
  };

  useEffect(() => {}, [tasks, activeCard]);
  useEffect(() => {
    updateTask();
  }, []);

  const Home = () => (
    <main className="appBody">
      {STATUS.map((status) => (
        <TaskColumns
          heading={status.heading}
          logo={status.logo}
          task={tasks.filter((task) => task.status === status.heading)}
        />
      ))}
    </main>
  );

  const AddTask = () => (
    <main className="appBody">
      <TaskForm />
    </main>
  );

  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addtask" element={<TaskForm />} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
