
// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Amol Borcar
//  2.Amelia Downs


// 1. "YOU SIGNED... WHO?!"
// Pseudocode: 
// Create objects with properties: name (string), age(int), quote(string)

var benStiller = {
  name: "Ben Stiller",
  age: 48,
  quote: "There's got to be more to life than being really, really, ridiculously good looking"
}

var benCumb = {
  name: "Benedict Cumberbatch",
  age: 41,
  quote: "Nice to meet you, Amelia."
}

// 2. "Here they Come!"
// Pseudocode: 
// make clients same as before, then store in array

var adamSandler = {
  name: "Adam Sandler",
  age: 47,
  quote: "That's your home. Are you to good for your home?"
}

var kristinBell = {
  name: "Kristin Bell",
  age: 33,
  quote: "Do you want to build a snowmen?"
}

var jimCarrey = {
  name: "Jim Carrey",
  age: 52,
  quote: "...so you're telling me there's a chance? Yay."
}

var celebArray = [benStiller, benCumb, adamSandler, kristinBell, jimCarrey];


// 3. "TIME IS MONEY!"

//YOUR CODE HERE!

// Pseudocode:
// Create a function to make a new client with properties name, age, and quote

function Client(name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
}

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";


// 4. "SHOW 'EM OFF!"

// Pseudocode:
// Loop through the array and display each property for each celebrity in the console;

// Code

// for (var i = 0; i < celebArray.length; i++) {
//   console.log(celebArray[i].name);
//   console.log(celebArray[i].age);
//   console.log(celebArray[i].quote);
//   console.log("");
// }


// ** BONUS **

// Better code

for (var i = 0; i < celebArray.length; i++) {
  console.log("My name is " + celebArray[i].name);
  console.log("I am " + celebArray[i].age + " years old");
  console.log("I say stuff like " + celebArray[i].quote);
  console.log("");
}

//  Your Reflection:

// Amol and I had no problems major problems with this set and the few problems we did encounter ( we didn't capitalize
// "Client" and we forgot the + in the consol.log) we figured out quickly together. 

// There was nothing new in this challenge, but it was another good reinforcement on how to use objects in JS. 
// I am feeling more and more confident about JS every day. 

// The part I enjoyed most was just working with Amol he was a great pair. I can't wait to meet him in SF.

