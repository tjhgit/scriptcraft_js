var isBlackWidow;
var isInvisible;
var isIronMan;
var itsMe;

function Assemble(evt) {
    var me = evt.getPlayer();
    msg = (evt.getMessage());
    if (String(msg) == 'Iron Man') {
        //(me).setResourcePack('http://mod.learntomod.com/editable_image_groups/YOUR TEXTURE PACK.zip');
        IAmIronMan(me);
    } else if (String(msg) == 'Black Widow') {
        //(me).setResourcePack('http://mod.learntomod.com/editable_image_groups/YOUR TEXTURE PACK.zip');
        IAmBlackWidow(me);
    }
}

function IAmBlackWidow(me) {
    isBlackWidow = true;
    isIronMan = false;
    me.performCommand('gamemode s');
    me.getInventory().addItem([new org.bukkit.inventory.ItemStack(org.bukkit.Material.DIAMOND,1)]);
    me.updateInventory();
}

function IAmIronMan(me) {
    isIronMan = true;
    isBlackWidow = false;
    me.performCommand('gamemode s');
    me.setAllowFlight(true);
    me.getInventory().addItem([new org.bukkit.inventory.ItemStack(org.bukkit.Material.BEDROCK,64)]);
    me.updateInventory();
}

function MissileExplosion(info) {
    if (Notch_explosion_wand.check_if_launched()) {
        Notch_explosion_wand.destroy((info.getBlock()));
    }
}

function TurnInvisible(me) {
    if (isInvisible == false) {
        me.addPotionEffect(new org.bukkit.potion.PotionEffect(org.bukkit.potion.PotionEffectType.INVISIBILITY,20000000,10 ));
        isInvisible = true;
        server.broadcastMessage('Cloaking...');
    } else {
        me.performCommand('effect @p clear');
        isInvisible = false;
        server.broadcastMessage('Decloaking...');
    }
}

//function main() {
exports.blackWidowIronMan=function(me) {
    isIronMan = false;
    isBlackWidow = false;
    isInvisible = false;
    //IAmIronMan(me);
    //IAmBlackWidow(me);
    //TurnInvisible(me);

    //eve = 'entity.EntityChangeBlockEvent';
    //events.when(('player.PlayerChatEvent'),(Assemble), me);
    events.playerChat(Assemble);
    //events.when(('player.PlayerInteractEvent'),(onInteract), me);
    events.playerInteract(onInteract);
    //events.when(eve,(MissileExplosion), me);
    events.entityChangeBlock(MissileExplosion);
}

function onInteract(evt) {
    var mat = evt.getMaterial();
    var me = evt.getPlayer();
    //echo(me,mat);
    //echo(me,isBlackWidow);
    if (String(mat) == 'BEDROCK' && isIronMan) {
        Notch_explosion_wand.init(org.bukkit.Material.BEDROCK, (me));
    } else if (String(mat) == 'DIAMOND' && isBlackWidow) {
        TurnInvisible(me);
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
    var world;

    function init(launch_block, casting_player) {
        playa = casting_player;
        world = playa.getLocation().getWorld();
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
            var location2 = playa.getLocation();
            var direction = location2.getDirection();
            world.spawnFallingBlock(location2, block_type, 0).setVelocity(((new org.bukkit.util.Vector(((direction.getX()) * 2), ((direction.getY()) * 2), ((direction.getZ()) * 2)))));
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
