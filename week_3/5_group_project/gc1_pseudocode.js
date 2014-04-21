// Pseudocode

// Intro: There are two arrays and we want to create three functions to do things with the arrays.

//-----------------------------------------------------------
// Function 1: Find the sum of the array

// Set a sum variable to zero. 
// Loop through the array using a for loop. At each instance, add the element to the sum.
// Return the sum.

//-----------------------------------------------------------
// Function 2: Find the mean of an array

// Call the sum function 
// Divide the answer from the sum function by the length of the array
// Return that answer

//-----------------------------------------------------------
// Function 3: Find the median of the array. For this excercise, if there is an even amount of 
// numbers in the array, we return the mean (average) of the two middle numbers.
// Note that the  arrays are already sorted in order, 
// this solution would not work if they were unsorted

// create an if/else statement for even and odd arrays 
// if the number of elements in the array is odd, return the element in the array at [(array length / 2) +1]
  // make sure to use integer division, so 3/2 = 1
// if the number of elements in the array is even, 
  // add the elements at positions (array length/2) and (array length/2) +1 together [these are the center to elements]
    // again, make sure to use integer division here
  // divide this sum by 2 and return this answer 



// Reflection: 

// First, this exercise was an example of why reading instructions is important. My accountability group just saw 
// that it was a group project and we all assumed that it was a group parining project, when actually, every person
// worked individually. So we tried to find a time that we could all meet, but failed. Between four busy schedules 
// and four times zones (Ronald is exactly 12 hours ahead of me!) we just couldn't find a time. 
// Then I actally read the guidelines and orealized we didn't actually need to carve our a large chunk of time 
// together. 

// I know that there were some problems with the code with one of the tests and I know that the other group members
// pulled together and fixed it. I spent the last four days without a computer, so I was unavailable. I feel slightly 
// guilty about it, but my team mates knew that and I turned in my part early and helped with what I could before I left.

// Doing this project makes me even more excited for working in person because I think that it will be easier to pair 
// when we are all in the same time zone on relatively the same schedule. 

// I had never heard of the terms "user stories" or "refactoring" before. In the past I have only used pseudo code 
// before "real" coding. I like breaking it down even more and I can imagine that it would be more helpful with large
// projects. 
