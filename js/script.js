const carousel = document.getElementById("carousel");

carousel.addEventListener("mouseenter", function () {
    carousel.style.animationPlayState = "paused";
});

carousel.addEventListener("mouseleave", function () {
    carousel.style.animationPlayState = "running";
});
