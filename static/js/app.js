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

    plotBarBubblecharts(data.names[0]);
    dispDemodata(data.names[0]);
    plotGaugechart(data.names[0])

});

function plotBarBubblecharts(id) {
    //Read samples.json
        d3.json("samples.json").then (sampledata =>{

            //get the new index for the array for the new id
            var newindex = sampledata.names.indexOf(id);
            console.log('samplesNewid')
            console.log(newindex)

            //get new OTU ids
            var ids = sampledata.samples[newindex].otu_ids;
            console.log(` value of new OTU IDs : ${ids}`)

            //get only 10 OTU sample size/labels and reversed
            var sampSize =  sampledata.samples[newindex].sample_values.slice(0,10).reverse();
            console.log(` value of 10 samples : ${sampSize}`)

            var labels =  sampledata.samples[newindex].otu_labels.slice(0,10);
            console.log(` value of labels : ${labels}`)

            // get only top 10 otu ids for the plot OTU and reversing it. 
            var OTU_top = ( sampledata.samples[newindex].otu_ids.slice(0, 10)).reverse();
            // get the otu id's to the desired form for the plot
            var OTU_id = OTU_top.map(d => "OTU " + d);
            console.log(`OTU IDS: ${OTU_id}`)
            // get the top 10 labels for the plot
            var labels =  sampledata.samples[newindex].otu_labels.slice(0,10);
            console.log(`OTU_labels: ${labels}`)
            var trace = {
                x: sampSize,
                y: OTU_id,
                text: labels,
                marker: {
                color: 'blue'},
                type:"bar",
                orientation: "h",
            };
            // create data variable
            var data = [trace];
    
            // create layout variable to set plots layout
            var layout = {
                title: "Top 10 OTU Bar chart for Subject chosen",
                yaxis:{
                    tickmode:"linear",
                },
                margin: {
                    l: 110,
                    r: 110,
                    t: 40,
                    b: 20
                }
            };
    
            // create the bar plot
        Plotly.newPlot("bar", data, layout);

        // The bubble chart
        var trace1 = {
                x: sampledata.samples[newindex].otu_ids,
                y: sampledata.samples[newindex].sample_values,
                mode: "markers",
                marker: {
                    size: sampledata.samples[newindex].sample_values,
                    color: sampledata.samples[newindex].otu_ids
                },
                text:  sampledata.samples[newindex].otu_labels
    
        };
    
        // set the layout for the bubble plot
        var layout_2 = {
                xaxis:{title: "OTU ID"},
                height: 500,
                width: 1000
        };
    
        // creating data variable 
        var data1 = [trace1];
    
        // create the bubble plot
        Plotly.newPlot("bubble", data1, layout_2); 
        
        });
    }  

    function dispDemodata(id) {
        d3.json("samples.json").then((data)=> {
        // get the metadata info for the demographic panel
        var metadata = data.metadata;
        
        console.log(metadata)
        
        // filter meta data info by id
        var result = metadata.filter(meta => meta.id.toString() === id)[0];
        // select demographic panel to put data
        var demographicInfo = d3.select("#sample-metadata");
                
        // empty the demographic info panel each time before getting new id info
        demographicInfo.html("");
        
        // grab the necessary demographic data data for the id and append the info to the panel
        Object.entries(result).forEach((key) => {   
                demographicInfo.append("h6").text(key[0].toUpperCase() + ": " + key[1] + "\n");    
            });
         });
    }    

//Function for Gauge chart
function plotGaugechart(id) {
    d3.json("samples.json").then (plotdata =>{

    var metadata = plotdata.metadata; 
    // filter meta data info by id
    var result = metadata.filter(meta => meta.id.toString() === id)[0];
        
    console.log('result for gauge')    
    console.log(metadata[0])    

    // grab the necessary demographic data data for the id and append the info to the panel
    Object.entries(result).forEach((key) => {   
        wfreq = key[1];
    });

    var gdata = [
        {
            domain: { x: [0, 9], y: [0, 9] },
            value: wfreq,
            title: { text: "Belly Button Washing Frequency" },
            type: "indicator",
            mode: "gauge+number+delta"
        }
    ];

    var glayout = { width: 400, height: 300, margin: { t: 0, b: 0 } };
    Plotly.newPlot("gauge", gdata, glayout);
});
}

// create the function for the change event
function optionChanged(id) {
    console.log(id)
    console.log('id has changed for new chart to print')
    plotBarBubblecharts(id);
    console.log('refreshed chart for new id successfully')

    //call fucntion for demo date
    dispDemodata(id);

    // plot bonus chart
    plotGaugechart(id)

 }
