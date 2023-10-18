let boxMinus = document.getElementById("boxMinus");
let boxCant = document.getElementById("boxCant");
let boxPlus = document.getElementById("boxPlus");
let subTotal = document.getElementById("subtotal");
let numeroProductos = document.getElementById("numeroProductos");
let valorProducto = 350000;
let auxValorProducto = new Intl.NumberFormat("de-DE").format(valorProducto);
let aux = document.getElementById("precioUnidad").innerHTML = auxValorProducto;

boxPlus.addEventListener("click", function(){ //escucha click
    //let auxCant = document.getElementById("boxCant").innerHTML; //auxcant - auxiliar de la variable cantidad
    let auxCant = boxCant.innerHTML;
    if (auxCant < 10){
        auxCant++; //se suma uno más a la cantidad
        boxCant.innerHTML = auxCant;

        calcularSubtotal();
        determinarSingularPlural(auxCant);
    }
});
boxMinus.addEventListener("click", function(){
    let auxCant = boxCant.innerHTML;
    if (auxCant >= 1 && auxCant <= 10){
        auxCant--; //se resta uno menos a la cantidad
        boxCant.innerHTML = auxCant;

        calcularSubtotal();
        determinarSingularPlural(auxCant);
    }
});  

function calcularSubtotal() {
    let auxCant = valorProducto * Number(boxCant.innerHTML);
    let auxCanUmil = Intl.NumberFormat("de-DE").format(auxCant)
    document.getElementById("subtotal").innerHTML = "$" + auxCanUmil;

}
function determinarSingularPlural(auxCant) {
    if( auxCant == 1) {
        numeroProductos.innerHTML = "(" + auxCant + " producto)"
    }
    else if(auxCant == 0 || auxCant > 1) {
        numeroProductos.innerHTML = "(" + auxCant + " productos)"
    }
}


  
