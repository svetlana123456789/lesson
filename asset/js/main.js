//alert("Hello Word!");

/*
	Comment
*/

//создание переменных
//1. var 
//2. let

var colorArray = [
			"#5A9C6E", 
			"#A8BF5A",
			"#CCC",
			"#000",
			"#00ff00"
			]
var i = 0;

function changeColor() {
	document.body.style.background = colorArray[i];

	i++;
	console.log(colorArray[i]);


	if (i > colorArray.length - 1) {
		i = 0;
	
	}
}
function selectColor(){
	let color = document.getElementById("color").value;
	
	document.body.style.background = color;
	document.getElementById('result').innerHTML = color;

	
	//console.log(color);
}
let oper_elements = document.getElementsByClassName('oper');
let numbers = document.getElementsByClassName('number');


		console.log(oper_elements);
for (var i = 0; i < oper_elements.length; i++) {
	oper_elements[i].addEventListener('click', oper);/*function(event){
 		console.log(event);*/
 	}
 for (var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click', addNumber);
 	}
 	function oper(){
 		let o = this.value;
 		//console.log(o);

 			add(o);
 		if (o == '=') {
 			//alert(o);
 			// calc();
 		}
 	}

 	
 			function addNumber(){
 				let n = this.value;
 				add(n)
 			}
 	function add(v) {
		let input = document.getElementById('enter');

 		let output = input.value;

 		input.value = output + v;
 	}
