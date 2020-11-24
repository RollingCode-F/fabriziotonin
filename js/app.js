// Paper flip animation 
document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide').mount();
});

let splide = new Splide('.splide').mount();


let next = document.getElementsByClassName("splide__arrow--next")[0];


let prev = document.getElementsByClassName("splide__arrow--prev")[0];

next.addEventListener('click', () => {
  let paper = document.getElementById('paper');
  paper.classList.add('paper')
  setTimeout(function () {
    paper.classList.remove('paper')

  }, 500);
})

prev.addEventListener('click', () => {
  let paperbck = document.getElementById('paperbck');
  paperbck.classList.add('paperbck')
  setTimeout(function () {
    paperbck.classList.remove('paperbck')

  }, 500);
})