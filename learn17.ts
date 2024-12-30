// Дан массив студентов:
// const students = [
//   { name: "Анна", grades: [4, 5, 5, 4, 5], absent: 2 },
//   { name: "Иван", grades: [3, 4, 4, 5, 5], absent: 5 },
//   { name: "Мария", grades: [5, 5, 5, 5, 5], absent: 0 },
//   { name: "Петр", grades: [3, 3, 4, 4, 5], absent: 8 }
// ];

// Задачи:
// 1. Найдите студентов, у которых средний балл выше 4.5
// 2. Определите студентов с наименьшим количеством пропусков
// 3. Добавьте всем студентам новую оценку
// 4. Создайте массив только из имён студентов, отсортированный по алфавиту

interface IStudents {
  name: string;
  grades: number[];
  absent: number;
}

const students: IStudents[] = [
  { name: "Анна", grades: [4, 5, 5, 4, 5], absent: 2 },
  { name: "Мария", grades: [3, 4, 4, 5, 5], absent: 5 },
  { name: "Иван", grades: [5, 5, 5, 5, 5], absent: 0 },
  { name: "Петр", grades: [3, 3, 4, 4, 5], absent: 8 },
];

// 1. Найдите студентов, у которых средний балл выше 4.5
const averageScore: string[] = students
  .map((grades) => {
    const result = grades.grades.reduce((acc, item) => {
      return acc + item / grades.grades.length;
    }, 0);

    return { name: grades.name, result };
  })
  .filter((grades) => {
    return grades.result > 4.5;
  })
  .map((grades) => {
    return grades.name;
  });

console.log(averageScore);

// 2. Определите студентов с наименьшим количеством пропусков
const minAbsent: number = students
  .map((item) => {
    return item.absent;
  })
  .reduce((acc, item) => {
    return Math.min(acc, item);
  });

const leastNumberPasses: string[] = students
  .filter((item) => {
    return item.absent === minAbsent;
  })
  .map((item) => {
    return item.name;
  });

console.log(leastNumberPasses);

// 3. Добавьте всем студентам новую оценку
const addGrades: IStudents[] = students.map((item) => {
  const grade = 2;
  return {
    ...item,
    grades: [...item.grades, grade],
  };
});

console.log(addGrades);

// 4. Создайте массив только из имён студентов, отсортированный по алфавиту
const nameStudents: string[] = students
  .map((item) => {
    return item.name;
  })
  .sort();

console.log(nameStudents);
