// I worked with Alec Ashford on this challenge

// Your mission description:

// Idea: 
// Find the pigeon.
// Give the pigeon the letter. 
// The pigeon flys to your ally and gives him or her your message.

//Pseudo-code

// You (Fearsome Warrior)
    // x_loc, y_loc, health, 
    // funcs: give, move_up, move_down, move_left, move_right
    
// Pigeon 
    // x_loc, y_loc, letter
    // funcs: locate, give
    
    
//Code:

// Our first take we used COMPLETELY wrong syntax. I'm rather embarassed that you're looking at this. 
// If you want to spare your eyes, just skip down to the next section. 

// var you = {
//     var x_loc = 10,
//     var y_loc = 10;
//     var health = 100;
  
//     function move_up(){
//       you.y_loc += 10;
//     }
    
//     function move_down(){
//       you.y_loc -= 10;
//     }
    
//     function move_left(){
//       you.x_loc -= 10;
//     }
    
//     function move_right(){
//       you.x_loc += 10;
//     }
  
//     function give(){
//       pigeon.letter = prompt("CooCoo, what would you like to tell your friend");
//     }
// };

// var pigeon = {
//   var x_loc = 90;
//   var y_loc = 40;
//   var letter = "";
  
//   function fly(){
//     pigeon.x_loc = ally.x_loc;
//     pigeon.y_loc = ally.y_loc;
//   }
  
//   function give(){
//     console.log("Coo coo. You've got mail.");
//     ally.letter = pigeon.letter;
//     console.log(pigeon.letter);
//   }
  
// };

// var ally = {
//   x_loc 30;
//   var y_loc = 70;
//   var letter = "";

// };



//Refactured code: 
// I'm glad you survived the origional code.

var you = {
    x_loc: 10,
    y_loc: 10,
    health: 100,
  
   move_up: function(){
      you.y_loc += 10;
    },
    
    move_down: function(){
      you.y_loc -= 10;
    },
    
    move_left: function(){
      you.x_loc -= 10;
    },
    
    move_right: function (){
      you.x_loc += 10;
    },
  
    give: function (){
      pigeon.letter = prompt("CooCoo, what would you like to tell your friend");
    }
};

var ally = {
  x_loc: 30, 
  y_loc: 70,
  letter: "",
};

var pigeon = {
  x_loc: 90,
  y_loc: 40,
  letter: "",
  
  fly: function(){
    pigeon.x_loc = ally.x_loc;
    pigeon.y_loc = ally.y_loc;
  },
  
  give: function(){
    console.log("Coo coo. You've got mail.");
    ally.letter = pigeon.letter;
    console.log(pigeon.letter);
  }
  
};


// Reflection
// 
//  Our biggest problem was syntax. I haven't worked in javascript for awhile and I was the one driving
// so I just went on typing this way (which looks like it *could* be right, if you didn't know js). The 
// logic was all there, we just needed to remind ourselves on how to use objects properly. 

// Alec and I used this site (http://www.phpied.com/3-ways-to-define-a-javascript-class/ ) to remind
// ourselves how to use JS properly. 
// 
//  Overall this challenge was good though. It was fun coming up with the idea with Alec and writing it 
// out together. The fact that were could be silly allowed us to bond better, I think. This was the 
// pairing where we hit a major roadblock, obviously, NONE of our code worked. So it was nice to see
// how we worked to problem solve as a pair. 

// When we were problem solving I had a tendency to try to navagate AND drive, but I caught myself
// and tried to keep comunications open with Alec about my weekness in that way. 
// 
//  I think I need a little more work with JS before I feel confident in it again. I think I might go back 
// and re-do the js codecademy track.
// 
// 








