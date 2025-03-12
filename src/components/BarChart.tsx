import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from "chart.js";
import React from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const data = {
  labels: ["Cntl 1", "Var B", "Cntl 2", "Var C", "Cntl 3", "Var D"],
  datasets: [
    {
      data: [58, 1000000, 2000000, 3000000, 4000000, 5000000], // Values
      backgroundColor: "rgb(255, 99, 132)", // Light purple color
      borderRadius: 8, // Rounded bars
    },
  ],
};

const options:any = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
        legend: { display: false, position: "top" as const },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      grid: { display: false }, // Hide grid lines
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value: number) => (`${value / 1000000}M`)

      },
    },
  },
};

const BarChart: React.FC = () => (
//   <div style={{ width: 400, height: 250 }}>
    <Bar data={data} options={options} />
//   </div>
);

export default BarChart;
