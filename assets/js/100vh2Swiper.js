var swiperta = new Swiper(".mySwiperta", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-paginationta",
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
    centeredSlides: true,
    // loop: false,
});