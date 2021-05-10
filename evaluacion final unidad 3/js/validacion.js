function checkDepositType() {
    var depositValue = document.getElementById("Deposito").value

    // Plazo Fijo
    if (depositValue == 1) {

        // Desbloquear UF
        document.getElementById("Uf").style.visibility = "visible";

    }
    // Renovable
    else {

        // Esconder el UF
        document.getElementById("Uf").style.visibility = "hidden";

        //Esto elige pesos. De esa forma, UF se oculta, y si tiene valor, �ste es reemplazado por el valor de Pesos
        document.querySelector('input[currency="Pesos"]:checked');


        var currency = document.querySelector('input[name="currency"]:checked').value
        depositValues = setDepositValues(currency); // CLP

    }
}


/*Vamos a asumir que es CLP*/

function setDepositValues(currency) {

    if (currency == 'clp') {
        var minimunSaveDays = 7;
        var maximumSaveDays = 90;
        var minumumAmount = 10000;
    } else {
        var minimunSaveDays = 120;
        var maximumSaveDays = 365;
        var minumumAmount = 5000;
    }
    return [minimunSaveDays, maximumSaveDays, minumumAmount]
}

function calculateProfit(time, amount) {
    return time * amount * 0.0047;
}

function isValidSubmitForm() {

    valid = false;

    var objMonto = document.getElementById("Monto");
    var objMoneda = document.getElementsByName("currency");
    var objDeposito = document.getElementById("Deposito").value;
    var objPlazo = document.getElementById("Plazo");


    if (objMonto.value != "" &&
        objMonto.value != null &&
        objPlazo.value != "" &&
        objPlazo.value != null &&
        (objMoneda.value == 'clp' || objMoneda.value == 'uf') &&

        ((objDeposito.value == '1' && 7 <= objPlazo.value <= 90) || (objDeposito.value == '2' && objPlazo.value >= 120))
    ) {
        valid = true;
    }

    return valid;

}


function calculandoganancia() {

    var objMonto = document.getElementById("Monto");
    var objMoneda = document.getElementsByName("currency");
    var objDeposito = document.getElementById("Deposito").value;
    var objPlazo = document.getElementById("Plazo");


    if (isValidSubmitForm()) {
        profit = calculateProfit(objPlazo.value, objMonto.value);
        alert('El valor de la ganancia es ' + profit + ' ' + objMoneda.value);
    } else {
        // ALERT CON LOS DATOS ERR�NEOS
    }
}
