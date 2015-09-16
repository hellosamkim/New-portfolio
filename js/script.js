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
    $('button').addClass('animated fadeIn');
    $('button').css({'visibility':'visible'});
    $('#logo').addClass('animated fadeIn');
    $('#logo ').css({'visibility':'visible'});
    $('#down').addClass('animated fadeIn');
    $('#down').css({'visibility':'visible'});
  }, 5800);
  setTimeout(function() {
    $('#name').removeClass('animated flipInX');
    $('#down').removeClass('animated fadeIn');
    $('#down').addClass('animated pulse infinite');
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
    $('#entrepreneur p').text("I'm currently learning Ember.js while sharpening up my JavaScript skills. During my spare time, I'm exploring the internet affiliate market while studying internet marketing.");
  }, function() {
    $('#entrepreneur i').removeClass('fa fa-book');
    $('#entrepreneur .head').text('ENTREPRENEUR');
    $('#entrepreneur .head').prepend('<i class="fa fa-lightbulb-o"></i>');
    $('#entrepreneur p').text('I have a strong interest in business and company infrastructures. Ever since a child, I grew up alongside my dad, watching him running his business. While this experience gave me hands-on knowledge regarding small retail businesses, being involved in the tech industry really opened my eyes to the start up world. Since then, I fell in love with the Start Up scene; where creative minds come together and turn disruptive ideas into reality.');
  });
};

// load bg slowly
$(window).load(function() {
  $('#home').fadeIn(2500);
});

// nav button
function nav() {
  var toggles = document.querySelectorAll("button");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      if (this.classList.contains("is-active") === true) {
        this.classList.remove("is-active");
        $('#menu').removeClass('animated flipInY');
        $('#menu').addClass('animated flipOutY');
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
          $('#menu').removeClass('animated flipOutY');
          $('#menu').addClass('animated flipInY');
          $('#menu').css({'visibility':'visible'});
        }, 800);
      }
    });
    $('#menu a').on('click', function() {
      $('button').removeClass("is-active");
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
    } else if ($('body').scrollTop() > $('#about').offset().top == true) {

    }
  });
};

function accessories() {
  $('#toronto').addClass('animated pulse infinite');
  $('#dog').addClass('animated pulse infinite');
  $('#learn').addClass('animated pulse infinite');
};
