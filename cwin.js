var Drone = require('drone'); 
function cwin( wdetail) { 
    this.chkpt('cwin');
	this.box('139:0',1,2,1).fwd(1).box(89,1,2,1);
	if(wdetail){
		this.left(2).up(2).back(1).box(109,1,1,1);
		this.right(4).box(109,1,1,1);
	} 
	return this.move('cwin');	
}
Drone.extend( cwin );
