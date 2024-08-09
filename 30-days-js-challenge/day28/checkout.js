document.addEventListener("DOMContentLoaded", () => {
    const checkoutForm = document.getElementById("checkout-form");
    const confirmationSection = document.getElementById("confirmation-section");
    const confirmationMessage = document.getElementById("confirmation-message");
    const continueShoppingButton = document.getElementById(
        "continue-shopping-button"
    );
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (checkoutForm) {
        checkoutForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent default form submission

            // Collect form data
            const formData = new FormData(checkoutForm);
            const userDetails = {};
            formData.forEach((value, key) => {
                userDetails[key] = value;
            });

            // Simulate checkout process (e.g., send data to a server)
            console.log("Order Details:", {
                userDetails,
                cart,
            });

            // Display confirmation message
            displayConfirmation(userDetails);
        });
    }

    // Function to display confirmation
    const displayConfirmation = (userDetails) => {
        let total = 0;
        let orderDetails = "";

        cart.forEach((item) => {
            total += item.price * item.quantity;
            orderDetails += `<p>${item.name} - $${item.price.toFixed(2)} x ${
                item.quantity
            }</p>`;
        });

        confirmationMessage.innerHTML = `
            <p>Thank you for your order, ${userDetails.name}!</p>
            <p>Your order details:</p>
            ${orderDetails}
            <p>Total: $${total.toFixed(2)}</p>
            <p>Shipping Address: ${userDetails.address}, ${userDetails.city}, ${
            userDetails.state
        }, ${userDetails.zip}</p>
            <p>Payment Method: Card ending in ${userDetails[
                "card-number"
            ].slice(-4)}</p>
        `;

        confirmationSection.style.display = "block";
        checkoutForm.style.display = "none"; // Hide the form after submission

        // Clear the cart
        localStorage.removeItem("cart");
    };

    // Handle continue shopping button click
    if (continueShoppingButton) {
        continueShoppingButton.addEventListener("click", () => {
            window.location.href = "index.html"; // Redirect to shop page
        });
    }
});
