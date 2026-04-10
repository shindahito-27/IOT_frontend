import "./Card.css";

function SeatCard({ seat }) {
  const occupied = seat.occupied === 1; // 🔥 strict check

  return (
    <div className={`card seat ${occupied ? "occupied" : "free"}`}>
      <h3>{seat.id}</h3>

      <p className="status">
        {occupied ? "Occupied" : "Free"}
      </p>

      <div className="value">{seat.temperature.toFixed(1)} °C</div>

      <div className="tags">
        <span>H: {seat.humidity.toFixed(0)}%</span>
        <span>EMA: {seat.ema?.toFixed(1)}</span>
        <span>N: {seat["percentage time noisy"] ?? "--"}%</span>
      </div>

      {seat.isLive && <span className="badge">LIVE</span>}
    </div>
  );
}

export default SeatCard;
