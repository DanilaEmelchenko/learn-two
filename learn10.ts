// Напишите функцию, которая принимает строку и возвращает её с заглавной первой буквой.
// тут если быстро справитесь можно усложнить и чтобы каждое слово с большой буквы начиналось

const capitalizeFirstLetter = (str: string): string => {
  // if (!str) return str;

  // return str[0].toUpperCase() + str.slice(1);

  return str
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
};

console.log(capitalizeFirstLetter("данила данила"));
