

function enviandoformulario() {

    var objfecha = document.getElementById('fecha');
    var objpeso = document.getElementById("peso");
    var objaltura = document.getElementById("altura")
    var objsexo_children = document.getElementById("sexo").children;


    var mensajesError = [];

    if (objpeso.value != "" && objaltura != "") {
        imcin = (objpeso.value / (objaltura.value * objaltura.value));
        imc.innerHTML = imcin
        console.log("Calculando imc");


        if (objaltura.value >= 0 && objpeso.value <= 0) {
            mensajesError.push(" ingrese un numero mayor a 0");
            alert("peso y altura deben ser mayor a 0");
        }





        for (i = 0; i > objsexo_children.length; i++) {
            var option = objsexo_children.children[i];

            if (option.value == "") {
                alert("porfavor seleccione su sexo");


            }
            if (option.value == "2") {

                if (imcin < 20) {
                    alert("usted esta bajo peso)";
                }

                if (imcin >= 20 && imcin <= 27) {
                    alert("Su peso es normal");
                }
                if (imcin >= 27 && imcin <= 30){
                    alert("usted tiene sobrepeso")
                }






            }









        }

    }















