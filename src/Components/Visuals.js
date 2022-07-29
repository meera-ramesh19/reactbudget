import './Charts.css';
import React from 'react';
import * as d3 from 'd3';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

const Charts = () => {

  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => console.log(error));
  },[transactions]);
 
 const itemName = transactions.map((ele)=>ele.itemName);
 const amount=transactions.map((ele)=>ele.amount)
const obj = {};
itemName.forEach((element, index) => {
  obj[element] = amount[index];
});
let  dataSet=[]
dataSet.push(obj)

  // Generate a p tag for each element in the dataSet with the text: Subject: Count
  d3.select('#pgraphs')
    .selectAll('p')
    .data(dataSet)
    .enter()
    .append('p')
    .text((dt) => '  ' + dt.itemName + ':' + dt.amount);

  // Bar Chart:
   const getMax = () => {
    // Calculate the maximum value in the DataSet
    let max = 0;
    dataSet.forEach((dt) => {
      if (dt.amount > max) {
        max = dt.amount;
      }
    });
    return max;
  };

  // Create each of the bars and then set them all to have the same height(Which is the max value)
  d3.select('#BarChart')
    .selectAll('div')
    .data(dataSet)
    .enter()
    .append('div')
    .classed('bar', true)
    .style('height', `${getMax()}px`);

  //Transition the bars into having a height based on their corresponding count value
  d3.select('#BarChart')
    .selectAll('.bar')
    // .transition()
    // .duration(1000)
    .style('height', (bar) => `${bar.amount}px`)
    .style('width', '80px')
    .style('margin-right', '40px')
    // .delay(300); // Fix their width and margin

  // Generate random data for our line where x is [0,15) and y is between 0 and 100
  let lineData = [];
  for (let i = 0; i < 15; i++) {
    lineData.push({ x: i + 1, y: Math.round(Math.random() * 100) });
  }

  // Create our scales to map our data values(domain) to coordinate values(range)
  let xScale = d3.scaleLinear().domain([0, 15]).range([0, 300]);
  let yScale = d3.scaleLinear().domain([0, 100]).range([300, 0]); // Since the SVG y starts at the top, we are inverting the 0 and 300.

  // Generate a path with D3 based on the scaled data values
  let line = d3
    .line()
    .x((dt) => xScale(dt.x))
    .y((dt) => yScale(dt.y));

  // Generate the x and y Axis based on these scales
  let xAxis = d3.axisBottom(xScale);
  let yAxis = d3.axisLeft(yScale);

  // Create the horizontal base line
  d3.select('#LineChart')
    .selectAll('path')
    .datum(lineData) // Bind our data to the path element
    .attr(
      'd',
      d3
        .line()
        .x((dt) => xScale(dt.x)) // Set the path to our line function, but where x is the corresponding x
        .y(yScale(0))
    )
    .attr('stroke', 'blue')
    .attr('fill', 'none'); // Set the y to always be 0 and set stroke and fill color

  d3.select('#LineChart')
    .selectAll('path')
    .transition()
    .duration(1000) // Transition the line over 1 sec
    .attr('d', line); // Set the path to our line variable (Which corresponds the actual path of the data)

  // Append the Axis to our LineChart svg
  d3.select('#LineChart')
    .append('g')
    .attr('transform', 'translate(0, ' + 300 + ')')
    .call(xAxis);

  d3.select('#LineChart')
    .append('g')
   .attr('transform', 'translate(0, 0)')
    .call(yAxis);
  // },[]);

  return (
    <div className='App' style={{}}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem',
        }}
        id='pgraphs'
      ></div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div id='BarChart'></div>
        <svg id='LineChart' width={350} height={350}>
          <path />
        </svg>
      </div>
      <div style={{ marginTop: '5rem', fontSize: '1rem', textAlign: 'center' }}>
        BY MEERA RAMESH
      </div>
    </div>
  );
};

export default Charts;
