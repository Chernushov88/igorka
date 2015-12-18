/*-----------------------------------------------------------------------------------*/
/*	menu
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){

	$(".li-first-child").hover(
	  function () {
	    $('.nav-menu-hover').css('display', 'block');
	  },
	  function () {
	     $('.nav-menu-hover').css('display', 'none');
	  }
	);
});