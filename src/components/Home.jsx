import React from "react";
import image from "../image/result.svg";
const Home = () => {
  return (
    <div className="home-container">
      <ul className="home-list">
        <li>
          <img src={image} alt="logo" />
        </li>
        <li>
          <h2>Schedule</h2>
        </li>
        <li>
          <h2>Squad</h2>
        </li>
        <li>
          <h2>Standings</h2>
        </li>
      </ul>
    </div>
  );
};

export default Home;
