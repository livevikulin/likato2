$(document).ready(function () {
  $('select').customSelect();
  $('.faq-box').click(function(){
    $(this).parent().siblings().find('.faq-active').next('.faq-box__answer').slideToggle().prev().find('.btn-active').removeClass('btn-active').closest('.faq-active').removeClass('faq-active');
    $(this).toggleClass('faq-active');
    $(this).next('.faq-box__answer').slideToggle();
    $(this).find('.faq-box__btn').toggleClass('btn-active');
  });
});

//Инициализация wow js
new WOW().init();

//Слайдер
$(document).ready(function() {	
	var slideNow = 1;
	var slideCount = $('.sliderwprapper').children().length;
	var slideTime = 5000;
	var navBtn = $('.btns-nav');

	navBtn.click(function() {
		navBtn = $(this).index();
		$('.active').removeClass('active');
		$(this).toggleClass('active');
		if (navBtn + 1 != slideNow) {
			var translateHeight = -$('.viewport').height()	* (navBtn);	
			$('.sliderwprapper').css({
				'transform': 'translate(0,'+translateHeight+'px)',
				'-o-transform': 'translate(0,'+translateHeight+'px)',
				'-webkit-transform': 'translate(0,'+translateHeight+'px)'
			});	
			slideNow = navBtn + 1;
		}
	});

	//Бургер меню 
	$('.header-mobile').click(function(){
		$(this).toggleClass('button-menu__active');
		$('.mobile').slideToggle('active-menu');
	});

	$("#hero-name").on("change",function(){
		if (this.value !== "") {
			$(this).next().css({'display':'none'});
		}
	});
	
	//Маска для телефона
	$("#hero-phone").mask("+7(999)-999-99-99");
	$("#invite-phone").mask("+7(999)-999-99-99");

	//Убирает label, если input заполнен 
	$("input[data-accsess]").on("change",function(){
		if (this.value !== "") {
			$(this).parent().find('label').css({'display':'none'});
		} else {
			$(this).parent().find('label').css({'display':'block'});
		}
	});

	//Параллакс листьев
	$(window).bind('scroll',function(e){
    parallaxScroll();
	});
	
	function parallaxScroll(){
			var scrolled = $(window).scrollTop();
			$('#leaf').css('top',(250+(scrolled*.35))+'px');
			$('#leaf2').css('top',(525-(scrolled*.45))+'px');
			$('#leaf3').css('top',(335-(scrolled*.25))+'px');
			$('#leaf4').css('top',(550+(scrolled*.35))+'px');
			$('#leaf5').css('top',(800-(scrolled*.55))+'px');
			$('#leaf6').css('top',(0+(scrolled*.65))+'px');
			$('#leaf7').css('top',(900-(scrolled*.25))+'px');
			$('#leaf8').css('top',(500-(scrolled*.35))+'px');
	};

});	