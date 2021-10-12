import { shoes } from '../data/shoes.js';
import { cart } from '../data/cart-data.js';
import { findById } from '../utils.js';

const tbody = document.getElementById('table-body');
for (let cartItem of cart) {
    const shoeData = findById(cartItem.id, shoes);
    
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = shoeData.name;

    const tdPrice = document.createElement('td');
    tdPrice.textContent = shoeData.price;

    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;

    const tdTotal = document.createElement('td');
    tdTotal.textContent = cartItem.qty * shoeData.price;

    tr.append(tdName, tdPrice, tdQty, tdTotal);
    tbody.appendChild(tr);
}