// I worked on this challenge with Gregory White
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
// Challenge 1
// Pseudo: Appraoch the enemy and attack!


this.moveDown();
this.moveDown();
this.moveRight();

this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
// Edit it anywhere you like, add comments like these
this.attackNearbyEnemy();


// Challenge 2
// Pseudo: Get the mushroom, apprach the enemy, then attack!

// Tharin might consider taking a detour after line 3.

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();


//Challenge 3
// Pseudo: Get the potion, approach enemy 1 and attack,
// Pseudo: Approach enemy 2 and attack

this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();


// Challenge 4
// Pseudo: Knock down the door, taunt the guard, run away so he will follow, 
// Pseudo: let Pheobe kill him, then escape

this.moveRight();
this.bustDownDoor();



this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

//Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");

//escape
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();

this.say("Rawr");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();


//Challenge5
// Pseudo: Get close to the ogre, yell at him, then run away
// Pseudo: and let others do the work

this.moveDown();
this.moveDown();
this.say("Rawr I am Reptar");
this.moveUp();
this.moveUp();


//Challenge 6
// Pseudo: At each door, knock and see if it is your friend.
// Pseudo: If it is a friend knock their door down so they can escape. 

// Write this isFriend(name) spell to tell friend from foe.
// Return true for friends' names, false for ogres' names.
if(name === "William" || name === "Gordon")
    return true;
if(name === "Krogg")
    return false;  // <-- Start here; Krogg is not a friend!
if (name === "Lucas" || name === "Robert" || name ==="Marcus")
    return true;
    
    
//Challenge7
// Pseudo: Yell at the ogre

this.say("Hey!");

// Lure the ogre right into your arrow trap
// by saying a few more things at him.
// Anything works!
this.say("You suck");
this.say("You look unhealthly");
this.say("nice loincloth");


//Challenge8
// Pseudo: Go near the Orges, yell, then run back to your safe spot, 

this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

this.say("I can lure them in here.");

// Run your soldier out where the ogres can hear you.
this.moveXY(44,20);
this.say("HI GUISES!");
this.moveXY(70,10);

// Say something!

// Then run back behind the arrow towers for safety.

// You can shift+click on the map to insert coordinates.


//challenge9
// Pseudo: approach the soldiers, tell them to follow you, 
// Pseudo: Move near orgres, tell soldiers to attack the ogres 



this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");

// Saying anything with "follow" in it will get nearby soldiers
// to follow you
this.say("Follow thy king! MWAHAHAHA!");
this.moveXY(60, 43);
// Saying anything with "attack" will send nearby troops into
// a battle mode.
this.say("ATTACK!!!!");
// Make sure Tharin is safe!


//challenge10
// Pseudo: move the cannon so ogres are within reach 
// Pseudo: Fire on ogres

this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres

this.moveXY(43, 40);  // Move into range
this.attackXY(48, 62);  // Shoot once in the middle of the ogres{x: 48, y: 42}{x: 46, y: 43}{x: 43, y: 40}
this.attackXY(46, 53);
this.attackXY(68, 54);
this.attackXY(60, 48);

// If they survive a hit, ogres retaliate!
// Larger ogres take more than one hit...
// So, position and aim carefully.




    
    
    
    
    






 
 
 
 
 
 
 
// Reflection:
// Write your reflection here.
