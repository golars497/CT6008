var animateEnemyShip = function (posX, posY, ship_dom) {

	//posY should be fixed

	msg_log("animating " + ship_dom);
	//get available window width
	var window_width = window.screen.width
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;


	var parallax_height = getPositionFromTop(document.getElementById("first-panel"));
		parallax_height = parallax_height.y;

		parallax_height += posY;
		window_width += posX;

	var translateStr = 'translate(' + window_width.toString() + 'px, ' + parallax_height.toString() + 'px)'

	var target = document.querySelector(ship_dom);
	var transformStr = 'translate(' + (posX-posY).toString() + 'px, ' + (-posY).toString() + 'px)';
	msg_log("start: " + transformStr);
	msg_log("end: " + translateStr);
	var player = target.animate([
	  {transform: transformStr },
	  {transform: translateStr }
	], 7000);
	player.addEventListener('finish', function() {
	  target.style.transform = translateStr;
	});	
}

var animationOfShips = function () {
	animateEnemyShip(500, 500, '#e_ship');
	setInterval(function(){
		animateEnemyShip(-500, 500, '#e_ship'); 
	}, 10000);
	setInterval(function(){
		animateEnemyShip(0, 500, '#e_ship2'); 
	}, 13000);	
	setInterval(function(){
		animateEnemyShip(700, 500, '#e_ship3'); 
	}, 12000);	
	setInterval(function(){
		animateEnemyShip(1000, 500, '#e_ship4'); 
	}, 11000);	
}

//function to get distance of element to top of window, no matter where scroll position is
var getPositionFromTop = function(element) {
    var xPosition = 0;
    var yPosition = 0;

    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
}


var add_logo = function(imgSize, imgPx, imgSpeed){
	//add logo
	var g_logo = document.createElement("img");
	g_logo.src = "img/game_logo.png";
	g_logo.style.zIndex = "500";
	g_logo.className += "ui centered " + imgSize + "  image rellax parallax-layer";

	//to position logo dynamically
	g_logo.style.top = ((window.innerHeight / 2) - imgPx).toString() +  "px";
	g_logo.setAttribute("data-rellax-speed", imgSpeed);
	g_logo.setAttribute("data-rellax-zindex", 10);					

	document.getElementById("intro").appendChild(g_logo);	
}


// id = img element id
// size = the size class used in semantic ui determines how big img will be
// file = file path of image file
var add_enemy_ships = function (id, size, file) {
    //Add enemy ship
    var enemy_ship = document.createElement('img');

    enemy_ship.id = id;
    enemy_ship.src = file;
    enemy_ship.className += "ui " + size + " image";
    enemy_ship.style.zIndex = "280";
    enemy_ship.style.position = "absolute";
    enemy_ship.style.top = "-500px";
    enemy_ship.style.left = "-500px";
    document.getElementById('intro').appendChild(enemy_ship);
}


var errorScreen = function (e) {
	msg_log("----------------------------------ERROR-----------------------------------------");
	msg_log(e);
	$('#loader').dimmer('hide');
	$('#error').dimmer('setting', {
        closable: false,
        debug: false
    });
	$('#error').dimmer('show');
	$('#error .button').click(function () {
		msg_log("refresh screen clicked");
		location.reload();
	});
}
window.onload = function () {


	//get available window width
	var window_width = window.screen.width
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;			

	msg_log(window_width);

	var size;
	var imgSize;
	var imgSpeed;
	var imgPx;
	var enemyShipSize;

	//if the screen's resolution is above 1920px in width then switch to "medium mode"
	if (window_width > 1920) {
		size = "m";
		imgSize = "huge";
		imgSpeed = -9;
		imgPx = 373;
		enemyShipSize = "large"
	} else {
		size = "s";
		imgSize = "large";
		imgSpeed = -7;
		imgPx = 210;
		enemyShipSize = "medium";
	}

	try {

		//ADDS black parallax tiles
		add_tiles("blank", size);
        var left = add_tiles("padding",size); 

        //Add background image
        var img = new Image();
        img.src = (size == "m") ? "img/bckgnd_tiles_m.png" : "img/bckgnd_tiles_s.png";
        img.style.left = left.toString() + "px";
        img.style.position = "absolute";
        img.style.zIndex = "10";      
		var node = document.getElementById('intro');
		node.insertBefore(img,node.firstChild);

		img.onload = function () {
			try {
				//add buildings	
				add_tiles("building", size);

				//add logo
				add_logo(imgSize, imgPx, imgSpeed);

				//Activates parallax effect
				var rellax = new Rellax('.rellax');
		        //this adijust the maring top of the next div base on the height of the background tile image
		    	var bckgnd_tiles_height = $('#intro img')[0].height;
		    	var blackDivOverlayHeight = bckgnd_tiles_height;
		        bckgnd_tiles_height = (bckgnd_tiles_height-100).toString();

		        //Add enemy ship
		        add_enemy_ships("e_ship", enemyShipSize ,"img/obj/e_ship.png");
		        add_enemy_ships("e_ship2", enemyShipSize ,"img/obj/e_ship.png");
		        add_enemy_ships("e_ship3", enemyShipSize ,"img/obj/e_ship.png");
		        add_enemy_ships("e_ship4", enemyShipSize ,"img/obj/e_ship.png");

		        //Add black overlay behind logo
		        document.getElementById("first-panel").style.marginTop = bckgnd_tiles_height + "px";

		        var blackDiv = document.createElement("div");
		        blackDiv.style.height = (blackDivOverlayHeight).toString() + "px";
		        blackDiv.style.width = "100%";
		        blackDiv.style.position = "absolute";
		        blackDiv.style.backgroundColor = "#000";
		        blackDiv.style.top = "0";
		        blackDiv.style.left = "0";
		        blackDiv.style.zIndex = "300";

		        blackDiv.style.opacity = "0";
		        blackDiv.id = "blackDiv";

		        document.getElementById("intro").appendChild(blackDiv);

				function otherEvents() {
					window.onscroll = function () {

						//add animation for black fading background
						var distanceTop = getPositionFromTop(document.getElementById("first-panel"));

						var scrollTop = $(window).scrollTop(),
				        	elementOffset = distanceTop.y,
				        	distance = (elementOffset - scrollTop);

				        var opacity_multiplier = 0.7;
				        var opacity_diff = distance / elementOffset;
				        var output_opacity = opacity_multiplier - (opacity_diff * (opacity_multiplier));
				        document.getElementById("blackDiv").style.opacity = output_opacity.toString();
						
					}
				}

		        //a delay is used (as a work around). What really needs to happen, is when all the rendering is complete and everything in the DOM is fully loaded, the then the dimmer should turn off.
				var delay_time = 2000; // 2 seconds
				//removes loading screen dimmer
				var loaded = function() {
		        	$('#loader').dimmer('hide');
		        	otherEvents();
		        	animationOfShips();
				}
				setTimeout( loaded, delay_time );			        
			} catch (e) {
				errorScreen(e);
			}
		}
	} catch (e) {
		//CODE TO REMOVE LOADER
		//CODE TO SHOW ERROR
		errorScreen(e);
	}
}	