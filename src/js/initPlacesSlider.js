function initPlacesSlider() {
    const slider = document.querySelector('.places__slider');
    if (!slider)
        return;

    return new Swiper(slider, {
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
            el: '.places__pagination',
            clickable: false,
        },
        grabCursor: true,
        touchEventsTarget: 'container',
    });
}
