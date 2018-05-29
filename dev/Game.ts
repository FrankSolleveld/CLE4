/// <reference path="phaser.d.ts">
class Game {
    game:Phaser.Game;
    player:Player;
    playground:object;
    aphrodite:Aphrodite;
    banaan:Banaan;
    scene:any;


    constructor() {

        this.game = new Phaser.Game(this.config()) 
    }

    config()
    {
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
        }
    }     
    
    preload()
    {
        this.load.image('background', 'images/background1.jpg')
        this.load.image('ground', 'images/ground.png')
        this.load.image('idle', 'images/idle.png')
        this.load.image('banaan', 'images/banaan.png')
        this.load.image('retro-game-bg', 'images/retro-game-bg.jpg')
        this.load.image('dialog', 'images/dialog.png')
        this.load.image('tree', 'images/tree.png')
        this.load.image('cloud', 'images/cloud.png')
        this.load.spritesheet('player', 'images/player.png', {frameWidth: 125, frameHeight: 119})    
        this.load.spritesheet('afro', 'images/idleA.png', {frameWidth: 317, frameHeight: 391})

        this.load.bitmapFont('arcadeclassic', 'fonts/arcadeclassic/font.png', 'fonts/arcadeclassic/font.fnt');
       // enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER); 
    }   

    create()
    {
        aod.playground = this;

        //new Menu()
        this.scene = new Level1()
     
    }

    update()
    {
        this.scene.update()
    
    }
}





