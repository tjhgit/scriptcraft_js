var me;

function fireball(info) {
    var name2 = examples_magic_wands.item_in_hand_name(info.getPlayer());
    var world = me.getLocation().getWorld();
    if (name2 == 'Polymorph Wand') {
        var f = world.spawnEntity(me.getLocation(),org.bukkit.entity.EntityType.FIREBALL);
        f.setShooter(me);
    }
}

function init() {
    //events.when(('player.PlayerInteractEvent'),(fireball), me);
    //events.when(('entity.EntityDamageByEntityEvent'),(polymorph), me);
    
    events.on(org.bukkit.event.player.PlayerInteractEvent,fireball);
    events.on(org.bukkit.event.entity.EntityDamageByEntityEvent,polymorph);

    examples_magic_wands.init(me);
    examples_magic_wands.give_wand('Polymorph Wand', examples_magic_wands.dark_blue());
}

function polymorph(info) {
    var damager = info.getDamager();
    var world = me.getLocation().getWorld();
    if (damager.getType() == org.bukkit.entity.EntityType.FIREBALL) {
        var entity = info.getEntity();
        var loc = entity.getLocation();
        world.spawnEntity(loc,org.bukkit.entity.EntityType.SHEEP);
        //var dummy = eval('entity.remove()');
        entity.remove();
    }
}

exports.polymorphwand = function(player) {
    //mw=require('/home/thomas/Downloads/spigot/scriptcraft/plugins/pepsiONE/examples_magic_wands.js');

    var mw=require('./examples_magic_wands.js');
    me=player;
    init();
}
