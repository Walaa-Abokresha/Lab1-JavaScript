var firstName= prompt('Enter your First Name');
console.log(firstName);

var lastName= prompt('Enter Your Last Name');
console.log(lastName);

var fullName=confirm('Are you '+ firstName +" "+ lastName + " " );
console.log(fullName);

//  var dateOfBirth = prompt('Enter your date of bitrh')
//  var dateOfBirth = prompt( new Date(""));  
// var month_diff = Date.now() - dateOfBirth.getTime();  
// var age_dt = new Date(month_diff);   
// var year = age_dt.getUTCFullYear();  
// var age = Math.abs(year - 1900);    
// document.write("Age of the date entered: " + age + " years");  

var age=prompt("Enter your Age");
console.log(age);

alert("Welcome"+" "+firstName+" "+lastName +" "+"You are"+ " " + age+" "+ 'Years Old');

// Question2
alert("It is the first release of a calculator that only has a summation feature!");

var x = Number(prompt("Enter The First Number"));
console.log(x);

var y = Number(prompt("Enter The Second Number"));
console.log(y);

function add(x,y){
    return(x+y)
}
var result=add(x,y);
alert(  result  );
