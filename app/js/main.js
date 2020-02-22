(function($){
	$(document).ready(function(){

		var auth_wrap = $('.auth-wrap');
		auth_wrap.css({'display':'none'});

		var auth_open = $("<div class='auth-open'>Show Form</div>");

		$('body').append(auth_open);

		var auth_open      = $('.auth-open'),
			auth_close     = $('.auth-close');
			

		auth_open.click(function(){
			auth_wrap.show();
			$(this).hide();
		});

		auth_close.click(function(){
			auth_wrap.hide();
			auth_open.show();
		});

		var auth_email           = $('.auth-form__email'),
		 	auth_email__input    = auth_email.children('input');

		auth_email__input.focus(function(){
			$(this).css({'color':'#333'});
		}).blur(function(){
			$(this).css({'color':'#999'});
		});
	});
})(jQuery);