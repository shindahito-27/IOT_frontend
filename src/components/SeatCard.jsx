import "./Card.css";

function SeatCard({ seat }) {
  const occupied = seat.occupied !== 0;

  return (
    <div className={`card seat ${occupied ? "occupied" : "free"}`}>
      <h3>{seat.id}</h3>

      <p className="status">
        {occupied ? "Occupied" : "Free"}
      </p>

      <div className="value">{seat.temperature.toFixed(1)} °C</div>
      <div className="sub">{seat.humidity.toFixed(1)} %</div>

      {seat.isLive && <span className="badge">LIVE</span>}
    </div>
  );
}

export default SeatCard;
