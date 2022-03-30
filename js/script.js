// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the circumference of a circle.
 */
function calculate () {
  // input
  const radius = parseInt(document.getElementById("radius-of-circle").value)
  // process
  const circumference = 2 *(3.14159 * radius)
  // output
document.getElementById("circumference").innerHTML =
    "The circumference is: " + circumference.toFixed(2) + ' cm²' 
}
