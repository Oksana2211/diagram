import React, { useState } from 'react';
import Chart from "react-apexcharts";
import Indicators from "./data/data.json";


function App() {


  const [series, setSeries] = useState([])
  let ArrRow1 = [Number(Indicators[0].row1), Number(Indicators[0].row2), Number(Indicators[0].row3)];
  let ArrRow2 = [Number(Indicators[1].row4), Number(Indicators[1].row5), Number(Indicators[1].row6)];



  // function clickRow1() {
  //   setSeries((prevSeries) => prevSeries = [...ArrRow1]);
  // }



  let data = {
    series: [
      {
        name: "",
        data: series,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#77B6EA", "#545454"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Показатели",
        align: "left",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: ["Текущий день", "Вчера", "Этот день недели"],
        title: {
          text: "Период",
        },
      },
      yaxis: {
        title: {
          text: "Выручка (руб)",
        },
        min: 5,
        max: 4900000,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
  };



  return (
    <section>
      <section>
        <table >
          <thead>
            <tr>
              <th scope="col">Показатель</th>
              <th scope="col">Текущий день</th>
              <th scope="col">Вчера</th>
              <th scope="col">Этот день недели</th>
            </tr>
          </thead>
          <tbody>
            <tr key={Indicators[0].id} onClick={() => setSeries((prevSeries) => prevSeries = [...ArrRow1])}>
              <th scope="row">Выручка, руб.</th>
              <td>{Indicators[0].row1}</td>
              <td>{Indicators[0].row2}</td>
              <td>{Indicators[0].row3}</td>
            </tr>
            <tr key={Indicators[1].id} onClick={() => setSeries((prevSeries) => prevSeries = [...ArrRow2])} >
              <th scope="row">Наличные</th>
              <td>{Indicators[1].row4}</td>
              <td>{Indicators[1].row5}</td>
              <td>{Indicators[1].row6}</td>
            </tr>
            <tr>
              <th scope="row">Безналичный расчет</th>
              <td>100000</td>
              <td>100000</td>
              <td>100000</td>
            </tr>
            <tr>
              <th scope="row">Кредитные карты</th>
              <td>100521</td>
              <td>100521</td>
              <td>100521</td>
            </tr>
            <tr>
              <th scope="row">Средний чек, руб.</th>
              <td>1300</td>
              <td>900</td>
              <td>300</td>
            </tr>
          </tbody>
        </table>
      </section >
      <div>
        <Chart
          options={data.options}
          series={data.series}
          type="line"
          height={350}
        />
      </div>
    </section >

  );
}


export default App;