
// define array of colours
var colours = ['red', 'blue', 'green'];

var numbers =[22,88, 55, 33, 88, 44];

var colours2 = new Array('red', 'blue', 'green');
 
var stringArry = ['Come till the end'];

// add array to list
colours2.push('purple');

// reverse array
var reverseArry = colours.reverse();

// sort array
var sortArry = numbers.sort();

// print
alert(colours);
console.log(colours2);
console.log(sortArry);
console.log(reverseArry);

// for loop
for(var i=0; i<10; i++){

	console.log(" This is letter i " + i);

}

// while loop
var j = 0;
while (j <10){

	console.log("This is letter j " + j);
	j++;


}

// foreach loop
numbers.forEach(function(number){

	console.log(number);

}); 


// for loop with iteration

for (var i=0; i < numbers.length; i++){

	console.log("For loop iteration" + numbers[i]);


}


// if statement

var Num1 = 1;
var Num2 = 1;

if(Num1 == Num2 ){

	console.log("This is true");

}
else{

	console.log("This is false");
}


// switch statement

var fruit = 'Apple';

switch(fruit){

	case  "Apple":
		alert ("I love apple");
		break;

	case   "Banana":
		alert ("I love banana");
		break;

	case   "Orange":
		alert ("I love orange");
		break;

    default:
    	alert ("I love every other fruit");
    	break;


}


// Object literal ie. json data

var person =  {

	firstname: 'john',
	lastname:  'musk',
	age: 	 	34,
	children: ['alex', 'sarah'],
	address: {

		state: 'leicester',
		city:  'dublin', 
		postcode: 'd5'
	},
	fullname: function(){

		return this.firstname +" "+ this.lastname;
	}


}

console.log(person.age);
console.log(person.children[0]);
console.log(person.address);
console.log(person.fullname());


// Object constructor

var car = new Object();
car.color = 'Red';
car.shape = 'square';

car.describe = function(){

	return "The car colour is"+ " " + this.color + " " + "and shape is" +  " " + this.shape
}

console.log(car.describe());


// Object constructor pattern


function school(name, address, city){

this.name = name;
this.address = address;
this.city = city;

	this.describe = function(){

		return this.name + " " + this.address + " " + this.city;

	}

}

var university = new school ('DCU', 'Rathmine', 'Dublin');

console.log(university.describe()); 


// Complex object within an object

var users =[

	{

		name: 'David King',
		age:  40
			
	},

	{

		name: 'john will',
		age:  35
			
	},

	{

		name: 'sarah love',
		age:  19
			
	}




];


console.log(users[0].name);


// Event handler

function showDate(){

	var time = document.getElementById('time');
	time.innerHTML = Date();

}

function clearDate(){

	var tinme = document.getElementById('time');
	time.innerHTML = '';

}

function changeBackground(x){

	console.log(x.value);

	var heading = document.getElementById('heading');
	heading.style.color = x.value;
}

function validateForm(){

	var firstName = document.forms["myForm"]["firstName"].value;
	var lastName = document.forms["myForm"]["lastName"].value;

	if(firstName == null || firstName ==''){

		alert ("Please enter a valid firstName");
		return false;

	}

	if(firstName.length < 3){

		alert ("firstName letter must be greater than 3");
		return false;


	}

	if(lastName == null || lastName ==''){

		alert ("Please enter a valid lastName");
		return false;

	}

	if(lastName.length < 3){

		alert ("lastName letter must be greater than 3");
		return false;


	}



}