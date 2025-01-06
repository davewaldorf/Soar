import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  ScriptableContext,
  ChartArea,
} from "chart.js";
import { fetchBalanceHistory } from "./api/fakeApi";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Filler);

const ChartContainer = styled.div`
  width: 100%;
  height: 320px;
  background: #ffffff;
  border-radius: 25px;
  padding: 20px;
  position: relative;
`;

interface ChartData {
  labels: string[];
  data: number[];
}

const BalanceHistory: React.FC = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState<ChartData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBalanceHistory();
      setChartData(data);
    };

    fetchData();
  }, []);

  const createGradient = (ctx: CanvasRenderingContext2D, chartArea: ChartArea) => {
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, "rgba(45, 96, 255, 0)");
    gradient.addColorStop(1, "rgba(45, 96, 255, 0.25)");
    return gradient;
  };

  if (!chartData) {
    return <ChartContainer>Loading...</ChartContainer>;
  }

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: "Balance",
        data: chartData.data,
        fill: true,
        backgroundColor: (context: ScriptableContext<"line">) => {
          const { ctx, chartArea } = context.chart;

          if (!chartArea) {
            return "#2D60FF"; 
          }

          return createGradient(ctx, chartArea);
        },
        borderColor: "#1814F3",
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: "#DFE5EE", 
          borderDash: [5, 5], 
        },
        ticks: {
          color: "#718EBF", 
          font: {
            family: "Inter",
            size: 14,
          },
        },
      },
      y: {
        min: 0, 
        grid: {
          color: "#DFE5EE",
          borderDash: [5, 5], 
        },
        ticks: {
          color: "#718EBF", 
          font: {
            family: "Inter",
            size: 14,
          },
          stepSize: 100, 
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: "#343c6a",
        titleFont: {
          family: "Inter",
          size: 14,
        },
        bodyFont: {
          family: "Inter",
          size: 12,
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <ChartContainer>
      <Line data={data} options={options} ref={chartRef} />
    </ChartContainer>
  );
};

export default BalanceHistory;
