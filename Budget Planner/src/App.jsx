import React from 'react';
import { BudgetProvider } from './context/BudgetContext';
import BudgetPlanner from './components/BudgetPlanner';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import BudgetChart from './components/BudgetChart';

const App = () => {
  return (
    <BudgetProvider>
      <div className="container mx-auto p-6">
        <BudgetPlanner />
        <div className="flex mt-8">
          <div className="w-1/2 pr-2">
            <ExpenseForm />
            <ExpenseList />
          </div>
          <div className="w-1/2 pl-28">
            <BudgetChart />
          </div>
        </div>
      </div>
    </BudgetProvider>
  );
};

export default App;
