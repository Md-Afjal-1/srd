// 1.  Sticky Header
var className = "sticky-header";
var scrollTrigger = 500;
window.onscroll = function () {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};  
 
// 2. Home Property Slider
 
$(document).ready(function() {
  var menu = ['<span class="pagination-count">01</span> <span class="pagination-title">AFFORDABLE FLATS</span>',
    '<span class="pagination-count">02</span> <span class="pagination-title">LUXURIOUS FLATS</span>',
    '<span class="pagination-count">03</span> <span class="pagination-title">SUPER LUXURIOUS FLATS</span>']
  var SwiperSliderOne = new Swiper('.property-swiper-slider', {
            loop: true,
            parallax: true,
            autoplay: {
                delay: 5000,
            },
            effect: 'fade',
            autoHeight: true,
            speed: 2500,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
                renderBullet: function (index, className) {
                  return '<span class="' + className + '">' + (menu[index]) + '</span>';
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
            },
        });
});
 
// 3. Home Service Slider
const swiper1 = new Swiper('.service-swiper-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2000,
  },
  autoHeight: true,
  speed: 1000,
  navigation: {
    nextEl: '.slid-button-next',
    prevEl: '.slid-button-prev',
  },
  breakpoints: {
    420: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 1.2,
    },
    1024: {
      slidesPerView: 2.2,
    },
    1280: {
      slidesPerView: 2.2,
    }
  }
});
 
// 4. Home Service Slider
const swiper = new Swiper(".testimonial-slider", {
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  mousewheel: false,
  keyboard: {
    enabled: true
  },
  autoplay: {
    delay: 3000,
 },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2.5,
    }
  }
});
 
 
// 5. Image Click Popup
const modal = document.getElementsByClassName('themeModal');
const img = document.getElementsByClassName('toZoom');
const modalImg = document.getElementsByClassName('modal-content');
for ( let i = 0; i < img.length; i++ ) {
  img[i].onclick = function () {
    modal[i].style.display = "flex";
    modalImg[i].src = this.src;
  }
}
 
var span = document.getElementsByClassName("close");
for ( let i = 0; i < span.length; i++ ) {
  span[i].onclick = function() {
    modal[i].style.display = "none";
  }
}
 
// 6. Projects Details Pages
const swiper2 = new Swiper('.aminities-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 1000,
  },
  autoHeight: true,
  speed: 1000,
  navigation: {
    nextEl: '.slid-button-next',
    prevEl: '.slid-button-prev',
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
    1280: {
      slidesPerView: 6,
    }
  }
});
 
// 7. Aaminites-slider-wrapper
const swiper3 = new Swiper('.aminites-slider-wrapper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 1000,
  },
  autoHeight: true,
  speed: 1000,
  navigation: {
    nextEl: '.slid-button-next',
    prevEl: '.slid-button-prev',
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
    1280: {
      slidesPerView: 7,
    }
  }
});
 
// 8. Wow animation  
AOS.init();
 
 
 
// 9.  Range Slider
(function ($) {
  $(function () {
      $("input[type=range]").rangeslider({polyfill: false});
      var t = $("#level1-clients"),
        a = $("#level2-clients"),
        e = $("#daily-orders"),
        i = $("#commission"),
        l = $("#affiliate-result"),
        h = $(".js-calculator_second-level-wrap");
      function agFormula() {
        l.html(parseInt(t.val() * (10 * e.val()) + i.val() * t.val()  * 10 * .056)).digits().append("<span class=\"emi-calculator_results-currency\">₹</span>");
 
      }
      $(".js-calculator_input-wrap > .js-calculator_text-input").on("change input", function () {
        $(this).parent().find(".js-calculator_range").val($(this).val()).change();
 
        agFormula();
      });
      $(".js-calculator_input-wrap > .js-calculator_range").on("change input", function () {
        $(this).parent().find(".js-calculator_text-input").val($(this).val());
 
        agFormula();
      });
      $(".js-calculator_input-wrap > .js-calculator_radio-box > .js-calculator_radio").on("change input", function () {
        agFormula();
      });
      $(".js-calculator_more-levels").click(function (t) {
        if($(this).hasClass("js-ag-opened")) {
          h.hide();
          h.find(".js-calculator_text-input").val(0);
          h.find(".js-calculator_range").val(0).change();
          $(this).removeClass("js-ag-opened");
        }else{
          h.css("display", "inline-block");
          h.find(".js-calculator_text-input").val(15);
          h.find(".js-calculator_range").val(15).change();
          $(this).addClass("js-ag-opened");
        }
        agFormula();
        t.preventDefault();
      });
      $.fn.digits = function () {
        return this.each(function () {
          $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1'"));
        });
      };
      agFormula();
  });
})(jQuery);
 

  // toggler