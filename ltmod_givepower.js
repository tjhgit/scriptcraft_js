var d;
var info;
var newLoc;
var oldLoc;

function jumping(info) {
    oldLoc = (info.getFrom());
    newLoc = (info.getTo());
    if ((oldLoc.getY()) < (newLoc.getY())) {
        d = (new Drone(me, me.location));
        d.setLocation(((me).getLocation()));
        d.down(1);
        d.box((Material.BRICK));
    }
}

function main() {
    events.when(('player.PlayerMoveEvent'),(jumping), me);
}
