export const STATE_EQUITY_MAPPING = {
  sheetName: "State&Equity",

  stateMatrix: {
    indicatorColumn: "__EMPTY_1",
    firstStateColumnIndex: 2, // __EMPTY_2 onwards

    indicatorToKey: {
      "State": "StateName",
      "Number of Employees (in numbers)": "NumberOfEmployees",
      "Number of Districts (in numbers)": "NumberOfDistricts",
      "Number of Offices / Branches (in numbers)": "NumberOfBranches",
      "Assets under management AUM (On BS + Off BS) (in INR)": "AssetsUnderManagement",
      "Number of Active Borrowers (in numbers)": "NumberOfActiveBorrowers",
      "Portfolio at Risk 1 -30 days (in INR)": "PortfolioRisk1_30",
      "Portfolio at Risk > 30 days (in INR)": "PortfolioRisk30",
      "Portfolio at Risk > 60 days (in INR)": "PortfolioRisk60",
      "Portfolio at Risk > 90 days (in INR)": "PortfolioRisk90",
      "Portfolio at Risk > 180 days (in INR)": "PortfolioRisk180",
      "Net Loan Portfolio (Balance Sheet Portfolio) (in INR)": "NetLoanPortfolio",
      "Off Balance Sheet Portfolio / Managed Portfolio (in INR)": "OffBalanceSheetPortfolio",
      "Number of Loan Disbursed (in Numbers) (Quarter)": "LoanDisbursedQuarter",
      "Loan Amount Disbursed (in INR) (Quarter)": "LoanAmountDisbursedQuarter",
      "Repayment amount due (excluding overdue, prepayment and foreclosure demand) (in INR)": "RepaymentAmountDue",
      "Repayment amount collected (excluding overdue, prepayment and foreclosure collected) (in INR)": "RepaymentAmountCollected",
      "Pre-payment amount collected (in INR)": "PrePaymentAmountCollected",
    }
  }
};
