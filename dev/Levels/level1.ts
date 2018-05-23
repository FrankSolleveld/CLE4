class Level1 {
    constructor() {
        aod.playground.add.image(window.innerWidth / 2, 300, 'background').setScale(1.2);
        let platforms = aod.playground.physics.add.staticGroup();
        platforms.create(0, 50, 'ground').setScale(0.3).refreshBody();
        platforms.create(700, 230, 'ground').setScale(0.3).refreshBody();
        platforms.create(1400, 150, 'ground').setScale(0.3).refreshBody();


        aod.player = new Player();
        aod.aphrodite = new Aphrodite();
        aod.banaan = new Banaan();
        

        aod.playground.physics.add.collider(aod.player.player, platforms);
        aod.playground.physics.add.collider(aod.aphrodite.aphrodite, platforms);
        aod.playground.physics.add.overlap(aod.aphrodite, aod.player.player);
        aod.playground.physics.world.setBounds(0, 0, 1260 * 4, 720 * 2);
    }
    update() {

    }
}