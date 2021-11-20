import React from "react";
import { Link } from "react-router-dom";

const LaunchDetails = () => {
  return (
    <div className="details">
      <h1>LaunchDetails Page</h1>
      <Link to="/">
        <i class="fas fa-arrow-left">CREW-1</i>
      </Link>
      <p>Date:2020-11-16T00:27:00.000Z</p>
      <a href="/" className="btn">
        Watch Here
      </a>
      <h2>LAUNCH DETAİLS</h2>
    </div>
  );
};

export default LaunchDetails;
