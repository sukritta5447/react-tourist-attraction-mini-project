import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import TripCard from "./components/TripCard";
import { Toaster } from "sonner";

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

  const handleClickTag = (tag) => {
    const keywords = search.trim().split(/\s+/).filter(Boolean);

    if (keywords.includes(tag)) {
      return;
    }

    const newSearch = [...keywords, tag].join(" ");
    setSearch(newSearch);
    handleSearch(newSearch);
  };

  useEffect(() => {
    handleSearch("");
  }, []);

  return (
    <div className="App mx-auto max-w-[1280px] px-4 sm:px-8">
      <div className="mx-auto max-w-[900px]">
        <h1 className="mb-8 mt-10 text-center text-5xl font-bold text-sky-400">
          เที่ยวไหนดี
        </h1>

        <div className="mb-10">
          <label
            className="mb-2 block text-md font-medium text-gray-600"
            htmlFor="search"
          >
            ค้นหาที่เที่ยว
          </label>
          <input
            className="w-full border-0 border-b border-gray-300 bg-transparent px-0 py-2 text-center text-gray-600 outline-none placeholder:text-gray-400 focus:border-sky-400"
            type="text"
            placeholder="หาที่เที่ยวแล้วไปกัน ..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              handleSearch(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-[1150px] space-y-10">
        {trips.map((trip) => (
          <TripCard key={trip.eid} trip={trip} onClickTag={handleClickTag} />
        ))}
      </div>

      <Toaster richColors />
    </div>
  );
}

export default App;
