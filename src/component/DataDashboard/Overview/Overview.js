// import "./Overview.css";
// import React, { useState, useEffect } from "react";
// import { loadUserFormData } from "../utils/StorageHelper";

// function Overview({
//   formData,
//   handleChange,
//   handleStateDataChange,
//   setFormData,
//   selectedMonthName,
//   setSelectedMonthName,
//   selectedDuring_FY,
//   setselectedDuring_FY  
// }) {

//   const [numStates, setNumStates] = useState(() => {
//     const storedData = loadUserFormData();
//     return storedData && storedData.States ? storedData.States.length : 1;
//   });

//   const [selectedStates, setSelectedStates] = useState(
//     Array(numStates).fill("")
//   );

//   useEffect(() => {
//     setFormData(function (prevData) {
//       if (!prevData || !prevData.States) {
//         return prevData;
//       }
//       var updatedStates = [].concat(prevData.States);
//       while (updatedStates.length < numStates) {
//         updatedStates.push({ StateName: "" });
//       }
//       updatedStates = updatedStates.slice(0, numStates);
//       return Object.assign({}, prevData, { States: updatedStates });
//     });
//   }, [numStates, setFormData]);

//   // Helper to safely get nested values
//   const getValue = (obj, ...keys) => {
//     return keys.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : ""), obj);
//   };

//   // Reusable input component - FIXED CURSOR ISSUE
//   const FormInput = ({ label, value, section, field, span }) => (
//     <div style={{ gridColumn: span > 1 ? 'span ' + span : 'auto' }}>
//       <label style={{
//         display: "block",
//         fontSize: "12px",
//         fontWeight: "700",
//         color: "#1f2937",
//         marginBottom: "6px",
//         letterSpacing: "0.3px"
//       }}>
//         {label}
//       </label>
//       <input
//         type="text"
//         style={{
//           width: "100%",
//           height: "38px",
//           padding: "0 12px",
//           border: "1px solid #e5e7eb",
//           borderRadius: "6px",
//           fontSize: "13px",
//           fontWeight: "500",
//           color: "#111827",
//           outline: "none",
//           transition: "border 0.2s",
//           backgroundColor: "#ffffff"
//         }}
//         value={value || ""}
//         onChange={(e) => handleChange(section, field, e.target.value)}
//         onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//         onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//       />
//     </div>
//   );

//   // Section header component
//   const SectionHeader = ({ title, date }) => (
//     <div style={{
//       background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
//       padding: "14px 20px",
//       borderRadius: "10px 10px 0 0",
//       marginTop: "24px",
//       marginBottom: "0",
//     }}>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <h6 style={{
//           color: "#ffffff",
//           fontSize: "13px",
//           fontWeight: "800",
//           margin: 0,
//           textTransform: "uppercase",
//           letterSpacing: "1px"
//         }}>
//           {title}
//         </h6>
//         {date && (
//           <span style={{
//             color: "#ffffff",
//             fontSize: "12px",
//             fontWeight: "600",
//             backgroundColor: "rgba(255,255,255,0.2)",
//             padding: "5px 14px",
//             borderRadius: "20px"
//           }}>
//             {date}
//           </span>
//         )}
//       </div>
//     </div>
//   );

//   // Calculated field component
//   const CalculatedField = ({ label, value }) => (
//     <div style={{
//       padding: "14px 18px",
//       backgroundColor: "#f0f9ff",
//       borderRadius: "8px",
//       borderLeft: "4px solid #2B60AD",
//       marginBottom: "16px"
//     }}>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <span style={{ fontSize: "13px", fontWeight: "700", color: "#1e40af", letterSpacing: "0.2px" }}>
//           {label}
//         </span>
//         <span style={{ fontSize: "16px", fontWeight: "800", color: "#1e40af" }}>
//           {value || 0}
//         </span>
//       </div>
//     </div>
//   );

//   // Grid container component
//   const GridContainer = ({ children, columns }) => (
//     <div style={{
//       backgroundColor: "#ffffff",
//       padding: "24px",
//       borderRadius: "0 0 10px 10px",
//       boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//       marginBottom: "8px"
//     }}>
//       <div style={{
//         display: "grid",
//         gridTemplateColumns: 'repeat(' + columns + ', 1fr)',
//         gap: "20px",
//       }}>
//         {children}
//       </div>
//     </div>
//   );

//   return (
//     <div style={{
//       backgroundColor: "#f8f9fa",
//       padding: "20px",
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     }}>
      
//       {/* INFRASTRUCTURE SECTION */}
//       <SectionHeader title="Infrastructure" date={selectedMonthName} />
//       <GridContainer columns={3}>
//         <FormInput 
//           label="Employees (Numbers)" 
//           value={getValue(formData, "Infrastructure", "Employees")}
//           section="Infrastructure"
//           field="Employees"
//         />
//         <FormInput 
//           label="Loan Officers (Numbers)" 
//           value={getValue(formData, "Infrastructure", "LoanOfficers")}
//           section="Infrastructure"
//           field="LoanOfficers"
//         />
//         <FormInput 
//           label="Districts (Numbers)" 
//           value={getValue(formData, "Infrastructure", "Districts")}
//           section="Infrastructure"
//           field="Districts"
//         />
//         <FormInput 
//           label="Branches (Numbers)" 
//           value={getValue(formData, "Infrastructure", "Branches")}
//           section="Infrastructure"
//           field="Branches"
//           span={3}
//         />
//       </GridContainer>

//       {/* BALANCE SHEET FIGURES */}
//       <SectionHeader title="Balance Sheet Figures" date={selectedMonthName} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "24px",
//         borderRadius: "0 0 10px 10px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//       }}>
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(2, 1fr)",
//           gap: "20px",
//           marginBottom: "16px"
//         }}>
//           <FormInput 
//             label="Aggregate Loan Provisions (INR)" 
//             value={getValue(formData, "BalanceSheetFigures", "AggregateLoanProvisions")}
//             section="BalanceSheetFigures"
//             field="AggregateLoanProvisions"
//           />
//           <FormInput 
//             label="Total Cash in Hand and Bank (INR)" 
//             value={getValue(formData, "BalanceSheetFigures", "TotalCash")}
//             section="BalanceSheetFigures"
//             field="TotalCash"
//           />
//           <FormInput 
//             label="Total Assets (INR)" 
//             value={getValue(formData, "BalanceSheetFigures", "TotalAssets")}
//             section="BalanceSheetFigures"
//             field="TotalAssets"
//           />
//           <FormInput 
//             label="Outstanding Borrowings (INR)" 
//             value={getValue(formData, "BalanceSheetFigures", "OutstandingBorrowings")}
//             section="BalanceSheetFigures"
//             field="OutstandingBorrowings"
//           />
//         </div>
        
//         <CalculatedField 
//           label="Total Equity" 
//           value={getValue(formData, "BalanceSheetFigures", "TotalEquity")}
//         />
        
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(2, 1fr)",
//           gap: "20px"
//         }}>
//           <FormInput 
//             label="Share Capital (INR)" 
//             value={getValue(formData, "BalanceSheetFigures", "ShareCapital")}
//             section="BalanceSheetFigures"
//             field="ShareCapital"
//           />
//           <FormInput 
//             label="Reserves and Surplus (INR)" 
//             value={getValue(formData, "BalanceSheetFigures", "ReservesAndSurplus")}
//             section="BalanceSheetFigures"
//             field="ReservesAndSurplus"
//           />
//         </div>
//       </div>

//       {/* LOAN SECTION */}
//       <SectionHeader title="Loan Details" date={selectedMonthName} />
      
//       {/* On Balance Sheet Portfolio */}
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "20px 24px 24px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//       }}>
//         <CalculatedField 
//           label="On Balance Sheet Portfolio" 
//           value={formData && formData.OnBalanceSheetPortfolio}
//         />
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(2, 1fr)",
//           gap: "20px"
//         }}>
//           <FormInput 
//             label="Owned Loan Portfolio (INR)" 
//             value={formData && formData.OwnedLoanPortfolio}
//             section=""
//             field="OwnedLoanPortfolio"
//           />
//           <FormInput 
//             label="Outstanding Loans for On-BS Portfolio (Numbers)" 
//             value={formData && formData.OutstandingLoansOnBSPortfolio}
//             section=""
//             field="OutstandingLoansOnBSPortfolio"
//           />
//         </div>
//       </div>

//       {/* On Balance Sheet Managed Portfolio */}
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "20px 24px 24px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//         marginTop: "2px"
//       }}>
//         <CalculatedField 
//           label="On Balance Sheet Managed Portfolio" 
//           value={formData && formData.OnBalanceSheetManagedPortfolio}
//         />
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(2, 1fr)",
//           gap: "20px"
//         }}>
//           <FormInput 
//             label="SPV Part of Portfolio (PTC) (INR)" 
//             value={formData && formData.SPVPartOfPortfolio}
//             section=""
//             field="SPVPartOfPortfolio"
//           />
//           <FormInput 
//             label="Securitized (Created thru SPV) (INR)" 
//             value={formData && formData.SecuritizedCreatedThroughSPV}
//             section=""
//             field="SecuritizedCreatedThroughSPV"
//           />
//           <FormInput 
//             label="Assigned / Bilateral Agreement (INR)" 
//             value={formData && formData.AssignedBilateralAgreement}
//             section=""
//             field="AssignedBilateralAgreement"
//           />
//           <FormInput 
//             label="Outstanding Loans for On-BS Managed (Numbers)" 
//             value={formData && formData.OutstandingLoansOnBSManagedPortfolio}
//             section=""
//             field="OutstandingLoansOnBSManagedPortfolio"
//           />
//         </div>
//       </div>

//       {/* Off Balance Sheet Managed Portfolio */}
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "20px 24px 24px",
//         borderRadius: "0 0 10px 10px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//         marginTop: "2px"
//       }}>
//         <CalculatedField 
//           label="Off Balance Sheet Managed Portfolio" 
//           value={formData && formData.OffBalanceSheetManagedPortfolio}
//         />
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(2, 1fr)",
//           gap: "20px",
//           marginBottom: "20px"
//         }}>
//           <FormInput 
//             label="SPV Part of Portfolio (PTC) (INR)" 
//             value={formData && formData.SPVPartOfPortfolioOffBS}
//             section=""
//             field="SPVPartOfPortfolioOffBS"
//           />
//           <FormInput 
//             label="Securitized (Created thru SPV) (INR)" 
//             value={formData && formData.SecuritizedCreatedThroughSPVOffBS}
//             section=""
//             field="SecuritizedCreatedThroughSPVOffBS"
//           />
//           <FormInput 
//             label="Assigned / Bilateral Agreement (INR)" 
//             value={formData && formData.AssignedBilateralAgreementOffBS}
//             section=""
//             field="AssignedBilateralAgreementOffBS"
//           />
//           <FormInput 
//             label="Loan Portfolio Created as BC (INR)" 
//             value={formData && formData.LoanPortfolioCreatedBC}
//             section=""
//             field="LoanPortfolioCreatedBC"
//           />
//         </div>
        
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "1fr",
//           gap: "20px"
//         }}>
//           <FormInput 
//             label="Outstanding Loans for Off-BS Managed (Numbers)" 
//             value={formData && formData.OutstandingLoansOffBSManagedPortfolio}
//             section=""
//             field="OutstandingLoansOffBSManagedPortfolio"
//           />
//         </div>
        
