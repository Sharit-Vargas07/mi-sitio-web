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

window.onload = () => {
  boxmodal.classList.remove("visible")
}


btnclose.addEventListener("click", function() {
  mainContent.style.display = "none";
});
function abrir(){
  boxmodal.classList.add("visible")
}