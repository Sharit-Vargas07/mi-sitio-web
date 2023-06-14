let circuloBox = document.getElementById("circuloBox"); /* Circulo */
let toggleBox = document.getElementById("toggleBox"); /* Rectangulo */
/* Verificamos que la clase se encuentra en choice-box */
toggleBox.addEventListener("click", function(){
  if (circuloBox.classList.contains("circuloBox")) {
    circuloBox.classList.add("circulo-box-on")
    circuloBox.classList.remove("circuloBox")
    toggleBox.classList.add("toggle-box-on")
    
  }
  else{
    circuloBox.classList.add("circuloBox")
    circuloBox.classList.remove("circulo-box-on")
    toggleBox.classList.remove("toggle-box-on")
  }
})
