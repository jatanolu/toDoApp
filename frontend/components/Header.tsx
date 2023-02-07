import axios from "axios";
import { FormEvent, useState } from "react";

function Header(props: any): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");

  const getTask = async () => {
    let allTasks = await axios.get("tasks/");
    props.setter(allTasks.data.tasks);
  };

  const addTask = async () => {
    let myResponse = await axios.post("tasks/", { task: newTask });
    console.log(myResponse);
    getTask();
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    addTask();
    (document.getElementById("taskInput") as HTMLFormElement).reset();
    setNewTask("");
  }

  return (
    <>
      <p>From the header component</p>
      <form id="taskInput" onSubmit={handleSubmit}>
        <input
          onChange={(event) => {
            setNewTask(event.target.value);
          }}
          type="text"
          placeholder="Things to do later..."
        />
        <button disabled={newTask === ""} id="taskButton" type="submit">
          Add Task
        </button>
      </form>
    </>
  );
}
export default Header;
