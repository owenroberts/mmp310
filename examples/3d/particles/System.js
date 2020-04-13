class System {
	constructor(position) {
		this.origin = position.copy();
		this.particles = [];
	}

	add() {
		this.particles.push(new Particle(this.origin));
	}

	update() {
		for (let i = this.particles.length - 1; i >= 0; i--) {
			let p = this.particles[i];
			p.update();
			p.display();
			if (p.isDead()) {
				this.particles.splice(i,  1);
			}
		}
	}
}