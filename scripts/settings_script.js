/* Setting the default slide start index: */
let slideIndex = 1;
/* We call the function that is implemented below: */
showSlides(slideIndex);

// Next/previous controls

/* Increase the index by 1 - show the next slide: */
function nextSlide() {
    showSlides(slideIndex += 1);
}
/* Decrease the index by 1 - show the previous slide: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

// Thumbnail image controls
function currentSlide(nummer) {
  showSlides(slideIndex = nummer);
}

/* Flip function: */
function showSlides(number) {
  let i;

  /* We refer to the elements with the class name "myslides", that is, to the pictures: */
  let slides = document.getElementsByClassName("slides");

  /* We refer to the elements with the class name "dots", that is, to the dots: */
  let dots = document.getElementsByClassName("dot");

  /* Checking the number of slides: når den er over tre gå tilbage til en, hvis den er under 1 går op til 3 )*/
  if (number > slides.length) {slideIndex = 1}

  if (number < 1) {slideIndex = slides.length}

   /* Loop through each slide in a for loop: */
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  /* Making an element block: */
  slides[slideIndex-1].style.display = "block";


  dots[slideIndex-1].className += " active";
}
