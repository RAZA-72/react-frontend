import * as XLSX from "xlsx";
import formFields from "../data/FormFields";

//save formdata to local storage
export const saveUserFormData = (data) => {
  localStorage.setItem("userFormData", JSON.stringify(data));
};

//retrieve userFormData from local storage
export const loadUserFormData = () => {
  const data = localStorage.getItem("userFormData");
  return data ? JSON.parse(data) : null;
};

//clear local storage data after final submission
export const clearUserFormData = () => {
  localStorage.removeItem("userFormData");
};

// function to handle excel upload file
// export const handleFileUpload = (selectedFile, setFormData) => {
//   if (!selectedFile) {
//     alert("Please select an Excel file first!");
//     return;
//   }

//   const reader = new FileReader();

//   reader.onload = (e) => {
//     const workbook = XLSX.read(e.target.result, { type: "array" });
//     const sheet = workbook.Sheets["Overview"];

//     if (!sheet) {
//       alert("Overview sheet not found");
//       return;
//     }

//     const rows = XLSX.utils.sheet_to_json(sheet, {
//       header: 1,
//       defval: ""
//     });

//     let updatedFormData =
//       loadUserFormData() || JSON.parse(JSON.stringify(formFields));

//     const normalize = (str) =>
//       String(str)
//         .replace(/\s+/g, " ")
//         .replace(/\u00A0/g, " ")
//         .trim()
//         .toLowerCase();

//     rows.forEach(([rawLabel, value]) => {
//       if (!rawLabel) return;

//       const label = normalize(rawLabel);

//       console.log("MAP TRY 👉", label, value); // 🔥 DEBUG LOG

//       switch (label) {
//         // Infrastructure
//         case normalize("Employees (in Numbers)"):
//           updatedFormData.Infrastructure.Employees = value;
//           break;

//         case normalize("Loan Officers (in Numbers)"):
//           updatedFormData.Infrastructure.LoanOfficers = value;
//           break;

//         case normalize("Districts (in Numbers)"):
//           updatedFormData.Infrastructure.Districts = value;
//           break;

//         case normalize("Branches (in Numbers)"):
//           updatedFormData.Infrastructure.Branches = value;
//           break;

//         // Balance Sheet
//         case normalize("Aggregate Loan Provisions (in INR)"):
//           updatedFormData.BalanceSheetFigures.AggregateLoanProvisions = value;
//           break;

//         case normalize("Total cash in hand and in bank (in INR)"):
//           updatedFormData.BalanceSheetFigures.TotalCash = value;
//           break;

//         case normalize("Total Assets (in INR)"):
//           updatedFormData.BalanceSheetFigures.TotalAssets = value;
//           break;

//         case normalize("Outstanding Borrowings (in INR)"):
//           updatedFormData.BalanceSheetFigures.OutstandingBorrowings = value;
//           break;

//         case normalize("Share capital (in INR)"):
//           updatedFormData.BalanceSheetFigures.ShareCapital = value;
//           break;

//         case normalize("Reserves and surplus (in INR)"):
//           updatedFormData.BalanceSheetFigures.ReservesAndSurplus = value;
//           break;

//         // Disbursement (Quarter)
//         case normalize("Number of Loan Disbursed (in Numbers)"):
//           updatedFormData.LoanDisbursedQuarter = value;
//           break;

//         case normalize("Loan Amount Disbursed (in INR)"):
//           updatedFormData.LoanAmountDisbursedQuarter = value;
//           break;

//         // Cashless
//         case normalize("% Loan amount disbursed in cash-less mode"):
//           updatedFormData.PercentLoanDisbursedCashless = value;
//           break;

//         case normalize("% Loan amount collected in cash-less mode"):
//           updatedFormData.PercentLoanCollectedCashless = value;
//           break;

//         default:
//           break;
//       }
//     });

//     saveUserFormData(updatedFormData);
//     setFormData(updatedFormData);

//     alert("Overview imported successfully ✅");
//   };

//   reader.readAsArrayBuffer(selectedFile);
// };


// export const handleFileUpload = (selectedFile, onSuccess) => {
//   if (!selectedFile) {
//     alert("Please select an Excel file first!");
//     return;
//   }

//   const reader = new FileReader();

//   reader.onload = (e) => {
//     const workbook = XLSX.read(e.target.result, { type: "array" });
//     const sheet = workbook.Sheets["Overview"];

//     if (!sheet) {
//       alert("Overview sheet not found");
//       return;
//     }

//     const rows = XLSX.utils.sheet_to_json(sheet, {
//       header: 4,
//       defval: ""
//     });
//     console.log("rows in userform",JSON.stringify(rows,null,2))

//     let updatedFormData = loadUserFormData()
//       ? JSON.parse(JSON.stringify(loadUserFormData()))
//       : JSON.parse(JSON.stringify(formFields));

//     const clean = (s) =>
//       String(s).replace(/\s+/g, " ").trim().toLowerCase();

//     rows.forEach(([label, value]) => {
//       if (!label) return;

//       switch (clean(label)) {
//         case clean("Employees (in Numbers)"):
//           updatedFormData.Infrastructure.Employees = value;
//           break;

