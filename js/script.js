let heartContainer = document.querySelector(".heart-container");
let heart = document.querySelector(".heart-icon");
heartContainer.addEventListener("click", function(){
    if (heart.classList.contains("bi-heart-fill")){
        heart.classList.add("bi-heart");
        heart.classList.remove("bi-heart-fill");
    } else if (heart.classList.contains("bi-heart")){
        heart.classList.add("bi-heart-fill");
        heart.classList.remove("bi-heart");
    }
});

// NOTE: Ce code retourne une erreur que, après 7h de recherches et de demander si quelqu'un d'autre à eu cette erreur, j'ai abandonné. -Alexandre
var swiper = new Swiper(".swiper-filters", {
    direction: "horizontal",
    spaceBetween: 10,
    effect: "slide",
    freeMode: true,
});



var swiper2 = new Swiper(".swiper-featured-artworks", {
    direction: "horizontal",
    spaceBetween: 10,
    effect: "slide",
    freeMode: true,
});