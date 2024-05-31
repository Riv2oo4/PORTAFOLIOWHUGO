document.addEventListener("DOMContentLoaded", function() {
    let menuVisible = false;

    function mostrarOcultarMenu(){
        const nav = document.getElementById("nav");
        if(nav){
            if(menuVisible){
                nav.classList = "";
                menuVisible = false;
            }else{
                nav.classList = "responsive";
                menuVisible = true;
            }
        } else {
            console.error("No se pudo encontrar el elemento con el ID 'nav'.");
        }
    }

    function seleccionar(){
        const nav = document.getElementById("nav");
        if(nav){
            nav.classList = "";
            menuVisible = false;
        }
    }

    const navResponsive = document.querySelector(".nav-responsive");
    if (navResponsive) {
        navResponsive.addEventListener("click", mostrarOcultarMenu);
    } else {
        console.error("No se pudo encontrar el elemento con la clase 'nav-responsive'.");
    }

    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", seleccionar);
    });
});
