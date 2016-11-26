var Drone = require('drone');
var blocks = require('blocks');

function wand(x, pistontyp, richtung, floors) {
	for(var i=0;i<floors;i++) {
		x
		.up()
		// .box('34',1,1,1)
		.setBlock(pistontyp, richtung, 0,0,0, false)
		x
		.left()
		.box('35:5',1,1,1)
		.up()
		.setBlock(pistontyp, richtung, 0,0,0, false)
		x
		.right()
		.box('35:5',1,1,1)
	}
}

function elevator(){
	this.chkpt('home');
	var floors = 4;
	// momentan muss man den Spieler in Richtung Norden ausrichten, dann erst bauen
	wand(this, '29', 3, floors); // sticky piston nach süden
	this
	.move('home')
	.back()
	wand(this, '33', 1, floors);  // normaler piston nach oben
	this
	.move('home')
	.up()
	.back(2)
	.right()
	.box('35:5',1,floors*2,1)
	this
	.move('home')
	.up()
	.back(2)
	.left(2)
	.box('35:5',1,floors*2,1)
	
	// zebramuster: air, wool rechts
	this
	.move('home')
	.up()
	.back()
	.right()
	for(var ii=0; ii<floors; ii++) {
		this
		.box('55',1,1,1)
		.up()
		.box('35:5',1,1,1)
		.up()
	}
	this
	.move('home')
	.up()
	.fwd()
	.right()
	for(var ii=0; ii<floors; ii++) {
		this
		.up()
		.box('35:5',1,1,1)
		.back()
		.box('76:3',1,1,1)
		.fwd()
		.up()
	}
	this
	.move('home')
	.up()
	.right()
	for(var ii=0; ii<floors; ii++) {
		this
		.box('35:5',1,1,1)
		//.box('76',1,1,1)
		.fwd()
		.box('76:4',1,1,1) // facing north
		.back()
		.up(2)
	}

	// zebramuster:air wool links
	this
	.move('home')
	.up()
	.back()
	.left(2)
	for(var ii=0; ii<floors; ii++) {
		this
		.box('35:5',1,1,1) // wool
		.up()
		.box('55',1,1,1) // redstone wire
		.up()
	}
	this
	.move('home')
	.up()
	.fwd()
	.left(2)
	for(var ii=0; ii<floors; ii++) {
		this
		.box('35:5',1,1,1)
		.back()
		.box('76:3',1,1,1)
		.fwd()
		.up(2)
	}
	this
	.move('home')
	.up()
	.left(2)
	for(var ii=0; ii<floors; ii++) {
		this
		.up()
		.box('35:5',1,1,1)
		.fwd()
		.box('76:4',1,1,1) // torch facing north
		.back()
		.up()
	}

//	// richtungs test
//	this.up()
//	this.setBlock('29', 2, 0,0,0, false)
//	this.up()
//	this.setBlock('29', 3, 0,0,0, false)
//	this.up()
//	this.setBlock('29', 4, 0,0,0, false)
//	this.up()
//	this.setBlock('29', 5, 0,0,0, false)
}

Drone.extend(elevator);