
$(function(){
  $(".achieve .keiten li").on("click",function(e){
    num = $(".achieve .keiten li").index(this);
    $(".bg_cover, .popup").addClass("active");
    $(".popup .content").eq(num).addClass("active");
  });

  $(".bg_cover, .popup .btn").on("click",function(e){
    $(".bg_cover, .popup, .popup .content").addClass("fadeout");
    $(".bg_cover, .popup, .popup .content").delay(300).queue(function(){
      $(".bg_cover, .popup, .popup .content").removeClass("active fadeout").dequeue();
    })
           
  })
});

$(window).on("load",function(){
	
});