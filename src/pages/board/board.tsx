import { Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { getTasks } from "../../store/tasks-selector";
import AddTask from "../components/add-task/add-task";
import Card from "../components/card/card";
import "./board.css";

interface Props {
  status: string;
}

function Board({ status }: Props) {
  const tasks = useSelector(getTasks);
  const filteredTasks = tasks.filter((task) => task.status === status);
  return (
    <div className="board mx-3">
      <div className="d-flex">
        <div className="fw-bold">{status}</div>
        <div className="mx-1 text-secondary fw-bold">
          {filteredTasks.length}
        </div>
      </div>
      <Droppable droppableId={status}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {filteredTasks.map((task) => {
              const index = tasks.indexOf(task);
              return (
                <Draggable key={task.id} draggableId={task.id} index={index}>
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
      <AddTask status={status} />
    </div>
  );
}

export default Board;
