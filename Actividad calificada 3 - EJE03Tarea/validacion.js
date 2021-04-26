var Nombre = document.getElementById("Nombre");
var Apellido = document.getElementById("Apellido");
var Correo = document.getElementById("Correo");
var Numero = document.getElementById("Numero")
var Propiedad = document.getElementById("Propiedad")
var Moneda = document.getElementById("Moneda")
var Monto = document.getElementById("Monto")
var Credito = document.getElementById("Credito")
var valorCredito = document.getElementById("valorCredito")
var error = document.getElementById("error");

function enviandoformulario() {
    console.log('Enviando formulario...');

    var mensajesError = [];

    if (Nombre.value === null || Nombre.value === '') {
        mensajesError.push('ingresar tu nombre');

    }
    if (Apellido.value === null || Apellido.value === '') {
        mensajesError.push('ingresar tu apellido');

    }
    if (Correo.value === null || Correo.value === '') {
        mensajesError.push('ingresar tu correo');
    }
    if (Correo.value === null || Correo.value === '') {
        mensajesError.push('ingresar tu correo');
    }
    if (Numero.value === null || Numero.value === '') {
        mensajesError.push('ingresar tu Numero');
    
    }
    if (Propiedad.value === null || Propiedad.value === '') {
        mensajesError.push('ingresar tu Propiedad');
    
    }

    


    error.innerHTML = mensajesError.join(",");


 }