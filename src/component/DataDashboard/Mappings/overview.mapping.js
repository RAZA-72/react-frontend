export const OVERVIEW_MAPPING = {
  sheetName: "Overview",

  tables: {
    infrastructure: {
      start: "Infrastructure:",
      fields: {
        "Employees (in Numbers)": "Infrastructure.Employees",
        "Loan Officers (in Numbers)": "Infrastructure.LoanOfficers",
        "Districts (in Numbers)": "Infrastructure.Districts",
        "Branches (in Numbers)": "Infrastructure.Branches"
      }
    },

    balanceSheet: {
      start: "Balance Sheet Figures:",
      fields: {
        "Aggregate Loan Provisions (in INR)": "BalanceSheetFigures.AggregateLoanProvisions",
        "Total cash in hand and in bank (in INR)": "BalanceSheetFigures.TotalCash",
        "Total Assets (in INR)": "BalanceSheetFigures.TotalAssets",
        "Outstanding Borrowings (in INR)": "BalanceSheetFigures.OutstandingBorrowings",
        "Share capital (in INR)": "BalanceSheetFigures.ShareCapital",
        "Reserves and surplus (in INR)": "BalanceSheetFigures.ReservesAndSurplus"
      }
    },

    disbursementQuarter: {
      start: "Disbursements - During Quarter",
      fields: {
        "Number of Loan Disbursed (in Numbers)": "LoanDisbursedQuarter",
        "Loan Amount Disbursed (in INR)": "LoanAmountDisbursedQuarter"
      }
    },

    cashlessQuarter: {
      start: "Cashless operations During quarter",
      fields: {
        "% Loan amount disbursed in cash-less mode": "PercentLoanDisbursedCashless",
        "% Loan amount collected in cash-less mode": "PercentLoanCollectedCashless"
      }
    }
  }
};



//from razzaq 
export const EQUITY_MAPPING = {
  sheetName: "Equity",

  tables: {
    shareholdersFunds: {
      start: "Shareholders' Funds",
      fields: {
        "Share capital": "Equity.ShareholdersFunds.ShareCapital",
        "Reserves and Surplus": "Equity.ShareholdersFunds.ReservesAndSurplus",
        "Share of equity (Rs)": "Equity.ShareholdersFunds.ShareOfEquity"
      }
    },

    foreignEquity: {
      start: "Foreign (Total)",
      fields: {
        "Foreign Direct Investment (FDI)": "Equity.Foreign.FDI",
        "Foreign portfolio investment (FPI)": "Equity.Foreign.FPI",
        "Foreign Institutional Investment (FII)": "Equity.Foreign.FII",
        "Foreign Promoter": "Equity.Foreign.Promoter",
        "Others": "Equity.Foreign.Others"
      }
    },

    domesticEquity: {
      start: "Domestic (Total)",
      fields: {
        "Domestic Promoter": "Equity.Domestic.Promoter",
        "Others": "Equity.Domestic.Others"
      }
    },

    freshEquityQuarter: {
      start: "Amount of fresh equity received during the Quarter (Rs)",
      fields: {
        "Total": "Equity.FreshEquity.Total",

        "Foreign": "Equity.FreshEquity.Foreign.Total",
        "Foreign Direct Investment (FDI)": "Equity.FreshEquity.Foreign.FDI",
        "Foreign portfolio investment (FPI)": "Equity.FreshEquity.Foreign.FPI",
        "Foreign Institutional Investment (FII)": "Equity.FreshEquity.Foreign.FII",
        "Promoter": "Equity.FreshEquity.Foreign.Promoter",
        "Others": "Equity.FreshEquity.Foreign.Others",

        "Domestic (Total)": "Equity.FreshEquity.Domestic.Total",
        "Domestic Promoter": "Equity.FreshEquity.Domestic.Promoter",
        "Others (Domestic)": "Equity.FreshEquity.Domestic.Others"
      }
    },

    existingEquityDetails: {
      start: "Details of existing equity",
      columns: {
        "Equity provider": "provider",
        "Type": "type",
        "Amount": "amount"
      },
      target: "Equity.ExistingEquityDetails"
    },

    freshEquityDetails: {
      start: "Details of fresh equity received during the quarter",
      columns: {
        "Equity provider": "provider",
        "Type": "type",
        "Amount": "amount"
      },
      target: "Equity.FreshEquityDetails"
    },

    buybackEquityDetails: {
      start: "Details of equity bought back/redeemed during the quarter",
      columns: {
        "Equity provider": "provider",
        "Type": "type",
        "Amount": "amount"
      },
      target: "Equity.BuybackEquityDetails"
    }
  }
};
