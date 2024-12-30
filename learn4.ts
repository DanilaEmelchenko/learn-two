// Создайте функцию, которая вычисляет площадь и периметр прямоугольника.

const perimeterSquare = (num: number): string => {
  let s: number = num * num;
  let p: number = num * 4;

  return `${s} кв.см, ${p} см`;
};

console.log(perimeterSquare(3));
