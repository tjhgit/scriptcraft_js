struktur = [
    // 2 hoch mit Leiter
    function(x) {x.fwd(4).box(blocks.obsidian,1,2,1).up(1).ladder(1);},
    // 3 vorwärts 1 block
    function(x) {x.fwd(3).box(blocks.obsidian);},
    // 3 vorwarts 1hoch 1block
    function(x) {x.fwd(3).up(1).box(blocks.obsidian);},
    // 1 links 1vorwarts 1links 1vorwarts 1links 1block
    function(x) {x.left(1).fwd(1).left(1).fwd(1).left(1).box(blocks.obsidian);},
    // 3 vorwarts 1 hoch  1 zaun
    function(x) {x.fwd(3).box(85,1,1,2);},
    // 3 vorwarts 1 kreis
    function(x) {x.fwd(2).cylinder0(blocks.obsidian,7,1).fwd(14).right(3);},
    // 3 vorwarts 1 bogen 6 zaune
    function(x) {x.fwd(3).arc({
        blockType: blocks.obsidian, radius: 7, strokeWidth:2, 
        orientation: 'vertical',quadrants:{topright: true, bottomright: true}}).fwd(2).up(13);},
    // 1 rechts 1 vorwärts 1 rechts !vorwarts 1 rechts 1 block
    function(x) {x.right(1).fwd(1).right(1).fwd(1).right(1).box(blocks.obsidian);}
]
exports.jumprun = function() {
    var drone=new Drone(self), structnum, dostr, i,nn;

    nn=struktur.length;
    drone.chkpt('begin');

    eval("drone.up(1);");
    for(i=0;i<80;i++) {
        structnum=Math.round(Math.random()*(struktur.length-1));
        struktur[structnum](drone);
        //struktur[i](drone);
    } 
    drone.move('begin');
}
