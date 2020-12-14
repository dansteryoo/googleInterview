function EightQueens(strArray) {
  const queens = strArray.map((strPos) => {
    const [, x, y] = strPos.match(/\((\d),(\d)\)/);
    return { x, y };
  });

  for (let queen of queens)
    if (queens.some((q) => attacks(queen, q))) return `(${queen.x},${queen.y})`;
  return "true";

  function attacks(queen1, queen2) {
    const cols = (q1, q2) => q1.y === q2.y;
    const rows = (q1, q2) => q1.x === q2.x;
    const diagonal1 = (q1, q2) => q1.x + q1.y === q2.x + q2.y;
    const diagonal2 = (q1, q2) => q1.x - q1.y === q2.x - q2.y;

    return (
      queen1 !== queen2 &&
      (cols(queen1, queen2) ||
        rows(queen1, queen2) ||
        diagonal1(queen1, queen2) ||
        diagonal2(queen1, queen2))
    );
  }
}

arr = [
  ['(2,1)', '(4,2)', '(6,3)', '(8,4)', '(3,5)', '(1,6)', '(7,7)', '(5,8)'],
  // ['(2,1)', '(4,2)', '(6,3)', '(8,4)', '(5,5)', '(3,6)', '(1,7)', '(7,8)'],
  // ['(2,1)', '(4,2)', '(4,4)', '(8,4)', '(3,4)', '(1,6)', '(7,7)', '(5,8)'],
  // ['(2,1)', '(4,2)', '(6,3)', '(8,3)', '(3,4)', '(1,6)', '(7,7)', '(5,8)'],
  // ['(2,1)', '(4,3)', '(6,3)', '(8,4)', '(3,4)', '(1,6)', '(7,7)', '(5,8)'],
  // ['(2,1)', '(4,2)', '(3,3)', '(8,4)', '(7,5)', '(3,6)', '(1,7)', '(7,8)'],
  // ['(2,1)', '(5,3)', '(6,3)', '(8,4)', '(3,4)', '(1,8)', '(7,7)', '(5,8)'],
]

// true;
// true(4, 4)(6, 3)(2, 1)(4, 2)(5, 3);

for (let each of arr) {
  console.log(EightQueens(each));
}
