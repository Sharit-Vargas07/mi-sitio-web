let puntuacion5 = document.getElementById("puntuacion5");
let puntuacion4 = document.getElementById("puntuacion4");
let puntuacion3 = document.getElementById("puntuacion3");
let puntuacion2 = document.getElementById("puntuacion2");
let puntuacion1 = document.getElementById("puntuacion1");

let barra1Puntaje = document.getElementById("barra1Puntaje");
let barra2Puntaje = document.getElementById("barra2Puntaje");
let barra3Puntaje = document.getElementById("barra3Puntaje");
let barra4Puntaje = document.getElementById("barra4Puntaje");
let barra5Puntaje = document.getElementById("barra5Puntaje");

let porcentaje5 = 0;
let porcentaje4 = 0;
let porcentaje3 = 0;
let porcentaje2 = 0;
let porcentaje1 = 0;
let buttonGraficar = document.getElementById("buttonGraficar");

buttonGraficar.addEventListener("click", function() {
    /* PENDIENTE VALIDAR EL INGRESO DE NUMEROS */
    /* Grafica 5 */
    let totalVotantes = parseInt(puntuacion5.value) + parseInt(puntuacion4.value) +
                        parseInt(puntuacion3.value) + parseInt(puntuacion2.value) + 
                        parseInt(puntuacion1.value);
    let porcentaje5 = (puntuacion5.value * 100 / totalVotantes);
    let porcentaje5Grafica = porcentaje5 * 2;
    barra1Puntaje.style.width = porcentaje5Grafica.toString() + "px";

    /* Grafica 4 */
    let porcentaje4 = (puntuacion4.value * 100 / totalVotantes);
    let porcentaje4Grafica = porcentaje4 * 2;
    barra2Puntaje.style.width = porcentaje4Grafica.toString() + "px";

    /* Grafica 3 */
    let porcentaje3 = (puntuacion3.value * 100 / totalVotantes);
    let porcentaje3Grafica = porcentaje3 * 2;
    barra3Puntaje.style.width = porcentaje3Grafica.toString() + "px";

    /* Grafica 2 */
    let porcentaje2 = (puntuacion2.value * 100 / totalVotantes);
    let porcentaje2Grafica = porcentaje2 * 2;
    barra4Puntaje.style.width = porcentaje2Grafica.toString() + "px";

    /* Grafica 1 */
    let porcentaje1 = (puntuacion1.value * 100 / totalVotantes);
    let porcentaje1Grafica = porcentaje1 * 2;
    barra5Puntaje.style.width = porcentaje1Grafica.toString() + "px";
})