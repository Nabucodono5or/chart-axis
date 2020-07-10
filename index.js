import { select, selectAll } from "d3-selection";
import { extent } from "d3-array";
import { scaleLinear } from "d3-scale";
import { axisRight, axisBottom } from "d3-axis";

let friends = [
  { friends: 5, salary: 22000 },
  { friends: 3, salary: 18000 },
  { friends: 10, salary: 88000 },
  { friends: 0, salary: 180000 },
  { friends: 27, salary: 56000 },
  { friends: 8, salary: 74000 },
];

let yExtent = extent(friends, (d) => {
  return d.friends;
});

let xExtent = extent(friends, (d) => {
  return d.salary;
});

let yScale = scaleLinear().domain(yExtent).range([10, 480]);
let xScale = scaleLinear().domain(xExtent).range([10    , 480]);

let yAxis = axisRight(yScale);
let xAxis = axisBottom(xScale);

select("svg")
  .append("g")
  .attr("transform", "translate(10, 10)")
  .selectAll("circle")
  .data(friends)
  .enter()
  .append("circle")
  .attr("r", 10)
  .attr("cx", (d, i) => {
    return xScale(d.salary);
  })
  .attr("cy", (d) => {
    return yScale(d.friends);
  })
  .style("fill", "#f75c03");

select("svg")
  .append("g")
  .attr("transform", "translate(0, 10)")
  .attr("id", "yAxisG")
  .call(yAxis);

select("svg")
  .append("g")
  .attr("transform", "translate(20, 0)")
  .attr("id", "xAxisG")
  .call(xAxis);
