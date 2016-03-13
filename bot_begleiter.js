var chat_sent;
var i;
var info;
var nearby_mobs;
var searching;
var sidekick;
var sidekick_entity;
var teleport;

exports.bot_begleiter=function(me){
    //sidekick = (citizens.citizen((EntityType.CREEPER), 'Billy', ((me).getLocation()), true));
    sidekick = org.bukkit.entity.Entity.spigot();
    sidekick.setCustomName("Billy");
    sidekick_entity = (sidekick.getEntity());
    sidekick.getNavigator().setTarget((me), false);
    searching = true;
    teleport = true;
    events.when(('player.PlayerChatEvent'),(onChat), me);
    events.when(('player.PlayerMoveEvent'),(onMove), me);
}

function onChat(info) {
    chat_sent = (info.getMessage());
    if (String(chat_sent) == 'stay') {
        sidekick.getNavigator().setTarget((sidekick_entity.getLocation()));
    } else if (String(chat_sent) == 'follow') {
        sidekick.getNavigator().setTarget((me), false);
    } else if (String(chat_sent) == 'attack') {
        world.strikeLightning((sidekick_entity.getLocation()));
    }
}

function onMove() {
    sidekick_entity.addPotionEffect(new PotionEffect(PotionEffectType.SPEED,20,10 ));
    if (sidekick.getEntity().getLocation().distanceSquared(me.getLocation()) > 100) {
        if (teleport == true) {
            sidekick_entity.teleport(((me).getLocation()));
        }
    } else if (searching == true) {
        nearby_mobs = (armorstand.entities(sidekick_entity, 5));
        for (var i_index in nearby_mobs) {
            i = nearby_mobs[i_index];
            if (i instanceof org.bukkit.entity.Monster) {
                (me).sendMessage('ich greife an...');
                sidekick_entity.addPotionEffect(new PotionEffect(PotionEffectType.INCREASE_DAMAGE,20,10 ));
                sidekick.getNavigator().setTarget(i, true);
                searching = true;
                break;
            }
        }
    } else if (i.isDead()) {
        sidekick.getNavigator().setTarget((me), false);
        searching = true;
    }
}
