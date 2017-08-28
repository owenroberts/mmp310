/* slides object literal, controls slides and resetting to outline, loading drawings and events */
var Slides = {
	dev: false,

	isSlides: false,
	start: true,

	/* only html required is the container with .slide divs inside */
	container: null,
	slides: null,
	
	totalSlides: 0,
	currentSlide: 0,
	isScrolling: false,
	noScroll: false,
	slideHeight: window.innerHeight,

	/* p5 cellular automata bkg, maybe make some new ones? */
	bkg: null,
	loadedBkg: false,

	/* interactive drawings */
	drawings: [],
	/* preload drawings */
	loadedDrawings: [],

	/* adding colors to interactive drawing */
	colorMenu: null,
	colors: { pink:"FF0DD0", purple:"7C0CE8", blue: "0014FF", lightblue: "0C9BE8", green:"00FFC1"},
	mouseTime: 0,
	mouseInterval: 40, 

	/* draw loop setup */
	fps: 10,
	interval: 1000 / 15,
	timer: Date.now(),
	loopStarted: false,


	setup: function() {

		/* get references to contianer and slides */
		Slides.container = document.getElementById('container');
		Slides.slides =  document.getElementsByClassName('slide');
		Slides.totalSlides = Slides.slides.length;

		/* creates slides/outline buttons */
		if (Slides.container.className.indexOf("no") == -1) {
			var slidesBtn = document.createElement('button');
			slidesBtn.id = 'slidesBtn';
			slidesBtn.innerText = "Slides";
			slidesBtn.onclick = Slides.setSlides;
			container.appendChild(slidesBtn);

			var outlineBtn = document.createElement('button');
			outlineBtn.id = 'outlineBtn';
			outlineBtn.innerText = "Outline";
			outlineBtn.onclick = Slides.setOutline;
			container.appendChild(outlineBtn);
		}

		Slides.loadDrawings();
	},

	/* advantage of literal, use Slides. instead of self */
	loadDrawings: function() {
		for (var i = 0; i < Slides.slides.length; i++){
			for (var h = 0; h < Slides.slides[i].children.length; h++){
				if (Slides.slides[i].children[h].dataset.src) {
					var div = Slides.slides[i].children[h];
					/* loading all of the drawings with Slides calling function */
					(function(i) {
						$.getJSON(div.dataset.src, function(data) {
							Slides.loadDrawing(i, data);
						});
					})(i);
					div.parentNode.removeChild(div);
				}
			}
		}
	},

	/* sets container to slides, resizes .slide, hides mag buttons and updates scroll */
	setSlides: function() {
		if (!Slides.iSlides || Slides.start) {
			h = window.innerHeight;
			Slides.start = false;
			Slides.isSlides = true;
			Slides.container.className = 'slides';
			Slides.noScroll = false;
			for (var i = 0; i < Slides.slides.length; i++) {
				var h = Slides.slides[i].offsetHeight;
				if (h < Slides.slideHeight) {
					Slides.slides[i].style.height = Slides.slideHeight + "px";
					if (Slides.slides[i].children.length > 0) 
						Slides.slides[i].children[0].style.marginTop = ((Slides.slideHeight - h) / 4) + "px";
				} else {
					Slides.slides[i].className = "long slide";
				}
			}

			Slides.updateDrawingWidth();
			Slides.scrollToSlide();
			
			/* get rid of mag buttons on images */
			var magButtons = document.getElementsByClassName('mag');
			for (var i = 0; i < magButtons.length; i++)
				magButtons[i].style.display = "none";

			/* load bgk if not loaded */
			if (!Slides.loadedBkg){
				var p5bkg = new p5(BKG);
				Slides.loadedBkg = true;
				Slides.bkg = document.querySelector('#defaultCanvas0')
			} else
				Slides.bkg.style.display = "block";
		}
	},

	/* sets container to outline, generates mag buttons or shows them if already there */
	setOutline: function() {
		if (Slides.isSlides || Slides.start) {
			Slides.isSlides = Slides.start = false;
			Slides.container.className = 'outline';
			if (Slides.loadedBkg)
				Slides.bkg.style.display = "none";
			Slides.noScroll = true;
			for (var i = 0; i < Slides.slides.length; i++) {
				Slides.slides[i].style.height = "auto";
				if (Slides.slides[i].children.length > 0)
					Slides.slides[i].children[0].style.marginTop = "auto";
			};
			Slides.updateDrawingWidth();

			/* check for mag buttons */
			var magButtons = document.getElementsByClassName('mag');
			if (magButtons.length > 0) {
				for (var i = 0; i < magButtons.length; i++)
					magButtons[i].style.display = "block";
			} else {
				/* add magnifying glass icon to every image */
				var imgElements = document.getElementsByTagName('img');
				var imgs = [];
				for (var i = 0; i < imgElements.length; i++) {
					imgs.push(imgElements[i]);
				} 
				var jslocation = document.querySelector('#slidesScript').src.replace('slides.js','');
				for (var i = 0; i < imgs.length; i++) {
					var mag = new Image();
					mag.className = "mag";
					mag.src = jslocation + "img/mag.png";
					mag.onclick = function() {
						var img = this.previousSibling;
						var imgWidth = img.naturalWidth;
						var imgHeight = img.naturalHeight;
						var ratio = imgWidth / imgHeight;
						var margin = 40;
						var left, top;
						if (imgHeight > window.innerHeight) {
							imgHeight = window.innerHeight - margin * 2;
							imgWidth = imgHeight * ratio;
						} else if (imgWidth > window.innerWidth) {
							imgWidth = window.innerWidth - margin * 2;
						}
						left = (window.innerWidth - imgWidth) / 2;
						top = (window.innerHeight - imgHeight) /2;

						var imgWrap = document.createElement('div');
						imgWrap.id = "image-popup";
						var newImg = new Image();
						newImg.src = img.src;
						newImg.className = "img";
						newImg.style.top = top + "px";
						newImg.style.left = left + "px";
						newImg.style.width = imgWidth + "px";
						imgWrap.appendChild(newImg);

						var closeImg = new Image();
						closeImg.src = jslocation + "img/close.png";
						closeImg.className = "close";
						closeImg.style.top = top + "px";
						closeImg.style.left = left + "px";
						closeImg.onclick = function() {
							imgWrap.parentNode.removeChild(imgWrap);
						}
						imgWrap.appendChild(closeImg);
						document.body.appendChild(imgWrap);
					};

					imgs[i].parentNode.insertBefore(mag, imgs[i].nextSibling);
				}
			}
		}
	},

	/* finds current slide but counting through slides */
	setCurrentSlide: function() {
		Slides.currentSlide = 0;
		for (var i = 0; i < Slides.slides.length; i++) {
			// must be .75 down slide to go to next
			if (window.scrollY > Slides.slides[i].offsetTop + Slides.slideHeight * 0.75) {
				if (Slides.currentSlide < Slides.slides.length - 1)
					Slides.currentSlide ++;
			}
		}
	},

	/* animates scroll with setInterval, kinda choppy */
	scrollToSlide: function() {
		if (!Slides.noScroll && !Slides.isScrolling) {
			var startY = window.scrollY;
			var endY = Slides.slides[Slides.currentSlide].offsetTop;
			var dist = Math.abs(startY - endY);
			var increment = dist / 60;
			if (dist > 0) {
				Slides.isScrolling = true;
				function scrollAnimate() {
					startY += (startY < endY) ? increment : -increment;
					window.scrollTo(0, startY);
					if (Math.abs(startY - endY) < increment) {
						window.scrollTo(0, endY);
						Slides.isScrolling = false;
						clearInterval(anim);
					}
				}
				var anim = setInterval(function() {
					window.requestAnimationFrame(scrollAnimate);
				}, 5);
			}
		}
	},

	nextSlide: function() {
		if (Slides.drawings[Slides.currentSlide])
			if (Slides.drawings[Slides.currentSlide][0].active)
				Slides.toggleDrawing();
		if (Slides.currentSlide < Slides.totalSlides - 1) {
			Slides.currentSlide ++;
			Slides.scrollToSlide();
		}
	},

	previousSlide: function() {
			if (Slides.drawings[Slides.currentSlide])
			if (Slides.drawings[Slides.currentSlide][0].active)
				Slides.toggleDrawing();
		if (Slides.currentSlide > 0) {
			Slides.currentSlide --;
			Slides.scrollToSlide();
		}
	},

	/* create a new drawing on current canvas, show color menu and current canvas */
	toggleDrawing: function() {
		var slide = Slides.slides[Slides.currentSlide];
		if (Slides.drawings[Slides.currentSlide]) {
			var d = Slides.drawings[Slides.currentSlide];
			for (var i = 0; i < d.length; i++) {
				d[i].toggle();
			}
		} else {
			Slides.createDrawing(Slides.currentSlide);
		}
		if (Slides.colorMenu) {
			if (Slides.colorMenu.style.display != "block")
				Slides.colorMenu.style.display = "block";
			else 
				Slides.colorMenu.style.display = "none";
		} else {
			Slides.colorMenu = document.createElement("div");
			Slides.colorMenu.id = "color-menu";
			Slides.colorMenu.style.display = "block";
			for (var color in Slides.colors) {
				var colorBtn = document.createElement('button');
				colorBtn.id = color;
				colorBtn.style.backgroundColor = "#"+Slides.colors[color];
				colorBtn.onclick = function() {
					Slides.createDrawing(Slides.currentSlide);
					Slides.drawings[Slides.currentSlide][Slides.drawings[Slides.currentSlide].length-1].c = Slides.colors[this.id];
				};
				Slides.colorMenu.appendChild(colorBtn);
			}
			Slides.container.appendChild(Slides.colorMenu);
		}
	}, 

	/* for switching between slides and outlines */
	updateDrawingWidth: function() {
		var drawingDivs = document.getElementsByClassName('drawing');
		for (var i = 0; i < drawingDivs.length; i++) {
			var z =  (drawingDivs[i].parentNode.offsetWidth * 0.96) / drawingDivs[i].width;
			drawingDivs[i].style.zoom = z;
		}
		var loadedDivs = document.getElementsByClassName('loaded');
		for (var i = 0; i < loadedDivs.length; i++) {
			// 0.96 for padding 2%
			var z =  (loadedDivs[i].parentNode.offsetWidth * 0.96) / loadedDivs[i].width;
			loadedDivs[i].style.zoom = z;
		}
	},

	/* adds new drawing on slide -- consider doing one big canvas?? */
	createDrawing: function(slideNumber) {
		var canvas = document.querySelector("#c"+slideNumber);
		if (!canvas) {
			canvas = document.createElement('canvas');
			canvas.id = "c"+slideNumber;
			canvas.className = "drawing";
			canvas.width = Slides.slides[slideNumber].offsetWidth;
			canvas.height = Slides.slides[slideNumber].offsetHeight;
		}
		Slides.slides[slideNumber].appendChild(canvas);
		var d = new Drawing(canvas);
		if (!Slides.drawings[slideNumber]) 
			Slides.drawings[slideNumber] = [];
		Slides.drawings[slideNumber].push(d);
		Slides.startLoop();
	},

	/* loads drawings from div with data-src */
	loadDrawing: function(slideNumber, data) {
		var canvas = document.createElement('canvas');
		//canvas.id = "c"+slideNumber;
		canvas.className = "loaded";
		canvas.width = data.w
		canvas.height = data.h;
		Slides.slides[slideNumber].appendChild(canvas);
		for (var i = 0; i < data.d.length; i++) {
			// this is really silly: 
			if (data.d[i] != "x") {
				var d = new Drawing(canvas);
				var z = (Slides.slides[slideNumber].offsetWidth * 0.96) / data.w;
				canvas.style.zoom = z;
				d.lines = data.d[i].l;
				d.preload = true;
				d.active = true;
				d.canvas.style.display = "block";
				d.c = data.d[i].c;
				if (!Slides.loadedDrawings[slideNumber]) 
					Slides.loadedDrawings[slideNumber] = [];
				Slides.loadedDrawings[slideNumber].push(d);
			}
		}
		Slides.startLoop();
	},

	/* draws all drawings */
	drawLoop: function() {
		// check for scrolling, so it doesn't slow down animateToSlide()
		// probably a better way to handle?
		if (Date.now() > Slides.timer + Slides.interval && !Slides.isScrolling) {
			Slides.timer = Date.now();
			for (var i = 0; i < Slides.slides.length; i++) {
				if (Slides.drawings[i]) {
					Slides.drawings[i][0].clearCanvas();
					for (var h = 0; h < Slides.drawings[i].length; h++) {
				 		Slides.drawings[i][h].drawLines();
					}
				}
				if (Slides.loadedDrawings[i]) {
					Slides.loadedDrawings[i][0].clearCanvas();
					for (var h = 0; h < Slides.loadedDrawings[i].length; h++) {
						Slides.loadedDrawings[i][h].drawLines();
					}
				}
			}
		}
		window.requestAnimationFrame(Slides.drawLoop);
	},

	startLoop: function() {
		if (!Slides.loopStarted) {
			requestAnimationFrame(Slides.drawLoop);
			Slides.loopStarted = true;
		}
	},

	/* events */
	getKey: function(ev) {
		var key = ev.which;
		switch (key) {
			case 39: 
			case 40: // up right
				if (!Slides.isScrolling) Slides.nextSlide();
			break;
			
			case 37:
			case 38: // down left
				if (!Slides.isScrolling) Slides.previousSlide();
			break;

			case 32: // space
				ev.preventDefault();
				if (Slides.isSlides) 
					Slides.toggleDrawing();
			break;

			case 79: //o
				Slides.setOutline();
			break;

			case 83: //s
				if (Slides.slides.length > 0) 
					Slides.setSlides();
			break;
		}
	},

	resizeHandler: function() {
		var time = new Date();
		var delta = 200;
		var timeout = false;
		if (Slides.iSslides) {
			Slides.setOutline();
			if (timeout === false) {
				timeout = true;
				setTimeout(function(){
					timeout = Slides.resizeEnd(time, delta);
				}, delta);
			}
		}
	},

	resizeEnd: function(time, delta) {
		if (new Date() - time < delta) {
			setTimeout(function(){
				Slides.resizeEnd(time, delta);
			}, delta);
		} else {
			Slides.setSlides();
			return false;
		}
	},

	scrollHandler: function(ev) {
		if (Slides.isSlides) {
			Slides.setCurrentSlide();
			if (Slides.slides[Slides.currentSlide].className.indexOf("long") == -1){
				Slides.isScrolling = true;
				setTimeout(Slides.scrollToSlide, 2000);
				setTimeout(function() {
					Slides.isScrolling = false;
				}, 250);
			}
		}
	},

	/* events for drawing on canvas */
	mouseDown: function(ev) {
		if (Slides.drawings[Slides.currentSlide]) {
			var d = Slides.drawings[Slides.currentSlide][Slides.drawings[Slides.currentSlide].length-1];
			if (ev.which ==1 && d.active) {
				d.drawOn = true;
				d.addLine(ev.offsetX, ev.offsetY);
			}
		}
	},

	mouseMove: function(ev) {
		if (Date.now() > Slides.mouseTime + Slides.mouseInterval) {
			Slides.mouseTime = Date.now();
			if (Slides.drawings[Slides.currentSlide]) {
				var d = Slides.drawings[Slides.currentSlide][Slides.drawings[Slides.currentSlide].length-1];
				if (d.drawOn) 
					d.addLine(ev.offsetX, ev.offsetY);
			}
		}
	},

	mouseUp: function(ev) {
		if (Slides.drawings[Slides.currentSlide]) {
			var d = Slides.drawings[Slides.currentSlide][Slides.drawings[Slides.currentSlide].length-1];
			if (ev.which ==1 && d.active) {
				d.drawOn = false;
				if (d.moves%2==1) 
					d.lines.splice(-1,1);
				d.moves = 0;
			}
		}
	}
}

