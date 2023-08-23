document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuList = document.querySelector(".menu-list");
  
    menuToggle.addEventListener("click", function() {
        if (window.innerWidth <= 452) {
            if (menuList.style.display === "block") {
                menuList.style.display = "none";
            } else {
                menuList.style.display = "block";
            }
        }
    });
  });
  