//         case clean("Loan Officers (in Numbers)"):
//           updatedFormData.Infrastructure.LoanOfficers = value;
//           break;

//         case clean("Districts (in Numbers)"):
//           updatedFormData.Infrastructure.Districts = value;
//           break;

//         case clean("Branches (in Numbers)"):
//           updatedFormData.Infrastructure.Branches = value;
//           break;

//         case clean("Aggregate Loan Provisions (in INR)"):
//           updatedFormData.BalanceSheetFigures.AggregateLoanProvisions = value;
//           break;

//         case clean("Total cash in hand and in bank (in INR)"):
//           updatedFormData.BalanceSheetFigures.TotalCash = value;
//           break;

//         case clean("Total Assets (in INR)"):
//           updatedFormData.BalanceSheetFigures.TotalAssets = value;
//           break;

//         case clean("Outstanding Borrowings (in INR)"):
//           updatedFormData.BalanceSheetFigures.OutstandingBorrowings = value;
//           break;

//         case clean("Share capital (in INR)"):
//           updatedFormData.BalanceSheetFigures.ShareCapital = value;
//           break;

//         case clean("Reserves and surplus (in INR)"):
//           updatedFormData.BalanceSheetFigures.ReservesAndSurplus = value;
//           break;

//         case clean("Number of Loan Disbursed (in Numbers)"):
//           updatedFormData.LoanDisbursedQuarter = value;
//           break;

//         case clean("Loan Amount Disbursed (in INR)"):
//           updatedFormData.LoanAmountDisbursedQuarter = value;
//           break;

//         case clean("% Loan amount disbursed in cash-less mode"):
//           updatedFormData.PercentLoanDisbursedCashless = value;
//           break;

//         case clean("% Loan amount collected in cash-less mode"):
//           updatedFormData.PercentLoanCollectedCashless = value;
//           break;

//         default:
//           break;
//       }
//     });

//     saveUserFormData(updatedFormData);

//     // 🔥 IMPORTANT
//     if (typeof onSuccess === "function") {
//       onSuccess(updatedFormData);
//     }

//     alert("Excel imported successfully ✅");
//   };

//   reader.readAsArrayBuffer(selectedFile);
// };

export const handleFileUpload = (selectedFile, onSuccess) => {
  if (!selectedFile) {
    alert("Please select an Excel file first!");
    return;
  }

  const reader = new FileReader();

  reader.onload = (e) => {
    const workbook = XLSX.read(e.target.result, { type: "array" });
    const sheet = workbook.Sheets["Overview"];

    if (!sheet) {
      alert("Overview sheet not found");
      return;
    }

    const rows = XLSX.utils.sheet_to_json(sheet, {
      header: 4,
      defval: ""
    });

    let updatedFormData = loadUserFormData()
      ? JSON.parse(JSON.stringify(loadUserFormData()))
      : JSON.parse(JSON.stringify(formFields));

    const clean = (s) =>
      String(s).replace(/\s+/g, " ").trim().toLowerCase();

    rows.forEach((row) => {
      const label = row.__EMPTY_1;
      const value = row.__EMPTY_2;

      if (!label) return;

      switch (clean(label)) {
        case clean("Employees (in Numbers)"):
          updatedFormData.Infrastructure.Employees = value;
          break;

        case clean("Loan Officers (in Numbers)"):
          updatedFormData.Infrastructure.LoanOfficers = value;
          break;

        case clean("Districts (in Numbers)"):
          updatedFormData.Infrastructure.Districts = value;
          break;

        case clean("Branches (in Numbers)"):
          updatedFormData.Infrastructure.Branches = value;
          break;

        case clean("Aggregate Loan Provisions (in INR)"):
          updatedFormData.BalanceSheetFigures.AggregateLoanProvisions = value;
          break;

        case clean("Total cash in hand and in bank (in INR)"):
          updatedFormData.BalanceSheetFigures.TotalCash = value;
          break;

        case clean("Total Assets (in INR)"):
          updatedFormData.BalanceSheetFigures.TotalAssets = value;
          break;

        case clean("Outstanding Borrowings (in INR)"):
          updatedFormData.BalanceSheetFigures.OutstandingBorrowings = value;
          break;

        case clean("Share capital (in INR)"):
          updatedFormData.BalanceSheetFigures.ShareCapital = value;
          break;

        case clean("Reserves and surplus (in INR)"):
          updatedFormData.BalanceSheetFigures.ReservesAndSurplus = value;
          break;

        case clean("Number of Loan Disbursed (in Numbers)"):
          updatedFormData.LoanDisbursedQuarter = value;
          break;

        case clean("Loan Amount Disbursed (in INR)"):
          updatedFormData.LoanAmountDisbursedQuarter = value;
          break;

        case clean("% Loan amount disbursed in cash-less mode"):
          updatedFormData.PercentLoanDisbursedCashless = value;
          break;

        case clean("% Loan amount collected in cash-less mode"):
          updatedFormData.PercentLoanCollectedCashless = value;
          break;

        default:
          break;
      }
    });

    saveUserFormData(updatedFormData);

    if (typeof onSuccess === "function") {
      onSuccess(updatedFormData);
    }

    alert("Excel imported successfully ✅");
  };

  reader.readAsArrayBuffer(selectedFile);
};

