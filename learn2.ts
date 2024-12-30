// Создайте функцию, которая принимает строку и возвращает её в обратном порядке.

const reverse = (string: string): string => {
  return string.split("").reverse().join("");
};

console.log(reverse("Данила"));
