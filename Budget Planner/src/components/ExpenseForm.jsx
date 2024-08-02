import React, { useState, useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const ExpenseForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const { dispatch } = useContext(BudgetContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_EXPENSE', payload: { description, amount: parseFloat(amount) } });
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <label className="block text-lg font-semibold ">Add Expenses</label>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="input border p-2 w-5/6"
      />
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        type="number"
        className="input border p-2 w-1/2 mr-5"
      />
      <button type="submit" className="btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-8 rounded">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
