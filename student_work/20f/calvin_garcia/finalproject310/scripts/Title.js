class Title {
	constructor(){}





	draw(){

		background(0);
				
			image(cover , width/2 , height/2);
			// fill( 255);
			// textSize(30);
			// text(" Welcome to Super Punching Bros ", 60, height/2-25);

			// textSize(20);
			// text(" Press Enter", width/2-50 , height/2+20 );

			if(keyIsDown(13)){
				currentScene = "main";
			}



	}
}