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

/*
When a user clicks on a feedback button, it sends along some data, such as the time,
the feedback, the line and the text displayed.
This function then uses XHR to make a POST request to the commuter service
with this data as JSON. It doesn't currently care about the reply.
*/

function sendFeedback(pageData, feedbackData) {
  var url = `/lines/feedback`
  var data = {
    line: pageData.lineData,
    display: {
      current: pageData.currentStatus,
      historic: pageData.historicStatus
    },
    raw: pageData.rawResponse,
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
