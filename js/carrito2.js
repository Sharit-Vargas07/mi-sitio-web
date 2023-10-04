let boxMinus = document.getElementById("boxMinus");
let boxCant = document.getElementById("boxCant");
let boxPlus = document.getElementById("boxPlus");

boxPlus.addEventListener("click", function(){ //escucha click
    //let auxCant = document.getElementById("boxCant").innerHTML; //auxcant - auxiliar de la variable cantidad
    let auxCant = boxCant.innerHTML;
    if (auxCant < 10){
        auxCant++; //se suma uno más a la cantidad
        boxCant.innerHTML = auxCant;
    }
});
boxMinus.addEventListener("click", function(){
    let auxCant = boxCant.innerHTML;
    if (auxCant > 0){
        auxCant--; //se suma uno más a la cantidad
        boxCant.innerHTML = auxCant;
    }
});  


  
