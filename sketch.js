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
let switchFlag = false;
let switchBtn;

var options = {
     video: {
         facingMode: "user"
    }
   };

function setup() {
  var x = "Language of the browser: " + user_language;

  createCanvas(windows_width/2, windows_height/2); // for fit windows size

  //video = createCapture(constraints);
  video = createCapture(options);

  switchBtn = createButton('Switch Camera');
  switchBtn.position(19, 19);
  switchBtn.mousePressed(switchCamera);

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


function switchCamera()
{
  switchFlag = !switchFlag;
  stopCapture();
  if(switchFlag==true)
  {
   video.remove();

   options = {
     video: {
         facingMode: {
          exact: "environment"
        }
     }
   };
  }
  else
  {
   video.remove();

   options = {
     video: {
         facingMode:"user"
     }
   };
  }
  capture = createCapture(options);
}

function stopCapture() {
  let stream = video.elt.srcObject;

  if(stream){
    tracks = stream.getTracks();
    if(tracks){
      tracks.forEach(function(track) {
        track.stop();
      });
    }
  }

  video.elt.srcObject = null;
}
