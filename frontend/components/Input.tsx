import axios from "axios";
import { FormEvent, useState } from "react";
import { ITask } from "../src/App";

function Input(props: {
  submited: boolean;
  setSubmited: (Submit: boolean) => void;
  list: ITask[];
  setList: (list: ITask[]) => void;
}) {
  const [newTask, setNewTask] = useState<string>("");

  const addTask = async () => {
    let myResponse = await axios.post("addTask/", { task: newTask });
    if (myResponse.data.success) {
      props.setSubmited(true);
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
      <h2>From the Input component</h2>
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
