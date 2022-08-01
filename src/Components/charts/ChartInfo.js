import './Charts.css';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ChartMap from './ChartMap';

const API = process.env.REACT_APP_API_URL;

const Charts = () => {
  const [chartData, setChartData] = useState([]);

  const incomeArr = chartData
    .filter((ele) => {
      return ele.type === 'income';
    })
    .map((ele) => ele.amount);
  const expenseArr = chartData
    .filter((ele) => {
      return ele.type === 'expense';
    })
    .map((ele) => ele.amount);
  const category = chartData.map((ele) => ele.category);
  const nameArr = chartData.map((ele) => ele.itemName);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => {
        setChartData(res.data);
      })
      .catch((e) => console.warn(e));
  }, []);

  return (
    <div>
      <ChartMap
        incomeArr={incomeArr}
        expenseArr={expenseArr}
        nameArr={nameArr}
        category={category}
      />
    </div>
  );
};
export default Charts;
