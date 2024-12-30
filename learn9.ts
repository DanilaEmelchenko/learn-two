// Создайте функцию , которая принимает массив чисел и возвращает объект с минимальным и максимальным значениями.

interface IFindMaxMin {
  min: number;
  max: number;
}

const findMaxMin = (arrNumbers: number[]): IFindMaxMin => {
  return {
    min: Math.min.apply(Math, ...arrNumbers),
    max: Math.max.apply(Math, ...arrNumbers),
  };
};

console.log(findMaxMin([1, 2, 3, 4, 5]));
