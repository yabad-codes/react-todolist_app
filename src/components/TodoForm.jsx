import React, { useState } from "react";
import shortid from "shortid";
import "../styles/TodoForm.css";

export default function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      id: shortid.generate(),
      text: input,
      complete: false,
    });
    setInput("");
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <h1 className="heading">get shit done!</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={input}
          placeholder="What's the task for today?"
          onChange={handleChange}
        />
        <button className="submit-btn" type="submit">
          Add task
        </button>
      </form>
    </>
  );
}
