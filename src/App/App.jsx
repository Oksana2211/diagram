import React, { useState } from 'react';
import Chart from "react-apexcharts";
import Indicators from "../data/data.json";
import style from "./style.module.scss"


function App() {

  const [series, setSeries] = useState([])


  let ArrRow1 = [Number(Indicators[0].row1), Number(Indicators[0].row2), Number(Indicators[0].row3)];
  let ArrRow2 = [Number(Indicators[1].row4), Number(Indicators[1].row5), Number(Indicators[1].row6)];
  let ArrRow3 = [Number(Indicators[2].row7), Number(Indicators[2].row8), Number(Indicators[2].row9)];
  let ArrRow4 = [Number(Indicators[3].row10), Number(Indicators[3].row11), Number(Indicators[3].row12)];
  let ArrRow5 = [Number(Indicators[4].row13), Number(Indicators[4].row14), Number(Indicators[4].row15)];
  let ArrRow6 = [Number(Indicators[5].row16), Number(Indicators[5].row17), Number(Indicators[5].row18)];
  let ArrRow7 = [Number(Indicators[6].row19), Number(Indicators[6].row20), Number(Indicators[6].row21)];
  let ArrRow8 = [Number(Indicators[7].row22), Number(Indicators[7].row23), Number(Indicators[7].row24)];
  let ArrRow9 = [Number(Indicators[8].row25), Number(Indicators[8].row26), Number(Indicators[8].row27)];
  let ArrRow10 = [Number(Indicators[9].row28), Number(Indicators[9].row29), Number(Indicators[9].row30)];



  let data = {
    series: [
      {
        name: "",
        data: series,
      },
    ],
    options: {
      chart: {
        height: 800,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.3,
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
        size: 0.5,
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
        min: 0,
        max: 4810000,
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
      <div>
        <Chart
          options={data.options}
          series={data.series}
          type="line"
          height={350}
        />
      </div>

      <section>
        <table className={style.table}>
          <thead>
            <tr>
              <th className={style.cell1} scope="col">Показатель</th>
              <th className={style.cell2} scope="col">Текущий день</th>
              <th className={style.cell2} scope="col">Вчера</th>
              <th className={style.cell2} scope="col">Этот день недели</th>
            </tr>
          </thead>
          <tbody>
            <tr key={Indicators[0].id} onClick={() => setSeries((prevSeries) => prevSeries = [...ArrRow1])}>
              <th className={style.cell1} scope="row">Выручка, руб.</th>
              <td className={style.cellblue}>{Indicators[0].row1}</td>
              <td className={style.cellgreen}>{Indicators[0].row2}</td>
              <td className={style.cellred}>{Indicators[0].row3}</td>
            </tr>
            <tr key={Indicators[1].id} onClick={() => setSeries((prevSeries) => prevSeries = [...ArrRow2])} >
              <th className={style.cell1} scope="row">Наличные</th>
              <td className={style.cellblue} >{Indicators[1].row4}</td>
              <td className={style.cellgrey}>{Indicators[1].row5}</td>
              <td className={style.cellgrey}>{Indicators[1].row6}</td>
            </tr>
            <tr key={Indicators[2].id} onClick={() => setSeries((prevSeries) => prevSeries = [...ArrRow3])}>
              <th className={style.cell1} scope="row">Безналичный расчет</th>
              <td className={style.cellblue}>{Indicators[2].row7}</td>
              <td className={style.cellgrey}>{Indicators[2].row8}</td>
              <td className={style.cellgrey}>{Indicators[2].row9}</td>
            </tr>
            <tr key={Indicators[3].id} onClick={() => setSeries((prevSeries) => prevSeries = [...ArrRow4])}>
              <th className={style.cell1} scope="row">Кредитные карты</th>
              <td className={style.cellblue}>{Indicators[3].row10}</td>
              <td className={style.cellgrey}>{Indicators[3].row11}</td>
              <td className={style.cellgrey}>{Indicators[3].row12}</td>
            </tr>
            <tr key={Indicators[4].id} onClick={() => setSeries((prevSeries) => prevSeries = [...ArrRow5])}>
              <th className={style.cell1} scope="row">Средний чек, руб.</th>
              <td className={style.cellblue}>{Indicators[4].row13}</td>
              <td className={style.cellgreen}>{Indicators[4].row14}</td>
              <td className={style.cellgreen}>{Indicators[4].row15}</td>
            </tr>
            <tr key={Indicators[5].id} onClick={() => setSeries((prevSeries) => prevSeries = [...ArrRow6])}>
              <th className={style.cell1} scope="row">Средний гость, руб.</th>
              <td className={style.cellblue}>{Indicators[5].row16}</td>
              <td className={style.cellgreen}>{Indicators[5].row17}</td>
              <td className={style.cellgreen}>{Indicators[5].row18}</td>
            </tr>
            <tr key={Indicators[6].id} onClick={() => setSeries((prevSeries) => prevSeries = [...ArrRow7])}>
              <th className={style.cell1} scope="row">Удаления из чека(после оплаты), руб.</th>
              <td className={style.cellblue}>{Indicators[6].row19}</td>
              <td className={style.cellred}>{Indicators[6].row20}</td>
              <td className={style.cellgreen}>{Indicators[6].row21}</td>
            </tr>
            <tr key={Indicators[7].id} onClick={() => setSeries((prevSeries) => prevSeries = [...ArrRow8])}>
              <th className={style.cell1} scope="row">Удаления из чека(до оплаты), руб.</th>
              <td className={style.cellblue}>{Indicators[7].row22}</td>
              <td className={style.cellgrey}>{Indicators[7].row23}</td>
              <td className={style.cellgreen}>{Indicators[7].row24}</td>
            </tr>
            <tr key={Indicators[8].id} onClick={() => setSeries((prevSeries) => prevSeries = [...ArrRow9])}>
              <th className={style.cell1} scope="row"> Количество чеков</th>
              <td className={style.cellblue}>{Indicators[8].row25}</td>
              <td className={style.cellred}>{Indicators[8].row26}</td>
              <td className={style.cellgrey}>{Indicators[8].row27}</td>
            </tr>
            <tr key={Indicators[9].id} onClick={() => setSeries((prevSeries) => prevSeries = [...ArrRow10])}>
              <th className={style.cell1} scope="row">Количество гостей</th>
              <td className={style.cellblue}>{Indicators[9].row28}</td>
              <td className={style.cellred}>{Indicators[9].row29}</td>
              <td className={style.cellgreen}>{Indicators[9].row30}</td>
            </tr>
          </tbody>
        </table>
      </section >
    </section >

  );
}


export default App;

