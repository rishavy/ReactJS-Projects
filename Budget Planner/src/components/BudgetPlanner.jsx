import React, { useState, useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const BudgetPlanner = () => {
  const [budget, setBudget] = useState('');
  const { state, dispatch } = useContext(BudgetContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_BUDGET', payload: parseFloat(budget) });
    setBudget('');
  };

  const totalExpenses = state.expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Budget Planner</h1>
      <form onSubmit={handleSubmit} className="mb-4 flex justify-center gap-4">
        <input
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Set Budget"
          type="number"
          className="input border p-2 ml-2 w-2/3"
        />
        <button type="submit" className="btn bg-blue-500 hover:bg-blue-600 text-white px-6 rounded">Set Budget</button>
      </form>
      <div className=' text-2xl flex justify-center gap-32 '>
        <p className='bg-[#ade4fc] py-1 px-2'>Budget: ₹ {state.budget}</p>
        <p className='bg-[#ade4fc] py-1 px-2'>Remaining: ₹ {state.budget - totalExpenses}</p>
        <p className='bg-[#b2e8ff] py-1 px-2'>Spent so far: ₹ {totalExpenses}</p>
      </div>
    </div>
  );
};

export default BudgetPlanner;
