document.addEventListener('DOMContentLoaded', function () {
    const search = document.getElementById('search-input');
    const items = document.querySelectorAll('#menu-grid .menu-item');
    if (!search) return;
    search.addEventListener('input', function () {
        const q = search.value.toLowerCase();
        items.forEach(i => { i.style.display = i.textContent.toLowerCase().includes(q) ? '' : 'none'; });
    });
});