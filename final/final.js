const grid = document.querySelector('.grid');
const btn  = document.querySelector('.button .y-button');

btn.addEventListener('click', () => {
    grid.classList.toggle('active');
  });