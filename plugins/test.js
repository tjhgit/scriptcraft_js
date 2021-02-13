var Drone = require('drone');
var blocks = require('blocks');

function test() {
	// for this function to work the player must face in northern direction
	this
	.up()
	//.setBlock('29', 3, 0,0,0, false) // sticky piston south
	//.box('29:2',1,1,1) // facing north
	.box('29:3',1,1,1) // facing south
	this
	.up()
	.box('35:5',1,1,1)
	.back()
	.box('76:3',1,1,1)
	.fwd(2)
	.box('76:4',1,1,1)
	.back()
	.right()
	.box('76:1',1,1,1) // facing east
	.left(2)
	.box('76:2',1,1,1) // facing west
	//.back()
	//.left()
	//.cuboid('65',1,1,1)
	//.setBlock('65', 4, 0,0,0, false) // sticky piston south
	//.back()
	//.setBlock('29', 3, 0,0,0, false) // sticky piston south
	//.setBlock('76', 4, 0,0,1, false) // torch facing south
	

}
Drone.extend(test);