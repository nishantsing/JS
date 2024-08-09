document.addEventListener("DOMContentLoaded", () => {
    const cartSection = document.getElementById("cart-section");
    const checkoutButton = document.getElementById("checkout-button");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Function to render cart contents
    const renderCart = () => {
        cartSection.innerHTML = "";

        if (cart.length === 0) {
            cartSection.innerHTML = "<p>Your cart is empty.</p>";
            checkoutButton.disabled = true;
            return;
        }

        const cartList = document.createElement("ul");
        let total = 0;

        cart.forEach((item) => {
            const cartItem = document.createElement("li");
            cartItem.innerHTML = `
                <span>${item.name} - $${item.price.toFixed(2)} x ${
                item.quantity
            }</span>
                <button class="decrease" data-id="${item.id}">-</button>
                <button class="increase" data-id="${item.id}">+</button>
                <button class="remove" data-id="${item.id}">Remove</button>
            `;
            cartList.appendChild(cartItem);
            total += item.price * item.quantity;
        });

        const cartSummary = document.createElement("div");
        cartSummary.className = "cart-summary";
        cartSummary.innerHTML = `
            <p>Total: $${total.toFixed(2)}</p>
        `;

        cartSection.appendChild(cartList);
        cartSection.appendChild(cartSummary);

        // Enable checkout button if there are items in the cart
        checkoutButton.disabled = cart.length === 0;

        // Add event listeners for quantity and remove buttons
        document.querySelectorAll(".decrease").forEach((button) => {
            button.addEventListener("click", () => {
                updateQuantity(parseInt(button.dataset.id, 10), -1);
            });
        });

        document.querySelectorAll(".increase").forEach((button) => {
            button.addEventListener("click", () => {
                updateQuantity(parseInt(button.dataset.id, 10), 1);
            });
        });

        document.querySelectorAll(".remove").forEach((button) => {
            button.addEventListener("click", () => {
                removeFromCart(parseInt(button.dataset.id, 10));
            });
        });
    };

    // Function to update item quantity in the cart
    const updateQuantity = (productId, change) => {
        const item = cart.find((item) => item.id === productId);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                cart = cart.filter((item) => item.id !== productId); // Remove item if quantity is zero
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart(); // Update the cart display
        }
    };

    // Function to remove item from the cart
    const removeFromCart = (productId) => {
        cart = cart.filter((item) => item.id !== productId); // Remove the item
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart(); // Update the cart display
    };

    // Handle checkout button click
    checkoutButton.addEventListener("click", () => {
        window.location.href = "checkout.html"; // Redirect to checkout page
    });

    // Initial render
    renderCart();
});
