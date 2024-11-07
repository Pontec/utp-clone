/***********LOGIN***********/
var loginContainer = document.getElementsByClassName('login-container')[0];
var registerContainer = document.getElementsByClassName('register-container')[0];
var activo = 1; // login = 1; register = 2;

function login() {
    activo = 1;
    handleResize();
}

function register() {
    activo = 2;
    handleResize();
}

function handleResize() {
    var width = window.innerWidth;

    if (width <= 1060) {
        if (activo == 1) {
            loginContainer.style.display = 'block';
            registerContainer.style.display = 'none';
        } else {
            registerContainer.style.display = 'block';
            loginContainer.style.display = 'none';
        }
    } else {
        if (activo == 1) {
            loginContainer.style.display = 'flex';
            registerContainer.style.display = 'none';
        } else {
            registerContainer.style.display = 'flex';
            loginContainer.style.display = 'none';
        }
    }

}

handleResize();

window.addEventListener('resize', handleResize);

/*LOGIN VALIDATION*/
document.getElementById("form-validation").addEventListener("submit", function (event) {

    const user = document.getElementById("userId").value;
    const password = document.getElementById("password").value;
    const error = [];
    
    if (user === "") {
        errorMessages.push("Por favor, ingrese un usuario (código o correo electrónico).");
    } else if (!user.includes("@")) {
        error.push("Por favor, ingrese una dirección de correo electrónico válida.");
    }

    if (password === "") {
        error.push("Por favor, ingrese una contraseña.");
    }

    if (error.length > 0) {
        event.preventDefault();   
        alert(error);       
    }else {
       window.open('home.html')
    }
});

/*REGISTER VALIDATION*/
var btnCrear = document.getElementById("crearCuenta")

btnCrear.addEventListener("click", function() {
    alert("Correo electronico incorrecto")

     var correoElemento = document.querySelector("regCorreo");
     var correoError = document.getElementById("errorCorreo")
     var correo = correoElemento.value;
    //var mensaje = document.getElementById("mensaje");

    if (!correo  == null|| !correo.match(/^[a-zA-Z0-9_+&-]+(?:\.[a-zA-Z0-9_+&-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/)) {
        //mensaje.textContent = "El correo no es válido";
        alert("correo no valido")
        //correoElemento.style.border = "2px solid red";
        correoError.classList.add('invalid_correo')
        correoError.style.color="red"
        correoError.textContent="Correo no valido"
    } else {
//mensaje.textContent = "El correo es válido";
     alert("correo valido")
     correoElemento.style.border = "";
     correoError.classList.toggle('invalid_correo')
     correoError.textContent="Correo valido"
     correoError.style.color="green"
    }
});