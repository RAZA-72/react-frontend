export const ALM_MAPPING = {
  sheetName: "ALM",

  tables: {
    assets: {
      start: "Assets",
      fields: {
        "Cash & bank balances": "ALM.Assets.CashBank",
        "Cash collateral": "ALM.Assets.CashCollateral",
        "Investments": "ALM.Assets.Investments",
        "On-balance sheet loan portfolio": "ALM.Assets.LoanPortfolio",
        "Interest on loan portfolio": "ALM.Assets.InterestOnLoans",
        "Fixed assets": "ALM.Assets.FixedAssets",
        "Other assets": "ALM.Assets.OtherAssets",
        "Total assets": "ALM.Assets.Total"
      }
    },

    liabilities: {
      start: "Liabilities",
      fields: {
        "Loan repayable": "ALM.Liabilities.LoanRepayable",
        "Interest payable": "ALM.Liabilities.InterestPayable",
        "Operational expenses payable": "ALM.Liabilities.OperationalExpenses",
        "Other liabilities": "ALM.Liabilities.OtherLiabilities",
        "Total liabilities": "ALM.Liabilities.Total"
      }
    },

    equity: {
      start: "Total equity",
      fields: {
        "Total equity": "ALM.Equity.Total"
      }
    },

    totalLE: {
      start: "Total liabilities & equity",
      fields: {
        "Total liabilities & equity": "ALM.TotalLiabilitiesEquity"
      }
    },

    gap: {
      start: "Asset – (Total Liability + Equity) Gap",
      fields: {
        "Asset – (Total Liability + Equity) Gap": "ALM.Gap"
      }
    },

    funding: {
      start: "Funding requirements",
      fields: {
        "Loan disbursements": "ALM.Funding.LoanDisbursements"
      }
    }
  }
};
