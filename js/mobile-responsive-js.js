$(window).resize(function(){
	if ($(window).width() <= 1980) {
		/* jQuery('.toggle-button').on('click',function(e){
			e.preventDefault();
			if(!jQuery('.menu-brand').hasClass('button-open')){
				jQuery('.menu-wrap').css({'width':'25%','margin-left':'0%'});
				jQuery('.toggle-button').css('left','21%');
				jQuery('.menu-bar.menu-bar-top').css('top','3px');
				jQuery('.overlay-page').css('display','block');
				jQuery('.topnav').css('background-color','#1e2021');
				jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 0.3)','pointer-events':'none'});
				jQuery('header').css({'background':'#1b1e1f','color':'rgba(255, 255, 255, 0.3)','user-select':'none'});
				jQuery('a.link-logo img').css({'opacity':'0.3','user-select':'none'});
				jQuery('a.link-logo').css('pointer-events','none');
				jQuery("body").css('overflow-y','hidden');
			}else{
				jQuery('a.link-logo img').css('display','block');
				jQuery('.menu-wrap').css({'width':'0%','margin-left':'-25%'});
				jQuery('.icons-links').css('display','block');
				jQuery('.toggle-button').css('left','2%');
				jQuery('.menu-bar.menu-bar-top').css('top','0px');
				jQuery('.overlay-page').css('display','none');
				jQuery('.topnav').css('background-color','#2f3335');
				jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
				jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
				jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
				jQuery('a.link-logo').css('pointer-events','auto');
				jQuery("body").css('overflow-y','visible');
				jQuery('.menu-bar.menu-bar-middle').css('top','8px');
				jQuery('.menu-bar.menu-bar-bottom').css('top','26px');

			}
		}); */
		/* jQuery('a[href="#philosophy"]').on('click',function(e){
			e.preventDefault();
	   		jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.menu-wrap').css('width','0%');
			jQuery('.toggle-button').css('left','2%');
			jQuery('.overlay-page').css('display','none');
			jQuery('a.link-logo img').css('display','block');
			jQuery('.icons-links').css('display','block');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			jQuery('.menu-bar.menu-bar-middle').css('top','8px');
			jQuery('.menu-bar.menu-bar-bottom').css('top','26px');
			jQuery("html, body").animate({scrollTop: 1200}, 1000);

	   	}); */
	   	/* jQuery('a[href="#about"]').on('click',function(e){
			e.preventDefault();
	   		jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.menu-wrap').css('width','0%');
			jQuery('.toggle-button').css('left','2%');
			jQuery('.overlay-page').css('display','none');
			jQuery('a.link-logo img').css('display','block');
			jQuery('.icons-links').css('display','block');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			jQuery('.menu-bar.menu-bar-middle').css('top','8px');
			jQuery('.menu-bar.menu-bar-bottom').css('top','26px');
			jQuery("html, body").animate({scrollTop: 2160}, 1000);
	   	}); */
	   	/* jQuery('a[href="#our-products"]').on('click',function(e){
			e.preventDefault();
	   		jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.menu-wrap').css('width','0%');
			jQuery('.toggle-button').css('left','2%');
			jQuery('.overlay-page').css('display','none');
			jQuery('a.link-logo img').css('display','block');
			jQuery('.icons-links').css('display','block');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			jQuery('.menu-bar.menu-bar-middle').css('top','8px');
			jQuery('.menu-bar.menu-bar-bottom').css('top','26px');
			jQuery("html, body").animate({scrollTop: 3200}, 1000);
	   	}); */
	   	/* jQuery('a[href="#science-vuniks"]').on('click',function(e){
			e.preventDefault();
	   		jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.menu-wrap').css('width','0%');
			jQuery('.toggle-button').css('left','2%');
			jQuery('.overlay-page').css('display','none');
			jQuery('a.link-logo img').css('display','block');
			jQuery('.icons-links').css('display','block');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			jQuery('.menu-bar.menu-bar-middle').css('top','8px');
			jQuery('.menu-bar.menu-bar-bottom').css('top','26px');
			jQuery("html, body").animate({scrollTop: 4300}, 1000);
	   	}); */
	   		/* jQuery('a[href="#contact-page"]').on('click',function(e){
			e.preventDefault();
	   		jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.menu-wrap').css('width','0%');
			jQuery('.toggle-button').css('left','2%');
			jQuery('.overlay-page').css('display','none');
			jQuery('a.link-logo img').css('display','block');
			jQuery('.icons-links').css('display','block');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			jQuery('.menu-bar.menu-bar-middle').css('top','8px');
			jQuery('.menu-bar.menu-bar-bottom').css('top','26px');
			jQuery("html, body").animate({scrollTop: 6500}, 1000);
	   	}); */
	}
	if ($(window).width() <= 1366) {
		/* jQuery('a[href="#philosophy"]').on('click',function(e){
			e.preventDefault();
	   		jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.overlay-page').css('display','none');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			jQuery("html, body").animate({scrollTop: 620}, 1000);

	   	}); */
	  /*   jQuery('a[href="#about"]').on('click',function(e){
			e.preventDefault();
	    	jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.overlay-page').css('display','none');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
    		jQuery("html, body").animate({scrollTop: 1250}, 1000);
	    }); */
	   /*  jQuery('a[href="#our-products"]').on('click',function(e){
			e.preventDefault();
	    	jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.overlay-page').css('display','none');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
    		jQuery("html, body").animate({scrollTop: 1870}, 1000);
	    }); */
	    /* jQuery('a[href="#contact-page"]').on('click',function(e){
			e.preventDefault();
	    	jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.overlay-page').css('display','none');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
    		jQuery("html, body").animate({scrollTop: 3920}, 1000);
	    }); */
	    /* jQuery('a[href="#science-vuniks"]').on('click',function(e){
			e.preventDefault();
	    	jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.overlay-page').css('display','none');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			jQuery("html, body").animate({scrollTop: 2500}, 1000).end();
	    }); */
	   /*  jQuery('a[href="#item-products"]').on('click',function(e){
			e.preventDefault();
	   		jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.overlay-page').css('display','none');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			jQuery("html, body").animate({scrollTop: 3225}, 1000);
	  	}); */
	}
	if ($(window).width() <= 1200) { 
		jQuery('.toggle-button').on('click',function(e){
			e.preventDefault();
			if(!jQuery('.menu-brand').hasClass('button-open')){
				jQuery('.menu-wrap').css({'width':'25%','margin-left':'0%'});
				jQuery('.toggle-button').css('left','21%');
				jQuery('.menu-bar.menu-bar-top').css('top','2px');
				jQuery('.overlay-page').css('display','block');
				jQuery('.topnav').css('background-color','#1e2021');
				jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 0.3)','pointer-events':'none'});
				jQuery('header').css({'background':'#1b1e1f','color':'rgba(255, 255, 255, 0.3)','user-select':'none'});
				jQuery('a.link-logo img').css({'opacity':'0.3','user-select':'none'});
				jQuery('a.link-logo').css('pointer-events','none');
				jQuery("body").css('overflow-y','hidden');
			}else{
				jQuery('a.link-logo img').css('display','block');
				jQuery('.menu-wrap').css({'width':'0%','margin-left':'-25%'});
				jQuery('.icons-links').css('display','block');
				jQuery('.toggle-button').css('left','2%');
				jQuery('.menu-bar.menu-bar-top').css('top','0px');
				jQuery('.overlay-page').css('display','none');
				jQuery('.topnav').css('background-color','#2f3335');
				jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
				jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
				jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
				jQuery('a.link-logo').css('pointer-events','auto');
				jQuery("body").css('overflow-y','visible');
			}
		});
	}
	if ($(window).width() <= 768) { 
		jQuery('.toggle-button').on('click',function(e){
			e.preventDefault();
			if(!jQuery('.menu-brand').hasClass('button-open')){
				jQuery('a.link-logo img').css('display','none');
				jQuery('.menu-wrap').css({'width':'100%','margin-left':'0%'});
				jQuery('.icons-links').css('display','none');
				jQuery('.toggle-button').css('left','93%');
				jQuery('.menu-bar.menu-bar-top').css('top','2px');
			}else{
				jQuery('a.link-logo img').css('display','block');
				jQuery('.menu-wrap').css({'width':'0%','margin-left':'-100%'});
				jQuery('.icons-links').css('display','block');
				jQuery('.toggle-button').css('left','2%');
				jQuery('.menu-bar.menu-bar-top').css('top','0px');
			}
		});
		/* jQuery('a[href="#philosophy"]').on('click',function(e){
			e.preventDefault();
	   		jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.menu-wrap').css('width','0%');
			jQuery('.toggle-button').css('left','2%');
			jQuery('.overlay-page').css('display','none');
			jQuery('a.link-logo img').css('display','block');
			jQuery('.icons-links').css('display','block');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			jQuery("html, body").animate({scrollTop: 530}, 1000);
	   	}); */
	   	/* jQuery('a[href="#about"]').on('click',function(e){
			e.preventDefault();
	   		jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.menu-wrap').css('width','0%');
			jQuery('.toggle-button').css('left','2%');
			jQuery('.overlay-page').css('display','none');
			jQuery('a.link-logo img').css('display','block');
			jQuery('.icons-links').css('display','block');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			jQuery("html, body").animate({scrollTop: 1070}, 1000);
	   	}); */
	   /* 	jQuery('a[href="#our-products"]').on('click',function(e){
			e.preventDefault();
	   		jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.menu-wrap').css('width','0%');
			jQuery('a.link-logo img').css('display','block');
			jQuery('.icons-links').css('display','block');
			jQuery('.toggle-button').css('left','2%');
			jQuery('.overlay-page').css('display','none');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			jQuery("html, body").animate({scrollTop: 1610}, 1000);
	   	}); */
	   /* 	jQuery('a[href="#science-vuniks"]').on('click',function(e){
			e.preventDefault();
	   		jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.menu-wrap').css('width','0%');
			jQuery('a.link-logo img').css('display','block');
			jQuery('.icons-links').css('display','block');
			jQuery('.toggle-button').css('left','2%');
			jQuery('.overlay-page').css('display','none');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			jQuery("html, body").animate({scrollTop: 2145}, 1000);
	   	}); */
   		/* jQuery('a[href="#item-products"]').on('click',function(e){
			e.preventDefault();
	   		jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.menu-wrap').css('width','0%');
			jQuery('a.link-logo img').css('display','block');
			jQuery('.icons-links').css('display','block');
			jQuery('.toggle-button').css('left','2%');
			jQuery('.overlay-page').css('display','none');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			jQuery("html, body").animate({scrollTop: 2615}, 1000);
	   	}); */
	   /* 	jQuery('a[href="#contact-page"]').on('click',function(e){
			e.preventDefault();
	   		jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.menu-wrap').css('width','0%');
			jQuery('a.link-logo img').css('display','block');
			jQuery('.icons-links').css('display','block');
			jQuery('.toggle-button').css('left','2%');
			jQuery('.overlay-page').css('display','none');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			jQuery("html, body").animate({scrollTop: 3205}, 1000);
	   	}); */
		
	}
	if($(window).width() <= 425) {  
		jQuery('.toggle-button').on('click',function(e){
			e.preventDefault();
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
		/* jQuery('a[href="#philosophy"]').on('click',function(e){
			e.preventDefault();
	   		jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.menu-wrap').css('width','0%');
			jQuery('.toggle-button').css('left','2%');
			jQuery('.overlay-page').css('display','none');
			jQuery('a.link-logo img').css('display','block');
			jQuery('.icons-links').css('display','block');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			jQuery("html, body").animate({scrollTop: 520}, 1000);
	   	}); */
	   	/* jQuery('a[href="#contact-page"]').on('click',function(e){
			e.preventDefault();
	   		jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.menu-wrap').css('width','0%');
			jQuery('.toggle-button').css('left','2%');
			jQuery('.overlay-page').css('display','none');
			jQuery('a.link-logo img').css('display','block');
			jQuery('.icons-links').css('display','block');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			jQuery("html, body").animate({scrollTop: 3600}, 1000);
	   	}); */
	   /* 	jQuery('a[href="#our-products"]').on('click',function(e){
			e.preventDefault();
	   		jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.menu-wrap').css('width','0%');
			jQuery('.toggle-button').css('left','2%');
			jQuery('.overlay-page').css('display','none');
			jQuery('a.link-logo img').css('display','block');
			jQuery('.icons-links').css('display','block');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			jQuery("html, body").animate({scrollTop: 1580}, 1000);
	   	}); */
	   	/* jQuery('a[href="#science-vuniks"]').on('click',function(e){
			e.preventDefault();
	   		jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.menu-wrap').css('width','0%');
			jQuery('a.link-logo img').css('display','block');
			jQuery('.icons-links').css('display','block');
			jQuery('.toggle-button').css('left','2%');
			jQuery('.overlay-page').css('display','none');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			jQuery("html, body").animate({scrollTop: 2500}, 1000);
	   	}); */
	}
	if($(window).width() <= 414){
		jQuery('.toggle-button').on('click',function(e){
			e.preventDefault();
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
		/* jQuery('a[href="#science-vuniks"]').on('click',function(e){
			e.preventDefault();
	   		jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.menu-wrap').css('width','0%');
			jQuery('a.link-logo img').css('display','block');
			jQuery('.icons-links').css('display','block');
			jQuery('.toggle-button').css('left','2%');
			jQuery('.overlay-page').css('display','none');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			// jQuery("html, body").animate({scrollTop: 2000}, 1000);
	   	}); */
	}
	if($(window).width() <= 375){
		jQuery('.toggle-button').on('click',function(e){
			e.preventDefault();
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
		/* jQuery('a[href="#science-vuniks"]').on('click',function(e){
			e.preventDefault();
	   		jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.menu-wrap').css('width','0%');
			jQuery('a.link-logo img').css('display','block');
			jQuery('.icons-links').css('display','block');
			jQuery('.toggle-button').css('left','2%');
			jQuery('.overlay-page').css('display','none');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			jQuery("html, body").animate({scrollTop: 2630}, 1000);
	   	}); */
	   	/* jQuery('a[href="#philosophy"]').on('click',function(e){
			e.preventDefault();
	   		jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.overlay-page').css('display','none');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			jQuery("html, body").animate({scrollTop: 650}, 1000);
	   	}); */
	   	/* 	jQuery('a[href="#about"]').on('click',function(e){
			e.preventDefault();
	   		jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.overlay-page').css('display','none');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			jQuery("html, body").animate({scrollTop: 1300}, 1000);
	   	}); */
   		/* jQuery('a[href="#our-products"]').on('click',function(e){
			e.preventDefault();
	    	jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.overlay-page').css('display','none');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
	    	jQuery("html, body").animate({scrollTop: 1970}, 1000);
	    }); */
	    /* jQuery('a[href="#contact-page"]').on('click',function(e){
			e.preventDefault();
	    	jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.overlay-page').css('display','none');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
	    	jQuery("html, body").animate({scrollTop: 4220}, 1000);
	    }); */

	}
	else{
		/* jQuery('a[href="#philosophy"]').on('click',function(e){
			e.preventDefault();
	   		jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.overlay-page').css('display','none');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			// if($(window).width() <= 1920){
			// 	jQuery("html, body").animate({scrollTop: 1060}, 1000);
			// }
			// else{
				jQuery("html, body").animate({scrollTop: 620}, 1000);
			// }

	   	}); */
	   /*  jQuery('a[href="#about"]').on('click',function(e){
			e.preventDefault();
	    	jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.overlay-page').css('display','none');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			// if($(window).width() <= 1920){
			// 	jQuery("html, body").animate({scrollTop: 2160}, 1000);
			// }else{
	    		jQuery("html, body").animate({scrollTop: 1250}, 1000);
	    	// }
	    }); */
	    /* jQuery('a[href="#our-products"]').on('click',function(e){
			e.preventDefault();
	    	jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.overlay-page').css('display','none');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			// if($(window).width() <= 1920){
	  //   		jQuery("html, body").animate({scrollTop: 3200}, 1000);
			// }else{
	    		jQuery("html, body").animate({scrollTop: 1870}, 1000);
	    	// }
	    }); */
	    /* jQuery('a[href="#contact-page"]').on('click',function(e){
			e.preventDefault();
	    	jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.overlay-page').css('display','none');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			// if ($(window).width() <= 1920) { 
			// 	jQuery("html, body").animate({scrollTop: 6500}, 1000);
			// }else{
	    		jQuery("html, body").animate({scrollTop: 3920}, 1000);
			// }
	    }); */
	    /* jQuery('a[href="#science-vuniks"]').on('click',function(e){
			e.preventDefault();
	    	jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.overlay-page').css('display','none');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			// if ($(window).width() <= 1200) { 
			// 	jQuery("html, body").animate({scrollTop: 3200}, 1000).end();
			// }
			// else if ($(window).width() <= 1920) { 
			// 	jQuery("html, body").animate({scrollTop: 4300}, 1000);
			// }
			// // else if ($(window).width() <= 375) { 
			// // 	jQuery("html, body").animate({scrollTop: 2750}, 1000).end();
			// // }
			// else{
				jQuery("html, body").animate({scrollTop: 2500}, 1000).end();
			// }
	    	
	    }); */
	    /* jQuery('a[href="#item-products"]').on('click',function(e){
			e.preventDefault();
	   		jQuery('.menu-brand').removeClass('button-open');
			jQuery('.toggle-button').removeClass('clicked');
			jQuery('.menu-wrap').removeClass('menu-show');
			jQuery('.overlay-page').css('display','none');
			jQuery('.topnav').css('background-color','#2f3335');
			jQuery('.icons-links ul li a').css({'color':'rgba(255, 255, 255, 1)','pointer-events':'auto'});
			jQuery('header').css({'background':'#242729','color':'rgba(255, 255, 255, 1)','user-select':'auto'});
			jQuery('a.link-logo img').css({'opacity':'1','user-select':'auto'});
			jQuery('a.link-logo').css('pointer-events','auto');
			jQuery("body").css('overflow-y','visible');
			jQuery('#toTop').css('display','block');
			jQuery("html, body").animate({scrollTop: 3225}, 1000);
	  	}); */
	}
});