"use strict";
const JOURNAL = require("./journal.json");
const jlog = JOURNAL.JOURNAL;
const R = require("ramda");

// extracts all events from JOURNAL.events:
const allEvents = jlog.map(day => day.events);
const allEventsFlat = R.flatten(allEvents);

// drops repeats in allEvents:
const activities = allEventsFlat.reduce((events, item) => {
  if (!events.includes(item)) {
    events = [...events, item];
  }
  return events;
}, []);

// creates a 4-item table for every activity value in JOURNAL:
const allTables = activities.map(activity => {
  let ctn0 = 0,
    ctn1 = 0,
    ctn2 = 0,
    ctn3 = 0;
  for (let i = 0; i <= jlog.length - 1; i++) {
    if (!jlog[i].squirrel && !jlog[i].events.includes(activity)) {
      ctn0++;
    }
    if (!jlog[i].squirrel && jlog[i].events.includes(activity)) {
      ctn1++;
    }
    if (jlog[i].squirrel && !jlog[i].events.includes(activity)) {
      ctn2++;
    }
    if (jlog[i].squirrel && jlog[i].events.includes(activity)) {
      ctn3++;
    }
  }
  return {
    table: [ctn0, ctn1, ctn2, ctn3],
    activity: activity
  };
});

// calc.phi value for each activity depending on its 4-number-table,'td' means table Data from 0-3
const phiResultsArray = allTables.map(currItem => {
  const [td0, td1, td2, td3] = currItem.table;
  return {
    event: currItem.activity,
    result:
      (td3 * td0 - td2 * td1) /
      Math.sqrt((td0 + td1) * (td2 + td3) * (td0 + td2) * (td1 + td3))
  };
});

// SMALL EXERCISE, shows only activities reaching a specified phi value:
const filterResults = (cutOff, arr) =>
  arr.filter(i => i.result >= cutOff).map(i => i.event);
console.log(
  `Events with a significant phi value: ${filterResults(0.5, phiResultsArray)}`
);
