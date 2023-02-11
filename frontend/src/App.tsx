import Tasks from "../components/Task.js";
import Cookie from "../components/Cookie.js";
import Input from "../components/Input.js";
import { useState } from "react";
import "./App.css";

function App(): JSX.Element {
  const [List, setList] = useState<string[]>([]);
  const [Submit, setSubmit] = useState<Boolean>(false);

  return (
    <>
      <Cookie />
      <h1>Hello world</h1>
      <div className="task-box">
        <Input
          List={List}
          setList={setList}
          Submit={Submit}
          setSubmit={setSubmit}
        />
        <Tasks
          List={List}
          setList={setList}
          Submit={Submit}
          setSubmit={setSubmit}
        />
      </div>
    </>
  );
}

export default App;
