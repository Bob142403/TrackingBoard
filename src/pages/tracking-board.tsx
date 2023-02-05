import Board from "./board/board";
import Modal from "./components/modal/modal";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./tracking-board.css";
import { useDispatch } from "react-redux";
import { addTaskById, swapTitles } from "../store/tasks-reducer";
import { useSelector } from "react-redux";
import { getTitles } from "../store/tasks-selector";

function TrackingBoard() {
  const titles = useSelector(getTitles);
  const dispatch = useDispatch();
  function handleOnDragEnd(result: any) {
    console.log(result);
    if (result.destination) {
      if (result.type === "column") {
        dispatch(
          swapTitles({
            id: result.source.index,
            newId: result.destination.index,
          })
        );
      } else {
        dispatch(
          addTaskById({
            id: result.source.index,
            newId: result.destination.index,
            newStatus: result.destination.droppableId,
          })
        );
      }
    }
  }
  return (
    <>
      <Modal />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <div
              className="p-2 tracking-board"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {titles.map((title, index) => {
                return <Board key={index} boardTitle={title} index={index} />;
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default TrackingBoard;
