let cart = [];
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartModal = document.getElementById("cart-modal");
const cartIcon = document.getElementById("cart-icon");
const closeModal = document.querySelector(".close");

// Function to add items to cart
function addToCart(name, price) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
}

// Function to update the cart
function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        cartItems.innerHTML += `
            <li>${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}
            <button onclick="removeFromCart('${item.name}')">❌</button></li>
        `;
    });
    cartTotal.innerText = total.toFixed(2);
    cartCount.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Function to remove items from cart
function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCart();
}

// Open and close cart modal
cartIcon.onclick= function() { 
    cartModal.style.display = "block"; 
}

closeModal.onclick = function() {
    cartModal.style.display = "none";
}

window.onclick = (event) => { if (event.target == cartModal) cartModal.style.display = "none"; };
