!function (e) {
    "use strict";
    var t = e(".Sticky");
    e(window).on("scroll", function () {
        e(this).scrollTop() > 80 ? t.addClass("sticky_element") : t.removeClass("sticky_element")
    }),
        e(window).resize(function () {
            e(window).width() >= 768 ? (e('a[href="#"]').on("click", function (e) {
                e.preventDefault()
            }),
                e(".categories").addClass("menu"),
                e(".menu ul > li").on("mouseover", function (t) {
                    e(this).find("ul:first").show(),
                        e(this).find("> span a").addClass("active")
                }).on("mouseout", function (t) {
                    e(this).find("ul:first").hide(),
                        e(this).find("> span a").removeClass("active")
                }),
                e(".menu ul li li").on("mouseover", function (t) {
                    e(this).has("ul").length && e(this).parent().addClass("expanded"),
                        e(".menu ul:first", this).parent().find("> span a").addClass("active"),
                        e(".menu ul:first", this).show()
                }).on("mouseout", function (t) {
                    e(this).parent().removeClass("expanded"),
                        e(".menu ul:first", this).parent().find("> span a").removeClass("active"),
                        e(".menu ul:first", this).hide()
                })) : e(".categories").removeClass("menu")
        }).resize(),
        e("#menu").mmenu({
            extensions: ["pagedim-black"],
            counters: !0,
            keyboardNavigation: {
                enable: !0,
                enhance: !0
            },
            navbar: {
                title: "MENU"
            },
            offCanvas: {
                pageSelector: "#page"
            },
            navbars: [{
                position: "bottom",
                content: ['<a href="#0">\xa9 2022 Allaia</a>']
            }]
        }, {
            clone: !0,
            classNames: {
                fixedElements: {
                    fixed: "menu_fixed"
                }
            }
        }),
        e("a.open_close").on("click", function () {
            e(".main-menu").toggleClass("show"),
                e(".layer").toggleClass("layer-is-visible")
        }),
        e("a.show-submenu").on("click", function () {
            e(this).next().toggleClass("show_normal")
        }),
        e("a.show-submenu-mega").on("click", function () {
            e(this).next().toggleClass("show_mega")
        }),
        e("a.btn_search_mob").on("click", function () {
            e(".search_mob_wp").slideToggle("fast")
        }),
        e(".prod_pics").owlCarousel({
            items: 1,
            loop: !1,
            margin: 0,
            dots: !0,
            lazyLoad: !0,
            nav: !1
        }),
        e(".products_carousel").owlCarousel({
            center: !1,
            items: 2,
            loop: !1,
            margin: 10,
            dots: !1,
            nav: !0,
            lazyLoad: !0,
            navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
            responsive: {
                0: {
                    nav: !1,
                    dots: !0,
                    items: 2
                },
                560: {
                    nav: !1,
                    dots: !0,
                    items: 3
                },
                768: {
                    nav: !1,
                    dots: !0,
                    items: 4
                },
                1024: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        }),
        e(".carousel_centered").owlCarousel({
            center: !0,
            items: 2,
            loop: !0,
            margin: 10,
            responsive: {
                0: {
                    items: 1,
                    dots: !1
                },
                600: {
                    items: 2
                },
                1e3: {
                    items: 4
                }
            }
        }),
        e("#brands").owlCarousel({
            autoplay: !0,
            items: 2,
            loop: !0,
            margin: 10,
            dots: !1,
            nav: !1,
            lazyLoad: !0,
            autoplayTimeout: 3e3,
            responsive: {
                0: {
                    items: 3
                },
                767: {
                    items: 4
                },
                1e3: {
                    items: 6
                },
                1300: {
                    items: 8
                }
            }
        }),
        e("[data-countdown]").each(function () {
            var t = e(this)
                , o = e(this).data("countdown");
            t.countdown(o, function (e) {
                t.html(e.strftime("%DD %H:%M:%S"))
            })
        }),
        new LazyLoad({
            elements_selector: ".lazy"
        }),
        e(".custom-select-form select").niceSelect(),
        e(".color").on("click", function () {
            e(".color").removeClass("active"),
                e(this).addClass("active")
        }),
        e(".numbers-row").append('<div class="inc button_inc">+</div><div class="dec button_inc">-</div>'),
        e(".button_inc").on("click", function () {
            var t = e(this)
                , o = t.parent().find("input").val();
            if ("+" == t.text())
                var s = parseFloat(o) + 1;
            else if (o > 1)
                var s = parseFloat(o) - 1;
            else
                s = 0;
            t.parent().find("input").val(s)
        }),
        e(".dropdown-cart, .dropdown-access").hover(function () {
            e(this).find(".dropdown-menu").stop(!0, !0).delay(50).fadeIn(300)
        }, function () {
            e(this).find(".dropdown-menu").stop(!0, !0).delay(50).fadeOut(300)
        }),
        e(window).bind("load resize", function () {
            768 >= e(window).width() ? e("a.cart_bt, a.access_link").removeAttr("data-toggle", "dropdown") : e("a.cart_bt,a.access_link").attr("data-toggle", "dropdown")
        }),
        e(".opacity-mask").each(function () {
            e(this).css("background-color", e(this).attr("data-opacity-mask"))
        }),
        new WOW().init(),
        e("#forgot").on("click", function () {
            e("#forgot_pw").fadeToggle("fast")
        });
    var o = e(".top_panel")
        , s = e(".layer");
    e(".btn_add_to_cart a").on("click", function () {
        o.addClass("show"),
            s.addClass("layer-is-visible")
    }),
        e("a.search_panel").on("click", function () {
            o.addClass("show"),
                s.addClass("layer-is-visible")
        }),
        e("a.btn_close_top_panel").on("click", function () {
            o.removeClass("show"),
                s.removeClass("layer-is-visible")
        });
    var a = e("footer h3");
    e(window).resize(function () {
        768 >= e(window).width() ? a.attr("data-bs-toggle", "collapse") : a.removeAttr("data-bs-toggle", "collapse")
    }).resize(),
        a.on("click", function () {
            e(this).toggleClass("opened")
        }),
        e(window).width() >= 1024 && e("footer.revealed").footerReveal({
            shadow: !1,
            opacity: .6,
            zIndex: 1
        }),
        e(window).scroll(function () {
            e(window).scrollTop() >= 800 ? e("#toTop").addClass("visible") : e("#toTop").removeClass("visible")
        }),
        e("#toTop").on("click", function () {
            return e("html, body").animate({
                scrollTop: 0
            }, 500),
                !1
        }),
        [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function (e) {
            return new bootstrap.Tooltip(e)
        }),
        e("#sign-in").magnificPopup({
            type: "inline",
            fixedContentPos: !0,
            fixedBgPos: !0,
            overflowY: "auto",
            closeBtnInside: !0,
            preloader: !1,
            midClick: !0,
            removalDelay: 300,
            closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
            mainClass: "my-mfp-zoom-in"
        }),
        e(".magnific-gallery").each(function () {
            e(this).magnificPopup({
                delegate: "a",
                type: "image",
                preloader: !0,
                gallery: {
                    enabled: !0
                },
                removalDelay: 500,
                callbacks: {
                    beforeOpen: function () {
                        this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"),
                            this.st.mainClass = this.st.el.attr("data-effect")
                    }
                },
                closeOnContentClick: !0,
                midClick: !0
            })
        }),
        setTimeout(function () {
            e(".popup_wrapper").css({
                opacity: "1",
                visibility: "visible"
            }),
                e(".popup_close").on("click", function () {
                    e(".popup_wrapper").fadeOut(300)
                })
        }, 1500)
}(window.jQuery);
