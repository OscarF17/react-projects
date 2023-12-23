export default function TextField({ bill, onChangeBill, children }) {
  return (
    <div className="text-field">
      <p>{children}</p>
      <input
        type="number"
        value={bill}
        onChange={(e) => onChangeBill(Number(e.target.value))}
      />
    </div>
  );
}
