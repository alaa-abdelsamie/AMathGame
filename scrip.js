$(function(){
	
	//*******************************************************************
	var 
	int1 , int2 ,
	result , answer , 
	maxVal = 20 ,
	answerUP = 0  , answerDown = 0 , 
	seconds = 0 , minutes = 0 ;
	
	var calcArr = ['+', '-', 'x' , '÷'];
	var vTrue = true; // sound open = true   , stop = false
	
	var audio = new Audio('sounds/sound.wav');
	audio.loop = true;
	
	//*******************************************************************
	$('#startPlay').click(function(){
		$('#start').hide();
		$('#game').show();
		if(vTrue== true){
			audio.play();
		}
		game();
	});
	//*******************************************************************
	$('.refresh').click(function(){
		game();
	});
	$('.back').click(function(){
		$('.dailog').hide();
	});
	$('.tie').click(function(){
		$('.about').show();
	});
	//*******************************************************************
	$('.settings').click(function(){
		$('.settingsBox').show();
	});
	$('.Easy').click(function(){
		$('.settingsBox').hide();
		maxVal = 10;
	});
	$('.Normal').click(function(){
		$('.settingsBox').hide();
		maxVal = 30;
	});
	$('.Hard').click(function(){
		$('.settingsBox').hide();
		maxVal = 50;
	});
	//*******************************************************************
	$('.volume').click(function(){
		if(vTrue == true){
			$(this).removeClass('fa-volume-up');
			$(this).addClass('fa-volume-off');
			audio.pause();
			vTrue = false;
		}else{
			$(this).removeClass('fa-volume-off');
			$(this).addClass('fa-volume-up');
			audio.play();
			vTrue = true;
		}
	});
	//*******************************************************************
	$('.calc span').click(function(){
		var m = $(this).attr('class');
		if(m == 'math1'){
			answer = int1 + int2 ;
		}else if(m == 'math2'){
			answer = int1 - int2;
		}else if(m == 'math3'){
			answer = int1 * int2;
		}else if(m == 'math4'){
			answer = int1 / int2;
		}
		if(answer == result ){
			answerUP = answerUP + 1;
			$('.upNumber').text(answerUP);
			game();
		}else{
			answerDown = answerDown + 1;
			$('.downNumber').text(answerDown);
			game();
		    $("#game").css('background-color', "#C62828"); //change second game background
		    setTimeout(function() {
		        $("#game").css('background-color',"#EDE7F6"); // change it back after ...
		    }, 500); // waiting one second
		}
	});
	//*******************************************************************
	setInterval(function(){
		if(seconds == 60){
			minutes = minutes + 1;
			seconds = 00;
		}else{
			seconds = seconds + 1;
		}
		$('.minutes').text(minutes);
		$('.seconds').text(seconds);
	},1000);
	//*******************************************************************
	function game(){
		int1  = getRandomInt(maxVal);
		int2  = getRandomInt(maxVal);
		var rand = calcArr[Math.floor(Math.random() * 4)];
		$('.int1').text(int1);
		$('.int2').text(int2);
		if(rand == '+')
			result = int1 + int2;
		else if(rand == '-')
			result = int1 - int2;
		else if(rand == 'x')
			result = int1 * int2;
		else if(rand == '÷')
			result = int1 / int2;
		
		$('.result').text(result);
	}
	//*******************************************************************
	function getRandomInt(max){
		return Math.floor((Math.random() * max) + 1);
    }
    //*******************************************************************
});
