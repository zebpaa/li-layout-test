$(function () {
  $(".reviews__list").slick({
    autoplay: false,
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="../images/arrow-left.png" alt="arrow-left.png"></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img src="../images/arrow-right.png" alt="arrow-right.png"></button>',
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

let menuBtn = document.querySelector(".menu__btn"),
  rightsideMenu = document.querySelector(".rightside-menu");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active"), rightsideMenu.classList.toggle("active");
});
