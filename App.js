const orders = [
    { orderId: 1, items: [{ itemName: 'Item1', quantity: 2 }, { itemName: 'Item2', quantity: 1 }] },
    { orderId: 2, items: [{ itemName: 'Item3', quantity: 4 }, { itemName: 'Item4', quantity: 2 }] },
    { orderId: 3, items: [{ itemName: 'Item5', quantity: 1 }, { itemName: 'Item6', quantity: 3 }] }
];

function calculateTotalItemsSold(orders) {
    let totalItemsSold = 0;
    orders.forEach(order => {
        order.items.forEach(item => {
            totalItemsSold += item.quantity;
        });
    });
    return totalItemsSold;
}

function renderOrders(orders) {
    const ordersContainer = document.querySelector('.orders');
    ordersContainer.innerHTML = '';
    
    orders.forEach(order => {
        const orderDiv = document.createElement('div');
        orderDiv.classList.add('order');
        
        const orderTitle = document.createElement('h2');
        orderTitle.textContent = `Order #${order.orderId}`;
        orderDiv.appendChild(orderTitle);
        
        const itemsList = document.createElement('ul');
        
        order.items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.itemName} - Quantity: ${item.quantity}`;
            itemsList.appendChild(listItem);
        });
        
        orderDiv.appendChild(itemsList);
        ordersContainer.appendChild(orderDiv);
    });
}

function updateTotalItemsSold(total) {
    const totalItemsSoldElement = document.getElementById('total-items-sold');
    totalItemsSoldElement.textContent = `Total items sold: ${total}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const totalItemsSold = calculateTotalItemsSold(orders);
    renderOrders(orders);
    updateTotalItemsSold(totalItemsSold);
});
