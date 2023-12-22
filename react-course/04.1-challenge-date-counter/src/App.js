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
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  /* Unused after V2
  function handlePlusStep() {
    setStep((s) => s + 1);
  }

  function handleMinusStep() {
    if (step > 1) setStep((s) => s - 1);
  }
*/

  function handlePlusCount() {
    setCount((c) => c + step);
  }

  function handleMinusCount() {
    setCount((c) => c - step);
  }

  function hanldeReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <input
        type="range"
        min="1"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <span>{step}</span>
      <br></br>
      <button onClick={handleMinusCount}>-</button>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      ></input>
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
      {/* Conditionally display reset button if values are not default */}
      {count !== 0 || step !== 1 ? (
        <button onClick={hanldeReset}>Reset</button>
      ) : null}
    </div>
  );
}
