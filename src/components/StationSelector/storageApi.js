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
  localStorage[key] = JSON.stringify([item])
}
