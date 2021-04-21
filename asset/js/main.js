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
let open_elements = document.getElementsByClassName('oper');
		console.log(open_elements)