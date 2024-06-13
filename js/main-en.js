// ==================================================
// Navbar
let menu = document.querySelector(".box-menu");
let listNav = document.querySelector(".box-list-link-nav-1");
menu.onclick = () => {
  listNav.classList.toggle("open");
};
// --------------------------------------

$(document).ready(function () {
  $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
    $(this).toggleClass("open");
  });
});

// --------------------------------------
// let aboutOffsetTop = $("#about").offset().top;

$(window).scroll(function () {
  let wScroll = $(window).scrollTop();

  if (wScroll > 130) {
    $(".box-nav").css("backgroundColor", "rgba(2slider-Reviews55, 255, 255)");
  } else {
    $(".box-nav").css("backgroundColor", "rgba(255, 255, 255)");
  }
});

// ==================================================
// Product details
var swiper = new Swiper(".slider-Product", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  direction: 'vertical',
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// ====================================================


var swiper = new Swiper(".slider-Reviews", {
  spaceBetween: 30,
  loop: true,
  // centeredSlides: true,

  // autoplay: {
    // delay: 2500,
    // disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});
// ====================================================
// video
$(".box-video-mp4").hide(1000);

$(".btn-show-vid").click(function () {
  $(".box-video-mp4").slideDown(500);
  playYouTubeVideo(); // Play the video when the button is clicked
});

$(".btn-x").click(function () {
  $(".box-video-mp4").slideUp(500);
  stopYouTubeVideo(); // Stop the video when the button is clicked
});

// Function to play the YouTube video
function playYouTubeVideo() {
  var player = document.getElementById("videoIframe");
  player.contentWindow.postMessage(
    '{"event":"command","func":"playVideo","args":""}',
    "*"
  );
}

// Function to stop the YouTube video
function stopYouTubeVideo() {
  var player = document.getElementById("videoIframe");
  player.contentWindow.postMessage(
    '{"event":"command","func":"stopVideo","args":""}',
    "*"
  );
}
