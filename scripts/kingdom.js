require('./cwin.js');

exports.kingdom = function( size ) {

    if(!size){
        size = 71;
    }
    h = 8;
    //Put your code here

    back(7).left(7).box(2,size+14,1,size+14);
    back(7).left(7).up(1).box(0,size+14,35,size+14);

    box0('43:5',size,h,size); //wall, outer layer
    fwd(1).right(1).box0('43:5',size-2,h,size-2); //wall, walkway layer1
    fwd(2).right(2).box0('43:5',size-4,h,size-4); //wall, walkway layer2
    fwd(3).right(3).box0('43:5',size-6,h,size-6); //wall, walkway layer3
    fwd(4).right(4).box0('43:5',size-8,h,size-8); //wall, inner layer
    //up(9).chessboard('44:5','43:5',size,size) // castle style top of wall
    up(h-1).chessboard('44:5','43:5',size,5); // castle style top of wall
    up(h-1).fwd(size-5).chessboard('44:5','43:5',size,5); // castle style top of wall
    up(h-1).chessboard('44:5','43:5',5,size); // castle style top of wall
    up(h-1).right(size-5).chessboard('44:5','43:5',5,size); // castle style top of wall
    //up(9).fwd(3).right(3).chessboard('44:5','43:5',size-6,size-6)

    fwd(5).right(5).box(0,size-10,h+7,size-10); //fill inside with air
    fwd(5).right(5).box(2,size-10,1,size-10);

    back(3).left(3).cylinder0( '43:5',5,h+4); //gaurd tower
    back(3).right(size-8).cylinder0( '43:5',5,h+4); //gaurd tower

    fwd(size-8).left(3).cylinder0( '43:5',5,h+4); //gaurd tower
    fwd(size-8).right(size-8).cylinder0( '43:5',5,h+4); //gaurd tower

    up(h-1).back(3).left(3).cylinder( 0,5,1); //level the walk waya
    up(h-1).back(3).left(3).cylinder0( '43:5',5,1); //add tower wall back in
    up(h-2).back(3).left(3).cylinder( '43:5',5,1); //expand floor to all of tower
    up(h+2).back(3).left(3).cylinder( '43:5',5,1); //upper tower floor
    up(h+3).back(3).left(3).cylinder0( '44:5',5,1); //half slab top
    up(h+3).back(3).chessboard( '44:5','43:5',5,1); //half slab top
    up(h+3).fwd(7).chessboard( '44:5','43:5',5,1); //half slab top
    up(h+3).left(3).chessboard( '44:5','43:5',1,5); //half slab top
    up(h+3).right(7).chessboard( '44:5','43:5',1,5); //half slab top

    up(h-1).back(3).right(size-8).cylinder( 0,5,1); //level the walk way
    up(h-1).back(3).right(size-8).cylinder0( '43:5',5,1); //add tower wall back in
    up(h-2).back(3).right(size-8).cylinder( '43:5',5,1); //expand floor to all of tower
    up(h+2).back(3).right(size-8).cylinder( '43:5',5,1); //upper tower floor
    up(h+3).back(3).right(size-8).cylinder0( '44:5',5,1); //half slab top
    up(h+3).back(3).right(size-5).chessboard( '44:5','43:5',5,1); //half slab top
    up(h+3).fwd(7).right(size-5).chessboard( '44:5','43:5',5,1); //half slab top
    up(h+3).right(size-8).chessboard( '44:5','43:5',1,5); //half slab top
    up(h+3).right(size+2).chessboard( '44:5','43:5',1,5); //half slab top

    up(h-1).fwd(size-8).left(3).cylinder( 0,5,1); //level the walk way
    up(h-1).fwd(size-8).left(3).cylinder0( '43:5',5,1); //add tower wall back in
    up(h-2).fwd(size-8).left(3).cylinder( '43:5',5,1); //expand floor to all of tower
    up(h+2).fwd(size-8).left(3).cylinder( '43:5',5,1); //upper tower floor
    up(h+3).fwd(size-8).left(3).cylinder0( '44:5',5,1); //half slab top
    up(h+3).fwd(size-8).chessboard( '44:5','43:5',5,1); //half slab top
    up(h+3).fwd(size+2).chessboard( '44:5','43:5',5,1); //half slab top
    up(h+3).left(3).fwd(size-5).chessboard( '44:5','43:5',1,5); //half slab top
    up(h+3).right(7).fwd(size-5).chessboard( '44:5','43:5',1,5); //half slab top

    up(h-1).right(size-8).fwd(size-8).cylinder( 0,5,1); //level the walk way
    up(h-1).right(size-8).fwd(size-8).cylinder0( '43:5',5,1); //add tower wall back in
    up(h-2).right(size-8).fwd(size-8).cylinder( '43:5',5,1); //expand floor to all of tower
    up(h+2).right(size-8).fwd(size-8).cylinder( '43:5',5,1); //upper tower floor
    up(h+3).right(size-8).fwd(size-8).cylinder0( '44:5',5,1); //half slab top
    up(h+3).right(size-5).fwd(size-8).chessboard( '44:5','43:5',5,1); //half slab top
    up(h+3).right(size-5).fwd(size+2).chessboard( '44:5','43:5',5,1); //half slab top
    up(h+3).right(size-8).fwd(size-5).chessboard( '44:5','43:5',1,5); //half slab top
    up(h+3).right(size+2).fwd(size-5).chessboard( '44:5','43:5',1,5); //half slab top	



    up(h-1).fwd(1).right(1).box0(0,size-2,2,size-2); //cut in air blocks for walkway1
    up(h-1).fwd(2).right(2).box0(0,size-4,3,size-4); //cutt in air blocks for walkway2
    up(h-1).fwd(3).right(3).box0(0,size-6,2,size-6); //cutt in air blocks for walkway3

    right(parseInt(size/2-2)).box(0,5,4,5);
    right(parseInt(size/2-1)).box(0,3,5,5);
    back(5).right(parseInt(size/2-2)).box('98:3',5,1,30);	
    back(5).right(parseInt(size/2-2+1)).chessboard(1,'35:7',3,30);

    //var p = fwd(25).right(20).up(1).box(41)	

    //p.right(2).box(152) //this one works

    var w = 31;
    var h = 7;
    var d = 23;

    fwd(25).right(20).up(1).box('43:5',w,h,d);
    fwd(25).right(20).up(1).up(1).fwd(1).right(1).box(0,w-2,h-2,d-2);
    fwd(25).right(20).up(1).up(5).fwd(1).right(1).chessboard('35:15',169,w-2,d-2); //main room lights


    fwd(25).right(20).up(1).up(h).chessboard('44:5','43:5',w,1); // castle style top of wall
    fwd(25).right(20).up(1).up(h).fwd(d-1).chessboard('44:5','43:5',w,1); // castle style top of wall
    fwd(25).right(20).up(1).up(h).chessboard('44:5','43:5',1,d); // castle style top of wall
    fwd(25).right(20).up(1).up(h).right(w-1).chessboard('44:5','43:5',1,d); // castle style top of wall


    fwd(25).right(20).up(1).back(6).right(12).up(0).box('139:0',1,1,4);
    fwd(25).right(20).up(1).back(6).right(18).up(0).box('139:0',1,1,4);
    fwd(25).right(20).back(6).right(12).up(0).box('98:3',1,1,4);
    fwd(25).right(20).back(6).right(18).up(0).box('98:3',1,1,4);
    fwd(25).right(20).up(1).back(4).right(12).up(1).box('139:0',1,1,2);
    fwd(25).right(20).up(1).back(4).right(18).up(1).box('139:0',1,1,2);
    fwd(25).right(20).up(1).back(3).right(12).up(8).box('139:0',7,1,1); //palace entry way
    fwd(25).right(20).up(1).back(3).right(12).up(4).box('35:11',1,4,1);  //banners
    fwd(25).right(20).up(1).back(3).right(13).up(5).box('35:4',1,3,1);    //banners
    fwd(25).right(20).up(1).back(3).right(14).up(6).box('35:11',1,2,1);  //banners
    fwd(25).right(20).up(1).back(3).right(16).up(6).box('35:11',1,2,1);  //banners
    fwd(25).right(20).up(1).back(3).right(17).up(5).box('35:4',1,3,1);  //banners
    fwd(25).right(20).up(1).back(3).right(18).up(4).box('35:11',1,4,1);  //banners



    fwd(25).right(20).up(1).back(3).right(7).up(h+2).box( '35:11',w-14,1,d );  //blue roof
    fwd(25).right(20).up(1).back(1).right(7).up(h+3).box( '35:11',w-14,1,d-4 );
    fwd(25).right(20).up(1).fwd(1).right(7).up(h+4).box( '35:11',w-14,1,d-8 );
    fwd(25).right(20).up(1).fwd(3).right(7).up(h+5).box( '35:11',w-14,1,d-12 );
    fwd(25).right(20).up(1).fwd(5).right(7).up(h+6).box( '35:11',w-14,1,d-16 );
    fwd(25).right(20).up(1).fwd(7).right(7).up(h+7).box( '35:11',w-14,1,d-20 );
    fwd(25).right(20).up(1).fwd(9).right(7).up(h+8).box( '35:11',w-14,1,d-24 );


    fwd(25).right(20).up(1).back(3).right(5).box('43:5',5,h+9,5); //square gaurd towers
    fwd(25).right(20).up(1).back(2).right(6).up(1).box(0,3,h+7,3);
    fwd(25).right(20).up(1).back(3).right(7).cwin(1);
    fwd(25).right(20).up(1).back(3).right(7).up(4).cwin(1);
    fwd(25).right(20).up(1).back(3).right(7).up(8).cwin(1);
    fwd(25).right(20).up(1).back(3).right(7).up(12).cwin(1);
    fwd(25).right(20).up(1).back(3).right(5).up(h+9).chessboard(0,'43:5',5,5);
    fwd(25).right(20).up(1).back(2).right(6).up(h+9).box(0,3,1,3);


    fwd(25).right(20).up(1).back(3).right(21).box('43:5',5,h+9,5);  //square gaurd towers
    fwd(25).right(20).up(1).back(2).right(22).up(1).box(0,3,h+7,3);
    fwd(25).right(20).up(1).back(3).right(23).cwin(1);
    fwd(25).right(20).up(1).back(3).right(23).up(4).cwin(1);
    fwd(25).right(20).up(1).back(3).right(23).up(8).cwin(1);
    fwd(25).right(20).up(1).back(3).right(23).up(12).cwin(1);
    fwd(25).right(20).up(1).back(3).right(21).up(h+9).chessboard(0,'43:5',5,5);
    fwd(25).right(20).up(1).back(2).right(22).up(h+9).box(0,3,1,3);


    fwd(25).right(20).up(1).fwd(9).right(15).up(19).box('43:5',5,1,3);
    fwd(25).right(20).up(1).fwd(11).right(15).up(20).turn().box(109,3,1,5);


    fwd(25).right(20).up(1).fwd(5).right(4).cylinder( 0,5,h+16); //gaurd tower
    fwd(25).right(20).up(1).fwd(5).right(4).cylinder0( '43:5',5,h+16); //gaurd tower
    fwd(25).right(20).up(1).fwd(4).right(3).up(h+16).cylinder( '35:11',6,1); //gaurd tower
    fwd(25).right(20).up(1).fwd(5).right(4).up(h+17).cylinder( '35:11',5,1); //gaurd tower
    fwd(25).right(20).up(1).fwd(6).right(5).up(h+18).cylinder( '35:11',4,1); //gaurd tower
    fwd(25).right(20).up(1).fwd(7).right(6).up(h+19).cylinder( '35:11',3,1); //gaurd tower
    fwd(25).right(20).up(1).fwd(8).right(7).up(h+20).cylinder( '35:11',2,1); //gaurd tower
    fwd(25).right(20).up(1).fwd(9).right(8).up(h+21).cylinder0( '35:11',1,1); //gaurd tower
    fwd(25).right(20).up(1).fwd(10).right(9).up(h+22).box( '35:11'); //gaurd tower
    fwd(25).right(20).up(1).fwd(5).right(9).up(16).cwin(1);
    fwd(25).right(20).up(1).fwd(5).right(9).up(20).cwin(1);


    fwd(25).right(20).up(1).fwd(8).right(20).cylinder( 0,2,h+21); //gaurd tower
    fwd(25).right(20).up(1).fwd(8).right(20).cylinder0( '43:5',2,h+21); //gaurd tower
    fwd(25).right(20).up(1).fwd(7).right(19).up(h+21).cylinder( '35:11',3,1); //gaurd tower
    fwd(25).right(20).up(1).fwd(8).right(20).up(h+22).cylinder( '35:11',2,1); //gaurd tower
    fwd(25).right(20).up(1).fwd(9).right(21).up(h+23).cylinder0( '35:11',1,1); //gaurd tower
    fwd(25).right(20).up(1).fwd(10).right(22).up(h+24).box( '35:11'); //gaurd tower
    fwd(25).right(20).up(1).fwd(8).right(22).up(16).cwin();
    fwd(25).right(20).up(1).fwd(8).right(22).up(20).cwin();
    fwd(25).right(20).up(1).fwd(8).right(22).up(24).cwin();
    fwd(25).right(20).up(1).fwd(7).right(19).up(23).cylinder( '43:5',3,1); //gaurd tower
    fwd(25).right(20).up(1).fwd(7).right(19).up(24).cylinder0( 101,3,1); //gaurd tower

    fwd(25).right(20).up(1).back(2).right(8).box('43:5',w-16,h+3,d-2);  //kings hall
    fwd(25).right(20).up(1).back(1).right(9).up(1).box(0,w-16-2,h+3-2,d-2-2);  //kings hall


    fwd(25).right(20).up(1).back(1).right(9).chessboard(155,'35:15',w-16-2,d-2-2);

    fwd(25).right(20).up(1).back(2).right(13).up(1).box(0,5,4,1);
    fwd(25).right(20).up(1).back(2).right(14).up(1).box(0,3,5,1);
    fwd(25).right(20).up(1).back(3).right(13).box('43:5',5,1,1);
    fwd(25).right(20).up(1).back(4).right(13).box(109,5,1,1);
    fwd(25).right(20).up(1).back(5).right(13).box('44:5',5,1,1);

    fwd(25).right(20).up(1).fwd(1).right(1).chessboard(155,'35:15',w-2,d-2); //main box floor
    fwd(25).right(20).up(1).back(1).right(9).up(8).chessboard('35:15',169,w-16-2,d-4); //kings hall lights
    fwd(25).right(20).up(1).back(1).right(9).up(7).box(20,w-16-2,1,d-4); // glass layer lights
    fwd(25).right(20).up(1).fwd(10).right(14).up(20).box(0,7,2,1); //tower doorways to bridge

    fwd(25).right(20).up(1).back(2).right(10).up(h+2).box( '35:11',w-20,1,1);  //blue roof patch in front
    fwd(25).right(20).up(1).fwd(18).right(7).up(h+2).box( '35:11',w-14,1,1);  //blue roof patch in back
}
