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
                600: {
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
        studies tab carousel
    =================================*/
    $(document).ready(function(){
        $(".studies-active").owlCarousel({
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
    // add active class on left panel item when clicked on
    $(".doc-index ul li").click(function(){
        $(this).addClass("active").siblings().removeClass('active');
    });
    // left panel dropdown
    $(".doc-dropdown > a").click(function(){
        $(".doc-dropdown ul").toggleClass("active");
    });
    /** 
     * add active class to doc index
    */
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
         * toggle right doc by clicking it
        */
        $(`#${hrefVal}`).children(".doc-content-title").click(function(){
            // toggle current doc
            $(`#${hrefVal}`).children(".doc-content-title").parent().toggleClass("active");
            // close others openeddoc
            $(`#${hrefVal}`).siblings().removeClass("active");
            // add active class on left panel
            var divId = $(`#${hrefVal}`).attr("id");
            //console.log(divId);
            if(hrefVal === divId){
                $(item).parent().toggleClass("active").siblings().removeClass("active");
            };
            
        });
        /**
         * close other opend right doc
        */
        // $(`#${hrefVal}`).click(function(){
        //     //$(this).siblings().removeClass("active");
        //     // toggle active class on left panel
        //     var divId = $(`#${hrefVal}`).attr("id");
        //     //console.log(divId);
        //     if(hrefVal === divId){
        //         $(item).parent().toggleClass("active").siblings().removeClass("active");
        //     };
        // });
    });

    // open all doc when clik on reference
    $(".ref-no").each(function(index,item){
        //console.log($(this).attr("href"));
        $(this).click(function(){
            $(".doc-content").each(function(index, item){
                $(this).addClass("active");
            });
        });
    });
    /**
     * change subtitle by ckicking tab
    */
    $(".sourcebook-tab button").each(function(index, item){
        $(this).click(function(){
            var tabId = $(this).attr("id");
            $(".subtitle-wrapper h2").each(function(index, item){
                var subtitleAttr = $(this).attr("subtitle-labelledby");
                if (tabId === subtitleAttr) {
                    $(this).addClass("active").siblings().removeClass("active");
                }
            });
        });
    });
    $(".studies-tab button").each(function(index, item){
        $(this).click(function(){
            var tabTitle = $(this).text();
            $(".studies-tab .subtitle-wrapper h2").text(tabTitle);
        });
    });

    
        var $item = $('.studies-tab button'), //Cache your DOM selector
        visible = 1, //Set the number of items that will be visible
        index = 0, //Starting index
        endIndex = ( $item.length / visible ) - 1;
    $(".scroll-next").click(function(){
        if(index < endIndex ){
            index++;
            $item.animate({'left':'-=200px'});
        }
    });
    $(".scroll-prev").click(function(){
        if(index > 0 ){
            index--;
            $item.animate({'left':'+=200px'});
        }
    });
    
    // responsive tab
    $(".sourcebook-tab .nav-tabs").click(function(){
        $(this).toggleClass("popup");
    });
    $(".studies-tab .nav-tabs").click(function(){
        $(this).toggleClass("popup");
    });

})(jQuery);