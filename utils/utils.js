export default function HeaderChangeBackground() {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('header--scrolled', window.scrollY > 10);
  });
}
