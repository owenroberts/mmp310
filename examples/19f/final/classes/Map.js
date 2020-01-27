class Map {
    constructor(src) {
        this.sprites = {
            scenery: {},
            characters: {},
            obstacles: {}
        };
    }

    preload(src) {
        var _this = this;
        fetch(src)
            .then(function (response) {
                return response.json();
            }).then(function (data) {


                var scenery = data.scenery;
                for (var key in scenery) {
                    var s = scenery[key];
                    var spriteSheet = loadSpriteSheet(s.img, s.width, s.height, s.frames);
                    _this.sprites.scenery[key] = [];
                    for (var i = 0; i < s.positions.length; i++) {
                        var position = s.positions[i];
                        _this.sprites.scenery[key].push(new Scenery(position.x, position.y, spriteSheet));
                    }
                }

                var obstacles = data.obstacles;
                for (var key in obstacles) {
                    var o = obstacles[key];
                    var spriteSheet = loadSpriteSheet(o.img, o.width, o.height, o.frames);
                    _this.sprites.obstacles[key] = [];
                    for (var i = 0; i < o.positions.length; i++) {
                        var position = o.positions[i];
                        _this.sprites.obstacles[key].push(new Scenery(position.x, position.y, spriteSheet));
                    }
                }

                var characters = data.npc;
                for (var key in characters) {
                    var c = characters[key];
                    var spriteSheet = loadSpriteSheet(c.img, c.width, c.height, c.frames);
                    _this.sprites.characters[key] = new NPC(c.x, c.y, spriteSheet, c.dialog, key);
                }
            });
    }

    setup() {
        for (var key in this.sprites.obstacles) {
            var list = this.sprites.obstacles[key];
            for (var i = 0; i < list.length; i++) {
                list[i].setup();
            }
        }

        for (var key in this.sprites.scenery) {
            var list = this.sprites.scenery[key];
            for (var i = 0; i < list.length; i++) {
                list[i].setup();
            }
        }

        for (var key in this.sprites.characters) {
            this.sprites.characters[key].setup();
        }
    }

    start() {
        camera.on();
        camera.position.x = 0;
        camera.position.y = 0;
    }

    end() {
        camera.position.x = 0;
        camera.position.y = 0;
    }


    overlap(other) {
        for (var key in this.sprites.characters) {
            var character = this.sprites.characters[key];
            if (other.sprite.overlap(character.sprite)) {
                return character;
            }
        }
    }

    collide(other) {
        var isColliding = false;
        for (var key in this.sprites.obstacles) {
            var list = this.sprites.obstacles[key];
            for (var i = 0; i < list.length; i++) {
                other.sprite.collide(list[i].sprite);
            }
        }
        this.isColliding = isColliding;

        for (var key in this.sprites.characters) {
            var character = this.sprites.characters[key];
            if (character.sprite.overlap(other.sprite)) {
                character.displayDialog();
            }
        }
    }

    display() {

        for (var key in this.sprites.obstacles) {
            var list = this.sprites.obstacles[key];
            for (var i = 0; i < list.length; i++) {
                list[i].display();
            }
        }

        for (var key in this.sprites.scenery) {
            var list = this.sprites.scenery[key];
            for (var i = 0; i < list.length; i++) {
                list[i].display();
                list[i].update();
            }
        }

        for (var key in this.sprites.characters) {
            this.sprites.characters[key].display();
        }
    }

    move(character) {
        camera.position.x = character.sprite.position.x;
        camera.position.y = character.sprite.position.y;
    }

    update(character) {
        var offsetX = floor(character.x / width);
        camera.position.x = offsetX * width + width / 2;

        var offsetY = floor(character.y / height);
        camera.position.y = offsetY * height + height / 2;
    }

    center() {
        camera.position.x = width / 2;
        camera.position.y = width / 2;
    }

    addSprite(label, sprite, type) {
        this.sprites[type][label] = [];
        this.sprites[type][label].push(sprite);
    }

}