var me;

function init() {
    //events.when(('player.PlayerInteractEvent'),(lavaball), me);
    //@EventHandler(ignoreCancelled=false)
    var evt1 = org.bukkit.event.player.PlayerInteractEvent;
    events.on(evt1,fireball);
    //listen(evt1,lavaball);
    //org.bukkit.event.ignoreCancelled = false;
    examples_magic_wands.init(me);
    examples_magic_wands.give_wand('Fireball Wand', examples_magic_wands.fancy_blue());
}

function fireball(evt) {
    var name2 = examples_magic_wands.item_in_hand_name(evt.getPlayer());
    var world = me.getLocation().getWorld();
    if (name2 == 'Fireball Wand') {
        var f = world.spawnEntity(me.getLocation(),org.bukkit.entity.EntityType.FIREBALL);
        f.setShooter(me);
    }
}
exports.fireballwand = function(player) {
    //mw=require('/home/thomas/Downloads/spigot/scriptcraft/plugins/pepsiONE/examples_magic_wands.js');

    var mw=require('./examples_magic_wands.js');
    me=player;
    init();
}


