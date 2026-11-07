const grid = document.querySelector('.grid');
const btn  = document.querySelector('.button .y-button');
const texts = document.querySelectorAll('.card [data-new]')

btn.addEventListener('click', () => {
    grid.classList.toggle('active');

    texts.forEach(el => {
      el.textContent = el.dataset.new;
      
    });
  });