//         <CalculatedField 
//           label="Assets Under Management AUM (On BS + Off BS)" 
//           value={formData && formData.AUM}
//         />
        
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "1fr",
//           gap: "20px"
//         }}>
//           <FormInput 
//             label="Total Clients (Active Borrowers) (Numbers)" 
//             value={formData && formData.TotalClients}
//             section=""
//             field="TotalClients"
//           />
//         </div>
//       </div>

//       {/* PORTFOLIO AT RISK */}
//       <SectionHeader title="Portfolio at Risk" date={selectedMonthName} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "24px",
//         borderRadius: "0 0 10px 10px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//       }}>
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(2, 1fr)",
//           gap: "16px",
//           marginBottom: "20px"
//         }}>
//           <CalculatedField label="Portfolio at Risk > 30 days (INR)" value={formData && formData.PortfolioAtRisk30} />
//           <CalculatedField label="Portfolio at Risk > 60 days (INR)" value={formData && formData.PortfolioAtRisk60} />
//           <CalculatedField label="Portfolio at Risk > 90 days (INR)" value={formData && formData.PortfolioAtRisk90} />
//           <CalculatedField label="Portfolio at Risk > 180 days (INR)" value={formData && formData.PortfolioAtRisk180} />
//         </div>

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(2, 1fr)",
//           gap: "20px"
//         }}>
//           <FormInput 
//             label="On BS Portfolio at Risk > 30 days (INR)" 
//             value={formData && formData.OnBalanceSheetPortfolioAtRisk30}
//             section=""
//             field="OnBalanceSheetPortfolioAtRisk30"
//           />
//           <FormInput 
//             label="On BS Portfolio at Risk > 60 days (INR)" 
//             value={formData && formData.OnBalanceSheetPortfolioAtRisk60}
//             section=""
//             field="OnBalanceSheetPortfolioAtRisk60"
//           />
//           <FormInput 
//             label="On BS Portfolio at Risk > 90 days (INR)" 
//             value={formData && formData.OnBalanceSheetPortfolioAtRisk90}
//             section=""
//             field="OnBalanceSheetPortfolioAtRisk90"
//           />
//           <FormInput 
//             label="On BS Portfolio at Risk > 180 days (INR)" 
//             value={formData && formData.OnBalanceSheetPortfolioAtRisk180}
//             section=""
//             field="OnBalanceSheetPortfolioAtRisk180"
//           />
//           <FormInput 
//             label="Off BS Portfolio at Risk > 30 days (INR)" 
//             value={formData && formData.OffBalanceSheetPortfolioAtRisk30}
//             section=""
//             field="OffBalanceSheetPortfolioAtRisk30"
//           />
//           <FormInput 
//             label="Off BS Portfolio at Risk > 60 days (INR)" 
//             value={formData && formData.OffBalanceSheetPortfolioAtRisk60}
//             section=""
//             field="OffBalanceSheetPortfolioAtRisk60"
//           />
//           <FormInput 
//             label="Off BS Portfolio at Risk > 90 days (INR)" 
//             value={formData && formData.OffBalanceSheetPortfolioAtRisk90}
//             section=""
//             field="OffBalanceSheetPortfolioAtRisk90"
//           />
//           <FormInput 
//             label="Off BS Portfolio at Risk > 180 days (INR)" 
//             value={formData && formData.OffBalanceSheetPortfolioAtRisk180}
//             section=""
//             field="OffBalanceSheetPortfolioAtRisk180"
//           />
//         </div>
//       </div>

//       {/* DISBURSEMENTS - FINANCIAL YEAR */}
//       <SectionHeader title="Disbursements - During Financial Year" date={selectedDuring_FY} />
//       <GridContainer columns={2}>
//         <FormInput 
//           label="Number of Loans Disbursed (Numbers)" 
//           value={formData && formData.LoanDisbursedQuarter}
//           section=""
//           field="LoanDisbursedQuarter"
//         />
//         <FormInput 
//           label="Loan Amount Disbursed (INR)" 
//           value={formData && formData.LoanAmountDisbursedQuarter}
//           section=""
//           field="LoanAmountDisbursedQuarter"
//         />
//       </GridContainer>

//       {/* DISBURSEMENTS - QUARTER */}
//       <SectionHeader title="Disbursements - During Quarter" date={selectedMonthName} />
//       <GridContainer columns={2}>
//         <FormInput 
//           label="Number of Loans Disbursed (Numbers)" 
//           value={formData && formData.LoanDisbursedQuarter}
//           section=""
//           field="LoanDisbursedQuarter"
//         />
//         <FormInput 
//           label="Loan Amount Disbursed (INR)" 
//           value={formData && formData.LoanAmountDisbursedQuarter}
//           section=""
//           field="LoanAmountDisbursedQuarter"
//         />
//       </GridContainer>

//       {/* COLLECTIONS - FINANCIAL YEAR */}
//       <SectionHeader title="Collections - During Financial Year" date={selectedDuring_FY} />
//       <GridContainer columns={2}>
//         <FormInput 
//           label="Repayment Amount Due (INR)" 
//           value={formData && formData.RepaymentAmountDue}
//           section=""
//           field="RepaymentAmountDue"
//         />
//         <FormInput 
//           label="Repayment Amount Collected (INR)" 
//           value={formData && formData.RepaymentAmountCollected}
//           section=""
//           field="RepaymentAmountCollected"
//         />
//         <FormInput 
//           label="Pre-payment Amount Collected (INR)" 
//           value={formData && formData.PrePaymentAmountCollected}
//           section=""
//           field="PrePaymentAmountCollected"
//           span={2}
//         />
//       </GridContainer>

//       {/* COLLECTIONS - QUARTER */}
//       <SectionHeader title="Collections - During Quarter" date={selectedMonthName} />
//       <GridContainer columns={2}>
//         <FormInput 
//           label="Repayment Amount Due (INR)" 
//           value={formData && formData.RepaymentAmountDue}
//           section=""
//           field="RepaymentAmountDue"
//         />
//         <FormInput 
//           label="Repayment Amount Collected (INR)" 
//           value={formData && formData.RepaymentAmountCollected}
//           section=""
//           field="RepaymentAmountCollected"
//         />
//         <FormInput 
//           label="Pre-payment Amount Collected (INR)" 
//           value={formData && formData.PrePaymentAmountCollected}
//           section=""
//           field="PrePaymentAmountCollected"
//           span={2}
//         />
//       </GridContainer>

//       {/* FUNDING - FINANCIAL YEAR */}
//       <SectionHeader title="Total Funding/Borrowing - During Financial Year" date={selectedDuring_FY} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "24px",
//         borderRadius: "0 0 10px 10px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//       }}>
//         <CalculatedField label="Total Funding Received" value={0} />
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(2, 1fr)",
//           gap: "20px"
//         }}>
//           <FormInput 
//             label="Funding from Banks (INR)" 
//             value={formData && formData.FundingReceivedFromBanks}
//             section=""
//             field="FundingReceivedFromBanks"
//           />
//           <FormInput 
//             label="Funding from Other FIs (INR)" 
//             value={formData && formData.FundingReceivedFromOtherFIs}
//             section=""
//             field="FundingReceivedFromOtherFIs"
//           />
//           <FormInput 
//             label="Securitization During Period (INR)" 
//             value={formData && formData.SecuritizationDuringPeriod}
//             section=""
//             field="SecuritizationDuringPeriod"
//             span={2}
//           />
//         </div>
//       </div>

//       {/* FUNDING - QUARTER */}
//       <SectionHeader title="Total Funding/Borrowing - During Quarter" date={selectedMonthName} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "24px",
//         borderRadius: "0 0 10px 10px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//       }}>
//         <CalculatedField label="Total Funding Received" value={0} />
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(2, 1fr)",
//           gap: "20px"
//         }}>
//           <FormInput 
//             label="Funding from Banks (INR)" 
//             value={formData && formData.FundingReceivedFromBanks}
//             section=""
//             field="FundingReceivedFromBanks"
//           />
//           <FormInput 
//             label="Funding from Other FIs (INR)" 
//             value={formData && formData.FundingReceivedFromOtherFIs}
//             section=""
//             field="FundingReceivedFromOtherFIs"
//           />
//           <FormInput 
//             label="Securitization During Period (INR)" 
//             value={formData && formData.SecuritizationDuringPeriod}
//             section=""
//             field="SecuritizationDuringPeriod"
//             span={2}
//           />
//         </div>
//       </div>

//       {/* CASHLESS OPERATIONS - FINANCIAL YEAR */}
//       <SectionHeader title="Cashless Operations - During Financial Year" date={selectedDuring_FY} />
//       <GridContainer columns={2}>
//         <FormInput 
//           label="% Loan Disbursed Cashless" 
//           value={formData && formData.PercentLoanDisbursedCashless}
//           section=""
//           field="PercentLoanDisbursedCashless"
//         />
//         <FormInput 
//           label="% Loan Collected Cashless" 
//           value={formData && formData.PercentLoanCollectedCashless}
//           section=""
//           field="PercentLoanCollectedCashless"
//         />
//       </GridContainer>

//       {/* CASHLESS OPERATIONS - QUARTER */}
//       <SectionHeader title="Cashless Operations - During Quarter" date={selectedMonthName} />
//       <GridContainer columns={2}>
//         <FormInput 
//           label="% Loan Disbursed Cashless" 
//           value={formData && formData.PercentLoanDisbursedCashless}
//           section=""
//           field="PercentLoanDisbursedCashless"
//         />
//         <FormInput 
//           label="% Loan Collected Cashless" 
//           value={formData && formData.PercentLoanCollectedCashless}
//           section=""
//           field="PercentLoanCollectedCashless"
//         />
//       </GridContainer>

//     </div>
//   );
// }

// export default Overview;


// import "./Overview.css";
// import React, { useState, useEffect } from "react";
// import { loadUserFormData } from "../utils/StorageHelper";

// function Overview({
//   formData,
//   handleChange,
//   handleStateDataChange,
//   setFormData,
//   selectedMonthName,
//   setSelectedMonthName,
//   selectedDuring_FY,
//   setselectedDuring_FY  
// }) {

//   const [numStates, setNumStates] = useState(() => {
//     const storedData = loadUserFormData();
//     return storedData && storedData.States ? storedData.States.length : 1;
//   });

//   const [selectedStates, setSelectedStates] = useState(
//     Array(numStates).fill("")
//   );

