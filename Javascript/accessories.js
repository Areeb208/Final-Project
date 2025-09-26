//  Filter Logic (already present) 
const categorySelect = document.getElementById('categorySelect');
const products = document.querySelectorAll('.product-card');

categorySelect.addEventListener('change', () => {
    const selected = categorySelect.value;
    products.forEach(card => {
        if (selected === 'all' || card.dataset.category === selected) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Cart Logic 
const cartCount = document.getElementById('cartCount');
let count = 0;

document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', () => {
        if (!button.classList.contains('added')) {
            // Add to cart
            button.classList.add('added');
            button.textContent = "Added ✓";
            count++;
        } else {
            // Remove from cart
            button.classList.remove('added');
            button.textContent = "Add to Cart";
            count--;
        }
        cartCount.textContent = count;
    });
});

