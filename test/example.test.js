// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderShoes } from '../render-shoes.js';
import { shoes } from '../data/shoes.js';
import { findById, getCart, addItem } from '../utils.js';

const test = QUnit.test;

test('renderShoes should output HTML', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="shoe-card"><h2>Nike ZoomX Vaporfly Next% 2</h2><img src="./assets/next.jpeg"><p>250</p><button>add to cart</button></div>';
    const next = shoes[0];
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderShoes(next).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('renderShoes should output HTML', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="shoe-card"><h2>Nike Air Zoom Pegasus 38</h2><img src="./assets/pegasus.jpeg"><p>120</p><button>add to cart</button></div>';
    const pegasus = shoes[1];
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderShoes(pegasus).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('findById should find the correct item by its id', (expect) => {
    const expected = {
        id: '1',
        name: 'Nike ZoomX Vaporfly Next% 2',
        img: './assets/next.jpeg',
        price: 250
    };
    const actual = findById('1', shoes);
    expect.deepEqual(actual, expected);
});

test('getCart should return the cart if theres anything in it', (expect) => {
    const fakeCart = [
        { id: '1', qty: 2 },
        { id: '2', qty: 1 }
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));
    const cart = getCart();
    expect.deepEqual(cart, fakeCart);
});

test('getCart should return the empty if there is nothing in the cart', (expect) => {
    localStorage.removeItem('CART');
    const cart = getCart();
    expect.deepEqual(cart, []);
});

test('addItem should increase the amount of that item in the cart', (expect) => {
    const fakeCart = [
        { id: '1', qty: 2 },
        { id: '2', qty: 1 }
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));
    addItem('2');
    const cart = getCart();
    const expected = [
        { id: '1', qty: 2 },
        { id: '2', qty: 2 }
    ];
    expect.deepEqual(cart, expected);
});

test('addItem should add an item if its not already in the cart', (expect) => {
    localStorage.removeItem('CART');
    const expected = [{ id: '1', qty: 1 }];
    addItem('1');
    const cart = getCart();
    expect.deepEqual(cart, expected);
});
