
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});

/* jQuery easing 1.3 */
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d)},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b}});

/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

/**
 * BxSlider v4.1.1 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2012, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:v()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:50,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).is("img")&&t(this).attr("src",t(this).attr("src")+"?timestamp="+(new Date).getTime()),t(this).load(function(){setTimeout(function(){++n==s&&i()},0)})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(p()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",B),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&I(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},p=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},v=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.delegate("a","click",q)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.delegate(".bx-start","click",k),o.controls.autoEl.delegate(".bx-stop","click",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},q=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},I=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),"horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0)}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},B=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider())};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&I(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",51).fadeIn(o.settings.speed,function(){t(this).css("zIndex",50),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",p()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),I(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",B))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);


// jQuery Hover Delay 1.1.0 (20130401)
// By John Terenzio | http://terenz.io/ | MIT License
(function(b){var e=b.fn.hover,d=function(a,d,e){return this.each(function(){var c;b(this).on("mouseenter mouseleave",function(b){var f=this,g="mouseenter"===b.type?a:d;c=c?window.clearTimeout(c):window.setTimeout(function(){c=void 0;g.call(f,b)},e)})})};b.fn.hover=function(){var a=Array.prototype.slice.call(arguments);return 3===a.length&&"number"===typeof a[2]?d.apply(this,a):2===a.length&&"number"===typeof a[1]?d.call(this,a[0],a[0],a[1]):e.apply(this,a)}})(window.jQuery);


/*
 * Purl (A JavaScript URL parser) v2.3.1
 * Developed and maintanined by Mark Perkins, mark@allmarkedup.com
 * Source repository: https://github.com/allmarkedup/jQuery-URL-Parser
 * Licensed under an MIT-style license. See https://github.com/allmarkedup/jQuery-URL-Parser/blob/master/LICENSE for details.
 */


