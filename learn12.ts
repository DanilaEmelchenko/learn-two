// Получение всех уникальных элементов
// Дано два массива чисел. Используя методы concat(), filter() и indexOf(), получите новый массив, который будет содержать только уникальные элементы из обоих массивов.
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];

let arr1: number[] = [1, 2, 3, 4, 5];
let arr2: number[] = [3, 4, 5, 6, 7];

let commonArr: number[] = arr1.concat(arr2);

let result = commonArr.filter((item, index) => {
  return commonArr.indexOf(item) === index;
});

console.log(result);
