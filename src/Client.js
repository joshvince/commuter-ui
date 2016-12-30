/*
CLIENT IS RESPONSIBLE FOR FETCHING DATA FROM THE COMMUTER BACKEND SERVER
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

module.exports = {
  getLineData: getLineData,
  getLineObjects: getLineObjects
}
