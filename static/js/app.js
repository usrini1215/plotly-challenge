// select dropdown menu 
//Execution starts here and then its all via function calls
var dropdown = d3.select("#selDataset");

// read the data 
d3.json("samples.json").then((data)=> {
    console.log(data)

    // get the id data to the dropdwown menu
    data.names.forEach(function(name) {
        
        dropdown.append("option").text(name).property("value");
    });


});


