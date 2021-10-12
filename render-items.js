export function renderItems(cartItem, product) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = product.name;

    const tdPrice = document.createElement('td');
    tdPrice.textContent = product.price;

    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;

    const tdTotal = document.createElement('td');
    tdTotal.textContent = cartItem.qty * product.price;

    tr.append(tdName, tdPrice, tdQty, tdTotal);
    
    return tr;
}