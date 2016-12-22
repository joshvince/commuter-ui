/*
CLIENT IS RESPONSIBLE FOR FETCHING DATA FROM THE COMMUTER BACKEND SERVER
*/

function getLineData(id, callback) {
  return fetch(`/lines/${id}`, {
    accept: 'application/json'
  }).then(parseJSON)
    .then(callback)
}

function parseJSON(response) {
  return response.json();
}

module.exports = {
  getLineData: getLineData
}
