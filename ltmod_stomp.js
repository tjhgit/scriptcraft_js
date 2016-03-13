var entList;
var entLoc;
var i;
var info;
var user;
var userLoc;

function main() {
    events.when(('player.PlayerMoveEvent'),(stomp), me);
}

function stomp(info) {
    var user = (info.getPlayer());
    var userLoc = (user.getLocation());
    entList = (armorstand.entities((me), 10));
    var i_end = entList.length;
    var i_inc = 1;
    if (1 > i_end) {
        i_inc = -i_inc;
    }
    for (i = 1;
            i_inc >= 0 ? i <= i_end : i >= i_end;
            i += i_inc) {
        entLoc = ((entList[i - 1]).getLocation());
        if (Math.abs((userLoc.getX()) - (entLoc.getX())) <= 2 && (Math.abs((userLoc.getY()) - (entLoc.getY())) <= 2 && Math.abs((userLoc.getZ()) - (entLoc.getZ())) <= 2)) {
            entList[i-1].setHealth(0);
        }
    }
}