//   useEffect(() => {
//     setFormData(function (prevData) {
//       if (!prevData || !prevData.States) {
//         return prevData;
//       }
//       var updatedStates = [].concat(prevData.States);
//       while (updatedStates.length < numStates) {
//         updatedStates.push({ StateName: "" });
//       }
//       updatedStates = updatedStates.slice(0, numStates);
//       return Object.assign({}, prevData, { States: updatedStates });
//     });
//   }, [numStates, setFormData]);

//   // Helper to safely get nested values
//   const getValue = (obj, ...keys) => {
//     return keys.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : ""), obj);
//   };

//   // Reusable input component - compact version
//   const FormInput = ({ label, value, section, field, span }) => (
//     <div style={{ gridColumn: span > 1 ? 'span ' + span : 'auto' }}>
//       <label style={{
//         display: "block",
//         fontSize: "11px",
//         fontWeight: "700",
//         color: "#1f2937",
//         marginBottom: "4px",
//         letterSpacing: "0.2px",
//         textAlign: "left"
//       }}>
//         {label}
//       </label>
//       <input
//         type="text"
//         style={{
//           width: "100%",
//           height: "34px",
//           padding: "0 10px",
//           border: "1px solid #e5e7eb",
//           borderRadius: "6px",
//           fontSize: "13px",
//           fontWeight: "500",
//           color: "#111827",
//           outline: "none",
//           transition: "border 0.2s",
//           backgroundColor: "#ffffff",
//           textAlign: "left"
//         }}
//         value={value || ""}
//         onChange={(e) => handleChange(section, field, e.target.value)}
//         onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//         onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//       />
//     </div>
//   );

//   // Section header component - compact
//   const SectionHeader = ({ title, date }) => (
//     <div style={{
//       background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
//       padding: "10px 16px",
//       borderRadius: "8px 8px 0 0",
//       marginTop: "16px",
//       marginBottom: "0",
//     }}>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <h6 style={{
//           color: "#ffffff",
//           fontSize: "12px",
//           fontWeight: "800",
//           margin: 0,
//           textTransform: "uppercase",
//           letterSpacing: "0.8px",
//           textAlign: "left"
//         }}>
//           {title}
//         </h6>
//         {date && (
//           <span style={{
//             color: "#ffffff",
//             fontSize: "11px",
//             fontWeight: "600",
//             backgroundColor: "rgba(255,255,255,0.2)",
//             padding: "4px 12px",
//             borderRadius: "16px"
//           }}>
//             {date}
//           </span>
//         )}
//       </div>
//     </div>
//   );

//   // Calculated field component - compact
//   const CalculatedField = ({ label, value }) => (
//     <div style={{
//       padding: "10px 14px",
//       backgroundColor: "#f0f9ff",
//       borderRadius: "6px",
//       borderLeft: "3px solid #2B60AD",
//       marginBottom: "10px"
//     }}>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <span style={{ 
//           fontSize: "12px", 
//           fontWeight: "700", 
//           color: "#1e40af", 
//           letterSpacing: "0.2px",
//           textAlign: "left"
//         }}>
//           {label}
//         </span>
//         <span style={{ fontSize: "15px", fontWeight: "800", color: "#1e40af" }}>
//           {value || 0}
//         </span>
//       </div>
//     </div>
//   );

//   // Grid container component - compact with 4 columns
//   const GridContainer = ({ children, columns = 4 }) => (
//     <div style={{
//       backgroundColor: "#ffffff",
//       padding: "16px",
//       borderRadius: "0 0 8px 8px",
//       boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
//       marginBottom: "4px"
//     }}>
//       <div style={{
//         display: "grid",
//         gridTemplateColumns: 'repeat(' + columns + ', 1fr)',
//         gap: "12px",
//       }}>
//         {children}
//       </div>
//     </div>
//   );

//   return (
//     <div style={{
//       backgroundColor: "#f8f9fa",
//       padding: "16px",
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     }}>
      
//       {/* INFRASTRUCTURE SECTION */}
//       <SectionHeader title="Infrastructure" date={selectedMonthName} />
//       <GridContainer columns={4}>
//         <FormInput 
//           label="Employees (Numbers)" 
//           value={getValue(formData, "Infrastructure", "Employees")}
//           section="Infrastructure"
//           field="Employees"
//         />
//         <FormInput 
//           label="Loan Officers (Numbers)" 
//           value={getValue(formData, "Infrastructure", "LoanOfficers")}
//           section="Infrastructure"
//           field="LoanOfficers"
//         />
//         <FormInput 
//           label="Districts (Numbers)" 
//           value={getValue(formData, "Infrastructure", "Districts")}
//           section="Infrastructure"
//           field="Districts"
//         />
//         <FormInput 
//           label="Branches (Numbers)" 
//           value={getValue(formData, "Infrastructure", "Branches")}
//           section="Infrastructure"
//           field="Branches"
//         />
//       </GridContainer>

//       {/* BALANCE SHEET FIGURES */}
//       <SectionHeader title="Balance Sheet Figures" date={selectedMonthName} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "16px",
//         borderRadius: "0 0 8px 8px",
//         boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
//       }}>
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px",
//           marginBottom: "10px"
//         }}>
//           <FormInput 
//             label="Aggregate Loan Provisions (INR)" 
//             value={getValue(formData, "BalanceSheetFigures", "AggregateLoanProvisions")}
//             section="BalanceSheetFigures"
//             field="AggregateLoanProvisions"
//           />
//           <FormInput 
//             label="Total Cash in Hand and Bank (INR)" 
//             value={getValue(formData, "BalanceSheetFigures", "TotalCash")}
//             section="BalanceSheetFigures"
//             field="TotalCash"
//           />
//           <FormInput 
//             label="Total Assets (INR)" 
//             value={getValue(formData, "BalanceSheetFigures", "TotalAssets")}
//             section="BalanceSheetFigures"
//             field="TotalAssets"
//           />
//           <FormInput 
//             label="Outstanding Borrowings (INR)" 
//             value={getValue(formData, "BalanceSheetFigures", "OutstandingBorrowings")}
//             section="BalanceSheetFigures"
//             field="OutstandingBorrowings"
//           />
//         </div>
        
//         <CalculatedField 
//           label="Total Equity" 
//           value={getValue(formData, "BalanceSheetFigures", "TotalEquity")}
//         />
        
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px"
//         }}>
//           <FormInput 
//             label="Share Capital (INR)" 
//             value={getValue(formData, "BalanceSheetFigures", "ShareCapital")}
//             section="BalanceSheetFigures"
//             field="ShareCapital"
//             span={2}
//           />
//           <FormInput 
//             label="Reserves and Surplus (INR)" 
//             value={getValue(formData, "BalanceSheetFigures", "ReservesAndSurplus")}
//             section="BalanceSheetFigures"
//             field="ReservesAndSurplus"
//             span={2}
//           />
//         </div>
//       </div>

//       {/* LOAN SECTION */}
//       <SectionHeader title="Loan Details" date={selectedMonthName} />
      
//       {/* On Balance Sheet Portfolio */}
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "16px",
//         boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
//       }}>
//         <CalculatedField 
//           label="On Balance Sheet Portfolio" 
//           value={formData && formData.OnBalanceSheetPortfolio}
//         />
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px"
//         }}>
//           <FormInput 
//             label="Owned Loan Portfolio (INR)" 
//             value={formData && formData.OwnedLoanPortfolio}
//             section=""
//             field="OwnedLoanPortfolio"
//             span={2}
//           />
//           <FormInput 
//             label="Outstanding Loans for On-BS Portfolio (Numbers)" 
//             value={formData && formData.OutstandingLoansOnBSPortfolio}
//             section=""
//             field="OutstandingLoansOnBSPortfolio"
//             span={2}
//           />
//         </div>
//       </div>

//       {/* On Balance Sheet Managed Portfolio */}
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "16px",
//         boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
//         marginTop: "1px"
//       }}>
//         <CalculatedField 
//           label="On Balance Sheet Managed Portfolio" 
//           value={formData && formData.OnBalanceSheetManagedPortfolio}
//         />
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px"
//         }}>
//           <FormInput 
//             label="SPV Part of Portfolio (PTC) (INR)" 
//             value={formData && formData.SPVPartOfPortfolio}
//             section=""
//             field="SPVPartOfPortfolio"
//           />
//           <FormInput 
//             label="Securitized (Created thru SPV) (INR)" 
//             value={formData && formData.SecuritizedCreatedThroughSPV}
//             section=""
//             field="SecuritizedCreatedThroughSPV"
//           />
//           <FormInput 
//             label="Assigned / Bilateral Agreement (INR)" 
//             value={formData && formData.AssignedBilateralAgreement}
//             section=""
//             field="AssignedBilateralAgreement"
//           />
//           <FormInput 
//             label="Outstanding Loans for On-BS Managed (Numbers)" 
//             value={formData && formData.OutstandingLoansOnBSManagedPortfolio}
//             section=""
//             field="OutstandingLoansOnBSManagedPortfolio"
//           />
//         </div>
//       </div>

//       {/* Off Balance Sheet Managed Portfolio */}
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "16px",
//         borderRadius: "0 0 8px 8px",
//         boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
//         marginTop: "1px"
//       }}>
//         <CalculatedField 
//           label="Off Balance Sheet Managed Portfolio" 
//           value={formData && formData.OffBalanceSheetManagedPortfolio}
//         />
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px",
//           marginBottom: "10px"
//         }}>
//           <FormInput 
//             label="SPV Part of Portfolio (PTC) (INR)" 
//             value={formData && formData.SPVPartOfPortfolioOffBS}
//             section=""
//             field="SPVPartOfPortfolioOffBS"
//           />
//           <FormInput 
//             label="Securitized (Created thru SPV) (INR)" 
//             value={formData && formData.SecuritizedCreatedThroughSPVOffBS}
//             section=""
//             field="SecuritizedCreatedThroughSPVOffBS"
//           />
//           <FormInput 
//             label="Assigned / Bilateral Agreement (INR)" 
//             value={formData && formData.AssignedBilateralAgreementOffBS}
//             section=""
//             field="AssignedBilateralAgreementOffBS"
//           />
//           <FormInput 
//             label="Loan Portfolio Created as BC (INR)" 
//             value={formData && formData.LoanPortfolioCreatedBC}
//             section=""
//             field="LoanPortfolioCreatedBC"
//           />
//         </div>
        
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px",
//           marginBottom: "10px"
//         }}>
//           <FormInput 
//             label="Outstanding Loans for Off-BS Managed (Numbers)" 
//             value={formData && formData.OutstandingLoansOffBSManagedPortfolio}
//             section=""
//             field="OutstandingLoansOffBSManagedPortfolio"
//             span={4}
//           />
//         </div>
        
