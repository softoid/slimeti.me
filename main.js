var $honker = $('#honk');
var wd = $honker.width();
var ht = $honker.height();
$(window).mousemove(function(event) {
	$honker.css({
		left:  event.pageX - (wd/2) - 10,
       	top:   event.pageY - (ht/2) - 5
	});
});
$honker.click(function(){
	document.getElementById("audio").play();
});
