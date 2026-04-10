import SeatGrid from "./SeatGrid";
import { generateSeats } from "../utils/generateSeats";

function Dashboard({ data }) {
  if (!data) return <h2>Loading...</h2>;

  const seats = generateSeats(data);

  // stats
  const occupiedCount = seats.filter(s => s.occupied).length;

  return (
    <div>
      {/* 🔥 Top Stats */}
      <div className="stats">
        <div className="stat-card">
          <h3>Total Seats</h3>
          <p>{seats.length}</p>
        </div>

        <div className="stat-card">
          <h3>Occupied</h3>
          <p>{occupiedCount}</p>
        </div>

        <div className="stat-card">
          <h3>Free</h3>
          <p>{seats.length - occupiedCount}</p>
        </div>
      </div>

      {/* 🔥 Grid */}
      <SeatGrid seats={seats} />
    </div>
  );
}

export default Dashboard;