//         <CalculatedField 
//           label="Assets Under Management AUM (On BS + Off BS)" 
//           value={formData && formData.AUM}
//         />
        
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px"
//         }}>
//           <FormInput 
//             label="Total Clients (Active Borrowers) (Numbers)" 
//             value={formData && formData.TotalClients}
//             section=""
//             field="TotalClients"
//             span={4}
//           />
//         </div>
//       </div>

//       {/* PORTFOLIO AT RISK */}
//       <SectionHeader title="Portfolio at Risk" date={selectedMonthName} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "16px",
//         borderRadius: "0 0 8px 8px",
//         boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
//       }}>
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "10px",
//           marginBottom: "12px"
//         }}>
//           <CalculatedField label="Portfolio at Risk > 30 days (INR)" value={formData && formData.PortfolioAtRisk30} />
//           <CalculatedField label="Portfolio at Risk > 60 days (INR)" value={formData && formData.PortfolioAtRisk60} />
//           <CalculatedField label="Portfolio at Risk > 90 days (INR)" value={formData && formData.PortfolioAtRisk90} />
//           <CalculatedField label="Portfolio at Risk > 180 days (INR)" value={formData && formData.PortfolioAtRisk180} />
//         </div>

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px"
//         }}>
//           <FormInput 
//             label="On BS Portfolio at Risk > 30 days (INR)" 
//             value={formData && formData.OnBalanceSheetPortfolioAtRisk30}
//             section=""
//             field="OnBalanceSheetPortfolioAtRisk30"
//           />
//           <FormInput 
//             label="On BS Portfolio at Risk > 60 days (INR)" 
//             value={formData && formData.OnBalanceSheetPortfolioAtRisk60}
//             section=""
//             field="OnBalanceSheetPortfolioAtRisk60"
//           />
//           <FormInput 
//             label="On BS Portfolio at Risk > 90 days (INR)" 
//             value={formData && formData.OnBalanceSheetPortfolioAtRisk90}
//             section=""
//             field="OnBalanceSheetPortfolioAtRisk90"
//           />
//           <FormInput 
//             label="On BS Portfolio at Risk > 180 days (INR)" 
//             value={formData && formData.OnBalanceSheetPortfolioAtRisk180}
//             section=""
//             field="OnBalanceSheetPortfolioAtRisk180"
//           />
//           <FormInput 
//             label="Off BS Portfolio at Risk > 30 days (INR)" 
//             value={formData && formData.OffBalanceSheetPortfolioAtRisk30}
//             section=""
//             field="OffBalanceSheetPortfolioAtRisk30"
//           />
//           <FormInput 
//             label="Off BS Portfolio at Risk > 60 days (INR)" 
//             value={formData && formData.OffBalanceSheetPortfolioAtRisk60}
//             section=""
//             field="OffBalanceSheetPortfolioAtRisk60"
//           />
//           <FormInput 
//             label="Off BS Portfolio at Risk > 90 days (INR)" 
//             value={formData && formData.OffBalanceSheetPortfolioAtRisk90}
//             section=""
//             field="OffBalanceSheetPortfolioAtRisk90"
//           />
//           <FormInput 
//             label="Off BS Portfolio at Risk > 180 days (INR)" 
//             value={formData && formData.OffBalanceSheetPortfolioAtRisk180}
//             section=""
//             field="OffBalanceSheetPortfolioAtRisk180"
//           />
//         </div>
//       </div>

//       {/* DISBURSEMENTS - FINANCIAL YEAR */}
//       <SectionHeader title="Disbursements - During Financial Year" date={selectedDuring_FY} />
//       <GridContainer columns={4}>
//         <FormInput 
//           label="Number of Loans Disbursed (Numbers)" 
//           value={formData && formData.LoanDisbursedQuarter}
//           section=""
//           field="LoanDisbursedQuarter"
//           span={2}
//         />
//         <FormInput 
//           label="Loan Amount Disbursed (INR)" 
//           value={formData && formData.LoanAmountDisbursedQuarter}
//           section=""
//           field="LoanAmountDisbursedQuarter"
//           span={2}
//         />
//       </GridContainer>

//       {/* DISBURSEMENTS - QUARTER */}
//       <SectionHeader title="Disbursements - During Quarter" date={selectedMonthName} />
//       <GridContainer columns={4}>
//         <FormInput 
//           label="Number of Loans Disbursed (Numbers)" 
//           value={formData && formData.LoanDisbursedQuarter}
//           section=""
//           field="LoanDisbursedQuarter"
//           span={2}
//         />
//         <FormInput 
//           label="Loan Amount Disbursed (INR)" 
//           value={formData && formData.LoanAmountDisbursedQuarter}
//           section=""
//           field="LoanAmountDisbursedQuarter"
//           span={2}
//         />
//       </GridContainer>

//       {/* COLLECTIONS - FINANCIAL YEAR */}
//       <SectionHeader title="Collections - During Financial Year" date={selectedDuring_FY} />
//       <GridContainer columns={4}>
//         <FormInput 
//           label="Repayment Amount Due (INR)" 
//           value={formData && formData.RepaymentAmountDue}
//           section=""
//           field="RepaymentAmountDue"
//         />
//         <FormInput 
//           label="Repayment Amount Collected (INR)" 
//           value={formData && formData.RepaymentAmountCollected}
//           section=""
//           field="RepaymentAmountCollected"
//         />
//         <FormInput 
//           label="Pre-payment Amount Collected (INR)" 
//           value={formData && formData.PrePaymentAmountCollected}
//           section=""
//           field="PrePaymentAmountCollected"
//           span={2}
//         />
//       </GridContainer>

//       {/* COLLECTIONS - QUARTER */}
//       <SectionHeader title="Collections - During Quarter" date={selectedMonthName} />
//       <GridContainer columns={4}>
//         <FormInput 
//           label="Repayment Amount Due (INR)" 
//           value={formData && formData.RepaymentAmountDue}
//           section=""
//           field="RepaymentAmountDue"
//         />
//         <FormInput 
//           label="Repayment Amount Collected (INR)" 
//           value={formData && formData.RepaymentAmountCollected}
//           section=""
//           field="RepaymentAmountCollected"
//         />
//         <FormInput 
//           label="Pre-payment Amount Collected (INR)" 
//           value={formData && formData.PrePaymentAmountCollected}
//           section=""
//           field="PrePaymentAmountCollected"
//           span={2}
//         />
//       </GridContainer>

//       {/* FUNDING - FINANCIAL YEAR */}
//       <SectionHeader title="Total Funding/Borrowing - During Financial Year" date={selectedDuring_FY} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "16px",
//         borderRadius: "0 0 8px 8px",
//         boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
//       }}>
//         <CalculatedField label="Total Funding Received" value={0} />
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px"
//         }}>
//           <FormInput 
//             label="Funding from Banks (INR)" 
//             value={formData && formData.FundingReceivedFromBanks}
//             section=""
//             field="FundingReceivedFromBanks"
//           />
//           <FormInput 
//             label="Funding from Other FIs (INR)" 
//             value={formData && formData.FundingReceivedFromOtherFIs}
//             section=""
//             field="FundingReceivedFromOtherFIs"
//           />
//           <FormInput 
//             label="Securitization During Period (INR)" 
//             value={formData && formData.SecuritizationDuringPeriod}
//             section=""
//             field="SecuritizationDuringPeriod"
//             span={2}
//           />
//         </div>
//       </div>

//       {/* FUNDING - QUARTER */}
//       <SectionHeader title="Total Funding/Borrowing - During Quarter" date={selectedMonthName} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "16px",
//         borderRadius: "0 0 8px 8px",
//         boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
//       }}>
//         <CalculatedField label="Total Funding Received" value={0} />
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px"
//         }}>
//           <FormInput 
//             label="Funding from Banks (INR)" 
//             value={formData && formData.FundingReceivedFromBanks}
//             section=""
//             field="FundingReceivedFromBanks"
//           />
//           <FormInput 
//             label="Funding from Other FIs (INR)" 
//             value={formData && formData.FundingReceivedFromOtherFIs}
//             section=""
//             field="FundingReceivedFromOtherFIs"
//           />
//           <FormInput 
//             label="Securitization During Period (INR)" 
//             value={formData && formData.SecuritizationDuringPeriod}
//             section=""
//             field="SecuritizationDuringPeriod"
//             span={2}
//           />
//         </div>
//       </div>

//       {/* CASHLESS OPERATIONS - FINANCIAL YEAR */}
//       <SectionHeader title="Cashless Operations - During Financial Year" date={selectedDuring_FY} />
//       <GridContainer columns={4}>
//         <FormInput 
//           label="% Loan Disbursed Cashless" 
//           value={formData && formData.PercentLoanDisbursedCashless}
//           section=""
//           field="PercentLoanDisbursedCashless"
//           span={2}
//         />
//         <FormInput 
//           label="% Loan Collected Cashless" 
//           value={formData && formData.PercentLoanCollectedCashless}
//           section=""
//           field="PercentLoanCollectedCashless"
//           span={2}
//         />
//       </GridContainer>

//       {/* CASHLESS OPERATIONS - QUARTER */}
//       <SectionHeader title="Cashless Operations - During Quarter" date={selectedMonthName} />
//       <GridContainer columns={4}>
//         <FormInput 
//           label="% Loan Disbursed Cashless" 
//           value={formData && formData.PercentLoanDisbursedCashless}
//           section=""
//           field="PercentLoanDisbursedCashless"
//           span={2}
//         />
//         <FormInput 
//           label="% Loan Collected Cashless" 
//           value={formData && formData.PercentLoanCollectedCashless}
//           section=""
//           field="PercentLoanCollectedCashless"
//           span={2}
//         />
//       </GridContainer>

//     </div>
//   );
// }

// export default Overview;

// import "./Overview.css";
// import React, { useState, useEffect } from "react";
// import { loadUserFormData } from "../utils/StorageHelper";

// function Overview({
//   formData,
//   handleChange,
//   handleStateDataChange,
//   setFormData,
//   selectedMonthName,
//   setSelectedMonthName,
//   selectedDuring_FY,
//   setselectedDuring_FY  
// }) {

//   const [numStates, setNumStates] = useState(function() {
//     const storedData = loadUserFormData();
//     return storedData && storedData.States ? storedData.States.length : 1;
//   });

//   const [selectedStates, setSelectedStates] = useState(
//     Array(numStates).fill("")
//   );

//   useEffect(function() {
//     setFormData(function (prevData) {
//       if (!prevData || !prevData.States) {
//         return prevData;
//       }
//       var updatedStates = [].concat(prevData.States);
//       while (updatedStates.length < numStates) {
//         updatedStates.push({ StateName: "" });
//       }
//       updatedStates = updatedStates.slice(0, numStates);
//       return Object.assign({}, prevData, { States: updatedStates });
//     });
//   }, [numStates, setFormData]);

//   // Helper to safely get nested values
//   const getValue = function(obj) {
//     var keys = Array.prototype.slice.call(arguments, 1);
//     return keys.reduce(function(acc, key) {
//       return (acc && acc[key] !== undefined ? acc[key] : "");
//     }, obj);
//   };

