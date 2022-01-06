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
        //console.log($(item));
        //console.log($(index)[0]);
        // get each left panelhref val
        var hrefVal = $(item).attr("href").substring(1);

        /**
         * open current right doc by clicking left panel and
         * close all opened right doc and
        */
        $(item).click(function(){
            $(`#${hrefVal}`).addClass("active").siblings().removeClass('active');
        });
        /**
         * collapse right doc by clicking it
        */
        $(`#${hrefVal}`).children(".doc-content-title").click(function(){
            $(`#${hrefVal}`).children(".doc-content-title").parent().toggleClass("active");
            $(`#${hrefVal}`).children(".collapsible").toggleClass("active");
            
        });
        /**
         * close other opend right doc
        */
        $(`#${hrefVal}`).click(function(){
            $(this).siblings().removeClass("active");
            // toggle active class on left panel
            var divId = $(`#${hrefVal}`).attr("id");
            //console.log(divId);
            if(hrefVal === divId){
                $(item).parent().toggleClass("active").siblings().removeClass("active");
                
            };
        });
        
    });


})(jQuery);