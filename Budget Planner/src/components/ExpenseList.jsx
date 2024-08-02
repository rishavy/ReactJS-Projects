import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const ExpenseList = () => {
  const { state, dispatch } = useContext(BudgetContext);

  const handleDelete = (index) => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: index,
    });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mt-8">Expenses</h2>
      <ul>
        {state.expenses.map((expense, index) => (
          <li key={index} className="p-2 w-5/6 flex items-center justify-between border-b border-gray-300">
            <span>{expense.description}: ₹ {expense.amount}</span>
            <button 
              onClick={() => handleDelete(index)}
              className="bg-red-500 text-white px-1 font-bold rounded hover:bg-red-700"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
