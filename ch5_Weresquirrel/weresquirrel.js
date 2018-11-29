// imports JOURNAL array:
const JOURNAL = require('./journal');
const jlog = JOURNAL.JOURNAL;

// extracts all activity values from JOURNAL.events:
const activities = [];
jlog.map(function loopDayLogs(day) {
	day.events.map(loopEvents);

	function loopEvents(event) {
		if (!activities.includes(event)) {
			activities.push(event);
		}		
		return activities;
	}	
});

let allTables = [];

// creates a 4-item table for each individual activity given in JOURNAL
activities.map(function blas(currActivity) {
	let ctn0 = 0;
	let ctn1 = 0; 
	let ctn2 = 0; 
	let ctn3 = 0; 
	for (let i=0; i <= jlog.length-1; i++) {
		if (!jlog[i].squirrel === true && !jlog[i].events.includes(currActivity)) { ctn0++ }

		if (!jlog[i].squirrel === true && jlog[i].events.includes(currActivity)) { ctn1++ }

		if (jlog[i].squirrel === true && !jlog[i].events.includes(currActivity)) { ctn2++ }

		if (jlog[i].squirrel === true && jlog[i].events.includes(currActivity)) { ctn3++ }
	}

	const activityTable = {
		"table": [ctn0, ctn1, ctn2, ctn3],
		"activity": currActivity
	}

	allTables = [
		...allTables,  // concats previous array items
		activityTable
	];
});

// calculates phi values for each individual activity depending on their resp. 4-item table: 
const phiResultsArray = allTables.map( function calcPhiForEach4erTable(currItem) {
	return ( { "act": currItem.activity, "result": (currItem.table[3]*currItem.table[0] -
   currItem.table[2]*currItem.table[1] ) / ( Math.sqrt( (currItem.table[0]+currItem.table[1]) * 
    (currItem.table[2]+currItem.table[3]) * (currItem.table[0]+currItem.table[2]) * 
    (currItem.table[1]+currItem.table[3]) ) ) } );
});

// shows only activities reaching a specified phi value:
const phiCutOff = 0.5;
const filteredPhiResults = phiResultsArray.filter(function filterPhiResults (currObj) {

	if (currObj.result >= phiCutOff) {
		return currObj;
	}
});

console.log(`Activities with a phi > ${phiCutOff}: ${filteredPhiResults.map(function showIt(val) {
	return val.act;
})}`);