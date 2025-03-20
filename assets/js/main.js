const products = [
    { id: 1, name: "Product 1", price: 19.99, image: "/assets/images/images.jpg" },
    { id: 2, name: "Product 2", price: 24.99, image: "/assets/images/images.jpg" },
    { id: 3, name: "Product 3", price: 29.99, image: "/assets/images/images.jpg" },
    { id: 4, name: "Product 4", price: 34.99, image: "/assets/images/images.jpg" },
    { id: 5, name: "Product 5", price: 39.99, image: "/assets/images/images.jpg" },
    { id: 6, name: "Product 6", price: 44.99, image: "/assets/images/images.jpg" },
    { id: 7, name: "Product 7", price: 49.99, image: "/assets/images/images.jpg" },
    { id: 8, name: "Product 8", price: 54.99, image: "/assets/images/images.jpg" },
    { id: 9, name: "Product 9", price: 59.99, image: "/assets/images/images.jpg" },
];

function loadProducts() {
    let productContainer = document.getElementById("product-list");
    productContainer.innerHTML = ""; // Clear previous content

    products.forEach(product => {
        let productHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <!-- <h3>${product.name}</h3> -->
                <p>$${product.price.toFixed(2)}</p>
                <a href="pages/product-details.html?id=${product.id}" class="view-details">View Details</a>
                <div>
                    <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
                </div>
            </div>
        `;
        productContainer.innerHTML += productHTML;
    });
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartModal = document.getElementById("cart-modal");
const cartIcon = document.getElementById("cart-icon");
const closeModal = document.querySelector(".close");

function addToCart(name, price) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

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

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

cartIcon.onclick = function() { 
    cartModal.style.display = "block"; 
}

closeModal.onclick = function() {
    cartModal.style.display = "none";
}

window.onclick = (event) => { if (event.target == cartModal) cartModal.style.display = "none"; };

document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
    updateCart();
    if (document.getElementById("product-details")) {
        loadProductDetails();
    }
});

function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    const product = products.find(p => p.id == productId);

    if (product) {
        document.getElementById("product-image").src = product.image;
        document.getElementById("product-name").innerText = product.name;
        document.getElementById("product-price").innerText = `$${product.price.toFixed(2)}`;
        document.getElementById("add-to-cart").setAttribute("onclick", `addToCart('${product.name}', ${product.price})`);
    } else {
        document.querySelector(".product-details").innerHTML = "<h2>Product Not Found</h2>";
    }
}