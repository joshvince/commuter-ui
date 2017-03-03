/*
Prettifys lower-case id strings from the backend to Capitalised strings that
are fit for a dropdown menu or page header.
*/


const prettyLineObjs = [
  {id: "bakerloo", pretty: "Bakerloo"},
  {id: "central", pretty: "Central"},
  {id: "circle", pretty: "Circle"},
  {id: "district", pretty: "District"},
  {id: "hammersmith-city", pretty: "Hammersmith & City"},
  {id: "jubilee", pretty: "Jubilee"},
  {id: "metropolitan", pretty: "Metropolitan"},
  {id: "northern", pretty: "Northern"},
  {id: "piccadilly", pretty: "Piccadilly"},
  {id: "victoria", pretty: "Victoria"},
  {id: "waterloo-city", pretty: "Waterloo & City"}
]

/*
Convert array of line ids into pretty strings.
Expects an array of strings.
Returns an array of strings.
*/
function prettify(input){
  if (typeof input === 'string') {
    return findNameFromId(input, prettyLineObjs)
  }
  else {
    return input.map(id => {
      return findNameFromId(id, prettyLineObjs)
    })
  }
}

function findNameFromId(el, array){
  return array.find(obj => { return obj.id === el}).pretty
}

function returnObjects(input){
  if (typeof input === 'string') {
    return prettyLineObjs.find(obj => {return obj.id === input})
  }
  else {
    return prettyLineObjs.filter(obj => {
      return input.includes(obj.id)
    })
  }

}

module.exports = {
  prettify: prettify,
  returnObjects: returnObjects
}
