class Menu 
{
    constructor() 
    {

        this.init()
        this.create()

    }

    init() 
    {
        aod.playground.add.image(window.innerWidth / 2, window.innerHeight, 'retro-game-bg').setScale(2);
        
        aod.playground.titleText = aod.playground.add.text(0, 0, "Ape of Divinity", {
            boundsAlignH:'center'
        });
        aod.playground.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
        // aod.playground.titleText.anchor.set(0.5);
        aod.playground.optionCount = 1;
    }

    create() 
    {

        // if (aod.music.name !== "dangerous" && playMusic) {
        //     aod.music.stop();
        //     aod.music = game.add.audio('dangerous');
        //     aod.music.loop = true;
        //     aod.music.play();
        // }
        // aod.game.stage.disableVisibilityChange = true;
        // aod.game.add.existing(aod.playground.titleText);

        // Starts the game
        // aod.playground.addMenuOption('Start', function () {
        //     game.state.start("Game");
        // }, {
        //         font: 'arcade',
        //         fill: '#FDFFB5',
        //         align: 'left'
        //     });

        // // Goes to Options
        // aod.playground.addMenuOption('Options', function () {
        //     game.state.start("Options");
        // });

    }
    // var GameMenu = function () { }

    // GameMenu.prototype = {

    //     menuConfig: {
    //         startY: 260,
    //         startX: 30
    //     },

    //     init: function () {
    //         
    //     },

    //     create: function () {


    //     }
    // };

    // Phaser.Utils.mixinPrototype(GameMenu.prototype, mixins);




}
