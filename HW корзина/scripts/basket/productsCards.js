'use strict';

function addEventListenerFotAddToCart() {
  const addToCart = document.querySelectorAll('a[data-productId]');
  addToCart.forEach(function (button) {
    button.addEventListener('click', addProductHandler);
  });
}

function addProductHandler(event) {
  const productId = event.currentTarget.getAttribute('data-productId');
  addProductToCart(productId);
}

addEventListenerFotAddToCart();