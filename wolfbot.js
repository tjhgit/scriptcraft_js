/*
  Usage: 

  /jsp summon
  /jsp dismiss
  /jsp come
  /jsp stay
  /jsp pack
*/
var _store = {players: {}};

var wolfbot = plugin('wolfbot',{
	/* helper methods for a player's wolfbot */
    get_wolfbot: function(player){
        return _store.players[player.name];
    },
    set_wolfbot: function(player,wolfbot,inventory){
        _store.players[player.name] = {wolfbot:wolfbot,inventory:inventory};
    },

    /* display the commands and what they do */
		help: function(player){
			player.sendMessage("Wolfwolfbot Help Menu: Available Commands \n\n");
			player.sendMessage("Summon: Summons a new wolfwolfbot \n");
			player.sendMessage("Dismiss: Dismisses your wolfwolfbot \n");
			player.sendMessage("Stay: Tells your wolfwolfbot to stay \n");
			player.sendMessage("Come: Tells your wolfwolfbot to come \n");
			player.sendMessage("Pack: Displays the inventory of your wolfwolfbot's pack \n");
		},

    /* summons your wolfbot */
    summon: function(player){
        var world  = player.world
        
        // in case you already have one spawned
        this.dismiss(player);
        
        // place wolf two squares in front of you
        //var my_wolfbot = world.spawnCreature(player.getLocation().add(0,0,2), org.bukkit.entity.EntityType.WOLF);
        var my_wolfbot = world.spawnEntity(player.getLocation().add(0,0,2), org.bukkit.entity.EntityType.WOLF);
        
        my_wolfbot.setTamed(true);
        my_wolfbot.setOwner(player);
        my_wolfbot.setTarget(player);
        
        var inventory; 
        var b = this.get_wolfbot(player);
        if(b == null || b.inventory == null)
            inventory = player.getServer().createInventory(player, 36, "Bot's Pack");
        else
            inventory = b.inventory;
        
        this.set_wolfbot(player,my_wolfbot,inventory);
    },
    /* dismisses your wolfbot */
    dismiss: function(player){
        var b = this.get_wolfbot(player);
        if( b != null && b.wolfbot !== null){
            b.wolfbot.remove();
            b.wolfbot = null;
        }
    },
    /* instructs your wolfbot to stay */
    stay: function(player){
        var b = this.get_wolfbot(player);
        if(b!= null && b.wolfbot !== null){
            b.wolfbot.setTarget(null);
            b.wolfbot.setSitting(true);
        }
    },
    /* instructs your wolfbot to follow you */
    come: function(player){
        var b = this.get_wolfbot(player);
        if(b!= null){
            b.wolfbot.setSitting(false);
            b.wolfbot.setTarget(player);
        }
    },
    /* instructs your wolfbot to display its pack */
    pack: function(player){
        var b = this.get_wolfbot(player);
        if(b!= null && b.wolfbot !== null){
            b.wolfbot.setSitting(true);
            player.openInventory(b.inventory);
        }
    },
    store: _store
},true);

exports.wolfbot = wolfbot;

command('help',function(params, sender){
    wolfbot.help(sender);
});
command('summon',function(params, sender){
    wolfbot.summon(sender);
});
command('dismiss',function(params, sender){
    wolfbot.dismiss(sender);
});
command('stay',function(params, sender){
    wolfbot.stay(sender);
});
command('come',function(params, sender){
    wolfbot.come(sender);
});
command('pack',function(params, sender){
    wolfbot.pack(sender);
});
