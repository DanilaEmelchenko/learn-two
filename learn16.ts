// Дан массив товаров в корзине:
// const cart = [
//   { id: 1, name: "Ноутбук", price: 45000, quantity: 1 },
//   { id: 2, name: "Мышь", price: 1000, quantity: 2 },
//   { id: 3, name: "Клавиатура", price: 2000, quantity: 1 },
//   { id: 4, name: "Монитор", price: 15000, quantity: 1 }
// ];

// Задачи:
// 1. Посчитайте общую стоимость всех товаров в корзине
// 2. Добавьте новый товар в корзину
// 3. Удалите товар из корзины по id
// 4. Измените количество определённого товара

interface ICart {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const cart: ICart[] = [
  { id: 1, name: "Ноутбук", price: 45000, quantity: 1 },
  { id: 2, name: "Мышь", price: 1000, quantity: 2 },
  { id: 3, name: "Клавиатура", price: 2000, quantity: 1 },
  { id: 4, name: "Монитор", price: 15000, quantity: 1 },
];

// 1. Посчитайте общую стоимость всех товаров в корзине
const sumPrice: number = cart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(sumPrice);

// 2. Добавьте новый товар в корзину

const addCart: ICart[] = [
  ...cart,
  { id: 5, name: "Принтер", price: 10000, quantity: 1 },
];

console.log(addCart);

// 3. Удалите товар из корзины по id
const deleteId: ICart[] = cart.filter((item) => {
  return item.id !== 5;
});

console.log(deleteId);

// 4. Измените количество определённого товара
const quantity: ICart[] = cart.map((item) => {
  if (item.id === 1) {
    return { ...item, quantity: 2 };
  }

  return item;
});

console.log(quantity);
