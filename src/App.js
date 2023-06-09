import React, { useState, useEffect } from "react";
// import Loading from './Loading'
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
    }
    fetchData();
  }, []);

  const deleteTourHandler = (dataId) => {
    const newFilteredTours = tours.filter((tour) => tour.id !== dataId);
    setTours(newFilteredTours);
  };
  return (
    <div>
      <Tours tours={tours} deleteTour={deleteTourHandler} />
    </div>
  );
}

export default App;
