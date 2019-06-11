/*
    2014.06 ~
    author :  an.hyo-ju ( anoju@cntt.co.kr ) in CNTT
*/

$(function(){ 
	pageTitle();
	headActive();
	formStyle();
	layerHide();
	tapMotion();
	topBtn();
	etcCtrl();
	menuPop();
	orderBox();

	//placeholder
	$(":input[placeholder]").placeholder();

	$('a[href=#none]').click(function(){
		return false;
	});
});


/* page title */
function pageTitle(){
	var titTxt = $('#page_tit').text();

	if($('#page_tit').size() > 0){
		document.title = titTxt + ' | ' + '페리카나';
	}
}


/*lnb*/
function headActive(){
	//gnb
	var $header = $('#header');
	var gnbTxt = $('#gnb a');
	var lnbTxt = $('#lnb a');
	var gnbLink = $('#gnb .insub');
	var depth2 = $('#gnb > ul > li > ul');
	var gnbCurrent = $('#lnb h1').text();
	var lnbCurrent = $('#location strong').text();

	// gnb active
	gnbTxt.each(function() {
		 if ( $(this).text() == gnbCurrent) {
			$(this).parents('li').addClass('active');
		}
	});

	// lnb active
	lnbTxt.each(function() {
		 if ( $(this).text() == lnbCurrent) {
			$(this).parents('li').addClass('active');
		}
	});

	//gnb in
    gnbLink.on('mouseenter focus',function() {
		if (!$('.bg_gnb').hasClass('on')){
			$('.bg_gnb').addClass('on');
			$('.bg_gnb').stop().slideDown(300);
		}

		depth2.removeClass('on');
		$(this).next('ul').addClass('on').find('a').stop().css({top:-39}).animate({top:0},300,function(){
			$(this).removeAttr('style')
		});
    });

	//gnb out
    $header.on('mouseleave',function() {
       depth2.removeClass('on');
	   $('.bg_gnb').removeClass('on').stop().slideUp(300);
    });

	$('#header a').blur(function() {
		setTimeout(function(){
			if( !$('#header a').is(':focus') ) {
				depth2.removeClass('on');				
				$('.bg_gnb').removeClass('on').stop().slideUp(300);
			}
		},10);
    });
}


/*폼요소*/
function formStyle(){
	//checkbox, radio
	$('label .checkbox, label .radio').focus(function(){
		$(this).parent().addClass('hover');
	}).blur(function(){
		$(this).parent().removeClass('hover');
	});

	//spinner
	if($('.spinner').size() > 0){
		$( '.spinner' ).spinner({
			min: 1,
			max: 9,
			create: function( event, ui ) {
				//add custom classes and icons
				$(this)
				.next().html('더하기')
				.next().html('빼기')
			}
		});
	}

	//inputFile
	$('.input_file > input').click(function(){
		$('.btn_file input').trigger('click');
	});
	$('.input_file > input').focus(function(){
		$('.btn_file input').trigger('click');
	});	
	$('.btn_file .btn').click(function(e){
		e.preventDefault();
		$('.btn_file input').trigger('click');
	});	
	$('.btn_file input').change(function(){
		$('.input_file > input').val($(this).val());
	});

	if($('.datepicker').size() > 0){
		$( '.datepicker' ).datepicker({
			closeText: '닫기',
			prevText: '이전달',
			nextText: '다음달',
			currentText: '오늘',
			monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
			dayNamesMin: ['일','월','화','수','목','금','토'],
			dateFormat: 'yy-mm-dd',
			showMonthAfterYear: true,
			showOn: 'button',
			buttonText: '기간조회'
		});
	}
}


