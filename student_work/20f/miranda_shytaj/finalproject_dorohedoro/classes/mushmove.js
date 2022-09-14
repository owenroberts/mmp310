class MushMove extends GameObject {
	update() {
		this.y += 1; 
		if (this.y > height + 20 + this.height / 2) {
			this.y = -this.height / 2;
		}
		

	}
	
}