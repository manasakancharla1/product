// cartPage.js

document.addEventListener("DOMContentLoaded", function () {
    var cartItemsContainer = document.getElementById("cart-items");
    var cartTotalContainer = document.getElementById("cart-total");

    loadCartFromLocalStorage();
    updateCartUI();

    function updateCartUI() {
        // Clear previous items
        cartItemsContainer.innerHTML = "";

        // Get cart items from cart.js
        var items = getCartItems();

        // Populate cart items with remove buttons
        items.forEach(function (item) {
            var listItem = document.createElement("li");
            listItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                ${item.name} - $${item.price.toFixed(2)}
                <button onclick="removeCartItem(${item.id})">Remove</button>
            `;
            cartItemsContainer.appendChild(listItem);
        });

        // Get cart total from cart.js
        var total = getCartTotal();

        // Update total
        cartTotalContainer.innerText = `Total: $${total.toFixed(2)}`;
    }

    window.removeCartItem = function (itemId) {
        removeItemById(itemId);
        updateCartUI();
    };
});
