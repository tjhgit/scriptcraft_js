// class lavawand
//var examples_magic_wands = new function(){
exports.examples_magic_wands = new function(){
    var i;

    var name2;
    var p;
    var wand;
    var me;

    function all_wands() {
        return [blue_purple(), dark_blue(), fancy_blue(), fancy_red(), fancy_yellow(), light_blue(), 
        light_green(), light_purple(), light_red(), light_yellow()];
    }

    function blue_purple() {
        return org.bukkit.Material.RECORD_11;
    }

    function dark_blue() {
        return org.bukkit.Material.RECORD_7;
    }

    function fancy_blue() {
        return org.bukkit.Material.RECORD_4;
    }

    function fancy_red() {
        return org.bukkit.Material.RECORD_5;
    }
    function light_blue() {
        return org.bukkit.Material.RECORD_12;
    }

    function light_green() {
        return org.bukkit.Material.RECORD_10;
    }

    function light_purple() {
        return org.bukkit.Material.RECORD_6;
    }

    function fancy_yellow() {
        return org.bukkit.Material.RECORD_3;
    }

    function light_red() {
        return org.bukkit.Material.RECORD_8;
    }

    function light_yellow() {
        return org.bukkit.Material.RECORD_9;
    }
    function give_all() {
        me.getInventory().clear();
        for (var i_index in  all_wands()) {
            i = all_wands()[i_index];
            give_wand('Wand', i);
        }
    }

    function give_wand(name2, wand) {
        var item = new org.bukkit.inventory.ItemStack(wand, 1);
        var itemMeta = item.getItemMeta();
        itemMeta.setDisplayName(name2);
        item.setItemMeta(itemMeta);
        this.me.getInventory().addItem([item]);
        this.me.updateInventory();
    }

    function init(me) {
        me.setResourcePack('http://thoughtstem.cms.dev.s3.amazonaws.com/uploads/pack/file/18/magic_wands.zip');
        this.me=me;
    }

    function item_in_hand(p) {
        return eval('p.getInventory().getItemInHand()');
    }

    function item_in_hand_name(p) {
        return p.getItemInHand().getItemMeta().getDisplayName();
    }



    function main() {
        init();
        give_all();
    }

    this.item_in_hand_name=item_in_hand_name;
    this.item_in_hand=item_in_hand;
    this.give_wand=give_wand;
    this.give_all=give_all;
    this.all_wands=all_wands;
    this.init=init;
    this.light_green=light_green;
    this.fancy_blue=fancy_blue;
    this.dark_blue=dark_blue;
    this.light_blue=light_blue;
    this.fancy_yellow=fancy_yellow;
    this.light_purple=light_purple;
    this.light_yellow=light_yellow;
    this.fancy_red=fancy_red;
    this.blue_purple=blue_purple;
    this.light_red=light_red;
}