//   // Reusable input component with fixed focus behavior
//   const FormInput = function({ label, value, section, field, span }) {
//     const inputId = "input-" + section + "-" + field + "-" + Math.random();
    
//     return (
//       <div style={{ gridColumn: span > 1 ? 'span ' + span : 'auto' }}>
//         <label 
//           htmlFor={inputId}
//           style={{
//             display: "block",
//             fontSize: "11px",
//             fontWeight: "700",
//             color: "#374151",
//             marginBottom: "6px",
//             letterSpacing: "0.5px",
//             textTransform: "uppercase",
//             fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
//           }}
//         >
//           {label}
//         </label>
//         <input
//           id={inputId}
//           type="text"
//           style={{
//             width: "100%",
//             height: "40px",
//             padding: "0 14px",
//             border: "2px solid #E8E8E8",
//             borderRadius: "6px",
//             fontSize: "14px",
//             fontWeight: "500",
//             color: "#1F2937",
//             outline: "none",
//             transition: "all 0.25s ease",
//             backgroundColor: "#FFFFFF",
//             fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
//           }}
//           value={value || ""}
//           onChange={function(e) {
//             handleChange(section, field, e.target.value);
//           }}
//           onFocus={function(e) { 
//             e.target.style.borderColor = "#39B1AC";
//             e.target.style.backgroundColor = "#FFFFFF";
//             e.target.style.boxShadow = "0 0 0 3px rgba(57, 177, 172, 0.1)";
//           }}
//           onBlur={function(e) { 
//             e.target.style.borderColor = "#E8E8E8";
//             e.target.style.backgroundColor = "#FFFFFF";
//             e.target.style.boxShadow = "none";
//           }}
//         />
//       </div>
//     );
//   };

//   // Section header with gradient using palette colors
//   const SectionHeader = function({ title, date }) {
//     return (
//       <div style={{
//         background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
//         padding: "14px 20px",
//         borderRadius: "8px 8px 0 0",
//         marginTop: "20px",
//         marginBottom: "0",
//         position: "relative",
//         overflow: "hidden",
//         boxShadow: "0 2px 8px rgba(43, 96, 173, 0.15)"
//       }}>
//         <div style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
//           backgroundSize: "20px 20px",
//           opacity: 0.3
//         }}></div>
//         <div style={{ 
//           display: "flex", 
//           justifyContent: "space-between", 
//           alignItems: "center",
//           position: "relative",
//           zIndex: 1
//         }}>
//           <h6 style={{
//             color: "#FFFFFF",
//             fontSize: "13px",
//             fontWeight: "700",
//             margin: 0,
//             textTransform: "uppercase",
//             letterSpacing: "1px",
//             fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
//           }}>
//             {title}
//           </h6>
//           {date && (
//             <span style={{
//               color: "#FFFFFF",
//               fontSize: "11px",
//               fontWeight: "600",
//               backgroundColor: "rgba(255,255,255,0.2)",
//               padding: "5px 14px",
//               borderRadius: "16px",
//               backdropFilter: "blur(10px)",
//               border: "1px solid rgba(255,255,255,0.25)"
//             }}>
//               {date}
//             </span>
//           )}
//         </div>
//       </div>
//     );
//   };

//   // Calculated field with teal accent
//   const CalculatedField = function({ label, value }) {
//     return (
//       <div style={{
//         padding: "12px 16px",
//         background: "linear-gradient(135deg, #F0FDFC 0%, #E6F9F7 100%)",
//         borderRadius: "8px",
//         borderLeft: "4px solid #39B1AC",
//         marginBottom: "12px",
//         boxShadow: "0 2px 6px rgba(57, 177, 172, 0.08)"
//       }}>
//         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <span style={{ 
//             fontSize: "12px", 
//             fontWeight: "700", 
//             color: "#0F766E", 
//             letterSpacing: "0.3px",
//             textTransform: "uppercase",
//             fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
//           }}>
//             {label}
//           </span>
//           <span style={{ 
//             fontSize: "17px", 
//             fontWeight: "700", 
//             color: "#0D5653",
//             fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
//           }}>
//             {value || 0}
//           </span>
//         </div>
//       </div>
//     );
//   };

//   // Grid container with clean design
//   const GridContainer = function({ children, columns }) {
//     const cols = columns || 4;
//     return (
//       <div style={{
//         backgroundColor: "#FFFFFF",
//         padding: "20px",
//         borderRadius: "0 0 8px 8px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//         marginBottom: "6px",
//         border: "1px solid #F3F4F6",
//         borderTop: "none"
//       }}>
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: 'repeat(' + cols + ', 1fr)',
//           gap: "14px",
//         }}>
//           {children}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div style={{
//       backgroundColor: "#F7F9FB",
//       padding: "20px",
//       fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//       minHeight: "100vh"
//     }}>
      
//       {/* INFRASTRUCTURE SECTION */}
//       <SectionHeader title="Infrastructure" date={selectedMonthName} />
//       <GridContainer columns={4}>
//         <FormInput 
//           label="Employees (Numbers)" 
//           value={getValue(formData, "Infrastructure", "Employees")}
//           section="Infrastructure"
//           field="Employees"
//         />
//         <FormInput 
//           label="Loan Officers (Numbers)" 
//           value={getValue(formData, "Infrastructure", "LoanOfficers")}
//           section="Infrastructure"
//           field="LoanOfficers"
//         />
//         <FormInput 
//           label="Districts (Numbers)" 
//           value={getValue(formData, "Infrastructure", "Districts")}
//           section="Infrastructure"
//           field="Districts"
//         />
//         <FormInput 
//           label="Branches (Numbers)" 
//           value={getValue(formData, "Infrastructure", "Branches")}
//           section="Infrastructure"
//           field="Branches"
//         />
//       </GridContainer>

//       {/* BALANCE SHEET FIGURES */}
//       <SectionHeader title="Balance Sheet Figures" date={selectedMonthName} />
//       <div style={{
//         backgroundColor: "#FFFFFF",
//         padding: "20px",
//         borderRadius: "0 0 8px 8px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//         border: "1px solid #F3F4F6",
//         borderTop: "none"
//       }}>
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "14px",
//           marginBottom: "12px"
//         }}>
//           <FormInput 
//             label="Aggregate Loan Provisions (INR)" 
//             value={getValue(formData, "BalanceSheetFigures", "AggregateLoanProvisions")}
//             section="BalanceSheetFigures"
//             field="AggregateLoanProvisions"
//           />
//           <FormInput 
//             label="Total Cash in Hand and Bank (INR)" 
//             value={getValue(formData, "BalanceSheetFigures", "TotalCash")}
//             section="BalanceSheetFigures"
//             field="TotalCash"
//           />
//           <FormInput 
//             label="Total Assets (INR)" 
//             value={getValue(formData, "BalanceSheetFigures", "TotalAssets")}
//             section="BalanceSheetFigures"
//             field="TotalAssets"
//           />
//           <FormInput 
//             label="Outstanding Borrowings (INR)" 
//             value={getValue(formData, "BalanceSheetFigures", "OutstandingBorrowings")}
//             section="BalanceSheetFigures"
//             field="OutstandingBorrowings"
//           />
//         </div>
        
//         <CalculatedField 
//           label="Total Equity" 
//           value={getValue(formData, "BalanceSheetFigures", "TotalEquity")}
//         />
        
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "14px"
//         }}>
//           <FormInput 
//             label="Share Capital (INR)" 
//             value={getValue(formData, "BalanceSheetFigures", "ShareCapital")}
//             section="BalanceSheetFigures"
//             field="ShareCapital"
//             span={2}
//           />
//           <FormInput 
//             label="Reserves and Surplus (INR)" 
//             value={getValue(formData, "BalanceSheetFigures", "ReservesAndSurplus")}
//             section="BalanceSheetFigures"
//             field="ReservesAndSurplus"
//             span={2}
//           />
//         </div>
//       </div>

//       {/* LOAN SECTION */}
//       <SectionHeader title="Loan Details" date={selectedMonthName} />
      
//       {/* On Balance Sheet Portfolio */}
//       <div style={{
//         backgroundColor: "#FFFFFF",
//         padding: "20px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//         border: "1px solid #F3F4F6",
//         borderTop: "none"
//       }}>
//         <CalculatedField 
//           label="On Balance Sheet Portfolio" 
//           value={formData && formData.OnBalanceSheetPortfolio}
//         />
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "14px"
//         }}>
//           <FormInput 
//             label="Owned Loan Portfolio (INR)" 
//             value={formData && formData.OwnedLoanPortfolio}
//             section=""
//             field="OwnedLoanPortfolio"
//             span={2}
//           />
//           <FormInput 
//             label="Outstanding Loans for On-BS Portfolio (Numbers)" 
//             value={formData && formData.OutstandingLoansOnBSPortfolio}
//             section=""
//             field="OutstandingLoansOnBSPortfolio"
//             span={2}
//           />
//         </div>
//       </div>

//       {/* On Balance Sheet Managed Portfolio */}
//       <div style={{
//         backgroundColor: "#FFFFFF",
//         padding: "20px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//         marginTop: "2px",
//         border: "1px solid #F3F4F6",
//         borderTop: "none"
//       }}>
//         <CalculatedField 
//           label="On Balance Sheet Managed Portfolio" 
//           value={formData && formData.OnBalanceSheetManagedPortfolio}
//         />
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "14px"
//         }}>
//           <FormInput 
//             label="SPV Part of Portfolio (PTC) (INR)" 
//             value={formData && formData.SPVPartOfPortfolio}
//             section=""
//             field="SPVPartOfPortfolio"
//           />
//           <FormInput 
//             label="Securitized (Created thru SPV) (INR)" 
//             value={formData && formData.SecuritizedCreatedThroughSPV}
//             section=""
//             field="SecuritizedCreatedThroughSPV"
//           />
//           <FormInput 
//             label="Assigned / Bilateral Agreement (INR)" 
//             value={formData && formData.AssignedBilateralAgreement}
//             section=""
//             field="AssignedBilateralAgreement"
//           />
//           <FormInput 
//             label="Outstanding Loans for On-BS Managed (Numbers)" 
//             value={formData && formData.OutstandingLoansOnBSManagedPortfolio}
//             section=""
//             field="OutstandingLoansOnBSManagedPortfolio"
//           />
//         </div>
//       </div>

