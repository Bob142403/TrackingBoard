import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../../store/tasks-reducer";
import { getClickedTask } from "../../../store/tasks-selector";

function Modal() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const status = useSelector(getClickedTask);
  const addtask = () => {
    dispatch(addTask({ title, status }));
    setTitle("");
  };
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Add Task
            </h1>
          </div>
          <div className="modal-body">
            <textarea
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-success"
              data-bs-dismiss="modal"
              onClick={addtask}
            >
              Save
            </button>
            <button
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => setTitle("")}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
