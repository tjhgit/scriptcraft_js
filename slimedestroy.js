/*
   Written by Paulo Sgarbi

   I wrote this plugin just to get a hang of how to use the CanaryMod API and JavaBeans.
   This plugin listens to the projectileHit() event, and modifies the behaviour of the "Slime"
   entity. To wit: when "Slime" is hit by ordinary snowballs, it will burst into flames, with an
   explosion sound. If the "Slime" is BIG, it will burn for a while (5 seconds), but will not 
   be immediately destroyed (keep on hitting with snowballs to break it apart). Any "Slime" smaller
   than BIG will burn and be destroyed after 2 seconds. 

   Go ahead, spawn some slime, and give it a try. 
   */

//Get things started by getting some items ready: sounds, Slime, Snowball and a (VERY) primitive counter

var sounds = require('sounds');
//var cmSlime = Packages.net.canarymod.api.entity.living.monster.Slime;
//var cmSlime = org.bukkit.entity.EntityType.SLIME;
var cmSlime1 = org.bukkit.entity.Slime;
//var cmSnowBall = Packages.net.canarymod.api.entity.throwable.Snowball;
var cmSnowBall = org.bukkit.entity.EntityType.SNOWBALL;
var destroyCount = 0;

//Now, the nuts and bolts...

function flamingSlime(event) {							//Let's set the "Slime" on fire!

    //var entityHit = event.getEntityHit();				//First, use the getEntityHit() method from projectileHitHook to figure out WHAT was hit...
    //var entityHit = event.getEntityType();				//First, use the getEntityHit() method from projectileHitHook to figure out WHAT was hit...
    var entityHit = event.getEntity();
    //var projectile = event.getProjectile();				//...then, use the getProjectile() method from projectileHitHook to figure out WHICH projectile was used...
    //var projectile = event.getLastDamageCause().getCause();
    var projectile = event.getDamager().getType();
    //var thrower = projectile.getThrower();				//...and finally, use the getThrower() method from projectile to figure out WHO threw the projectile.
    echo(projectile);
    echo(entityHit);    
    if (!(projectile == cmSnowBall)){			//If the throwable IS NOT a snowball: "there is nothing to see here, move along."
        return;
    }
    //echo('hello');
    if (entityHit instanceof cmSlime1){				//Now, suppose the throwable was a snowball. Did it hit "Slime"?		
        var slimeSize = entityHit.getSize();		//If so, get the size of the "Slime" entity.
        var entityWhere = entityHit.getLocation();	//Also, we get the location of the "Slime", to decide where the explosion sound will originate;
        entityHit.setFireTicks(100);				//we then set the "Slime" on fire...
        // sounds.explode(entityWhere);				//...and use the sounds plugin to provide the "explode" sound effect with origin at the "Slime"'s position.
        sounds.entityGenericExplode(entityWhere);
        function vanquishSlime(){					//Not satisfied with simply setting "Slime" on fire, my 9 year-old advisor suggested vanquishing them.
            if (!(slimeSize == 'BIG')){				//So... if the "Slime" is BIG, you will need to keep on hitting with snowballs until it breaks apart;			
                //entityHit.destroy();				//if the "Slime" size < BIG, then the "Slime" will be destroyed... 
                entityHit.setHealth(0);
                destroyCount = destroyCount + 1;	//The counter in then updated ***TO DO: build a decent counter using scoreboard!
                //echo(thrower, destroyCount);		//and displays how many "Slime" entities were slayed.
            }		
        }		
        setTimeout(vanquishSlime, 2000);			//Without a delay, you do not see the flaming "Slime"... so we get 2 seconds of fire.
    }
}
//events.projectileHit(flamingSlime);

exports.slimedestroy=function(player) {
    me=player;
    events.on(org.bukkit.event.entity.EntityDamageByEntityEvent,flamingSlime);
}
