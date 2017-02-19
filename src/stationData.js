exports.data = function(){
  return {
    "Tooting Bec": {
      "Northern": ["Northbound", "Southbound"]
    },
    "Stockwell": {
      "Northern": ["Northbound", "Southbound"],
      "Victoria": ["Northbound", "Southbound"]
    },
    "Waterloo": {
      "Northern": ["Northbound", "Southbound"],
      "Bakerloo": ["Northbound", "Southbound"],
      "Waterloo & City": ["Eastbound"],
      "Jubilee": ["Eastbound", "Westbound"]
    }
  }
}

exports.data2 = function() {
  return [
    {
      name: "Waterloo",
      lines: ["northern", "bakerloo", "waterloo-city", "jubilee"],
      id: "940GZZLUWLO"
    },
    {
      name: "Tooting Bec",
      lines: ["northern"],
      id: "940GZZLUTBC"
    },
    {
      name: "Victoria",
      lines: ["victoria", "circle", "district"],
      id: "940GZZLUVIC"
    }
  ]
}
