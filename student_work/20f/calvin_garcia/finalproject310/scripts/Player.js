class Player extends GameObject{

	constructor(x,y){
		super(playerCharacter, x, y);
		this.character = playerCharacter;	
		this.walk = playerWalk;
		this.attack = playerAttack;
		this.isWalking; 
		this.isAttacking;
		this.speed =2
		this.attackKeyWasPressed = false;
		this.playerAttackFlip = playerAttackFlip;
		this.playerWalkFlip = playerWalkFlip; 
		this.playerFlip = playerFlip;

		this.lives = 4;

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
					this.attackKeyWasPressed = true;
				}

				if(!keyIsDown(32) && this.attackKeyWasPressed){
					this.isAttacking = true;
					this.attackKeyWasPressed = false;
				}

	//flip attack code
	
				if(this.attackKeyWasPressed && this.x > enemy.x){
					image(this.playerAttackFlip,this.x,this.y);
				}			

				else if(this.attackKeyWasPressed){
					image(this.attack,this.x,this.y);
				}
	//flip walk code
				
				 if(this.isWalking && this.x > enemy.x){
					image(this.playerWalkFlip,this.x,this.y);
				}	
	//walk
				
				else if(this.isWalking){
					image(this.walk,this.x,this.y);
				}	


	//idle image
			
				else if(!this.isWalking && !this.isAttacking && !this.attackKeyWasPressed){
				image(this.character,this.x,this.y);
			}
}
				
// 				else{
// 				image(this.character,this.x,this.y);
// 			}
// }
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
		

	






	

	



