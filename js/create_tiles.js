//STILL TO DO
//Make it so that the tile_formation gets chopped if the max screen size wont fit the entire formations_list
//maybe make the tiles smaller as well

function add_tiles (blankOrColor, size) {

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
	];

var buildings  = [
		[3      ,1      ,1      ,2      ,2      ,0      ,0      ,1      ,2      ,2      ,3      ,3      ,3      ,2      ,2      ,1      ,0      ,0      ,3      ,3      ,1      ,2      ,3      ,1      ,2      ,3      ,1      ,2      ],
		[   3      ,1      ,1      ,2      ,2      ,0      ,0      ,3      ,2      ,2      ,3      ,3      ,3      ,2      ,2      ,3      ,0      ,0      ,3      ,3      ,2      ,3      ,1      ,2      ,3      ,1      ,2      ,3      ],
		[3      ,3      ,1      ,"b1"   ,2      ,2      ,0      ,0      ,1      ,2      ,2      ,3      ,3      ,3      ,2      ,2      ,1      ,0      ,0      ,3      ,3      ,3      ,1      ,2      ,3      ,1      ,2      ,3      ],
		[   3      ,3      ,1      ,1      ,2      ,2      ,0      ,0      ,3      ,2      ,2      ,3      ,3      ,3      ,2      ,2      ,3      ,0      ,0      ,3      ,3      ,1      ,2      ,3      ,1      ,2      ,3      ,1      ],
		[1      ,3      ,"b1"   ,1      ,1      ,2      ,2      ,0      ,0      ,1      ,2      ,2      ,3      ,3      ,3      ,2      ,2      ,1      ,0      ,0      ,3      ,3      ,2      ,3      ,1      ,2      ,3      ,1      ],
		[   1      ,3      ,3      ,1      ,"tree1",2      ,2      ,0      ,0      ,3      ,2      ,2      ,3      ,3      ,3      ,2      ,3      ,0      ,0      ,3      ,3      ,2      ,3      ,1      ,2      ,3      ,1      ,2      ],
		[1      ,1      ,3      ,"h3f"  ,1      ,1      ,2      ,2      ,0      ,0      ,1      ,2      ,2      ,3      ,3      ,3      ,1      ,0      ,0      ,3      ,3      ,2      ,3      ,1      ,2      ,3      ,1      ,2      ],
		[   "b2"   ,1      ,3      ,3      ,1      ,"tree2",2      ,2      ,0      ,0      ,3      ,2      ,2      ,3      ,3      ,3      ,0      ,0      ,3      ,3      ,2      ,3      ,1      ,2      ,3      ,1      ,2      ,3      ],
		[2      ,1      ,"h3f"  ,3      ,3      ,1      ,1      ,2      ,2      ,0      ,0      ,1      ,2      ,2      ,3      ,1      ,0      ,0      ,0      ,3      ,3      ,3      ,1      ,2      ,3      ,1      ,2      ,3      ],
		[   2      ,1      ,1      ,3      ,"h2f"  ,1      ,"tree1",2      ,2      ,0      ,0      ,3      ,2      ,2      ,3      ,0      ,0      ,0      ,0      ,3      ,3      ,1      ,2      ,3      ,1      ,2      ,3      ,1      ],
		[2      ,"h3f"  ,1      ,1      ,3      ,3      ,1      ,1      ,2      ,2      ,0      ,0      ,1      ,2      ,1      ,0      ,0      ,1      ,0      ,0      ,3      ,3      ,2      ,3      ,1      ,2      ,3      ,1      ],
		[   2      ,1      ,1      ,"b7f"  ,3      ,"b3"   ,1      ,"tree2",2      ,0      ,0      ,0      ,3      ,3      ,0      ,0      ,3      ,3      ,0      ,0      ,3      ,3      ,3      ,1      ,2      ,3      ,1      ,2      ],
		[2      ,1      ,1      ,3      ,3      ,1      ,1      ,2      ,2      ,0      ,0      ,0      ,0      ,1      ,0      ,0      ,1      ,3      ,1      ,0      ,0      ,3      ,3      ,1      ,2      ,3      ,1      ,2      ],
		[   1      ,1      ,"b5"   ,3      ,1      ,1      ,2      ,2      ,0      ,0      ,1      ,0      ,0      ,0      ,0      ,1      ,3      ,3      ,1      ,0      ,0      ,3      ,3      ,2      ,3      ,1      ,2      ,3      ],
		[1      ,1      ,3      ,3      ,1      ,1      ,2      ,2      ,0      ,0      ,1      ,1      ,0      ,0      ,0      ,3      ,3      ,1      ,3      ,1      ,0      ,0      ,3      ,3      ,3      ,1      ,2      ,3      ],
		[   1      ,3      ,3      ,1      ,1      ,"t1"   ,2      ,0      ,0      ,1      ,1      ,1      ,0      ,0      ,1      ,3      ,1      ,2      ,3      ,1      ,0      ,0      ,3      ,3      ,1      ,2      ,3      ,1      ],
		[1      ,3      ,3      ,1      ,1      ,2      ,2      ,0      ,0      ,1      ,1      ,1      ,1      ,0      ,0      ,3      ,3      ,2      ,1      ,3      ,1      ,0      ,0      ,3      ,3      ,2      ,3      ,1      ],
		[   3      ,3      ,1      ,1      ,2      ,2      ,0      ,0      ,1      ,1      ,2      ,1      ,1      ,0      ,0      ,1      ,3      ,1      ,2      ,3      ,1      ,0      ,0      ,3      ,3      ,3      ,1      ,2      ],
		[3      ,3      ,1      ,1      ,2      ,2      ,0      ,0      ,1      ,1      ,2      ,2      ,1      ,1      ,0      ,0      ,1      ,3      ,2      ,1      ,3      ,1      ,0      ,0      ,3      ,3      ,1      ,2      ],
		[   3      ,1      ,1      ,2      ,2      ,0      ,0      ,1      ,1      ,2      ,3      ,2      ,1      ,1      ,0      ,0      ,3      ,3      ,1      ,2      ,3      ,3      ,0      ,0      ,3      ,3      ,2      ,3      ],
		[3      ,1      ,1      ,2      ,2      ,0      ,0      ,1      ,1      ,2      ,3      ,3      ,2      ,1      ,1      ,0      ,0      ,1      ,3      ,2      ,1      ,3      ,1      ,0      ,0      ,3      ,3      ,3      ],
		[   1      ,1      ,2      ,2      ,0      ,0      ,1      ,1      ,2      ,3      ,3      ,2      ,1      ,1      ,0      ,0      ,3      ,3      ,1      ,2      ,3      ,3      ,0      ,0      ,0      ,3      ,3      ,1      ],
		[1      ,1      ,2      ,2      ,0      ,0      ,1      ,1      ,2      ,3      ,3      ,2      ,1      ,1      ,0      ,0      ,1      ,3      ,2      ,1      ,3      ,1      ,0      ,0      ,0      ,0      ,3      ,3      ],
		[   1      ,2      ,2      ,0      ,0      ,1      ,1      ,2      ,3      ,3      ,2      ,1      ,1      ,0      ,0      ,1      ,3      ,1      ,2      ,3      ,1      ,0      ,0      ,2      ,0      ,0      ,3      ,3      ],
		[1      ,2      ,2      ,0      ,0      ,1      ,1      ,2      ,3      ,3      ,2      ,1      ,1      ,0      ,0      ,1      ,3      ,2      ,1      ,3      ,1      ,0      ,0      ,2      ,2      ,0      ,0      ,3      ],
		[   2      ,2      ,0      ,0      ,1      ,1      ,2      ,3      ,3      ,2      ,1      ,1      ,0      ,0      ,1      ,3      ,1      ,2      ,3      ,1      ,0      ,0      ,2      ,1      ,2      ,0      ,0      ,3      ],
		[2      ,2      ,0      ,0      ,1      ,1      ,2      ,3      ,3      ,2      ,1      ,1      ,0      ,0      ,1      ,3      ,2      ,1      ,3      ,1      ,0      ,0      ,2      ,1      ,1      ,2      ,0      ,0      ],
		[   2      ,0      ,0      ,1      ,1      ,2      ,3      ,3      ,2      ,1      ,1      ,0      ,0      ,1      ,3      ,1      ,2      ,3      ,1      ,0      ,0      ,2      ,2      ,1      ,2      ,2      ,0      ,0      ],
		[2      ,0      ,0      ,1      ,1      ,2      ,3      ,3      ,2      ,1      ,1      ,0      ,0      ,1      ,3      ,2      ,1      ,3      ,1      ,0      ,0      ,2      ,3      ,2      ,2      ,3      ,2      ,0      ],
		[   0      ,0      ,1      ,1      ,2      ,3      ,3      ,2      ,1      ,1      ,0      ,0      ,1      ,3      ,1      ,2      ,3      ,1      ,0      ,0      ,2      ,3      ,3      ,2      ,3      ,3      ,2      ,0      ],
		[0      ,0      ,1      ,1      ,2      ,3      ,3      ,2      ,1      ,1      ,0      ,0      ,1      ,3      ,2      ,1      ,3      ,1      ,0      ,0      ,2      ,3      ,3      ,2      ,2      ,3      ,2      ,2      ],
		[   0      ,1      ,1      ,2      ,3      ,3      ,2      ,1      ,1      ,0      ,0      ,3      ,3      ,1      ,2      ,3      ,1      ,0      ,0      ,2      ,2      ,3      ,2      ,1      ,2      ,2      ,1      ,2      ],
		[0      ,1      ,1      ,2      ,3      ,3      ,2      ,1      ,1      ,0      ,0      ,1      ,3      ,2      ,1      ,3      ,3      ,0      ,0      ,2      ,1      ,2      ,2      ,1      ,1      ,2      ,1      ,1      ],
		[   1      ,1      ,2      ,3      ,3      ,3      ,2      ,1      ,1      ,0      ,0      ,3      ,3      ,2      ,3      ,1      ,0      ,0      ,2      ,1      ,1      ,2      ,1      ,1      ,2      ,2      ,1      ,2      ],
		[1      ,1      ,2      ,3      ,3      ,3      ,3      ,2      ,1      ,1      ,0      ,0      ,1      ,3      ,2      ,3      ,3      ,0      ,0      ,2      ,1      ,2      ,2      ,1      ,2      ,3      ,2      ,2      ],
		[   1      ,2      ,3      ,3      ,3      ,3      ,3      ,2      ,1      ,1      ,0      ,0      ,1      ,3      ,2      ,3      ,1      ,0      ,0      ,2      ,2      ,3      ,2      ,2      ,3      ,3      ,2      ,1      ],
		[1      ,2      ,3      ,3      ,3      ,3      ,3      ,3      ,2      ,1      ,1      ,0      ,0      ,1      ,3      ,2      ,3      ,1      ,0      ,0      ,2      ,3      ,3      ,2      ,3      ,3      ,2      ,2      ],
		[   2      ,3      ,3      ,3      ,3      ,3      ,3      ,3      ,2      ,1      ,1      ,0      ,0      ,1      ,3      ,2      ,3      ,1      ,0      ,0      ,2      ,3      ,2      ,2      ,3      ,2      ,1      ,2      ],
		[2      ,3      ,3      ,3      ,3      ,3      ,3      ,3      ,3      ,2      ,1      ,1      ,0      ,0      ,1      ,3      ,2      ,3      ,1      ,0      ,0      ,2      ,2      ,1      ,2      ,2      ,2      ,1      ],
		[   3      ,3      ,3      ,3      ,3      ,3      ,3      ,3      ,3      ,2      ,1      ,1      ,0      ,0      ,1      ,3      ,2      ,3      ,1      ,0      ,0      ,2      ,1      ,1      ,2      ,1      ,2      ,1      ]																				
	];


	var num_to_color =  {
		0 : "blank",
		1 : "blue",
		2 : "pink",
		3 : "yellow"
	}

	var _noRellax = false;
	var height = 50;
	var width = 70;
	var building_type;


	//changes default height of tiles if medium size - See add_tile function
	if (size == "m") {
		height = height * 1.4;
		width = width * 1.4;
	}

	var start_top = -(height/2);
	var start_left = -(width/2);
	var window_width = window.screen.width
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;	
	var maxTilePerRow = parseInt(window_width / width);
	maxTilePerRow  = (isOdd(maxTilePerRow)) ? maxTilePerRow + 1 : maxTilePerRow;
	numberOfRows = tiles_formation.length;

	//we need to use tile formation to add custom tile colors to middle of tiles grid
	var tiles_formation_width = tiles_formation[0].length;

	if (blankOrColor == "padding") {
		if (tiles_formation_width - maxTilePerRow > 1) {
			var offset = parseInt(((tiles_formation_width - maxTilePerRow)/2) * width);
			if ( offset > 0 ) {
				return -offset -(width/2);
			} else {
				return 0;
			}
		} else if (maxTilePerRow - tiles_formation_width > 1) {
			var offset = parseInt(((maxTilePerRow -  tiles_formation_width)/2) * width);
			if ( offset > 0 ) {
				return offset - (width/2);
			} else {
				return 0;
			}			
		} else {
			return 0;
		}
	}

	//if the amount of tiles the screen can accomodate is less then the tiles_formation variable
	if (tiles_formation_width - maxTilePerRow > 1) {
		//this is a special case so that when tiles_formation is larger than what can fit on screen 
		//the backgorund tiles image will get shifted 
		tiles_formation = padOut(tiles_formation, (tiles_formation_width - maxTilePerRow)/2);
	}	

	//if the defined tile formation is smaller than the window size
	//if the defined tile formation is bigger than window size
	var custom_tile_padding ;
	var rightest_tile_pointer;
	var leftest_tile_pointer;
	if (maxTilePerRow > tiles_formation_width) {
		custom_tile_padding = parseInt((maxTilePerRow - tiles_formation_width)/2);
		rightest_tile_pointer = parseInt(maxTilePerRow - custom_tile_padding);
		leftest_tile_pointer = custom_tile_padding;
	} else {
		custom_tile_padding = 0;
		rightest_tile_pointer = tiles_formation[0].length - 1;
		leftest_tile_pointer = 0;
	}


	//goes through each row and column on grid and determine tile color etc.
	for (var r = 0; r < numberOfRows; r++) {
		if (r == 0) {
			_top = start_top;
		} else {
			_top = (r * (height/2)) - (height/2);
		}
		for (var c = 0; c <= maxTilePerRow; c++) {
			var _left =  0;
			var _color = "blank";

			//if outside range of tiles formation set set NoRellax
			if (c < parseInt(leftest_tile_pointer) || c > parseInt(rightest_tile_pointer)) {
				_color = "blank";
				_noRellax = true;
			} else {
				_color = tiles_formation[r][c-custom_tile_padding];
				_color = (_color != null) ? num_to_color[_color] : "blank";
				_noRellax = false;
				if (blankOrColor ==  "building") {
					building_type = (buildings[r][c] != 0) ? buildings[r][c] : null;
				}
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
			if (blankOrColor == "building") {
				add_building(building_type, _top, _left,  size);
			} else {
				add_tile(_color, _top, _left, blankOrColor, _noRellax, size);
			}
		}
	}
}

