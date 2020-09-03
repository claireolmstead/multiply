function multiply(){
	//must multiply by 1 for computer to read it as an int
	var num1 = document.getElementById('num1').value *1;
	var num2 = document.getElementById('num2').value *1;
	var answer = 0;
	//base case
	if ((num1 === 0) || (num2 === 0)){
		//write answer to element
		document.getElementById('product').innerHTML = 0;
	//if answer != 0
	}else{
		for(var i = 0; i < num1; i++){
			answer += num2;
		}
	}
	//write answer to element
	document.getElementById('product').innerHTML = answer;
}


$(document).ready(function () {
	$("#multiply").click(function () {
		multiply();
	});
	$("#clearIt").click(function () {
        num1.value = 0;
		num2.value = 0;
		document.getElementById('product').innerHTML = "";
    });

});