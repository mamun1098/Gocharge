setTimeout(function () {
  /* ELECTRIC MOBILITY SECTION START */
  const electricMobilitySlider = document.querySelectorAll(
    ".electric-mobility-block .swiper"
  );
  if (electricMobilitySlider.length > 0) {
    electricMobilitySlider.forEach((swiperElement, i) => {
      const uniqueClass = `innovaSw_${i}`;
      swiperElement.classList.add(uniqueClass);

      const mobilitySwiper = new Swiper(`.${uniqueClass}`, {
        watchOverflow: true,
        spaceBetween: 20,
        loop: false,
        speed: 500,

        // Navigation arrows
        navigation: {
          nextEl: `.${uniqueClass} .swiper-button-next`,
          prevEl: `.${uniqueClass} .swiper-button-prev`,
        },
        pagination: {
          el: `.${uniqueClass} .swiper-pagination`,
          clickable: true,
        },

        breakpoints: {
          0: {
            slidesPerView: 1.2,
            centeredSlides: true,
            initialSlide: 2,
            scrollbar: false,
            navigation: false,
          },
          660: {
            slidesPerView: 2.2,
            pagination: true,
            pagination: {
              el: `.${uniqueClass} .swiper-pagination`,
              clickable: true,
            },
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 4,
          },
          1441: {
            slidesPerView: 4.4,
            centeredSlides: false,
          },
          1920: {
            slidesPerView: 5.2,
          },
        },
      });

      /* if swiper is locked (not enough slides to navigate) it will add the "locked" class for the "swiper-wrapper" element */
      mobilitySwiper.on("lock", function () {
        const swiperWrapper =
          mobilitySwiper.el.querySelector(".swiper-wrapper");
        swiperWrapper.classList.add("locked");
      });

      /* if swiper is unlocked it will remove the "locked" class for the "swiper-wrapper" element */
      mobilitySwiper.on("unlock", function () {
        const swiperWrapper =
          mobilitySwiper.el.querySelector(".swiper-wrapper");
        swiperWrapper.classList.remove("locked");
      });

      console.log($(window).width());
      if ($(window).width() > 1440) {
        const swiperWrapper =
          mobilitySwiper.el.querySelector(".swiper-wrapper");
        swiperWrapper.classList.add("locked");
      }
    });
  }
  /* ELECTRIC MOBILITY SECTION END */
}, 500);
