var Drone = require('drone');
var blocks = require('blocks'); 
var splash = require('sounds');

function hottub(){ 
	
	this.chkpt('HotTub');
	//first we dig a hole
	box(blocks.air,5,1,5) 	
	.down(1)				
	.times(3)
//then we lay down the heater	
	.box(blocks.netherrack,5,1,5)
	.up(1)
	//turn the heater on
	.box(blocks.fire,5,1,5)
	//now we lay down the glass beetween water and the heater
	.up(1)
	.box(blocks.glass,5,1,5)
	//now we fill the hottub half way thrue
	.up(1)
	.box(blocks.water,5,1,5)
	//now we putt the the edge
	.back(1)
	.left(1)
	.box0(blocks.iron,7,2,7)
	//now we putt the first step
	.up(1)
	.right(3)
	.back(1)
	.box(blocks.iron,1,1,2)
	//now we putt the bars
	.left(1)
	.box(blocks.iron_bars,1,1,1)
	.right(2)
	.box(blocks.iron_bars,1,1,1)
	.up(1)
	.box(blocks.iron_bars,1,1,1)
	.left(2)
	.box(blocks.iron_bars,1,1,1)
	.fwd(1)
	.box(blocks.iron_bars,1,1,1)
	.right(2)
	.box(blocks.iron_bars,1,1,1)
	//now the finishing touches
	.right(2)
	.box(blocks.glowstone,1,1,1)
	.fwd(6)
	.box(blocks.glowstone,1,1,1)
	.left(6)
	.box(blocks.glowstone,1,1,1)
	.back(6)
	.box(blocks.glowstone,1,1,1)
	.fwd(1)
	.right(1)
	.down(1)
	.box(blocks.water,5,1,5)
	.right(2)
	.down(1)
	.box(blocks.iron,1,1,1)
	.right(2)
	.fwd(2)
	.box(blocks.iron,1,1,1)
	.move('HotTub')
	
}
function splash(){
	sounds.liquidSplash
}
Drone.extend(hottub);
