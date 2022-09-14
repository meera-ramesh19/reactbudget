import './Charts.css';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ChartMap from './ChartMap';

const API = process.env.REACT_APP_API_URL;

const ChartInfo = () => {
  const [chartData, setChartData] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);
  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/api/transactions`)
      .then((res) => {
        const result = res.data;
        setDataArr(res.data);
        setChartLabels(result.map((ele) => ele.sourcetype));
        setChartData(
          result.map((ele) => {
            return parseInt(ele.amount);
          })
        );
      })
      .catch((e) => console.warn(e));
  }, []);

  const incomeArr = dataArr
    .filter((ele) => {
      return ele.sourcetype === 'income';
    })
    .map((ele) => ele.amount);

  const expenseArr = dataArr
    .filter((ele) => {
      return ele.sourcetype === 'expense';
    })
    .map((ele) => ele.amount);
  // expenseArr.unshift(0);

  const dates = dataArr.map((ele) => {
    const changeDate = new Date(ele.userDate).toDateString();
    console.log(changeDate);
    return changeDate;
  });

  const newData = dataArr.map((ele) => {
    return { dates: new Date(ele.userDate).toDateString(), amount: ele.amount };
  });

  const nameArr = dataArr.reduce(
    (acc, cur) => ({
      ...acc,
      [new Date(cur.userDate).toDateString()]: [cur.amount],
    }),
    {}
  );

  return (
    <div>
      {console.log(
        'dataArr=',
        dataArr,
        'data=',
        chartData,
        'labels=',
        chartLabels,
        'income=',
        incomeArr,
        'expense=',
        expenseArr
      )}

      <ChartMap
        incomeArr={incomeArr}
        expenseArr={expenseArr}
        nameArr={nameArr}
        dates={dates}
        newData={newData}
        chartLabels={chartLabels}
        chartData={chartData}
      />
    </div>
  );
};
export default ChartInfo;

// import './Charts.css';
// import React from 'react';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import ChartMap from './ChartMap';

// const API = process.env.REACT_APP_API_URL;

// const Charts = () => {
//   const [chartData, setChartData] = useState([]);

//   const incomeArr = chartData
//     .filter((ele) => {
//       return ele.sourcetype === 'income';
//     }).map((ele) => ele.amount);
//   const expenseArr = chartData
//     .filter((ele) => {
//       return ele.sourcetype === 'expense';
//     }).map((ele) => ele.amount);
//   const category = chartData.map((ele) => ele.category);
//   const nameArr = chartData.map((ele) => ele.itemName);

//   useEffect(() => {
//     axios
//       .get(`${API}/api/transactions`)
//       .then((res) => {
//         setChartData(res.data);
//       })
//       .catch((e) => console.warn(e));
//   }, []);

//   return (
//     <div>
//       <ChartMap
//         incomeArr={incomeArr}
//         expenseArr={expenseArr}
//         nameArr={nameArr}
//         category={category}
//       />
//     </div>
//   );
// };
// export default Charts;
