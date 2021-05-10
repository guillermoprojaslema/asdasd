
function calculandoganancia() {

    var objMonto = document.getElementById("Monto");
    var objMoneda = document.getElementsByName("inlineRadioOptions");
    var objDeposito = document.getElementById("Deposito").children
    var objPlazo = document.getElementById("Plazo");

  

    if ( objMonto.value != "" &&
        objMonto.value != null &&
        objPlazo.value != "" &&
        objPlazo.value != null) {
        objGanancia = (objPlazo.value * objMonto.value * 0.0047)
        console.log("calculando ganancia");

        for (i = 1; i < objDeposito.length; i++) {
            var objOption = objDeposito[i];


            for (i = 0; i < objMoneda.length; i++) {
                var radio_moneda = objMoneda[i];


                if (objOption.value == "") {
                    alert(" Seleccione un tipo de inversion")
                    break
                }

                if(radio_moneda.value = ""){
                    alert("seleccione un tipo de moneda")
                    break
                }
            


                // Condiciones para plazo fijo

                if (objOption.value == "1" && radio_moneda.value == "0") {


                    if (objPlazo.value < 7 && objPlazo.value > 90) {
                        alert("El tiempo de inversion es de 7 a 90 dias");
                        return false;
                    }
                    if (objMonto.value <= 10000) {
                        alert("el monto minimo a invertir es de 10000 Pesos");
                        return false;

                    }


                    if (radio_moneda.value == "1") {

                        if (objPlazo.value < 120 && objPlazo.value > 365) {
                            alert("El tiempo de inversion es de 120 dias hasta 1 año");
                            return false;
                        }
                        if (objMonto.value < 5000) {
                            alert("El monto minimo es de 5000");
                            return false;
                        }
                    }


                }

                // condiciones para plazo renovable

                if (objOption.value == "2" && radio_moneda.value == "1") {



                    if (objPlazo.value >= 120 && objPlazo.value <= 365) {
                        alert("El tiempo de inversion es desde 120 dias hasta 1 año");
                        return false;
                    }
                    if (objMonto.value < 5000) {
                        alert(" El monto minimo es de 5000");
                        return false;
                    }


                }
            }
        }
    }

}
