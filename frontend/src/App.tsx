import Tasks from "../components/Task.js";
import Cookie from "../components/Cookie.js";
import Input from "../components/Input.js";
import { useState } from "react";
import "./App.css";

export interface ITask {
  id: number;
  title: string;
  completed: boolean;
}
export interface ItaskList {
  tasks: ITask[];
}
export interface Iprops {
  submitted: boolean;
  setSubmited: (Submit: boolean) => void;
  taskList: ITask[];
  setTaskList: (taskList: ITask[]) => void;
}

function App(): JSX.Element {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [submitted, setSubmited] = useState<boolean>(false);

  return (
    <>
      <Cookie />
      <h1>Hello world</h1>
      <div className="task-box">
        <Input
          taskList={taskList}
          setTaskList={setTaskList}
          submitted={submitted}
          setSubmited={setSubmited}
        />
        <Tasks
          taskList={taskList}
          setTaskList={setTaskList}
          submitted={submitted}
          setSubmited={setSubmited}
        />
      </div>
    </>
  );
}

export default App;
