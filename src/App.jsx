import React, { useState } from "react";
import "./App.css";

function App() {
  const apiKey = import.meta.env.VITE_APIKEY;
  const [city, setCity] = useState("");
  const [wdata, setwData] = useState([{}]);

  const getData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setwData(data);
        setCity("");
      });
  };
  return (
    <div>
      <input
        type="text"
        className="input"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <button onClick={getData}>See weather</button>

      {typeof wdata.main === "undefined" ? (
        <div>
          <h1>Welcome! Enter city to get weather</h1>
        </div>
      ) : (
        <div>
          <p>{wdata.name}</p>
          <p>{wdata.main.temp} °C</p>
          <p>{wdata.weather[0].main}</p>
        </div>
      )}
    </div>
  );
}

export default App;
