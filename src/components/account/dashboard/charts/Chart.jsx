import React from "react";
import'chart.js'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Chart() {
  return (
    <div>
      <Line
        datasetIdKey="id"
        data={{
          labels: ["Jun", "Jul", "Aug"],
          datasets: [
            {
              id: 1,
              label: "",
              data: [5, 6, 7],
            },
          ],
        }}
      />
    </div>
  );
}

export default Chart;
