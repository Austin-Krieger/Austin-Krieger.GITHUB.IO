// Student Name: Austin Krieger
"use strict";

var GRIDZ =
    {
        gridW: 25, //grid width size
        gridH: 25, //grid Length size
        locx: 0, //x location of square
        locy: 0 //y location of square
    };

PS.init = function( system, options ) {
    "use strict";
    var gridW, gridH;
    gridW = 25;
    gridH = 25;
	PS.gridSize( GRIDZ.gridW, GRIDZ.gridH );
    PS.gridColor( PS.COLOR_GRAY );
    PS.color( PS.ALL, PS.ALL, PS.COLOR_BLACK);
    PS.statusText("Puzzle - Austin Krieger");
    PS.statusColor(PS.COLOR_WHITE);
    GRIDZ.locy = PS.random(gridH - 1);
    GRIDZ.locx = PS.random(gridW - 1);
};

PS.touch = function( x, y, data, options ) {
    var iwill, ayy, colore;
    colore = 255 / ((GRIDZ.gridW + GRIDZ.gridH) / 3);

    iwill = GRIDZ.locx - x;
    ayy = GRIDZ.locy - y;

    if( x === GRIDZ.locx && y === GRIDZ.locy )
    {
        PS.color(x, y, PS.COLOR_GREEN);
        PS.audioPlay("fx_tweet");
    }
    else
    {
        PS.color( x, y, 255 - (colore * ((Math.abs(iwill) + Math.abs(ayy))/ 2 )), 0  ,
            ((5 * (x + y)) + colore * ((Math.abs(iwill) + Math.abs(ayy)) /2) ));
        PS.audioPlay("fx_click");
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