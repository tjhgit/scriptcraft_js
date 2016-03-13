exports.stomp = function() {
    events.playerMove(do_stomp);
}
function do_stomp(evt) {

    var me = evt.getPlayer();
    var loc = me.getLocation();
    var nearbyEntities=me.getNearbyEntities(10,10,10); // ?????
    var n = nearbyEntities.size();
    //echo(me,'in stomp'); 
    for(var i_index=0; i_index<n;i_index++){
        var ent = nearbyEntities.get(i_index);
        var distanz = ent.getLocation().distanceSquared(me.getLocation());
        //echo(me,'entity ist hier: '+distanz);
        if(distanz<=2) {
            echo(me,'destroying entity '+ent);
            ent.setHealth(0);
        }
    }
}
