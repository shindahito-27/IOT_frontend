import "./Card.css";

function DataCard({ title, value, unit }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p className="value">
        {value} <span>{unit}</span>
      </p>
    </div>
  );
}

export default DataCard;