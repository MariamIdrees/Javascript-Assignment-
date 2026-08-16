let userAge = parseInt(prompt ("Hello, how old are you?"))

if (userAge <12  ){
    alert("your ticket price is 5 dollars");

} 

else if (userAge < 18 ) {
    alert ("your ticket price is 10 dollars");
} else if (userAge < 60) {
     alert  ("your ticket price is 20 dollars")}

     else {
     alert  ("your ticket is 15 dollars")}

   



let purchase = parseInt(prompt("Hello, How much are you purchasing?"))
if (purchase >= 100 ){
    alert("congratulations!!! you have a discount of 20 dollars")
} else if (purchase >= 50){
    alert ("congratulations!!! you have a discount of 10 dollars")

 } else if (isNaN(purchase)){
    alert ("you have to enter in numbers")

}else  { alert ("sorry, you do not have any discount!")}




