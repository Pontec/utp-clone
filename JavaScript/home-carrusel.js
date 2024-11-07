
/*Carrusel 1*/
document.addEventListener('DOMContentLoaded', () => {
    const carruselContenedor = document.querySelector('.carrusel__contenedor');
    const slides = document.querySelectorAll('.bucle__limits');
    const btnAnterior = document.querySelector('.carrusel__anterior');
    const btnSiguiente = document.querySelector('.carrusel__siguiente');
    let currentIndex = 0;

    function showSlide(index) {
        carruselContenedor.style.transform = `translateX(-${index * 100}%)`;
    }

    btnAnterior.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        showSlide(currentIndex);
    });

    btnSiguiente.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });

    setInterval(() => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    }, 10000);
});

/*Carrusel 2*/
document.addEventListener('DOMContentLoaded', () => {
    const carruselContenedor2 = document.querySelector('.conectados__container');
    const blocks = document.querySelectorAll('.conectados__card');
    const btnAnterior2 = document.querySelector('.conectados__anterior');
    const btnSiguiente2 = document.querySelector('.conectados__siguiente');
    let currentIndex2 = 0;

    function showSlide(index) {
        carruselContenedor2.style.transform = `translateX(-${index * 100}%)`;
    }

    btnAnterior2.addEventListener('click', () => {
        currentIndex2 = (currentIndex2 > 0) ? currentIndex2 - 1 : blocks.length - 1;
        showSlide(currentIndex2);
    });

    btnSiguiente2.addEventListener('click', () => {
        currentIndex2 = (currentIndex2 < blocks.length - 1) ? currentIndex2 + 1 : 0;
        showSlide(currentIndex2);
    });

    setInterval(() => {
        currentIndex2 = (currentIndex2 < blocks.length - 1) ? currentIndex2 + 1 : 0;
        showSlide(currentIndex2);
    }, 10000);
});

/*Carrusel Administración Empresas MBA*/
document.addEventListener('DOMContentLoaded', () => {
    const carruselContenedor3 = document.querySelector('.carrusel__content');
    const card = document.querySelectorAll('.misiones__card');
    const anterior = document.querySelector('.anterior');
    const siguiente = document.querySelector('.siguiente');
    let currentIndex3 = 0;

    function showSlide(index) {
        carruselContenedor3.style.transform = `translateX(-${index * 100}%)`;
    }

    anterior.addEventListener('click', () => {
        currentIndex3 = (currentIndex3 > 0) ? currentIndex3 - 1 : card.length - 1;
        showSlide(currentIndex3);
    });

    siguiente.addEventListener('click', () => {
        currentIndex3 = (currentIndex3 < card.length - 1) ? currentIndex3 + 1 : 0;
        showSlide(currentIndex3);
    });

    setInterval(() => {
        currentIndex3 = (currentIndex3 < card.length - 1) ? currentIndex3 + 1 : 0;
        showSlide(currentIndex3);
    }, 10000);
});