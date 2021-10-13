import { shoes } from '../data/shoes.js';
import { findById, calcOrderTotal, toUSD, getCart } from '../utils.js';
import { renderItems } from '../render-items.js';

const cart = getCart();
const tbody = document.getElementById('table-body');
for (let cartItem of cart) {
    const product = findById(cartItem.id, shoes);
    
    const tr = renderItems(cartItem, product);
    tbody.appendChild(tr);
}

const orderTotal = calcOrderTotal(cart, shoes);
const tdOrderTotal = document.getElementById('total');
tdOrderTotal.textContent = toUSD(orderTotal);