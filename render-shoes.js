// shoe object sample
//        id: '1',
//        name: 'Nike ZoomX Vaporfly Next% 2',
//        img: './assets/next%.jpeg',
//        price: 250

export function renderShoes(shoe) {
    const shoeCard = document.createElement('div');
    shoeCard.classList.add('shoe-card');

    const shoeHeader = document.createElement('h2');
    shoeHeader.textContent = shoe.name;

    const img = document.createElement('img');
    img.src = shoe.img;

    const price = document.createElement('p');
    price.textContent = shoe.price;

    shoeCard.append(shoeHeader, img, price);
    return shoeCard;
}