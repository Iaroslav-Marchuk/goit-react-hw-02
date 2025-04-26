export default function Options({ update, isOpen, reset }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <button onClick={() => update("good")}>Good</button>
      <button onClick={() => update("neutral")}>Neutral</button>
      <button onClick={() => update("bad")}>Bad</button>
      {isOpen && <button onClick={reset}>Reset</button>}
    </div>
  );
}
