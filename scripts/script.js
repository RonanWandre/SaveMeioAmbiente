let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-image');
const totalSlides = slides.length;

function showSlide(n) {
  if (n >= totalSlides) slideIndex = 0;
  if (n < 0) slideIndex = totalSlides - 1;

  const slideAmount = -(slideIndex * 100) + "%";
  document.querySelector('.carousel-slides').style.transform = `translateX(${slideAmount})`;
}


document.querySelector('.carousel-control.prev').addEventListener('click', function() {
    showSlide(--slideIndex);
});

document.querySelector('.carousel-control.next').addEventListener('click', function() {
    showSlide(++slideIndex);
});

setInterval(function() {
    showSlide(++slideIndex);
}, 4000);

showSlide(slideIndex);
