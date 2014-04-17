// I was by myself on this challenge.




// Pseudocode
// 
// set secretNumber a number;
// set secretNumber to 7;
// set password to a string
// set password to "just open the door"
// set allowedIn to a bool
// set allowedIn to true
// set alloweedIn to false
// set members equal to something so it is defined
// set members equal to an array 
// put "John" in the array
// Put two other things in the array, then make "Mary" fourth in the array 



// __________________________________________
// Write your code below.

secretNumber = 7;
password = "just open the door";
allowedIn = true;
allowedIn = false;
members = ["John", 0, 0, "Mary"];





// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

// I don't think it can get much similar than that. There are no 
// unesccesary lines. 



// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// At first I didn't read the directions well, so I was confused about what I was
// supposed to do. I just saw an error message and then I started looking for an 
// updated file because I thought I had a wrong one. 
// Then one rereading instructions I realized that the error messages told me what
// to do. Once I realized that reading and analyzing the error messages was the point 
// of this lesson it went quickly. 
// They are most very explanatory and I am very comfortable with reading the kinds
// of error messages that were in this challenge. 
// I found this challenge a little tedious because I am looking forward to more coding
// and problem solving. 
// My tip for next time is read the instructions more throughly and read the error 
// message more thourghly before I start looking for help. Oops. 

// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)
