// Напишите функцию, которая находит наибольшее из трёх чисел. - тут только без использования Math.max)

const largestNumber = (num1: number, num2: number, num3: number): number => {
  let max: number;

  if (num1 >= num2 && num1 >= num3) {
    max = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    max = num2;
  } else {
    max = num3;
  }

  return max;
};

console.log(largestNumber(4, 10, 20));
