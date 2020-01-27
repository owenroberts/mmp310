class ParalaxMap extends Map {
	
	preload(src) {
		var _this = this;
		fetch(src)
			.then(function(response) {
				return response.json();
			}).then(function(data) {
				var scenery = data.scenery;
				for (var key in scenery) {
					var s = scenery[key];
					var spriteSheet = loadSpriteSheet(s.img, s.width, s.height, s.frames);
					_this.sprites.scenery[key] = [];
					for (var i = 0; i < s.positions.length; i++) {
						var position = s.positions[i];
						_this.sprites.scenery[key].push(new ParalaxScenery(position.x, position.y, spriteSheet, s.speed));
					}
				}
			});
	}

	setup() {
		for (var key in this.sprites.scenery) {
			var list = this.sprites.scenery[key];
			for (var i = 0; i < list.length; i++) {
				list[i].setup();
				list[i].x += width/2;
				list[i].y += height/2;
			}
		}
	}

	paralax(delta) {
		camera.off();
		for (var key in this.sprites.scenery) {
			var list = this.sprites.scenery[key];
			for (var i = 0; i < list.length; i++) {
				list[i].y -= list[i].speed * delta;
			}
		}
	}
}