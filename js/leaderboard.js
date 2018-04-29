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


/*
 * tableProperties (Object)
 * headerText = The text that appears in the table headers
 * valuePaths = Since firebase returns an object. We need the "path" to the object porperties
 */

var tableProperties =  {
	"headerText" : ["Player", "Score"],
	"valuePaths" : ["name", "score"]
}

window.onload = function () {
	console.log("page has loaded");
	var db = firebase.database();
	var scoresDB = db.ref('score');
	var scores;
	scoresDB.on('value', function (scoreData){
		//scores get stored and table gets created once data is retrieved
		//TODO: Add Time-out
		scores = scoreData.val();
		var table = createTable(scores, tableProperties);
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


//Function for sorting table elements
function sortData (data, property, type) {
	function compare_ASC(a,b) {
	  if (a[property] < b[property])
	    return -1;
	  if (a[property] > b[property])
	    return 1;
	  return 0;
	}

	function compare_DESC(a,b) {
	  if (a[property] > b[property])
	    return -1;
	  if (a[property] < b[property])
	    return 1;
	  return 0;
	}

	if (type == "asc") {
		return data.sort(compare_ASC);
	} else if (type == "desc") {
		return data.sort(compare_DESC);
	}

}

var createTable = function (data, tableProperties) {

	//by default sort data in score
	data = sortData(data, "score", "desc");

	console.log("Create table function called");
	
	//create table object
	var _table = document.createElement('table');
	//determines number of columns in table
	var tableWidth = tableProperties.headerText.length;
	//add headers
	var header = _table.createTHead();
	var headerRow = header.insertRow(0);
	for (var c = 0; c < tableWidth; c++) {
		var headerCell = headerRow.insertCell(-1);
		headerCell.innerHTML = tableProperties.headerText[c];
	}

	console.log(_table);
	if (data.length > 1) {
		console.log("adding rows");
		for (var row_cnt = 0; row_cnt < data.length - 1; row_cnt++) {
			var row = _table.insertRow(-1);


			for  (var col_cnt = 0; col_cnt < tableWidth; col_cnt++) {
				//insert player name
				var cell = row.insertCell(-1);
				var cellData = getObjectProperty(data[row_cnt], tableProperties.valuePaths[col_cnt]);

				//console.log(rowData);
				cell.innerHTML = cellData;
			}

		}
	}
	return _table;
} 


