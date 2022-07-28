import React, { useState } from "react";
import'chart.js'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Chart({spent}) {
  const [chartData, setChartData]=useState({
    Jan:0, Feb:0, Mar:0,Apr:0,May:0,Jun:0,Jul:0,Aug:0,Sept:0,Oct:0,Nov:0,Dec:0
  })


  return (
    <div>
      <Line
        datasetIdKey="id"
        data={{
          labels: ["Jan", "Feb", "Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],
          datasets: [
            {
              id: 1,
              label: "Spent",
              backgroundColor: "#fbf671",
              borderColor: "#fbf671",
              tension: 0.5,
              data: [0,0,0,0,0,0,0,0,0,0, spent,0],
            },
            {
              id: 2,
              label: "Net Income",
              backgroundColor: "#71fb9f",
              borderColor: "#71fb9f",
              tension: 0.5,
              data: [0,1000,0,0,0,0,0,spent,0,0,0,0,]
            },
            {
              id: 3,
              label: "Net Income",
              backgroundColor: "#e0a191",
              borderColor: "#e0a191",
              tension: 0.5,
              data: [0,100,0,10,0,0,0,0,0,0,0, spent],
            },
          ],
        }}
      />
    </div>
  );
}

export default Chart;
