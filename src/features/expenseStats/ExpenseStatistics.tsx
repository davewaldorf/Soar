import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartType,
  Chart,
} from "chart.js";
import { fetchExpenseData, ExpenseData } from "./api/fakeApi";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartContainer = styled.div`
  height: 350px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ExpenseStatistics: React.FC = () => {
  const [data, setData] = useState<ExpenseData[]>([]);

  useEffect(() => {
    fetchExpenseData().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);

  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: data.map((item) => item.color),
        cutout: "0",
        borderWidth: 10,
        borderColor: "#FFFFFF",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  const textPlugin = {
    id: "textLabels",
    afterDatasetDraw(chart: Chart<ChartType>) {
      const { ctx, data } = chart;

      if (!data.labels || !data.datasets[0].data) return;

      const labels = data.labels as string[];
      const datasetData = data.datasets[0].data as number[];

      const total = datasetData.reduce((sum, value) => sum + value, 0);

      chart.getDatasetMeta(0).data.forEach((segment, index) => {
        const { x, y } = segment.tooltipPosition(true);

        const percentage = total > 0 ? ((datasetData[index] / total) * 100).toFixed(0) : "0";
        const label = labels[index];

        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 14px Inter";
        ctx.textAlign = "center";
        ctx.fillText(`${percentage}%`, x, y - 10);

        // Draw label
        ctx.font = "12px Inter";
        ctx.fillText(label, x, y + 10);
      });
    },
  };

  return (
    <ChartContainer>
        <Pie data={chartData} options={options} plugins={[textPlugin]} />
    </ChartContainer>
  );
};

export default ExpenseStatistics;
