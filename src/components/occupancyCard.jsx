import "./Card.css";

function OccupancyCard({occupied}) {
  return (
    <div className={`occupancy-card ${!occupied ? "active" : "inactive"}`}>
      <h2>{!occupied ? "Room Empty" : "Room Occupied"}</h2>
    </div>
  );
}

export default OccupancyCard;