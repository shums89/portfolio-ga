const links = document.querySelectorAll('.menu-list__link');
const btn = document.querySelector('.main__button');

const allLinks = [...links, btn];

allLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const id = link.getAttribute('href');
    const section = document.querySelector(id);

    if (section) {
      seamless.scrollIntoView(section, {
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  });
});