import "./card.css";


interface Props {
  title: string;
}

function Card({ title }: Props) {
  return (
    <div className="card my-2 card-width">
      <div className="card-body d-flex">
        <img src={require("../../../assets/images/yellow-circle.svg").default} className="card-img"/>
        <p className="card-text fw-normal">{title}</p>
      </div>
    </div>
  );
}

export default Card;
