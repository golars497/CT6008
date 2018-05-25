var animateEnemyShip = function (posX, posY, ship) {

	//get available window width
	var window_width = window.screen.width
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;

	var parallax_height = getPositionFromTop(document.getElementById("first-panel"));
		parallax_height = parallax_height.y;

		if (posX < 0) {
			posX = Math.abs(posX);
		}
		if (posY < 0) {
			posY = Math.abs(posY);
		}
		parallax_height += posX;
		window_width += posY;

		posY = posY.toString();
		posX = posX.toString();

	var translateStr = 'translate(' + window_width.toString() + 'px, ' + parallax_height.toString() + 'px)'

	var target = document.querySelector(ship);
	var transformStr = 'translate(' + posX + 'px, ' + posY + 'px)';
	console.log(transformStr);
	var player = target.animate([
	  {transform: transformStr },
	  {transform: translateStr }
	], 6000);
	player.addEventListener('finish', function() {
	  target.style.transform = translateStr;
	});	
}

var animationOfShips = function () {
	animateEnemyShip(-500,-500, '#e_ship');
	setInterval(function(){
		animateEnemyShip(-500,-500, '#e_ship'); 
	}, 10000);
	setInterval(function(){
		animateEnemyShip(500,500, '#e_ship2'); 
	}, 13000);	
}

//function to get distance of element to top of window, no matter where scroll position is
function getPositionFromTop(element) {
    var xPosition = 0;
    var yPosition = 0;

    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
}

window.onload = function () {


	var errorScreen = function () {
		$('.dimmer').dimmer('hide');
		$('#error').modal('show');
	}


	//get available window width
	var window_width = window.screen.width
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;			

	var size;
	var imgSize;
	var imgSpeed;
	var imgPx;

	//if the screen's resolution is above 1920px in width then switch to "medium mode"
	if (window_width > 1920) {
		size = "m";
		imgSize = "huge";
		imgSpeed = -9;
		imgPx = 373;
	} else {
		size = "s";
		imgSize = "large";
		imgSpeed = -7;
		imgPx = 210;
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
	} catch (e) {
		//CODE TO REMOVE LOADER
		//CODE TO SHOW ERROR
		errorScreen();
	}

	img.onload = function () {
	
		try {
			//add buildings	
			add_tiles("building", size);

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

			//Activates parallac effect
			var rellax = new Rellax('.rellax');
	        //this adijust the maring top of the next div base on the height of the background tile image
        	var bckgnd_tiles_height = $('#intro img')[0].height;
        	var blackDivOverlayHeight = bckgnd_tiles_height;
	        bckgnd_tiles_height = (bckgnd_tiles_height-100).toString();

	        //Add enemy ship
	        var enemy_ship = document.createElement('img');

	        enemy_ship.id = "e_ship"
	        enemy_ship.src = "img/obj/e_ship.png";
	        enemy_ship.className += "ui large image";
	        enemy_ship.style.zIndex = "280";
	        enemy_ship.style.position = "absolute";
	        enemy_ship.style.top = "-500px";
	        enemy_ship.style.left = "-500px";
	        document.getElementById('intro').appendChild(enemy_ship);

	        var enemy_ship2 = document.createElement('img');

	        enemy_ship2.id = "e_ship2"
	        enemy_ship2.src = "img/obj/e_ship.png";
	        enemy_ship2.className += "ui large image";
	        enemy_ship2.style.zIndex = "280";
	        enemy_ship2.style.position = "absolute";
	        enemy_ship2.style.top = "-500px";
	        enemy_ship2.style.left = "-500px";
	        document.getElementById('intro').appendChild(enemy_ship2);

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
	        	$('.dimmer').dimmer('hide');
	        	otherEvents();
	        	animationOfShips();
			}

			setTimeout( loaded, delay_time );			        
		} catch (e) {
			console.log(e);
			errorScreen();
			//CODE TO REMOVE LOADER
			//CODE TO SHOW ERROR
		}
	}

}	