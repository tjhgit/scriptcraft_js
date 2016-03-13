var searching;
var sidekick;

exports.bot_begleiter=function(me){
    var welt = me.getWorld();
    var loc = me.getLocation();
    sidekick = welt.spawnEntity(loc,org.bukkit.entity.EntityType.CREEPER);
    sidekick.setCustomName("Billy");
    //sidekick.setTarget(sidekick);
    echo(me,loc.getX());

    //sidekick.teleport(org.bukkit.Location(welt,loc.getX()+1,loc.getY(),loc.getZ()));

    //echo(me,sidekick.getLocation().distanceSquared(me.getLocation()) );

    //sidekick.setTarget(me);
    //var kreatur = (Creature) me.getWorld().spawnEntity(me.getLocation(),EntityType.CREEPER);
    //sidekick = (citizens.citizen((EntityType.CREEPER), 'Billy', ((me).getLocation()), true));
    //sidekick = org.bukkit.entity.Entity;
    //sidekick.setCustomName("Billy");
    //sidekick_entity = (sidekick.getEntity());
    //echo(me,'hallo');
    //    var pet = (Creature) sidekick_entity;
    //    pet.setTarget(me);
    //    //sidekick.getNavigator().setTarget((me), false);
    //    searching = true;
    //    teleport = true;
    //    //events.when(('player.PlayerChatEvent'),(onChat), me);
    events.playerChat(onChat);
    //    //events.when(('player.PlayerMoveEvent'),(onMove), me);
    events.playerMove(onMove);
}
function onChat(evt) {
    var me = evt.getPlayer();
    //echo(me,'in onchat');
    chat_sent = evt.getMessage();
    if(String(chat_sent) == 'friendly') {
        echo(me,'Billy ist freundlich');
        sidekick.setTarget(sidekick);
        searching = false;
    } else if(String(chat_sent)=='attack'){
        echo(me,'Billy attackiert');
        searching = true;
    }
}


function onMove(evt) {
    var me = evt.getPlayer();
    sidekick.addPotionEffect(new org.bukkit.potion.PotionEffect(org.bukkit.potion.PotionEffectType.SPEED,20,10 ));
    var distanz = sidekick.getLocation().distanceSquared(me.getLocation());
    //echo(me,'Billy ist hier: '+distanz);
        
    if(distanz>100){
        sidekick.teleport(me.getLocation());
    } else if(searching==true) {
        var nearby_mobs = sidekick.getNearbyEntities(10,10,10);
        echo(me,'nearby mobs: '+nearby_mobs.size());
        for (var i_index=0, n=nearby_mobs.size(); i_index<n;i_index++) {
            i = nearby_mobs.get(i_index);
            //echo(me,i);
            if (i instanceof org.bukkit.entity.Monster) {
                (me).sendMessage('ich greife an...');
                sidekick.addPotionEffect(new org.bukkit.potion.PotionEffect(org.bukkit.potion.PotionEffectType.INCREASE_DAMAGE,20,10 ));
                sidekick.setTarget(i);
                //searching = true;
                //break;
            }
        }
    }
}
//function onChat(info) {
//    chat_sent = (info.getMessage());
//    if (String(chat_sent) == 'stay') {
//        sidekick.getNavigator().setTarget((sidekick_entity.getLocation()));
//    } else if (String(chat_sent) == 'follow') {
//        sidekick.getNavigator().setTarget((me), false);
//    } else if (String(chat_sent) == 'attack') {
//        world.strikeLightning((sidekick_entity.getLocation()));
//    }
//}
//
//function onMove() {
//    sidekick_entity.addPotionEffect(new PotionEffect(PotionEffectType.SPEED,20,10 ));
//    if (sidekick.getEntity().getLocation().distanceSquared(me.getLocation()) > 100) {
//        if (teleport == true) {
//            sidekick_entity.teleport(((me).getLocation()));
//        }
//    } else if (searching == true) {
//        nearby_mobs = (armorstand.entities(sidekick_entity, 5));
//        for (var i_index in nearby_mobs) {
//            i = nearby_mobs[i_index];
//            if (i instanceof org.bukkit.entity.Monster) {
//                (me).sendMessage('ich greife an...');
//                sidekick_entity.addPotionEffect(new PotionEffect(PotionEffectType.INCREASE_DAMAGE,20,10 ));
//                sidekick.getNavigator().setTarget(i, true);
//                searching = true;
//                break;
//            }
//        }
//    } else if (i.isDead()) {
//        sidekick.getNavigator().setTarget((me), false);
//        searching = true;
//    }
//}
