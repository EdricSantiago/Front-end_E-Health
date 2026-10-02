const addButtons = document.querySelectorAll('.btn-add');

addButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        button.textContent = '✓ Ditambahkan';
        button.classList.add('btn-add-success');
        button.disabled = true;
    });
});

const categoryButtons = document.querySelectorAll('.category-btn');
const productCards = document.querySelectorAll('.product-card');

categoryButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        categoryButtons.forEach(function (b) {
            b.classList.remove('active');
        });
        button.classList.add('active');

        const selectedCategory = button.dataset.category;

        productCards.forEach(function (card) {
            const matches = selectedCategory === 'semua' || card.dataset.category === selectedCategory;
            card.style.display = matches ? '' : 'none';
        });
    });
});