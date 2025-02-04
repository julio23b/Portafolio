const sliders = document.querySelectorAll(".project-slider");

sliders.forEach(slider => {
    let index = 0;
    const images = slider.querySelectorAll("img");

    setInterval(() => {
        images[index].style.display = "none";
        index = (index + 1) % images.length;
        images[index].style.display = "block";
    }, 5000);
});

