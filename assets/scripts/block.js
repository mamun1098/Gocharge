setTimeout(function () {
  /* ELECTRIC MOBILITY SECTION START */
  const electricMobilitySlider = document.querySelectorAll(
    ".product-with-bgImg .swiper"
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
            slidesPerView: 1.1,
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
            slidesPerView: 1.1,
            centeredSlides: false,
            loop: false,
          },
          768: {
            slidesPerView: 2,
            centeredSlides: false,
            loop: false,
          },
          990: {
            slidesPerView: 3,
            centeredSlides: false,
            loop: false,
            spaceBetween: 25,
          },
          1200: {
            slidesPerView: 3,
            centeredSlides: false,
            loop: false,
            spaceBetween: 50,
          },
        },
      });
    });
  }
  /* NEWS BLOCK END */

  /* ADVANTAGE BLOCK START */
  const advantageSlider = document.querySelectorAll(
    ".mobile-has-one-slider .swiper"
  );

  if (advantageSlider.length > 0) {
    advantageSlider.forEach((swiperElement, i) => {
      const uniqueClass = `advantageSL_${i}`;
      swiperElement.classList.add(uniqueClass);

      const advantageSwip = new Swiper(`.${uniqueClass}`, {
        watchOverflow: true,
        spaceBetween: 16,
        loop: false,
        speed: 500,

        pagination: {
          el: `.${uniqueClass} .swiper-pagination`,
          clickable: true,
        },

        breakpoints: {
          0: {
            slidesPerView: 1.1,
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
            slidesPerView: 1.1,
            centeredSlides: false,
            loop: false,
          },
          577: {},
        },
      });
    });
  }
  /* BLOCK NEWS FOR MOBILE BLOCK END */

  /* LOGO SLIDER BLOCK START */
  const logoSlider = document.querySelectorAll(".logo-slider-block .swiper");
  if (logoSlider.length > 0) {
    logoSlider.forEach((swiperElement, i) => {
      const uniqueClass = `logoSL_${i}`;
      swiperElement.classList.add(uniqueClass);

      const logoSwiper = new Swiper(`.${uniqueClass}`, {
        watchOverflow: true,
        observer: true,
        observeParents: true,
        spaceBetween: 90,
        loop: false,
        speed: 500,
        slidesPerView: 5,

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
            slidesPerView: "auto",
            centeredSlides: false,
            loop: false,
            spaceBetween: 25,
            navigation: false,
          },
          576: {
            slidesPerView: 2,
            centeredSlides: false,
            loop: false,
            navigation: false,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1920: {
            slidesPerView: 5,
          },
        },
      });
    });
  }
  /* LOGO SLIDER BLOCK START END */

  /* BACKGROUND IMAGE BLOCK START */
  const bgImageSlider = document.querySelectorAll(".block-image .swiper");
  if (bgImageSlider.length > 0) {
    bgImageSlider.forEach((swiperElement, i) => {
      const uniqueClass = `bgImageSL_${i}`;
      swiperElement.classList.add(uniqueClass);

      const bgImageSwip = new Swiper(`.${uniqueClass}`, {
        watchOverflow: true,
        // observer: true,
        observeParents: true,
        spaceBetween: 16,
        loop: true,
        speed: 500,
        pagination: {
          el: `.${uniqueClass} .swiper-pagination`,
          clickable: true,
        },

        breakpoints: {
          0: {
            slidesPerView: 1,
            centeredSlides: false,
            loop: false,
            navigation: false,
          },
          768: {
            // Navigation arrows
            navigation: {
              nextEl: `.${uniqueClass} .swiper-button-next`,
              prevEl: `.${uniqueClass} .swiper-button-prev`,
            },
          },
        },
      });
    });
  }
  /* BACKGROUND IMAGE BLOCK END */

  /* PRODUCT IMAGE SLIDER START  */
  const galleries = document.querySelectorAll(".product-info-area");

  if (galleries.length > 0) {
    let i = 1;

    galleries.forEach((gallery) => {
      const imagesSlider = gallery.querySelector(".swiper.images");
      const thumbnailsSlider = gallery.querySelector(".swiper.thumbnails");

      if (imagesSlider && thumbnailsSlider) {
        imagesSlider.classList.add("imagesSlider_" + i);
        thumbnailsSlider.classList.add("thumbnailsSlider_" + i);

        const thumbnailsSwiper = new Swiper(".thumbnailsSlider_" + i, {
          spaceBetween: 0,
          freeMode: true,
          watchSlidesProgress: true,
          direction: "vertical",
          breakpoints: {
            320: {
              slidesPerView: 4,
              spaceBetween: 15,
              pagination: {
                el: `.swiper-pagination`,
                clickable: true,
              },
              direction: "horizontal",
            },
            768: {
              slidesPerView: "auto",
              spaceBetween: 20,
              mousewheelControl: true,
              freeMode: true,
              freeModeSticky: true,
            },
            1024: {
              slidesPerView: "auto",
              spaceBetween: 20,
              mousewheelControl: true,
              freeMode: true,
              freeModeSticky: true,
            },
            1441: {
              slidesPerView: "auto",
              spaceBetween: 20,
              mousewheelControl: true,
              freeMode: true,
              freeModeSticky: true,
            },
          },
        });

        const imagesSwiper = new Swiper(".imagesSlider_" + i, {
          spaceBetween: 0,
          thumbs: { swiper: thumbnailsSwiper },
          pagination: {
            el: ".imagesSlider_" + i + " .swiper-pagination",
            clickable: true,
          },
        });
      }

      i++;
    });
  }
  /* PRODUCT IMAGE SLIDER END  */
}, 500);
