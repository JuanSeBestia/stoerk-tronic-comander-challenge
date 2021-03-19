# Choose chart library

* Status: accepted
* Deciders: @JuanSeBestia
* Date: 2021-03-18

## Context and Problem Statement

We need to choose a library among those available in the market to solve the need to print a graphic that satisfies the proposed component. We only have 2 days (only in free time) to develop this product.

## Decision Drivers

* Visually pleasing, by default or adapting
* Time to implement, easy to use
* Features (like expand timeline or scroll)

## Considered Options

* DIY
* Chart.js
* D3.js
* apexcharts
* visjs
* timelines-chart

## Decision Outcome

Chosen option: "apexcharts", Unfortunately, there is not much time to make the component faithful to what was suggested in challenge 3, so we chose this one since it has a more developer-friendly documentation and is fast to implement some functionalities of the proposal.

## Pros and Cons of the Options

### DIY (Do It Yourself)

* Good, because we should be very close to design proposed in challenge 3
* Good, because we do not have to depend on third parties, which can become a security issue
* Bad, because the allocated time is likely to be insufficient to implement it
* Bad, because it may be like inventing the wheel

### Chart.js

* Good, flexible
* Bad, because does not propose a solution for timeline charts
* -, because is too complex
* Bad, because the allocated time is likely to be insufficient to implement it

### D3.js

* Good, flexible
* -, because is too complex
* Bad, because the allocated time is likely to be insufficient to implement it

### apexcharts

[ApexCharts](https://apexcharts.com/) has [Timeline Charts](https://apexcharts.com/javascript-chart-demos/timeline-charts/basic/)

* Good, because has implemented dates on chart
* Good, because has on-hover feature/styles
* Good, because has zoom in/out features
* Good, because has select-zoom in features
* Good, because has drag-scroll-horizontal features
* Good, because has a download feature
* Good, because has react adapter

### visjs

[visjs](https://visjs.github.io/vis-timeline/docs/timeline/) is foused in timeline chart

* Good, Has a scroll-zoom functionality
* Good, Has a drag-scroll-horizontal functionality
* Good, best performance
* Bad, because is too far of mockup
* Bad, ugly visual components, but is like white brand, we can adapt it
* Bad, bad documentation

### timelines-chart

[timelines-chart](https://www.npmjs.com/package/timelines-chart) is focused to display a lot of arranges of timelines.

* Good, because multi controller view
* Good, because has select-zoom in features
* Good, because has on-hover feature/styles
* Bad, because has scroll-behavior
* Bad, because has move-behavior is wired
