const b = document.querySelector('.burger__conteiner');
const d = document.querySelector('.li');
const i = document.querySelector('.img')

b.addEventListener('click', () => {
   b.classList.toggle('burger_active');
   d.classList.toggle('list-active');
   b.classList.toggle('active');
   i.classList.toggle('img-active');
})