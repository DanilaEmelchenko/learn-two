// Преобразование двумерного массива в одномерный
// Дан двумерный массив чисел. Используя методы reduce() и concat(), объедините все вложенные массивы в один одномерный.

let arr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let result: number[] = arr.reduce((acc, item) => {
  return acc.concat(item);
});

console.log(result);
