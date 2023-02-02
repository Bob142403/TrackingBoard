import "./card.css";

interface Props {
  title: string;
}

function Card({ title }: Props) {
  return (
    <div className="card my-2 card-width">
      <div className="card-body">
        <p className="card-text fw-semibold">{title}</p>
      </div>
    </div>
  );
}

export default Card;
