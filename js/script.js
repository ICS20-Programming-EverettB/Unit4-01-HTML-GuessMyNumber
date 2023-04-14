// Created by: Everett
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function compaires the numbers .
 */
function calculate () {
   //random number gernorater 
  const MAX = 6
  const MIN = 1
  let random = Math.floor((Math.random() * MAX) + MIN);
  let display = ""
  // user number input
  let usernum = parseFloat(document.getElementById('unumber').value);

  // process number
if (usernum == random) {
  display = "Correct!"
}
if (usernum != random) {
  display = "Incorrect, try again!"
}
  
  // output correct or incorrect
  document.getElementById('guess-number').innerHTML = display

}
 
