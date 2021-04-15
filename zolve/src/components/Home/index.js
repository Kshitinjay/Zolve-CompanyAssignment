// import HighchartsReact from "highcharts-react-official";

import React, { useState, useEffect } from "react";
import "./index.css";
const Highcharts = require("highcharts");
const Home = () => {
  const [Fromdate, setFromdate] = useState("");
  const [Todate, setTodate] = useState("");
  const [Pagesize, setPagesize] = useState("");
  const [Page, setPage] = useState("");

  const handleFromdate = (e) => {
    setFromdate(e.target.value);
  };

  const handleTodate = (e) => {
    setTodate(e.target.value);
  };

  const handlePagesize = (e) => {
    setPagesize(e.target.value);
  };

  const handlePage = (e) => {
    setPage(e.target.value);
  };

  useEffect(() => {
    fetch(
      `https://api.stackexchange.com/2.2/tags?page=${Page}&pagesize=${Pagesize}&fromdate=${Fromdate}&todate=${Todate}&order=desc&sort=popular&site=stackoverflow`
    )
      .then((res) => res.json())
      .then((result) => showData(result))
      .catch((error) => console.log(error.message));
  }, [Page, Pagesize, Fromdate, Todate]);

  const showData = (dt) => {
    console.log(dt);
    const data = dt.items.reduce((acc, current) => {
      acc = {
        ...acc,
        [current.name]: current.count,
      };
      return acc;
    }, {});
    
    console.log(data);
    let chartData = {};
    chartData["divId"] = "showdata";
    chartData["xLabel"] = "Language";
    chartData["yLabel"] = "Count";
    chartData["xValues"] = Object.keys(data);
    chartData["yValues"] = Object.values(data);
    drawChart(chartData);
  };

  const drawChart = (chartData) => {
    Highcharts.chart(chartData.divId, {
      chart: {
        type: "column",
      },
      credits: {
        enabled: false,
      },
      title: {
        text: "mydata",
      },
      xAxis: {
        categories: chartData.xValues,
        title: {
          text: chartData.xLabel,
        },
      },
      yAxis: {
        categories: chartData.yValues,
        title: {
          text: chartData.yLabel,
        },
      },
      series: [
        {
          name: "",
          data: chartData.yValues,
        },
      ],
      plotOptions: {
        series: {
          pointWidth: 10,
        },
      },
    });
  };

  return (
    <div className="mainContainer">
      <div className="inputContainer input-group">
        <input
          className="form-control m-1"
          type="date"
          value={Fromdate}
          placeholder="Fromdate"
          onChange={handleFromdate}
        />
        <input
          className="form-control m-1"
          type="date"
          value={Todate}
          placeholder="Todate"
          onChange={handleTodate}
        />
        <input
          className="form-control m-1"
          type="text"
          value={Pagesize}
          placeholder="Pagesize"
          onChange={handlePagesize}
        />
        <input
          className="form-control m-1"
          type="text"
          value={Page}
          placeholder="Page"
          onChange={handlePage}
        />
      </div>
      <div id="showdata"></div>
    </div>
  );
};

export default Home;
