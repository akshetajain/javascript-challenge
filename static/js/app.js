// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
console.log(data);

// report values 
data.forEach(function(ufoSightings) {
  console.log(ufoSightings);
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});

// filter-btn
// . class
// # id
var filter_button = d3.select("#filter-btn");

filter_button.on("click", function() {
    var filter_ufo = d3.select("#datetime").property("value");
    var filtered_data = data.filter(ufo => ufo.datetime === filter_ufo);
    tbody.html("");

    filtered_data.forEach(function(ufoSightings) {
        console.log(ufoSightings);
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(function([key, value]) {
          console.log(key, value);
          var cell = row.append("td");
          cell.text(value);
        });
      });


  });