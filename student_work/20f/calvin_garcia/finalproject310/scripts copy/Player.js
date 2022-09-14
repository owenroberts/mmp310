class Player extends GameObject{

	constructor(x,y){
		super(playerCharacter, x, y);
		this.character = playerCharacter;	
		this.walk = playerWalk;
		this.attack = playerAttack;
		this.isWalking; 
		this.isAttacking;
		this.speed =2

		this.lives = 3;

	}





	draw(){

		this.isWalking = false;
		this.isAttacking = false;


		
//controls
	// if(!this.isWalking){	
	// 	image(this.character, this.x, this.y);

	// 		}

	//controls

			if(keyIsDown(68)){
			// image(this.walk,this.x,this.y);
			this.x += this.speed;
			this.isWalking = true;

			}

			if(keyIsDown(65)){
			// image(this.walk,this.x,this.y);
			this.x -= this.speed;
			this.isWalking = true;

			}

			if(keyIsDown(87)){
			// image(this.walk,this.x,this.y);
			this.y -= this.speed;
			this.isWalking = true;

			}	

			if(keyIsDown(83)){
			// image(this.walk,this.x,this.y);
			this.y += this.speed;
			this.isWalking = true;		

			}


	//attack

				if(keyIsDown(32)){
					this.isAttacking = true;
				}

				if(this.isAttacking){
					image(this.attack,this.x,this.y);
				}
				else if(this.isWalking){
					image(this.walk,this.x,this.y);
	//idle image
				}
				else{
				image(this.character,this.x,this.y);
			}
}
}		

// 			if(keyIsDown(RIGHT_ARROW)){
// 			// image(this.walk,this.x,this.y);
// 			this.x += this.speed;
// 			this.isWalking = true;

// 			}

// 			if(keyIsDown(LEFT_ARROW)){
// 			// image(this.walk,this.x,this.y);
// 			this.x -= this.speed;
// 			this.isWalking = true;

// 			}

// 			if(keyIsDown(UP_ARROW)){
// 			// image(this.walk,this.x,this.y);
// 			this.y -= this.speed;
// 			this.isWalking = true;

// 			}	

// 			if(keyIsDown(DOWN_ARROW)){
// 			// image(this.walk,this.x,this.y);
// 			this.y += this.speed;
// 			this.isWalking = true;		

// 			}


// 	//attack

// 				if(keyIsDown(80)){
// 					this.isAttacking = true;
// 				}

// 				if(this.isAttacking){
// 					image(this.attack,this.x,this.y);
// 				}
// 				else if(this.isWalking){
// 					image(this.walk,this.x,this.y);
// //idle image
// 				}
// 				else{
// 				image(this.character,this.x,this.y);
// 			}
	
		

	
// }
		

	






	

	



