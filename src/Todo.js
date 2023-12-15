import React from "react";
import "./Todo.css";
export default function Todo() {
  return (
    <div className="container">
      <div className="title">
        <h1>Todo</h1>
      </div>
      <div className="tasks">
        <ul className="tasks-header">
          <li className="task-text">Task List</li>
          <li>3/5 done</li>
        </ul>
        <ul className="tasks-list">
          <ul className=" tasks-lists-item">
            <li>&#9776;</li>
            <li>
              <input type="checkbox" checked />
            </li>
            <li>
              <s>Identify and contextualise the problem</s>
            </li>
          </ul>
          <ul className=" tasks-lists-item">
            <li> &#9776;</li>
            <li>
              <input type="checkbox" checked />
            </li>
            <li>
              <s>Present ideas and changes to the </s>
            </li>
          </ul>
          <ul className=" tasks-lists-item">
            <li> &#9776;</li>
            <li>
              <input type="checkbox" checked />
            </li>
            <li>
              <s>Prepare user flows</s>
            </li>
          </ul>
          <ul className=" tasks-lists-item">
            <li> &#9776;</li>
            <li>
              <input type="checkbox" />
            </li>
            <li> Prepare design style guide</li>
          </ul>
          <ul className=" tasks-lists-item">
            <li> &#9776;</li>
            <li>
              <input type="checkbox" />
            </li>
            <li> Delivery stage: test and release</li>
          </ul>
        </ul>
      </div>
      <div className="addBtn">
        <button className="btn">+ Add Task</button>
      </div>
    </div>
  );
}
