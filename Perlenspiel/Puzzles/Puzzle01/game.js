// Student Name: Austin Krieger
"use strict";

var G = ( function () {
    // By convention, constants are all upper-case

    var WIDTH = 15; // width of grid
    var HEIGHT = 15; // height of grid

    var COLOR_GRAB = PS.COLOR_GREEN; // grabber color
    var COLOR_FLOOR = PS.COLOR_GRAY; // floor color
    var COLOR_WALL = PS.COLOR_BLACK; // wall color
    var COLOR_GOLD = PS.COLOR_YELLOW; // gold color
    var COLOR_GOAL = PS.COLOR_WHITE; // goal color

    // The following variables are all grab-related,
    // so they start with 'grab'
    var grab_x = 1; // current x-pos of grabber
    var grab_y = 1; // current y-pos of grabber

    // Color array to associate map values
    // with above colors
    var colors = [
        COLOR_WALL, COLOR_FLOOR, COLOR_GOLD, COLOR_GRAB, COLOR_GOAL
    ];

    var t = 1;
    // 15 x 15 map array
    // 0 = wall, 1 = floor, 2 = gold, 3 = grabber, 4 = goal
    var level1 = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0,
        0, 1, 0, 1, 1, 0, 1, 1, 0, 2, 1, 1, 0, 1, 0,
        0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0,
        0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0,
        0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0,
        0, 1, 0, 1, 1, 0, 2, 1, 1, 0, 1, 1, 0, 1, 0,
        0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
        0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0,
        0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0,
        0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0,
        0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
        0, 1, 0, 1, 2, 1, 0, 1, 0, 2, 1, 1, 0, 1, 0,
        0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ];

    var level2 = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0,
        0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0,
        0, 1, 0, 1, 0, 0, 1, 2, 0, 0, 1, 0, 1, 1, 0,
        0, 2, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0,
        0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0,
        0, 1, 0, 2, 1, 0, 1, 1, 0, 1, 2, 0, 0, 1, 0,
        0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0,
        0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0,
        0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0,
        0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0,
        0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0,
        0, 1, 0, 1, 2, 0, 1, 4, 0, 1, 1, 0, 1, 1, 0,
        0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ];

    // draw_map()
    // Scans the map data and draws walls, floors,
    // gold and grabber
    var draw_map = function () {
        var x, y, data, color;
        if (t === 1) {
            for (y = 0; y < HEIGHT; y += 1) {
                for (x = 0; x < WIDTH; x += 1) {
                    data = level1 [( y * WIDTH ) + x];
                    PS.color(x, y, colors[data]);
                }
            }
        } else {
            for (y = 0; y < HEIGHT; y += 1) {
                for (x = 0; x < WIDTH; x += 1) {
                    data = level2 [( y * WIDTH ) + x];
                    PS.color(x, y, colors[data]);
                }
            }
        }
    };

    var exports = {

        // G.init()
        // Initializes the game
        init : function () {
            PS.gridSize( WIDTH, HEIGHT ); // init grid
            //PS.gridColor(PS.COLOR_GRAY);
            PS.gridColor(0x777777);
            PS.color( PS.ALL, PS.ALL, COLOR_FLOOR );
            PS.border( PS.ALL, PS.ALL, 0 ); // no borders
            PS.statusText("Puzzle - Austin Krieger");
            PS.statusColor(PS.COLOR_WHITE);
            draw_map();
        },

        move : function ( h, v ) {
            var nx, ny;

            // Calculate proposed new location.
            nx = grab_x + h;
            ny = grab_y + v;

            // Is there a wall in the proposed location?
            // If the bead there is COLOR_WALL (black),
            // exit without moving.
            if ( PS.color( nx, ny ) === COLOR_WALL ) {
                return;
            }

            if (PS.color( nx, ny ) === COLOR_GOLD) {
                PS.audioPlay("fx_coin1");
            }

            if (PS.color( nx, ny ) === COLOR_GOAL) {
                PS.audioPlay("fx_swoosh");
                grab_x = 1; // current x-pos of grabber
                grab_y = 1; // current y-pos of grabber
                nx = grab_x;
                ny = grab_y;
                if(t === 1){
                    t++;
                } else {
                    t--;
                }
                G.init();
            }

            // Is new location off the grid?
            // If so, exit without moving.
            // NOTE: Current map design would never
            // allow grabber to get past the edge walls.
            // This code will prevent errors if
            // the map layout is changed.
            if ( ( nx < 0 ) || ( nx >= WIDTH ) ||
                ( ny < 0 ) || ( ny >= HEIGHT ) ) {
                return;
            }

            // Legal move, so change current grabber
            // location to floor color.
            PS.color( grab_x, grab_y, COLOR_FLOOR );

            // Assign grabber's color to the
            // new location.
            PS.color( nx, ny, COLOR_GRAB );

            // Finally, update grabber's position
            grab_x = nx;
            grab_y = ny;
        }
    };

    // Return the 'exports' object as the value
    // of this function, thereby assigning it
    // to the global G variable. This makes
    // its properties visible to Perlenspiel.
    return exports;
}() );

// Tell Perlenspiel to use our G.init() function
// to initialize the game
PS.init = G.init;

PS.keyDown = function ( key, shift, ctrl, options ) {
    switch ( key ) {
        case PS.KEY_ARROW_UP:
        case 119:
        case 87: {
            G.move( 0, -1 ); // move UP (v = -1)
            break;
        }
        case PS.KEY_ARROW_DOWN:
        case 115:
        case 83: {
            G.move( 0, 1 ); // move DOWN (v = 1)
            break;
        }
        case PS.KEY_ARROW_LEFT:
        case 97:
        case 65: {
            G.move( -1, 0 ); // move LEFT (h = -1)
            break;
        }
        case PS.KEY_ARROW_RIGHT:
        case 100:
        case 68: {
            G.move( 1, 0 ); // move RIGHT (h = 1)
            break;
        }
    }
};

PS.enter = function( x, y, data, options ) {
	"use strict"; // Do not remove this directive!
};

PS.exit = function( x, y, data, options ) {
	"use strict"; // Do not remove this directive!
};

PS.exitGrid = function( options ) {
	"use strict"; // Do not remove this directive!
};

PS.keyUp = function( key, shift, ctrl, options ) {
	"use strict"; // Do not remove this directive!
};

PS.input = function( sensors, options ) {
	"use strict"; // Do not remove this directive!
};

PS.shutdown = function( options ) {
	"use strict"; // Do not remove this directive!
};