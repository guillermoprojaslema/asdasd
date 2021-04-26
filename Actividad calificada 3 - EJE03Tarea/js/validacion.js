function enviandoformulario() {

    var objNombre = document.getElementById('Nombre');
    var objApellido = document.getElementById("Apellido");
    var objCorreo = document.getElementById("Correo");
    var objNumero = document.getElementById("Numero");
    var objPropiedad = document.getElementById("Propiedad");
    var objMoneda = document.getElementById("Moneda");
    var objMonto = document.getElementById("Monto");
    var objCredito = document.getElementById("Credito");
    var objValorPropiedad = document.getElementById('valorPropiedad');
    var objError = document.getElementById("error");

    console.log('Enviando formulario...');

    var mensajesError = [];

    var tasaCredito = 0.8;

    if (objNombre.value === null || objNombre.value === '') {
        mensajesError.push('ingresar tu nombre');
        alert('Nombre no puede estar vacio');
    }

    if (objNombre.value.toString().length < 2){
        mensajesError.push('Nombre es muy corto');
    }

    if (objApellido.value === null || objApellido.value === '') {
        mensajesError.push('ingresar tu apellido');

    }
    if (objCorreo.value === null || objCorreo.value === '') {
        mensajesError.push('ingresar tu correo');
    }

    if (objNumero.value === null || objNumero.value === '') {
        mensajesError.push('ingresar tu Numero');

    }
    if (objPropiedad.value === null || objPropiedad.value === '') {
        mensajesError.push('ingresar tu Propiedad');
    }

    if (objMonto.value > objValorPropiedad.value * tasaCredito){
        alert('No puede tomar este credito. Sobrepasa el 80% del valor de la proiedad');
    }

    error.innerHTML = mensajesError.join(",");
}