import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import styled from "styled-components";
import { WeeklyActivityData } from "../api/fakeApi";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartContainer = styled.div`
  width: 100%;
  height: 322px;
  border-radius: ${({ theme }) => theme.borderRadius.extraLarge};
`;

interface WeeklyActivityChartProps {
  data: WeeklyActivityData[];
}

const WeeklyActivityChart: React.FC<WeeklyActivityChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.day),
    datasets: [
      {
        label: "Deposit",
        data: data.map((item) => item.deposit),
        backgroundColor: "#396AFF", 
        borderRadius: 30, 
        barPercentage: 0.5, 
        categoryPercentage: 0.8, 
      },
      {
        label: "Withdraw",
        data: data.map((item) => item.withdraw),
        backgroundColor: "#232323", 
        borderRadius: 30, 
        barPercentage: 0.5,
        categoryPercentage: 0.8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        align: "end" as const,
        padding: 20,
        labels: {
          font: {
            size: 14, 
            family: "Inter",
          },
          color: "#718EBF", 
          usePointStyle: true, 
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#FFF",
        bodyColor: "#232323",
        borderColor: "#F3F3F5",
        borderWidth: 1,
        titleColor: "#718EBF",
        titleFont: {
          size: 14,
          family: "Inter",
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#718EBF", 
          font: {
            size: 13,
            family: "Inter",
          },
        },
      },
      y: {
        grid: {
          color: "#F3F3F5", 
        },
        ticks: {
          stepSize: 100,
          color: "#718EBF",
          font: {
            size: 13,
            family: "Inter",
          },
        },
      },
    },
  };

  return (
    <ChartContainer>
      <Bar data={chartData} options={options} />
    </ChartContainer>
  );
};

export default WeeklyActivityChart;