/* TOP 버튼 */
function topBtn() {
    var settings = {
            button      : '#toTop',
            text        : '컨텐츠 상단으로 이동',
            min         : 100,
            fadeIn      : 400,
            fadeOut     : 400,
            scrollSpeed : 800,
            easingType  : 'easeInOutExpo'
        },
        oldiOS     = false,
        oldAndroid = false;

    if( /(iPhone|iPod|iPad)\sOS\s[0-4][_\d]+/i.test(navigator.userAgent) ) { oldiOS = true; }
    if( /Android\s+([0-2][\.\d]+)/i.test(navigator.userAgent) ) { oldAndroid = true; }
    $('body').append('<a href="#" id="' + settings.button.substring(1) + '" title="' + settings.text + '">' + settings.text + '</a>');
    $( settings.button ).on('click', function( e ){
        $('html, body').animate({ scrollTop : 0 }, settings.scrollSpeed, settings.easingType );
        e.preventDefault();
    })
    .on('mouseenter', function() {
        $( settings.button ).addClass('hover');
    })
    .on('mouseleave', function() {
        $( settings.button ).removeClass('hover');
    });

    $(window).scroll(function() {
        var position = $(window).scrollTop();
        if( oldiOS || oldAndroid ) {
            $( settings.button ).css({
                'position' : 'absolute',
                'top'      : position + $(window).height()
            });
        }
        if ( position > settings.min ) { $( settings.button ).fadeIn( settings.fadeIn );  }
        else { $( settings.button ).fadeOut( settings.fadeOut );  }
    });
}

/* Tap */
function tapMotion(){	
	$('.tabMotion a').click(function() {
		var href = $(this).attr('href');		
		$(href).show().siblings('.tab_cont').hide();
		$(this).parent().addClass('on').siblings().removeClass('on');
		return false;
    });

	if($('.tabMotion').size() > 0){
		$('.tabMotion').each(function() {
			$(this).children('li').eq(0).children('a').trigger('click');	
		}); 		
	}
}

/*레이어 팝업*/
function layerShow(tar) {
	var vCont = tar;
	var bodyH =  ($('body').scrollTop() == 0) ? $('html').scrollTop() : $('body').scrollTop();
	$('.bgLayer').fadeTo('fast', 0.6, function() {
		$(vCont).css({'top':bodyH + 50}).slideDown(300, function() {
		   $(this).attr('tabIndex',0).focus();
		});		
	});
}

function layerHide(){
	$('.pop_close').click(function() {
		$('.bgLayer').fadeOut('fast');
		$('.pop_layer').slideUp(300,function(){
			$(this).removeAttr('tabindex')
		});
		return false;
	});
}

function etcCtrl(){
	
	//faq
	$('.faq_list li p a').click(function() {
		$(this).parent().next('div').slideToggle(300).parent().toggleClass('on').siblings('li').removeClass('on').children('div').slideUp(300);
		return false;
	});

	//table hover
	$('.tbl_hover tbody th, .tbl_hover tbody td').hover(function() {
		$(this).parent('tr').addClass('hover').siblings('tr').removeClass('hover');
	},function(){
		$('.tbl_hover tr').removeClass('hover')
	});

	//인쇄
	$('.btn_print').click(function() {
		window.print();
		return false;
	});

	//로고
	$(window).load(function(){
		$('#logo a').animate({'width':164,'margin-top':'0px'},1000,'easeOutBounce');
	});
}

function menuPop(){
	$('.menu_pop li a').click(function(){
		var href = $(this).attr('href');
		$(href).show().siblings('div').hide();
		layerShow('#popMenu');
		return false;
	})
}
/*
function orderBox(){
	if($('.order_box').size() > 0){
		var tip = $('.order_box').offset().top;
		$(window).scroll(function(){
			var top = $(this).scrollTop();
			$('.order_box').stop().animate({'top':top < tip? 0 : top -tip})
		});
	}
}
*/

function orderBox(){
	var a=$('.order_box');
	var w=$('.order_menu table');
	if(a.size()>0){		
		$(window).load(function(){
			var b=a.outerHeight();
			var f=a.offset().top;			
			var d=w.outerHeight();
			var g=w.offset().top;
			var e=d+g-b;
			$(window).scroll(function(){
				var c=$(this).scrollTop();
				//console.log(c,e)
				a.stop().animate({top:c<f?0:c>e?d-b:c-f+10});
			});
		});
	}
};
	

