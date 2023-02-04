import { useDispatch } from "react-redux";
import { clickedTask } from "../../../store/tasks-reducer";
import "./add-task.css";

interface Props {
  status: string;
}

function AddTask({ status }: Props) {
  const dispatch = useDispatch();
  const setStatus = () => dispatch(clickedTask(status));
  return (
    <div onClick={setStatus} className="add-task">
      <img
        src={require("../../../assets/images/addButton.svg").default}
        className="img"
      />
      <div data-bs-target="#staticBackdrop" data-bs-toggle="modal">
        Add Task
      </div>
    </div>
  );
}

export default AddTask;
