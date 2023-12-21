import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  // React rerenders everything whenever the state changes
  // Initialize the date and then add whatever state React remembers
  const date = new Date("december 20 2023");
  date.setDate(date.getDate() + count);

  function handlePlusStep() {
    setStep((s) => s + 1);
  }

  function handleMinusStep() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handlePlusCount() {
    setCount((c) => c + step);
  }

  function handleMinusCount() {
    setCount((c) => c - step);
  }

  return (
    <div>
      <button onClick={handleMinusStep}>-</button>
      Step: {step}
      <button onClick={handlePlusStep}>+</button>
      <br></br>
      <button onClick={handleMinusCount}>-</button>
      Count: {count}
      <button onClick={handlePlusCount}>+</button>
      <br></br>
      <h1>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is`
          : `${Math.abs(count)} days ago was`}{" "}
        {date.toDateString()}
      </h1>
    </div>
  );
}
