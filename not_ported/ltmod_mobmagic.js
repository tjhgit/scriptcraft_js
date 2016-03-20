var button;
var currentHP;
var deadMonster;
var holding;
var holdingMeta;
var info;
var isSnowKill;
var item;
var maxHP;
var meta;
var metaName;
var monster;
var name2;
var newDrop;
var newDropInfo;
var pickUpEvent;
var stack;
var summonThis;
var trainer;
var weapon;

function catchMob(info) {
    monster = (info.getEntity());
    weapon = (info.getDamager());
    currentHP = (monster.getHealth());
    maxHP = (monster.getMaxHealth());
    if (currentHP / maxHP < 0.3) {
        if (String(weapon) == 'CraftSnowball') {
            isSnowKill = true;
            monster.setHealth(0);
            (me).sendMessage('You caught it!!');
        } else {
            (me).sendMessage('Throw it!!');
        }
    } else {
        (me).sendMessage((['Health = ',Math.round((currentHP / maxHP) * 100),'%'].join('')));
    }
}

function dropItem(info) {
    if (isSnowKill) {
        deadMonster = (info.getEntity());
        newDrop = (new ItemStack((Material.SNOW_BALL), 1));
        newDropInfo = (newDrop.getItemMeta());
        newDropInfo.setDisplayName((deadMonster.getType()));
        newDrop.setItemMeta(newDropInfo);
        info.getDrops().clear();
        info.getDrops().add(newDrop);
        isSnowKill = false;
    }
}

function main() {
    (me).sendMessage('Mod Ready');
    pickUpEvent = 'player.PlayerPickupItemEvent';
    events.when(('entity.EntityDamageByEntityEvent'),(catchMob), me);
    events.when(('entity.EntityDeathEvent'),(dropItem), me);
    events.when(pickUpEvent,(newInventory), me);
    events.when(('player.PlayerInteractEvent'),(selectMob), me);
}

function newInventory(info) {
    item = (info.getItem());
    stack = (item.getItemStack());
    meta = (stack.getItemMeta());
    name2 = (meta.getDisplayName());
    if (String(stack.getType()) == 'SNOW_BALL') {
        if (name2 != null) {
            (me).sendMessage((String(name2) + String(' added to inventory')));
        }
    }
}

function selectMob(info) {
    trainer = (info.getPlayer());
    holding = (trainer.getItemInHand());
    button = (info.getAction());
    holdingMeta = (holding.getItemMeta());
    metaName = (holdingMeta.getDisplayName());
    if (String(holding.getType()) == 'SNOW_BALL') {
        if (String(button) == 'RIGHT_CLICK_AIR' || String(button) == 'RIGHT_CLICK_BLOCK') {
            if (metaName != null) {
                summonThis = metaName;
                (me).sendMessage((String('You will summon a ') + String(summonThis)));
            }
        }
    }
}
