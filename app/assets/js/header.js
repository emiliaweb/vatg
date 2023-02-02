window.addEventListener('DOMContentLoaded', () => {
    const openMenu = document.querySelector('[data-menu-icon=open]');
    const closeMenu = document.querySelector('[data-menu-icon=close]');
    const dropdown = document.querySelector('[data-menu-dropdown]');
    const overlay = document.querySelector('[data-overlay]');

    openMenu.addEventListener('click', () => {
        overlay.classList.add('header-overlay--active');
        dropdown.classList.add('header-menu-dropdown--active');
    });

    closeMenu.addEventListener('click', () => {
        overlay.classList.remove('header-overlay--active');
        dropdown.classList.remove('header-menu-dropdown--active');
    });

    overlay.addEventListener('click', () => {
        overlay.classList.remove('header-overlay--active');
        dropdown.classList.remove('header-menu-dropdown--active');
    });
})