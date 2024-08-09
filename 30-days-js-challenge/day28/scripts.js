document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Function to fetch product data and render products
    const fetchAndRenderProducts = async () => {
        try {
            const response = await fetch("products.json");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const products = await response.json();

            const productList = document.getElementById("product-list");
            productList.innerHTML = "";

            products.forEach((product) => {
                const productItem = document.createElement("div");
                productItem.className = "product-item";
                productItem.innerHTML = `
                    <img src="${product.imageUrl}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>$${product.price.toFixed(2)}</p>
                    <p>${product.description}</p>
                    <button data-id="${product.id}">Add to Cart</button>
                `;
                productList.appendChild(productItem);
            });

            // Add event listeners for "Add to Cart" buttons
            document
                .querySelectorAll(".product-item button")
                .forEach((button) => {
                    button.addEventListener("click", (event) => {
                        const productId = parseInt(event.target.dataset.id, 10);
                        addToCart(productId);
                    });
                });

            // Update the cart quantity in the navbar
            updateCartQuantity();
        } catch (error) {
            console.error(
                "There was a problem with the fetch operation:",
                error
            );
        }
    };

    // Function to add a product to the cart
    const addToCart = (productId) => {
        fetch("products.json")
            .then((response) => response.json())
            .then((products) => {
                const product = products.find((p) => p.id === productId);
                if (product) {
                    const existingItem = cart.find(
                        (item) => item.id === productId
                    );
                    if (existingItem) {
                        existingItem.quantity += 1;
                    } else {
                        cart.push({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            quantity: 1,
                        });
                    }
                    localStorage.setItem("cart", JSON.stringify(cart));
                    updateCartQuantity();
                }
            })
            .catch((error) =>
                console.error("Error fetching product data:", error)
            );
    };

    // Function to update the cart quantity in the navbar
    const updateCartQuantity = () => {
        const cartQuantity = cart.reduce(
            (total, item) => total + item.quantity,
            0
        );
        const cartNavLink = document.querySelector(
            'nav ul li a[href="cart.html"]'
        );
        if (cartNavLink) {
            cartNavLink.textContent = `Cart (${cartQuantity})`;
        }
    };

    // Add event listener to the cart link to navigate to the cart page
    document
        .querySelector('nav ul li a[href="cart.html"]')
        .addEventListener("click", (event) => {
            if (cart.length === 0) {
                event.preventDefault(); // Prevent navigation if cart is empty
                alert(
                    "Your cart is empty. Add items to the cart before proceeding."
                );
            }
        });

    fetchAndRenderProducts();
});
