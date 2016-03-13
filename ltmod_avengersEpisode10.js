var eve;
var info;
var isBlackWidow;
var isInvisible;
var isIronMan;
var itsMe;
var mat;
var msg;

function Assemble(info) {
    msg = (info.getMessage());
    if (String(msg) == 'Iron Man') {
        (me).setResourcePack('http://mod.learntomod.com/editable_image_groups/YOUR TEXTURE PACK.zip');
        IAmIronMan();
    } else if (String(msg) == 'Black Widow') {
        (me).setResourcePack('http://mod.learntomod.com/editable_image_groups/YOUR TEXTURE PACK.zip');
        IAmBlackWidow();
    }
}

function IAmBlackWidow() {
    isBlackWidow = true;
    isIronMan = false;
    (me).performCommand('gamemode s');
    (me).getInventory().addItem([new ItemStack((Material.DIAMOND),1)]);
    (me).updateInventory();
}

function IAmIronMan() {
    isIronMan = true;
    isBlackWidow = false;
    (me).performCommand('gamemode s');
    itsMe = (me);
    itsMe.setAllowFlight(true);
    (me).getInventory().addItem([new ItemStack((Material.BEDROCK),64)]);
    (me).updateInventory();
}

function MissileExplosion(info) {
    if (Notch_explosion_wand.check_if_launched()) {
        Notch_explosion_wand.destroy((info.getBlock()));
    }
}

function TurnInvisible() {
    if (isInvisible == false) {
        (me).addPotionEffect(new PotionEffect(PotionEffectType.INVISIBILITY,20000000,10 ));
        isInvisible = true;
        server.broadcastMessage('Cloaking...');
    } else {
        (me).performCommand('effect @p clear');
        isInvisible = false;
        server.broadcastMessage('Decloaking...');
    }
}

function main() {
    isIronMan = false;
    isBlackWidow = false;
    isInvisible = false;
    eve = 'entity.EntityChangeBlockEvent';
    events.when(('player.PlayerChatEvent'),(Assemble), me);
    events.when(('player.PlayerInteractEvent'),(onInteract), me);
    events.when(eve,(MissileExplosion), me);
}

function onInteract(info) {
    mat = (info.getMaterial());
    if (String(mat) == 'BEDROCK' && isIronMan) {
        Notch_explosion_wand.init((Material.BEDROCK), (me));
    } else if (String(mat) == 'DIAMOND' && isBlackWidow) {
        TurnInvisible();
    }
}


var Notch_explosion_wand = new function(){
    var launch_block;
    var casting_player;
    var block;
    var playa;
    var launched;
    var block_type;
    var launching;
    var landing;
    var location2;
    var direction;

    function init(launch_block, casting_player) {
        playa = casting_player;
        block_type = launch_block;
        launching = false;
        landing = false;
        launch();
    }

    function destroy(block) {
        if (launching == false && landing == true) {
            landing = false;
            world.createExplosion((block.getLocation()).getX(), (block.getLocation()).getY(), (block.getLocation()).getZ(), 4, true, true);
        }
    }

    function launch() {
        if (launching == false && landing == false) {
            launching = true;
            var location2 = (playa.getLocation());
            var direction = (location2.getDirection());
            (location2.getWorld().spawnFallingBlock(location2, block_type, 0)).setVelocity(((new org.bukkit.util.Vector(((direction.getX()) * 2), ((direction.getY()) * 2), ((direction.getZ()) * 2)))));
        }
    }

    function check_if_launched() {
        var launched = false;
        if (launching == true && landing == false) {
            launching = false;
            landing = true;
            launched = true;
        }
        return launched;
    }

    this.init=init;
    this.destroy=destroy;
    this.check_if_launched=check_if_launched
}
