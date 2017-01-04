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

function sendFeedback(pageData, feedbackData) {
  var url = `/feedback`
  var data = {
    line: pageData.lineData,
    display: {
      current: pageData.currentStatus,
      historic: pageData.historicStatus
    },
    feedback: feedbackData
  }
  data = JSON.stringify(data)
  console.log(data)
  var XHR = new XMLHttpRequest();
  XHR.open("POST", url, true)
  XHR.setRequestHeader("Content-Type", "application/json");
  XHR.send(data);
}

module.exports = {
  getLineData: getLineData,
  getLineObjects: getLineObjects,
  sendFeedback: sendFeedback
}
