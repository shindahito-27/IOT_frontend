import "./Card.css";

function MetadataCard({ data }) {
  return (
    <div className="card meta">
      <h3>Room Status</h3>
      <p>Occupied: {data.occupied ? "Yes" : "No"}</p>
      <p>Noisy Time: {data["percentage time noisy"]}%</p>
      <p>Max Noise: {data["max-noise"]} dB</p>
    </div>
  );
}

export default MetadataCard;