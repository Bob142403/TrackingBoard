import Board from "./board/board";
import Modal from "./components/modal/modal";
import "./tracking-board.css";

function TrackingBoard() {
  return (
    <>
      <Modal />
      <div className="p-2 tracking-board">
        <Board status={"New"}/>
        <Board status={"In Progress"} />
        <Board status={"In Review"} />
        <Board status={"Fixed"} />
      </div>
    </>
  );
}

export default TrackingBoard;
