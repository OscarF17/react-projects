// Could separate this component into two, results and button
// That would make the button by itself reusable
// They work very close together so I'll leave it like this
export default function Results({ bill, tip, onReset }) {
  const result = bill + bill * tip;
  return (
    <div className="results">
      <h1>
        You pay ${result} (${bill} + ${bill * tip} tip)
      </h1>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
