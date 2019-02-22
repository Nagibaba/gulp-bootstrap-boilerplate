const mySwiper = (Swiper)=>{
  return new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: false,
    speed: 400,
    spaceBetween: 100,
    slideShadows: true,
    calculateHeight:true,
    shadow: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
}

export default mySwiper