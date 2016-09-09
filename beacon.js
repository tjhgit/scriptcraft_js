/*
   Written by Paulo Sgarbi

   To place a beacon:
   ==================

   The player provides the arguments in the form:

   /js beacon(self, "beaconName")

   where "beaconName" is the name of the beacon.


   To be zapped to beacon location:
   ================================

   The player provides the arguments in the form:

   /js zap(self, "destinationBeacon")

   where "destinationBeacon" is the name of the beacon you want to go to.

*/

var blocks = require('blocks');
var player = require('utils');

/*

   Use the persist() function to write and append beacon information to these JSON files
   file location: C:\Users\Paulo\Documents\Java Programs\CanaryMod\scriptcraft\data

   "mybeacons" file will store an array of beacon objects containing two properties:
   (a) the beacon's name (tag);
   (b) the beacon's position (position), as an array containing the x, y and z coordinates of the player where the beacon command was issued;

   [{tag:"beaconName1", position:[locx[0],locx[1],locx[2]]},{tag:"beaconName2", position:[locx[0],locx[1],locx[2]]} ...]

   "beaconNane" file stores an array of tag keys ("beaconName") in the same order as found in "mybeacons" , and is used to indicate
   to which beacon object the player is going to be "zapped" to:

   [ "beaconName1", "beaconName2" ...]
   */

var beaconArray = persist('mybeacons', []);
var beaconNameArray = persist('beaconName', []);

/*
   There are two things needed to place a beacon: the position and a name

 ***TO DO: name will have to be unique. At this point, if there are two entries with the same name, it will return the first it finds

 (a) position: currently, the position is the PLAYER'S position when player places the marker block, so use 'self.position'
 (b) name: enter a name in quotation marks, like "beacon1" or "pool"
 */

function beacon(me, beaconName){

    //we place a marker at the position we want:

    box(blocks.beacon,1,2,1);

    //In the next lines, we build the beacon object:	

    var loc = me.getLocation();

    //the next line appends the beacon's name to the array that contains only the tag key (the name the player gives to the beacon) 
    beaconNameArray.push(beaconName);

    //the position is returned as an object which has coordinates as properties (keys). We are extracting the properties x, y and z
    //and puting them in an array whic we call locx. Since I want the numbers to be easy to read, and extreme precision is not 
    //important for this plugin, I also round the numbers	
    var locx = [Math.round(loc.getX()),Math.round(loc.getY()),Math.round(loc.getZ())];

    //The beacon object is then assembled and appended to the beaconArray array
    var beaconObj = {tag: beaconName, position: locx};
    beaconArray.push(beaconObj);

    //finally, we display the result to the player, showing the name of the beacon and its coordinates.
    //TO DO: TAB list of beacons' names
    echo('You are at ' + beaconName + ' at position ' + locx[0] + ", " + locx[1] + ", " + locx[2]);
    /*	
        these were used to debug:
        echo(beaconObj.tag + beaconObj.position);
        echo(beaconArray.length);
        echo(beaconArray[0]);
        echo(beaconNameArray[0]);
        */	
}

function zap(player, dest) {

    //Here, dest is a name of a beacon. "indexOf()" searchs an array for an element with a specified value, and returns the index of 
    //the first such element
    var dest = dest;
    var destIndex = beaconNameArray.indexOf(dest);
    //var destIndex = beaconArray.tag.indexOf(dest);

    //these were used to debug:
    echo(destIndex);
    //echo(beaconNameArray[destIndex]); 
    echo('Teleport to ' + beaconArray[destIndex].tag);
    //echo(beaconArray[destIndex].position[0])

    //"indexOf()" returns -1 if no element whith the value provided is found. I use this to warn the player if the name entered 
    //does not match any of the beacons names stored in "beaconNameArray" and exit:
    if (destIndex == -1) {
        echo('Are you sure you got that name right?')
            echo('Teleport failed...')
    }

    //if "dest" matches a beacon's name, we use the index of the name in the beaconArray to retrieve the position of the beacon 
    //from the (hopefully) right beacon object in the beaconArray.
    //The "player.teleportTo(x, y, z)" zaps the player to the beacon position; the player is greeted with the beacon's name and coordinates.
    else {
        //var destPosition = [beaconArray[destIndex].position[0],beaconArray[destIndex].position[1],beaconArray[destIndex].position[2]]
        
        var destPosition = new org.bukkit.Location(player.getWorld(),beaconArray[destIndex].position[0],beaconArray[destIndex].position[1],beaconArray[destIndex].position[2])
        player.teleport(destPosition);
        //echo('You are at ' + dest + ' at position ' + destPosition[0] + ", " + destPosition[1] + ", " + destPosition[2]);
    }



}

var baumeister = require('drone');
baumeister.extend(beacon);
exports.beacon = beacon;
exports.zap = zap;
