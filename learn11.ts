// Нахождение максимального числа
// Дан массив чисел. Используя метод reduce(), найдите максимальное число в массиве.
// let nums = [10, 50, 30, 90, 20];

let nums: number[] = [10, 50, 30, 90, 20];

let max: number = nums.reduce((max, num) => Math.max(max, num), -Infinity);

console.log(max);
