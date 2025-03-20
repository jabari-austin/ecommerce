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

// Load products when the page loads
document.addEventListener("DOMContentLoaded", loadProducts);
