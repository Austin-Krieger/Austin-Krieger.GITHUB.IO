// Student Name: Austin Krieger
"use strict";

var GRID = {
    GRID_WIDTH: 10, // width of grid
    GRID_HEIGHT: 10 // height of grid
};

PS.init = function ( system, options ){
    PS.gridSize( GRID.GRID_WIDTH, GRID.GRID_HEIGHT );
    //PS.gridColor(0x4040FF);
    PS.gridColor(PS.COLOR_GRAY);
    PS.gridShadow(true, PS.COLOR_GRAY_DARK);
    PS.statusText("Toy - Austin Krieger");
    PS.statusColor(PS.COLOR_WHITE);
    PS.color(PS.ALL, PS.ALL, PS.COLOR_GRAY_DARK); //0x8080FF
};

PS.touch = function( x, y, data, options ) {
    var r, g, b;
    r = PS.random(256) - 1;
    g = PS.random(256) - 1;
    b = PS.random(256) - 1;
    PS.color(x, y, r, g, b);

    while( x !== GRID.GRID_WIDTH && y !== GRID.GRID_HEIGHT ){
        PS.color(x, y, r, g, b);
        x++;
        y++;
    }
};

PS.keyDown = function (key, shift, ctrl, options) {
    "use strict";
};

PS.release = function (x, y, data, options) {
    "use strict";
};

PS.enter = function (x, y, data, options) {
    "use strict";
};

PS.exit = function (x, y, data, options) {
    "use strict";
};

PS.exitGrid = function (options) {
    "use strict";
};

PS.keyUp = function (key, shift, ctrl, options) {
    "use strict";
};

PS.swipe = function (data, options) {
    "use strict";
};

PS.input = function (sensors, options) {
    "use strict";
};