class Menu {
    constructor() {

        this.init()
        this.create()
        this.clickable()

    }

    init() {
        aod.playground.add.image(window.innerWidth / 2, window.innerHeight, 'retro-game-bg').setScale(2);

        aod.playground.titleText = aod.playground.add.text(0, 0, "Ape of Divinity", {
            boundsAlignH: 'center'
        });


        // FONT WORDT LATER AANGEPAST
        // aod.playground.titleText = aod.playground.add.bitmapText(aod.playground, 50, 50, 'arcadeclassic', 'Ape of Divinity', 50, 'center'); 
        // aod.playground.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
        // aod.playground.titleText.anchor.set(0.5);

        // aod.playground.optionCount = 1;
    }

    clickable() {
        let Ekey = aod.playground.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }

    create() {

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

        if (Ekey.isDown) {
            // Zodra er op Enter is gedrukt, wordt je naar level 1 gebracht.
            this.scene = new Level1()
        }

    }


    update() {
        this.scene.update()
    }


}
