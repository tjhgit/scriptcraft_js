var utils = require('utils');
exports.hiAll=function() {
    var players=utils.players(),player,i;
    for (i=0;i<players.length;i++) {
        player = players[i];
        echo(player,'Hi!');
    }
}

