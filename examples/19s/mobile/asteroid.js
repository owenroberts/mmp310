/*
	asteroid class
*/

class Asteroid extends Entity {
	constructor() {
		super(random(width), -100);
		this.speed.x = random(-0.5, 0.5);
		this.speed.y = random(height * 0.003, height * 0.006);
		this.speed.a = random(-0.01, 0.01);
		this.color = color(random(100), random(100, 200), random(200));
		this.size = random(60, 100);
		this.points = [];
		this.angle = 0;
		const r = random(4, 8);
		for (let i = 0; i < r; i++) {
			var angle = PI * 2 / r * i;
			this.points.push({
				x: (this.size / 2) * sin(angle) + random(-this.size / 2, this.size / 2 ),
				y: (this.size / 2) * cos(angle) + random(-this.size / 2, this.size / 2 )
			});
		}
	}

	display() {
		if (!this.died) {
			fill(this.color);
			noStroke();
			push();
			translate(this.x, this.y);
			rotate(this.angle);
			this.angle += this.speed.a;
			beginShape();
			for (let i = 0; i < this.points.length; i++) {
				vertex(this.points[i].x,this.points[i].y);
			}
			endShape();
			pop();
		} else {
			const r = random(this.deadCount, this.deadCount * 2);
			for (let i = 0; i < r; i++) {
				fill(random(51, 127), random(127, 255), random(200), random(127, 255));
				rect(this.x + random(-this.size, this.size), this.y + random(-this.size, this.size), random(this.size/4), random(this.size/4));
			}
		}
	}

	update() {
		super.update();
		super.bounce();
		this.speed.x += random(-0.25, 0.25);
	}

}