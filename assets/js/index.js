//función que muestra el menu responsive{
function responsiveMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("responsive");
    if (nav.classList.contains("responsive")) {
        const span = document.createElement("span");
        span.innerHTML = "X";
        nav.appendChild(span);
        span.onclick = () => {
            nav.classList.remove("responsive");
            span.remove();
        };
    } else {
        const span = document.querySelector("#nav span");
        if (span) span.remove();
    }
}


//Este codigo es para agregar una función a cada links del menu
//responsive
//cuando se presione en cualquier de los links del menu debe desaparecer el menu
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const nav = document.getElementById("nav");
        nav.classList.remove("responsive");
        const span = document.querySelector("#nav span");
        if (span) span.remove();
    }
});

