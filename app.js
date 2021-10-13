// import functions and grab DOM elements
import { renderShoes } from './render-shoes.js';
import { shoes } from './data/shoes.js';
import { addItem } from './utils.js';
// initialize global state
const productList = document.getElementById('product-list');
// set event listeners 
for (let shoe of shoes) {
    const shoeCard = renderShoes(shoe);
    productList.append(shoeCard);
}

const addButtons = document.querySelectorAll('add-button');
for (let button of addButtons) {
    button.addEventListener('click', () => {
        addItem(button.id);
    });
}
