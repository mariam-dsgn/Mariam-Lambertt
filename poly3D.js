
let cols, rows; // columns. rows
let scl = 20; //scale
	let w = 10000
	let h = 800


function setup(){
createCanvas(600, 400, WEBGL)
cols = w / scl  //number of colors is the width of my grid divided by the scale
	rows = h / scl


}



function draw() {
	background(0)
	// frameRate(10)
	
for (let y = 0; y < rows; y ++){
	beginShape(TRIANGLE_STRIP);
	for (let x = 0; x < cols; x++){
		fill(0)
		stroke(255)
		lights()
		vertex(x*scl, y*scl, random(-10,10));
		vertex(x*scl, (y+1)*scl, random(-10,10));

			// rect (x*scl, (y+1)*scl, scl, scl)
		}
	endShape();
	}

	//   ctracker = new clm.tracker();
 //  ctracker.init(pModel);
 //  ctracker.start(videoInput.elt);
	


	// cols = w / scl  //number of colors is the width of my grid divided by the scale
	// rows = h / scl
	
}




// function draw() {
// 	background(0)
	
// 	  //get the detection score, or how well the face is detected (from 0 to 1)
//   var detectionScore = ctracker.getScore();

//   if (detectionScore > 0) {
    
//     // get array of face marker positions [x, y] format
//     var positions = ctracker.getCurrentPosition();
//     var leftEyeX = positions[32][0];
//     var leftEyeY = positions[32][1];

//     var rightEyeX = positions[27][0];
//     var rightEyeY = positions[27][1];

//     var noseX = positions[62][0];
//     var noseY = positions[62][1];
    
//     var faceLeftX = positions[1][0];
//     var faceLeftY = positions[1][1];
//     var faceRightX = positions[13][0];
//     var faceRightY = positions[13][1];



// //the distance between the left point and the rightmost point is a good indication
//     //of the size of the face or proximity to the camera and I can use it to scale my graphic elements
//     var size = dist(faceLeftX,faceLeftY, faceRightX, faceRightY);
    
//     //draw the face
//     fill(255,255,255,60);
//     ellipse(noseX, noseY, size, size);
    
//     //draw the eyes
//     fill(255);
//     ellipse(rightEyeX, rightEyeY, 10, 10);
//     ellipse(leftEyeX, leftEyeY, 10, 10);
    
//     var noseSize = map(volume, 0, 1, 30, 400);
//     //draw a nose
//     ellipse(noseX, noseY, noseSize, noseSize/2);

// 		}
//     }

  


























// 	let camX = map(mouseX, mouseY, width, -200, 0)
// 	// camera(camX,0,(height/2) / tan(PI/6),0,0,0,0,1,0)
// 	// translate(0,0, mouseX)
// 	stroke(255)
// 	noFill()
	
// 	translate(-width/2, -height/6)
// 	// translate(w/20 , h/2)
// 	rotateX(PI/3)
	
// 	frameRate(1)
	
	
// for (let y = 0; y < rows; y ++){
// 	beginShape(TRIANGLE_STRIP);
// 	for (let x = 0; x < cols; x++){
// 		vertex(x*scl, y*scl, random(-10,10));
// 		vertex(x*scl, (y+1)*scl, random(-10,10));

// 			// rect (x*scl, (y+1)*scl, scl, scl)
		
// 		}
// 	endShape();
// 	}
// }