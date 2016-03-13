exports.playerMeow=function() {
    var utils=require('utils');
    var players = utils.players();
    var sounds=require('sounds');
    utils.foreach(players,function(player) {
        sounds.catMeow(player);
    });
}