;(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        window.purl = factory();
    }
})(function() {


    var tag2attr = {
            a       : 'href',
            img     : 'src',
            form    : 'action',
            base    : 'href',
            script  : 'src',
            iframe  : 'src',
            link    : 'href'
        },


        key = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'fragment'], // keys available to query


        aliases = { 'anchor' : 'fragment' }, // aliases for backwards compatability


        parser = {
            strict : /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,  //less intuitive, more accurate to the specs
            loose :  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/ // more intuitive, fails on relative paths and deviates from specs
        },


        isint = /^[0-9]+$/;


    function parseUri( url, strictMode ) {
        var str = decodeURI( url ),
        res   = parser[ strictMode || false ? 'strict' : 'loose' ].exec( str ),
        uri = { attr : {}, param : {}, seg : {} },
        i   = 14;


        while ( i-- ) {
            uri.attr[ key[i] ] = res[i] || '';
        }


        // build query and fragment parameters
        uri.param['query'] = parseString(uri.attr['query']);
        uri.param['fragment'] = parseString(uri.attr['fragment']);


        // split path and fragement into segments
        uri.seg['path'] = uri.attr.path.replace(/^\/+|\/+$/g,'').split('/');
        uri.seg['fragment'] = uri.attr.fragment.replace(/^\/+|\/+$/g,'').split('/');


        // compile a 'base' domain attribute
        uri.attr['base'] = uri.attr.host ? (uri.attr.protocol ?  uri.attr.protocol+'://'+uri.attr.host : uri.attr.host) + (uri.attr.port ? ':'+uri.attr.port : '') : '';


        return uri;
    }


    function getAttrName( elm ) {
        var tn = elm.tagName;
        if ( typeof tn !== 'undefined' ) return tag2attr[tn.toLowerCase()];
        return tn;
    }


    function promote(parent, key) {
        if (parent[key].length === 0) return parent[key] = {};
        var t = {};
        for (var i in parent[key]) t[i] = parent[key][i];
        parent[key] = t;
        return t;
    }


    function parse(parts, parent, key, val) {
        var part = parts.shift();
        if (!part) {
            if (isArray(parent[key])) {
                parent[key].push(val);
            } else if ('object' == typeof parent[key]) {
                parent[key] = val;
            } else if ('undefined' == typeof parent[key]) {
                parent[key] = val;
            } else {
                parent[key] = [parent[key], val];
            }
        } else {
            var obj = parent[key] = parent[key] || [];
            if (']' == part) {
                if (isArray(obj)) {
                    if ('' !== val) obj.push(val);
                } else if ('object' == typeof obj) {
                    obj[keys(obj).length] = val;
                } else {
                    obj = parent[key] = [parent[key], val];
                }
            } else if (~part.indexOf(']')) {
                part = part.substr(0, part.length - 1);
                if (!isint.test(part) && isArray(obj)) obj = promote(parent, key);
                parse(parts, obj, part, val);
                // key
            } else {
                if (!isint.test(part) && isArray(obj)) obj = promote(parent, key);
                parse(parts, obj, part, val);
            }
        }
    }


    function merge(parent, key, val) {
        if (~key.indexOf(']')) {
            var parts = key.split('[');
            parse(parts, parent, 'base', val);
        } else {
            if (!isint.test(key) && isArray(parent.base)) {
                var t = {};
                for (var k in parent.base) t[k] = parent.base[k];
                parent.base = t;
            }
            if (key !== '') {
                set(parent.base, key, val);
            }
        }
        return parent;
    }


    function parseString(str) {
        return reduce(String(str).split(/&|;/), function(ret, pair) {
            try {
                pair = decodeURIComponent(pair.replace(/\+/g, ' '));
            } catch(e) {
                // ignore
            }
            var eql = pair.indexOf('='),
                brace = lastBraceInKey(pair),
                key = pair.substr(0, brace || eql),
                val = pair.substr(brace || eql, pair.length);


            val = val.substr(val.indexOf('=') + 1, val.length);


            if (key === '') {
                key = pair;
                val = '';
            }


            return merge(ret, key, val);
        }, { base: {} }).base;
    }


    function set(obj, key, val) {
        var v = obj[key];
        if (typeof v === 'undefined') {
            obj[key] = val;
        } else if (isArray(v)) {
            v.push(val);
        } else {
            obj[key] = [v, val];
        }
    }


    function lastBraceInKey(str) {
        var len = str.length,
            brace,
            c;
        for (var i = 0; i < len; ++i) {
            c = str[i];
            if (']' == c) brace = false;
            if ('[' == c) brace = true;
            if ('=' == c && !brace) return i;
        }
    }


    function reduce(obj, accumulator){
        var i = 0,
            l = obj.length >> 0,
            curr = arguments[2];
        while (i < l) {
            if (i in obj) curr = accumulator.call(undefined, curr, obj[i], i, obj);
            ++i;
        }
        return curr;
    }


    function isArray(vArg) {
        return Object.prototype.toString.call(vArg) === "[object Array]";
    }


    function keys(obj) {
        var key_array = [];
        for ( var prop in obj ) {
            if ( obj.hasOwnProperty(prop) ) key_array.push(prop);
        }
        return key_array;
    }


    function purl( url, strictMode ) {
        if ( arguments.length === 1 && url === true ) {
            strictMode = true;
            url = undefined;
        }
        strictMode = strictMode || false;
        url = url || window.location.toString();


        return {


            data : parseUri(url, strictMode),


            // get various attributes from the URI
            attr : function( attr ) {
                attr = aliases[attr] || attr;
                return typeof attr !== 'undefined' ? this.data.attr[attr] : this.data.attr;
            },


            // return query string parameters
            param : function( param ) {
                return typeof param !== 'undefined' ? this.data.param.query[param] : this.data.param.query;
            },


            // return fragment parameters
            fparam : function( param ) {
                return typeof param !== 'undefined' ? this.data.param.fragment[param] : this.data.param.fragment;
            },


            // return path segments
            segment : function( seg ) {
                if ( typeof seg === 'undefined' ) {
                    return this.data.seg.path;
                } else {
                    seg = seg < 0 ? this.data.seg.path.length + seg : seg - 1; // negative segments count from the end
                    return this.data.seg.path[seg];
                }
            },


            // return fragment segments
            fsegment : function( seg ) {
                if ( typeof seg === 'undefined' ) {
                    return this.data.seg.fragment;
                } else {
                    seg = seg < 0 ? this.data.seg.fragment.length + seg : seg - 1; // negative segments count from the end
                    return this.data.seg.fragment[seg];
                }
            }


        };


    }

    purl.jQuery = function($){
        if ($ != null) {
            $.fn.url = function( strictMode ) {
                var url = '';
                if ( this.length ) {
                    url = $(this).attr( getAttrName(this[0]) ) || '';
                }
                return purl( url, strictMode );
            };


            $.url = purl;
        }
    };


    purl.jQuery(window.jQuery);


    return purl;


});


/*
 *  셀렉트 박스 디자인
 *  jQuery selectBox - A cosmetic, styleable replacement for SELECT elements
 *  Copyright 2012 Cory LaViska for A Beautiful Site, LLC.
 *  https://github.com/claviska/jquery-selectBox
 *  Licensed under both the MIT license and the GNU GPLv2 (same as jQuery: http://jquery.org/license)
 */
