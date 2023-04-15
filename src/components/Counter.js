import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Counter.css";

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className="counter-container">
      <p>Count: {count}</p>
      <div className="btn-container">
        <button className="btn" onClick={handleIncrease}>
          Increment
        </button>
        <button className="btn" onClick={handleDecrease}>
          Decrement
        </button>
        <button className="btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;


