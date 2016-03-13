var chicken;
var dir;
var info;
var loc;
var name2;
var me;

function init() {
    //events.when(('player.PlayerInteractEvent'),(sheep_shooter), me);
    events.on(org.bukkit.event.player.PlayerInteractEvent,sheep_shooter);
    examples_magic_wands.init(me);
    examples_magic_wands.give_wand('Sheep Shot Wand', examples_magic_wands.fancy_yellow());
}

exports.sheepshootwand = function (player) {
    var mw=require('./examples_magic_wands.js');
    me=player;
    init();
}

function sheep_shooter(info) {
    var name2 = examples_magic_wands.item_in_hand_name(info.getPlayer());
    if (name2 == 'Sheep Shot Wand') {
        var loc = me.getLocation();
        var dir = loc.getDirection();
        //var world = me.getLocation().getWorld();
        var chicken = loc.world.spawnEntity(me.getLocation(),org.bukkit.entity.EntityType.SHEEP);
        chicken.setVelocity(new org.bukkit.util.Vector(dir.getX() * 2, dir.getY() * 2, dir.getZ() * 2));
    }
}


