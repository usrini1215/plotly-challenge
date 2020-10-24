# plotly-challenge
Belly Button Biodiversity data 
- Plotly project : Usha Chari

(Deployed to : https://usrini1215.github.io/plotly-challenge/)


# Plot.ly - Belly Button Biodiversity

![Bacteria by filterforge.com](Images/bacteria.jpg)

This is an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Dataset

Data as in `samples.json`.

## Charts 

1. horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

        *  `sample_values` as the values for the bar chart.

        *  `otu_ids` as the labels for the bar chart.

        *  `otu_labels` as the hovertext for the chart.


2.  bubble chart that displays each sample.

        *  `otu_ids` for the x values.

        *  `sample_values` for the y values.

        *  `sample_values` for the marker size.

        *  `otu_ids` for the marker colors.

        *  `otu_labels` for the text values.


3. A gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the weekly washing frequency of the individual.  
(I attempted this just to show the basic washing frequency, and need to further update to show the X and Y values)

4.  An individual's demographic information is also displayed based on the choice.


## Deployment

* Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo.

The site has been deployed to :
https://usrini1215.github.io/plotly-challenge/


I used "python -m http.server" on the terminal to set up a python based web server to view the application.



- - -

© 2020 Copyright Usha Chari 
## Plotly Belly Button biodiversity project