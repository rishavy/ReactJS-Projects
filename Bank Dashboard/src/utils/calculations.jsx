export const calculateFinancials = (loanTerm, interestRate, loanAmount) => {
    const totalLoanMonths = loanTerm * 12;
    const interestPerMonth = interestRate / 100 / 12;
    const monthlyPayment = (loanAmount * interestPerMonth * Math.pow(1 + interestPerMonth, totalLoanMonths)) / (Math.pow(1 + interestPerMonth, totalLoanMonths) - 1);
    const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;
  
    return { loanAmount, interestPerMonth, monthlyPayment, totalInterestGenerated };
  };
  