// Student Name: Austin Krieger
// The "use strict" directive in the following line is important. Don't remove it!
"use strict";
// The following comment lines are for JSLint/JSHint. Don't remove them!
/*jslint nomen: true, white: true */
/*global PS */

// Global variable
var player = 1;
var IsWinner = 0;
var turnCount = 0;

PS.init = function( system, options ) {
	PS.gridSize( 3, 3 );
    PS.gridShadow(true, PS.COLOR_GRAY_DARK);
    PS.gridColor(0x777777);
    PS.border(PS.ALL, PS.ALL, 5);
    PS.statusText( "Tic-Tac-Toe! - Austin Krieger" );
    PS.statusColor(PS.COLOR_WHITE);
    // preload sounds
    PS.audioLoad( "fx_click" );
};

PS.touch = function( x, y, data, options ) {
	// Add code here for mouse clicks/touches over a bead
    if(IsWinner === 0) {
	    if(PS.data(x, y) === 1 || PS.data(x, y) === 2){
		    PS.debug("Player " + PS.data(x, y) + " chose the space: " + x + ", " + y + " already.\n" );
	    } else {
            if (player === 1) {
                PS.statusText("It is player 2's turn");
                PS.color(x, y, PS.COLOR_RED);
                PS.audioPlay("fx_click");
                PS.glyph(x, y, "X");
                PS.data(x, y, 1);
                turnCount++;
                checkWin();
                player = 2;
            } else if (player === 2) {
                PS.statusText("It is player 1's turn");
                PS.color(x, y, PS.COLOR_BLUE);
                PS.audioPlay("fx_click");
                PS.glyph(x, y, "O");
                PS.data(x, y, 2);
                turnCount++;
                checkWin();
                player = 1;
            }
        }
    }
};

var checkWin = function(x, y, data)
{
    if(IsWinner === 0) {
        if (PS.data(0, 0) === player && PS.data(1, 0) === player && PS.data(2, 0) === player) { // top horizontal
            IsWinner = player;
        } else if (PS.data(2, 0) === player && PS.data(1, 1) === player && PS.data(0, 2) === player) { // diagonal right to left
            IsWinner = player;
        } else if (PS.data(1, 0) === player && PS.data(1, 1) === player && PS.data(1, 2) === player) { // top mid vertical
            IsWinner = player;
        } else if (PS.data(0, 0) === player && PS.data(1, 1) === player && PS.data(2, 2) === player) { // diagonal left to right
            IsWinner = player;
        } else if (PS.data(0, 1) === player && PS.data(1, 1) === player && PS.data(2, 1) === player) { // middle row to right
            IsWinner = player;
        } else if (PS.data(2, 2) === player && PS.data(1, 2) === player && PS.data(0, 2) === player) { // bottom horizontal
            IsWinner = player;
        } else if (PS.data(2, 0) === player && PS.data(2, 1) === player && PS.data(2, 2) === player) { // right vertical
            IsWinner = player;
        } else if (PS.data(0, 0) === player && PS.data(0, 1) === player && PS.data(0, 2) === player) { // left vertical
            IsWinner = player;
        } else {
            if(turnCount === 9){
                PS.statusText("Tie!!!");
            }
        }
    }
};

PS.release = function( x, y, data, options ) {
    "use strict";
    if(IsWinner !== 0){
        PS.statusText("Player " + IsWinner + " Wins!!!");
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

PS.keyDown = function( key, shift, ctrl, options ) {
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
