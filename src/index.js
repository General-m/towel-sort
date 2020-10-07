
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) return []
  let arrNew = [];
  for (i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) {
      for (elem of matrix[i]) {
        arrNew.push(elem)
      }
    }
    else {
      for (elem of matrix[i].reverse()) {
        arrNew.push(elem)
      }
    }
  }
  return arrNew;
}
