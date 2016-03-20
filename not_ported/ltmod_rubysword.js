var d;
var info;

function lava(info) {
      if (examples_item_helper.item_in_hand_name((me)) == 'Ruby Sword') {
              var d = (new Drone(me, me.location));
                  d.box((Material.LAVA));
                    }
}

function main() {
      (me).setResourcePack('http://thoughtstem.cms.dev.s3.amazonaws.com/uploads/pack/file/27/ruby_sword.zip');
        (me).getInventory().addItem([(examples_item_helper.new_item('Ruby Sword', (Material.BLAZE_ROD)))]);
          (me).updateInventory();
            events.when(('block.BlockBreakEvent'),(lava), me);
}


var examples_item_helper = new function(){
    var p;
    var name2;
    var material;
    var item;

    function item_in_hand_name(p) {
          return p.getItemInHand().getItemMeta().getDisplayName();
    }

    function item_in_hand(p) {
          return p.getItemInHand();
    }

    function new_item(name2, material) {
          var item = (new ItemStack(material, 1));
            var itemMeta = item.getItemMeta();
              itemMeta.setDisplayName(name2);
                item.setItemMeta(itemMeta);
                  return item;
    }

    this.item_in_hand_name=item_in_hand_name;
    this.item_in_hand=item_in_hand;
    this.new_item=new_item
}
