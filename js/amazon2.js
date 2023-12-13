let start1 = document.getElementById("start1")
let start2 = document.getElementById("start2")
let start3 = document.getElementById("start3")
let start4 = document.getElementById("start4")
let start5 = document.getElementById("start5")
let puntuacion = document.getElementById("puntuacion").innerText
    
    if(puntuacion >= 0 && puntuacion <= 0.2) {
        start1.setAttribute("class", "fa-regular fa-star")
        start2.setAttribute("class", "fa-regular fa-star")
        start3.setAttribute("class", "fa-regular fa-star")
        start4.setAttribute("class", "fa-regular fa-star")
        start5.setAttribute("class", "fa-regular fa-star")
    }
    else if(puntuacion >= 0.3 && puntuacion <= 0.7) {
        start1.setAttribute("class", "estrella fa-solid fa-star-half-stroke")
        start2.setAttribute("class", "estrella fa-regular fa-star")
        start3.setAttribute("class", "estrella fa-regular fa-star")
        start4.setAttribute("class", "fa-regular fa-star")
        start5.setAttribute("class", "fa-regular fa-star")
    }
    else if(puntuacion >= 0.8 && puntuacion <= 1.2) {
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-regular fa-star")
        start3.setAttribute("class", "estrella fa-regular fa-star")
        start4.setAttribute("class", "estrella fa-regular fa-star")
        start5.setAttribute("class", "estrella fa-regular fa-star")
    }
    else if(puntuacion >= 1.3 && puntuacion <= 1.7){
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-solid fa-star-half-stroke")
        start3.setAttribute("class", "estrella fa-regular fa-star")
        start4.setAttribute("class", "estrella fa-regular fa-star")
        start5.setAttribute("class", "estrella fa-regular fa-star")
    }
    else if(puntuacion >= 1.8 && puntuacion <= 2.2) {
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-solid fa-star")
        start3.setAttribute("class", "estrella fa-regular fa-star")
        start4.setAttribute("class", "estrella fa-regular fa-star")
        start5.setAttribute("class", "estrella fa-regular fa-star")
    }
    else if(puntuacion >= 2.3 && puntuacion <= 2.7) {
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-solid fa-star")
        start3.setAttribute("class", "estrella fa-solid fa-star-half-stroke")
        start4.setAttribute("class", "estrella fa-regular fa-star")
        start5.setAttribute("class", "estrella fa-regular fa-star")
    }
    else if(puntuacion >= 2.8 && puntuacion <= 3.2){
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-solid fa-star")
        start3.setAttribute("class", "estrella fa-solid fa-star")
        start4.setAttribute("class", "estrella fa-regular fa-star")
        start5.setAttribute("class", "estrella fa-regular fa-star")
    }
    else if(puntuacion >= 3.3 && puntuacion <= 3.7) {
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-solid fa-star")
        start3.setAttribute("class", "estrella fa-solid fa-star")
        start4.setAttribute("class", "estrella fa-solid fa-star-half-stroke")
        start5.setAttribute("class", "estrella fa-regular fa-star")
    }
    else if(puntuacion >= 3.8 && puntuacion <= 4.2) {
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-solid fa-star")
        start3.setAttribute("class", "estrella fa-solid fa-star")
        start4.setAttribute("class", "estrella fa-solid fa-star")
        start5.setAttribute("class", "estrella fa-regular fa-star")
    }
    else if(puntuacion >= 4.3 && puntuacion <= 4.7) {
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-solid fa-star")
        start3.setAttribute("class", "estrella fa-solid fa-star")
        start4.setAttribute("class", "estrella fa-solid fa-star")
        start5.setAttribute("class", "estrella fa-solid fa-star-half-stroke")
    }
    else if(puntuacion >= 4.8 && puntuacion <= 5){
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-solid fa-star")
        start3.setAttribute("class", "estrella fa-solid fa-star")
        start4.setAttribute("class", "estrella fa-solid fa-star")
        start5.setAttribute("class", "estrella fa-solid fa-star")
    }
    /* Abrir y cerrar Modal */
    function cerrar(){
      mainContent.style.display = "none";
    }
    function abrir(){
      boxmodal.classList.add("visible")
    }
    window.onload = () => {
      boxmodal.classList.remove("visible")
    }
    function mostrarTabla() {
      document.getElementById('tabla').style.display = 'block';
    }
    
    function ocultarTabla() {
      document.getElementById('tabla').style.display = 'none';
    }

    let barracinco = document.getElementById("resultadocinco")
    let barracuatro = document.getElementById("resultadocuatro")
    let barratres = document.getElementById("resultadotres")
    let barrados = document.getElementById("resultadodos")
    let barrauno = document.getElementById("resultadouno")

barracinco.innerText=15    
barracinco.innerText=20    
barracinco.innerText=10    
barracinco.innerText=0 
barracinco.innerText=0


    
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");
let img7 = document.getElementById("img7");
let imgprin = document.getElementById("imgprin");
img1.addEventListener("mouseover",() => {
  imgprin.setAttribute("src", "img/relojamazaon121.jpg");
});
img2.addEventListener("mouseover",() => {
  imgprin.setAttribute("src", "img/relojamazon2.jpg");
});
img3.addEventListener("mouseover",() => {
  imgprin.setAttribute("src", "img/relojamazon3.jpg");
});
img4.addEventListener("mouseover",() => {
  imgprin.setAttribute("src", "img/relojamazon4.jpg");
});
img5.addEventListener("mouseover",() => {
  imgprin.setAttribute("src", "img/relojamazon5.jpg");
});
img6.addEventListener("mouseover",() => {
  imgprin.setAttribute("src", "img/relojamazon6.jpg");
});



let imgtub1 = document.getElementById("imgtub1");
let imgtub2 = document.getElementById("imgtub2");
let imgtub3 = document.getElementById("imgtub3");
let imgtub4 = document.getElementById("imgtub4");
let imgtub5 = document.getElementById("imgtub5");
let imgtub6 = document.getElementById("imgtub6");
let imgtub7 = document.getElementById("imgtub7");
let imgMain = document.getElementById("imgPrincipal");
let boxmodal = document.getElementById("box-modal");
let modal = document.getElementById("modal");
let mainContent = document.getElementById("mainContent");
let btnclose = document.getElementById("btnclose");

imgtub1.addEventListener("click",() => {
  imgMain.setAttribute("src", "img/relojamazaon121.jpg");
});
imgtub2.addEventListener("click",() => {
  imgMain.setAttribute("src", "img/relojamazon2.jpg");
});
imgtub3.addEventListener("click",() => {
  imgMain.setAttribute("src", "img/relojamazon3.jpg");
});
imgtub4.addEventListener("click",() => {
  imgMain.setAttribute("src", "img/relojamazon4.jpg");
});
imgtub5.addEventListener("click",() => {
  imgMain.setAttribute("src", "img/relojamazon5.jpg");
});
imgtub6.addEventListener("click",() => {
  imgMain.setAttribute("src", "img/relojamazon6.jpg");
});


