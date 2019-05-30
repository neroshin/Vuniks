jQuery(document).ready(function($) {

   jQuery("button.login__submit").click(function(e){
		e.preventDefault();
		
		jQuery(this).addClass("processing");
		
		$.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_login_object.ajaxurl,
            data: { 
                'action': 'ajax_login', //calls wp_ajax_nopriv_ajaxlogin
                'username':$('input.login__input.name ').val(), 
                'password': $('input.login__input.pass').val(), 
				'security':ajax_login_object.security
            },
            success: function(data){
               
				 if (data.loggedin == true){
					 document.location.href = ajax_login_object.redirecturl;
				 }
				 else{
					 jQuery("div#login-message-modal h1").html(data.message);
					 jQuery("button.login__submit").removeClass("processing");
					  jQuery("div#login-message-modal").removeClass("hide_animate_popup");
					 
					 jQuery("div#login-message-modal").addClass("animate_popup"); 
					 
					 setTimeout(function() {
							 
							 jQuery("div#login-message-modal").removeClass("animate_popup");
							 jQuery("div#login-message-modal").addClass("hide_animate_popup"); 
							 
						},3000);
				 }
            }
        });
		
		
	});
  
  
  
  
  
 
});