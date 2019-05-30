
jQuery(document).ready(function($) {
	
	
	/* start script woo */
	
	if(jQuery("ul.products").hasClass("columns-4") && jQuery("ul.products li").length !== 4){
		jQuery("ul.products").removeClass("columns-4");
		jQuery("ul.products").addClass("columns-"+jQuery("ul.products li").length);
	}

	setTimeout(function() {	
		jQuery( ".woocommerce-notices-wrapper" ).slideUp();
	},6000);
	$(".product-quantity__container button").on("click", function() {
		var operationtag = $(this).attr("value");
		var oldValue = $('input.input-text.qty.text[name="quantity"]').val();
			var newVal = 0;



		if (operationtag == "+") {
			 newVal = parseFloat(oldValue) + 1;
		}
		if (oldValue > 0 && operationtag == "-") {
		   newVal = parseFloat(oldValue) - 1;
		
		}
		$('input.input-text.qty.text[name="quantity"]').val(newVal);
	});
	
	$("select#weight option").each(function() {
		
		var e = document.querySelector("select#weight");
		var strUser = e.options[e.selectedIndex].text;
		
		
		
		var btn = $('<div class="btn" value="'+$(this).val()+'">'+$(this).text()+'</div>');
		
		if($(this).val() !== ""){
	   console.log($(this).val() );
		$("table.variations .value").append(btn);
		}
		
		if(strUser !== undefined){
			$(".btn[value='"+strUser+"']").addClass("on");
		}
		
	});

	$(document).on('click', '.btn', function() {
		var value = jQuery(this).attr("value");
		var select = document.querySelector('select[name="attribute_weight"]');
		select.value = value;

		/* since programatically changes won't fire the change event,
		   we need to do it ourselves */
		var event = document.createEvent("HTMLEvents");
		event.initEvent("change",true,false);
		select.dispatchEvent(event);
		
		$("span.price-description").text(value);
		$('.btn').removeClass('on');
		$(this).addClass('on');
	});

	/* end woo script */
	
	
	jQuery("span#close_coupon").click(function(e){
		document.cookie ='trigger_modalcode=0; Path=/;';
		
	})
	jQuery("a.slider__nav-lnk").click(function(e){
		e.preventDefault();
		
	/* 	var id = jQuery(this).attr("href");
		 console.log(id);
		
		
			jQuery("li.slider__nav-item.js-slide-lnk").removeClass("is-active");
			jQuery(this).closest("li").addClass("is-active");
			 */
			var gethref = $(this).attr("href");
			if(gethref != "#"){
				jQuery('html, body').animate({
					scrollTop:  getCookie(gethref)
				}, 1000);
				
			}
			
		//jQuery(this).click();
			 
		
		
		
			
	});
	jQuery("div#next-arrow i.fa.fa-angle-down").click(function(e){
			e.preventDefault();
			var id = jQuery(".wrapper").find(".scroll-effect.actives").last().next().attr("id");
			
			if(id !== undefined){
				jQuery('html, body').animate({
				  scrollTop:  getCookie("#"+id)
				 }, 1000);
			}
					
			
	});
	jQuery("div#next-arrow").hide();
	jQuery( window ).scroll(function() {
	  var id = jQuery(".scroll-effect.actives.unfixed").attr("id");
				console.log(window.scrollY);
				if(id === undefined && window.scrollY === 0){
					 jQuery("li.slider__nav-item.js-slide-lnk").removeClass("is-active");
					jQuery("a.slider__nav-lnk[href='#slide-1']").closest("li.slider__nav-item.js-slide-lnk").addClass("is-active");
					
				}
				else{
					
					if(id !== undefined ){
						jQuery("li.slider__nav-item.js-slide-lnk").removeClass("is-active");
						jQuery("a.slider__nav-lnk[href='#"+id+"']").closest("li.slider__nav-item.js-slide-lnk").addClass("is-active");
					}
					 
				}
				var id = jQuery("section.scroll-effect:nth-child(3)").attr("id")
				var lastsection = jQuery(".wrapper").find(".scroll-effect").last().attr("id");
				var sectionHeigth = jQuery(".wrapper").find(".scroll-effect").last().height();

				if(window.scrollY >= (sectionHeigth-500) && window.scrollY <=(getCookie("#"+lastsection)-sectionHeigth) ){
					jQuery("div#next-arrow").fadeIn(700);
				}
				else{
					jQuery("div#next-arrow").fadeOut(700);
				}
				
	});
	
	
	
	jQuery("div#more-content").hide();
	
	jQuery("i.fa.fa-angle-double-up").click(function(e){
		console.log(jQuery(this).closest("div#more-content").hasClass("nosection"));
		
		if(jQuery(this).closest("div#more-content").hasClass("nosection") === false ){
		 jQuery('html, body').animate({
				scrollTop:  getCookie("#"+jQuery(this).closest("section").attr("id")) 
			}, 1000); 
		}
		jQuery(this).closest(".pol-bg").find("div#more-content").slideUp(1000 , function(){
				jQuery(this).closest("section").removeClass("scroll-x-class");
				jQuery(this).closest(".pol-bg").find("a.btn-link-page").show();
		});
		
	})
	jQuery("#pol-left a.btn-link-page").click(function(e){
		e.preventDefault();
		
		jQuery('html, body').animate({
				scrollTop:  getCookie("#"+jQuery(this).closest("section").attr("id")) 
			}, 1000);
		jQuery(this).closest("section").addClass("scroll-x-class");
		jQuery(this).closest(".pol-bg").find("div#more-content").slideDown();
		jQuery(this).hide();
		
		
	
	});
	jQuery("#pol-right a.btn-link-page").click(function(e){
		e.preventDefault();
		
		
		jQuery('html, body').animate({
				scrollTop:  getCookie("#"+jQuery(this).closest("section").attr("id")) 
			}, 1000);
		jQuery(this).closest("section").addClass("scroll-x-class");
		jQuery(this).closest(".pol-bg").find("div#more-content").slideDown(1000);
		jQuery(this).hide();	
	});

	jQuery("a.btn-link-page.gift_nature").click(function(e){
		e.preventDefault();
		
		jQuery(this).closest(".container-inner").find("div#more-content").slideDown();
		jQuery(this).hide();
		
		
	
	});
	
	jQuery("div#item-products i.fa.fa-angle-double-up").click(function(e){
	
		jQuery(this).closest(".container-inner").find("div#more-content").slideUp(1000 , function(){
				jQuery(this).closest("section").removeClass("scroll-x-class");
				jQuery(this).closest(".container-inner").find("a.btn-link-page").show();
		});
		
	})
	
	
	

	var $toggleButton = $('.menu-brand'),
    	$menuWrap = $('.menu-wrap'),
    	$sidebarArrow = $('.sidebar-menu-arrow');

	// Hamburger button

	$toggleButton.on('click', function() {
		$(this).toggleClass('button-open');
		$menuWrap.toggleClass('menu-show');
	});

	jQuery('.toggle-button').on('click',function(){
		if(!jQuery('.menu-brand').hasClass('button-open')){
			jQuery(this).addClass('clicked');
			jQuery('.overlay-page').css('display','block');
			jQuery('.topnav').css('background-color','#1e2021');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 0.3)','pointer-events':'none'});
			jQuery('header').css({'background':'#1b1e1f','color':'rgba(255, 255, 255, 0.3)','user-select':'none'});
			jQuery('a.link-logo img').css({'opacity':'0.3','user-select':'none'});
			jQuery('a.link-logo').css('pointer-events','none');
			jQuery("body").css('overflow-y','hidden');
			jQuery('#toTop').css('display','none');
		}else{
			jQuery(this).removeClass('clicked');
			jQuery('.overlay-page').css('display','none');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');

		}
		
	})

	$sidebarArrow.click(function() {
		jQuery(this).next().slideToggle(300);
	});

	
	//jQuery("section").height((jQuery("section").height()+30));
	 
	jQuery("section").each(function(){
		console.log(jQuery(this).offset().top);
		if( window.scrollY <= 200){
			setCookie("#"+jQuery(this).attr("id"),jQuery(this).offset().top);
		}
	} );
	setCookie("#contact-message-section",jQuery("#contact-message-section").offset().top);
	setCookie("#item-products",jQuery("#item-products").offset().top);
	 jQuery("ul#vuniks_menu a ").click(function(e){
		e.preventDefault();
		
		var gethref = $(this).attr("href");

		if(gethref != "#"  && gethref.indexOf("#") != -1 &&  $('body.home').length){
			
			console.log(gethref.substring(this.href.lastIndexOf('/') + 1));
			var corresponding_page = gethref.substring(this.href.lastIndexOf('/') + 1);
			jQuery('html, body').animate({
				scrollTop:  getCookie(corresponding_page)
			}, 1000);
			jQuery("span.toggle-button.clicked").trigger("click");
			
		}else
		{
			console.log(gethref);
			window.location.href = gethref;
		}
	
	}); 
		
	
});

