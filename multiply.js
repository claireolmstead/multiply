function multiply(){
	//must multiply by 1 for computer to read it as an int
	var num1 = document.getElementById('num1').value *1;
	var num2 = document.getElementById('num2').value *1;
	var max;
	var min;
	var answer = 0;
	//base case
	if ((num1 === 0) || (num2 === 0)){
		//write answer to element
		document.getElementById('product').innerHTML = 0;
	//if answer != 0
	}else{
		if(num1 > num2){
			max = num1;
			min = num2;
		}else{
			max = num2;
			min = num1;
		}
		for(var i = 0; i < min; i++){
			answer += max;
		}
	}
	//write answer to element
	document.getElementById('product').innerHTML = answer;
}

function multiply2(){
	var num1 = document.getElementById('number1').value *1;
	var num2 = document.getElementById('number2').value *1;
	var num3 = document.getElementById('number3').value *1;
	var answer = 0;
	let getAnswer = 0;
	//base case
	if ((num1 === 0) || (num2 === 0) || (num3 === 0)){
		//write answer to element
		document.getElementById('product2').innerHTML = 0;
	//if answer != 0
	}else{
		for(var i = 0; i < num1; i++){
			answer += num2;
		}
		for(var j = 0; j < answer; j++){
			getAnswer += num3;
		}
	}
	//write answer to element
	document.getElementById('product2').innerHTML = getAnswer;
}


$(document).ready(function () {
	$("#multiply").click(function () {
		multiply();
	});
	$("#multiply2").click(function () {
		multiply2();
	});
	$("#clearIt").click(function () {
        num1.value = '';
		num2.value = '';
		document.getElementById('product').innerHTML = "";
    });
    $("#clearIt2").click(function () {
        number1.value = '';
		number2.value = '';
		number3.value = '';
		document.getElementById('product2').innerHTML = "";
    });

});