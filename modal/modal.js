const ssOpenModalBtn = document.querySelector("#ss-mobile-menu-button-style");
const ssModalMenu = document.querySelector("#ss-menu-container-overlay");
const ssCloseModalBtn = document.querySelector("#ss-menu-button");

ssOpenModalBtn.addEventListener("click", SsToggleModal);
ssCloseModalBtn.addEventListener("click", SsToggleModal);

function SsToggleModal() {
    ssModalMenu.classList.toggle("ss-hidden");
}

// multiple modal
const modalProducts = {
    ssOpenMenuBtn: document.querySelector("#ss-section-our-products-list-item-button"),
    ssCloseMenuBtn: document.querySelector("#ss-modal-window-close-button"),
    ssModal: document.querySelector("#ss-modal-overlay")
};

modalProducts.ssOpenMenuBtn.addEventListener('click', toggleMenu);
modalProducts.ssCloseMenuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    modalProducts.ssModal.classList.toggle('hidden');
}