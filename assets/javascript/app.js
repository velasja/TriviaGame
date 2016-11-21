$(document).ready(function(){
	
	var right;
	var wrong;
	var unanswered;
	var counter;
	var clock = {
		
		time: 120,
		counter: setInterval(this.tickTock, 1000),

		tickTock: function(){
			clock.time--;
		}
	};
		$("#start").click(function(){
			$(".start").hide();
			$(".game").show();
			$("#counter").html(clock.time);
			tickTock();
		});

		$("#done").click(function(){
			right = $("input:checked[value=right]").length;
			console.log(right);
			wrong = $("input:checked[value=wrong]").length;
			console.log(wrong);
			unanswered = 10 - (right+wrong);
			console.log(unanswered);
			$(".game").hide();
			$(".end").show();
			endGame();
		});

		function endGame(){
			$("#right").html(right);
			$("#wrong").html(wrong);
			$("#unanswered").html(unanswered);
		};

		// function tick(){

		// 	// for (var i=120;i>0;i--){
		// 		time--;
		// 			console.log(time);
		// 	// }
				

		// }
		

})

// function tickTock(){
// 	time--;
// 	var 
// }

