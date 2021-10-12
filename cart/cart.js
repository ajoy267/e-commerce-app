import { shoes } from '../data/shoes.js';
import { cart } from '../data/cart-data.js';
import { findById } from '../utils.js';
import { renderItems } from '../render-items.js';


const tbody = document.getElementById('table-body');
for (let cartItem of cart) {
    const product = findById(cartItem.id, shoes);
    
    const tr = renderItems(cartItem, product);
    tbody.appendChild(tr);
}