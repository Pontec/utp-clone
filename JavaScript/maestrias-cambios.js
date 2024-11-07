function showhiddenP(){
    document.querySelector('.contenedor__presencial').style.display = 'block';
    document.querySelector('.contenedor__vivo').style.display = 'none';
    document.querySelector('.contenedor__online').style.display = 'none';
}

function showhiddenV(){
    document.querySelector('.contenedor__presencial').style.display = 'none';
    document.querySelector('.contenedor__vivo').style.display = 'block';
    document.querySelector('.contenedor__online').style.display = 'none';
}

function showhiddenO(){
    document.querySelector('.contenedor__presencial').style.display = 'none';
    document.querySelector('.contenedor__vivo').style.display = 'none';
    document.querySelector('.contenedor__online').style.display = 'block';
}


//! Formatos de interes
document.addEventListener('DOMContentLoaded', (event) => {
    const items = document.querySelectorAll('.modalidad-classes .item');
    
    let selectedIndex = localStorage.getItem('selectedIndex');
    if (selectedIndex === null) {
        selectedIndex = 0;
    }
    
    selectedIndex = parseInt(selectedIndex, 10);
    if (items[selectedIndex]) {
        items[selectedIndex].classList.add('selected');
    }

    items.forEach((item, index) => {
        item.addEventListener('click', () => {

            items.forEach(i => i.classList.remove('selected'));
            
            item.classList.add('selected');
            
            localStorage.setItem('selectedIndex', index);
        });
    });
});

//! Solicitar informacion - Ventana Modal
function mostrar(){
    document.querySelector('.modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function ocultar(){
    document.querySelector('.modal').style.display = 'none';
    document.body.style.overflow = 'scroll';
}