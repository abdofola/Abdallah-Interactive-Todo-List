import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

const DATA = [
  { id: "todo-0", name: "Pray", completed: true },
  { id: "todo-1", name: "Exercie", completed: false },
  { id: "todo-3", name: "Study", completed: false },
  { id: "todo-4", name: "Eat", completed: false },
  { id: "todo-5", name: "Repeat", completed: false },
];

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

ReactDOM.render(
  <App tasks={DATA} filters={FILTER_NAMES} filterObj={FILTER_MAP} />,
  document.getElementById("root")
);
