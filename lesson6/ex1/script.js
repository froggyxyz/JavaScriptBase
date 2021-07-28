const basket = {
  root: null,
  clearBtn: null,
  products: [
    { id: 1, title: 'Джинсы', price: 2000, count: 1 },
    { id: 2, title: 'Футболка', price: 1000, count: 2 },
    { id: 3, title: 'Кепка', price: 600, count: 2 },
    { id: 4, title: 'Рюкзак', price: 2300, count: 1 },
  ],
  init(rootId, clearBtn) {
    this.root = document.getElementById(`${rootId}`);
    this.clearBtn = document.querySelector(`.${clearBtn}`);
    this.addEvents();
    this.render();
  },
  addEvents() {
    this.clearBtn.addEventListener('click', this.clearBasket.bind(this));
  },
  clearBasket() {
    this.products = [];
    this.render();
  },
  render() {
    if (this.products.length > 0) {
      this.renderBasketProducts();
      this.root.insertAdjacentHTML(
        'beforeend',
        `<p>Количество товаров: ${this.countBasketProducts()}</p>
      <p>Общая стоимость: ${this.countBasketPrice()}</p>`
      );
    } else {
      this.renderEmptyBasket();
    }
  },
  addToBasket(product) {
    if (product) {
      const isInside = this.products.find((item) => product.id === item.id);
      if (isInside) {
        isInside.count++;
      } else {
        this.products.push({ ...product, count: 1 });
      }
      this.render();
    } else {
      alert('Ошибка');
    }
  },
  renderEmptyBasket() {
    this.root.innerHTML = '';
    this.root.innerText = 'Корзина пуста';
  },
  renderBasketProducts() {
    this.root.innerHTML = '';
    this.products.forEach((item) => {
      this.root.insertAdjacentHTML('beforeend', this.renderBasketItem(item));
    });
  },
  renderBasketItem(item) {
    return `<div class="basket__item">
      <h3>${item.title}</h3>
      <p>${item.price} руб.</p>
      <p>${item.count} шт.</p>
    </div>`;
  },
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
};

const catalog = {
  root: null,
  basket: null,
  products: [
    { id: 1, title: 'Джинсы', price: 2000 },
    { id: 2, title: 'Футболка', price: 1000 },
    { id: 3, title: 'Кепка', price: 600 },
    { id: 4, title: 'Рюкзак', price: 2300 },
  ],
  init(rootId, basket) {
    this.root = document.getElementById(`${rootId}`);
    this.basket = basket;
    this.render();
    this.addEvents();
  },
  render() {
    if (this.products.length > 0) {
      this.renderCatalogProducts();
    } else {
      this.renderEmptyCatalog();
    }
  },
  addEvents() {
    this.root.addEventListener('click', (event) => this.addToBasket(event));
  },
  addToBasket(event) {
    if (!event.target.classList.contains('product__btn')) return;
    const id = +event.target.dataset.id;
    const productToAdd = this.products.find((product) => product.id === id);
    this.basket.addToBasket(productToAdd);
  },
  renderCatalogProducts() {
    this.root.innerHTML = '';
    this.products.forEach((item) => {
      this.root.insertAdjacentHTML('beforeend', this.renderCatalogItem(item));
    });
  },
  renderCatalogItem(item) {
    return `<article class="product">
      <h3>${item.title}</h3>
      <span>Цена: ${item.price} руб.</span>
      <button class="product__btn" data-id="${item.id}">Купить</button>
    </article>`;
  },
  renderEmptyCatalog() {
    this.root.innerHTML = '';
    this.root.innerText = 'Каталог пуст';
  },
};

basket.init('basket', 'basket__clear');
catalog.init('catalog', basket);
