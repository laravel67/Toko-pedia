document.addEventListener('DOMContentLoaded', function () {
    var exampleModal = document.getElementById('exampleModal');
    var searchInput = document.getElementById('searchInput');

    // Event listener untuk membuka modal ketika mengetik di input
    searchInput.addEventListener('input', function () {
        // Cek apakah input tidak kosong
        if (searchInput.value.trim() !== '') {
            // Tampilkan modal
            var modal = new bootstrap.Modal(exampleModal);
            modal.show();
        }
    });

    // Event listener untuk fokus pada input saat modal dibuka
    exampleModal.addEventListener('shown.bs.modal', function () {
        var modalSearchInput = exampleModal.querySelector('input[type="search"]');
        if (modalSearchInput) {
            modalSearchInput.focus();
        }
    });
});

// Kode untuk menuCart dan overlay tetap seperti sebelumnya
const wrapCart = document.querySelector('#wrap-cart');
const menuCart = document.querySelector('#menu-cart');
const overLay = document.querySelector('#overlay');

function show() {
    menuCart.classList.add("menuBar");
    overLay.classList.add("overStyle");
}

function hide() {
    setTimeout(() => {
        if (!wrapCart.matches(':hover') && !menuCart.matches(':hover')) {
            menuCart.classList.remove("menuBar");
            overLay.classList.remove("overStyle");
        }
    }, 100);
}

wrapCart.addEventListener('mouseover', show);
wrapCart.addEventListener('mouseout', hide);
menuCart.addEventListener('mouseover', show);
menuCart.addEventListener('mouseout', hide);

overLay.addEventListener('click', hide);
