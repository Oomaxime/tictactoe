function Cell({ value, onCellClick }) {
  return (
    <div className="cell" onClick={onCellClick}>
      <p>{value}</p>
    </div>
  );
}

export default Cell;
