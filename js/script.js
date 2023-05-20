$(function(){
    $(".top_to_bottom").click(function(){
        $("html,body").animate({scrollTop:"0"},2000)
    })
    
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop()
        if(scrolling > 200){
            $(".top_to_bottom").fadeIn(500);
        }else{
            $(".top_to_bottom").fadeOut(500);
        }
    })
})
