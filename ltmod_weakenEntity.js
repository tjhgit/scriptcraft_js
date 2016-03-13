var currentHP;
var info;
var maxHP;
var monster;
var weapon;

function catchMob(info) {
    monster = (info.getEntity());
    weapon = (info.getDamager());
    currentHP = (monster.getHealth());
    maxHP = (monster.getMaxHealth());
    if (currentHP / maxHP < 0.3) {
        if (String(weapon) == 'CraftSnowball') {
            monster.setHealth(0);
            (me).sendMessage('You caught it!!');
        } else {
            (me).sendMessage('Throw it!!');
        }
    } else {
        (me).sendMessage((['Health = ',Math.round((currentHP / maxHP) * 100),'%'].join('')));
    }
}

function main() {
    (me).sendMessage('Mod Ready');
    events.when(('entity.EntityDamageByEntityEvent'),(catchMob), me);
}
