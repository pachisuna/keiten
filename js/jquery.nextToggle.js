(function($){
	$.fn.nextToggle = function(options){
		// デフォルト値とオプションの引き渡し。
		var defaults = {
			openFlag: false,
			addFunction: 0,
			endFunction: 0,
			activeLetter: "_active", //アクティブ（開いてる）状態のimgのファイル名に含まれる文字。
			inactiveLetter: "_inactive", //imgのファイル名に含まれる文字。
			toggleElement: "" //トグルする対象指定。デフォルトは $(this).next()。
        },
		opts = $.extend(defaults, options);
			
		
		this.each(function(){
			var thisElement = $(this),
			toggleElement = "";
			if(opts.toggleElement){ toggleElement = $(opts.toggleElement); }
			else{ toggleElement = $(this).next();}
			
			if(!opts.openFlag){
				//if($(this).children("img").length){
				//	$(this).children("img").attr("src",thisElement.children("img").attr('src').replace(opts.activeLetter, opts.inactiveLetter));
				//}
				toggleElement.hide();
			}			
			
			thisElement.click(function(){
				toggleElement.not(":animated").slideToggle(500,function(){
					
					// 同時に動かしたいアクション追加。
					if(opts.addFunction){
						opts.addFunction();
					}
					
					if($(this).css("display") == "none"){						
						thisElement.parent().removeClass("open");
						//if(thisElement.children("img").length){
						//	thisElement.children("img").attr("src",thisElement.children("img").attr('src').replace(opts.activeLetter, opts.inactiveLetter));
						//}						
					}else{
						thisElement.parent().addClass("open");
						//if(thisElement.children("img").length){
						//	thisElement.children("img").attr("src",thisElement.children("img").attr('src').replace(opts.inactiveLetter, opts.activeLetter));
						//}			
					}
					
					// ここにアクション追加するとトグル後で動作する。
					if(opts.endFunction){
						opts.endFunction();
					}
				});
			});
		});
		// ここでは"this"はすでにjQueryオブジェクト（以下略）。
	};
	
	// ページ内移動先をnextToggle()していた場合、移動時に開くようtargにnextToggle()をプラグインした要素を指定（必須）。
	$.fn.anchorNextOpen = function(targ){
		this.each(function(){
			if(targ){
				$(this).click(function(){
					if($(targ).next().css("display")=="none"){
						$(targ).next().slideDown(function(){
							//if($(targ).children("img").length){
							//	$(targ).children("img").attr("src", $(targ).children("img").attr('src').replace('_off', '_on'))
							//}
							
						});
					}
				});
			}
		});		
	};
	
	// クリック時に内容閉じてアコーディオン用の画像も変更。
	$.fn.slideUpParentChange = function(options){
		// デフォルト値とオプションの引き渡し。
		var defaults = {
			addFunction: 0,
			activeLetter: "_active", //アクティブ（開いてる）状態のimgのファイル名に含まれる文字。
			inactiveLetter: "_inactive" //imgのファイル名に含まれる文字。
        },
		opts = $.extend(defaults, options);
		
		
		this.each(function(){
			$(this).click(function(){
				var prevElement = $(this).parent().prev();
				$(this).parent().not(":animated").slideUp(500, function(){
					prevElement.removeClass("open");
					if(prevElement.children("img").length){
						prevElement.children("img").attr("src", prevElement.children("img").attr('src').replace(opts.activeLetter, opts.inactiveLetter));
					}
				});
			});
		});
	};
})(jQuery);