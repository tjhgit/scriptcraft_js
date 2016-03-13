var isSnowKill;
var me;

function catchMob(info) {
    var monster = info.getEntity();
    var weapon = info.getDamager();
    var currentHP = monster.getHealth();
    var maxHP = monster.getMaxHealth();
    echo(me,'monster health current: '+currentHP);
    echo(me,'monster health max: '+maxHP);
    if (currentHP / maxHP < 0.9) {
        if (String(weapon) == 'CraftSnowball') {
            isSnowKill = true;
            monster.setHealth(0);
            me.sendMessage('You caught it!!');
        } else {
            me.sendMessage('Throw it!!');
        }
    } else {
        me.sendMessage(['Health = ',Math.round((currentHP / maxHP) * 100),'%'].join(''));
    }
}

function dropItem(info) {
    if (isSnowKill) {
        var deadMonster = (info.getEntity());
        var newDrop = (new org.bukkit.inventory.ItemStack((Material.SNOW_BALL), 1));
        var newDropInfo = (newDrop.getItemMeta());
        newDropInfo.setDisplayName(deadMonster.getType());
        newDrop.setItemMeta(newDropInfo);
        info.getDrops().clear();
        info.getDrops().add(newDrop);
        isSnowKill = false;
    }
}

//function main() {
exports.snowball = function(me_arg) {
    me = me_arg;
    me.sendMessage('Mod Ready');
    //pickUpEvent = 'player.PlayerPickupItemEvent';
    events.on(org.bukkit.event.entity.EntityDamageByEntityEvent,catchMob);
    //events.when(('entity.EntityDeathEvent'),(dropItem), me);
    events.entityDeath(dropItem);
    events.on(org.bukkit.event.player.PlayerPickupItemEvent,newInventory);
}

function newInventory(info) {
    var me = info.getPlayer();
    var item = info.getItem();
    var stack = item.getItemStack();
    var meta = stack.getItemMeta();
    var name2 = meta.getDisplayName();
    if (String(stack.getType()) == 'SNOW_BALL') {
        if (name2 != null) {
            me.sendMessage(String(name2) + String(' added to inventory'));
        }
    }
}

