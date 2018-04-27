console.log("leaderboard.js script loaded")
// Initialize Firebase
var config = {
apiKey: "AIzaSyBFKii-FXsmdHfGhhjn0dnigNVi1ab7GWU",
authDomain: "op4webapp.firebaseapp.com",
databaseURL: "https://op4webapp.firebaseio.com",
projectId: "op4webapp",
storageBucket: "op4webapp.appspot.com",
messagingSenderId: "647593248716"
};
firebase.initializeApp(config);
console.log("firebase db initialised");

window.onload = function () {
	console.log("page has loaded");
	var db = firebase.database();
	var scoresDB = db.ref('score');
	var scores;
	scoresDB.on('value', function (scoreData){
		//scores get stored and table gets created once data is retrieved
		//TODO: Add Time-out
		scores = scoreData.val();
		var table = createTable(scores);
		document.getElementById("leaderboardTable").appendChild(table);
	});
}

//gets object property including nested properties
//specific object
//specify propertyPath in format of "property1.property2.property3" 
var getObjectProperty = function (object, propertyPath) {
	propertyPathArray = propertyPath.split("."); //split property path based on array
	var propertyFunc = function (object,property) {
		if (propertyPathArray.length > 0) {
			object = object[property];
			//console.log(object);
			propertyPathArray.splice(0,1)
			return propertyFunc(object,propertyPathArray[0]);
		} else {
			return object;
		}
	} 
	return propertyFunc(object,propertyPathArray[0]);
}

var createTable = function (data) {
	console.log("Create table function called");

	var headerValues = ["Player", "Score"];
	
	//create table object
	var _table = document.createElement('table');
	//add headers
	var header = _table.createTHead();
	var headerRow = header.insertRow(0);
	for (var c = 0; c < headerValues.length; c++) {
		var headerCell = headerRow.insertCell(-1);
		console.log(headerValues[c])
		headerCell.innerHTML = headerValues[c];
	}

	console.log(_table);
	if (data.length > 1) {
		console.log("adding rows");
		for (var i = 1; i < data.length; i++) {
			var row = _table.insertRow(-1);

			//insert player name
			var cell = row.insertCell(-1);
			var rowData = data[i].name;

			//console.log(rowData);
			cell.innerHTML = rowData;
		}
	}
	return _table;
} 


