"use strict";
var Game = (function () {
    function Game() {
        this.game = new Phaser.Game(this.config());
    }
    Game.prototype.config = function () {
        return {
            type: Phaser.AUTO,
            width: 1280,
            height: 720,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 500 }
                }
            },
            scene: {
                preload: this.preload,
                create: this.create,
                update: this.update
            }
        };
    };
    Game.prototype.preload = function () {
        this.load.image('background', 'images/background1.jpg');
        this.load.image('ground', 'images/ground.png');
        this.load.image('idle', 'images/idle.png');
        this.load.image('banaan', 'images/banaan.png');
        this.load.image('retro-game-bg', 'images/retro-game-bg.jpg');
        this.load.spritesheet('player', 'images/player.png', { frameWidth: 125, frameHeight: 119 });
        this.load.spritesheet('afro', 'images/idleA.png', { frameWidth: 317, frameHeight: 391 });
    };
    Game.prototype.create = function () {
        aod.playground = this;
        this.scene = new Level1();
    };
    Game.prototype.update = function () {
        this.scene.update();
    };
    return Game;
}());
var aod = new Game();
var Menu = (function () {
    function Menu() {
        this.init();
        this.create();
    }
    Menu.prototype.init = function () {
        aod.playground.add.image(window.innerWidth / 2, window.innerHeight, 'retro-game-bg').setScale(2);
        aod.playground.titleText = aod.playground.add.text(0, 0, "Ape of Divinity", {
            boundsAlignH: 'center'
        });
        aod.playground.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
        aod.playground.optionCount = 1;
    };
    Menu.prototype.create = function () {
    };
    return Menu;
}());
var PlayScreen = (function () {
    function PlayScreen(g) {
        this.game = g;
    }
    PlayScreen.prototype.update = function () {
    };
    return PlayScreen;
}());
var Aphrodite = (function () {
    function Aphrodite() {
        this.create();
    }
    Aphrodite.prototype.create = function () {
        this.animations();
        this.aphrodite = aod.playground.physics.add.sprite(700, 200, 'afro');
        this.aphrodite.setScale(0.5);
        this.aphrodite.anims.play('afro');
        this.aphrodite.flipX = true;
    };
    Aphrodite.prototype.animations = function () {
        aod.game.anims.create({
            key: 'afro',
            frames: aod.game.anims.generateFrameNumbers('afro', { start: 0, end: 14 }),
            frameRate: 10,
            repeat: -1,
            yoyo: true
        });
    };
    return Aphrodite;
}());
var Player = (function () {
    function Player() {
        console.log('hoi');
        this.create();
        this.animations();
        this.movement();
    }
    Player.prototype.create = function () {
        this.player = aod.playground.physics.add.sprite(125, 200, 'player');
        this.player.setCollideWorldBounds(true);
    };
    Player.prototype.animations = function () {
        aod.game.anims.create({
            key: 'walk',
            frames: aod.game.anims.generateFrameNumbers('player', { start: 2, end: 5 }),
            frameRate: 10,
            repeat: -1
        });
        aod.game.anims.create({
            key: 'breath',
            frames: aod.game.anims.generateFrameNumbers('player', { start: 0, end: 1 }),
            frameRate: 1,
            repeat: -1
        });
    };
    Player.prototype.movement = function () {
        var Akey = aod.playground.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        var Wkey = aod.playground.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        var Dkey = aod.playground.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        if (Akey.isDown) {
            console.log("blah");
            this.player.anims.play('walk', true);
            this.player.setVelocityX(-160);
            this.player.flipX = true;
        }
        else if (Dkey.isDown) {
            this.player.setVelocityX(160);
            this.player.flipX = false;
            this.player.anims.play('walk', true);
        }
        else {
            this.player.anims.play('breath', true);
            this.player.setVelocityX(0);
        }
        if (Wkey.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-450);
        }
    };
    return Player;
}());
var Banaan = (function () {
    function Banaan() {
        this.create();
    }
    Banaan.prototype.create = function () {
        var banaan = aod.playground.physics.add.staticGroup();
        banaan.create(100, 400, 'banaan').setScale(0.3);
        this.physics.add.overlap(aod.player, banaan, this.collectBanaan, null, this);
        console.log(banaan);
    };
    Banaan.prototype.collectBanaan = function () {
        console.log('banaan');
    };
    return Banaan;
}());
var Level1 = (function () {
    function Level1() {
        aod.playground.add.image(window.innerWidth / 2, 300, 'background').setScale(1.2);
        var platforms = aod.playground.physics.add.staticGroup();
        platforms.create(50, 700, 'ground').setScale(0.3).refreshBody();
        platforms.create(800, 550, 'ground').setScale(0.3).refreshBody();
        platforms.create(1200, 300, 'ground').setScale(0.3).refreshBody();
        aod.player = new Player();
        aod.aphrodite = new Aphrodite();
        aod.banaan = new Banaan();
        aod.playground.physics.add.collider(aod.player.player, platforms);
        aod.playground.physics.add.collider(aod.aphrodite.aphrodite, platforms);
        aod.playground.physics.add.overlap(aod.aphrodite, aod.player.player);
        aod.playground.physics.world.setBounds(0, 0, 1260 * 4, 720 * 2);
    }
    Level1.prototype.update = function () {
        aod.player.movement();
    };
    return Level1;
}());
//# sourceMappingURL=main.js.map