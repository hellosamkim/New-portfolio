$(function(){
  onePageViews();
  fullSize();
  animates();
  parallexShow();
  accessories();
});

function onePageViews() {
  $(".pageSelect").on("click", function( e ) {
      e.preventDefault();
      $("body, html").animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, Math.floor(Math.random() * 700) + 1000);
  });
};

function fullSize() {
  var h = $(window).height();
  $('.details').css({
    'height': h + 'px'
  });
};

function animates() {
  setTimeout(function() {
    $('#name').addClass('animated flipInX');
    $('#name').css({'visibility':'visible'});
  }, 2500);
  setTimeout(function() {
    $('#name-1 span:nth-child(1)').addClass('animated fadeInLeft');
    $('#name-1 span:nth-child(1)').css({'visibility':'visible'});
  }, 3000);
  setTimeout(function() {
    $('#name-1 span:nth-child(2)').addClass('animated fadeInRight');
    $('#name-1 span:nth-child(2)').css({'visibility':'visible'});
  }, 3800);
  setTimeout(function() {
    $('#name-1 span:nth-child(3)').addClass('animated fadeInRight');
    $('#name-1 span:nth-child(3)').css({'visibility':'visible'});
  }, 3900);
  setTimeout(function() {
    $('#name-2').addClass('animated fadeInUp');
    $('#name-2').css({'visibility':'visible'});
  }, 4600);
  setTimeout(function() {
    $('#name-3').addClass('animated fadeInUp');
    $('#name-3').css({'visibility':'visible'});
  }, 4800);
  setTimeout(function() {
    $('#name-intro').addClass('animated fadeIn');
    $('#name-intro').css({'visibility':'visible'});
  }, 5400);
  setTimeout(function() {
    $('nav button').addClass('animated fadeIn');
    $('nav button').css({'visibility':'visible'});
    $('#logo').addClass('animated fadeIn');
    $('#logo ').css({'visibility':'visible'});
    $('.down i').addClass('animated fadeIn');
    $('.down i').css({'visibility':'visible'});
    $('.up i').addClass('animated fadeIn');
    $('.up i').css({'visibility':'visible'});
  }, 5800);
  setTimeout(function() {
    $('#name').removeClass('animated flipInX');
    $('.down i').removeClass('animated fadeIn');
    $('.down i').addClass('animated pulse infinite');
    $('.up i').removeClass('animated fadeIn');
    $('.up i').addClass('animated pulse infinite');
  }, 6500);
  nav();
  $('#toronto').hover(function(){
    $('#toronto-img').css({'visibility':'visible'});
    $('#toronto-img').addClass('animated fadeIn');
    $('#me-stuff h4').text("Toronto, Canada");
    setTimeout(function() {
      $('#toronto-img').removeClass('animated fadeIn');
    }, 500);
  }, function() {
    $('#toronto-img').addClass('animated fadeOut');
$('#me-stuff h4').text("Hello World");
    setTimeout(function() {
      $('#toronto-img').css({'visibility':'hidden'});
      $('#toronto-img').removeClass('animated fadeOut');
    }, 500);
  });
  $('#dog').hover(function(){
    $('#dog-img').css({'visibility':'visible'});
    $('#dog-img').addClass('animated fadeIn');
    $('#me-stuff h4').text("His name is Coco");
    setTimeout(function() {
      $('#dog-img').removeClass('animated fadeIn');
    }, 500);
  }, function() {
    $('#dog-img').addClass('animated fadeOut');
    setTimeout(function() {
      $('#me-stuff h4').text("Hello World");
      $('#dog-img').css({'visibility':'hidden'});
      $('#dog-img').removeClass('animated fadeOut');
    }, 500);
  });
  $('#learn').hover(function(){
    $('#entrepreneur i').removeClass('fa fa-lightbulb-o');
    $('#entrepreneur .head').text('LEARNING');
    $('#entrepreneur .head').prepend('<i class="fa fa-book"></i>');
    $('#entrepreneur p').text("I'm currently learning Angular.js while sharpening up my JavaScript skills. During my spare time, I'm currently exploring internet and affiliate marketing.");
  }, function() {
    $('#entrepreneur i').removeClass('fa fa-book');
    $('#entrepreneur .head').text('ENTREPRENEUR');
    $('#entrepreneur .head').prepend('<i class="fa fa-lightbulb-o"></i>');
    $('#entrepreneur p').text('I have a strong interest in business and company infrastructures. Ever since a child, I grew up alongside my dad, watching him running his business. While this experience gave me hands-on knowledge regarding small retail businesses, being involved in the tech industry really opened my eyes to the start up world. Since then, I fell in love with the Start Up scene; where creative minds come together and turn disruptive ideas into reality.');
  });
  $('#email').hover(function(){
    $('#env-wrap i').animate({fontSize: '50px'});
    $('#email').css({'background-color':'rgba(200,236,180, 0.8)'});
    $('#env-wrap').css({'background':'none'});
    $('#env-wrap i').animate({marginTop: '18px'});
    $('#email h2').animate({marginTop: '-16px'});
    $('#email h2').css({'color':'rgba(255,255,255,1)','border-bottom':'1.5px solid rgba(0,0,0, 0.8)'});
  }, function() {
    $('#env-wrap i').animate({marginTop: '0px'});
    $('#env-wrap i').animate({fontSize: '45px'});
    $('#email').css({'background':'none'});
    $('#env-wrap').css({'background-color':'rgba(200,236,180, 0.8)'});
    $('#email h2').animate({marginTop: '0px'});
    $('#email h2').css({'color':'rgba(255,255,255,0.5)'});
    $('#email h2').css({'color':'rgba(255,255,255,1)','border-bottom':'1.5px solid rgba(200,236,180, 0.2)'});
  });
  $('#social-links a').hover(function() {
    $(this).css({'color':'rgba(255,255,255,0.8)'});
    $(this).addClass('animated swing');
  }, function() {
    $(this).css({'color':'rgba(255,255,255,0.5)'});
    $(this).removeClass('animated swing');
  });
};

