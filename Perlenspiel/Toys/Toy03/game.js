// Student Name: Austin Krieger

// The global variable RAIN is used to encapsulate game-specific variables and functions
// This strategy helps prevent possible clashes with other scripts
var RAIN = {
    GRID_WIDTH: 24, // width of grid
    GRID_HEIGHT: 24, // height of grid
    //BG_COLOR: 0x8080FF, // background color
    DROP_COLOR: 0x0000FF, // raindrop color
    PAINT_COLOR: 0x0000FF
};

// PS.init( system, options )
// Initializes the game
PS.init = function( system, options ) {
	"use strict";
    // Set up the grid
    PS.gridSize( RAIN.GRID_WIDTH, RAIN.GRID_HEIGHT );

    // Change background color
    //PS.gridColor( RAIN.DROP_COLOR );
    //PS.gridColor(PS.COLOR_GRAY);
    PS.gridColor(0x777777);
    PS.gridShadow(true, PS.COLOR_GRAY_DARK);
    
    // Hide all bead borders
    PS.border( PS.ALL, PS.ALL, 0 );

    // Set all beads to background color
    PS.color( PS.ALL, PS.ALL, PS.COLOR_WHITE); //0x8080FF

    // Set reset bead color
    PS.color( 0, 23,PS.COLOR_WHITE );
    PS.border( 0, 23, 1 );
    PS.glyph(0, 23, "R");

    // Set color and text of title
    PS.statusText( "Paint Toy - Austin Krieger");
    PS.statusColor( PS.COLOR_WHITE );

    // Surround color picker with the grid border color
    PS.color( 1, 23, PS.COLOR_GRAY_DARK); //0x0000FF
    PS.color( 2, 23, PS.COLOR_GRAY_DARK);
    PS.color( 3, 23, PS.COLOR_GRAY_DARK);
    PS.color( 21, 23, PS.COLOR_GRAY_DARK);
    PS.color( 22, 23, PS.COLOR_GRAY_DARK);
    PS.color( 23, 23, PS.COLOR_GRAY_DARK);
    PS.color( 23, 22, PS.COLOR_GRAY_DARK);
    for( var t = 0; t < 23; t++ ){
        PS.color( t, 22, PS.COLOR_GRAY_DARK);
    }

    // Surround color picker with borders
    for( var l = 4; l < 20; l++ ){
        PS.border(l, 23, 1);
    }
    // Color picker
    PS.color( 4, 23, 0x000000 );
    PS.color( 5, 23, 0x8080FF );
    PS.color( 6, 23, 0x0000FF );
    PS.color( 7, 23, 0xFF4040 );
    PS.color( 8, 23, 0xFFFF00 );
    PS.color( 9, 23, 0xFF9900 );
    PS.color( 10, 23, 0xFF0DFF );
    PS.color( 11, 23, 0x8F078F );
    PS.color( 12, 23, 0x0DFF96 );
    PS.color( 13, 23, 0x17FF00 );
    PS.color( 14, 23, 0xDDE8C6 );
    PS.color( 15, 23, 0x0CD0E8 );
    PS.color( 16, 23, 0xCDBF8F );
    PS.color( 17, 23, 0x916D4A );
    PS.color( 18, 23, 0x5C8242 );
    PS.color( 19, 23, 0x7AFF5D );
    PS.color( 20, 23, 0x7C7482 );
};

