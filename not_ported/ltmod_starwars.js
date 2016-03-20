var Button;
var Clicked;
var ClickedFace;
var ClickedType;
var Holding;
var HoldingType;
var Lifted;
var Playa;
var d;
var dir;
var entType;
var i;
var info;
var loc;
var nearbyEntities;

function Lift() {
    if (String(Button) == 'LEFT_CLICK_BLOCK') {
        if (String(ClickedFace) == 'UP') {
            d.setLocation((Clicked.getLocation()));
            d.box((Material.DIAMOND));
            Lifted = ((Clicked.getLocation()).getWorld().spawnFallingBlock((Clicked.getLocation()), ClickedType, 0));
            Lifted.setVelocity(((new org.bukkit.util.Vector(0, 1, 0))));
        }
    } else if (String(Button) == 'RIGHT_CLICK_BLOCK') {
        nearbyEntities = (armorstand.entities(Playa, 10));
        for (var i_index in nearbyEntities) {
            i = nearbyEntities[i_index];
            entType = (i.getType());
            i.setVelocity(((new org.bukkit.util.Vector(((dir.getX()) * 1),  2, ((dir.getZ()) * 1)))));
        }
    }
}

function TheForce(info) {
    d = (new Drone(me, me.location));
    Playa = (info.getPlayer());
    Holding = (Playa.getItemInHand());
    HoldingType = (Holding.getType());
    Button = (info.getAction());
    Clicked = (info.getClickedBlock());
    ClickedFace = (info.getBlockFace());
    ClickedType = (Clicked.getType());
    loc = (Playa.getLocation());
    dir = (loc.getDirection());
    if (HoldingType == (Material.SUGAR)) {
        Lift();
    }
}

function main() {
    (me).setResourcePack('http://mod.learntomod.com/editable_image_groups/carlosiscool-starwars.zip');
    events.when(('block.BlockBreakEvent'),(TheForce), me);
    events.when(('player.PlayerMoveEvent'),(onMove), me);
}

function onMove(info) {
    Playa = (info.getPlayer());
    Holding = (Playa.getItemInHand());
    HoldingType = (Holding.getType());
    if (HoldingType != (Material.SUGAR)) {
        Lifted.setVelocity(((new org.bukkit.util.Vector(((dir.getX()) * 2), ((dir.getY()) * 2), ((dir.getZ()) * 2)))));
    }
}
