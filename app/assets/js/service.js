window.addEventListener('DOMContentLoaded', () => {
    //singleStart

    const buildSwiperSlider = sliderElm => {
        const sliderIdentifier = sliderElm.dataset.id;
        return new Swiper(`#${sliderElm.id}`, {
            navigation: {
                nextEl: `#serviceNext${sliderIdentifier}`,
                prevEl: `#servicePrev${sliderIdentifier}`
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                }
            },
        });
    }
    
    // Get all of the swipers on the page
    const allSliders = document.querySelectorAll('.service-swiper');
    
    // Loop over all of the fetched sliders and apply Swiper on each one.
    allSliders.forEach(slider => buildSwiperSlider(slider));
    
    //singleEnd

});