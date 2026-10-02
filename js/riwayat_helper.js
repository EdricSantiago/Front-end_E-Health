function tambahRiwayat(item) {
    var data = JSON.parse(localStorage.getItem('riwayat_user') || '[]');
    item.id = Date.now();
    data.unshift(item);
    localStorage.setItem('riwayat_user', JSON.stringify(data));
}