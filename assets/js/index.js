// Pantalla de carga 
window.addEventListener("DOMContentLoaded", () => {
    showLoader();
})

window.addEventListener("load", () => {
    setTimeout(() => {
        hideLoader();
    }, 5000);
})


const loader = document.getElementById("loaderPagina");
const showLoader = () => {
    loader.classList.add("show_loader");
}
const hideLoader = () => {
    loader.classList.remove("show_loader");
}

const sliders = document.querySelectorAll(".project-slider");

sliders.forEach(slider => {
    let index = 0;
    const images = slider.querySelectorAll("img");
    let interval;

    // Oculta todas las imágenes excepto la primera
    images.forEach((img, i) => {
        img.style.display = i === 0 ? "block" : "none";
    });

    function startSlider() {
        interval = setInterval(() => {
            images[index].style.display = "none";
            index = (index + 1) % images.length;
            images[index].style.display = "block";
        }, 3000);
    }

    function stopSlider() {
        clearInterval(interval);
    }

    slider.addEventListener("mouseenter", startSlider);
    slider.addEventListener("mouseleave", stopSlider);
});

