let slideIndex = 1;
// Función para cargar el slideshow al cargar la página
showSlides(slideIndex);

// Función para avanzar o retroceder en el slideshow
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Función para mostrar una imagen específica
function currentSlide(n) {
    showSlides(slideIndex = n);
}
console.log("El código JavaScript está funcionando");
// Función principal que muestra las imágenes
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}