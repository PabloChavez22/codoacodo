
/*--------------------------------------------boton_Menu---------------------------------------------------*/

const navigationToggle = document.querySelector(".navigation-toggle");
const navigationMenu = document.querySelector(".navigation-menu");

navigationToggle.addEventListener('click', () => {
    navigationMenu.classList.toggle("navigation-menu_visible");

    if ( navigationMenu.classList.contains("navigation-menu_visible")) {
        navigationToggle.setAttribute("arial-label", "Cerrar menú");
    }else{
        navigationToggle.setAttribute("arial-label", "Abrir menú");
    }
    });

/*--------------------------------------------links_Menu----------------------------------------------------*/

var links = document.querySelectorAll('.navigation-menu a');
var linksLength = links.length;

for (var i = 0; i < linksLength; i++){
    links[i].addEventListener("click", function(){
        navigationMenu.classList.toggle("navigation-menu_visible");
        if ( navigationMenu.classList.contains("navigation-menu_visible")) {
            navigationToggle.setAttribute("arial-label", "Cerrar menú");
        }else{
            navigationToggle.setAttribute("arial-label", "Abrir menú");
        }
    });
}