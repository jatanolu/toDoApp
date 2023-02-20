import axios from "axios";
import { useEffect } from "react";
import { ITask, Ilist } from "../src/App";
import Status from "./Status";

function Task(props: {
  submited: boolean;
  setSubmited: (Submit: boolean) => void;
  list: ITask[];
  setList: (list: ITask[]) => void;
}) {
  const tasklist = async () => {
    let allTasks = await axios.get<Ilist>("getTasks/");
    console.log(allTasks);
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
      <Status {...props} />
    </>
  );
}
export default Task;
