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
            centeredSlides: false,
            loop: false,
          },
          576: {
            slidesPerView: 2,
            centeredSlides: false,
            loop: false,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 4.3,
            centeredSlides: true,
            loop: true,
          },
          1441: {
            slidesPerView: 5.4,
            centeredSlides: true,
            loop: true,
          },
          1500: {
            slidesPerView: 5.4,
            centeredSlides: true,
            loop: true,
          },
          1920: {
            slidesPerView: 5.6,
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

  /* CHARGE WITH APP BLOCK START */
  const chargingSlider = document.querySelectorAll(
    ".charge-withapp-block .content-wrapper .swiper"
  );
  if (chargingSlider.length > 0) {
    chargingSlider.forEach((swiperElement, i) => {
      const uniqueClass = `chargingSL_${i}`;
      swiperElement.classList.add(uniqueClass);

      const chargingSwiper = new Swiper(`.${uniqueClass}`, {
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
            slidesPerView: 1.5,
            centeredSlides: false,
            loop: false,
          },
          576: {
            slidesPerView: 2.1,
            centeredSlides: false,
            loop: false,
          },
          768: {
            slidesPerView: 2.6,
          },
          1024: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 2.4,
            centeredSlides: false,
            loop: false,
          },
          1441: {
            slidesPerView: 2.4,
            centeredSlides: false,
            loop: false,
          },
          1500: {
            slidesPerView: 2.6,
            centeredSlides: false,
            loop: false,
          },
          1920: {
            slidesPerView: 2.8,
          },
        },
      });
    });
  }
  /* CHARGE WITH APP BLOCK END */

  /* NEWS BLOCK START */
  const newsSlider = document.querySelectorAll(".news-block .swiper");
  if (newsSlider.length > 0) {
    newsSlider.forEach((swiperElement, i) => {
      const uniqueClass = `newsSL_${i}`;
      swiperElement.classList.add(uniqueClass);

      const newsSwiper = new Swiper(`.${uniqueClass}`, {
        watchOverflow: true,
        spaceBetween: 16,
        loop: true,
        speed: 500,

        pagination: {
          el: `.${uniqueClass} .swiper-pagination`,
          clickable: true,
        },

        breakpoints: {
          0: {
            slidesPerView: 1.2,
            centeredSlides: true,
            loop: true,
          },
        },
      });
    });
  }
  /* NEWS BLOCK END */

  /* ADVANTAGE BLOCK START */
  const advantageSlider = document.querySelectorAll(".advantage-block .swiper");
  if (advantageSlider.length > 0) {
    advantageSlider.forEach((swiperElement, i) => {
      const uniqueClass = `advantageSL_${i}`;
      swiperElement.classList.add(uniqueClass);

      const advantageSwip = new Swiper(`.${uniqueClass}`, {
        watchOverflow: true,
        spaceBetween: 16,
        loop: true,
        speed: 500,

        pagination: {
          el: `.${uniqueClass} .swiper-pagination`,
          clickable: true,
        },

        breakpoints: {
          0: {
            slidesPerView: 1.2,
            centeredSlides: true,
            loop: true,
          },
        },
      });
    });
  }
  /* ADVANTAGE BLOCK END */

  /* BLOCK NEWS FOR MOBILE  BLOCK START */
  const blogCardSlider = document.querySelectorAll(".blog-card-block .swiper");
  if (blogCardSlider.length > 0) {
    const swiperInstances = [];
    blogCardSlider.forEach((swiperElement, i) => {
      const uniqueClass = `advantageSL_${i}`;
      swiperElement.classList.add(uniqueClass);

      const blockCardSwip = new Swiper(`.${uniqueClass}`, {
        watchOverflow: true,
        spaceBetween: 16,
        loop: true,
        speed: 500,

        pagination: {
          el: `.${uniqueClass} .swiper-pagination`,
          clickable: true,
        },

        breakpoints: {
          0: {
            slidesPerView: 1.2,
            centeredSlides: false,
            loop: false,
          },
          577: {},
        },
      });
    });
  }
  /* BLOCK NEWS FOR MOBILE BLOCK END */
}, 500);
