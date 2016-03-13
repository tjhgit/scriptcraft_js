var ClickedFace;
var Clicked;
var ClickedType;
var Button;
var Lifted;
//var loc;
//var dir;

function Lift(spieler) {
    var i_index, nn;
    if (String(Button) == 'LEFT_CLICK_BLOCK') {
        if (String(ClickedFace) == 'UP') {
            //d.setLocation((Clicked.getLocation()));
            var d=new Drone(Clicked.getLocation());
            //d.box(blocks.diamond);
            d.box(blocks.air);
            Lifted = Clicked.getLocation().getWorld().spawnFallingBlock(Clicked.getLocation(), ClickedType, 0);
            Lifted.setVelocity(new org.bukkit.util.Vector(0, 0.8, 0));
            echo(spieler,'Lifting');
        }
    } else if (String(Button) == 'RIGHT_CLICK_BLOCK') {
        //nearbyEntities = (armorstand.entities(Playa, 10));

        //echo(spieler,spieler);
        var nearbyEntities=spieler.getNearbyEntities(10,10,10); // ?????
        //echo(spieler,nearbyEntities);
        //echo(spieler,typeof(nearbyEntities.get(1)));

        var nn=nearbyEntities.size();
        //echo(spieler,typeof(nearbyEntities));
        echo(spieler,"Jetzt huepft ihr "+nn);
        for (var i_index=0;i_index<nn;i_index++) {
            //for(i_index in nearbyEntities) {

            //i = nearbyEntities[i_index];
            var i=nearbyEntities.get(i_index);
            //echo(spieler,i);
            //var entType = i.getType();
            //echo(spieler,entType);
            //i.setVelocity(new org.bukkit.util.Vector(dir.getX() * 1,  2, dir.getZ() * 1));
            i.setVelocity(new org.bukkit.util.Vector(0, 1, 0));
        }
        }
    }

    function TheForce(evt) {
        //d = (new Drone(me, me.location));
        var Playa = evt.getPlayer();
        var Holding = Playa.getItemInHand();
        var HoldingType = Holding.getType();
        Button = evt.getAction();
        Clicked = evt.getClickedBlock();
        ClickedFace = evt.getBlockFace();
        ClickedType = Clicked.getType();
        //var loc = Playa.getLocation();
        //dir = loc.getDirection();
        if (HoldingType == org.bukkit.Material.SUGAR) {
            Lift(Playa);
        }

        //echo(Playa,evt.toString());
        //echo(Playa,Button);
        //echo(Playa,HoldingType);
        //echo(Playa,ClickedFace);
        //echo(Playa,ClickedType);
    }


    function SwordList() {
        SList = ['GOLD_SWORD', 'WOOD_SWORD', 'IRON_SWORD', 'DIAMOND_SWORD', 'STONE_SWORD'];
    }


    function onMove(info) {
        var Playa = info.getPlayer();
        var Holding = Playa.getItemInHand();
        var HoldingType = Holding.getType();
        for (var j_index in SList) {
            j=SList[j_index];
            if(String(HoldingType) == String(j)) {
                var nearbyEntities = Playa.getNearbyEntities(5,5,5); // ?????
                var nn = nearbyEntities.size();
                //echo(Playa,nn);
                for(var i_index=0;i_index<nn;i_index++){
                    var ent = nearbyEntities.get(i_index);
                    //echo(Playa,ent.getType());
                    if(ent == undefined) {
                        break;
                    }
                    if(String(ent.getType())=='ARROW'){
                        //echo(Playa,'sending arrow back to destination :)');
                        var kloc = ent.getLocation();
                        var kdir = kloc.getDirection(); 
                        ent.setVelocity(new org.bukkit.util.Vector(kdir.getX()*-1,kdir.getY()*-1,kdir.getZ()*-1));
                    }
                }
            }
            if (HoldingType != org.bukkit.Material.SUGAR) {
                if(Lifted != undefined) {
                    //Lifted.setVelocity(new org.bukkit.util.Vector(dir.getX() * 2, dir.getY() * 2, dir.getZ() * 2));
                    Lifted.setVelocity(new org.bukkit.util.Vector(0, 0.2, 0));
                }
            }
        }
    }
    // Aufrufen mit /js starwars(self)
    exports.starwars = function(player) {
        //(me).setResourcePack('http://mod.learntomod.com/editable_image_groups/carlosiscool-starwars.zip');
        //events.when(('block.BlockBreakEvent'),(TheForce), me);
        //events.blockBreak(TheForce);
        player.setResourcePack('http://mod.learntomod.com/editable_image_groups/carlosiscool-starwars.zip');
        SwordList();
        events.on(org.bukkit.event.player.PlayerInteractEvent,TheForce); // need to use events.on since event handler not declared
        //events.when(('player.PlayerMoveEvent'),(onMove), me);
        events.playerMove(onMove);
    }