if (jQuery)(function($) {
    $.extend($.fn, {
        selectBox: function(method, data) {
            var typeTimer, typeSearch = '',
                isMac = navigator.platform.match(/mac/i);
            //
            // Private methods
            //
            var init = function(select, data) {
                    var options;
                    // Disable for iOS devices (their native controls are more suitable for a touch device)
                    if (navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i)) return false;
                    // Element must be a select control
                    if (select.tagName.toLowerCase() !== 'select') return false;
                    select = $(select);
                    if (select.data('selectBox-control')) return false;
                    var control = $('<a href="#" class="selectBox" />'),
                        inline = select.attr('multiple') || parseInt(select.attr('size')) > 1;
                    var settings = data || {};
                    control.width(select.outerWidth()).addClass(select.attr('class')).attr('title', select.attr('title') || '').css('display', 'inline-block').bind('focus.selectBox', function() {
                        if (this !== document.activeElement && document.body !== document.activeElement) $(document.activeElement).blur();
                        if (control.hasClass('selectBox-active')) return;
                        control.addClass('selectBox-active');
                        select.trigger('focus');
                    }).bind('blur.selectBox', function() {
                        if (!control.hasClass('selectBox-active')) return;
                        control.removeClass('selectBox-active');
                        select.trigger('blur');
                    });
                    if (!$(window).data('selectBox-bindings')) {
                        $(window).data('selectBox-bindings', true).bind('scroll.selectBox', hideMenus).bind('resize.selectBox', hideMenus);
                    }
                    if (select.attr('disabled')) control.addClass('selectBox-disabled');
                    // Focus on control when label is clicked
                    select.bind('click.selectBox', function(event) {
                        control.focus();
                        event.preventDefault();
                    });
                    // Generate control
                    if (inline) {
                        //
                        // Inline controls
                        //
                        options = getOptions(select, 'inline');
                        control.append(options).data('selectBox-options', options).addClass('selectBox-inline selectBox-menuShowing').bind('keydown.selectBox', function(event) {
                            handleKeyDown(select, event);
                        }).bind('keypress.selectBox', function(event) {
                            handleKeyPress(select, event);
                        }).bind('mousedown.selectBox', function(event) {
                            if ($(event.target).is('A.selectBox-inline')) event.preventDefault();
                            if (!control.hasClass('selectBox-focus')) control.focus();
                        }).insertAfter(select);
                        // Auto-height based on size attribute
                        if (!select[0].style.height) {
                            var size = select.attr('size') ? parseInt(select.attr('size')) : 5;
                            // Draw a dummy control off-screen, measure, and remove it
                            var tmp = control.clone().removeAttr('id').css({
                                position: 'absolute',
                                top: '-9999em'
                            }).show().appendTo('body');
                            tmp.find('.selectBox-options').html('<li><a>\u00A0</a></li>');
                            var optionHeight = parseInt(tmp.find('.selectBox-options A:first').html('&nbsp;').outerHeight());
                            tmp.remove();
                            control.height(optionHeight * size);
                        }
                        disableSelection(control);
                    } else {
                        //
                        // Dropdown controls
                        //
                        var label = $('<span class="selectBox-label" />'),
                            arrow = $('<span class="selectBox-arrow" />');
                        // Update label
                        label.attr('class', getLabelClass(select)).text(getLabelText(select));
                        options = getOptions(select, 'dropdown');
                        options.appendTo('BODY');
                        control.data('selectBox-options', options).addClass('selectBox-dropdown').append(label).append(arrow).bind('mousedown.selectBox', function(event) {
                            if (control.hasClass('selectBox-menuShowing')) {
                                hideMenus();
                            } else {
                                event.stopPropagation();
                                // Webkit fix to prevent premature selection of options
                                options.data('selectBox-down-at-x', event.screenX).data('selectBox-down-at-y', event.screenY);
                                showMenu(select);
                            }
                        }).bind('keydown.selectBox', function(event) {
                            handleKeyDown(select, event);
                        }).bind('keypress.selectBox', function(event) {
                            handleKeyPress(select, event);
                        }).bind('open.selectBox', function(event, triggerData) {
                            if (triggerData && triggerData._selectBox === true) return;
                            showMenu(select);
                        }).bind('close.selectBox', function(event, triggerData) {
                            if (triggerData && triggerData._selectBox === true) return;
                            hideMenus();
                        }).insertAfter(select);
                        // Set label width
                        var labelWidth = control.width() - arrow.outerWidth() - parseInt(label.css('paddingLeft')) - parseInt(label.css('paddingLeft'));
                        label.width(labelWidth);
                        disableSelection(control);
                    }
                    // Store data for later use and show the control
                    select.addClass('selectBox').data('selectBox-control', control).data('selectBox-settings', settings).hide();
                };
            var getOptions = function(select, type) {
                    var options;
                    // Private function to handle recursion in the getOptions function.
                    var _getOptions = function(select, options) {
                            // Loop through the set in order of element children.
                            select.children('OPTION, OPTGROUP').each(function() {
                                // If the element is an option, add it to the list.
                                if ($(this).is('OPTION')) {
                                    // Check for a value in the option found.
                                    if ($(this).length > 0) {
                                        // Create an option form the found element.
                                        generateOptions($(this), options);
                                    } else {
                                        // No option information found, so add an empty.
                                        options.append('<li>\u00A0</li>');
                                    }
                                } else {
                                    // If the element is an option group, add the group and call this function on it.
                                    var optgroup = $('<li class="selectBox-optgroup" />');
                                    optgroup.text($(this).attr('label'));
                                    options.append(optgroup);
                                    options = _getOptions($(this), options);
                                }
                            });
                            // Return the built strin
                            return options;
                        };
                    switch (type) {
                    case 'inline':
                        options = $('<ul class="selectBox-options" />');
                        options = _getOptions(select, options);
                        options.find('A').bind('mouseover.selectBox', function(event) {
                            addHover(select, $(this).parent());
                        }).bind('mouseout.selectBox', function(event) {
                            removeHover(select, $(this).parent());
                        }).bind('mousedown.selectBox', function(event) {
                            event.preventDefault(); // Prevent options from being "dragged"
                            if (!select.selectBox('control').hasClass('selectBox-active')) select.selectBox('control').focus();
                        }).bind('mouseup.selectBox', function(event) {
                            hideMenus();
                            selectOption(select, $(this).parent(), event);
                        });
                        disableSelection(options);
                        return options;
                    case 'dropdown':
                        options = $('<ul class="selectBox-dropdown-menu selectBox-options" />');
                        options = _getOptions(select, options);
                        options.data('selectBox-select', select).css('display', 'none').appendTo('BODY').find('A').bind('mousedown.selectBox', function(event) {							
                            event.preventDefault(); // Prevent options from being "dragged"
                            if (event.screenX === options.data('selectBox-down-at-x') && event.screenY === options.data('selectBox-down-at-y')) {
                                options.removeData('selectBox-down-at-x').removeData('selectBox-down-at-y');
                                hideMenus();
                            }
                        }).bind('mouseup.selectBox', function(event) {	
							/*
							//console.log( event.screenX , options.data('selectBox-down-at-x')  )
                            if (event.screenX === options.data('selectBox-down-at-x') && event.screenY === options.data('selectBox-down-at-y')) {
								//console.log( event.screenX , options.data('selectBox-down-at-x') )
                                return;
                            } else {
                                options.removeData('selectBox-down-at-x').removeData('selectBox-down-at-y');
                            }
							*/
                            selectOption(select, $(this).parent());
                            hideMenus();
                        }).bind('mouseover.selectBox', function(event) {
                            addHover(select, $(this).parent());
                        }).bind('mouseout.selectBox', function(event) {
                            removeHover(select, $(this).parent());
                        });
                        // Inherit classes for dropdown menu
                        var classes = select.attr('class') || '';
                        if (classes !== '') {
                            classes = classes.split(' ');
                            for (var i in classes) options.addClass(classes[i] + '-selectBox-dropdown-menu');
                        }
                        disableSelection(options);
                        return options;
                    }
                };
            var getLabelClass = function(select) {
                    var selected = $(select).find('OPTION:selected');
                    return ('selectBox-label ' + (selected.attr('class') || '')).replace(/\s+$/, '');
                };
            var getLabelText = function(select) {
                    var selected = $(select).find('OPTION:selected');					
                    return selected.text() || '\u00A0';
                };
            var setLabel = function(select) {
                    select = $(select);
                    var control = select.data('selectBox-control');
                    if (!control) return;
                    control.find('.selectBox-label').attr('class', getLabelClass(select)).text(getLabelText(select));
                };
            var destroy = function(select) {
                    select = $(select);
                    var control = select.data('selectBox-control');
                    if (!control) return;
                    var options = control.data('selectBox-options');
                    options.remove();
                    control.remove();
                    select.removeClass('selectBox').removeData('selectBox-control').data('selectBox-control', null).removeData('selectBox-settings').data('selectBox-settings', null).show();
                };
            var refresh = function(select) {
                    select = $(select);
                    select.selectBox('options', select.html());
                };
            var showMenu = function(select) {
                    select = $(select);
                    var control = select.data('selectBox-control'),
                        settings = select.data('selectBox-settings'),
                        options = control.data('selectBox-options');
                    if (control.hasClass('selectBox-disabled')) return false;
                    hideMenus();
                    var borderBottomWidth = isNaN(control.css('borderBottomWidth')) ? 0 : parseInt(control.css('borderBottomWidth'));
                    // Menu position
                    options.width(control.innerWidth()).css({
                        top: control.offset().top + control.outerHeight() - borderBottomWidth,
                        left: control.offset().left
                    });
                    if (select.triggerHandler('beforeopen')) return false;
                    var dispatchOpenEvent = function() {
                            select.triggerHandler('open', {
                                _selectBox: true
                            });
                        };
                    // Show menu
                    switch (settings.menuTransition) {
                    case 'fade':
                        options.fadeIn(settings.menuSpeed, dispatchOpenEvent);
                        break;
                    case 'slide':
                        options.slideDown(settings.menuSpeed, dispatchOpenEvent);
                        break;
                    default:
                        options.show(settings.menuSpeed, dispatchOpenEvent);
                        break;
                    }
                    if (!settings.menuSpeed) dispatchOpenEvent();
                    // Center on selected option
                    var li = options.find('.selectBox-selected:first');
                    keepOptionInView(select, li, true);
                    addHover(select, li);
                    control.addClass('selectBox-menuShowing');
                    $(document).bind('mousedown.selectBox', function(event) {
                        if ($(event.target).parents().andSelf().hasClass('selectBox-options')) return;
                        hideMenus();
                    });
                };
            var hideMenus = function() {
                    if ($(".selectBox-dropdown-menu:visible").length === 0) return;
                    $(document).unbind('mousedown.selectBox');
                    $(".selectBox-dropdown-menu").each(function() {
                        var options = $(this),
                            select = options.data('selectBox-select'),
                            control = select.data('selectBox-control'),
                            settings = select.data('selectBox-settings');
                        if (select.triggerHandler('beforeclose')) return false;
                        var dispatchCloseEvent = function() {
                                select.triggerHandler('close', {
                                    _selectBox: true
                                });
                            };
                        if (settings) {
                            switch (settings.menuTransition) {
                            case 'fade':
                                options.fadeOut(settings.menuSpeed, dispatchCloseEvent);
                                break;
                            case 'slide':
                                options.slideUp(settings.menuSpeed, dispatchCloseEvent);
                                break;
                            default:
                                options.hide(settings.menuSpeed, dispatchCloseEvent);
                                break;
                            }
                            if (!settings.menuSpeed) dispatchCloseEvent();
                            control.removeClass('selectBox-menuShowing');
                        } else {
                            $(this).hide();
                            $(this).triggerHandler('close', {
                                _selectBox: true
                            });
                            $(this).removeClass('selectBox-menuShowing');
                        }
                    });
                };
            var selectOption = function(select, li, event) {
                    select = $(select);
                    li = $(li);
                    var control = select.data('selectBox-control'),
                        settings = select.data('selectBox-settings');
                    if (control.hasClass('selectBox-disabled')) return false;
                    if (li.length === 0 || li.hasClass('selectBox-disabled')) return false;
                    if (select.attr('multiple')) {
                        // If event.shiftKey is true, this will select all options between li and the last li selected
                        if (event.shiftKey && control.data('selectBox-last-selected')) {
                            li.toggleClass('selectBox-selected');
                            var affectedOptions;
                            if (li.index() > control.data('selectBox-last-selected').index()) {
                                affectedOptions = li.siblings().slice(control.data('selectBox-last-selected').index(), li.index());
                            } else {
                                affectedOptions = li.siblings().slice(li.index(), control.data('selectBox-last-selected').index());
                            }
                            affectedOptions = affectedOptions.not('.selectBox-optgroup, .selectBox-disabled');
                            if (li.hasClass('selectBox-selected')) {
                                affectedOptions.addClass('selectBox-selected');
                            } else {
                                affectedOptions.removeClass('selectBox-selected');
                            }
                        } else if ((isMac && event.metaKey) || (!isMac && event.ctrlKey)) {
                            li.toggleClass('selectBox-selected');
                        } else {
                            li.siblings().removeClass('selectBox-selected');
                            li.addClass('selectBox-selected');
                        }
                    } else {
                        li.siblings().removeClass('selectBox-selected');
                        li.addClass('selectBox-selected');
                    }
                    if (control.hasClass('selectBox-dropdown')) {
                        control.find('.selectBox-label').text(li.text());
                    }
                    // Update original control's value
                    var i = 0,
                        selection = [];
                    if (select.attr('multiple')) {
                        control.find('.selectBox-selected A').each(function() {
                            selection[i++] = $(this).attr('rel');
                        });
                    } else {
                        selection = li.find('A').attr('rel');
                    }
                    // Remember most recently selected item
                    control.data('selectBox-last-selected', li);
                    // Change callback
                    if (select.val() !== selection) {
                        select.val(selection);
                        setLabel(select);
                        select.trigger('change');
                    }
                    return true;
                };
            var addHover = function(select, li) {
                    select = $(select);
                    li = $(li);
                    var control = select.data('selectBox-control'),
                        options = control.data('selectBox-options');
                    options.find('.selectBox-hover').removeClass('selectBox-hover');
                    li.addClass('selectBox-hover');
                };
            var removeHover = function(select, li) {
                    select = $(select);
                    li = $(li);
                    var control = select.data('selectBox-control'),
                        options = control.data('selectBox-options');
                    options.find('.selectBox-hover').removeClass('selectBox-hover');
                };
            var keepOptionInView = function(select, li, center) {
                    if (!li || li.length === 0) return;
                    select = $(select);
                    var control = select.data('selectBox-control'),
                        options = control.data('selectBox-options'),
                        scrollBox = control.hasClass('selectBox-dropdown') ? options : options.parent(),
                        top = parseInt(li.offset().top - scrollBox.position().top),
                        bottom = parseInt(top + li.outerHeight());
                    if (center) {
                        scrollBox.scrollTop(li.offset().top - scrollBox.offset().top + scrollBox.scrollTop() - (scrollBox.height() / 2));
                    } else {
                        if (top < 0) {
                            scrollBox.scrollTop(li.offset().top - scrollBox.offset().top + scrollBox.scrollTop());
                        }
                        if (bottom > scrollBox.height()) {
                            scrollBox.scrollTop((li.offset().top + li.outerHeight()) - scrollBox.offset().top + scrollBox.scrollTop() - scrollBox.height());
                        }
                    }
                };
            var handleKeyDown = function(select, event) {
					console.log( 'down'+ event )
                    //
                    // Handles open/close and arrow key functionality
                    //
                    select = $(select);
                    var control = select.data('selectBox-control'),
                        options = control.data('selectBox-options'),
                        settings = select.data('selectBox-settings'),
                        totalOptions = 0,
                        i = 0;
                    if (control.hasClass('selectBox-disabled')) return;
                    switch (event.keyCode) {
                    case 8:
                        // backspace
                        event.preventDefault();
                        typeSearch = '';
                        break;
                    case 9:
                        // tab
                    case 27:
                        // esc
                        hideMenus();
                        removeHover(select);
                        break;
                    case 13:
                        // enter
                        if (control.hasClass('selectBox-menuShowing')) {
                            selectOption(select, options.find('LI.selectBox-hover:first'), event);
                            if (control.hasClass('selectBox-dropdown')) hideMenus();
                        } else {
                            showMenu(select);
                        }
                        break;
                    case 38:
                        // up
                    case 37:
                        // left
                        event.preventDefault();
                        if (control.hasClass('selectBox-menuShowing')) {
                            var prev = options.find('.selectBox-hover').prev('LI');
                            totalOptions = options.find('LI:not(.selectBox-optgroup)').length;
                            i = 0;
                            while (prev.length === 0 || prev.hasClass('selectBox-disabled') || prev.hasClass('selectBox-optgroup')) {
                                prev = prev.prev('LI');
                                if (prev.length === 0) {
                                    if (settings.loopOptions) {
                                        prev = options.find('LI:last');
                                    } else {
                                        prev = options.find('LI:first');
                                    }
                                }
                                if (++i >= totalOptions) break;
                            }
                            addHover(select, prev);
                            selectOption(select, prev, event);
                            keepOptionInView(select, prev);
                        } else {
                            showMenu(select);
                        }
                        break;
                    case 40:
                        // down
                    case 39:
                        // right
                        event.preventDefault();
                        if (control.hasClass('selectBox-menuShowing')) {
                            var next = options.find('.selectBox-hover').next('LI');
                            totalOptions = options.find('LI:not(.selectBox-optgroup)').length;
                            i = 0;
                            while (next.length === 0 || next.hasClass('selectBox-disabled') || next.hasClass('selectBox-optgroup')) {
                                next = next.next('LI');
                                if (next.length === 0) {
                                    if (settings.loopOptions) {
                                        next = options.find('LI:first');
                                    } else {
                                        next = options.find('LI:last');
                                    }
                                }
                                if (++i >= totalOptions) break;
                            }
                            addHover(select, next);
                            selectOption(select, next, event);
                            keepOptionInView(select, next);
                        } else {
                            showMenu(select);
                        }
                        break;
                    }
                };
            var handleKeyPress = function(select, event) {
				console.log( 'press'+ event )
                    //
                    // Handles type-to-find functionality
                    //
                    select = $(select);
                    var control = select.data('selectBox-control'),
                        options = control.data('selectBox-options');
                    if (control.hasClass('selectBox-disabled')) return;
                    switch (event.keyCode) {
                    case 9:
                        // tab
                    case 27:
                        // esc
                    case 13:
                        // enter
                    case 38:
                        // up
                    case 37:
                        // left
                    case 40:
                        // down
                    case 39:
                        // right
                        // Don't interfere with the keydown event!
                        break;
                    default:
                        // Type to find
                        if (!control.hasClass('selectBox-menuShowing')) showMenu(select);
                        event.preventDefault();
                        clearTimeout(typeTimer);
                        typeSearch += String.fromCharCode(event.charCode || event.keyCode);
                        options.find('A').each(function() {
                            if ($(this).text().substr(0, typeSearch.length).toLowerCase() === typeSearch.toLowerCase()) {
                                addHover(select, $(this).parent());
                                keepOptionInView(select, $(this).parent());
                                return false;
                            }
                        });
                        // Clear after a brief pause
                        typeTimer = setTimeout(function() {
                            typeSearch = '';
                        }, 1000);
                        break;
                    }
                };
            var enable = function(select) {
                    select = $(select);
                    select.attr('disabled', false);
                    var control = select.data('selectBox-control');
                    if (!control) return;
                    control.removeClass('selectBox-disabled');
                };
            var disable = function(select) {
                    select = $(select);
                    select.attr('disabled', true);
                    var control = select.data('selectBox-control');
                    if (!control) return;
                    control.addClass('selectBox-disabled');
                };
            var setValue = function(select, value) {
                    select = $(select);
                    select.val(value);
                    value = select.val(); // IE9's select would be null if it was set with a non-exist options value
                    if (value === null) { // So check it here and set it with the first option's value if possible
                        value = select.children().first().val();
                        select.val(value);
                    }
                    var control = select.data('selectBox-control');
                    if (!control) return;
                    var settings = select.data('selectBox-settings'),
                        options = control.data('selectBox-options');
                    // Update label
                    setLabel(select);
                    // Update control values
                    options.find('.selectBox-selected').removeClass('selectBox-selected');
                    options.find('A').each(function() {
                        if (typeof(value) === 'object') {
                            for (var i = 0; i < value.length; i++) {
                                if ($(this).attr('rel') == value[i]) {
                                    $(this).parent().addClass('selectBox-selected');
                                }
                            }
                        } else {
                            if ($(this).attr('rel') == value) {
                                $(this).parent().addClass('selectBox-selected');
                            }
                        }
                    });
                    if (settings.change) settings.change.call(select);
                };
            var setOptions = function(select, options) {
                    select = $(select);
                    var control = select.data('selectBox-control'),
                        settings = select.data('selectBox-settings');
                    switch (typeof(data)) {
                    case 'string':
                        select.html(data);
                        break;
                    case 'object':
                        select.html('');
                        for (var i in data) {
                            if (data[i] === null) continue;
                            if (typeof(data[i]) === 'object') {
                                var optgroup = $('<optgroup label="' + i + '" />');
                                for (var j in data[i]) {
                                    optgroup.append('<option value="' + j + '">' + data[i][j] + '</option>');
                                }
                                select.append(optgroup);
                            } else {
                                var option = $('<option value="' + i + '">' + data[i] + '</option>');
                                select.append(option);
                            }
                        }
                        break;
                    }
                    if (!control) return;
                    // Remove old options
                    control.data('selectBox-options').remove();
                    // Generate new options
                    var type = control.hasClass('selectBox-dropdown') ? 'dropdown' : 'inline';
                    options = getOptions(select, type);
                    control.data('selectBox-options', options);
                    switch (type) {
                    case 'inline':
                        control.append(options);
                        break;
                    case 'dropdown':
                        // Update label
                        setLabel(select);
                        $("BODY").append(options);
                        break;
                    }
                };
            var disableSelection = function(selector) {
                    $(selector).css('MozUserSelect', 'none').bind('selectstart', function(event) {
                        event.preventDefault();
                    });
                };
            var generateOptions = function(self, options) {
                    var li = $('<li />'),
                        a = $('<a />');
                    li.addClass(self.attr('class'));
                    li.data(self.data());
                    a.attr('rel', self.val()).text(self.text());
                    li.append(a);
                    if (self.attr('disabled')) li.addClass('selectBox-disabled');
                    if (self.attr('selected')) li.addClass('selectBox-selected');
                    options.append(li);
                };
            //
            // Public methods
            //
            switch (method) {
            case 'control':
                return $(this).data('selectBox-control');
            case 'settings':
                if (!data) return $(this).data('selectBox-settings');
                $(this).each(function() {
                    $(this).data('selectBox-settings', $.extend(true, $(this).data('selectBox-settings'), data));
                });
                break;
            case 'options':
                // Getter
                if (data === undefined) return $(this).data('selectBox-control').data('selectBox-options');
                // Setter
                $(this).each(function() {
                    setOptions(this, data);
                });
                break;
            case 'value':
                // Empty string is a valid value
                if (data === undefined) return $(this).val();
                $(this).each(function() {
                    setValue(this, data);
                });
                break;
            case 'refresh':
                $(this).each(function() {
                    refresh(this);
                });
                break;
            case 'enable':
                $(this).each(function() {
                    enable(this);
                });
                break;
            case 'disable':
                $(this).each(function() {
                    disable(this);
                });
                break;
            case 'destroy':
                $(this).each(function() {
                    destroy(this);
                });
                break;
            default:
                $(this).each(function() {
                    init(this, method);
                });
                break;
            }
            return $(this);
        }
    });
})(jQuery);


