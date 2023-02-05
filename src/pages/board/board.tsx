import { useRef } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearTasks } from "../../store/tasks-reducer";
import { getTasks } from "../../store/tasks-selector";
import AddTask from "../components/add-task/add-task";
import Card from "../components/card/card";
import "./board.css";

interface Props {
  boardTitle: string;
  index: number;
}

function Board({ boardTitle, index }: Props) {
  const inputValue = useRef(null);
  const tasks = useSelector(getTasks);
  const dispatch = useDispatch();
  const filteredTasks = tasks.filter((task) => task.status === boardTitle);
  return (
    <Draggable draggableId={`${index}`} index={index}>
      {(provided) => (
        <div
          className="board mx-3"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="board-title">
            <div className="d-flex">
              <div className="fw-bold">{boardTitle}</div>
              <div className="mx-1 text-secondary fw-bold">
                {filteredTasks.length}
              </div>
            </div>
            <div className="dropup-center">
              <img
                src={
                  require("../../assets/images/ellipsis_horizontal.svg").default
                }
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => {
                      dispatch(clearTasks(boardTitle));
                    }}
                  >
                    Clear
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Droppable droppableId={boardTitle}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {filteredTasks.map((task) => {
                  const index = tasks.indexOf(task);
                  return (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <Card title={task.title} />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <AddTask status={boardTitle} />
        </div>
      )}
    </Draggable>
  );
}

export default Board;
