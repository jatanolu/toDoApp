import axios from "axios";
import { useEffect } from "react";
import { ITask } from "../src/App";

function Task(props: {
  submited: boolean;
  setSubmited: (Submit: boolean) => void;
  list: ITask[];
  setList: (list: ITask[]) => void;
}) {
  interface Ilist {
    tasks: ITask[];
  }

  const tasklist = async () => {
    let allTasks = await axios.get<Ilist>("getTasks/");
    props.setList(allTasks.data.tasks);
  };

  useEffect(() => {
    if (props.submited) {
      tasklist();
      props.setSubmited(!props.submited);
    }
  }, [props.submited]);

  useEffect(() => {
    tasklist();
  }, []);

  return (
    <>
      <p>From the task component</p>
      {props.list.map((task) => {
        return <p>{task.title}</p>;
      })}
    </>
  );
}
export default Task;
