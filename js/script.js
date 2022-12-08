
  $(function(){
    $('.popular_slider').slick({
      centerMode: true,
      centerPadding: '185px',
      slidesToShow: 3,
      arrows:false,
      focusOnSelect: true,
      autoplay:true,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '120px',
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '120px',
            slidesToShow: 1,
          }
        },
      ]
    });


      //counter
    $(".go_count").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 5000,
            easing: "swing",
            step: function (now) {
              now = Number(Math.ceil(now)).toLocaleString('en');
                                    $(this).text(now);
            },
          }
        );
    });
    //slider2
    $('.slider2').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:false,
      dots: true
    });


  })
  
  
  