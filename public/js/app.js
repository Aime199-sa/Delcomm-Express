/*---------------------------------------------"
// Template Name: Royalfare
// Description:  Royalfare Html Template
// Version: 1.0.0

--------------------------------------------*/
(function (window, document, $, undefined) {
  "use strict";

  // ==========================================================
  // Detect mobile device and add class "is-mobile" to </body>
  // ==========================================================

  // Detect mobile device (Do not remove!!!)
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(navigator.userAgent) ? true : false;

  // Add class "is-mobile" to </body>
  if (isMobile) {
    $("body").addClass("is-mobile");
  }
  var MyScroll = "";

  var Init = {
    i: function (e) {
      Init.s();
      Init.methods();
    },
    s: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      Init.w();
      Init.preloader();
      Init.gsap();
      Init.miniCart();
      Init.searchFunction();
      Init.searchToggle();
      Init.niceSelect();
      Init.billingAddress();
      Init.countdownInit(".countdown", "2025/09/01");
      Init.quantityHandle();
      Init.ionRangeSlider();
      Init.ionRangeSlider2();
      Init.slick();
      Init.filterToggle();
      Init.formValidation();
      Init.odometer();
    },

    w: function (e) {
      this._window.on("load", Init.l).on("scroll", Init.res);
    },
    preloader: function () {
      setTimeout(function () { $('#preloader').hide('slow') }, 50);
    },
    gsap: function () {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
      if (window.innerWidth > 1024) {
        MyScroll = ScrollSmoother.create({
          smooth: 1,
          effects: true,
          smoothTouch: 1,
        });
        MyScroll.scrollTo(0);
        
      }

      // Hero Banner 1 
      if ($('.hero-banner-1').length) {

        if (window.innerWidth > 1199) {
  
          gsap.set(".img-1", { scale: 1, x: '0%' })
          gsap.set(".img-2", { scale: 0.4, x: '50%' })
          gsap.set(".img-3", { scale: 0.4, x: '100%' })
          gsap.set(".img-4", { scale: 0.4, x: '100%' })
          
          const innerAnimation = gsap
            .timeline({ defaults: { ease: "power2.inOut" } })
  
            .to(".img-1", { scale: '0.2', x: '-135%', y: '13vw' })
            .to(".img-2", { scale: '1', x: '0%' }, '<')
            .to(".img-3", { x: '50%' }, '<')

            .to(".img-2", { scale: '0.17', x: '-119%', y: '13vw' })
            .to(".img-3", { scale: '1', x: '0%' }, '<')
            .to(".img-4", { x: '50%' }, '<')

            .to(".img-4", { scale: '1', x: '0%' })
            .to(".img-3", { scale: '0.2', x: '-101%', y: '12.6vw' }, '<')
            
          /*ScrollTrigger.create({
            trigger: "#hero",
            scrub: true,
            pin: true,
            start: "top top",
            end: "+=300%", // Adjust this value based on your design
            animation: innerAnimation,
          });*/
        }
      }
      // Hero Banner 2
      if ($('.hero-banner-2').length) {
        var background1 = 'radial-gradient(132.53% 136.13% at 42.11% -21.2%, rgba(251, 224, 209, 0.86) 0%, #EE915B 17.5%, #D88555 32.5%, #D7580E 50%, #C64C06 81.43%, #FD650C 100%), #0744AA';
        var background2 = 'radial-gradient(132.53% 136.13% at 42.11% -21.2%, rgba(251, 241, 209, 0.86) 0%, #EEC95B 17.5%, #D8B755 32.5%, #D7A50E 50%, #C69606 81.43%, #FDC10C 100%), #FFC82A';
        var background3 = 'radial-gradient(132.53% 136.13% at 42.11% -21.2%, rgba(251, 209, 209, 0.86) 0%, #EE5B5B 17.5%, #D85555 32.5%, #D70E0E 50%, #C60606 81.43%, #FD0C0C 100%), #830000';
        var background4 = 'radial-gradient(132.53% 136.13% at 42.11% -21.2%, rgba(209, 246, 251, 0.86) 0%, #5BDDEE 17.5%, #55C9D8 32.5%, #0EC0D7 50%, #06B0C6 81.43%, #0CE1FD 100%), #007483';
        var background5 = 'radial-gradient(132.53% 136.13% at 42.11% -21.2%, rgba(209, 251, 213, 0.86) 0%, #5BEE67 17.5%, #55D860 32.5%, #0ED71F 50%, #06C616 81.43%, #0CFD20 100%), #1CC52B';
        var fill = 'rgba(252, 253, 253, 0.30)'

        gsap.set("#hero", { background: background1 })

        const innerAnimation = gsap
          .timeline({ defaults: { ease: "power2.inOut" } })

          .to(".dish", { rotate: '180deg' })
          .to(".title-1", { scale: '0.5', y: '-102%' }, '<')
          .to(".title-2", { scale: '1', y: '-102%' }, '<')
          .to(".fish-soup path", { fillOpacity: 1 }, '<')
          .to(".mapo-tofu path", { fillOpacity: 0.3 }, '<')
          .to(".elem-1", { opacity: '0' }, '<')
          .to(".elem-2", { opacity: '1' }, '<')
          .to(".dotted", { rotate: '30deg' }, '<')
          .to("#hero", { background: background2 }, '<')
          .to(".img-3", { opacity: '1' }, '<')

          .to(".dish", { rotate: '360deg' })
          .to(".title-2", { scale: '0.5', y: '-202%' }, '<')
          .to(".title-3", { scale: '1', y: '-202%' }, '<')
          .to(".chilli-chicken path", { fillOpacity: 1 }, '<')
          .to(".fish-soup path", { fillOpacity: 0.3 }, '<')
          .to(".elem-2", { opacity: '0' }, '<')
          .to(".elem-3", { opacity: '1' }, '<')
          .to(".dotted", { rotate: '65.61deg' }, '<')
          .to("#hero", { background: background3 }, '<')
          .to(".img-4", { opacity: '1' }, '<')

          .to(".dish", { rotate: '540deg' })
          .to(".title-3", { scale: '0.5', y: '-302%' }, '<')
          .to(".title-4", { scale: '1', y: '-302%' }, '<')
          .to(".lamb-chops path", { fillOpacity: 1 }, '<')
          .to(".chilli-chicken path", { fillOpacity: 0.3 }, '<')
          .to(".elem-3", { opacity: '0' }, '<')
          .to(".elem-4", { opacity: '1' }, '<')
          .to(".dotted", { rotate: '104deg' }, '<')
          .to("#hero", { background: background4 }, '<')
          .to(".img-5", { opacity: '1' }, '<')

          .to(".dish", { rotate: '720deg' })
          .to(".title-4", { scale: '0.5', y: '-402%' }, '<')
          .to(".title-5", { scale: '1', y: '-402%' }, '<')
          .to(".vegetables path", { fillOpacity: 1 }, '<')
          .to(".lamb-chops path", { fillOpacity: 0.3 }, '<')
          .to(".elem-4", { opacity: '0' }, '<')
          .to(".elem-5", { opacity: '1' }, '<')
          .to(".dotted", { rotate: '135deg' }, '<')
          .to("#hero", { background: background5 }, '<')

        ScrollTrigger.create({
          trigger: "#hero",
          scrub: true,
          pin: true,
          start: "top top",
          end: "+=500%", // Adjust this value based on your design
          animation: innerAnimation,
        });
      }

      // ==================================
      // Header tools
      // ==================================

      // If ui-Header tools exist
      if ($(".ui-header-tools").length) {
        $("body").addClass("ui-header-tools-on");

        // Header tools dynamic
        // =====================
        if ($(".ui-header-tools-dynamic").length) {
          $("body").addClass("ui-header-tools-dynamic-on");

          // Move header tools dynamic out of header if the window width is 768px or smaller
          function headerToolsPosition() {
            if (window.matchMedia("(max-width: 768px)").matches) {
              $(".ui-header-tools-dynamic").prependTo("#body-inner");
            } else {
              $(".ui-header-tools-dynamic").prependTo(".ui-header-tools");
            }
          }
          headerToolsPosition();
          $(window).resize(function () {
            headerToolsPosition();
          });
        }
      }


      // ==================================================
      // Overlay menu
      // ==================================================


      // On menu toggle button click
      // ============================
      var $olMenuToggleBtn = $(
        ".ui-ol-menu-toggle-btn-text, .ui-ol-menu-toggle-btn"
      );

      $olMenuToggleBtn.on("click", function () {
        $("html").toggleClass("ui-no-scroll");
        $("body").toggleClass("ui-ol-menu-open");
        if ($("body").hasClass("ui-ol-menu-open")) {
          // Menu step in animations
          // ========================
          $("body").addClass("olm-toggle-no-click"); // Disable toggle button click until the animations last.

          var tl_olMenuIn = gsap.timeline({
            onComplete: function () {
              $("body").removeClass("olm-toggle-no-click");
            },
          });

          tl_olMenuIn.to(".ui-overlay-menu", { duration: 0.4, autoAlpha: 1 });
          tl_olMenuIn.from(".ui-ol-menu-list > li", {
            duration: 0.4,
            y: 80,
            autoAlpha: 0,
            stagger: 0.05,
            ease: Power2.easeOut,
            clearProps: "all",
          });

          // On menu link click
          $(".ui-overlay-menu a, .ui-logo a")
            .not('[target="_blank"]') // omit from selection
            .not('[href^="#"]') // omit from selection
            .not('[href^="mailto"]') // omit from selection
            .not('[href^="tel"]') // omit from selection
            .on("click", function () {
              gsap.set("#content-wrap, .ttgr-cat-nav", { autoAlpha: 0 }); // Hide before timeline
              var tl_olMenuClick = gsap.timeline();
              tl_olMenuClick.to(".ui-ol-menu-list > li", {
                duration: 0.4,
                y: -80,
                autoAlpha: 0,
                stagger: 0.05,
                ease: Power2.easeIn,
              });
            });

          // Hide sliding sidebar
          if ($(".ui-sliding-sidebar-wrap").length) {
            gsap.to(".ui-sliding-sidebar-trigger", {
              duration: 1,
              autoAlpha: 0,
              ease: Expo.easeOut,
            });
          }
        } else {
          // Menu step out animations
          // =========================
          $("body").addClass("olm-toggle-no-click"); // Disable toggle button click until the animations last.

          var tl_olMenuOut = gsap.timeline({
            onComplete: function () {
              $("body").removeClass("olm-toggle-no-click");
            },
          });
          tl_olMenuOut.to(".ui-ol-menu-list > li", {
            duration: 0.4,
            y: -80,
            autoAlpha: 0,
            stagger: 0.05,
            ease: Power2.easeIn,
          });
          tl_olMenuOut.to(
            ".ui-overlay-menu",
            { duration: 0.4, autoAlpha: 0, clearProps: "all" },
            "+=0.2"
          );
          tl_olMenuOut.set(".ui-ol-menu-list > li", { clearProps: "all" }); // clearProps only

          // Show sliding sidebar
          if ($(".ui-sliding-sidebar-wrap").length) {
            gsap.to(
              ".ui-sliding-sidebar-trigger",
              {
                duration: 1,
                autoAlpha: 1,
                ease: Expo.easeOut,
                clearProps: "all",
              },
              "-=0.3"
            );
          }

          // Close open submenus
          setTimeout(function () {
            $(".ui-ol-submenu").slideUp(350);
            $(".ui-ol-submenu-trigger").removeClass("ui-ol-submenu-open");
          }, 500);
        }

        return false;
      });

      // Menu list hover
      $(".ui-ol-menu-list")
        .on("mouseenter", function () {
          $(this).addClass("ui-ol-menu-hover");
        })
        .on("mouseleave", function () {
          $(this).removeClass("ui-ol-menu-hover");
        });

      // Open submenu if link href contains #
      $(".ui-ol-submenu-trigger > a").on("click", function () {
        if ($(this).is('[href^="#"]')) {
          var $this = $(this).parent();
          if ($this.hasClass("ui-ol-submenu-open")) {
            $this.removeClass("ui-ol-submenu-open");
            $this.next().slideUp(350);
          } else {
            $this
              .parent()
              .parent()
              .find(".ui-ol-submenu")
              .prev()
              .removeClass("ui-ol-submenu-open");
            $this.parent().parent().find(".ui-ol-submenu").slideUp(350);
            $this.toggleClass("ui-ol-submenu-open");
            $this.next().slideToggle(350);
          }
        }
        return false;
      });

      // Open submenu on caret click
      $(".ui-ol-submenu-caret-wrap").on("click", function () {
        var $this = $(this).parent();
        if ($this.hasClass("ui-ol-submenu-open")) {
          $this.removeClass("ui-ol-submenu-open");
          $this.next().slideUp(350);
        } else {
          $this
            .parent()
            .parent()
            .find(".ui-ol-submenu")
            .prev()
            .removeClass("ui-ol-submenu-open");
          $this.parent().parent().find(".ui-ol-submenu").slideUp(350);
          $this.toggleClass("ui-ol-submenu-open");
          $this.next().slideToggle(350);
        }
      });

    },
    miniCart: function () {
      $(document).ready(function ($) {
        var $body = $("body");

        $(".cart-button, .close-button, #sidebar-cart-curtain").click(function (e) {
          e.preventDefault();

          $body.toggleClass("show-sidebar-cart");

          if ($("#sidebar-cart-curtain").is(":visible")) {
            $("#sidebar-cart-curtain").fadeOut(500);
          } else {
            $("#sidebar-cart-curtain").fadeIn(500);
          }
        });
      });
    },


    searchFunction: function () {
      if ($("#searchInput").length) {
        $("#searchInput").on("keyup", function () {
          var value = $(this).val().toLowerCase();
          $(".item-card").filter(function () {
            var hasMatch = $(this).find(".title").text().toLowerCase().indexOf(value) > -1;
            $(this).toggle(hasMatch);
          });
        });
      }
    },
    billingAddress: function () {
      if ($("#bill-address").length) {
        $(".billing-address-block").hide();
        $("#bill-address").change(function () {
          if ($(this).is(":checked")) {
            $(".billing-address-block").hide("slow");
          } else {
            $(".billing-address-block").show("slow");
          }
        });
      }
    },
    countdownInit: function (countdownSelector, countdownTime) {
      var eventCounter = $(countdownSelector);
      if (eventCounter.length) {
        eventCounter.countdown(countdownTime, function (e) {
          $(this).html(
            e.strftime(
              '<li><h3>%D</h3><p>Days</p></li>\
              <li><h3>%H</h3><p>Hrs</p></li>\
              <li><h3>%M</h3><p>Min</p></li>\
              <li><h3>%S</h3><p>Sec</p></li>'
            )
          );
        });
      }
    },
    searchToggle: function () {
      if ($(".search-toggler").length) {
        $(".search-toggler").on("click", function (e) {
          e.preventDefault();
          $(".search-popup").toggleClass("active");
          $(".mobile-nav__wrapper").removeClass("expanded");
          $("body").toggleClass("locked");
        });
      }
    },
    niceSelect: function () {
      if ($(".has-nice-select").length) {
        $('.has-nice-select, .contact-form select').niceSelect();
      }
    },
    ionRangeSlider: function () {
      var custom_values = [0, 1, 2];
      var my_from = custom_values.indexOf(1);
      var my_to = custom_values.indexOf(2);
      $(".js-range-slider2").ionRangeSlider({
        from: my_from,
        to: my_to,
        values: custom_values
      });
    },
    ionRangeSlider2: function () {
      var $range = $(".js-range-slider"),
        $inputFrom = $(".js-input-from"),
        $inputTo = $(".js-input-to"),
        instance,
        min = 30,
        max = 300,
        from = 0,
        to = 0;

      $range.ionRangeSlider({
        skin: "flat",
        type: "double",
        min: min,
        max: max,
        from: 30,
        to: 300,
        onStart: updateInputs,
        onChange: updateInputs
      });
      instance = $range.data("ionRangeSlider");

      function updateInputs(data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
      }

      $inputFrom.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
          val = min;
        } else if (val > to) {
          val = to;
        }

        instance.update({
          from: val
        });
      });

      $inputTo.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < from) {
          val = from;
        } else if (val > max) {
          val = max;
        }

        instance.update({
          to: val
        });
      });
    },
    slick: function () {
      if ($(".testimonial-slider-slick").length) {
        $(".testimonial-slider-slick").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          centerPadding: "0",
          infinite: true,
          cssEase: "linear",
          autoplay: false,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      }
      if ($(".brands-slider-slick").length) {
        $(".brands-slider-slick").slick({
          slidesToShow: 5,
          arrows: false,
          dots: false,
          infinite: true,
          autoplay: true,
          cssEase: "linear",
          autoplaySpeed: 0,
          speed: 6000,
          pauseOnFocus: false,
          pauseOnHover: false,
          responsive: [
            {
              breakpoint: 1399,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      }
      $('.testimonial-slider').slick({
        autoplay: false,
        speed: 800,
        lazyLoad: 'progressive',
        arrows: true,
        infinite: true,
        dots: false,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 492,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
      $(".prev-btn").click(function () {
        var $this = $(this).attr("data-slide");
        $('.' + $this).slick("slickPrev");
      });

      $(".next-btn").click(function () {
        var $this = $(this).attr("data-slide");
        $('.' + $this).slick("slickNext");
      });

    },
    quantityHandle: function () {
      $(".decrement").on("click", function () {
        var qtyInput = $(this).closest(".quantity-wrap").children(".number");
        var qtyVal = parseInt(qtyInput.val());
        if (qtyVal > 0) {
          qtyInput.val(qtyVal - 1);
        }
      });
      $(".increment").on("click", function () {
        var qtyInput = $(this).closest(".quantity-wrap").children(".number");
        var qtyVal = parseInt(qtyInput.val());
        qtyInput.val(parseInt(qtyVal + 1));
      });
    },
    filterToggle: function () {
      if ($('.sidebar-widget').length) {
        $(".widget-title-row").on("click", function (e) {
          $(this).find('i').toggleClass('fa-horizontal-rule fa-plus', 'slow');
          $(this).find('i').toggleClass('fa-light fa-regular', 'slow');
          $(this).parents('.sidebar-widget').find('.widget-content-block').animate({ height : 'toggle'}, 'slow');
        })
      }
    },
    formValidation: function () {
      if ($(".contact-form").length) {
        $(".contact-form").validate();
      }
      if ($(".login-form").length) {
        $(".login-form").validate();
      }
    },
    odometer: function () {
      if ($(".count_one").length) {
        $(".count_one").appear(function (e) {
          var odo = $(".count_one");
          odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
          });
        });
      }
    },

  };

  Init.i();
})(window, document, jQuery);

// ========== Page CLIENT ==========
if (document.getElementById("form-commande")) {
  document.getElementById("form-commande").addEventListener("submit", function (e) {
    e.preventDefault();

    const panier = JSON.parse(document.getElementById("panier").value);
    const telephone = document.getElementById("telephone").value;
    const adresse = document.getElementById("adresse").value;

    fetch("'/api/produits'", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        panier,
        telephone,
        adresse,
        montant_livraison: 1000
      }),
    })
    .then(res => res.json())
    .then(data => {
      document.getElementById("resultat").innerText = data.message || "Commande envoyée !";
    })
    .catch(err => {
      console.error(err);
      document.getElementById("resultat").innerText = "Erreur d’envoi";
    });
  });
}


// ========== Page ADMIN ==========
if (document.getElementById("login-form")) {
  document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("'/api/produits'", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error("Mauvais identifiants");
    })
    .then(() => {
      document.getElementById("login-form").style.display = "none";
      document.getElementById("commandes").style.display = "block";
      chargerCommandes();
    })
    .catch(err => alert(err.message));
  });

  function chargerCommandes() {
    fetch("'/api/produits'")
      .then(res => res.json())
      .then(data => {
        const liste = document.getElementById("liste-commandes");
        liste.innerHTML = "";
        data.forEach((commande, i) => {
          const li = document.createElement("li");
          li.innerText = `#${i + 1} - ${commande.telephone}, ${commande.adresse}, produits: ${JSON.stringify(commande.panier)}`;
          liste.appendChild(li);
        });
      });
  }
}
