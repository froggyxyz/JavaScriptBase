const basket = {
  products: [
    { title: 'Джинсы', price: 2000, count: 1 },
    { title: 'Футболка', price: 1000, count: 2 },
    { title: 'Кепка', price: 600, count: 2 },
    { title: 'Рюкзак', price: 2300, count: 1 },
  ],
  countBasketPrice() {
    let result = 0;
    for (let i = 0; i < this.products.length; i++) {
      result += this.products[i].price * this.products[i].count;
    }
    return result;
  },
};

console.log(basket.countBasketPrice());
