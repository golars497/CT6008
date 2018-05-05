//STILL TO DO
//Make it so that the tile_formation gets chopped if the max screen size wont fit the entire formations_list
//maybe make the tiles smaller as well

function add_tiles (blankOrColor) {

	var tiles_formation =  [
		[3,1,1,2,2,0,0,1,2,2,3,3,3,2,2,1,0,0,3,3,1,2,3,1,2,3,1,2],
		[ 3,1,1,2,2,0,0,3,2,2,3,3,3,2,2,3,0,0,3,3,2,3,1,2,3,1,2,3],
		[3,3,1,1,2,2,0,0,1,2,2,3,3,3,2,2,1,0,0,3,3,3,1,2,3,1,2,3],
		[ 3,3,1,1,2,2,0,0,3,2,2,3,3,3,2,2,3,0,0,3,3,1,2,3,1,2,3,1],
		[1,3,3,1,1,2,2,0,0,1,2,2,3,3,3,2,2,1,0,0,3,3,2,3,1,2,3,1],
		[ 1,3,3,1,1,2,2,0,0,3,2,2,3,3,3,2,3,0,0,3,3,2,3,1,2,3,1,2],
		[1,1,3,3,1,1,2,2,0,0,1,2,2,3,3,3,1,0,0,3,3,2,3,1,2,3,1,2],
		[ 1,1,3,3,1,1,2,2,0,0,3,2,2,3,3,3,0,0,3,3,2,3,1,2,3,1,2,3],
		[2,1,1,3,3,1,1,2,2,0,0,1,2,2,3,1,0,0,0,3,3,3,1,2,3,1,2,3],
		[ 2,1,1,3,3,1,1,2,2,0,0,3,2,2,3,0,0,0,0,3,3,1,2,3,1,2,3,1],
		[2,2,1,1,3,3,1,1,2,2,0,0,1,2,1,0,0,1,0,0,3,3,2,3,1,2,3,1],
		[ 2,1,1,3,3,1,1,2,2,0,0,0,3,3,0,0,3,3,0,0,3,3,3,1,2,3,1,2],
		[2,1,1,3,3,1,1,2,2,0,0,0,0,1,0,0,1,3,1,0,0,3,3,1,2,3,1,2],
		[ 1,1,3,3,1,1,2,2,0,0,1,0,0,0,0,1,3,3,1,0,0,3,3,2,3,1,2,3],
		[1,1,3,3,1,1,2,2,0,0,1,1,0,0,0,3,3,1,3,1,0,0,3,3,3,1,2,3],
		[ 1,3,3,1,1,2,2,0,0,1,1,1,0,0,1,3,1,2,3,1,0,0,3,3,1,2,3,1],
		[1,3,3,1,1,2,2,0,0,1,1,1,1,0,0,3,3,2,1,3,1,0,0,3,3,2,3,1],
		[ 3,3,1,1,2,2,0,0,1,1,2,1,1,0,0,1,3,1,2,3,1,0,0,3,3,3,1,2],
		[3,3,1,1,2,2,0,0,1,1,2,2,1,1,0,0,1,3,2,1,3,1,0,0,3,3,1,2],
		[ 3,1,1,2,2,0,0,1,1,2,3,2,1,1,0,0,3,3,1,2,3,3,0,0,3,3,2,3],
		[3,1,1,2,2,0,0,1,1,2,3,3,2,1,1,0,0,1,3,2,1,3,1,0,0,3,3,3],
		[ 1,1,2,2,0,0,1,1,2,3,3,2,1,1,0,0,3,3,1,2,3,3,0,0,0,3,3,1],
		[1,1,2,2,0,0,1,1,2,3,3,2,1,1,0,0,1,3,2,1,3,1,0,0,0,0,3,3],
		[ 1,2,2,0,0,1,1,2,3,3,2,1,1,0,0,1,3,1,2,3,1,0,0,2,0,0,3,3],
		[1,2,2,0,0,1,1,2,3,3,2,1,1,0,0,1,3,2,1,3,1,0,0,2,2,0,0,3],
		[ 2,2,0,0,1,1,2,3,3,2,1,1,0,0,1,3,1,2,3,1,0,0,2,1,2,0,0,3],
		[2,2,0,0,1,1,2,3,3,2,1,1,0,0,1,3,2,1,3,1,0,0,2,1,1,2,0,0],
		[ 2,0,0,1,1,2,3,3,2,1,1,0,0,1,3,1,2,3,1,0,0,2,2,1,2,2,0,0],
		[2,0,0,1,1,2,3,3,2,1,1,0,0,1,3,2,1,3,1,0,0,2,3,2,2,3,2,0],
		[ 0,0,1,1,2,3,3,2,1,1,0,0,1,3,1,2,3,1,0,0,2,3,3,2,3,3,2,0],
		[0,0,1,1,2,3,3,2,1,1,0,0,1,3,2,1,3,1,0,0,2,3,3,2,2,3,2,2],
		[ 0,1,1,2,3,3,2,1,1,0,0,3,3,1,2,3,1,0,0,2,2,3,2,1,2,2,1,2],
		[0,1,1,2,3,3,2,1,1,0,0,1,3,2,1,3,3,0,0,2,1,2,2,1,1,2,1,1],
		[ 1,1,2,3,3,3,2,1,1,0,0,3,3,2,3,1,0,0,2,1,1,2,1,1,2,2,1,2],
		[1,1,2,3,3,3,3,2,1,1,0,0,1,3,2,3,3,0,0,2,1,2,2,1,2,3,2,2],
		[ 1,2,3,3,3,3,3,2,1,1,0,0,1,3,2,3,1,0,0,2,2,3,2,2,3,3,2,1],
		[1,2,3,3,3,3,3,3,2,1,1,0,0,1,3,2,3,1,0,0,2,3,3,2,3,3,2,2],
		[ 2,3,3,3,3,3,3,3,2,1,1,0,0,1,3,2,3,1,0,0,2,3,2,2,3,2,1,2],
		[2,3,3,3,3,3,3,3,3,2,1,1,0,0,1,3,2,3,1,0,0,2,2,1,2,2,2,1],
		[ 3,3,3,3,3,3,3,3,3,2,1,1,0,0,1,3,2,3,1,0,0,2,1,1,2,1,2,1]						
	]

	var num_to_color =  {
		0 : "blank",
		1 : "blue",
		2 : "pink",
		3 : "yellow"
	}

	var height = 50;
	var width = 70;
	var start_top = -(height/2);
	var start_left = -(width/2);
	var window_width = window.screen.width
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;	
	var maxTilePerRow = parseInt(window_width / width);
	numberOfRows = tiles_formation.length;

	//we need to use tile formation to add custom tile colors to middle of tiles grid
	var tiles_formation_width = tiles_formation[0].length;
	//if the defined tile formation is smaller than the window size
	//if the defined tile formation is bigger than window size
	var custom_tile_padding = parseInt((maxTilePerRow - tiles_formation_width)/2);
	var rightest_tile_pointer = parseInt(maxTilePerRow - custom_tile_padding);
	var leftest_tile_pointer = custom_tile_padding;

	for (var r = 0; r < numberOfRows; r++) {
		if (r == 0) {
			_top = start_top;
		} else {
			_top = (r * (height/2)) - (height/2);
		}
		for (var c = 0; c <= maxTilePerRow; c++) {
			var _left =  0;
			var _color = "blank";

			if (c < parseInt(leftest_tile_pointer) || c > parseInt(rightest_tile_pointer)) {
				_color = "blank"
			} else {
				_color = tiles_formation[r][c-custom_tile_padding];
				_color = (_color != null) ? num_to_color[_color] : "blank";
			}

			//this is to offset rows 
			if (isEven(r) || r == 0) {
				if (c == 0) {
					_left = start_left;
				} else {
					_left = (c * width) - (width/2);
				}
			} else {
				_left = (c * width + (width/2))  - (width/2);
			}
			//convert left value to string for css

			_top = Math.floor(_top).toString();
			_left = Math.floor(_left).toString();
			add_tile(_color, _top, _left, blankOrColor);
		}
	}

}

function add_tile (color, top, left, blankOrColor) {
	var _color = {
		blue : "b_tile",
		pink : "p_tile",
		yellow : "y_tile",
		blank : "tile"
	}

	if (blankOrColor == "blank") {
		if (color != "blank") {
			return;
		}
	} else if (blankOrColor =="color") {
		if (color == "blank") {
			return;
		}
	}

	var img = document.createElement("img");
	img.src =  "img/" + _color[color] +".png";
	//div.style.backgroundImage =  "url('../../img/" + _color[color] +".png')";
	img.style.top = top + "px";
	img.style.left = left + "px";

	var randomParallaxSpeed = Math.floor(Math.random()*3) + 1; // this will get a number between 1 and 3;
	randomParallaxSpeed *= Math.floor(Math.random()*3) == 1 ? 1 : -1; // this will add minus sign in 50% of cases

	img.className += (color == "blank") ? "rellax parallax-layer" : "parallax-layer";
	img.setAttribute("data-rellax-speed", randomParallaxSpeed.toString());
	document.getElementById("intro").appendChild(img);	
}


window.onresize = function () {
	//console.log("window resized");
}

function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}