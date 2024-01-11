const menuButton = document.getElementById('hamb_button')
const btnTop = document.getElementById('top')

menuButton ? menuButton.addEventListener('click', (e) => {
  menuButton.classList.toggle('is-active')
}) : false
btnTop ? btnTop.addEventListener('click', (e) => {
  window.scroll(0, 0)
}) : false

// connect slider with jquery
$(document).ready(function(){
  $('.slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    draggable: true, // for PC
    swipe: true, // for phone
    touchThreshold: 10,
    waitForAnimate: false,

    pauseOnFocus: true,
    pauseOnHover: true,
    // pauseOnDotsHover: true,

    responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
  });
});




// document.getElementsByClassName('.slider').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: false,
//   autoplaySpeed: 1000,
//   swipeToSlide: true,
//   arrows: true,
//   nextArrow: '<span class="next"><i class="fa-solid fa-arrow-right"></i></span>',
//   prevArrow: '<span class="prev"><i class="fa-solid fa-arrow-left"></i></span>',
//   dots: true,
//   responsive: [
//       {
//           breakpoint: 970,
//           settings: {
//               slidesToShow: 2,
//               centerMode:false
//           }
//       },
//       {
//           breakpoint: 650,
//           settings: {
//               slidesToShow: 1,
//               centerMode:false
//           }
//       }
//   ]
  
// });


