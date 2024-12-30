// Дан массив фильмов:
// const movies = [
//   { title: "Inception", year: 2010, rating: 8.8, genre: "sci-fi" },
//   { title: "The Matrix", year: 1999, rating: 8.7, genre: "sci-fi" },
//   { title: "Interstellar", year: 2014, rating: 8.6, genre: "sci-fi" },
//   { title: "The Dark Knight", year: 2008, rating: 9.0, genre: "action" },
//   { title: "Pulp Fiction", year: 1994, rating: 8.9, genre: "crime" }
// ];
// Задачи
// 1. Получите массив названий всех фильмов жанра "sci-fi"
// 2. Найдите средний рейтинг всех фильмов
// 3. Создайте массив фильмов, отсортированный по убыванию рейтинга
// 4. Найдите самый старый фильм

interface IMovies {
  title: string;
  year: number;
  rating: number;
  genre: string;
}

const movies: IMovies[] = [
  { title: "Inception", year: 2010, rating: 8.8, genre: "sci-fi" },
  { title: "The Matrix", year: 1999, rating: 8.7, genre: "sci-fi" },
  { title: "Interstellar", year: 2014, rating: 8.6, genre: "sci-fi" },
  { title: "The Dark Knight", year: 2008, rating: 9.0, genre: "action" },
  { title: "Pulp Fiction", year: 1994, rating: 8.9, genre: "crime" },
];

// 1. Получите массив названий всех фильмов жанра "sci-fi"
const arrGenre: string[] = movies
  .map((item) => {
    if (item.genre === "sci-fi") {
      return item.genre;
    }
  })
  .filter((item) => {
    return item !== undefined;
  });

console.log(arrGenre);

// 2. Найдите средний рейтинг всех фильмов
const arrRating: number = movies.reduce((acc, item) => {
  return acc + item.rating / movies.length;
}, 0.0);

console.log(arrRating);

// 3. Создайте массив фильмов, отсортированный по убыванию рейтинга
const arrFilms: string[] = movies
  .sort((a, b) => {
    return b.rating - a.rating;
  })
  .map((item) => {
    return item.title;
  });

console.log(arrFilms);

// 4. Найдите самый старый фильм
const arrOldFilms: string[] = movies
  .sort((a, b) => {
    return a.year - b.year;
  })
  .map((item, index) => {
    if (index === 0) {
      return item.title;
    }
  })
  .filter((item) => {
    return item !== undefined;
  });

console.log(arrOldFilms);