function add_building(building_type, top, left, size) {
	//for each item an array of settings is set
	//first array element is the height multiplier (height of tile e.g. 48px x multiplier)
	//second array elelment is filename
	//third array element is if image is to be horizontally flipped
	//fourth array element determines the bottom point of the object form left. Used to align with tile
	//fift array element determines if a cusotm amount of bottom padding is required
	var buildingSettings = {
		b1 : [1.5, "b1.png", 0, 0.5, 0],
		b2 : [1.5, "b2.png", 0, 0.35, 0],
		b2f : [1.5, "b2.png", 1, 0.65, 0],
		b3 : [1.5, "b3.png", 0, 0.5, 0],
		b4 : [1.5, "b4.png", 0, 0.5, 0],
		b5 : [1.5, "b5.png", 0, 0.65, 0],
		b5f : [1.5, "b5.png", 1, 0.35, 0],
		b6 : [1.5, "b6.png", 0, 0.33, 0],
		b6f : [2, "b6.png", 1, 0.67, 0],
		b7: [1.3, "b7.png", 0, 0.33, 0],
		b7f : [1.3, "b7.png", 1, 0.67, 0],
		b8 : [2, "b8.png", 0, 0.33, 0],
		b8f : [2, "b8.png", 1, 0.67, 0],
		fb1 : [2, "fb1.png", 0, 0.5, 0],
		h1 : [2, "h1.png", 0, 0.61, 0],
		h1f : [2, "h1.png", 1, 0.39, 0],
		h2 : [1.5, "h2.png", 0, 0.4, 0],
		h2f : [1.5, "h2.png", 1, 0.6, 0],
		h3 : [1.5, "h3.png", 0, 0.67, 10],
		h3f : [1.5, "h3.png", 1, 0.33, 10],	
		r : [1, "r.png", 0, 0.5, 0],
		sub : [1, "sub.png", 0, 0.22, 0],
		subf : [1, "sub.png", 1, 0.78, 0],
		t1 : [2, "t1.png", 0, 0.25, 0],
		t1f : [2, "t1.png", 1, 0.75, 0],
		t2 : [2, "t2.png", 0, 0.76, 0],
		t2f : [2, "t2.png", 1, 0.24, 0],
		tree1 : [1.5, "tree1.png", 0, 0.5, 20],
		tree1f : [1.5, "tree1.png", 1, 0.5, 0],
		tree2 : [1.5, "tree2.png", 0, 0.5, 30],
		tree2f : [1.5, "tree2.png", 1, 0.5, 0],	

	}

	var tile_width = 70;
	var tile_height = 50;

	//ensures building type is correct 
	if (building_type != null) {
		var img = new Image();
		try {
			img.src =  "img/parallax/" + buildingSettings[building_type][1];
		} catch (e) {
			console.log(building_type + " is not a valid building type");
			return;
		}
		img.style.top = top + "px";
		img.style.left = left + "px";	
		var img_width = 70 * (buildingSettings[building_type][0]); //te default width
		//changes size of img object if size if different
		if (size == "m") {
			img.style.width = parseInt(img_width * 1.4) + "px";
			tile_width = tile_width * 1.4;
			tile_height = tile_height * 1.4;
		}
		img.className += "parallax-layer-building"; 	
		document.getElementById("intro").appendChild(img);		

		img.onload = function (e) {
			//get image width and height so we can adjust it
			var img_w = this.width;
			var img_h = this.height;

			//flips image if array element says so
			if (buildingSettings[building_type][2] == 1) {
				this.style.transform = "scaleX(-1)";
			}

			//add padding to bottom
			var paddingBotVal;
			if (buildingSettings[building_type][4] == 0) {
				paddingBotVal = 15; //15 is just default padding bot value
			} else {
				paddingBotVal = buildingSettings[building_type][4] 
			}
			
			var paddingBot = buildingSettings[building_type][0] * paddingBotVal;
			
			//this centers the object to in allignment with tile for good isometric view
			var paddingLeft = buildingSettings[building_type][0] * 5;
			var newTop =  parseInt(this.offsetTop - img_h + tile_height - paddingBot);
			var newLeft = parseInt(this.offsetLeft - (img_w - tile_width)/2);
			var buildingOffset = buildingSettings[building_type][3];
			if (buildingOffset > 0.5) {
				newLeft = newLeft - (img_w * (buildingOffset-0.5));
			} else if (buildingOffset < 0.5) {
				newLeft = newLeft + (img_w * (0.5-buildingOffset));
			}

			newLeft = newLeft - paddingLeft;
			$(this)[0].style.top = newTop.toString() + "px";
			$(this)[0].style.left = newLeft.toString() + "px";
		}

	} else {
		console.log("invalid building type");
	}
}

