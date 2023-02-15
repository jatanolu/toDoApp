import Tasks from "../components/Task.js";
import Cookie from "../components/Cookie.js";
import Input from "../components/Input.js";
import { useState } from "react";
import "./App.css";

export interface ITask {
  id: number;
  title: string;
}

function App(): JSX.Element {
  const [list, setList] = useState<ITask[]>([]);
  const [submited, setSubmited] = useState<boolean>(false);

  return (
    <>
      <Cookie />
      <h1>Hello world</h1>
      <div className="task-box">
        <Input
          list={list}
          setList={setList}
          submited={submited}
          setSubmited={setSubmited}
        />
        <Tasks
          list={list}
          setList={setList}
          submited={submited}
          setSubmited={setSubmited}
        />
      </div>
    </>
  );
}

export default App;
