import "./TaskCard.css";
import React from "react";
import deleteLogo from "../assets/delete.png";
import Tag from "./Tag";
import { useDispatch } from "react-redux";
import { deleteTask, updateActiveCard } from "../utils/taskListSlice";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = (taskId) => dispatch(deleteTask(taskId));
  const setActiveCard = (activeCard) => dispatch(updateActiveCard(activeCard));

  return (
    <article
      className="taskCard"
      draggable
      onDragStart={() => setActiveCard(task.id)}
      onDragEnd={() => setActiveCard(null)}
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p className="taskText">{task.task}</p>
      <p className="taskDetail">{task.details}</p>
      <div className="taskCardBottom">
        <div className="taskCardsTags">
          {task.tags.map((tag, index) => (
            <Tag key={index} selected>
              {tag}
            </Tag>
          ))}
        </div>
        <div
          className="taskDelete"
          onClick={() => {
            return handleDelete(task.id);
          }}
        >
          <img src={deleteLogo} alt="Delete-Logo" className="delete" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
