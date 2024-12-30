// Создайте функцию, которая удаляет все пробелы из строки

const deleteStringSpaces = (str: string): string => {
  return str.split(" ").join("");
};

console.log(deleteStringSpaces("danila danila"));
