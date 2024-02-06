document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
    const totalSpan = document.getElementById('total');

    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const item = this.parentNode;
            const itemName = item.querySelector('.name').textContent;
            const itemPrice = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
            
            const li = document.createElement('li');
            li.textContent = `${itemName} - $${itemPrice}`;
            cartItemsList.appendChild(li);

            total += itemPrice;
            totalSpan.textContent = total.toFixed(2);
        });
    });

    const checkoutButton = document.getElementById('checkout');
    checkoutButton.addEventListener('click', function() {
        alert(`Total: $${total.toFixed(2)}. Thank you for your order!`);
        total = 0;
        cartItemsList.innerHTML = '';
        totalSpan.textContent = total.toFixed(2);
    });
});
