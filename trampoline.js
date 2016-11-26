/*global require, events */
var blocks = require('blocks'),
    sounds = require('sounds');

var bouncers = {};

function bounceOnIron(event){
  var player = event.player;
  var id = player.ID;
  var bounce = bouncers[id] || 0.75; // get bounciness (default 0.75)
  var location = player.location;
  // need to convert coordinates to integers
  var x = Math.floor(location.x);
  var y = Math.floor(location.y - 1 ); // what's underfoot?
  var z = Math.floor(location.z);
  var block = location.world.getBlockAt(x, y, z);
  if (block.typeId === blocks.iron){
    // sounds.slimeAttack(player);     // play an appropriate sound 
    player.motionY = bounce;        // set player in motion
    bouncers[id] = bounce * 1.05;   // increase bounce for next jump
    return;
  }
  if ( player.isOnGround() )
    bouncers[id] = 0.75;               // reset bounciness
}
events.playerMove( bounceOnIron );