
$(function(){
  //
  $(".commit_ex h4").nextToggle();

  $('.commit_ex div.toggle').on('click',function() {
		// 移動先となる要素を取得。
		var target = $(".commit_ex h4");    
		// var targetSplit = $(this).attr("href").split('#'),
		// target = $("#"+targetSplit[1]);
    
		if (!target.length) return ;
		// 移動先となる値。
		
		var targetY = target.offset().top - 20 ;		
		  $('html,body').not(":animated").stop().animate({scrollTop: targetY}, 500, function(){			
		});

    $(".commit_ex").removeClass("open");
    $(".commit_ex h4").next().slideUp();

		// デフォルトの処理はキャンセル。
		return false;
	}); 

  // ポップアップ
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