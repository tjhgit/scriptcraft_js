function huette(size){

    if(size && size >= 4){
        this.chkpt('dh');
        //echo( player, 'Hi ' + player.name);
        // house with floor
        this.box(0, size, 4, size); //clear house area
        this.box0(4, size, 4, size); //build house boX
        this.box0('17:1', 1, 4, 1); //log corners
        this.fwd(size-1).box0('17:1', 1, 4, 1); //log corners
        this.right(size-1).box0('17:1', 1, 4, 1).back(size-1); //log corners
        this.box0('17:1', 1, 4, 1).left(size-1); //log corners
        this.fwd().right().box('5:1', size-2, 1, size-2).left().back(); //place floor

        //roof
        this.up(4).prism( '5:1', size, size); //build roof
        this.prism0(134, size, size).down(4); //smooth roof with stairs

        // will only be build if size > 4
        // lights
        this.fwd(2).right(2).up(5).chessboard('5:1',89,size-4,size-4).left(2).back(2); //create lights
        this.down().chessboard('5:1','95:12',size-4,size-4).down(4); //create light covers

        //torch
        this.back().up(3).hangtorch(); //outside torch
        this.right(size-1).hangtorch().left(size-1).down(3).fwd(); //outside torch
        
        //porch
        this.right(2).up().door().down().left(2);
        this.right().back().box0('5:1', 3, 1, 1); //porch
        this.back().stairs(134, 3, 1).fwd();  //porch stairs
        this.up().box(188); //porch posts
        this.up().box(188);
        this.up().box(188);
        this.up().box0('126:1',3,1,1).down(4); //half slab porch cover
        this.right(2).up().box(188);
        this.up().box(188);
        this.up().box(188).down(3).left(3).fwd();

        //grass yard
        this.back(3).down().box(2,size,1,3).up().fwd(3);


        if (size > 6){
            this.fwd(size-3).right().up().bed().left().back(size-3);
            echo(self.name + ' is building a large house');
            this.right(4).up(2).box0(102, size-6, 1,1).down(2); //add windows
            this.back().box0(38,size-5,1,1).fwd().left(4); //flowers
            this.fwd(size-2).right(2).up(1).box(54); //add crafting table
            this.right().box0(58).left(2); //add crafting table
            this.right(size-2).box0(61).left(size-1).back(size-2); //add crafting table
        }
        this.right(2).back(1).up(3).sign(["Welcome","Home",self.name], blocks.sign );
        this.move('dh');
    }

    else{
        if(size){
            echo('The minimum house size is 4.');
        }
        else{
            echo('You must specify how big you want your house to be!');
        }
    }
};

var baumeister=require('drone');
baumeister.extend(huette);
