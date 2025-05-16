// Add Two Number ====>

function add (x,y){
    let result=x+y;
    console.log(result);
}
add(30,40);


// Even Or Odd Checker===>

function isEven(num) {
	if (num % 2 === 0) {
		return "Even";
	} else {
		return "Odd";
	}
}
console.log(isEven(12));

// Celsius To FAhrenheit =====>

function celsiusToFahrenheit(celsius) {
	return (celsius * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(5));

// Square of A Number ====>
function squareNumber(num){
    return num*num;
}
console.log(squareNumber(6));


// Get Frist Character of a String 
function fristCharacter(str){
    return str.charAt(2);
}
console.log(fristCharacter("World"));