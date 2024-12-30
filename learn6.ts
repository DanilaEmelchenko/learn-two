// Напишите функцию, которая находит среднее арифметическое чисел в списке.

const arithMeticMean = (arr: number[]): number => {
  return arr.reduce((sum, number) => sum + number) / arr.length;
};

console.log(arithMeticMean([2, 3, 4]));
