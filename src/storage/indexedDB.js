/*
  Initialises an IndexedDB for choobio_arrivals
  Also creates an Object Store designed to hold arrivals for a particular station
*/
function initialise() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
        window.alert(`Your browser doesn't support a stable version of IndexedDB.
        Choobio won't work offline.`);
        reject(`failed`)
    }
    else {
      const dbName = "choobio_arrivals"
      var db;
      var request = indexedDB.open(dbName, 2);

      // handle ALL THE ERRORS.
      request.onerror = function(event) {
        reject(event)
      }

      request.onupgradeneeded = function(event){
        db = event.target.result
        // Create an ObjectStore
        var objectStore = db.createObjectStore("arrivals", {keyPath: ["station_id", "line_id"]})
        // Create an index on the station ID and the line ID
        objectStore.createIndex("station_line", ["station_id", "line_id"], {unique: true})
        resolve(db)
      }
    }
  });
}

function getArrivals(stationId, lineId){
  return new Promise((resolve, reject) => {
    const dbName = "choobio_arrivals"
    var db;
    var request = indexedDB.open(dbName, 2)

    // Handle ERRORS
    request.onerror = function(event){
      reject(event)
    }

    request.onsuccess = function(event){
      db = event.target.result
      var objectStore = db.transaction(["arrivals"]).objectStore("arrivals");
      var request = objectStore.get([stationId, lineId]);

      request.onsuccess = function(event) {
        resolve(request.result)
      };
    }
  });
}


function putNewArrivals(data) {
  return new Promise(function(resolve, reject) {
    const dbName = "choobio_arrivals"
    var db;
    var request = indexedDB.open(dbName, 2);

    // handle ALL THE ERRORS.
    request.onerror = function(event){
      reject(event)
    }

    request.onsuccess = function(event){
      db = event.target.result
      var objectStore = db.transaction(["arrivals"], "readwrite").objectStore("arrivals");
      var requestUpdate = objectStore.put(data);

      requestUpdate.onsuccess = function(event){
        resolve(event)
      }
    }
  });

}

module.exports = {
  initialise: initialise,
  getArrivals: getArrivals,
  putNewArrivals: putNewArrivals
};
