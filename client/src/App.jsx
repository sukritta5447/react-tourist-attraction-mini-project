import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import TripCard from "./components/TripCard";

function App() {
  const [search, setSearch] = useState("");
  const [trips, setTrips] = useState([]);

  const handleSearch = async (keyword) => {
    const response = await axios.get(
      `http://localhost:4001/trips?keywords=${keyword}`,
    );
    console.log(response.data.data);
    setTrips(response.data.data);
  };

  useEffect(() => {
    handleSearch("");
  }, []);

  return (
    <div className="App">
      <h1>เที่ยวไหนดี</h1>
      <label htmlFor="search">ค้นหาที่เที่ยว</label>
      <input
        type="text"
        placeholder="หาที่เที่ยวแล้วไปกัน ..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearch(e.target.value);
        }}
      />

      {trips.map((trip) => (
        <TripCard key={trip.eid} trip={trip} />
      ))}
    </div>
  );
}

export default App;
