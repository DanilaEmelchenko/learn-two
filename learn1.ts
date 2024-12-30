// Создайте функцию, которая принимает температуру в градусах Цельсия и возвращает её в градусах Фаренгейта.

const temperature = (celsius: number): number => {
  return (celsius * 9) / 5 + 32;
};

console.log(temperature(50));