/* drawing constructor */
function Drawing(canvas) {
	this.lines = [];
	this.canvas = canvas;
	this.w = this.canvas.width;
	this.h = this.canvas.height;
	this.ctx = this.canvas.getContext('2d');
	this.ctx.lineWidth = 2;
	this.ctx.lineCap = 'round';
	this.ctx.miterLimit = 1;
	this.num  = 2;
	this.diff = 1;
	this.drawOn = false;
	this.moves = 0;
	this.active = true;
	this.preload = false;
	this.c = "000"

	this.toggle = function() {
		if (!this.preload) {
			if (this.active) {
				this.active = false;
				this.canvas.style.display = "none";
				this.drawOn = false;
			} else {
				this.active = true;
				this.canvas.style.display = "block";
			}
		}
	};

	this.addLine = function(mx, my) {
		var newVec = new Vector(event.offsetX, event.offsetY);
		this.lines.push({
			s: newVec
		});
		if (this.moves > 0)
			this.lines[this.lines.length - 2].e = newVec; 
		this.moves++;
	};

	this.clearCanvas = function() {
		this.ctx.clearRect(0, 0, this.w, this.h);
	};

	this.drawLines = function() {
		for (var h = 0; h < this.lines.length; h++) {
			var line = this.lines[h];
			if (line.e) {
				var v = new Vector(line.e.x, line.e.y);
				v.subtract(line.s);
				v.divide(this.num);
				this.ctx.beginPath();
				this.ctx.moveTo( line.s.x + getRandom(-this.diff, this.diff), line.s.y + getRandom(-this.diff, this.diff) );
				for (var i = 0; i < this.num; i++) {
					var p = new Vector(line.s.x + v.x * i, line.s.y + v.y * i);
					this.ctx.lineTo( p.x + v.x + getRandom(-this.diff, this.diff), p.y + v.y + getRandom(-this.diff, this.diff) );
				}

				this.ctx.strokeStyle= "#"+this.c;
	      		this.ctx.stroke();
			}
		}
	};
}



/* launch slides */
window.onload = function() {
	if (window.mobilecheck()) {
		document.getElementById("container").className = "outline";
	} else {
		/* set up slides */
		Slides.setup();
		if (Slides.dev) {
			Slides.setSlides();
		}
		else {
			Slides.setOutline();
		}

		/* setup events */
		document.onkeydown = Slides.getKey;

		/* resize handler */
		window.resize = Slides.resizeHandler;

		/* scroll events */
		document.onwheel = Slides.scrollHandler;
		// document.onscroll = scrollHandler; // this gets called by scrollAnimate() so its triggered too much

		/* drawing events */
		document.onmousedown =  Slides.mouseDown;
		document.onmousemove =  Slides.mouseMove;
		document.onmouseup =  Slides.mouseUp;
	}
};