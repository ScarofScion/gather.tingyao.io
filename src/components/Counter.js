import React from "react";

const Counter = props => {
  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => props.handleGuest(-1)}
      >
        {" "}
        -{" "}
      </button>
      <span className="counter-score">Number of Guests: {props.guests}</span>
      <button
        className="counter-action increment"
        onClick={() => props.handleGuest(1)}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default Counter;
