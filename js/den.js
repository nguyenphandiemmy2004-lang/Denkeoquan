const lamp = document.getElementById("lamp");

lamp.addEventListener("mouseenter", function(){

    lamp.style.animationPlayState = "paused";

});

lamp.addEventListener("mouseleave", function(){

    lamp.style.animationPlayState = "running";

});
