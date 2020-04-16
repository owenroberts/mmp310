class Particle {
	constructor(position) {
		this.acceleration = createVector(random(-0.05, 0.05), random(-0.05, 0.05), random(-0.05, 0.05));
		this.velocity = createVector(random(-1, 1), random(-0.1, 0.0), random(-1, 1));
		this.position = position.copy();
		this.rotation = createVector(random(PI), random(PI), random(PI));
		this.rotationVelocity = createVector(random(0.01), random(0.01), random(0.01));
		this.lifespan = 255;

		this.color = createVector(0, 0, 100);
		this.colorVelocity = createVector(2, 1, 1);

		random(meows).play();
	}

	update() {
		this.velocity.add(this.acceleration);
		this.position.add(this.velocity);
		this.rotation.add(this.rotationVelocity);
		this.color.add(this.colorVelocity);
		this.lifespan -= 1;


		if (this.position.x <= -boxSize/2 || this.position.x >= boxSize/2) {
			this.acceleration.x *= -1;
			this.velocity.x *= -1;
			random(meows).play();
		}

		if (this.position.y <= -boxSize/2 || this.position.y >= boxSize/2) {
			this.acceleration.y *= -1;
			this.velocity.y *= -1;
			random(meows).play();
		}

		if (this.position.z <= -boxSize/2 || this.position.z >= boxSize/2) {
			this.acceleration.z *= -1;
			this.velocity.z *= -1;
			random(meows).play();
		}
	}

	display() {

		push();
		
		translate(this.position.x, this.position.y, this.position.z);
		rotateX(this.rotation.x);
		rotateY(this.rotation.y);
		rotateZ(this.rotation.z);

		// stroke('green');
		// noFill();
		noStroke();
		emissiveMaterial(this.color.x, this.color.y, this.color.z, 200);

		// head
		sphere(10);

		// ears
		push();
		translate(7.5, -7.5, 0);
		rotateZ(PI * 1.25);
		cone(5, 10, 4);
		pop();

		push();
		translate(-7.5, -7.5, 0);
		rotateZ(PI * -1.25);
		cone(5, 10, 4);
		pop();

		ambientMaterial(255, 215, 0);
		push();
		translate(5, -5, 8);
		torus(2, 0.5);
		pop();

		push();
		translate(-5, -5, 8);
		torus(2, 1);
		pop();

		specularMaterial(200, 200, 255);
		shininess(100);
		push();
		translate(0, 3, 9);
		for (let x = -5; x < 6; x += 2) {
			push();
			translate(x, 0, 0);
			box(1, 2);
			pop();
		}
		pop();
		

		pop();
	}

	isDead() {
		return this.lifespan < 0;
	}
}