

class Banaan {
    banaan:object;
    banaans:object;
    constructor(){
        this.create()

    }
    create(){
        //aod.playground.
        //let banaan = aod.playground.physics.add.group();
       //let banaan = aod.playground.add.image(430, 600, 'banaan').setScale(0.3)
       let banaans = aod.playground.physics.add.group({
        key: 'banaan',
        repeat: 7,
        setXY: {x: 150, y:0, stepX: 100}

    });

    //banaan.create(400, 50, 'banaan').setScale(0.3)
   // banaan.create(100, 100, 'banaan').setScale(0.3)
    aod.playground.physics.add.collider(banaans, aod.platforms);
    aod.playground.physics.add.overlap(banaans, aod.player.player, this.collectBanaan, null, true);
}
collectBanaan(player, banaan){
    banaan.disableBody(true, true)
    console.log("nee")
}     

}