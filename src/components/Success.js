import React from "react";
import { useLocation, Link } from "react-router-dom";

const Success = () => {
  const { state } = useLocation();

  return (
    <div className="success-container">
      <h2>Form Submitted Successfully!</h2>
      <ul>
        {Object.entries(state).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Success;
