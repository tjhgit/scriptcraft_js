//exports.skyscraper=function(floors) {
function building(floors){
    var i;
    if(typeof floors == 'undefined') {
        floors=10;
    }
    // bookmark drone position
    this.chkpt('pos1');
    for(i=0;i<floors;i++) {
        this
            .box(blocks.iron,20,1,20)
            .up()
            .box0(blocks.glass_pane,20,3,20)
            .up(3);
    }
    this.move('pos1');
};
var Drone=require('drone');
Drone.extend(building);
//}
