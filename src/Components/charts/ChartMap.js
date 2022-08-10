import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartMap = (props) => {
  const { incomeArr, expenseArr, nameArr } = props;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const data = {
    labels: [nameArr],
    datasets: [
      {
        label: 'Income',
        data: incomeArr,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Expense',
        data: expenseArr,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default ChartMap;
