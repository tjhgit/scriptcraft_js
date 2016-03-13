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

function Lift(spieler) {
    var i_index, nn;
    if (String(Button) == 'LEFT_CLICK_BLOCK') {
        if (String(ClickedFace) == 'UP') {
            //d.setLocation((Clicked.getLocation()));
            d=new Drone(Clicked.getLocation());
            d.box((blocks.diamond));
            Lifted = ((Clicked.getLocation()).getWorld().spawnFallingBlock((Clicked.getLocation()), ClickedType, 0));
            Lifted.setVelocity(((new org.bukkit.util.Vector(0, 1, 0))));
            echo(spieler,'Lifting');
        }
    } else if (String(Button) == 'RIGHT_CLICK_BLOCK') {
        //nearbyEntities = (armorstand.entities(Playa, 10));

        //echo(spieler,spieler);
        nearbyEntities=spieler.getNearbyEntities(10,10,10); // ?????
        //echo(spieler,nearbyEntities);
        //echo(spieler,typeof(nearbyEntities.get(1)));

        nn=nearbyEntities.size();
        //echo(spieler,typeof(nearbyEntities));
        echo(spieler,"Jetzt huepft ihr "+nn);
        for (i_index=0;i_index<nn;i_index++) {
        //for(i_index in nearbyEntities) {

            //i = nearbyEntities[i_index];
            i=nearbyEntities.get(i_index);
            //echo(spieler,i);
            entType = (i.getType());
            //echo(spieler,entType);
            i.setVelocity(((new org.bukkit.util.Vector(((dir.getX()) * 1),  2, ((dir.getZ()) * 1)))));
        }
    }
}

function TheForce(evt) {
    //d = (new Drone(me, me.location));
    Playa = (evt.getPlayer());
    Holding = (Playa.getItemInHand());
    HoldingType = (Holding.getType());
    Button = (evt.getAction());
    Clicked = (evt.getClickedBlock());
    ClickedFace = (evt.getBlockFace());
    ClickedType = (Clicked.getType());
    loc = (Playa.getLocation());
    dir = (loc.getDirection());
    if (HoldingType == (org.bukkit.Material.SUGAR)) {
        Lift(Playa);
    }

    //echo(Playa,evt.toString());
    //echo(Playa,Button);
    //echo(Playa,HoldingType);
    //echo(Playa,ClickedFace);
    //echo(Playa,ClickedType);
}
// Aufrufen mit /js starwars(self)
exports.starwars = function(player) {
    //(me).setResourcePack('http://mod.learntomod.com/editable_image_groups/carlosiscool-starwars.zip');
    //events.when(('block.BlockBreakEvent'),(TheForce), me);
    //events.blockBreak(TheForce);
    player.setResourcePack('http://mod.learntomod.com/editable_image_groups/carlosiscool-starwars.zip');
    events.on(org.bukkit.event.player.PlayerInteractEvent,TheForce); // need to use events.on since event handler not declared
    //events.when(('player.PlayerMoveEvent'),(onMove), me);
    events.playerMove(onMove);
}

function onMove(info) {
    Playa = (info.getPlayer());
    Holding = (Playa.getItemInHand());
    HoldingType = (Holding.getType());
    if (HoldingType != (org.bukkit.Material.SUGAR)) {
        Lifted.setVelocity(((new org.bukkit.util.Vector(((dir.getX()) * 2), ((dir.getY()) * 2), ((dir.getZ()) * 2)))));
    }
}
