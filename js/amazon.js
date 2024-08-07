let headerSearchInput = document.getElementById("headersearchinput");

let mainContent = document.getElementById("mainContent");

let clos = document.getElementById("clos");


headerSearchInput.addEventListener("click", function() {

    headerSearchInput.classList.add("header-search-input-focus");
    headerSearchInput.classList.remove("header-search-input-no-focus");
});

mainContent.addEventListener("click", () => {
    headerSearchInput.classList.add("header-search-input-no-focus");
    headerSearchInput.classList.remove("header-search-input-focus");
});

/* Identificar click imagenes miniaturas */
let img1 = document.getElementById("thub1");
let img2 = document.getElementById("thub2");
let img3 = document.getElementById("thub3");
let img4 = document.getElementById("thub4");
let img5 = document.getElementById("thub5");
let img6 = document.getElementById("thub6");
let mainImgModal = document.getElementById("mainImgModal");

img1.addEventListener("click",() => {
    mainImgModal.setAttribute("src", "img/relojamazaon121.jpg");
});
img2.addEventListener("click",() => {
    mainImgModal.setAttribute("src", "img/relojamazon2.jpg");
});
img3.addEventListener("click",() => {
    mainImgModal.setAttribute("src", "img/relojamazon3.jpg");
});
img4.addEventListener("click",() => {
    mainImgModal.setAttribute("src", "img/relojamazon4.jpg");
});
img5.addEventListener("click",() => {
    mainImgModal.setAttribute("src", "img/relojamazon5.jpg");
});
img6.addEventListener("click",() => {
    mainImgModal.setAttribute("src", "img/relojamazon6.jpg");
});
clos.addEventListener("click", function() {
    mainContent.style.display = "none";
});


let boxmodal = document.getElementById("box-modal");
let modal = document.getElementById("modal");
let start1 = document.getElementById("start1")
let start2 = document.getElementById("start2")
let start3 = document.getElementById("start3")
let start4 = document.getElementById("start4")
let start5 = document.getElementById("start5")
let puntuacion = document.getElementById("puntuacion").innerText = 4.7

window.onload = () => {
  boxmodal.classList.remove("visible")
}


btnclose.addEventListener("click", function() {
  mainContent.style.display = "none";
});
function abrir(){
  boxmodal.classList.add("visible")
}

   //estrellas

    if(puntuacion >= 0 && puntuacion <= 0.2) {
        start1.setAttribute("class", "estrella", "fa-regular fa-star")
        start2.setAttribute("class", "estrella", "fa-regular fa-star")
        start3.setAttribute("class","estrella", "fa-regular fa-star")
        start4.setAttribute("class", "estrella", "fa-regular fa-star")
        start5.setAttribute("class", "estrella", "fa-regular fa-star")
    }
    else if(puntuacion >= 0.3 && puntuacion <= 0.7) {
        start1.setAttribute("class", "estrella", "fa-solid fa-star-half-stroke")
        start2.setAttribute("class", "estrella", "fa-regular fa-star")
        start3.setAttribute("class", "estrella",  "fa-regular fa-star")
        start4.setAttribute("class", "estrella", "fa-regular fa-star")
        start5.setAttribute("class", "estrella", "fa-regular fa-star")
    }
    else if(puntuacion >= 0.8 && puntuacion <= 1.2) {
        start1.setAttribute("class", "estrella", "fa-solid fa-star")
        start2.setAttribute("class", "estrella", "fa-regular fa-star")
        start3.setAttribute("class", "estrella", "fa-regular fa-star")
        start4.setAttribute("class", "estrella", "fa-regular fa-star")
        start5.setAttribute("class", "estrella", "fa-regular fa-star")
    }
    else if(puntuacion >= 1.3 && puntuacion <= 1.7){
        start1.setAttribute("class", "estrella", "fa-solid fa-star")
        start2.setAttribute("class", "estrella", "fa-solid fa-star-half-stroke")
        start3.setAttribute("class", "estrella", "fa-regular fa-star")
        start4.setAttribute("class", "estrella", "fa-regular fa-star")
        start5.setAttribute("class", "estrella", "fa-regular fa-star")
    }
    else if(puntuacion >= 1.8 && puntuacion <= 2.2) {
        start1.setAttribute("class", "fa-solid fa-star")
        start2.setAttribute("class", "fa-solid fa-star")
        start3.setAttribute("class", "fa-regular fa-star")
        start4.setAttribute("class", "fa-regular fa-star")
        start5.setAttribute("class", "fa-regular fa-star")
    }
    else if(puntuacion >= 2.3 && puntuacion <= 2.7) {
        start1.setAttribute("class", "fa-solid fa-star")
        start2.setAttribute("class", "fa-solid fa-star")
        start3.setAttribute("class", "fa-solid fa-star-half-stroke")
        start4.setAttribute("class", "fa-regular fa-star")
        start5.setAttribute("class", "fa-regular fa-star")
    }
    else if(puntuacion >= 2.8 && puntuacion <= 3.2){
        start1.setAttribute("class", "fa-solid fa-star")
        start2.setAttribute("class", "fa-solid fa-star")
        start3.setAttribute("class", "fa-solid fa-star")
        start4.setAttribute("class", "fa-regular fa-star")
        start5.setAttribute("class", "fa-regular fa-star")
    }
    else if(puntuacion >= 3.3 && puntuacion <= 3.7) {
        start1.setAttribute("class", "fa-solid fa-star")
        start2.setAttribute("class", "fa-solid fa-star")
        start3.setAttribute("class", "fa-solid fa-star")
        start4.setAttribute("class", "fa-solid fa-star-half-stroke")
        start5.setAttribute("class", "fa-regular fa-star")
    }
    else if(puntuacion >= 3.8 && puntuacion <= 4.2) {
        start1.setAttribute("class", "fa-solid fa-star")
        start2.setAttribute("class", "fa-solid fa-star")
        start3.setAttribute("class", "fa-solid fa-star")
        start4.setAttribute("class", "fa-solid fa-star")
        start5.setAttribute("class", "fa-regular fa-star")
    }
    else if(puntuacion >= 4.3 && puntuacion <= 4.7) {
        start1.setAttribute("class", "fa-solid fa-star")
        start2.setAttribute("class", "fa-solid fa-star")
        start3.setAttribute("class", "fa-solid fa-star")
        start4.setAttribute("class", "fa-solid fa-star")
        start5.setAttribute("class", "fa-solid fa-star-half-stroke")
    }
    else if(puntuacion >= 4.8 && puntuacion <= 5){
        start1.setAttribute("class", "fa-solid fa-star")
        start2.setAttribute("class", "fa-solid fa-star")
        start3.setAttribute("class", "fa-solid fa-star")
        start4.setAttribute("class", "fa-solid fa-star")
        start5.setAttribute("class", "fa-solid fa-star")
    }
