(function ($) {
	"use strict";
    /*================================
        mobile menu
    =================================*/
    $(".header-nav__bar").click(function(){
        $(".drawer-nav").addClass("active");
    });
    $(".menu-close").click(function(){
        $(".drawer-nav").removeClass("active");
    });
    $(".drawer-topmenu > a").each(function(index, item) {
        $(this).click(function(){
            $(this).parent().toggleClass("active");
        });
    });
    $(".drawer-topmenu > a").each(function(index, item){
        $(item).click(function() {
            $(item).next().toggle();
        });
    });

    /*================================
        sourcebook tab carousel
    =================================*/
    $(document).ready(function(){
        $(".sourcebook-active").owlCarousel({
            margin: 15,
            dots: false,
            loop: true,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 5,
                }
            }
        });
      });
    
    /*================================
        sourcebook inner page
    =================================*/
    $(".doc-index ul li").each(function(index,item){
        if ($(item).attr("class") === "doc-dropdown") {
            $(".doc-dropdown > a").attr("href", "javascript:void(0)");
        }
        // var hrefVal = $(item).children("a.doc-index-item").attr("href");
        // if (typeof(hrefVal) === "string") {
        //     var itemId = hrefVal.substring(1);
        //     $(item).click(function(){
        //         $(`.doc-scrollspy #${itemId}`).css("padding-top", "100px");
        //     });
        // }
    });
    $(".doc-dropdown").click(function(){
        $(".doc-dropdown ul").toggle();
    });



})(jQuery);