//       {/* Off Balance Sheet Managed Portfolio */}
//       <div style={{
//         backgroundColor: "#FFFFFF",
//         padding: "20px",
//         borderRadius: "0 0 8px 8px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//         marginTop: "2px",
//         border: "1px solid #F3F4F6",
//         borderTop: "none"
//       }}>
//         <CalculatedField 
//           label="Off Balance Sheet Managed Portfolio" 
//           value={formData && formData.OffBalanceSheetManagedPortfolio}
//         />
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "14px",
//           marginBottom: "12px"
//         }}>
//           <FormInput 
//             label="SPV Part of Portfolio (PTC) (INR)" 
//             value={formData && formData.SPVPartOfPortfolioOffBS}
//             section=""
//             field="SPVPartOfPortfolioOffBS"
//           />
//           <FormInput 
//             label="Securitized (Created thru SPV) (INR)" 
//             value={formData && formData.SecuritizedCreatedThroughSPVOffBS}
//             section=""
//             field="SecuritizedCreatedThroughSPVOffBS"
//           />
//           <FormInput 
//             label="Assigned / Bilateral Agreement (INR)" 
//             value={formData && formData.AssignedBilateralAgreementOffBS}
//             section=""
//             field="AssignedBilateralAgreementOffBS"
//           />
//           <FormInput 
//             label="Loan Portfolio Created as BC (INR)" 
//             value={formData && formData.LoanPortfolioCreatedBC}
//             section=""
//             field="LoanPortfolioCreatedBC"
//           />
//         </div>
        
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "14px",
//           marginBottom: "12px"
//         }}>
//           <FormInput 
//             label="Outstanding Loans for Off-BS Managed (Numbers)" 
//             value={formData && formData.OutstandingLoansOffBSManagedPortfolio}
//             section=""
//             field="OutstandingLoansOffBSManagedPortfolio"
//             span={4}
//           />
//         </div>
        
//         <CalculatedField 
//           label="Assets Under Management AUM (On BS + Off BS)" 
//           value={formData && formData.AUM}
//         />
        
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "14px"
//         }}>
//           <FormInput 
//             label="Total Clients (Active Borrowers) (Numbers)" 
//             value={formData && formData.TotalClients}
//             section=""
//             field="TotalClients"
//             span={4}
//           />
//         </div>
//       </div>

//       {/* PORTFOLIO AT RISK */}
//       <SectionHeader title="Portfolio at Risk" date={selectedMonthName} />
//       <div style={{
//         backgroundColor: "#FFFFFF",
//         padding: "20px",
//         borderRadius: "0 0 8px 8px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//         border: "1px solid #F3F4F6",
//         borderTop: "none"
//       }}>
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px",
//           marginBottom: "14px"
//         }}>
//           <CalculatedField label="Portfolio at Risk > 30 days (INR)" value={formData && formData.PortfolioAtRisk30} />
//           <CalculatedField label="Portfolio at Risk > 60 days (INR)" value={formData && formData.PortfolioAtRisk60} />
//           <CalculatedField label="Portfolio at Risk > 90 days (INR)" value={formData && formData.PortfolioAtRisk90} />
//           <CalculatedField label="Portfolio at Risk > 180 days (INR)" value={formData && formData.PortfolioAtRisk180} />
//         </div>

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "14px"
//         }}>
//           <FormInput 
//             label="On BS Portfolio at Risk > 30 days (INR)" 
//             value={formData && formData.OnBalanceSheetPortfolioAtRisk30}
//             section=""
//             field="OnBalanceSheetPortfolioAtRisk30"
//           />
//           <FormInput 
//             label="On BS Portfolio at Risk > 60 days (INR)" 
//             value={formData && formData.OnBalanceSheetPortfolioAtRisk60}
//             section=""
//             field="OnBalanceSheetPortfolioAtRisk60"
//           />
//           <FormInput 
//             label="On BS Portfolio at Risk > 90 days (INR)" 
//             value={formData && formData.OnBalanceSheetPortfolioAtRisk90}
//             section=""
//             field="OnBalanceSheetPortfolioAtRisk90"
//           />
//           <FormInput 
//             label="On BS Portfolio at Risk > 180 days (INR)" 
//             value={formData && formData.OnBalanceSheetPortfolioAtRisk180}
//             section=""
//             field="OnBalanceSheetPortfolioAtRisk180"
//           />
//           <FormInput 
//             label="Off BS Portfolio at Risk > 30 days (INR)" 
//             value={formData && formData.OffBalanceSheetPortfolioAtRisk30}
//             section=""
//             field="OffBalanceSheetPortfolioAtRisk30"
//           />
//           <FormInput 
//             label="Off BS Portfolio at Risk > 60 days (INR)" 
//             value={formData && formData.OffBalanceSheetPortfolioAtRisk60}
//             section=""
//             field="OffBalanceSheetPortfolioAtRisk60"
//           />
//           <FormInput 
//             label="Off BS Portfolio at Risk > 90 days (INR)" 
//             value={formData && formData.OffBalanceSheetPortfolioAtRisk90}
//             section=""
//             field="OffBalanceSheetPortfolioAtRisk90"
//           />
//           <FormInput 
//             label="Off BS Portfolio at Risk > 180 days (INR)" 
//             value={formData && formData.OffBalanceSheetPortfolioAtRisk180}
//             section=""
//             field="OffBalanceSheetPortfolioAtRisk180"
//           />
//         </div>
//       </div>

//       {/* DISBURSEMENTS - FINANCIAL YEAR */}
//       <SectionHeader title="Disbursements - During Financial Year" date={selectedDuring_FY} />
//       <GridContainer columns={4}>
//         <FormInput 
//           label="Number of Loans Disbursed (Numbers)" 
//           value={formData && formData.LoanDisbursedQuarter}
//           section=""
//           field="LoanDisbursedQuarter"
//           span={2}
//         />
//         <FormInput 
//           label="Loan Amount Disbursed (INR)" 
//           value={formData && formData.LoanAmountDisbursedQuarter}
//           section=""
//           field="LoanAmountDisbursedQuarter"
//           span={2}
//         />
//       </GridContainer>

//       {/* DISBURSEMENTS - QUARTER */}
//       <SectionHeader title="Disbursements - During Quarter" date={selectedMonthName} />
//       <GridContainer columns={4}>
//         <FormInput 
//           label="Number of Loans Disbursed (Numbers)" 
//           value={formData && formData.LoanDisbursedQuarter}
//           section=""
//           field="LoanDisbursedQuarter"
//           span={2}
//         />
//         <FormInput 
//           label="Loan Amount Disbursed (INR)" 
//           value={formData && formData.LoanAmountDisbursedQuarter}
//           section=""
//           field="LoanAmountDisbursedQuarter"
//           span={2}
//         />
//       </GridContainer>

//       {/* COLLECTIONS - FINANCIAL YEAR */}
//       <SectionHeader title="Collections - During Financial Year" date={selectedDuring_FY} />
//       <GridContainer columns={4}>
//         <FormInput 
//           label="Repayment Amount Due (INR)" 
//           value={formData && formData.RepaymentAmountDue}
//           section=""
//           field="RepaymentAmountDue"
//         />
//         <FormInput 
//           label="Repayment Amount Collected (INR)" 
//           value={formData && formData.RepaymentAmountCollected}
//           section=""
//           field="RepaymentAmountCollected"
//         />
//         <FormInput 
//           label="Pre-payment Amount Collected (INR)" 
//           value={formData && formData.PrePaymentAmountCollected}
//           section=""
//           field="PrePaymentAmountCollected"
//           span={2}
//         />
//       </GridContainer>

//       {/* COLLECTIONS - QUARTER */}
//       <SectionHeader title="Collections - During Quarter" date={selectedMonthName} />
//       <GridContainer columns={4}>
//         <FormInput 
//           label="Repayment Amount Due (INR)" 
//           value={formData && formData.RepaymentAmountDue}
//           section=""
//           field="RepaymentAmountDue"
//         />
//         <FormInput 
//           label="Repayment Amount Collected (INR)" 
//           value={formData && formData.RepaymentAmountCollected}
//           section=""
//           field="RepaymentAmountCollected"
//         />
//         <FormInput 
//           label="Pre-payment Amount Collected (INR)" 
//           value={formData && formData.PrePaymentAmountCollected}
//           section=""
//           field="PrePaymentAmountCollected"
//           span={2}
//         />
//       </GridContainer>

//       {/* FUNDING - FINANCIAL YEAR */}
//       <SectionHeader title="Total Funding/Borrowing - During Financial Year" date={selectedDuring_FY} />
//       <div style={{
//         backgroundColor: "#FFFFFF",
//         padding: "20px",
//         borderRadius: "0 0 8px 8px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//         border: "1px solid #F3F4F6",
//         borderTop: "none"
//       }}>
//         <CalculatedField label="Total Funding Received" value={0} />
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "14px"
//         }}>
//           <FormInput 
//             label="Funding from Banks (INR)" 
//             value={formData && formData.FundingReceivedFromBanks}
//             section=""
//             field="FundingReceivedFromBanks"
//           />
//           <FormInput 
//             label="Funding from Other FIs (INR)" 
//             value={formData && formData.FundingReceivedFromOtherFIs}
//             section=""
//             field="FundingReceivedFromOtherFIs"
//           />
//           <FormInput 
//             label="Securitization During Period (INR)" 
//             value={formData && formData.SecuritizationDuringPeriod}
//             section=""
//             field="SecuritizationDuringPeriod"
//             span={2}
//           />
//         </div>
//       </div>

//       {/* FUNDING - QUARTER */}
//       <SectionHeader title="Total Funding/Borrowing - During Quarter" date={selectedMonthName} />
//       <div style={{
//         backgroundColor: "#FFFFFF",
//         padding: "20px",
//         borderRadius: "0 0 8px 8px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//         border: "1px solid #F3F4F6",
//         borderTop: "none"
//       }}>
//         <CalculatedField label="Total Funding Received" value={0} />
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "14px"
//         }}>
//           <FormInput 
//             label="Funding from Banks (INR)" 
//             value={formData && formData.FundingReceivedFromBanks}
//             section=""
//             field="FundingReceivedFromBanks"
//           />
//           <FormInput 
//             label="Funding from Other FIs (INR)" 
//             value={formData && formData.FundingReceivedFromOtherFIs}
//             section=""
//             field="FundingReceivedFromOtherFIs"
//           />
//           <FormInput 
//             label="Securitization During Period (INR)" 
//             value={formData && formData.SecuritizationDuringPeriod}
//             section=""
//             field="SecuritizationDuringPeriod"
//             span={2}
//           />
//         </div>
//       </div>

//       {/* CASHLESS OPERATIONS - FINANCIAL YEAR */}
//       <SectionHeader title="Cashless Operations - During Financial Year" date={selectedDuring_FY} />
//       <GridContainer columns={4}>
//         <FormInput 
//           label="% Loan Disbursed Cashless" 
//           value={formData && formData.PercentLoanDisbursedCashless}
//           section=""
//           field="PercentLoanDisbursedCashless"
//           span={2}
//         />
//         <FormInput 
//           label="% Loan Collected Cashless" 
//           value={formData && formData.PercentLoanCollectedCashless}
//           section=""
//           field="PercentLoanCollectedCashless"
//           span={2}
//         />
//       </GridContainer>

