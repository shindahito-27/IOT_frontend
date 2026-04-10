export function generateSeats(liveData) {
  if (!liveData) return [];

  const seatIds = ["A1", "A2", "A3", "A4", "B1", "B2","B3","B4"];

  return seatIds.map((id, index) => {
    if (id === "A1") {
      return {
        id,
        ...liveData,
        isLive: true
      };
    }

    // simulate small variations
    return {
      id,
      occupied: Math.random() > 0.5 ? 1 : 0,
      temperature: liveData.temperature + (Math.random() * 2 - 1),
      humidity: liveData.humidity + (Math.random() * 5 - 2),
      ema: liveData.ema + (Math.random() * 1 - 0.5),
      isLive: false
    };
  });
}