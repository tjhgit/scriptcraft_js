var targetPos = utils.getMousePos(playerName);
//utils.getPlayerPos() function // position of Player
//var key = utils.locationToString(player.location);
//drone.getLocation()
targetPos.world.makeLightningBolt(targetPos); // strike a lightning bolt


// inventory functions
var inventory = require('inventory');
var items = require('items');
var utils = require('utils');

gives every player a cookie and a baked potatoe
utils.players(function(player){
    inventory(player)
        .add( items.cookie(1) )
        .add( items.bakedPotato(1) )
});

// give a player 6 cookies then take away 4 of them

inventory(player).add( items.cookie(6) ).remove ( items.cookie(4) );


// check if a player has any cookies

var hasCookies = inventory(player).contains( items.cookie(1) );


// spawn (see farm.js)
var spawn = require('spawn');
var animals = ['COW','PIG','HORSE','SHEEP'];
exports.spawnAnimals = function( location, count ) {
    var i = 0;
    for (; i < count; i++){
        spawn( location, animals[ i % animals.length ] );
    }
}



//events.playerMove();
function onJoin( event ){
    if ( isOp(event.player) ) {
        echo( event.player, 'Welcome to ' + __plugin );
    }
}
events.connection( onJoin );

// strike lightning wherever a player's arrow lands
var lightning = require('lightning');
events.projectileHit( function( event ){
    if ( entities.arrow( event.projectile ) // it's an arrow
            && entities.player( event.projectile.owner ) // it was shot by a player
       ) {
        lightning( event.projectile ); // strike lightning at the arrow location
    }
});

setTimeout(function, milliseconds); //Executes a function, after waiting a specified number of milliseconds.
setInterval(function, milliseconds); // Same as setTimeout(), but repeats the execution of the function continuously.


//Invoke the /defaultgamemode creative command (as server).

var slash = require('slash');
slash('defaultgamemode creative', server);

//Set the time of day to Midday and toggle downfall:

var slash = require('slash');
slash([
          'time set 6000',
            'toggledownfall'
], server);


//To grant a Speed 1 effect to the nearest player for 60 seconds: effect @p 1 60
//To grant a Speed 3 effect to the nearest player for 60 seconds: effect @p minecraft:speed 60 2
//To clear any Haste effects from all players: effect @a minecraft:haste 0
//To clear all effects from all zombies: effect @e[type=Zombie] clear 

events.on( Packages.net.canarymod.hook.player.BlockDestroyHook, function( evt, cancel ) { 
      echo(evt.player, evt.player.name + ' broke a block!');
} );

To handle an event only once and unregister from further events...

events.on( Packages.net.canarymod.hook.player.BlockDestroyHook, function( evt, cancel ) { 
      echo( evt.player, evt.player.name + ' broke a block!');
        this.unregister();
} );


server.broadcastMessage();


var quest_npc = world.spawnCreature(player.getLocation().add(1,0,0), org.bukkit.entity.EntityType.VILLAGER);

