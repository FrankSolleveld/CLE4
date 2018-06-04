

class Banaan {
    banaan:object;
    banaans:object;
    scoreBanaan:number = 0;
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
        setXY: {x: 1050, y:0, stepX: 100}

    });

    //banaan.create(400, 50, 'banaan').setScale(0.3)
   // banaan.create(100, 100, 'banaan').setScale(0.3)
    aod.playground.physics.add.collider(banaans, aod.platforms);
    aod.playground.physics.add.overlap(banaans, aod.player.player, (player, banaan) => {
        this.collectBanaan(player, banaan);
    }, null, true);
}
collectBanaan(player, banaan){
    banaan.disableBody(true, true)
    this.scoreBanaan += 1;
    console.log(this.scoreBanaan);
    aod.score.update(this.scoreBanaan);

    }     

}