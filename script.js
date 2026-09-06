const menu = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const toggleMenu = (open) => { mobileNav.classList.toggle('open', open); menu.setAttribute('aria-expanded', String(open)); };
menu.addEventListener('click', () => toggleMenu(!mobileNav.classList.contains('open')));
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => toggleMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape') toggleMenu(false); });
