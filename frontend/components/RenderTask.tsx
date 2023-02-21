function RenderTask(props: {
  id: number;
  title: string;
  completed: boolean;
  func: Function;
}) {
  return (
    <div className="task">
      <p>{props.title}</p>
      <input
        className="checkbox"
        type="checkbox"
        onChange={() => props.func(props.id)}
        checked={props.completed}
      />
    </div>
  );
}
export default RenderTask;
