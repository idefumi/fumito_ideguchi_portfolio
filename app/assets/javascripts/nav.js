//ナビゲーションの高さ変化
$(function() {
	var $win = $(window),
		$header = $('#header-class'),
		$nav = $('nav'),
		$boxheight = 'height';
	$win.on('load scroll', function() {
	  var value = $(this).scrollTop();
		  height = $header.height();
	  if ( value >= height ) {
		$nav.addClass($boxheight);
	  } else {
		$nav.removeClass($boxheight);
	  }
	});
  });
  //ページ内繊維のスムーズ遷移
  $(function(){
	$('a[href^="#"]').click(function(){
	  var speed = 750;
	  var href= $(this).attr("href");
	  var target = $(href == "#" || href == "" ? 'html' : href);
	  var position = target.offset().top;
	  $("html, body").animate({scrollTop:position}, speed, "swing");
	  return false;
	});
  });
