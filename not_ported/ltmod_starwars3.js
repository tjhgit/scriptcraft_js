var Ent;
var EntType;
var info;

function lightning(info) {
    Ent = (info.getDamager());
    EntType = (Ent.getType());
    if (String(EntType) == 'EGG') {
        world.strikeLightning((Ent.getLocation()));
        particle.line((particle.particles.WITCH_MAGIC), (Ent.getLocation()), ((me).getLocation()));
    }
}

function main() {
    (me).setResourcePack('http://mod.learntomod.com/editable_image_groups/carlosiscool-starwars.zip');
    events.when(('entity.EntityDamageByEntityEvent'),(lightning), me);
}

