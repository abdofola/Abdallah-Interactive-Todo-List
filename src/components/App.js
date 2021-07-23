import React, { useState } from "react";
import { nanoid } from "nanoid";
import Todo from "../components/Todo";
import Form from "../components/Form";
import FilterButton from "./FilterButton";

function App(props) {
  // Hooks
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All");

  const filterList = props.filters.map((name) => (
    <FilterButton
      label={name}
      key={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  // Callback prop
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => id !== task.id);
    setTasks(updatedTasks);
  }

  function editTask(id, name) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, name } : task
    );
    setTasks(updatedTasks);
    console.log(tasks);
  }

  const taskList = tasks
    .filter(props.filterObj[filter])
    .map((task) => (
      <Todo
        id={task.id}
        key={task.id}
        name={task.name}
        completed={task.completed}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name, completed: false };

    setTasks([...tasks, newTask]);
  }

  const txtNoun = taskList.lenght === 1 ? "task" : "tasks";
  const headingTxt = `${taskList.length} ${txtNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form onSubmit={addTask} />
      <div className="filters btn-group stack-exception">{filterList} </div>
      <h2 id="list-heading">{headingTxt}</h2>
      <ul
        // role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