jQuery(document).ready(function(e) {
   jQuery('.has-sub').click(function(){
		jQuery(this).toggleClass('tap').slideToggle();
	});

   jQuery('a.scroll').on('click', function(e) {
    e.preventDefault();
    jQuery('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 300, 'linear');
  });

    jQuery('a[href="#online-purchases"]').on('click',function(e){
        e.preventDefault();
    	jQuery( "#online-purchases" ).fadeIn( "slow", function() {
		    jQuery('#online-purchases').css('display','block');
	       	jQuery('body').css('overflow','hidden');
	  	});
    });
    jQuery('#close').on('click',function(e){
        e.preventDefault();
    	jQuery( "#online-purchases" ).fadeOut( "slow", function() {
	        jQuery('#online-purchases').css('display','none');
	        jQuery('body').css('overflow','visible');
        });
    });
    
});

jQuery(document).ready(function($) {
	jQuery('.menu-brand').on('mouseover',function(){
		if(!jQuery(this).hasClass('button-open')){
		jQuery('.menu-bar-top').css({'top':'-4px','color':'#fff'});
		jQuery('.menu-bar-middle').css('color','#fff');
		jQuery('.menu-bar-bottom').css({'top':'21px','color':'#fff'});
		}
	})

	jQuery('.menu-brand').on('mouseleave',function(){
		jQuery('.menu-bar-top').css({'top':'0px','color':'#b5b5b5'});
		jQuery('.menu-bar-middle').css('color','#b5b5b5');
		jQuery('.menu-bar-bottom').css({'top':'18px','color':'#b5b5b5'});
	})


	var $window = $(window);
	var $holder = $("#slides-holder");
	var $slides = $holder.find(".slide");

	$slides.each(function(index, element) {
		$(element).css("z-index", 100 + index).after($("<div />", {
			class: "slide-fake-height"
		}));
	});

	var $fakeHeights = $slides.next(".slide-fake-height");
	var $toReize = $holder.add($slides).add($fakeHeights);
	var scrollFixer = 3;

	$window.on("resize", onResize).resize();

	$window.on("scroll", function(event) {
		( !! window.requestAnimationFrame) ? requestAnimationFrame(onScroll) : onScroll();
		
		
	});

	function onResize(event) {
		$toReize.css({
			height: $window.innerHeight() + "px"
		});
		onScroll();
	}

	function onScroll(event) {
		
	  var scrollTop = Math.abs($window.scrollTop()) + scrollFixer;
		
	  $slides.each(function(index, element) {
			
			var $slide = $(element);
			var $fakeHeight = $slide.next(".slide-fake-height");
			
			//This can be optimised a lot, but this is just a demo effect
			var slideTop = $slide.hasClass("fixed") ? $fakeHeight.offset().top : $slide.offset().top;
			if (slideTop < scrollTop ) {
				$slide.addClass("fixed");
				$fakeHeight.addClass("visible");
			} else {
				$slide.removeClass("fixed");
				$fakeHeight.removeClass("visible");
			}
		});
	}

    // var options = {
    //         data: [ {name: "Singapore", type: "Address1", icon: "http://vuniks.com/vuniks/wp-content/uploads/2019/01/pin.png"},
    //             {name: "Malaysia", type: "Address2", icon: "http://vuniks.com/vuniks/wp-content/uploads/2019/01/pin.png"},
    //             {name: "China", type: "Address3", icon: "http://vuniks.com/vuniks/wp-content/uploads/2019/01/pin.png"}],
    //         getValue: "name",
    //         list: {
    //         	maxNumberOfElements: 6,
    //             match: {
    //                 enabled: true
    //             }
    //         },
    //         template: {
    //             type: "custom",
    //             method: function(value, item) {
    //                 return "<img src='" + item.icon + "' />" + value + " <br><span>" + item.type + "</span>";
    //             }
    //         }
    //     };
    
    //     $("#country-item").easyAutocomplete(options);

        $(window).scroll(function() {
		    if ($(this).scrollTop()) {
		        $('#toTop').fadeIn();
		    } else {
		        $('#toTop').fadeOut();
		    }
		});

		$("#toTop").click(function () {
		   $("html, body").animate({scrollTop: 0}, 1000);
		});



		jQuery("ul#vuniks_menu").each(function(){
			jQuery("ul#vuniks_menu>li").addClass("menu-item")
		});

		jQuery('.sidebar-menu>li.menu-item').each(function(){
			$menu = $(this);
			if($menu.find('ul.sub-menu').length > 0){
				$menu.find('a').addClass('title-dropdown').append('<i class="fa fa-angle-down pull-right "></i>');
			}else{
				$menu.find('a').addClass('single-item');
		    }
		});
		
		jQuery("ul.sub-menu").each(function(){
			jQuery("ul.sub-menu>li>a").removeClass("title-dropdown");
			jQuery('ul.sub-menu>li>a>i').remove();
			jQuery(this).addClass('sidebar-submenu');
		});
});


$(window).resize(function(){
   if ($(window).width() <= 425) {  
         var swiper = new Swiper('.swiper-container', {
	      slidesPerView: 1,
	      spaceBetween: 30,
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	    });
   } 
   else{
   		var swiper = new Swiper('.swiper-container', {
	      slidesPerView: 3,
	      spaceBetween: 30,
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	    });
   }
});

$(window).resize(function(){
	if ($(window).width() <= 425) {  
		jQuery('.toggle-button').on('click',function(){
			if(!jQuery('.menu-brand').hasClass('button-open')){
				jQuery('a.link-logo img').css('display','none');
				jQuery('.menu-wrap').css({'width':'100%','margin-left':'0%'});
				jQuery('.icons-links').css('display','none');
				jQuery('.toggle-button').css('left','90%');
				jQuery('.menu-bar.menu-bar-top').css('top','2px');
				jQuery('#toTop').css('display','none');
			}else{
				jQuery('a.link-logo img').css('display','block');
				jQuery('.menu-wrap').css({'width':'100%','margin-left':'-100%'});
				jQuery('.icons-links').css('display','block');
				jQuery('.toggle-button').css('left','2%');
				jQuery('.menu-bar.menu-bar-top').css('top','0px');
				jQuery('#toTop').css('display','block');
			}
		});
	}
	
	

	
	if ( $( "#video_slider" ).length ) {
 
	  $('#video_slider').get(0).play();
	 
	}

	
	
	
});


function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}
function isUrl(s) {
   var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
   return regexp.test(s);
}

// $("#video source").each(function() {
//         var sourceFile = $(this).attr("data-src");
//         $(this).attr("src", sourceFile);
//         var video = this.parentElement;
//         video.load();
//         video.play();
//     });