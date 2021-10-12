// import functions and grab DOM elements
import { renderShoes } from './render-shoes.js';
import { shoes } from './data/shoes.js';
// initialize global state
const productList = document.getElementById('product-list');
// set event listeners 
for (let shoe of shoes) {
    const shoeCard = renderShoes(shoe);
    productList.append(shoeCard);
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
