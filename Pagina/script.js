let cart = [];
let totalPrice = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    totalPrice += price;
    document.getElementById('cart-count').innerText = cart.length;
}

function toggleCart() {
    const cartModal = document.getElementById('cart');
    cartModal.style.display = cartModal.style.display === 'none' ? 'block' : 'none';
    displayCartItems();
}

function displayCartItems() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(li);
    });
    document.getElementById('total-price').innerText = `Total: $${totalPrice}`;
}