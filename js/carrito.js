const header = document.querySelector("#header");
const contenedor = document.querySelector("#contenedor");
const boy = document.querySelector("body");

window.addEventListener("scroll", function(){
    if(contenedor.getBoundingClientRect().top<10){
        header.classList.add("scroll");
    }
    else{
        header.classList.remove("scroll");
    }
})