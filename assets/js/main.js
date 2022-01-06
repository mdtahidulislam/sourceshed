(function ($) {
	"use strict";
    /*================================
        mobile menu
    =================================*/
    // open drawer nav
    $(".header-nav__bar").click(function(){
        $(".drawer-nav").addClass("active");
    });
    // close drawer nav
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
                425: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                1024: {
                    items: 5,
                }
            }
        });
      });
    
    /*================================
        sourcebook inner page
    =================================*/
    // $(".doc-index ul li").each(function(index,item){
    //     if ($(item).attr("class") === "doc-dropdown") {
    //         $(".doc-dropdown > a").attr("href", "javascript:void(0)");
    //     }
    // });
    $(".doc-index ul li").click(function(){
        $(this).addClass("active").siblings().removeClass('active');
    });
    $(".doc-dropdown > a").click(function(){
        $(".doc-dropdown ul").toggleClass("active");
        // $(".doc-dropdown ul li").click(function(){
        //     $(this).parent().addClass("active");
        // });
    });
    /** 
     * add active class to doc index
    */
    // $(".doc-index ul li").click(function(){
    //     $(this).addClass("active").siblings().removeClass('active');
    // });
    $(".doc-detail-btn").click(function(){
        $(this).toggleClass("active");
    });
    $(".doc-index > ul > li > a").each(function(index,item){
        //console.log($(item).attr("href"));
        $(item).click(function(){
            var hrefVal = $(item).attr("href").substring(1);
            console.log(hrefVal);
            // if (hrefVal.includes("#", 0)) {
            //     var divId = hrefVal.substring(1);
            //     if(divId === $(".doc-scrollspy > div").attr("id")){
            //         console.log("yes");
            //     } else{
            //         console.log("no");
            //     };
            // }
            // $(".doc-scrollspy > div").each(function(index, item){
            //     //console.log($(item).attr("id"));
            //     var divId = $(item).attr("id");
            //     //console.log("id-",divId);
            //     if(hrefVal === divId){
            //         console.log("yes");
            //         $(item).scrollTop("100px");
            //     }
            // });
            //$(`#${hrefVal}`).scrollTop(200);
            $(`#${hrefVal}`).addClass("active").siblings().removeClass('active').scrollTop(100);
        });
        var hrefVal = $(item).attr("href").substring(1);
        $(`#${hrefVal}`).click(function(){
            $(this).toggleClass("active");
        });
    });


})(jQuery);