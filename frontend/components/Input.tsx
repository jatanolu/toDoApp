import axios from "axios";
import { FormEvent, useState } from "react";

function Input(props: any): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");

  const addTask = async () => {
    let myResponse = await axios.post("addTask/", { task: newTask });
    console.log(myResponse);
    if (myResponse.data.success) {
      props.setSubmit(true);
    }
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    addTask();
    (document.getElementById("taskInput") as HTMLFormElement).reset();
    setNewTask("");
  }

  return (
    <>
      <p>From the Input component</p>
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
export default Input;
