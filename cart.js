// cart.js

var cartItems = [];
var cartTotal = 0;

function addToCart(name, image, price) {
    cartItems.push({ name: name, image: image, price: price });
    cartTotal += price;

    // Update cart data in localStorage
    updateCartInLocalStorage();
}

// cart.js

// ... existing code ...

function removeItemById(itemId) {
    var index = cartItems.findIndex(item => item.id === itemId);
    if (index !== -1) {
        var removedItem = cartItems.splice(index, 1)[0];
        cartTotal -= removedItem.price;

        // Update cart data in localStorage
        updateCartInLocalStorage();
    }
}

// ... existing code ...


function getCartItems() {
    return cartItems;
}

function getCartTotal() {
    return cartTotal;
}

function updateCartInLocalStorage() {
    try {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('cartTotal', cartTotal);
    } catch (error) {
        console.error('Error updating cart in localStorage:', error);
    }
}

function loadCartFromLocalStorage() {
    try {
        var storedCartItems = localStorage.getItem('cartItems');
        var storedCartTotal = localStorage.getItem('cartTotal');

        if (storedCartItems && storedCartTotal) {
            cartItems = JSON.parse(storedCartItems);
            cartTotal = parseFloat(storedCartTotal);
        }
    } catch (error) {
        console.error('Error loading cart from localStorage:', error);
    }
}
