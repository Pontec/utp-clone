function mostrar() {
    document.querySelector(".modal").style.display = "block";
}
function ocultar() {
    document.querySelector(".modal").style.display = "none";
}


document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    const siguienteBoton = document.querySelector('.siguiente-boton');
    const previoBoton = document.querySelector('.previo-boton');

    siguienteBoton.addEventListener('click', nextSlide);
    previoBoton.addEventListener('click', prevSlide);

    showSlide(currentSlide);
});