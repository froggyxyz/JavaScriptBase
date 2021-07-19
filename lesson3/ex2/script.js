let basket = [
  ['Джинсы', 1999, 1],
  ['Футболка', 999, 2],
  ['Кепка', 599, 2],
  ['Рюкзак', 2299, 1],
];

function countBasketPrice() {
  let result = 0;
  for (let i = 0; i < basket.length; i++) {
    result += basket[i][1] * basket[i][2];
  }
  return result;
}

console.log(countBasketPrice());