/**
 * jquery.placeholder http://matoilic.github.com/jquery.placeholder
 *
 * @version v0.2.4
 * @author Mato Ilic <info@matoilic.ch>
 * @copyright 2013 Mato Ilic
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
;(function($, doc, debug) {
    var input = ('placeholder' in doc.createElement('input')),
        textarea = ('placeholder' in doc.createElement('textarea')),
        selector = ':input[placeholder]';

    $.placeholder = {input: input, textarea: textarea};

    //skip if there is native browser support for the placeholder attribute
    if(!debug && input && textarea) {
        $.fn.placeholder = function() {};
        return;
    }

    if(!debug && input && !textarea) {
        selector = 'textarea[placeholder]';
    }

    /* patch jQuery.fn.val to return an empty value if the value matches
     * the placeholder
     */
    $.fn.realVal = $.fn.val;
    $.fn.val = function() {
        var $element = $(this), val, placeholder;
        if(arguments.length > 0) return $element.realVal.apply(this, arguments);

        val = $element.realVal();
        placeholder = $element.attr('placeholder');

        return ((val == placeholder) ? '' : val);
    };

    function clearForm() {
        $(this).find(selector).each(removePlaceholder);
    }

    function extractAttributes(elem) {
        var attr = elem.attributes, copy = {}, skip = /^jQuery\d+/;
        for(var i = 0; i < attr.length; i++) {
            if(attr[i].specified && !skip.test(attr[i].name)) {
                copy[attr[i].name] = attr[i].value;
            }
        }
        return copy;
    }

    function removePlaceholder() {
        var $target = $(this), $clone, $orig;

        if($target.is(':password')) return;

        if($target.data('password')) {
            $orig = $target.next().show().focus();
            $('label[for=' + $target.attr('id') + ']').attr('for', $orig.attr('id'));
            $target.remove();
        } else if($target.realVal() == $target.attr('placeholder')) {
            $target.val('');
            $target.removeClass('placeholder');
        }
    }

    function setPlaceholder() {
        var $target = $(this), $clone, plceholder, hasVal, cid;
        placeholder = $target.attr('placeholder');

        if($.trim($target.val()).length > 0) return;

        if($target.is(':password')) {
            cid = $target.attr('id') + '-clone';
            $clone = $('<input/>')
                        .attr($.extend(extractAttributes(this), {type: 'text', value: placeholder, 'data-password': 1, id: cid}))
                        .addClass('placeholder');

            $target.before($clone).hide();
            $('label[for=' + $target.attr('id') + ']').attr('for', cid);
        } else {
            $target.val(placeholder);
            $target.addClass('placeholder');
        }
    }

    $.fn.placeholder = function() {
        this.filter(selector).each(setPlaceholder);
        return this;
    };

    $(function($) {
        var $doc = $(doc);
        $doc.on('submit', 'form', clearForm);
        $doc.on('focus', selector, removePlaceholder);
        $doc.on('blur', selector, setPlaceholder);
        $(selector).placeholder();
    });
})(jQuery, document, window.debug);