// PS.touch ( x, y, data, options )
// Called when the mouse button is clicked on a bead, or when a bead is touched
PS.touch = function( x, y, data, options ) {
	"use strict";

	if ( x === 4 && y === 23 ) {
		RAIN.PAINT_COLOR = 0x000000;
    } else if ( x === 0 && y === 23 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 1 && y === 23 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 2 && y === 23 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 3 && y === 23 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 5 && y === 23 ) {
        RAIN.PAINT_COLOR = 0x8080FF;
    } else if ( x === 6 && y === 23 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 7 && y === 23 ) {
        RAIN.PAINT_COLOR = 0xFF4040;
    } else if ( x === 8 && y === 23 ) {
        RAIN.PAINT_COLOR = 0xFFFF00;
    } else if ( x === 9 && y === 23 ) {
        RAIN.PAINT_COLOR = 0xFF9900;
    } else if ( x === 10 && y === 23 ) {
        RAIN.PAINT_COLOR = 0xFF0DFF;
    } else if ( x === 11 && y === 23 ) {
        RAIN.PAINT_COLOR = 0x8F078F;
    } else if ( x === 12 && y === 23 ) {
        RAIN.PAINT_COLOR = 0x0DFF96;
    } else if ( x === 13 && y === 23 ) {
        RAIN.PAINT_COLOR = 0x17FF00;
    } else if ( x === 14 && y === 23 ) {
        RAIN.PAINT_COLOR = 0xDDE8C6;
    } else if ( x === 15 && y === 23 ) {
        RAIN.PAINT_COLOR = 0x0CD0E8;
    } else if ( x === 16 && y === 23 ) {
        RAIN.PAINT_COLOR = 0xCDBF8F;
    } else if ( x === 17 && y === 23 ) {
        RAIN.PAINT_COLOR = 0x916D4A;
    } else if ( x === 18 && y === 23 ) {
        RAIN.PAINT_COLOR = 0x5C8242;
    } else if ( x === 19 && y === 23 ) {
        RAIN.PAINT_COLOR = 0x7AFF5D;
    } else if ( x === 20 && y === 23 ) {
        RAIN.PAINT_COLOR = 0x7C7482;
    } else if ( x === 21 && y === 23 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 22 && y === 23 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 23 && y === 23 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 0 && y === 22 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 1 && y === 22 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 2 && y === 22 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 3 && y === 22 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 4 && y === 22 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 5 && y === 22 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 6 && y === 22 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 7 && y === 22 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 8 && y === 22 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 9 && y === 22 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 10 && y === 22 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 11 && y === 22 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 12 && y === 22 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 13 && y === 22 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 14 && y === 22 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 15 && y === 22 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 16 && y === 22 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 17 && y === 22 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 18 && y === 22 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 19 && y === 22 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 20 && y === 22 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 21 && y === 22 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 22 && y === 22 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    } else if ( x === 23 && y === 22 ) {
        RAIN.PAINT_COLOR = 0x0000FF;
    }

    PS.color( x, y, RAIN.PAINT_COLOR );

    if( x === 0 && y === 23 )
    {
        // Recreate the reset button
        PS.color( PS.ALL, PS.ALL,  PS.COLOR_WHITE); //0x8080FF
        PS.color( 0, 23, PS.COLOR_WHITE );
        PS.glyph( 0, 23, "R" );

        // Recreate the color picker
        PS.color( 4, 23, 0x000000 );
        PS.color( 5, 23, 0x8080FF );
        PS.color( 6, 23, 0x0000FF );
        PS.color( 7, 23, 0xFF4040 );
        PS.color( 8, 23, 0xFFFF00 );
        PS.color( 9, 23, 0xFF9900 );
        PS.color( 10, 23, 0xFF0DFF );
        PS.color( 11, 23, 0x8F078F );
        PS.color( 12, 23, 0x0DFF96 );
        PS.color( 13, 23, 0x17FF00 );
        PS.color( 14, 23, 0xDDE8C6 );
        PS.color( 15, 23, 0x0CD0E8 );
        PS.color( 16, 23, 0xCDBF8F );
        PS.color( 17, 23, 0x916D4A );
        PS.color( 18, 23, 0x5C8242 );
        PS.color( 19, 23, 0x7AFF5D );
        PS.color( 20, 23, 0x7C7482 );

        // Surround color picker with borders
        for( var m = 4; m < 20; m++ ){
            PS.border( m, 23, 1);
        }

        // Surround color picker with background color
        PS.color( 1, 23, PS.COLOR_GRAY_DARK); //0x0000FF
        PS.color( 2, 23, PS.COLOR_GRAY_DARK);
        PS.color( 3, 23, PS.COLOR_GRAY_DARK);
        PS.color( 21, 23, PS.COLOR_GRAY_DARK);
        PS.color( 22, 23, PS.COLOR_GRAY_DARK);
        PS.color( 23, 23, PS.COLOR_GRAY_DARK);
        for(var k = 0; k < 23; k++){
            PS.color( k, 22, PS.COLOR_GRAY_DARK); //0x0000FF
        }
        PS.color( 23, 22, PS.COLOR_GRAY_DARK); //0x0000FF
    }

};

// These event calls aren't used by Simple Rain Toy
// But they must exist or the engine will complain!

PS.release = function( x, y, data, options ) {
	"use strict";
};

PS.enter = function( x, y, data, options ) {
	"use strict";
};

PS.exit = function( x, y, data, options ) {
	"use strict";
};

PS.exitGrid = function( options ) {
	"use strict";
};

PS.keyDown = function( key, shift, ctrl, options ) {
	"use strict";
};

PS.keyUp = function( key, shift, ctrl, options ) {
	"use strict";
};

PS.swipe = function( data, options ) {
	"use strict";
};

PS.input = function( sensors, options ) {
	"use strict";
};