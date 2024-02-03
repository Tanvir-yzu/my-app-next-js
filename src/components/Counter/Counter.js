"use client";
import React, { useState } from "react";

const Counter = () => {
  const [counter, setcounter] = useState(0);
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button
        className="btn btn-outline btn-warning"
        onClick={() => setcounter(counter + 1)}
      >
        Increase Counter
      </button>
      <button
        className="btn btn-outline btn-success"
        onClick={() => setcounter(counter - 1)}
      >
        descrease Counter
      </button>
    </div>
  );
};

export default Counter;
