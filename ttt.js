let numA = 5
let numB = '5'
console.log ('numA == numB ',numA == numB,'\n','numA === numB ',numA === numB)
console.log (numA - numB)
console.log (numB - numA)
console.log (numB + numB)
console.log (numA + numA)

// ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.
let name = 'fola'
let car = name === 'fola' ? 'toyota':'bmw'

let user;
console.log(user ?? "Anonymous"); // Anonymous (user is undefined)

 user = "John";
console.log(user ?? "Anonymous"); // John (user is not null/undefined)
/* || returns the first truthy value.
?? returns the first defined value.*/

let i = 3;
while (i) console.log(i--);

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    console.log(i);
  }

  let a = 2 + 2;

switch (a) {
  case 3:
    console.log( 'Too small' );
    break;
  case 4:
    console.log( 'Exactly!' );
    break;
  case 5:
    console.log( 'Too big' );
    break;
  default:
    console.log( "I don't know such values" );
}

function showMessage(from, text) {

  from = '*' + from + '*'; 

  console.log( from + ': ' + text );
}

let from = "Ann";
showMessage(from, "Hello"); 

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  console.log( "You agreed." );
}

function showCancel() {
  console.log( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

rainbow.splice(2, 1, "Yellow", "Green"); // I added 2 colours rmv 1
rainbow.splice(5, 0, "Purple"); //add purple rmv none
console.log(rainbow);
