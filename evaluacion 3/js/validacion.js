function enviandoformulario() {

    var objFecha = document.getElementById('fecha_de_evaluacion');
    var objPeso = document.getElementById("peso");
    var objAltura = document.getElementById("altura")
    var objGenderChildren = document.getElementById("sexo").children;


    var mensajesError = [];

    if (objPeso.value != "" &&
        objPeso.value != null &&
        objAltura.value != "" &&
        objAltura.value != null) {
        imcin = (objPeso.value / (objAltura.value * objAltura.value));
        console.log("Calculando imc");


        if (objAltura.value >= 0 && objPeso.value <= 0) {
            mensajesError.push(" ingrese un numero mayor a 0");
            alert("peso y altura deben ser mayor a 0");
        }


        for (i = 1; i < objGenderChildren.length; i++) {
            var objOption = objGenderChildren[i];

            if (objOption.value == "") {
                alert("porfavor seleccione su sexo");
            }


            /*Para mujer*/
            if (objOption.value == "1") {

                if (imcin < 20) {
                    alert("usted esta bajo peso " + suImc);
                }

                if (imcin >= 20 && imcin <= 25) {
                    alert("Su peso es normal " + suImc);
                }
                if (imcin > 25 && imcin <= 30) {
                    alert("usted tiene sobrepeso " + suImc)
                }
                if (imcin > 30 && imcin <= 40) {
                    alert("usted tiene obesidad " + suImc)
                }
                if (imcin > 40) {
                    alert("usted tiene obesidad morbida " + suImc)
                }

            }

            /*Para Hombre*/
            if (objOption.value == "2") {

                suImc = 'Su imc es ' + imcin;

                if (imcin < 20) {
                    alert("usted esta bajo peso " + suImc);
                }

                if (imcin >= 20 && imcin <= 27) {
                    alert("Su peso es normal " + suImc);
                }
                if (imcin > 27 && imcin <= 30) {
                    alert("usted tiene sobrepeso " + suImc)
                }
                if (imcin > 30 && imcin <= 40) {
                    alert("usted tiene obesidad " + suImc)
                }
                if (imcin > 40) {
                    alert("usted tiene obesidad morbida " + suImc)
                }
            }

        }

    }
}















