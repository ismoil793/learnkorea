$(function(){
	$('.collapse').on('show.bs.collapse', function(){
		$(this).prev().find('.fa').removeClass().addClass('fa fa-minus-circle');
	});
	$('.collapse').on('hide.bs.collapse', function(){
		$(this).prev().find('.fa').removeClass().addClass('fa fa-plus-circle');
	});
	$('#myForm').validator({
		feedback: {
			success: "fas fa-check-circle",
			error: "fas fa-times-circle"
		}
	});

	$(".form-sel").select2({
		minimumResultsForSearch: Infinity
	});


	// new WOW().init();  // Можно просто вызвать эту фу-цию она используется по умолчанию,то что ниже я взял с сайта https://mynameismatthieu.com/WOW/docs.html 
	// и немного отредактировал лучше редактировать сам js а то придется каждый раз добавлять разные аттрибуты для дивов например: data-wow-offset="10"
	wow = new WOW(
	{
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       100,          // default
                      mobile:       false,       // default
                      live:         true        // default
                  }
                  )
	wow.init();

/*===========================================Javascript code for Form================================================*/
var email;
var subject="Welcome Message";
var emailBody = 'Hello';

$('#myForm').submit(function(e){
	// email=$('#email').val();

	$.ajax({
		url:"https://formspree.io/ismoil.793@gmail.com",
		method: "POST",
		data: $(this).serialize(),
		dataType: "json"
	});
	e.preventDefault();
	$(this).get(0).reset();
	alertify.success("Message sent");
});

});

