// TODO:
// 1) streckenkorrekturen (regel1: in ebene mit letztem, regel2: bei z aenderung mit letztem + vorletztem
// 2) powered rails legen
// 3) torches setzen

function helix(){
	this.chkpt('dh');
	var radius = 10;
	var steigung = 0.01;
	var rotationen = 10;
	var x = 0;
	var y = 0;
	var z = 0;
	
	for(var phi=0; phi<360*rotationen; phi++) {
		x = radius*Math.cos(phi/360*2*Math.PI);
		y = radius*Math.sin(phi/360*2*Math.PI);
		z = z+steigung;

		if(x<0) {
			this.left(-x);
		} else {
			this.right(x);
		}

		if(y<0) {
			this.back(-y);
		} else {
			this.fwd(y);
		}
		this.up(Math.round(z));
		
		this.box( blocks.oak )
		this.move('dh');
	}

};

var Baumeister=require('drone');
Baumeister.extend(helix);