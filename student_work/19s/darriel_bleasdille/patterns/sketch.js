/*
	new grid design 
    patterns
	with save image code
	week 5 mmp 310
*/

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	
	
	var columns = 8;
	var rows = 8;
	var w = width / columns; // column width
	var h = height / rows; // row height
	
	// nested for loop 
	for (let x = 0; x <= width; x += w) {
		for (let y = 0; y <= height; y += h) {
			
		

			strokeWeight(35);
			var r = random(4);
			if (r > 3) {

            stroke(0);
            fill("blue");
            ellipse(x+w/2, y+h/2, w, h); //big blue circle
            
            fill("blue");
            ellipse(x + w/4, y + h/4, w/2, h/2); //top left circle
                
            } else if (r > 2) {
                
                stroke(0);
            fill("blue");
            ellipse(x+w/2, y+h/2, w, h); //big blue circle
            
            fill("blue");
            ellipse(x + w - w/4, y + h/4, w/2, h/2); //top right
            
          
            
			} else if (r > 1) { 
                
                stroke(0);
            fill("yellow");
            ellipse(x+w/2, y+h/2, w, h); //big blue circle
            
            fill("yellow");
                ellipse(x + w - w/4, y + h - h/4, w/2, h/2); //bottom right circle

				
			} else {
                
                stroke(0);
            fill("yellow");
            ellipse(x+w/2, y+h/2, w, h); //big blue circle
            
            fill("yellow");
                 ellipse(x + w/4, y + h - h/4, w/2, h/2); //bottom left 
                

                
                
                
				
			}
			}
			
		}
	}



// click to save image to Downloads folder
function mouseClicked() {
	save('lattern-1.jpg');
}




