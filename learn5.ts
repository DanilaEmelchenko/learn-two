// Напишите функцию, которая проверяет, является ли слово палиндромом.

const isPalindrome = (str: string): string => {
  let result = str.split("").reverse().join("").toLocaleLowerCase();

  if (str.toLocaleLowerCase() === result) {
    return "Палиндром";
  }

  return "Не палиндром";
};

console.log(isPalindrome("nitin"));
