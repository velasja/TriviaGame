$(document).ready(function(){
	
	var right;
	var wrong;
	var unanswered;
	var counter = 0;
	var time = 120;

		$("#start").click(function(){
			$(".start").hide();
			$(".game").show();
			counter=setInterval(tickTock, 1000);
			tickTock();
		});

		$("#done").click(function(){
			endGame();
		});

		function endGame(){
			right = $("input:checked[value=right]").length;
			wrong = $("input:checked[value=wrong]").length;
			unanswered = 10 - (right+wrong);
			$(".game").hide();
			$(".end").show();
			$("#right").html(right);
			$("#wrong").html(wrong);
			$("#unanswered").html(unanswered);
		};

		function tickTock(){
			if (time>0){
				time=time-1;
				$("#counter").html(time);
			}else{
				clearInterval(counter);
				endGame();
			}


		}

})

