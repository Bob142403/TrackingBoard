interface Props {
  title: string;
}

function Card({ title }: Props) {
  return (
    <div className="card my-2" style={{ width: "25rem" }}>
      <div className="card-body">
        <p className="card-text fw-semibold">{title}</p>
      </div>
    </div>
  );
}

export default Card;
