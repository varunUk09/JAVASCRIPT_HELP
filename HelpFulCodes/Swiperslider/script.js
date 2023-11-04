var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
    ,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    effect: "slide"
});

//  slide effects => effect: "slide" | "fade" | "cube" | "coverflow" | "flip" | "creative" | "cards"

//  slides to scroll => slidesPerGroup: 2

/* dots =>  pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }*/

/* arrows => navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    } */