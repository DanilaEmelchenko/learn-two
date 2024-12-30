// Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов массива.

const sumNumbers = (arr: number[]): number => {
  return arr.reduce((sum, number) => {
    return sum + number;
  }, 0);
};

console.log(sumNumbers([2, 3, 4, 5, 6]));
