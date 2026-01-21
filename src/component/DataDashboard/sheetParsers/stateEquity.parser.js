export const parseStateEquitySheet = (rows, formData) => {
  const STATES = [];

  rows.forEach(row => {
    // ✅ Column A must be serial number (1,2,3...)
    if (typeof row.__EMPTY !== "number") return;

    // ✅ Column B must be actual state name
    if (!row.__EMPTY_1 || typeof row.__EMPTY_1 !== "string") return;

    const stateObj = {
      StateName: row.__EMPTY_1 || "",
      NumberOfEmployees: row.__EMPTY_2 || "",
      NumberOfDistricts: row.__EMPTY_3 || "",
      NumberOfBranches: row.__EMPTY_4 || "",
      AssetsUnderManagement: row.__EMPTY_5 || "",
      NumberOfActiveBorrowers: row.__EMPTY_6 || "",
      PortfolioRisk30: row.__EMPTY_7 || "",
      PortfolioRisk60: row.__EMPTY_8 || "",
      PortfolioRisk90: row.__EMPTY_9 || "",
      PortfolioRisk180: row.__EMPTY_10 || "",
      NetLoanPortfolio: row.__EMPTY_11 || "",
      OnBalanceSheetRisk30: row.__EMPTY_12 || "",
      OnBalanceSheetRisk60: row.__EMPTY_13 || "",
      OnBalanceSheetRisk90: row.__EMPTY_14 || "",
      OnBalanceSheetRisk180: row.__EMPTY_15 || "",
      OffBalanceSheetPortfolio: row.__EMPTY_16 || "",
      OffBalanceSheetRisk30: row.__EMPTY_17 || "",
      OffBalanceSheetRisk60: row.__EMPTY_18 || "",
      OffBalanceSheetRisk90: row.__EMPTY_19 || "",
      OffBalanceSheetRisk180: row.__EMPTY_20 || "",
      LoanDisbursedQuarter: row.__EMPTY_21 || "",
      LoanAmountDisbursedQuarter: row.__EMPTY_22 || "",
      RepaymentAmountDue: row.__EMPTY_23 || "",
      RepaymentAmountCollected: row.__EMPTY_24 || "",
      PrePaymentAmountCollected: row.__EMPTY_25 || ""
    };

    STATES.push(stateObj);
  });

  formData.States = STATES;
  return formData;
};
