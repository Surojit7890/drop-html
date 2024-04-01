; (function ($) {
    gsap.registerPlugin(ScrollTrigger)
    function defaultAnimationGsap() {
        if ($(".anim-item-y").length) {
            gsap.set(".anim-item-y", { opacity: 0, y: 250 })
            ScrollTrigger.batch(".anim-item-y", {
                //start: "top 85%",
                onEnter: (batch) =>
                    gsap.to(batch, {
                        opacity: 1,
                        y: 0,
                        duration: 0.75,
                        stagger: { each: 0.15, grid: [1, 3] },
                        overwrite: true,
                    }),
                onLeave: (batch) =>
                    gsap.set(batch, { opacity: 0, y: -250, overwrite: true }),
                onEnterBack: (batch) =>
                    gsap.to(batch, {
                        opacity: 1,
                        y: 0,
                        duration: 0.75,
                        stagger: 0.15,
                        overwrite: true,
                    }),
                onLeaveBack: (batch) =>
                    gsap.set(batch, { opacity: 0, y: 250, overwrite: true }),
                //markers: true,
            })
            ScrollTrigger.addEventListener("refreshInit", () =>
                gsap.set(".anim-item-y", { opacity: 1, y: 0 })
            )
        }

        if ($(".anim-item-top").length) {
            gsap.set(".anim-item-top", { opacity: 0, y: -250 })
            ScrollTrigger.batch(".anim-item-top", {
                onEnter: (batch) =>
                    gsap.to(batch, {
                        opacity: 1,
                        y: 0,
                        duration: 0.75,
                        stagger: { each: 0.15, grid: [1, 3] },
                        overwrite: true,
                    }),
                onLeave: (batch) =>
                    gsap.set(batch, { opacity: 0, y: 250, overwrite: true }),
                onEnterBack: (batch) =>
                    gsap.to(batch, {
                        opacity: 1,
                        y: 0,
                        duration: 0.75,
                        stagger: 0.15,
                        overwrite: true,
                    }),
                onLeaveBack: (batch) =>
                    gsap.set(batch, { opacity: 0, y: -250, overwrite: true }),
            })
            ScrollTrigger.addEventListener("refreshInit", () =>
                gsap.set(".anim-item-top", { opacity: 1, y: 0 })
            )
        }

        if ($(".anim-item-left").length) {
            gsap.set(".anim-item-left", { opacity: 0, x: -250 })
            ScrollTrigger.batch(".anim-item-left", {
                onEnter: (batch) =>
                    gsap.to(batch, {
                        opacity: 1,
                        x: 0,
                        duration: 0.75,
                        stagger: { each: 0.15, grid: [1, 3] },
                        overwrite: true,
                    }),
                onLeave: (batch) =>
                    gsap.set(batch, { opacity: 0, x: 250, overwrite: true }),
                onEnterBack: (batch) =>
                    gsap.to(batch, {
                        opacity: 1,
                        x: 0,
                        duration: 0.75,
                        stagger: 0.15,
                        overwrite: true,
                    }),
                onLeaveBack: (batch) =>
                    gsap.set(batch, { opacity: 0, x: -250, overwrite: true }),
            })
            ScrollTrigger.addEventListener("refreshInit", () =>
                gsap.set(".anim-item-left", { opacity: 1, x: 0 })
            )
        }

        if ($(".anim-item-right").length) {
            gsap.set(".anim-item-right", { opacity: 0, x: 250 })
            ScrollTrigger.batch(".anim-item-right", {
                onEnter: (batch) =>
                    gsap.to(batch, {
                        opacity: 1,
                        x: 0,
                        duration: 0.75,
                        stagger: { each: 0.15, grid: [1, 3] },
                        overwrite: true,
                    }),
                onLeave: (batch) =>
                    gsap.set(batch, { opacity: 0, x: -250, overwrite: true }),
                onEnterBack: (batch) =>
                    gsap.to(batch, {
                        opacity: 1,
                        x: 0,
                        duration: 0.75,
                        stagger: 0.15,
                        overwrite: true,
                    }),
                onLeaveBack: (batch) =>
                    gsap.set(batch, { opacity: 0, x: 250, overwrite: true }),
            })
            ScrollTrigger.addEventListener("refreshInit", () =>
                gsap.set(".anim-item-right", { opacity: 1, x: 0 })
            )
        }

        if ($(".anim-item-clipRight").length) {
            gsap.set(".anim-item-clipRight", {
                opacity: 0,
                clipPath: "inset(0% 100% 0 0)",
            })
            ScrollTrigger.batch(".anim-item-clipRight", {
                start: "top 75%",
                onEnter: (batch) =>
                    gsap.to(batch, {
                        opacity: 1,
                        clipPath: "inset(0% 0% 0% 0%)",
                        duration: 0.75,
                        stagger: { each: 0.15, grid: [1, 3] },
                        overwrite: true,
                    }),
                onLeave: (batch) =>
                    gsap.set(batch, {
                        opacity: 0,
                        clipPath: "inset(0% 100% 0% 0%)",
                        overwrite: true,
                    }),
                onEnterBack: (batch) =>
                    gsap.to(batch, {
                        opacity: 1,
                        clipPath: "inset(0% 0% 0% 0%)",
                        duration: 0.75,
                        stagger: 0.15,
                        overwrite: true,
                    }),
                onLeaveBack: (batch) =>
                    gsap.set(batch, {
                        opacity: 0,
                        clipPath: "inset(0% 100% 0% 0%)",
                        overwrite: true,
                    }),
            })
            ScrollTrigger.addEventListener("refreshInit", () =>
                gsap.set(".anim-item-clipRight", {
                    opacity: 1,
                    clipPath: "inset(0% 0% 0% 0%)",
                })
            )
        }

        if ($(".anim-item-clipLeft").length) {
            gsap.set(".anim-item-clipLeft", {
                opacity: 0,
                clipPath: "inset(0% 0% 0% 100%)",
            })
            ScrollTrigger.batch(".anim-item-clipLeft", {
                start: "top 75%",
                onEnter: (batch) =>
                    gsap.to(batch, {
                        opacity: 1,
                        clipPath: "inset(0% 0% 0% 0%)",
                        duration: 0.75,
                        stagger: { each: 0.15, grid: [1, 3] },
                        overwrite: true,
                    }),
                onLeave: (batch) =>
                    gsap.set(batch, {
                        opacity: 0,
                        clipPath: "inset(0% 0% 0% 100%)",
                        overwrite: true,
                    }),
                onEnterBack: (batch) =>
                    gsap.to(batch, {
                        opacity: 1,
                        clipPath: "inset(0% 0% 0% 0%)",
                        duration: 0.75,
                        stagger: 0.15,
                        overwrite: true,
                    }),
                onLeaveBack: (batch) =>
                    gsap.set(batch, {
                        opacity: 0,
                        clipPath: "inset(0% 0% 0% 100%)",
                        overwrite: true,
                    }),
            })
            ScrollTrigger.addEventListener("refreshInit", () =>
                gsap.set(".anim-item-clipLeft", {
                    opacity: 1,
                    clipPath: "inset(0% 0% 0% 0%)",
                })
            )
        }

        if ($(".anim-item-clipDown").length) {
            gsap.set(".anim-item-clipDown", {
                opacity: 0,
                clipPath: "inset(0% 0% 100% 0%)",
            })
            ScrollTrigger.batch(".anim-item-clipDown", {
                start: "top 80%",
                //end: "bottom top",
                // markers:true,
                onEnter: (batch) =>
                    gsap.to(batch, {
                        opacity: 1,
                        clipPath: "inset(0% 0% 0% 0%)",
                        duration: 0.75,
                        stagger: { each: 0.15, grid: [1, 3] },
                        overwrite: true,
                    }),
                onLeave: (batch) =>
                    gsap.set(batch, {
                        opacity: 0,
                        clipPath: "inset(0% 0% 100% 0% )",
                        overwrite: true,
                    }),
                onEnterBack: (batch) =>
                    gsap.to(batch, {
                        opacity: 1,
                        clipPath: "inset(0% 0% 0% 0%)",
                        duration: 0.75,
                        stagger: 0.15,
                        overwrite: true,
                    }),
                onLeaveBack: (batch) =>
                    gsap.set(batch, {
                        opacity: 0,
                        clipPath: "inset(0% 0% 100% 0%)",
                        overwrite: true,
                    }),
            })
            ScrollTrigger.addEventListener("refreshInit", () =>
                gsap.set(".anim-item-clipDown", {
                    opacity: 1,
                    clipPath: "inset(0% 0% 0% 0%)",
                })
            )
        }

        if ($(".anim-item-zoomIn").length) {
            gsap.set(".anim-item-zoomIn", { opacity: 0, scale: 1.3 })
            ScrollTrigger.batch(".anim-item-zoomIn", {
                start: "top 75%",
                onEnter: (batch) =>
                    gsap.to(batch, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.75,
                        stagger: { each: 0.15, grid: [1, 3] },
                        overwrite: true,
                    }),
                onLeave: (batch) =>
                    gsap.set(batch, { opacity: 1, scale: 1.3, overwrite: true }),
                onEnterBack: (batch) =>
                    gsap.to(batch, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.75,
                        stagger: 0.15,
                        overwrite: true,
                    }),
                onLeaveBack: (batch) =>
                    gsap.set(batch, { opacity: 1, scale: 1.3, overwrite: true }),
            })
            ScrollTrigger.addEventListener("refreshInit", () =>
                gsap.set(".anim-item-zoomIn", { opacity: 1, scale: 1 })
            )
        }

        if ($(".anim-item-zoomOut").length) {
            gsap.set(".anim-item-zoomOut", { opacity: 0, scale: 0 })
            ScrollTrigger.batch(".anim-item-zoomOut", {
                start: "top 75%",
                //end: "bottom top",
                //markers:true,
                onEnter: (batch) =>
                    gsap.to(batch, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.75,
                        stagger: { each: 0.15, grid: [1, 3] },
                        overwrite: true,
                    }),
                onLeave: (batch) =>
                    gsap.set(batch, { opacity: 1, scale: 0, overwrite: true }),
                onEnterBack: (batch) =>
                    gsap.to(batch, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.75,
                        stagger: 0.15,
                        overwrite: true,
                    }),
                onLeaveBack: (batch) =>
                    gsap.set(batch, { opacity: 1, scale: 0, overwrite: true }),
            })
            ScrollTrigger.addEventListener("refreshInit", () =>
                gsap.set(".anim-item-zoomOut", { opacity: 1, scale: 1 })
            )
        }
    }

    jQuery(document).ready(function () {
        defaultAnimationGsap()
        // sticky_header
        jQuery(function () {
            var shrinkHeader = 2;
            jQuery(window).scroll(function () {
                var scroll = getCurrentScroll();
                if (scroll >= shrinkHeader) {
                    jQuery('header').addClass('sticky');
                } else {
                    jQuery('header').removeClass('sticky');
                }
            });

            function getCurrentScroll() { return window.pageYOffset || document.documentElement.scrollTop; }
        });

        // Responsive_navigation
        jQuery(".menu_btn").click(function () {
            jQuery("body").toggleClass("mobile_menu_active");
            jQuery(".overlay").click(function () {
                jQuery("body").removeClass("mobile_menu_active");
            })
        });

        // Sub_menu
        jQuery(".hdr_menu ul li.menu-item-has-children > a").after("<div class='sub_menu_opener'><i class='fas fa-chevron-down'></i></div>");
        jQuery(".sub_menu_opener").click(function () {
            jQuery('.hdr_menu .sub-menu').slideUp();
            jQuery("body").removeClass("sub_menu_active");
            if (jQuery(this).parent().find(".sub-menu").css('display') == 'none') {
                jQuery(this).parent().find(".sub-menu").slideDown();
                jQuery("body").addClass("sub_menu_active");
            } else {
                jQuery(this).parent().find(".sub-menu").slideUp();
                jQuery("body").removeClass("sub_menu_active");
            }
        });

        jQuery(".sub_menu_opener").click(function () {
            if (jQuery(this).parents(".hdr_menu ul > li").hasClass('sub_menu_open')) {
                jQuery(this).parents(".hdr_menu ul > li").removeClass('sub_menu_open');
            } else {
                jQuery('.hdr_menu ul > li').removeClass("sub_menu_open");
                jQuery(this).parents(".hdr_menu ul > li").addClass("sub_menu_open");
            }
        });

        // show_modal
        // jQuery("#case_study_dtls_modal").modal({})

        // Scroll_top_top
        jQuery(window).on("scroll", function () {
            if (jQuery(this).scrollTop() > 100) {
                jQuery(".scrollup").addClass("active");
            } else {
                jQuery(".scrollup").removeClass("active");
            }
        });

        jQuery(".scrollup").on("click", function () {
            jQuery("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });


    });
    // search
    jQuery('.searchOpen').click(function () {
        jQuery('.header-search-wrap').addClass('open');
        jQuery('.page-overlay').addClass('show');
        jQuery('body').css({ 'overflow-y': 'hidden' });
    });
    jQuery('.searchClose,.page-overlay').click(function () {
        jQuery('.header-search-wrap').removeClass('open');
        jQuery('.page-overlay').removeClass('show');
        jQuery('body').css({ 'overflow-y': 'scroll' });
    });




})(jQuery)

// Countdown
function cdtd() {
    var xmas = new Date("April 03, 2024 01:01:59");
    var now = new Date();
    var timeDiff = xmas.getTime() - now.getTime();
    /*if (timeDiff <= 0) {
        clearTimeout(timer);
        // Run any code needed for countdown completion here
        document.querySelector("#clockdiv").style.display = "none";
        document.querySelector("#saleActive").style.display = "none";
        document.querySelector("#saleEnded").style.display = "block";
    }*/
    var seconds = Math.floor(timeDiff / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    document.getElementById("startHours").innerHTML = hours;
    document.getElementById("startMins").innerHTML = minutes;
    document.getElementById("startSecs").innerHTML = seconds;
    var timer = setTimeout('cdtd()', 1000);
}

cdtd();