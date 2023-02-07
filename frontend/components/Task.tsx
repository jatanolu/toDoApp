import axios from "axios";
import { useEffect } from "react";

function Task(props: any): JSX.Element {
  interface ITask {
    tasks: string[];
  }

  const taskList = async () => {
    let allTasks = await axios.get<ITask>("tasks/");
    console.log(allTasks);
    props.setter(allTasks.data.tasks);
  };

  useEffect(() => {
    taskList();
  }, []);

  return (
    <>
      <p>From the task component</p>
      {props.list.map((task: string) => {
        return <p>{task}</p>;
      })}
    </>
  );
}
export default Task;
