import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const FinancialChart = ({ data }) => {
  const chartData = {
    labels: ['Principal', 'Interest'],
    datasets: [{
      data: [data.loanAmount, data.totalInterestGenerated],
      backgroundColor: ['#36A2EB', '#FF6384']
    }]
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4 flex justify-center">Financial Overview</h2>
      <div className="mb-4 flex justify-center">
        <div className="flex text-center">
          <h3 className="text-xl font-semibold">Monthly Payment : &nbsp; </h3>
          <p className="text-lg">$ {data.monthlyPayment.toFixed(2)}</p>
        </div>
      </div>
      <div className="h-80">
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
};

export default FinancialChart;
