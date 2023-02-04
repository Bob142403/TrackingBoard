import Board from "./board/board";
import Modal from "./components/modal/modal";
import { DragDropContext } from "react-beautiful-dnd";
import "./tracking-board.css";
import { useDispatch } from "react-redux";
import { addTaskById } from "../store/tasks-reducer";

function TrackingBoard() {
  const dispatch = useDispatch();
  function handleOnDragEnd(result: any) {
    if (result.destination)
      dispatch(
        addTaskById({
          id: result.source.index,
          newId: result.destination.index,
          newStatus: result.destination.droppableId,
        })
      );
  }
  return (
    <>
      <Modal />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="p-2 tracking-board">
          <Board status={"New"} />
          <Board status={"In Progress"} />
          <Board status={"In Review"} />
          <Board status={"Fixed"} />
        </div>
      </DragDropContext>
    </>
  );
}

export default TrackingBoard;
