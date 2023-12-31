$(document).ready(function(){
    $(".faq-head").click(function(){
		$(this).parent().find(".faq-content").slideToggle();
		$(this).find(".button").toggleClass("active: transform rotate-180 before:!w-0");
		$(this).parent().find(".faq-head").toggleClass("december");
		$(this).parent().find(".aezakmi").toggleClass("september");
	});

    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        let href = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 2000); 
    });

    $('.info_slider').slick({
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 2,
      autoplay: false,
      autoplaySpeed: 7000,
      arrow:true,
      slidesToScroll: 2,
      prevArrow:'.prev',
      nextArrow:'.next',
      responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrow:false,
                        autoplay:true,
                    }
                },
                   {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrow:false,
                        autoplay:true,
                    }
                }
                ]
    });

    $('.partnerx').slick({
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 7000,
        arrow:true,
        slidesToScroll: 1,
        prevArrow:'.prev',
        nextArrow:'.next',
        responsive: [
                  {
                      breakpoint: 1025,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2,
                          arrow:false,
                          autoplay:true,
                      }
                  },
                     {
                      breakpoint: 575,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          arrow:false,
                          autoplay:true,
                      }
                  }
                  ]
      });

      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:'.prev',
        nextArrow:'.next',
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
      });
    
let gallery = $('.product1 a');
$('.product1 a').on('click', function(e) {
  e.preventDefault();
  let totalSlides = +$(this).parents('.slider-for').slick("getSlick").slideCount,
      dataIndex = +$(this).parents('.product1').data('slick-index'),
      trueIndex;
  switch(true){
    case (dataIndex<0):
      trueIndex = totalSlides+dataIndex; break;
    case (dataIndex>=totalSlides):
      trueIndex = dataIndex%totalSlides; break;
    default: 
      trueIndex = dataIndex;
  }  
  $.fancybox.open(gallery,{}, trueIndex);
  return false;
});

    $('.mod').click(function() {
        $('.mod').removeClass('active: p-2.5 rounded-lg bg-[#0095BF] text-white');
        $(this).addClass('active: p-2.5 rounded-lg bg-[#0095BF] text-white');
    });

    $('.tab').click(function() {
        $('.tab').removeClass('active: !bg-[#19B2DD] !text-white');
        $(this).addClass('active: !bg-[#19B2DD] !text-white');
    });

     $(".default_option").click(function() {
        $(".select_ul").toggleClass('blocks');
     })


      $(".select_ul li").click(function(){
        var currentele = $(this).html();
        $(".default_option li").html(currentele);
        $(this).parents(".select_ul").removeClass("active:block");
     })

      
     document.querySelector('.box').onclick = function() {
        let tox = document.querySelector('.tox');
        tox.classList.toggle('group')
     }

     
        
});




