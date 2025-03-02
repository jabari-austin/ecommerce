const products = [
    { id: 1, name: "Product 1", price: 19.99, image: "assets/images/images.jpg" },
    { id: 2, name: "Product 2", price: 24.99, image: "assets/images/images.jpg" },
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
