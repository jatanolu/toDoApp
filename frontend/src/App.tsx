import Tasks from "../components/Task.js";
import "./App.css";

function App(): JSX.Element {
  return (
    <>
      <h1>Hello world</h1>

      <div className="task-box">
        <Tasks />
      </div>
    </>
  );
}

export default App;
