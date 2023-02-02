import { useSelector } from "react-redux";
import { getTasks } from "../../store/tasks-selector";
import AddTask from "../components/add-task/add-task";
import Card from "../components/card/card";
import "./board.css";

interface Props {
  status: string;
}

function Board({ status }: Props) {
  const tasks = useSelector(getTasks).filter((task) => task.status === status);
  return (
    <div className="board mx-3">
      <div className="fw-bold">{status}</div>
      {tasks.map((task) => (
        <Card key={task.id} title={task.title} />
      ))}
      <AddTask status={status} />
    </div>
  );
}

export default Board;
