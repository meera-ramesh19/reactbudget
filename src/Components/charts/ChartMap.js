import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const ChartMap = (props) => {
  const { dates, incomeArr, expenseArr, nameArr } = props;

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
    labels: dates,
    datasets: [
      {
        label: 'income',
        data: incomeArr,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      // {
      //   label: 'expense',
      //   data: expenseArr,
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      //   borderColor: 'rgba(53, 164, 235, 1)',
      //   borderWidth: 1,
      // },
    ],
  };
  const barColors = ['#b91d47', '#00aba9', '#2b5797', '#e8c3b9', '#1e7145'];

  const data2 = {
    labels: dates,
    datasets: [
      // {
      //   label: dates,
      //   data:nameArr,
      //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
      //   borderColor: 'rgba(255, 99, 132, 1)',
      //   borderWidth: 1,
      // },
      {
        label: 'expenses',
        data: expenseArr,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgba(53, 164, 235, 1)',
        borderWidth: 1,
      },
    ],
  };
  const config = {
    type: 'doughnut',
    data: data,
    options: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart',
        },
      },
    },
  };
  const doughnutData = {
    labels: dates,
    width: 100,
    height: 100,
    datasets: [
      {
        label: 'income',
        data: incomeArr,
        backgroundColor: barColors,
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
  const doughnutData2 = {
    labels: dates,
    datasets: [
      // {
      //   label: dates,
      //   data:nameArr,
      //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
      //   borderColor: 'rgba(255, 99, 132, 1)',
      //   borderWidth: 1,
      // },
      {
        label: 'expenses',
        data: expenseArr,
        backgroundColor: barColors,
        borderColor: 'rgba(53, 164, 235, 1)',
        borderWidth: 1,
      },
    ],
  };
  return (
    <div
      style={{
        marginTop: '100px',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'block',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '300px',
          width: '300px',
        }}
      >
        <Doughnut data={doughnutData} config={config} />
        <Doughnut data={doughnutData2} config={config} />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '500px',
          width: '500px',
        }}
      >
        <Bar options={options} data={data} />
        <Bar options={options} data={data2} />
      </div>
    </div>
  );
};

export default ChartMap;

// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const ChartMap = (props) => {
//   const { incomeArr, expenseArr, nameArr } = props;

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Chart.js Bar Chart',
//       },
//     },
//   };

//   const data = {
//     labels: [nameArr],
//     datasets: [
//       {
//         label: 'Income',
//         data: incomeArr,
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       },
//       {
//         label: 'Expense',
//         data: expenseArr,
//         backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       },
//     ],
//   };
//   return (
//     <div>
//       <Bar options={options} data={data} />
//     </div>
//   );
// };

// export default ChartMap;
