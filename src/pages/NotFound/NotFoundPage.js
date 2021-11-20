import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFoundPage = () => {
  return (
    <div className="section">
      <div className="error-image">
        <img
          src="https://cdn-icons.flaticon.com/png/512/723/premium/723145.png?token=exp=1637442570~hmac=7f9b89b5f03ee5a4db68c8bd10544860"
          alt="rocket"
        ></img>
      </div>
      <div className="error-message">
        <h1>404 - Not Found</h1>
        <h3>UH OH! You're lost</h3>
        <p>
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to the
          homepage.
        </p>
        <Link to="/" className="home-btn">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
