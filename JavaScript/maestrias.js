
const num = document.querySelector(".numero");
const contenedor = document.querySelector(".content_progreso");
const activa = document.querySelector(".activa");
let cont = 0;
let cont1 = 0;


function incrementNumber() {
    if (cont <= 100) {
        num.innerHTML = cont;
        cont += 5;
    } else {
        clearInterval(interValo);
        activa.classList.toggle("activa");
        contenedor.style.opacity = "0";
    }
}

function esperar() {
    clearInterval(interValo2); // Detiene el intervalo de espera
    interValo = setInterval(incrementNumber, 100);

}

const interValo2 = setInterval(esperar, 2000);
let interValo; 