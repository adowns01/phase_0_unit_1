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
