// Student Name: Austin Krieger
"use strict";

PS.init = function (system, options) {
    "use strict";
    PS.gridSize(15, 15);
    PS.gridColor(PS.COLOR_GRAY);
    PS.color(PS.ALL, PS.ALL, PS.COLOR_BLACK);
    PS.statusText("Puzzle - Austin Krieger");
    PS.statusColor(PS.COLOR_WHITE);
    G.init();
};

var G = (function () {
    var l, m;
    var exports = {
        init: function () {
            l = PS.random(14);
            m = PS.random(14);
            //PS.color(l, m, PS.COLOR_WHITE);
        },
        color: function (x, y) {
            // player touched the goal
            if (x === l && y === m) {
                PS.statusText("You Win!!!");
                PS.color(x, y, PS.COLOR_GREEN);
                PS.audioPlay( "fx_tweet" );
            } else {
                PS.audioPlay( "fx_click" );
            }
            if(x === (l - 1) && y === (m - 1)){
                PS.color(x, y, PS.COLOR_YELLOW);
            }
            if(x === (l - 1) && y === (m + 1)){
                PS.color(x, y, PS.COLOR_YELLOW);
            }
            if(x === (l + 1) && y === (m + 1)){
                PS.color(x, y, PS.COLOR_RED);
            }
            if(x === (l + 1) && y === (m - 1)){
                PS.color(x, y, PS.COLOR_RED);
            }
            if(x === l && y === m + 1){
                PS.color(x, y, PS.COLOR_YELLOW);
            }
            if(x === l && y === m - 1){
                PS.color(x, y, PS.COLOR_YELLOW);
            }
            if(x === l + 1 && y === m){
                PS.color(x, y, PS.COLOR_RED);
            }
            if(x === l - 1 && y === m){
                PS.color(x, y, PS.COLOR_YELLOW);
            }
            if(x === l && y === m + 2){
                PS.color(x, y, PS.COLOR_YELLOW);
                PS.alpha(x, y, 150);
            }
            if(x === l && y === m - 2){
                PS.color(x, y, PS.COLOR_YELLOW);
                PS.alpha(x, y, 150);
            }
            if(x === l + 1 && y === m + 2){
                PS.color(x, y, PS.COLOR_RED);
                PS.alpha(x, y, 150);
            }
            if(x === l - 1 && y === m - 2){
                PS.color(x, y, PS.COLOR_YELLOW);
                PS.alpha(x, y, 150);
            }
            if(x === l - 1 && y === m + 2){
                PS.color(x, y, PS.COLOR_YELLOW);
                PS.alpha(x, y, 150);
            }
            if(x === l + 1 && y === m - 2){
                PS.color(x, y, PS.COLOR_RED);
                PS.alpha(x, y, 150);
            }
            if(x === (l - 2) && y === (m - 2)){
                PS.color(x, y, PS.COLOR_YELLOW);
                PS.alpha(x, y, 150);
            }
            if(x === (l - 2) && y === (m + 2)){
                PS.color(x, y, PS.COLOR_YELLOW);
                PS.alpha(x, y, 150);
            }
            if(x === (l + 2) && y === (m + 2)){
                PS.color(x, y, PS.COLOR_RED);
                PS.alpha(x, y, 150);
            }
            if(x === (l + 2) && y === (m - 2)){
                PS.color(x, y, PS.COLOR_RED);
                PS.alpha(x, y, 150);
            }
            if (x < l - 2) {
                PS.color(x, y, PS.COLOR_YELLOW);
                PS.alpha(x, y, 56);
            }
            if (x < l - 1) {
                PS.color(x, y, PS.COLOR_YELLOW);
                PS.alpha(x, y, 150);
            }
            if (x > l + 2) {
                PS.color(x, y, PS.COLOR_RED);
                PS.alpha(x, y, 56);
            }
            if (x > l + 1) {
                PS.color(x, y, PS.COLOR_RED);
                PS.alpha(x, y, 150);
            }
            if (x === l && y < m - 2) {
                PS.color(x, y, PS.COLOR_YELLOW);
                PS.alpha(x, y, 150);
            }
            if (x === l && y > m + 2){
                PS.color(x, y, PS.COLOR_YELLOW);
                PS.alpha(x, y, 150);
            }
            if (x === l - 1 && y < m - 2) {
                PS.color(x, y, PS.COLOR_YELLOW);
                PS.alpha(x, y, 150);
            }
            if (x === l - 1 && y > m + 2){
                PS.color(x, y, PS.COLOR_YELLOW);
                PS.alpha(x, y, 150);
            }
            if (x === l + 1 && y < m - 2) {
                PS.color(x, y, PS.COLOR_RED);
                PS.alpha(x, y, 150);
            }
            if (x === l + 1 && y > m + 2){
                PS.color(x, y, PS.COLOR_RED);
                PS.alpha(x, y, 150);
            }
        }
    };
    return exports;
})();

PS.touch = function (x, y, data, options) {
    "use strict";
    G.color(x, y);
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