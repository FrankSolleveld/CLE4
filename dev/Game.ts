/// <reference path="phaser.d.ts">
class Game {
    game:Phaser.Game;
    player:Player;
    playground:object;
    aphrodite:Aphrodite;
    banaan:Banaan;


    constructor() {

        this.game = new Phaser.Game(this.config()) 
        console.log('hoi2')  
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
        this.load.spritesheet('player', 'images/player.png', {frameWidth: 125, frameHeight: 119})    
        this.load.spritesheet('afro', 'images/idleA.png', {frameWidth: 317, frameHeight: 391})
    }   

    create()
    {
        aod.playground = this;

        this.add.image(window.innerWidth / 2, 300, 'background').setScale(1.2);
        let platforms = this.physics.add.staticGroup();
        platforms.create(100, 700, 'ground').setScale(0.3).refreshBody();
        platforms.create(700, 500, 'ground').setScale(0.3).refreshBody();
        platforms.create(1200, 700, 'ground').setScale(0.3).refreshBody();

        
        aod.player = new Player();
        aod.aphrodite = new Aphrodite();
        aod.banaan = new Banaan();
        

        aod.playground.physics.add.collider(aod.player.player, platforms);
        aod.playground.physics.add.collider(aod.aphrodite.aphrodite, platforms);
        aod.playground.physics.add.overlap(aod.aphrodite, aod.player.player);
        aod.playground.physics.world.setBounds(0, 0, 1260 * 4, 720 * 2);
     
    }

    update()
    {
        aod.player.movement()
    
    }
}





