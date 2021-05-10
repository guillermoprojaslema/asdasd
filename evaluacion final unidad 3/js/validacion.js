function checkDepositType() {
    var depositValue = document.getElementById("Deposito").value
    // Plazo Fijo
    if (depositValue == 1) {
        // Desbloquear UF
        document.getElementById("uf_label").style.visibility = "visible";
    }
    // Renovable
    else {
        //  UF escondido
        document.getElementById("uf_label").style.visibility = "hidden";

        //se elige automaticamente pesos
        radioPesos = document.getElementById("Pesos");
        radioPesos.checked = true;
    }
}


function calculateProfit(time, amount) {
    return time * amount * 0.0047;
}

function isValidSubmitForm() {

    valid = false;

    var objMonto = document.getElementById("Monto");
    var currency = document.querySelector('input[name="currency"]:checked').value;
    var objDeposito = document.getElementById("Deposito").value;
    var objPlazo = document.getElementById("Plazo");

    if (objMonto.value != "" &&
        objMonto.value != null &&
        objPlazo.value != "" &&
        objPlazo.value != null &&
        ((currency == 'clp' && 7 <= objPlazo.value <= 90 && objMonto.value >= 10000) ||
            (currency == 'uf' && 120 <= objPlazo.value <= 365 && objMonto.value >= 5000))


    ) {
        valid = true;
    }

    return valid;
}


function calculandoganancia() {

    var objMonto = document.getElementById("Monto");
    var objMoneda = document.getElementsByName("currency");
    var objPlazo = document.getElementById("Plazo");
    var objDeposito = document.getElementById("Deposito").value;

    if (isValidSubmitForm()) {
        profit = calculateProfit(objPlazo.value, objMonto.value);
        alert("El valor de la ganancia es " + profit + "El monto ingresado fue " + objMonto + "El tipo de moneda es " + objMoneda.value + "Los días de plazo son " + objPlazo.value + "su tipo de deposito seleccionado " + objDeposito);
    } else {
        alert('Ingrese correctamente los datos');
    }
}
