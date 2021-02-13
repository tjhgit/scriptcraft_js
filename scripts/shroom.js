'use strict';
/*global require */
var Drone = require('drone'),
    blocks = require('blocks');
/************************************************************************
### Drone.shroom() method

Creates a mush-room dwelling - I don't think that this is possible when playing
creative mode manually?

***/
function shroom( ) {
  var stem_height = 8;
  var stem_width = 3;
  var cap_radius = 6; // 6 results in 13-wide cap (only testing with 6 for now)

  // Mushroom block data values (all sides)
  var pores = ':0';
  var cap = ':14';
  var stem = ':15';

  this
    .chkpt('shroom')
    .box0(blocks.mushroom_red_huge + stem, stem_width, stem_height, stem_width) // boxy stem
    .right()
    .door()
    .move('shroom')
    .back(cap_radius - 1)
    .left(cap_radius - 1)
    .up(stem_height)
    .cylinder(blocks.mushroom_red_huge + pores, cap_radius, 1)  // floor
    .cylinder0(blocks.mushroom_red_huge + cap, cap_radius, 1)   // Make the outer ring of the floor cap colored
    .up()
    .hemisphere0(blocks.mushroom_red_huge + cap, cap_radius, 'north')   // the cap
    .move('shroom')
    .right()
    .fwd()
    .box(blocks.air, 1, stem_height+1,1) // lazy way to open top of the stem
    .ladder(stem_height+1)
    .up(stem_height+1)
    .chkpt('room_center')
    //////////
    // Rear torches
    .fwd(cap_radius - 1)
    .up()
    .left()
    .hangtorch()
    .right()
    .hangtorch()
    .right()
    .hangtorch()
    //////////
    // Left torches
    .move('room_center')
    .left(cap_radius - 1)
    .up()
    .turn(3)
    .left()
    .hangtorch()
    .right()
    .hangtorch()
    .right()
    .hangtorch()
    //////////
    // Right torches
    .move('room_center')
    .right(cap_radius - 1)
    .up()
    .turn(1)
    .left()
    .hangtorch()
    .right()
    .hangtorch()
    .right()
    .hangtorch()
    //////////
    // Windows at the front of the room
    .move('room_center')
    .back(cap_radius)
    .left()
    .box(blocks.glass_pane, 3, 2, 1) // 3x2 window
    .move('shroom')
  ;
}
Drone.extend(shroom);
