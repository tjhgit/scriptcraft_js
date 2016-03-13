function sign(x) { return x ? x < 0 ? -1 : 1 : 0; }

exports.haeuserdorf = function(anz_haeuser) {
    var i,drohne=new Drone(self),zufall1,zufall2;

    drohne.chkpt('begin');
    for(i=0;i<anz_haeuser;i++){
        zufall1=(Math.random()-0.5)*30;
        zufall2=(Math.random()-0.5)*30;
        drohne.right(zufall1+sign(zufall1)*6).fwd(zufall2+sign(zufall2)*6);
        drohne.haus();
    }
    drohne.move('begin');
}



