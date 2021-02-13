exports.dancecube=function() { // leider überlasten dancecube mit seitenl>10 den server somit auf 10 besschränkt
    var seitenl=10;
    var baumeister=new Drone(self);
    baumeister.chkpt('start');
    // aussenhülle = schachbrett
    for(ss=0;ss<seitenl;ss++) {
        baumeister.chessboard(blocks.wool.white,blocks.wool.black,seitenl,seitenl).up();
    }
    baumeister.move('start');
    baumeister.fwd().right().up().box(blocks.air,seitenl-2,seitenl-2,seitenl-2); // das innere ist hohl
    baumeister.box(blocks.glowstone,seitenl-2,1,seitenl-2); // glowstone ebene unten
    // oder zeile 26 !
    //
    baumeister.up(seitenl-2).down().box(blocks.glowstone,seitenl-2,1,seitenl-2); // glowstone ebene oben
    var duration = 60;
    var task = null;

    var strobe = function() {
        baumeister.move('start').fwd(2).right(2).up(2);

        baumeister.rand(blocks.rainbow,seitenl-4,1,seitenl-4).up(); // zufälliger dancefloor boden
        for(ss=0;ss<seitenl-6;ss++) {
            baumeister.rand(blocks.rainbow,seitenl-4,1,1); // zufällige glasfarben ebene
            baumeister.fwd(seitenl-4).rand(blocks.rainbow,seitenl-4,1,1).back(seitenl-4);
            baumeister.rand(blocks.rainbow,1,1,seitenl-4);
            baumeister.right(seitenl-4).rand(blocks.rainbow,1,1,seitenl-4).left(seitenl-4);
            //baumeister.fwd().right().box(blocks.air,seitenl-6,1,seitenl-6).back().left(); // hohl
            baumeister.up();
        }
        baumeister.rand(blocks.rainbow,seitenl-4,1,seitenl-4); // final ein zufällige decke
        baumeister.move('start');
        duration --;
        if(duration == 0) {
            clearInterval(task);
        }
    };
    task=setInterval(strobe,1*1000);
    // ganz innen ist es hohl
    //  baumeister.fwd(2).right(2).up(2).box(blocks.air,seitenl-4,seitenl-4,seitenl-4);
}
