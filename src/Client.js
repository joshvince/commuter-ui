/*
CLIENT IS RESPONSIBLE FOR TALKING TO THE COMMUTER BACKEND SERVICE
*/

var TflColors = require('./styles/TflColors.js');

function getLineData(id, callback) {
  return fetch(`/lines/${id}`, {
    accept: 'application/json'
  }).then(parseJSON)
    .then(callback)
}

function parseJSON(response) {
  return response.json();
}

function getLineObjects(callback) {
  return fetch(`/lines`, {
    accept: 'application/json'
  }).then(parseJSON)
    .then(addColors)
    .then(callback)
}

function addColors(array) {
  return array.map(obj => {
    obj.color = TflColors[obj.id];
    return obj
  })
}

function sendFeedback(lineData, feedbackData) {
  console.log(feedbackData)
  console.log(lineData)
}

module.exports = {
  getLineData: getLineData,
  getLineObjects: getLineObjects,
  sendFeedback: sendFeedback
}
