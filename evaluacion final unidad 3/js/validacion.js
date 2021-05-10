function calculandoganancia() {

    var objMonto = document.getElementById("Monto");
    var objMoneda = document.getElementsByName("inlineRadioOptions");
    var objDeposito = document.getElementById("Deposito").children;
    var objPlazo = document.getElementById("Plazo");


    if (objMonto.value != "" &&
        objMonto.value != null &&
        objPlazo.value != "" &&
        objPlazo.value != null) {
        objGanancia = (objMonto.value * objPlazo.value * 0, 0047)
        console.log("calculando ganancia");


        for (j = 0; j < objMoneda.length; j++) {
            var radio_moneda = objMoneda[j];



            for (i = 1; i < objDeposito.length; i++) {
                var objOption = objDeposito[i];

                if (objOption.value == "") {
                    alert(" Seleccione un tipo de inversion")
                }

                // Condiciones para plazo fijo

                if (objOption.value == "1") {

                    if (objMoneda.value == "0") {


                        if (objPlazo.value < 7 && objPlazo.value <= 90) {
                            alert("El tiempo de inversion es de 7 a 90 dias")
                        }
                        if (objMonto.value <= 10000) {
                            alert("el monto minimo a invertir es de 10000 Pesos")

                        }

                    }

                }

                // condiciones para plazo renovable

                if (objOption.value === "2") {

                    if (objMoneda.value == "1") {


                        if (objPlazo.value >= 120 && objPlazo.value <= 365) {
                            alert(" el tiempo de la inversion es desde 120 a 1 año")
                        }
                        if (objMonto.value < 5000) {
                            alert(" monto minimo desde 5000")
                        }
                    }

                }

            }
        }








    }





}
