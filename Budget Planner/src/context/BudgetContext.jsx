import React, { createContext, useReducer } from 'react';

const BudgetContext = createContext();

const budgetReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BUDGET':
      return {
        ...state,
        budget: action.payload,
      };
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 5000, // Initial budget
  expenses: [],
};

const BudgetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  return (
    <BudgetContext.Provider value={{ state, dispatch }}>
      {children}
    </BudgetContext.Provider>
  );
};

export { BudgetContext, BudgetProvider };
