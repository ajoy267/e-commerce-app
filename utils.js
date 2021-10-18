import { shoes } from './data/shoes.js';

// This is looping each item to match the item with the id
// and then return what that item is if it mathces the id
export function findById(id, items) {
    for (let item of items) {
        if (item.id === id) {
            return item;
        }
    }
}

export function calcOrderTotal(cart, shoes) {
    let orderTotal = 0;
    for (let item of cart) {
        const shoe = findById(item.id, shoes);
        orderTotal = orderTotal + shoe.price * item.qty;
    }
    return orderTotal;
}

export function toUSD(number) {
    return number.toLocaleString('en-us', { style: 'currency', currency: 'USD' });
}

export function getCart() {
    const cartString = localStorage.getItem('CART') || '[]';
    const cart = JSON.parse(cartString);
    return cart;
}

export function addItem(id) {
    const cart = getCart();
    const getCartItem = findById(id, cart);
    if (getCartItem) {
        getCartItem.qty++;
    } else {
        const newCartItem = { id: id, qty: 1 };
        cart.push(newCartItem);
    }
    const stringCart = JSON.stringify(cart);
    localStorage.setItem('CART', stringCart);
}

export function getProducts() {
    let lsProducts = localStorage.getItem('PRODUCTS');
    const products = JSON.parse(lsProducts);

    if (!products) {
        const shoeString = JSON.stringify(shoes);
        localStorage.setItem('PRODUCTS', shoeString);
    }
    return products || shoes;
}

export function addProduct(newShoe) {
    let products = getProducts();
    products.push(newShoe);
    let productString = JSON.stringify(products);
    localStorage.setItem('PRODUCTS', productString);
}
