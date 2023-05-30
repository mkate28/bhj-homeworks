const products = document.querySelector('.products');
const cart = document.querySelector('.cart__products');

window.onload = () => {
   cartStatus();
}

if (localStorage.getItem('cartItems')) {
   cart.innerHTML = localStorage.getItem('cartItems');
}

products.addEventListener('click', function(event) {
   const elem = event.target;
   // реализация счетчика
   let counter;
   if (elem.classList.contains('product__quantity-control_dec') ||
       elem.classList.contains('product__quantity-control_inc')) {
         counter = elem.closest('.product__quantity-controls').querySelector('.product__quantity-value');
      }
   if (elem.classList.contains('product__quantity-control_dec')) {
      if (Number(counter.innerText) > 1) counter.innerText = --counter.innerText;
   }
   if (elem.classList.contains('product__quantity-control_inc')) {
      counter.innerText = ++counter.innerText;
   }

   // добавление товара в корзину
   if (elem.classList.contains('product__add')) {
      const card = elem.closest('.product');
      // информация о товаре
      const productInfo = {
         id: card.dataset.id,
         img: card.querySelector('.product__image').getAttribute('src'),
         count: card.querySelector('.product__quantity-value').innerText,
      }
      // проверка наличия товара в корзине
      const itemInCart = cart.querySelector(`[data-id="${productInfo.id}"`);
      if (itemInCart) {
         const countEl = itemInCart.querySelector('.cart__product-count');
         countEl.innerText = Number(countEl.innerText) + Number(productInfo.count);
      } else {
         const productHTML = 
            `<div class="cart__product" data-id="${productInfo.id}">
               <img class="cart__product-image" src="${productInfo.img}">
               <div class="cart__product-count">${productInfo.count}</div>
               <div class="cart__product-remove">&times;</div>
            </div>`;
         cart.insertAdjacentHTML('beforeend', productHTML);
      }

      // сброс счетчика у карточки товара
      card.querySelector('.product__quantity-value').innerText = '1';
      cartStatus();
      saveCart();
   };
})

// удаление товара из корзины 
cart.addEventListener('click', deleteProduct)
function deleteProduct(event) {
   const btn = event.target;
   if (btn.classList.contains('cart__product-remove')) {
      const parent = btn.closest('.cart__product');
      parent.remove();
      cartStatus();
   }
   saveCart();
}

// скрытие / отображение корзины
function cartStatus() {
   const cartItem = cart.closest('.cart');
   if (cart.children.length === 0) {
      cartItem.classList.add('hidden');
   } else {
      cartItem.classList.remove('hidden');
   }
}

// сохранение в localStorage
function saveCart() {
   localStorage.setItem('cartItems', cart.innerHTML);
}