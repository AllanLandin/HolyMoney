function Card({ image, desc, balance }) {
  return (
    <div className="bg-light rounded flex-grow-1">
      <div className="d-flex align-items-center gap-2">
        {image}
        <div className="d-flex flex-column gap-1 justify-content-center">
          <div>{desc}</div>
          <div>R$ {balance}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
