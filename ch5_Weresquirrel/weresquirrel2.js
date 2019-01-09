'use strict';
const JOURNAL = require('./journal.json');
const jlog = JOURNAL.JOURNAL;
const R = require('ramda');

// extracts all event values from JOURNAL.events:
const allEvents = jlog.map(day => day.events);
const allEventsFlat = R.flatten(allEvents); 

let activity = [];
const activities = allEventsFlat.filter(event => {
	if (!activity.includes(event)) {
		activity = [...activity, event];
		return activity; 
	}
});

let allTables = [];
activities.map(currActivity => {  // creates a 4-item table for every activity value in JOURNAL 
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
const phiResultsArray = allTables.map(currItem => {
	return ( { "act": currItem.activity, "result": (currItem.table[3]*currItem.table[0] -
   currItem.table[2]*currItem.table[1] ) / ( Math.sqrt( (currItem.table[0]+currItem.table[1]) * 
    (currItem.table[2]+currItem.table[3]) * (currItem.table[0]+currItem.table[2]) * 
    (currItem.table[1]+currItem.table[3]) ) ) } );
});

// shows only activities reaching a specified phi value:
const phiCutOff = 0.5;
const filteredPhiResults = phiResultsArray.filter(currObj => {
	if (currObj.result >= phiCutOff) {
		return currObj;
	}
});
console.log(`Activities with a phi > ${phiCutOff}: ${filteredPhiResults.map(val => val.act)}`);