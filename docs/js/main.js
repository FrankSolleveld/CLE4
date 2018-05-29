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
        this.load.image('dialog', 'images/dialog.png');
        this.load.spritesheet('player', 'images/player.png', { frameWidth: 125, frameHeight: 119 });
        this.load.spritesheet('afro', 'images/idleA.png', { frameWidth: 317, frameHeight: 391 });
        this.load.bitmapFont('arcadeclassic', 'fonts/arcadeclassic/font.png', 'fonts/arcadeclassic/font.fnt');
        enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
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
        var banaans = aod.playground.physics.add.group({
            key: 'banaan',
            repeat: 7,
            setXY: { x: 150, y: 0, stepX: 100 }
        });
        aod.playground.physics.add.collider(banaans, aod.platforms);
        aod.playground.physics.add.overlap(banaans, aod.player.player, this.collectBanaan, null, true);
    };
    Banaan.prototype.collectBanaan = function (player, banaan) {
        banaan.disableBody(true, true);
        console.log("nee");
    };
    return Banaan;
}());
var Level1 = (function () {
    function Level1() {
        aod.playground.add.image(window.innerWidth / 2, 300, 'background').setScale(1.2);
        aod.platforms = aod.playground.physics.add.staticGroup();
        aod.platforms.create(50, 700, 'ground').setScale(0.3).refreshBody();
        aod.platforms.create(700, 500, 'ground').setScale(0.3).refreshBody();
        aod.platforms.create(1200, 300, 'ground').setScale(0.3).refreshBody();
        aod.player = new Player();
        aod.aphrodite = new Aphrodite();
        aod.banaan = new Banaan();
        aod.playground.physics.add.collider(aod.player.player, aod.platforms);
        aod.playground.physics.add.collider(aod.aphrodite.aphrodite, aod.platforms);
        aod.playground.physics.add.overlap(aod.aphrodite, aod.player.player, this.hey, null, this);
        aod.playground.physics.world.setBounds(0, 0, 1260 * 4, 720 * 2);
    }
    Level1.prototype.update = function () {
        aod.player.movement();
    };
    Level1.prototype.hey = function () {
        console.log('ik ben een banaan');
    };
    return Level1;
}());
var Dialog = (function () {
    function Dialog(text, callback) {
        this.callback = function () { };
        this.text = "";
        this.currentText = "";
        this.amountEnters = 0;
        this.text = text;
        this.callback = callback;
        this.dialog = aod.playground.add.image(aod.game.config.width / 2, aod.game.config.height - 100, 'dialog');
        this.dialog.setScale(0.6);
        this.textObject = aod.playground.add.text(this.dialog.x - (this.dialog.width * 0.6 / 2) + 30, this.dialog.y - (this.dialog.height * 0.6 / 2) + 30, "Tekst blabla", {
            color: "#000000",
            fontSize: 20,
            align: 'left',
        });
        this.textObject.width = 150;
        this.show();
    }
    Dialog.prototype.show = function () {
        var _this = this;
        var importText = setInterval(function () {
            if (_this.currentText.length === _this.text.length) {
                clearInterval(importText);
                setTimeout(_this.callback, 2000);
                return;
            }
            _this.currentText += _this.text[_this.currentText.length - (_this.amountEnters * 2)];
            _this.textObject.setText(_this.currentText);
        }, 75);
    };
    Dialog.prototype.hide = function () {
        this.dialog.visible = false;
        this.textObject.visible = false;
    };
    return Dialog;
}());
//# sourceMappingURL=main.js.map