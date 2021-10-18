import { addProduct } from '../utils.js';

const form = document.getElementById('product-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const newShoe = {
        id: data.get('id'),
        name: data.get('name'),
        img: data.get('img'),
        price: Number(data.get('price'))
    };
    addProduct(newShoe);
    alert('A new shoe was added');
    form.reset();
});