import Dashboard from "./components/Dashboard";
import useFirebaseData from "./hooks/useFirebaseData";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const data = useFirebaseData();
  const [live, setLive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLive(prev => !prev); // ✅ correct way
    }, 1000);

    return () => clearInterval(interval); // ✅ cleanup
  }, []);

  return (
    <div className="app">
  <h1>IoT Smart Room Dashboard</h1>

  <div className="live" >
    <div className="dot"></div>
    <p  style={{color:"green"}}>Live</p>
  </div>
  <Dashboard data={data} />
</div>
  );
}

export default App;