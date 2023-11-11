import axios from "axios";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { useEffect, useState } from "react";

function App() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    getTeam();
  }, []);

  const getTeam = async () => {
    let response = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://api.football-data.org/v2/teams/66/matches",
      {
        headers: {
          "X-Auth-Token": process.env.REACT_APP_API_KEY,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    console.log(response);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Manchester United</h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
