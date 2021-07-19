const basket = {
  products: [
    { title: 'Джинсы', price: 2000, count: 1 },
    { title: 'Футболка', price: 1000, count: 2 },
    { title: 'Кепка', price: 600, count: 2 },
    { title: 'Рюкзак', price: 2300, count: 1 },
  ],
  countBasketProducts() {
    let count = 0;
    for (let i = 0; i < this.products.length; i++) {
      count += this.products[i].count;
    }
    return count;
  },
  countBasketPrice() {
    let result = 0;
    for (let i = 0; i < this.products.length; i++) {
      result += this.products[i].price * this.products[i].count;
    }
    return result;
  },
  render() {
    let basketDiv = document.createElement('div');
    basketDiv.innerHTML =
      this.countBasketPrice() == 0
        ? 'Корзина пуста'
        : `В корзине ${this.countBasketProducts()} товаров на сумму ${this.countBasketPrice()}`;
    app.appendChild(basketDiv);
  },
};

basket.render();
