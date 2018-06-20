/// <reference path="phaser.d.ts">
class Game {
    game:Phaser.Game;
    player:Player;
    playground:object;
    banaan:Banaan;
    scene:any;
    scoreBanaan:number = 0;
    
    soundEffects:any;


    constructor() {
        this.game = new Phaser.Game(this.config());
    }

    config()
    {
        return {
            type: Phaser.AUTO,
            width: window.innerWidth,
            height: window.innerHeight,
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
        this.load.image('background', 'images/background_level1.jpg')
        this.load.image('ground-1', 'images/ground/ground-1.png')
        this.load.image('ground-1.1', 'images/ground/ground-1.1.png')
        this.load.image('ground-1.2', 'images/ground/ground-1.2.png')
        this.load.image('ground-2', 'images/ground/ground-2.png')
        this.load.image('ground-3', 'images/ground/ground-3.png')
        this.load.image('ground-4', 'images/ground/ground-4.png')
        this.load.image('ground-5', 'images/ground/ground-5.png')
        this.load.image('ground-6', 'images/ground/ground-6.png')
        this.load.image('ground-6.2', 'images/ground/ground-6-2.png')
        this.load.image('ground-7', 'images/ground/ground-7.png')
        this.load.image('ground-8', 'images/ground/ground-8.png')
        this.load.image('ground-9', 'images/ground/ground-9.png')
        this.load.image('ground-10', 'images/ground/ground-10.png')
        this.load.image('ground-10.2', 'images/ground/ground-10-2.png')
        this.load.image('ground-11', 'images/ground/ground-11.png')
        this.load.image('ground-12', 'images/ground/ground-12.png')
        this.load.image('ground-13', 'images/ground/ground-13.png')
        this.load.image('ground-14', 'images/ground/ground-14.png')


        //load background things
        this.load.image('tree1', 'images/background-objects/trees-1.png')
        this.load.image('tree2', 'images/background-objects/trees-2-3.png')
        this.load.image('tree3', 'images/background-objects/trees-4.png')
        this.load.image('statue', 'images/background-objects/statue-3.png')

        this.load.image('idle', 'images/idle.png')
        this.load.image('banaan', 'images/banaan.png')
        this.load.image('retro-game-bg', 'images/retro-game-bg.jpg')
        this.load.image('dialog', 'images/dialog.png')
        this.load.image('tree', 'images/tree.png')
        this.load.image('cloud', 'images/cloud.png')
        this.load.spritesheet('player', 'images/player.png', {frameWidth: 125, frameHeight: 119})
        this.load.spritesheet('afro', 'images/idleA.png', {frameWidth: 317, frameHeight: 391})
        this.load.spritesheet('waterfall', 'images/waterfall.png', {frameWidth: 350, frameHeight: 538})

        this.load.spritesheet('shell', 'images/shell_frame_old.png', {frameWidth: 250, frameHeight: 242})
        
        //  this.load.image('scoreboard,    ')

        this.load.bitmapFont('arcadeclassic', 'fonts/arcadeclassic/font.png', 'fonts/arcadeclassic/font.fnt');
        // enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER); 
        
        // Artemis stuff
        this.load.image('artemis-bow', 'images/artemis/bow.png')
        this.load.image('artemis-arrow', 'images/artemis/arrow.png')

        this.load.image('level2-bg', 'images/level2_bg2.png')
        this.load.image('level2-platform', 'images/level2-ground.png')


        // Loading in Zeus
        this.load.spritesheet('zeus', 'images/zeus.png', {frameWidth: 111 , frameHeight: 156})
        this.load.spritesheet('artemis', 'images/artemis/avatar.png', {frameWidth: 66 , frameHeight: 123})
        
    }   

    create()
    {
        aod.playground = this;

        if(document.location.hash === "#lvl2") {
            aod.scene = new Level2()
        }else{
            aod.scene = new Menu()
        }

        aod.soundEffects = new SoundEffects();        
    }

    update()
    {
        aod.scene.update()
    }
}





