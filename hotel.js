function hotel(breite,anz_stock) {
    this.chkpt('uu');
    for (var i=0;i<anz_stock;i++) {
        this.box0(blocks.quartz,breite,5,breite).fwd().right().box(blocks.emerald,breite-2,1,breite-2).up(5).left().back();
    }
    // times does not work, crashes on spigot
    //this.box0(blocks.quartz,breite,5,breite).fwd().right().box(blocks.emerald,8,1,8).up(5).left().back().times(5);
    this.box(blocks.grass,breite,1,breite);
    // build a fence = material id 85
    this.up().box0(85,breite,1,breite);
    this.up().box(85,1,1,1).fwd(breite-1).box(85,1,1,1).right(breite-1).box(85,1,1,1).back(breite-1).box(85,1,1,1);
    this.move('uu');
}

var Baumeister=require('drone');
Baumeister.extend(hotel);
