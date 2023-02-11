import axios from "axios";
import { useEffect } from "react";

function Task(props: any): JSX.Element {
  interface ITask {
    tasks: [id: number, title: string];
  }

  const taskList = async () => {
    let allTasks = await axios.get<ITask>("getTasks/");
    console.log(allTasks);
    props.setList(allTasks.data.tasks);
  };

  useEffect(() => {
    if (props.Submit) {
      taskList();
      props.setSubmit(!props.Submit);
    }
  }, [props.Submit]);

  useEffect(() => {
    taskList();
  }, []);

  return (
    <>
      <p>From the task component</p>
      {props.List.map((tasks: { id: number; title: string }) => {
        return <p>{tasks.title}</p>;
      })}
    </>
  );
}
export default Task;
