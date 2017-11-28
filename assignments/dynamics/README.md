# Dynamics, Interactivity and Narrative

## Motivation

The Gini coefficient is a measure of inequality. It can change in
response to policy decisions, national and international events, and
economic factors.

Research conducted by the UNDP Regional Bureau for Africa and
documented in "Income Inequality Trends in sub-Saharan Africa"
identified the drivers of income inequality in African
countries.

Line charts that visualize those changes for many states at a time
are challenging to read. The goal of this project is to create a
tool for displaying changes in the Gini coefficient between any two
years (consecutive or non-consecutive).

In this example, examining 2010 and 2014, changes in all states'
Gini coefficients are displayed on a scatterplot. Note that only a
subset of states have Gini values recorded in both years.

States with high Gini scores appear at the top right; those with
low Gini scores are at the bottom left. More importantly, this
visualization shows where Gini scores have increased between 2010
and 2014: in states that lie above the diagnonal line.

## Data

### Citation
World Bank. 2016. World Development Indicators. https://data.worldbank.org/data-catalog/world-development-indicators (accessed November 6, 2017).
To retrieve Gini data, the WDI (CSV)-ZIP file was downloaded and data were filtered for rows with Indicator.Name="GINI index (World Bank estimate)" and for nation states.

### Software and programming tools
D3 version 4: https://d3js.org/
R: version 3.3.1