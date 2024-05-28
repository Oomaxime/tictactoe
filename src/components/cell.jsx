function Cell({ value, onCellClick }) {
  return (
    <div className="cell" onClick={onCellClick}>
      {value}
    </div>
  );
}

export default Cell;
