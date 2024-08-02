import React, { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { BudgetContext } from '../context/BudgetContext';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const BudgetChart = () => {
  const { state } = useContext(BudgetContext);

  const totalExpenses = state.expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const remainingBudget = state.budget - totalExpenses;

  const data = {
    labels: ['Remaining', 'Spent'],
    datasets: [
      {
        data: [remainingBudget, totalExpenses],
        backgroundColor: ['#ff5151', '#6397ff'],
        hoverBackgroundColor: ['#FF6384', '#63dcff'],
      },
    ],
  };

  return (
    <div style={{ width: '450px', height: '400px' }}> {/* Set the size of the chart container */}
      <h2 className="text-xl font-bold mb-4 text-center">Budget Chart</h2>
      <Doughnut
        data={data}
        options={{
          responsive: true, 
          plugins: {
            legend: {
              display: true, 
              position: 'top', 
            },
            tooltip: {
              callbacks: {
                label: function(tooltipItem) {
                  return `${tooltipItem.label}: Rs.${tooltipItem.raw}`; 
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default BudgetChart;
