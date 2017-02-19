/*
Prettifys lower-case id strings from the backend to Capitalised strings that
are fit for a dropdown menu or page header.
*/

/*
Convert array of line ids into pretty strings.
Expects an array of strings.
Returns an array of strings.
*/
function prettify(ids){
  var prettyLines = [
    {id: "bakerloo", pretty: "Bakerloo"},
    {id: "central", pretty: "Central"},
    {id: "circle", pretty: "Circle"},
    {id: "district", pretty: "District"},
    {id: "hammersmith-city", pretty: "Hammersmith & City"},
    {id: "jubilee", pretty: "Jubilee"},
    {id: "metropolitan", pretty: "Metropolitan"},
    {id: "northern", pretty: "Northern"},
    {id: "picadilly", pretty: "Picadilly"},
    {id: "victoria", pretty: "Victoria"},
    {id: "waterloo-city", pretty: "Waterloo & City"}
  ]
  return ids.map(givenId => {
    return prettyLines.find(obj => { return obj.id === givenId}).pretty
  })
}

module.exports = {
  prettify: prettify
}
