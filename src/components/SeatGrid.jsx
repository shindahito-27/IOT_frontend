import SeatCard from "./SeatCard";

function SeatGrid({ seats }) {
  return (
    <div className="seat-grid">
      {seats.map((seat) => (
        <SeatCard key={seat.id} seat={seat} />
      ))}
    </div>
  );
}

export default SeatGrid;