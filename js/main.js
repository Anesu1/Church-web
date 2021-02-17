


$(".ham").click(function(){
    $(".ham").toggleClass("open");
    $(".menu").toggleClass("change");
})

$('header ul li').on('click', function () {
  
    $('header ul li').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');   
    }
    
  });
  let header = document.querySelector("header");
 let ham = document.querySelector(".ham");
 let menu = document.querySelector(".menu");
  let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
      header.classList.remove("hide");
    // header.style.transform = "translateY(0)";
  } else {
    menu.classList.remove("change");
    ham.classList.remove("open");
    header.classList.add("hide");
    // header.style.transform = "translateY(100%)";
  }
  prevScrollpos = currentScrollPos;
}


// $('.slider').slick({
  
//   arrows: true,
//   autoplay: false,
 
//   centerMode: true,
//   variableWidth: true,
//   centerPadding: '0',
//   nextArrow: "#next",
//   prevArrow:"#prev",
  // responsive: [
  //   {
  //     breakpoint: 9999,
  //     settings: 'unslick'
      
  //   },
  //   {
  //     breakpoint: 767,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //       infinite: true,
  //       dots: false,
  //     }
  //   },
    
     

  //   ]
  
// });




$(document).on('ready', function() {
     
     
      

  $(".variable").slick({
    dots: false,
    nextArrow:'#next',
    prevArrow:'#prev',
    infinite: true,
    slidesToShow:2,
    fade: true,
    variableWidth: true,
  });
 
});


