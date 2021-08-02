let products = [
  { title: 'Джинсы', price: 2000 },
  { title: 'Футболка', price: 1000 },
  { title: 'Кепка', price: 600 },
  { title: 'Рюкзак', price: 2300 },
];

function render() {
  for (let i = 0; i < products.length; i++) {
    let productArticle = document.createElement('article');
    productArticle.className = 'productArticle';
    let productTitle = document.createElement('h2');
    productTitle.innerHTML = products[i].title;
    let productPrice = document.createElement('span');
    productPrice.innerHTML = `Цена: ${products[i].price}`;
    catalog.appendChild(productArticle);
    productArticle.appendChild(productTitle);
    productArticle.appendChild(productPrice);
  }
}

render();
