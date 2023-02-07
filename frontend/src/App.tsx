import Tasks from "../components/Task.js";
import Cookie from "../components/Cookie.js";
import Header from "../components/Header.js";
import { useState } from "react";
import "./App.css";

function App(): JSX.Element {
  const [List, setList] = useState<string[]>([]);

  return (
    <>
      <Cookie />
      <h1>Hello world</h1>
      <div className="task-box">
        <Header list={List} setter={setList} />
        <Tasks list={List} setter={setList} />
      </div>
    </>
  );
}

export default App;
