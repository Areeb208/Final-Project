// Filter logic
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