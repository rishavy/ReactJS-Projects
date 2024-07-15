import React from 'react';

const FinancialData = ({
  homeValue,
  setHomeValue,
  downPayment,
  setDownPayment,
  loanAmount,
  setLoanAmount,
  interestRate,
  setInterestRate,
  tenure,
  setTenure
}) => {

  const handleHomeValueChange = (e) => {
    const value = Number(e.target.value);
    setHomeValue(value);

    // Update Loan Amount based on new Home Value and existing Down Payment
    const newLoanAmount = value - downPayment;
    setLoanAmount(newLoanAmount);

    // Ensure Down Payment does not exceed Home Value
    if (downPayment > value) {
      setDownPayment(value);
    }
  };

  const handleDownPaymentChange = (e) => {
    const value = Number(e.target.value);

    // Update Down Payment state
    setDownPayment(value);

    // Update Loan Amount based on new Down Payment and existing Home Value
    const newLoanAmount = homeValue - value;
    setLoanAmount(newLoanAmount);
  };

  const handleLoanAmountChange = (e) => {
    const value = Number(e.target.value);

    // Update Loan Amount state
    setLoanAmount(value);

    // Update Down Payment based on new Loan Amount and existing Home Value
    const newDownPayment = homeValue - value;
    setDownPayment(newDownPayment);
  };

  const handleInterestRateChange = (e) => {
    const value = Number(e.target.value);
    setInterestRate(value);
  };

  const handleTenureChange = (e) => {
    const value = Number(e.target.value);
    setTenure(value);
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4 flex justify-center">Financial Data</h2>
      <div className="space-y-4">
        <div>
          <label className="flex text-lg font-medium"> <p className='font-normal'>Home Value: &nbsp;</p> $ {homeValue}</label>
          <input
            type="range"
            min="1000"
            max="10000"
            value={homeValue}
            onChange={handleHomeValueChange}
            className="w-full"
          />
          <div className="flex justify-between text-sm">
            <span>$ 1000</span>
            <span>$ 10000</span>
          </div>
        </div>
        <div>
          <label className="flex text-lg font-medium"> <p className='font-normal'>Down Payment: &nbsp;</p> $ {downPayment}</label>
          <input
            type="range"
            min="0"
            max={homeValue}
            value={downPayment}
            onChange={handleDownPaymentChange}
            className="w-full"
          />
          <div className="flex justify-between text-sm">
            <span>$ 0</span>
            <span>$ {homeValue}</span>
          </div>
        </div>
        <div>
          <label className="flex text-lg font-medium"> <p className='font-normal'>Loan Amount: &nbsp;</p> $ {loanAmount}</label>
          <input
            type="range"
            min="0"
            max={homeValue}
            value={loanAmount}
            onChange={handleLoanAmountChange}
            className="w-full"
          />
          <div className="flex justify-between text-sm">
            <span>$ 0</span>
            <span>$ {homeValue}</span>
          </div>
        </div>
        <div>
          <label className="flex text-lg font-medium"> <p className='font-normal'>Interest Rate: &nbsp;</p> % {interestRate}</label>
          <input
            type="range"
            min="2"
            max="18"
            step="0.1"
            value={interestRate}
            onChange={handleInterestRateChange}
            className="w-full"
          />
          <div className="flex justify-between text-sm">
            <span>% 2</span>
            <span>% 18</span>
          </div>
        </div>
        {/* <div className="relative">
          <label className="block text-base bg-[#fff] px-1 rounded" style={{ position: 'absolute', top: '-0.8rem', left: '1rem' }}>Tenure</label>
          <select value={tenure} onChange={handleTenureChange} 
        className="w-full p-3 border border-gray-300 rounded pl-8 bg-white text-gray-700 hover:border-[#36A2EB] focus:outline-none focus:ring-2 focus:ring-[#36A2EB] focus:border-transparent
          ">
            {[5, 10, 15, 20, 25, 30, 35].map(year => (
              <option key={year} value={year}>{year} years</option>
            ))}
          </select>
        </div> */}

        <div className="relative w-full">
            <label className="block text-base bg-[#fff] px-1 rounded" style={{ position: 'absolute', top: '-0.8rem', left: '1rem' }}>Tenure</label>
            <select
            value={tenure}
            onChange={handleTenureChange}
            className="w-full p-3 border border-gray-300 rounded pl-8 pr-10 bg-white text-gray-700 hover:border-[#36A2EB] focus:outline-none focus:ring-2 focus:ring-[#36A2EB] focus:border-transparent appearance-none"
            >
                {[5, 10, 15, 25, 30, 35].map(year => (
                    <option key={year} value={year}>{year} years</option>
                ))}
            </select>

            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                    className="w-5 h-5 text-[#111]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>

        </div>


      </div>
    </div>
  );
};

export default FinancialData;
