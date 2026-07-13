//primera parte del ejercicio

let cantidadInstalaciones = 0
let cargaHoraria = 0
let valorHonorario = 0
let datosInstalaciones = []

let boton = document.querySelector("#boton");
let botonCalcular = document.querySelector("#botonCalcular")
botonCalcular.disabled = true

let campoInstalaciones = document.querySelector("#instalacion");
campoInstalaciones.style.visibility = "hidden";

boton.addEventListener("click", function() {
    cantidadInstalaciones = document.querySelector("input[name='Cantidad de Instalaciones']").value * 1;
    cargaHoraria = document.querySelector("input[name='Carga horaria']").value * 1;
    valorHonorario = document.querySelector("input[name='Valor honorario']").value * 1;
    if (cantidadInstalaciones > 0) {
        campoInstalaciones.style.visibility = "visible";
        boton.disabled = true

        document.querySelector("input[name='Cantidad de Instalaciones']").disabled = true;
        document.querySelector("input[name='Carga horaria']").disabled = true;
        document.querySelector("input[name='Valor honorario']").disabled = true;
    }
});

//segunda parte del ejercicio

let botonGuardar = document.querySelector("#botonGuardar");
let instalacionesYaGuardadas = 0

botonGuardar.addEventListener("click", function() {
    let datos = [ 
    document.querySelector("input[name='Nombre']").value, 
    document.querySelector("input[name='Cantidad de trabajadores']").value * 1, 
    document.querySelector("input[name='Cantidad de dias']").value * 1,
    ];
    console.log(datos);

    datosInstalaciones.push(datos);

    document.querySelector("input[name='Nombre']").value = "";
    document.querySelector("input[name='Cantidad de trabajadores']").value = "";
    document.querySelector("input[name='Cantidad de dias']").value = "";

    instalacionesYaGuardadas++;

    if (instalacionesYaGuardadas === cantidadInstalaciones) {
        botonGuardar.disabled = true
        boton.disabled = true
        botonCalcular.disabled = false
    }
});

//tercera parte del ejercicio

let totalPersonas = 0
let totalGastos = 0
let diasMayor = 0
let instalacionMasLarga = ""
let gastosInstalacionMax = 0

botonCalcular.addEventListener("click", function(){
for (let i = 0; i < datosInstalaciones.length; i++) {
    let nombre = datosInstalaciones[i][0];
    let personas = datosInstalaciones[i][1]
    let dias = datosInstalaciones[i][2]

    totalPersonas += personas;

    let gastoInstalacion = personas * dias * cargaHoraria * valorHonorario;
    totalGastos += gastoInstalacion

    if (dias > diasMayor) {
        diasMayor = dias;
        instalacionMasLarga = nombre
        gastosInstalacionMax = gastoInstalacion;
    }
}

let gastoPorDia = totalPersonas * cargaHoraria * valorHonorario
let porcentaje = (gastosInstalacionMax / totalGastos) * 100

let mostrarResultados = document.querySelectorAll("#resultados p")
mostrarResultados[0].innerText += " $" + gastoPorDia;
mostrarResultados[1].innerText += " " + instalacionMasLarga
mostrarResultados[2].innerText += " " + porcentaje + " %"
});
