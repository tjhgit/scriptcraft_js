var utils=require('utils');
exports.printPlayers= function() {
    var players = utils.players();
    var i=0;
    while(i<players.length) {
        echo(self,players[i]);
        i=i+1;
    }
}
