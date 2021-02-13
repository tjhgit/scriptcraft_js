function arena(hoehe,breite,material){
    var i;
    if(typeof hoehe=='undefined'){
        hoehe=5;
    }
    if(typeof breite=='undefined'){
        breite=2;
    }
    if(typeof material=='undefined'){
        material=blocks.glass;
    }

    this.chkpt('dh');
    this.box(material,breite,1,breite).up() // der Boden

        for(i=0;i<hoehe;i++){ // die Tribuene
            this
                .box0(material,breite+2*i,1,breite+2*i)
                .up()
                .back(1)
                .left(1);
        }
    this.move('dh');
};
var Baumeister=require('drone');
Baumeister.extend(arena);




