import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCheck,
  faSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Todo.css";

export default function Todo(props) {
  return (
    <div className="todo">
      <div onClick={props.toggleComplete}>
        {props.todo.complete === false ? (
          <FontAwesomeIcon className="checkbox" icon={faSquare} />
        ) : (
          <FontAwesomeIcon className="checkbox" icon={faSquareCheck} />
        )}
      </div>
      <span
        className="todo-text"
        style={{
          textDecoration: props.todo.complete ? "line-through" : "",
          color: props.todo.complete ? "gray" : "white",
        }}
      >
        {props.todo.text}
      </span>
      <FontAwesomeIcon
        className="deletebox"
        icon={faTrash}
        onClick={props.deleteTask}
      />
    </div>
  );
}
