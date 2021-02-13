exports.monsterhouse = function() {
    var entities = require('entities');
    var spawn = require('spawn');

    // direction must be 0=east for the door to be build correctly
    var my_loc = self.getLocation() // self is the current player object
    d = new Drone(my_loc.x, my_loc.y, my_loc.z, 0, my_loc.world);
    d.chkpt('dh');
    // hollow house with glass roof
    d.box0(blocks.obsidian,10,10,10).up(10).fwd().right().box(blocks.glass,8,1,8);
    d.move('dh');

    // install door
    d.right(4).door().fwd(5);

    // spawn creepers
    var loc_spawn = d.getLocation()
    for (var count = 0; count < 5; count++)
        spawn(entities.creeper(), loc_spawn);
}
