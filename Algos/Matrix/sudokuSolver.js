function sudokuSolve(board) {
  const s = new Set();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == ".") continue;

      let row = "row" + i + board[i][j];
      let col = "col" + j + board[i][j];
      let box =
        "box" + Math.floor(i / 3) + "-" + Math.floor(j / 3) + board[i][j];

      if (s.has(row) || s.has(col) || s.has(box)) return false;

      s.add(row);
      s.add(col);
      s.add(box);
    }
  }

  return true;
}
