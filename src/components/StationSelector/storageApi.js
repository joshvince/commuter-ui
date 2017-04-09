// Provide an API to store and retrieve the user's last three selected stations

// Public API

/*
  Get all the items stored under the given key
  Return an empty array if the storage doesn't already exist.
*/
function get(key) {
  if (browserSupports) {
    return getItems(key)
  }
  else {
    console.error("Your browser does not support local storage")
    return []
  }
}

/*
  Put a new item in storage under the given key.
  The storage should only ever contain a maximum of three items.
  Remove any more than three items before storing the new values.
*/
function put(key, item) {
  if (browserSupports) {
    putNewItem(key, item)
  }
  else {
    console.error("your browser does not support local storage.")
  }
}

module.exports = {
  get: get,
  put: put
}

// Private Functions

// Check that the browser supports localstorage...
function browserSupports() {
  if (typeof(Storage) !== "undefined") {
    return true
  }
  else {
    return false
  }
}

// Check if the storage already has an instance of the key
function storageExists(key) {
  return localStorage.hasOwnProperty(key)
}

function getItems(key) {
  if (storageExists(key)) {
    return JSON.parse(localStorage[key])
  }
  else {
    return []
  }
}

function putNewItem(key, item) {
  if (storageExists(key)) {
    // add the new item to the front of the array
    var oldArray = JSON.parse(localStorage[key])
    oldArray.unshift(item)
    // slice the array so it only contains three elements and add to storage.
    var newArray = oldArray.slice(0,3)
    localStorage[key] = JSON.stringify(newArray)
  }
  else {
    // create the storage and add this first item to the array
    var data = JSON.stringify([item])
    localStorage[key] = data
  }
}
