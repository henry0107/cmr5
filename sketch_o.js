// Copyright (c) 2020 chiyanglin@gmail.com
// Modified for Posenet for Body Education
//
// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js
=== */

let video;
var windows_height = document.body.clientHeight; // for fit windows size
var windows_width = document.body.clientWidth;
var user_language = navigator.language;


function setup() {
  var x = "Language of the browser: " + user_language;

  createCanvas(windows_width/2, windows_height/2); // for fit windows size

  var constraints = {
    audio: false,
    video: {
      facingMode: {
        exact: "environment"
      }
    }
  };

  video = createCapture(constraints);

  video.size(width,height);
  console.log(" video facing mode : ", video.facingMode);
  console.log(" windows width =" ,windows_width);
  console.log(" windows height =" ,windows_height);
  console.log(" Capture width =" ,width);
  console.log(" Capture height =" ,height);
  console.log(x);
  document.getElementById("demo").innerHTML = x;
  video.hide();
}

function draw() {
  background(255);
  image(video, 0, 0, width,height);
}
