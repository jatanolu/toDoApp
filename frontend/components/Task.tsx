import axios from "axios";
import { useEffect } from "react";
import { ItaskList, Iprops } from "../src/App";
import RenderTask from "./RenderTask";

function Task(props: Iprops) {
  const tasktaskList = async () => {
    let allTasks = await axios.get<ItaskList>("getTasks/");
    props.setTaskList(allTasks.data.tasks);
  };
  async function handleChange(id: number) {
    await axios.put<ItaskList>("toggleTaskComplete/", {
      id: id,
    });
    props.setSubmited(!props.submitted);
  }
  useEffect(() => {
    if (props.submitted) {
      tasktaskList();
      props.setSubmited(!props.submitted);
    }
  }, [props.submitted]);

  useEffect(() => {
    tasktaskList();
  }, []);

  return (
    <>
      <h2>Pending</h2>
      {props.taskList
        .filter((task) => !task.completed)
        .map((task) => (
          <RenderTask {...task} func={handleChange} />
        ))}
      <h2>Complete</h2>
      {props.taskList
        .filter((task) => task.completed)
        .map((task) => (
          <RenderTask {...task} func={handleChange} />
        ))}
    </>
  );
}
export default Task;
