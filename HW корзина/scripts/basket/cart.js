'use strict';

const openCartBtn = document.querySelector('.openCart');
const basketEl = document.querySelector('.basket');
const basketCounterEl = document.querySelector('.cartCounter');
const basketTotalEl = document.querySelector('.basketTotal');
const basketSumUpEl = document.querySelector('.basketSumUp');

openCartBtn.addEventListener('click', function() {
  basketEl.classList.toggle('hidden');
});

let basket = {};

function addProductToObject(productId) {
  if (!(productId in basket)) {
    basket[productId] = 1;
  } else {
    basket[productId]++;
  }
}

function renderProductInCart(productId) {
  let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
  if (productExist) {
    increaseProductCount(productId);
    recalculateSumForProduct(productId);
  } else {
    renderNewProductInCart(productId);
  }
}

function renderNewProductInCart(productId) {
  let productRow = `
  <div class="basketRow">
            <div>${products[productId].name}</div>
            <div>
                <span class="productCount" data-productId="${productId}">1</span> шт.
            </div>
            <div>$${products[productId].price}</div>
            <div>
                $<span class="productTotalRow" data-productId="${productId}">${products[productId].price}</span>
            </div>
        </div>
    `;
    basketTotalEl.insertAdjacentHTML('beforebegin', productRow);
}

function increaseProductCount(productId) {
  const productCountEl = document.querySelector(`.productCount[data-productId="${productId}"]`);
  productCountEl.textContent++;
}

function recalculateSumForProduct(productId) {
  const productTotalRowEl = document.querySelector(`.productTotalRow[data-productId="${productId}"]`);
  let totalPriceForRow = (basket[productId] * products[productId].price).toFixed(2);
  productTotalRowEl.textContent = totalPriceForRow;
}

function calculateAndRenderTotalBasketSum() {
  let totalSum = 0;
  for (let productId in basket) {
    totalSum += basket[productId] * products[productId].price;
  }
  basketSumUpEl.textContent = totalSum.toFixed(2);
}

function increaseProductsCount() {
  basketCounterEl.textContent++;
}

function addProductToCart(productId) {
  increaseProductsCount();
  addProductToObject(productId);
  renderProductInCart(productId);
  calculateAndRenderTotalBasketSum();
}