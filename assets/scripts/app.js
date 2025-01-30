// import domReady from "@roots/sage/client/dom-ready";
// import "bootstrap";

/**
 * Application entrypoint
 */
// domReady(async () => {

// });

document.addEventListener("DOMContentLoaded", function () {
  // Selecting required DOM elements
  const searchIconButton = document.querySelector(".mobile-search-button");
  const headerArea = document.querySelector("header.header-area");
  const menubarIcon = document.querySelector(".menubar-icon .menu-icon");
  // Toggle functionality on click
  searchIconButton.addEventListener("click", function () {
    if (
      headerArea.classList.contains("show-search-box") ||
      headerArea.classList.contains("mobile-menu-show") ||
      searchIconButton.classList.contains("cross") ||
      menubarIcon.classList.contains("cross")
    ) {
      // Show the search box and update icons
      searchIconButton.classList.remove("cross"); // Ensure all hiding classes are removed
      headerArea.classList.remove("show-search-box");
      headerArea.classList.remove("mobile-menu-show");
      menubarIcon.classList.remove("cross");
    } else {
      // Hide the search box and update icons
      searchIconButton.classList.add("cross"); // Add close class
      headerArea.classList.add("show-search-box");
    }
  });
});
function openNav(x) {
  x.classList.toggle("cross");
  document
    .querySelector("header.header-area")
    .classList.toggle("mobile-menu-show");
}
/* HEADER SUBMENU SHOW START */
$(document).on("click", ".menu-item-has-children a", function (event) {
  if ($(window).width() < 992) {
    var subMenu = $(this).parent(".menu-item-has-children");
    let child_menu = subMenu.find(".sub-menu");
    child_menu.slideToggle(500);
    $(this).toggleClass("active");
  }
});
/* HEADER SUBMENU SHOW END */
setTimeout(function () {
  /* HERO SLIDER START */
  const swipers = document.querySelectorAll(".banner-area .swiper");
  if (swipers.length > 0) {
    swipers.forEach((swiperElement, i) => {
      swiperElement.classList.add("swHero_" + i);

      const swiper = new Swiper(".swHero_" + i, {
        watchOverflow: true,
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        // If we need pagination
        pagination: {
          el: ".swHero_" + i + " .swiper-pagination",
        },
        // Navigation arrows
        navigation: {
          nextEl: ".swHero_" + i + " .swiper-button-next",
          prevEl: ".swHero_" + i + " .swiper-button-prev",
        },
        loop: false,
      });
    });
  }
  /* HERO SLIDER END */
}, 500);

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
// if (import.meta.webpackHot) import.meta.webpackHot.accept(console.error);
