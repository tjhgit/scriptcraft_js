var TheSkull;
var bType;
var d;
var dLoc;
var fireStarter;
var iBlock;
var info;
var rando;
var theBrineing;

function herobrineTotem(info) {
    var d = (new Drone(me, me.location));
    fireStarter = (info.getPlayer());
    d.setLocation(((info.getBlock()).getLocation()));
    d.down(1);
    var dLoc = (d.getLocation());
    var iBlock = (dLoc.getBlock());
    var bType = (iBlock.getType());
    if (String(bType) == 'NETHERRACK') {
        server.broadcastMessage((['I\'m coming for you ',(fireStarter.getDisplayName()),'...'].join('')));
        theBrineing = true;
    }
}

function main() {
    server.addRecipe((new ShapedRecipe(new ItemStack((Material.BEDROCK), 1))).shape(['AAA','ABA','AAA']).setIngredient('A', (Material.BONE)).setIngredient('B', (Material.SOUL_SAND)));
    (me).setResourcePack('http://mod.learntomod.com/editable_image_groups/url.zip');
    theBrineing = false;
    events.when(('block.BlockIgniteEvent'),(herobrineTotem), me);
    interval(me,(theHerobrineing),1000);
}

function math_random_int(a, b) {
    if (a > b) {
        // Swap a and b to ensure a is smaller.
        var c = a;
        a = b;
        b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
}

function theHerobrineing() {
    if (theBrineing == true) {
        rando = math_random_int(1, 20);
        if (rando == 1) {
            fireStarter.sendMessage('I see you...');
            TheSkull = (new ItemStack((Material.SKULL_ITEM), 1));
            var itemMeta = TheSkull.getItemMeta();
            itemMeta.setDisplayName('Your end is near...');
            TheSkull.setItemMeta(itemMeta);
            fireStarter.getInventory().addItem([TheSkull]);
            fireStarter.updateInventory();
            var d = (new Drone(me, me.location));
            d.back(20);
            d.mob((EntityType.ZOMBIE));
        }
    }
}
