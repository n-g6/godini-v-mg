/* Източник: W3Schools - https://www.w3schools.com/howto/howto_js_slideshow.asp */

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
} 
/* Източник: W3Schools - https://www.w3schools.com/howto/howto_js_slideshow.asp */

function changeTitles() {
  let a = slideIndex;
  if (slideIndex >= 1 && slideIndex <= 4) {
    document.getElementById('big-title').innerHTML = 'Екскурзия до Казанлък, Копривщица и Сопот';
    document.getElementById('small-title').innerHTML = '29-31 октомври 2022г.';
  }

  if (slideIndex >= 5 && slideIndex <= 11) {
    document.getElementById('big-title').innerHTML = 'Експедиция Червен - първи път';
    document.getElementById('small-title').innerHTML = '25 март 2023г.';
  }

  if (slideIndex >= 12 && slideIndex <= 16) {
    document.getElementById('big-title').innerHTML = 'Разкопки в Широково';
    document.getElementById('small-title').innerHTML = '30 септември 2023г.';
  }

  if (slideIndex >= 17 && slideIndex <= 27) {
    document.getElementById('big-title').innerHTML = 'Експедиция Червен - втори път';
    document.getElementById('small-title').innerHTML = '13 април 2024г.';
  }

  if (slideIndex >= 28 && slideIndex <= 37) {
    document.getElementById('big-title').innerHTML = 'Експедиция Иваново';
    document.getElementById('small-title').innerHTML = '20 април 2024г.';
  }

  if (slideIndex >= 38 && slideIndex <= 42) {
    document.getElementById('big-title').innerHTML = 'Разкопки в Червен (3-то посещение)';
    document.getElementById('small-title').innerHTML = '5 октомври 2024г.'
  }
}