var dir;
var info;
var loc;
var name2;
var me;

function init() {
    //events.when(('player.PlayerInteractEvent'),(lavaball), me);
    //@EventHandler(ignoreCancelled=false)
    var evt1 = org.bukkit.event.player.PlayerInteractEvent;
    events.on(evt1,lavaball);
    //listen(evt1,lavaball);
    //org.bukkit.event.ignoreCancelled = false;
    examples_magic_wands.init(me);
    examples_magic_wands.give_wand('Lavaball Wand', examples_magic_wands.fancy_blue());
}

function lavaball(evt) {
    var name2 = examples_magic_wands.item_in_hand_name(evt.getPlayer());
    echo(me,name2);
    if (name2 == 'Lavaball Wand') {
        var loc = me.getLocation();
        var dir = loc.getDirection();
        var spawn_mat = org.bukkit.Material.LAVA;
        var vec1 = new org.bukkit.util.Vector(dir.getX() * 2, dir.getY() * 2, dir.getZ() * 2);
        me.getLocation().getWorld().spawnFallingBlock(me.getLocation(), spawn_mat, 0).setVelocity(vec1);
    }
}

exports.lavawand = function(player) {
    //mw=require('/home/thomas/Downloads/spigot/scriptcraft/plugins/pepsiONE/examples_magic_wands.js');
    
    var mw=require('./examples_magic_wands.js');
    me=player;
    init();
}


