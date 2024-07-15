import React, { useState } from 'react';
import './index.css';
import FinancialData from './components/FinancialData';
import FinancialChart from './components/FinancialChart';
import Header from './components/Header';
import Footer from './components/Footer';
import { calculateFinancials } from './utils/calculations';

const App = () => {
  const [homeValue, setHomeValue] = useState(1000);
  const [downPayment, setDownPayment] = useState(0);
  const [loanAmount, setLoanAmount] = useState(homeValue - downPayment);
  const [interestRate, setInterestRate] = useState(2);
  const [tenure, setTenure] = useState(5);

  const financials = calculateFinancials(tenure, interestRate, loanAmount);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 pr-2">
            <FinancialData
              homeValue={homeValue}
              setHomeValue={setHomeValue}
              downPayment={downPayment}
              setDownPayment={setDownPayment}
              loanAmount={loanAmount}
              setLoanAmount={setLoanAmount}
              interestRate={interestRate}
              setInterestRate={setInterestRate}
              tenure={tenure}
              setTenure={setTenure}
            />
          </div>
          <div className="w-full md:w-1/2 pl-2">
            <FinancialChart data={financials} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
