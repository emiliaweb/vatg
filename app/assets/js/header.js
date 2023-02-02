window.addEventListener('DOMContentLoaded', () => {
    const openMenu = document.querySelector('[data-menu-icon=open]');
    const closeMenu = document.querySelector('[data-menu-icon=close]');
    const dropdown = document.querySelector('[data-menu-dropdown]');

    openMenu.addEventListener('click', () => {
        dropdown.classList.add('header-menu-dropdown--active');
    });

    closeMenu.addEventListener('click', () => {
        dropdown.classList.remove('header-menu-dropdown--active');
    });
})