//       {/* CASHLESS OPERATIONS - QUARTER */}
//       <SectionHeader title="Cashless Operations - During Quarter" date={selectedMonthName} />
//       <GridContainer columns={4}>
//         <FormInput 
//           label="% Loan Disbursed Cashless" 
//           value={formData && formData.PercentLoanDisbursedCashless}
//           section=""
//           field="PercentLoanDisbursedCashless"
//           span={2}
//         />
//         <FormInput 
//           label="% Loan Collected Cashless" 
//           value={formData && formData.PercentLoanCollectedCashless}
//           section=""
//           field="PercentLoanCollectedCashless"
//           span={2}
//         />
//       </GridContainer>

//     </div>
//   );
// }

// export default Overview;


import "./Overview.css";
import React, { useState, useEffect } from "react";
import { loadUserFormData } from "../utils/StorageHelper";

function Overview({
  formData,
  handleChange,
  handleStateDataChange,
  setFormData,
  selectedMonthName,
  setSelectedMonthName,
  selectedDuring_FY,
  setselectedDuring_FY  
}) {

  const [numStates, setNumStates] = useState(function() {
    const storedData = loadUserFormData();
    return storedData && storedData.States ? storedData.States.length : 1;
  });

  const [selectedStates, setSelectedStates] = useState(
    Array(numStates).fill("")
  );

  useEffect(function() {
    setFormData(function (prevData) {
      if (!prevData || !prevData.States) {
        return prevData;
      }
      var updatedStates = [].concat(prevData.States);
      while (updatedStates.length < numStates) {
        updatedStates.push({ StateName: "" });
      }
      updatedStates = updatedStates.slice(0, numStates);
      return Object.assign({}, prevData, { States: updatedStates });
    });
  }, [numStates, setFormData]);

  // Helper to safely get nested values
  const getValue = function(obj) {
    var keys = Array.prototype.slice.call(arguments, 1);
    return keys.reduce(function(acc, key) {
      return (acc && acc[key] !== undefined ? acc[key] : "");
    }, obj);
  };

  // Reusable input component with fixed focus behavior
  const FormInput = function({ label, value, section, field, span }) {
    const inputId = "input-" + section + "-" + field + "-" + Math.random();
    
    return (
      <div style={{ gridColumn: span > 1 ? 'span ' + span : 'auto' }}>
        <label 
          htmlFor={inputId}
          style={{
            display: "block",
            fontSize: "11px",
            fontWeight: "700",
            color: "#374151",
            marginBottom: "6px",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            textAlign: "left"
          }}
        >
          {label}
        </label>
        <input
          id={inputId}
          type="text"
          style={{
            width: "100%",
            height: "40px",
            padding: "0 14px",
            border: "2px solid #E8E8E8",
            borderRadius: "6px",
            fontSize: "14px",
            fontWeight: "500",
            color: "#1F2937",
            outline: "none",
            transition: "all 0.25s ease",
            backgroundColor: "#FFFFFF",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            textAlign: "left"
          }}
          value={value || ""}
          onChange={function(e) {
            handleChange(section, field, e.target.value);
          }}
          onFocus={function(e) { 
            e.target.style.borderColor = "#39B1AC";
            e.target.style.backgroundColor = "#FFFFFF";
            e.target.style.boxShadow = "0 0 0 3px rgba(57, 177, 172, 0.1)";
          }}
          onBlur={function(e) { 
            e.target.style.borderColor = "#E8E8E8";
            e.target.style.backgroundColor = "#FFFFFF";
            e.target.style.boxShadow = "none";
          }}
        />
      </div>
    );
  };

  // Section header with gradient using palette colors
  const SectionHeader = function({ title, date }) {
    return (
      <div style={{
        background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
        padding: "14px 20px",
        borderRadius: "8px 8px 0 0",
        marginTop: "20px",
        marginBottom: "0",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(43, 96, 173, 0.15)"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          opacity: 0.3
        }}></div>
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          position: "relative",
          zIndex: 1
        }}>
          <h6 style={{
            color: "#FFFFFF",
            fontSize: "13px",
            fontWeight: "700",
            margin: 0,
            textTransform: "uppercase",
            letterSpacing: "1px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            textAlign: "left"
          }}>
            {title}
          </h6>
          {date && (
            <span style={{
              color: "#FFFFFF",
              fontSize: "11px",
              fontWeight: "600",
              backgroundColor: "rgba(255,255,255,0.2)",
              padding: "5px 14px",
              borderRadius: "16px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.25)"
            }}>
              {date}
            </span>
          )}
        </div>
      </div>
    );
  };

  // Calculated field with teal accent
  const CalculatedField = function({ label, value }) {
    return (
      <div style={{
        padding: "12px 16px",
        background: "linear-gradient(135deg, #F0FDFC 0%, #E6F9F7 100%)",
        borderRadius: "8px",
        borderLeft: "4px solid #39B1AC",
        marginBottom: "12px",
        boxShadow: "0 2px 6px rgba(57, 177, 172, 0.08)"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ 
            fontSize: "12px", 
            fontWeight: "700", 
            color: "#0F766E", 
            letterSpacing: "0.3px",
            textTransform: "uppercase",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            textAlign: "left"
          }}>
            {label}
          </span>
          <span style={{ 
            fontSize: "17px", 
            fontWeight: "700", 
            color: "#0D5653",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
          }}>
            {value || 0}
          </span>
        </div>
      </div>
    );
  };

  // Grid container with clean design
  const GridContainer = function({ children, columns }) {
    const cols = columns || 4;
    return (
      <div style={{
        backgroundColor: "#FFFFFF",
        padding: "20px",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        marginBottom: "6px",
        border: "1px solid #F3F4F6",
        borderTop: "none"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: 'repeat(' + cols + ', 1fr)',
          gap: "14px",
        }}>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div style={{
      backgroundColor: "#F7F9FB",
      padding: "20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      minHeight: "100vh"
    }}>
      
      {/* INFRASTRUCTURE SECTION */}
      <SectionHeader title="Infrastructure" date={selectedMonthName} />
      <GridContainer columns={4}>
        <FormInput 
          label="Employees (Numbers)" 
          value={getValue(formData, "Infrastructure", "Employees")}
          section="Infrastructure"
          field="Employees"
        />
        <FormInput 
          label="Loan Officers (Numbers)" 
          value={getValue(formData, "Infrastructure", "LoanOfficers")}
          section="Infrastructure"
          field="LoanOfficers"
        />
        <FormInput 
          label="Districts (Numbers)" 
          value={getValue(formData, "Infrastructure", "Districts")}
          section="Infrastructure"
          field="Districts"
        />
        <FormInput 
          label="Branches (Numbers)" 
          value={getValue(formData, "Infrastructure", "Branches")}
          section="Infrastructure"
          field="Branches"
        />
      </GridContainer>

      {/* BALANCE SHEET FIGURES */}
      <SectionHeader title="Balance Sheet Figures" date={selectedMonthName} />
      <div style={{
        backgroundColor: "#FFFFFF",
        padding: "20px",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        border: "1px solid #F3F4F6",
        borderTop: "none"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px",
          marginBottom: "12px"
        }}>
          <FormInput 
            label="Aggregate Loan Provisions (INR)" 
            value={getValue(formData, "BalanceSheetFigures", "AggregateLoanProvisions")}
            section="BalanceSheetFigures"
            field="AggregateLoanProvisions"
          />
          <FormInput 
            label="Total Cash in Hand and Bank (INR)" 
            value={getValue(formData, "BalanceSheetFigures", "TotalCash")}
            section="BalanceSheetFigures"
            field="TotalCash"
          />
          <FormInput 
            label="Total Assets (INR)" 
            value={getValue(formData, "BalanceSheetFigures", "TotalAssets")}
            section="BalanceSheetFigures"
            field="TotalAssets"
          />
          <FormInput 
            label="Outstanding Borrowings (INR)" 
            value={getValue(formData, "BalanceSheetFigures", "OutstandingBorrowings")}
            section="BalanceSheetFigures"
            field="OutstandingBorrowings"
          />
        </div>
        
        <CalculatedField 
          label="Total Equity" 
          value={getValue(formData, "BalanceSheetFigures", "TotalEquity")}
        />
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px"
        }}>
          <FormInput 
            label="Share Capital (INR)" 
            value={getValue(formData, "BalanceSheetFigures", "ShareCapital")}
            section="BalanceSheetFigures"
            field="ShareCapital"
            span={2}
          />
          <FormInput 
            label="Reserves and Surplus (INR)" 
            value={getValue(formData, "BalanceSheetFigures", "ReservesAndSurplus")}
            section="BalanceSheetFigures"
            field="ReservesAndSurplus"
            span={2}
          />
        </div>
      </div>

      {/* LOAN SECTION */}
      <SectionHeader title="Loan Details" date={selectedMonthName} />
      
      {/* On Balance Sheet Portfolio */}
      <div style={{
        backgroundColor: "#FFFFFF",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        border: "1px solid #F3F4F6",
        borderTop: "none"
      }}>
        <CalculatedField 
          label="On Balance Sheet Portfolio" 
          value={formData && formData.OnBalanceSheetPortfolio}
        />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px"
        }}>
          <FormInput 
            label="Owned Loan Portfolio (INR)" 
            value={formData && formData.OwnedLoanPortfolio}
            section=""
            field="OwnedLoanPortfolio"
            span={2}
          />
          <FormInput 
            label="Outstanding Loans for On-BS Portfolio (Numbers)" 
            value={formData && formData.OutstandingLoansOnBSPortfolio}
            section=""
            field="OutstandingLoansOnBSPortfolio"
            span={2}
          />
        </div>
      </div>

      {/* On Balance Sheet Managed Portfolio */}
      <div style={{
        backgroundColor: "#FFFFFF",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        marginTop: "2px",
        border: "1px solid #F3F4F6",
        borderTop: "none"
      }}>
        <CalculatedField 
          label="On Balance Sheet Managed Portfolio" 
          value={formData && formData.OnBalanceSheetManagedPortfolio}
        />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px"
        }}>
          <FormInput 
            label="SPV Part of Portfolio (PTC) (INR)" 
            value={formData && formData.SPVPartOfPortfolio}
            section=""
            field="SPVPartOfPortfolio"
          />
          <FormInput 
            label="Securitized (Created thru SPV) (INR)" 
            value={formData && formData.SecuritizedCreatedThroughSPV}
            section=""
            field="SecuritizedCreatedThroughSPV"
          />
          <FormInput 
            label="Assigned / Bilateral Agreement (INR)" 
            value={formData && formData.AssignedBilateralAgreement}
            section=""
            field="AssignedBilateralAgreement"
          />
          <FormInput 
            label="Outstanding Loans for On-BS Managed (Numbers)" 
            value={formData && formData.OutstandingLoansOnBSManagedPortfolio}
            section=""
            field="OutstandingLoansOnBSManagedPortfolio"
          />
        </div>
      </div>

      {/* Off Balance Sheet Managed Portfolio */}
      <div style={{
        backgroundColor: "#FFFFFF",
        padding: "20px",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        marginTop: "2px",
        border: "1px solid #F3F4F6",
        borderTop: "none"
      }}>
        <CalculatedField 
          label="Off Balance Sheet Managed Portfolio" 
          value={formData && formData.OffBalanceSheetManagedPortfolio}
        />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px",
          marginBottom: "12px"
        }}>
          <FormInput 
            label="SPV Part of Portfolio (PTC) (INR)" 
            value={formData && formData.SPVPartOfPortfolioOffBS}
            section=""
            field="SPVPartOfPortfolioOffBS"
          />
          <FormInput 
            label="Securitized (Created thru SPV) (INR)" 
            value={formData && formData.SecuritizedCreatedThroughSPVOffBS}
            section=""
            field="SecuritizedCreatedThroughSPVOffBS"
          />
          <FormInput 
            label="Assigned / Bilateral Agreement (INR)" 
            value={formData && formData.AssignedBilateralAgreementOffBS}
            section=""
            field="AssignedBilateralAgreementOffBS"
          />
          <FormInput 
            label="Loan Portfolio Created as BC (INR)" 
            value={formData && formData.LoanPortfolioCreatedBC}
            section=""
            field="LoanPortfolioCreatedBC"
          />
        </div>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px",
          marginBottom: "12px"
        }}>
          <FormInput 
            label="Outstanding Loans for Off-BS Managed (Numbers)" 
            value={formData && formData.OutstandingLoansOffBSManagedPortfolio}
            section=""
            field="OutstandingLoansOffBSManagedPortfolio"
            span={4}
          />
        </div>
        
        <CalculatedField 
          label="Assets Under Management AUM (On BS + Off BS)" 
          value={formData && formData.AUM}
        />
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px"
        }}>
          <FormInput 
            label="Total Clients (Active Borrowers) (Numbers)" 
            value={formData && formData.TotalClients}
            section=""
            field="TotalClients"
            span={4}
          />
        </div>
      </div>

      {/* PORTFOLIO AT RISK */}
      <SectionHeader title="Portfolio at Risk" date={selectedMonthName} />
      <div style={{
        backgroundColor: "#FFFFFF",
        padding: "20px",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        border: "1px solid #F3F4F6",
        borderTop: "none"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "12px",
          marginBottom: "14px"
        }}>
          <CalculatedField label="Portfolio at Risk > 30 days (INR)" value={formData && formData.PortfolioAtRisk30} />
          <CalculatedField label="Portfolio at Risk > 60 days (INR)" value={formData && formData.PortfolioAtRisk60} />
          <CalculatedField label="Portfolio at Risk > 90 days (INR)" value={formData && formData.PortfolioAtRisk90} />
          <CalculatedField label="Portfolio at Risk > 180 days (INR)" value={formData && formData.PortfolioAtRisk180} />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px"
        }}>
          <FormInput 
            label="On BS Portfolio at Risk > 30 days (INR)" 
            value={formData && formData.OnBalanceSheetPortfolioAtRisk30}
            section=""
            field="OnBalanceSheetPortfolioAtRisk30"
          />
          <FormInput 
            label="On BS Portfolio at Risk > 60 days (INR)" 
            value={formData && formData.OnBalanceSheetPortfolioAtRisk60}
            section=""
            field="OnBalanceSheetPortfolioAtRisk60"
          />
          <FormInput 
            label="On BS Portfolio at Risk > 90 days (INR)" 
            value={formData && formData.OnBalanceSheetPortfolioAtRisk90}
            section=""
            field="OnBalanceSheetPortfolioAtRisk90"
          />
          <FormInput 
            label="On BS Portfolio at Risk > 180 days (INR)" 
            value={formData && formData.OnBalanceSheetPortfolioAtRisk180}
            section=""
            field="OnBalanceSheetPortfolioAtRisk180"
          />
          <FormInput 
            label="Off BS Portfolio at Risk > 30 days (INR)" 
            value={formData && formData.OffBalanceSheetPortfolioAtRisk30}
            section=""
            field="OffBalanceSheetPortfolioAtRisk30"
          />
          <FormInput 
            label="Off BS Portfolio at Risk > 60 days (INR)" 
            value={formData && formData.OffBalanceSheetPortfolioAtRisk60}
            section=""
            field="OffBalanceSheetPortfolioAtRisk60"
          />
          <FormInput 
            label="Off BS Portfolio at Risk > 90 days (INR)" 
            value={formData && formData.OffBalanceSheetPortfolioAtRisk90}
            section=""
            field="OffBalanceSheetPortfolioAtRisk90"
          />
          <FormInput 
            label="Off BS Portfolio at Risk > 180 days (INR)" 
            value={formData && formData.OffBalanceSheetPortfolioAtRisk180}
            section=""
            field="OffBalanceSheetPortfolioAtRisk180"
          />
        </div>
      </div>

      {/* DISBURSEMENTS - FINANCIAL YEAR */}
      <SectionHeader title="Disbursements - During Financial Year" date={selectedDuring_FY} />
      <GridContainer columns={4}>
        <FormInput 
          label="Number of Loans Disbursed (Numbers)" 
          value={formData && formData.LoanDisbursedQuarter}
          section=""
          field="LoanDisbursedQuarter"
          span={2}
        />
        <FormInput 
          label="Loan Amount Disbursed (INR)" 
          value={formData && formData.LoanAmountDisbursedQuarter}
          section=""
          field="LoanAmountDisbursedQuarter"
          span={2}
        />
      </GridContainer>

      {/* DISBURSEMENTS - QUARTER */}
      <SectionHeader title="Disbursements - During Quarter" date={selectedMonthName} />
      <GridContainer columns={4}>
        <FormInput 
          label="Number of Loans Disbursed (Numbers)" 
          value={formData && formData.LoanDisbursedQuarter}
          section=""
          field="LoanDisbursedQuarter"
          span={2}
        />
        <FormInput 
          label="Loan Amount Disbursed (INR)" 
          value={formData && formData.LoanAmountDisbursedQuarter}
          section=""
          field="LoanAmountDisbursedQuarter"
          span={2}
        />
      </GridContainer>

      {/* COLLECTIONS - FINANCIAL YEAR */}
      <SectionHeader title="Collections - During Financial Year" date={selectedDuring_FY} />
      <GridContainer columns={4}>
        <FormInput 
          label="Repayment Amount Due (INR)" 
          value={formData && formData.RepaymentAmountDue}
          section=""
          field="RepaymentAmountDue"
        />
        <FormInput 
          label="Repayment Amount Collected (INR)" 
          value={formData && formData.RepaymentAmountCollected}
          section=""
          field="RepaymentAmountCollected"
        />
        <FormInput 
          label="Pre-payment Amount Collected (INR)" 
          value={formData && formData.PrePaymentAmountCollected}
          section=""
          field="PrePaymentAmountCollected"
          span={2}
        />
      </GridContainer>

      {/* COLLECTIONS - QUARTER */}
      <SectionHeader title="Collections - During Quarter" date={selectedMonthName} />
      <GridContainer columns={4}>
        <FormInput 
          label="Repayment Amount Due (INR)" 
          value={formData && formData.RepaymentAmountDue}
          section=""
          field="RepaymentAmountDue"
        />
        <FormInput 
          label="Repayment Amount Collected (INR)" 
          value={formData && formData.RepaymentAmountCollected}
          section=""
          field="RepaymentAmountCollected"
        />
        <FormInput 
          label="Pre-payment Amount Collected (INR)" 
          value={formData && formData.PrePaymentAmountCollected}
          section=""
          field="PrePaymentAmountCollected"
          span={2}
        />
      </GridContainer>

      {/* FUNDING - FINANCIAL YEAR */}
      <SectionHeader title="Total Funding/Borrowing - During Financial Year" date={selectedDuring_FY} />
      <div style={{
        backgroundColor: "#FFFFFF",
        padding: "20px",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        border: "1px solid #F3F4F6",
        borderTop: "none"
      }}>
        <CalculatedField label="Total Funding Received" value={0} />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px"
        }}>
          <FormInput 
            label="Funding from Banks (INR)" 
            value={formData && formData.FundingReceivedFromBanks}
            section=""
            field="FundingReceivedFromBanks"
          />
          <FormInput 
            label="Funding from Other FIs (INR)" 
            value={formData && formData.FundingReceivedFromOtherFIs}
            section=""
            field="FundingReceivedFromOtherFIs"
          />
          <FormInput 
            label="Securitization During Period (INR)" 
            value={formData && formData.SecuritizationDuringPeriod}
            section=""
            field="SecuritizationDuringPeriod"
            span={2}
          />
        </div>
      </div>

      {/* FUNDING - QUARTER */}
      <SectionHeader title="Total Funding/Borrowing - During Quarter" date={selectedMonthName} />
      <div style={{
        backgroundColor: "#FFFFFF",
        padding: "20px",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        border: "1px solid #F3F4F6",
        borderTop: "none"
      }}>
        <CalculatedField label="Total Funding Received" value={0} />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px"
        }}>
          <FormInput 
            label="Funding from Banks (INR)" 
            value={formData && formData.FundingReceivedFromBanks}
            section=""
            field="FundingReceivedFromBanks"
          />
          <FormInput 
            label="Funding from Other FIs (INR)" 
            value={formData && formData.FundingReceivedFromOtherFIs}
            section=""
            field="FundingReceivedFromOtherFIs"
          />
          <FormInput 
            label="Securitization During Period (INR)" 
            value={formData && formData.SecuritizationDuringPeriod}
            section=""
            field="SecuritizationDuringPeriod"
            span={2}
          />
        </div>
      </div>

      {/* CASHLESS OPERATIONS - FINANCIAL YEAR */}
      <SectionHeader title="Cashless Operations - During Financial Year" date={selectedDuring_FY} />
      <GridContainer columns={4}>
        <FormInput 
          label="% Loan Disbursed Cashless" 
          value={formData && formData.PercentLoanDisbursedCashless}
          section=""
          field="PercentLoanDisbursedCashless"
          span={2}
        />
        <FormInput 
          label="% Loan Collected Cashless" 
          value={formData && formData.PercentLoanCollectedCashless}
          section=""
          field="PercentLoanCollectedCashless"
          span={2}
        />
      </GridContainer>

      {/* CASHLESS OPERATIONS - QUARTER */}
      <SectionHeader title="Cashless Operations - During Quarter" date={selectedMonthName} />
      <GridContainer columns={4}>
        <FormInput 
          label="% Loan Disbursed Cashless" 
          value={formData && formData.PercentLoanDisbursedCashless}
          section=""
          field="PercentLoanDisbursedCashless"
          span={2}
        />
        <FormInput 
          label="% Loan Collected Cashless" 
          value={formData && formData.PercentLoanCollectedCashless}
          section=""
          field="PercentLoanCollectedCashless"
          span={2}
        />
      </GridContainer>

    </div>
  );
}

export default Overview;






