let hour = 9;

if (hour < 10 || hour > 18) {
  console.log( 'The office is closed.' );
}
let hourr = 12;
let minute = 30;

if (hourr == 12 && minute == 30) {
  console.log( 'The time is 12:30' );
}
if (1 && 0) { // evaluated as true && false
    console.log( "won't work, because the result is falsy" );
  } 

var balance = -325;
var checkBalance = true;
var isActive = true;

// Start only if checkBalance === true
if (checkBalance === true) {
    // Cases when account is active. Now, the balance could be <, =, or > zero
    if (isActive === true && balance > 0) {
        console.log("Your balance is $" + balance.toFixed(2) + ".");
    }
    else if (isActive === true && balance === 0){
        console.log("Your account is empty.");
    } 
    else if (isActive === true && balance < 0){
        console.log("Your balance is negative. Please contact bank.");
    }
    // Case when account is NOT active
    else if (isActive === false) {
        console.log("Your account is no longer active.");
    }  
} 
else {
  console.log("Thank you. Have a nice day!");
}

