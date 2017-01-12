//BIG FRAME
$(document).ready(function(){
	// A
	$("#a").hover(function(){
		$(".bover").clearQueue().finish();
		$(".cover").clearQueue().finish();
		$(".dover").clearQueue().finish();
		$("#aTitle").css("transition", "0.5s");
		$("#aTitle").css("margin-top", "50px");
		$(".aover").fadeIn();
	}, function(){
		$(".aover").hide();
		$("#aTitle").css("margin-top", "100px");
		
	});
});

$(document).ready(function(){
	// B
	$("#b").hover(function(){
		$(".aover").clearQueue().finish();
		$(".cover").clearQueue().finish();
		$(".dover").clearQueue().finish();
		$(".bTitle").css("transition", "0.5s");
		$(".bTitle").css("margin-top", "100px");
		// $(".bover").css("height", "420");
		$(".bover").fadeIn(1000);
	}, function(){
		$(".bover").hide();
		$(".bTitle").css("margin-top", "200px");
		
	});
});

$(document).ready(function(){
	// C
	$("#c").hover(function(){
		$(".aover").clearQueue().finish();
		$(".bover").clearQueue().finish();
		$(".dover").clearQueue().finish();
		$(".cTitle").css("transition", "0.5s");
		$(".cTitle").css("margin-top", "50px");
		$(".cover").fadeIn(1000);
	}, function(){
		$(".cover").hide();
		$(".cTitle").css("margin-top", "100px");
		
	});
});

$(document).ready(function(){
	// D
	$("#d").hover(function(){
		$(".aover").clearQueue().finish();
		$(".bover").clearQueue().finish();
		$(".cover").clearQueue().finish();
		$(".dTitle").css("transition", "0.5s");
		$(".dTitle").css("margin-top", "50px");
		$(".dover").fadeIn(1000);
	}, function(){
		$(".dover").hide();
		$(".dTitle").css("margin-top", "100px");
		
	});
});


//SMALL FRAME
$(document).ready(function(){
	// AA
	var close = true;
	$(".aa").click(function(){
		if (close) {
			$(this).css("height", "300px");
			$(this).css("transition", "0.5s");
			$('.bb').css("height", "25vw");
			$('.cc').css("height", "25vw");
			$('.dd').css("height", "25vw");
			$('.aaS').fadeIn();
			close = false;
		} else {
			$(this).css("height", "25vw");
			$('.aaS').fadeOut();
			close = true;
		}
	});			
});

$(document).ready(function(){
	// BB
	var close = true;
	$(".bb").click(function(){
		if (close) {
			$(this).css("height", "300px");
			$(this).css("transition", "0.5s");
			$('.bbS').fadeIn();
			close = false;
		} else {
			$(this).css("height", "25vw");
			$('.bbS').fadeOut();
			close = true;
		}
	});	
});

$(document).ready(function(){
	// CC
	var close = true;
	$(".cc").click(function(){
		if (close) {
			$(this).css("height", "300px");
			$(this).css("transition", "0.5s");
			$('.ccS').fadeIn();
			close = false;
		} else {
			$(this).css("height", "25vw");
			$('.ccS').fadeOut();
			close = true;
		}
	});	
});

$(document).ready(function(){
	// DD
	var close = true;
	$(".dd").click(function(){
		if (close) {
			$(this).css("height", "300px");
			$(this).css("transition", "0.5s");
			$('.ddS').fadeIn();
			close = false;
		} else {
			$(this).css("height", "25vw");
			$('.ddS').fadeOut();
			close = true;
		}
	});	
});

// To top buttom
window.onscroll=function(){
	if(document.body.scrollTop||document.documentElement.scrollTop>0){
		document.getElementById('rTop').style.display="block"
	}else{
		document.getElementById('rTop').style.display="none"
	}
}
function toTop(){
	window.scrollTo('0','0');
	document.getElementById('rTop').style.display="none"
}


