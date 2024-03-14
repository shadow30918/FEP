var winW ,
    scrollTop=$(window).scrollTop(),
    action = false,
    isMobile,
    from_pc = false;



$(window).load(function(){
    $('.how_top_5 .contain').slick({
        mobileFirst: true,
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        responsive: [
            {
              breakpoint: 1080,
              settings: "unslick"
            }
          ]
    });

    // $(".animation_scroll").each(function(){
    //     this_top = $(this).offset().top;
    //     $(this).removeClass("animation_act");
    //     if(scrollTop+$(window).height()>this_top){
    //         $(this).addClass("animation_act");
    //     }
    // })

    if(scrollTop<500){
        console.log(scrollTop)
        setTimeout(function(){
            $("html").animate({
                scrollTop: 0
            }, 300, 'swing');
        },0)
        
    }

    $(".kv_visual .title").addClass("act");
    $(".kv_visual .content").addClass("act");
    

});

$(document).ready(function(){
    init();
    winW = $(window).width();

    $(document).scroll(function(){
        scrollTop = $(window).scrollTop();
        console.log(scrollTop);
    
        $(".animation_scroll").each(function(){
            this_top = $(this).offset().top;
            if(scrollTop+$(window).height()>this_top){
    
                $(this).addClass("animation_act");
    
                if($(this).children(".form").hasClass("show")){
                    this_obj = $(this);
                    setTimeout(function(){
                        this_obj.children(".form.show").addClass("act");
                    },500)
                    
                }
            }
        })
    })

    

    $(".map .city_list li").click(function (){
        sel_data = $(this).attr("sel-data");

        $(".map .map_hover img").attr("src","img/map_hover/map_hover_"+sel_data+".png") ;
        $(".radar img").attr("src","img/radar_"+sel_data+".png") ;

    })

    $(".history .report .btn li").click(function(){
        if(!$(this).hasClass("act")){
            $(".history .report .btn li").removeClass("act");
            $(this).addClass("act");
            index = $(this).index()+1;
            // if( $(window).width() < 1080){
            //     index = index+"_mb"
            // }
            //$(".history .report .form_wrap .form img").attr("src","img/history_form_"+index+".png");
            $(".history .report .form_wrap .form").removeClass("show act");
            $(".history .report .form_wrap .form:nth-child("+index+")").addClass("show");
            setTimeout(function(){
                $(".history .form.show").addClass("act");
            },0)
        }
    })

    $(".data_analysis .report .btn li").click(function(){
        if(!$(this).hasClass("act")){
            $(".data_analysis .report .btn li").removeClass("act");
            $(this).addClass("act");
            index = $(this).index()+1;
            // if( $(window).width() < 1080){
            //     index = index+"_mb"
            // }
            // $(".data_analysis .report .form_wrap .form img").attr("src","img/data_analisis_"+index+".png");
            $(".data_analysis .report .form_wrap .form").removeClass("show act");
            $(".data_analysis .report .form_wrap .form:nth-child("+index+")").addClass("show");
            setTimeout(function(){
                $(".data_analysis .form.show").addClass("act");
            },0)
        }
        
    })

    $(".menu, .menu_list_wrap .close").click(function(){
        if(!$(".menu_list_wrap").hasClass("PC")){
            $(".menu_list_wrap").toggleClass("open");
        }
    })

    $(".menu_list_wrap li").click(function(){
        bias = $("header").height();
        togo = $(this).attr("togo");

        $("html").animate({
			scrollTop: $("#"+togo).offset().top - bias
        }, 1000, 'swing');
        
        if(!$(".menu_list_wrap").hasClass("PC")){
            $(".menu_list_wrap").toggleClass("open");
        }
    })

    $(".logo").click(function(){
        $("html").animate({
			scrollTop: $("#to_go_0").offset().top
        }, 1000, 'swing');
    })

    // $(".cta").click(function(){
    //     $("html").animate({
	// 		scrollTop: $(".form").offset().top
    //     }, 1000, 'swing');
    // })

    // $(".product_slider_wrap .mask").click(function(){
    //     $(".product_slider_wrap").hide();
    //     $('.product_slider').slick('unslick');
    // })

    // $(".p_dtl").click(function(){

    //     index = $(this).attr("index");

    //     img_type = (isMobile)?"_mb":"";

    //     $(".product_slider").html("");

    //     for (let i = 0; i < 3; i++) {
        
    //         $(".product_slider").append('<li class="P_slider_0'+index+'"><img src="img/product_0'+index+'_slider'+img_type+'.png"></li>')
            
    //         if(index<3){
    //             index++;
    //         }else{
    //             index = 1;
    //         }
    //     }
        
    //     $(".product_slider_wrap").show();

    //     $('.product_slider').slick({
    //         arrows: true,
    //         //dots: true,
    //         infinite: true,
    //         slidesToShow: 1,
    //         prevArrow: ".left",
    //         nextArrow: ".right",
    //         autoplay: true,
    //         autoplaySpeed: 7000
    //     });
    // })




    $(window).resize(function(){
        init();

        if( $(window).width()>1080){
            $('.how_top_5 .contain').slick('unslick');
        }else{
            $('.how_top_5 .contain').slick("init",{
                mobileFirst: true,
                arrows: false,
                dots: true,
                infinite: true,
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 7000
            });
        }
        
    })

    // $(window).load(function(){
    //     $(".first").addClass("act");
    //     $(".title2, .title").addClass("act");
    // })
});



function init() {

    if( $(window).width() < 1062 ) {
        $(".menu_list_wrap").removeClass("PC");
        isMobile = true;
    }else{
        $(".menu_list_wrap").addClass("PC");
        isMobile = false;
        from_pc = true;
    }

    // if($(".product_slider_wrap").css("display")=="block"){
    //     $(".product_slider_wrap").hide();
    //     $('.product_slider').slick('unslick');
    // }
    

    var count = $(".img_init").length;

    $(".img_init").each(function(i){

        if(!isMobile){

            srcArray = $(this).attr("src").split(".");

            $(this).attr("src",srcArray[0].replace("_mb","")+"."+srcArray[1]);

        }else if(from_pc){

            srcArray = $(this).attr("src").split(".");

            $(this).attr("src",srcArray[0].replace("_mb","")+"_mb."+srcArray[1]);

        }

        if(i===count-1){
            console.log("F");
            $(".loading").remove();
            action = true;
        }
    })
}