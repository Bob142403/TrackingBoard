import { useDispatch } from "react-redux";
import { clickedTask } from "../../../store/tasks-reducer";

interface Props {
  status: string;
}

function AddTask({ status }: Props) {
  const dispatch = useDispatch();
  const setStatus = () => dispatch(clickedTask(status));
  return (
    <button
      data-bs-target="#staticBackdrop"
      data-bs-toggle="modal"
      className="btn btn-outline-success"
      onClick={setStatus}
    >
      Add Task
    </button>
  );
}

export default AddTask;
