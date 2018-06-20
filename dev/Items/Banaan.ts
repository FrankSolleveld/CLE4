

class Banaan {
    banaan:object;
    constructor(x:number, y:number){
        this.create(x, y)

    }
    create(x:number, y:number){
        //aod.playground.
        this.banaan = aod.playground.physics.add.image(x, y, 'banaan').setScale(0.5);

    //banaan.create(400, 50, 'banaan').setScale(0.3)
   // banaan.create(100, 100, 'banaan').setScale(0.3)
    aod.playground.physics.add.collider(this.banaan, aod.platforms);
    aod.playground.physics.add.overlap(this.banaan, aod.player.player, (banaan, player) => {
        this.collectBanaan(banaan, player);
    }, null, true);
}
collectBanaan(banaan, player){
    banaan.disableBody(true, true)
    aod.scoreBanaan += 1;
    console.log(aod.scoreBanaan);
    aod.score.update(aod.scoreBanaan);

    }     

}