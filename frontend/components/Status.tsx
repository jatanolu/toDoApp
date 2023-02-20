import axios from "axios";
import { useEffect, useState } from "react";
import { ITask, Ilist } from "../src/App";

function Status(props: {
  submited: boolean;
  setSubmited: (Submit: boolean) => void;
  list: ITask[];
  setList: (list: ITask[]) => void;
}) {
  const [complete, setComplete] = useState<ITask[]>([]);
  const [pending, setPending] = useState<ITask[]>([]);
  function splitList() {
    for (let x in props.list) {
      if (props.list[x].completed) {
        setComplete((complete) => [...complete, props.list[x]]);
      } else {
        setPending((pending) => [...pending, props.list[x]]);
      }
    }
  }
  async function handleChange(id: number) {
    let updateTask = await axios.put<Ilist>("updateTask/", { id: id });
    console.log(updateTask);
    props.setSubmited(!props.submited);
  }
  useEffect(() => {
    setComplete([]);
    setPending([]);
    splitList();
  }, [props.list]);
  return (
    <>
      <h2>Pending</h2>
      {pending.map((task) => {
        return (
          <div className="task">
            <p>{task.title}</p>
            <input
              className="checkbox"
              type="checkbox"
              onChange={() => handleChange(task.id)}
              checked={task.completed}
            />
          </div>
        );
      })}
      <h2>Completed</h2>
      {complete.map((task) => {
        return (
          <div className="task">
            <p>{task.title}</p>
            <input
              className="checkbox"
              type="checkbox"
              onChange={() => handleChange(task.id)}
              checked={task.completed}
            />
          </div>
        );
      })}
    </>
  );
}
export default Status;
