/**
 * common js code
 * @authoer znacloud
 *
 */
jQuery.noConflict();
console.log("common.js loaded");
jQuery(function($){
    console.log("document ready");    
    //main area slide  custom event
    $(".main").on("toggleSlide",function(){//toggle slide
        console.log("event toggleSlide");
        var $main = $(this);
        if($main.is(".slide")){
            $main.trigger("slideClose");
        }else{
            $main.trigger("slideOpen");
        }
    }).on("slideOpen",function(){ //slide open
        console.log("event slideOpen");
        $(".main").addClass("slide");
        if($(document).width() > 960){
            $(".page-top").addClass("slide");
        }
        $(".shadow-cover").addClass("transparent");
    }).on("slideClose",function(){ //slide close
        console.log("event slideClose");
        $(".main").removeClass("slide");
        $(".page-top").removeClass("slide");
        $(".shadow-cover").removeClass("transparent");
    });
    
    
    //click avatar
    $(".avatar").click(function(){
        console.log("avatar click");
        $(".main").trigger("toggleSlide");
    });
    
    //click sidebar
    $(".sidebar").click(function(){
      console.log("sidebar click");
      $(".main").trigger("slideClose");
    });

}); 