// load bg slowly
$(window).load(function() {
  $('#home').fadeIn(2500);
});

// nav nav button
function nav() {
  var toggles = document.querySelectorAll("nav button");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      if (this.classList.contains("is-active") === true) {
        this.classList.remove("is-active");
        $('nav').css({'position':'inherit'});
        $('#menu').removeClass('animated flipInY');
        $('#menu').addClass('animated flipOutY');
        $('nav').css({'background':'none'});
        setTimeout(function() {
          $('#menu').css({'visibility':'hidden'});
        }, 500);
        setTimeout(function() {
          $('#name').removeClass('animated flipOutY');
          $('#name').addClass('animated flipInY');
        }, 800);
      } else {
        this.classList.add("is-active");
        $('#name').removeClass('animated flipInY');
        $('#name').addClass('animated flipOutY');
        setTimeout(function() {
          $('nav').css({'position':'fixed'});
          $('#menu').removeClass('animated flipOutY');
          $('nav').css({'background-color':'rgba(0,0,0,0.7)'});
          $('#menu').addClass('animated flipInY');
          $('#menu').css({'visibility':'visible'});
        }, 800);
      }
    });
    $('#menu a').on('click', function() {
      $('nav button').removeClass("is-active");
      $('#menu').removeClass('animated flipInY');
      $('#menu').addClass('animated flipOutY');
      setTimeout(function() {
        $('#menu').css({'visibility':'hidden'});
      }, 500);
      setTimeout(function() {
        $('#name').removeClass('animated flipOutY');
        $('#name').addClass('animated flipInY');
      }, 800);
    });

  };
};

function parallexShow() {
  $(window).scroll(function() {
    // sections show actions
    var imgShow = $('#about').offset().top * 0.2;

    if ($('body').scrollTop() > imgShow) {
      setTimeout(function() {
        $('#intro #img-mask').addClass('animated fadeInDown');
        $('#intro #img-mask').css({'visibility':'visible'});
        $('#intro #me-img').addClass('animated fadeInDown');
        $('#intro #me-img').css({'visibility':'visible'});
        setTimeout(function() {
          $('#me-stuff h4').addClass('animated fadeInUp');
          $('#me-stuff h4').css({'visibility':'visible'});
        }, 500);
        setTimeout(function() {
          $('#me-details').addClass('animated fadeInUp');
          $('#me-details').css({'visibility':'visible'});
          setTimeout(function() {
            $('#my-passions').addClass('animated fadeInUp');
            $('#my-passions').css({'visibility':'visible'});
          }, 1000);
        }, 1000);
      }, 200);
    }
    if (($('body').scrollTop() > ($('#work').offset().top - 120) == true) && ($('body').scrollTop() < ($('#contact').offset().top - 200) == true)) {
      $('.projects-wrapper').removeClass('animated fadeOutDown');
      $('.projects-wrapper').addClass('animated fadeInUp');
      $('.projects-wrapper').css({'visibility': 'visible'});
    } else {
      $('.projects-wrapper').removeClass('animated fadeInUp');
      $('.projects-wrapper').addClass('animated fadeOutDown');
      $('.projects-wrapper').css({'visibility': 'hidden'});
    }
  });
};

function accessories() {
  $('#toronto').addClass('animated pulse infinite');
  $('#dog').addClass('animated pulse infinite');
  $('#learn').addClass('animated pulse infinite');

  // carousel
  $('.projects-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: 'linear'
  });
  $('.project-pics').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4567
    // cssEase: 'linear'
  });

  // add next and prev button img to carousel
  $('.projects-wrapper .slick-prev').empty();
  $('.projects-wrapper .slick-prev').append('<i class="fa fa-angle-left"></i>');
  $('.projects-wrapper .slick-next').empty();
  $('.projects-wrapper .slick-next').append('<i class="fa fa-angle-right"></i>');

};
