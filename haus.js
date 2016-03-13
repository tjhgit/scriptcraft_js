function haus(hoehe,breite,material,material_dach){
    if(typeof hoehe=='undefined'){
        hoehe=5;
    }
    if(typeof breite=='undefined'){
        breite=5;
    }
    if(typeof material=='undefined'){
        material=blocks.stone; // wenn material nicht definiert dann stein
    }
    if(typeof material_dach=='undefined'){
        material_dach=blocks.glass; // wenn dach material nicht def. dann bitte Glas
    }
    this.chkpt('dh');
    this.up(1).box0(material,breite,hoehe,breite).up(hoehe).prism(material_dach,breite,breite);
    this.move('dh');
};

var Baumeister=require('drone');
Baumeister.extend(haus);

