import { findById, calcOrderTotal, toUSD, getCart, getProducts } from '../utils.js';
import { renderItems } from '../render-items.js';

const cart = getCart();
const shoes = getProducts();
const tbody = document.getElementById('table-body');
for (let cartItem of cart) {
    const product = findById(cartItem.id, shoes);
    
    const tr = renderItems(cartItem, product);
    tbody.appendChild(tr);
}

const orderTotal = calcOrderTotal(cart, shoes);
const tdOrderTotal = document.getElementById('total');
tdOrderTotal.textContent = toUSD(orderTotal);

const placeOrder = document.getElementById('place-order');

const clearCart = function() {
    localStorage.removeItem('CART');
    window.location.replace('..');
};

if (cart.length <= 0) {
    placeOrder.disabled = true;
} else {
    placeOrder.disabled = false;
    placeOrder.addEventListener('click', () => {
        clearCart();
    });
}
