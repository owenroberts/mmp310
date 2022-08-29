class Card {
	constructor(imgUrl) {
		this.imgUrl = imgUrl;
		this.elem = document.createElement('div');
		this.elem.classList.add('card');
		this.image = new Image();
		this.image.src = this.imgUrl;
		this.elem.appendChild(this.image);
		this.isVisible = false;
		this.isMatched = false;

		this.elem.onclick = () => {
			userClicked(this);
		};

		this.timer = document.createElement('timer');
		this.timer.classList.add('timer');
		this.elem.appendChild(this.timer);
	}

	reveal() {
		this.image.style.opacity = 1;
		this.isVisible = true;

		this.timer.opacity = 1;
		this.timer.top = 0;

	}

	hide() {
		this.image.style.opacity = 0;
		this.isVisible = false;
	}
}