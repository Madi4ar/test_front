$(document).ready(function(){
    $(".faq-head").click(function(){
		$(this).parent().find(".faq-content").slideToggle();
		$(this).find(".button").toggleClass("active: transform rotate-180 before:w-0");
		$(this).parent().find(".faq-head").toggleClass("december");
		$(this).parent().find(".aezakmi").toggleClass("september");
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
                          slidesToShow: 2,
                          slidesToScroll: 2,
                          arrow:false,
                          autoplay:true,
                      }
                  }
                  ]
      });


    

    $('.mod').click(function() {
        $('.mod').removeClass('active: p-[10px] rounded-[10px] bg-[#0095BF] text-white');
        $(this).addClass('active: p-[10px] rounded-[10px] bg-[#0095BF] text-white');
    });

    $('.tab').click(function() {
        $('.tab').removeClass('active: !bg-[#19B2DD] !text-white');
        $(this).addClass('active: !bg-[#19B2DD] !text-white');
    });

    

      // $(".default_option").click(function(){
      //   $(this).parent().toggleClass("hover:hidden");
      // })
      
      $(".select_ul li").click(function(){
        var currentele = $(this).html();
        $(".default_option li").html(currentele);
        $(this).parents(".select_ul").removeClass("active:block");
     })

      

        
});