function add_tile (color, top, left, blankOrColor, noRellax, size) {
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


	//changes size of img object if size if different
	if (size == "m") {
		img.style.width = parseInt(68 * 1.4) + "px";
		img.style.height = parseInt(48 * 1.4) + "px";
	}

	var randomParallaxSpeed = Math.floor(Math.random()*5) + 1; // this will get a number between 1 and 3;
	//img.style.zIndex = (randomParallaxSpeed*10).toString();
	randomParallaxSpeed *= Math.floor(Math.random()*5) == 1 ? 1 : -1; // this will add minus sign in 50% of cases

	var rellax = (noRellax != true) ? "rellax " : "";
	img.className += (color == "blank") ? rellax + " parallax-layer" : "parallax-layer";
	img.setAttribute("data-rellax-speed", randomParallaxSpeed.toString());
	//img.setAttribute("data-rellax-zindex", (randomParallaxSpeed*10).toString());
	document.getElementById("intro").appendChild(img);	
}

//removes the left side and the right side of a 2D array by a specified ammount
function padOut (twoD_array, padAmount) {
	var twoD_array_length = twoD_array[0].length;
	//this is to ensure that the padding operations only occurs if there isnt too much padding
	if ((twoD_array_length - (padAmount*2)) > 1 && padAmount >= 1) {
		for (var r = 0; r < twoD_array.length; r++) {

			//RIGHT SPLICE NOT WORKING CORERCTLY FOR SOME REASON
			// //left splice
			// twoD_array[r].splice(0,padAmount);
			// //right splice
			// var rightIndex = (twoD_array[r].length - 1) - padAmount;
			// twoD_array[r].splice(rightIndex, padAmount);

			//remove left and right sides of array based on specified amount (padAmount)
			for (var c = 0; c < (padAmount); c++) {
				twoD_array[r].splice(0,1);
			}

			for (var d = 0; d < (padAmount); d++) {
				twoD_array[r].splice(-1,1);
			}
		}
		return twoD_array;
	} else {
		console.log("Error: amount to pad is greater than the length of the array!")
		return twoD_array;
	}
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