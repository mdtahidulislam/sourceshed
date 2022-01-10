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
    //$(".doc-index > ul > li > a").each(function(index,item){
        //console.log($(item));
        //console.log($(index)[0]);
        // get each left panelhref val
        //var hrefVal = $(item).attr("href").substring(1);

        /**
         * open current right doc by clicking left panel and
         * close all opened right doc and
        */
         $(".doc-index a").on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            let hrefVal = $(this).attr("href");
            $(".doc-index li").removeClass('active_menu');
            $(this).parent().addClass("active_menu");

            if(!$(hrefVal).parents('.doc-content').hasClass('active')){
                $(hrefVal).parents('.doc-content').addClass('active').siblings().removeClass('active');
            }
            $(hrefVal).addClass('active').siblings().removeClass('active');

            $('html, body').animate({
                scrollTop: $(hrefVal).offset().top - 100
            }, {duration: 100, easing: "linear" });
        });

        $('.doc-content-title').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            $(this).parent().toggleClass('active').siblings().removeClass('active');
        });
        /**
         * toggle right doc by clicking it
        */
  
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
    //});

    // open all doc when clik on reference
    // $(".ref-no").each(function(index,item){
        //console.log($(this).attr("href"));
        $(".ref-no").on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            console.log(this);
            $('#doc-reference').addClass('active');
            let hrefVal = $(this).attr("href");
            $(hrefVal).toggleClass('ref_active').siblings().removeClass('ref_active');
            $('html, body').animate({
                scrollTop: $(hrefVal).offset().top - 100
            }, {duration: 100, easing: "linear" });
            // $(".doc-content").each(function(index, item){
            //     $(this).addClass("active");
            // });
        });
    // });
    /**
     * change subtitle by ckicking tab
    */
    // $(".sourcebook-tab button").each(function(index, item){
    //     $(this).click(function(){
    //         var tabId = $(this).attr("id");
    //         $(".subtitle-wrapper h2").each(function(index, item){
    //             var subtitleAttr = $(this).attr("subtitle-labelledby");
    //             if (tabId === subtitleAttr) {
    //                 $(this).addClass("active").siblings().removeClass("active");
    //             }
    //         });
    //     });
    // });
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
    
    // doc index menu
    $(".doc-index-menubtn span").on("click",function(){
        $(".doc-main-left").addClass("active");
        $(".doc-dropdown ul").addClass("active");
    });
    $(".doc-index-close").on("click",function(){
        $(".doc-main-left").removeClass("active");
    });
    $(".doc-index a").on("click",function(){
        $(".doc-main-left").removeClass("active");
    });

    // show details
    $(".mobile-show").on("click",function(){
        $(this).addClass('show-details').attr("showDetails", "");
    });

    /*================================
        source archive page
    =================================*/
    $(".sa-sidebar-item-title").on("click",function(e){
        e.preventDefault();
        $(this).next().slideToggle();
        $(this).parent().addClass("active").siblings().removeClass("active");
        $(this).parent().siblings().children(".sa-sidebar-item-content").css({"display": "none"});
    });
    $(".sa-sidebar-subitem-title").on("click",function(e){
        e.preventDefault();
        e.stopPropagation();
        // toggle content container
        $(this).next().slideToggle();
        // toggle arrow icon
        $(this).children(".arrow-right").toggleClass("active");
        $(this).children(".arrow-down").toggleClass("active");
    });

    // comment scroll
    $(".comment-scroll-to").on('click', function(e){
        e.preventDefault();
        e.stopPropagation();

        $('html, body').animate({
            scrollTop: $(".sa-comment").offset().top - 100
        }, {duration: 100, easing: "linear" });
    });
    // toggle sa comment form
    $(".sa-comment-btn").on("click", function(){
        $(".sa-comment-form").slideToggle();
    });


})(jQuery);