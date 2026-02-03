// // import "./OverViewStateUT.css";
// import React, { useState, useEffect } from "react";
// import { loadUserFormData } from "../utils/StorageHelper";

// function StateEquity({
//     formData,
//     handleChange,
//     handleStateDataChange,
//     setFormData,
//     numStates,
//     setNumStates   , selectedMonthName        // ✅ YEH LINE MISS THI
// ,
// }) {
//     // const [numStates, setNumStates] = useState(() => {
//     //     const storedData = loadUserFormData();
//     //     return storedData && storedData.States ? storedData.States.length : 1;
//     // });

//     // const [selectedStates, setSelectedStates] = useState(
//     //     Array(numStates).fill("")
//     // );

//     const indicators = [
//         "State",
//         "Number of Employees (in numbers)",
//         "Number of Districts (in numbers)",
//         "Number of Offices / Branches (in numbers)",
//         "Assets under management AUM (On BS + Off BS) (in INR)",
//         "Number of Active Borrowers (in numbers)",
//         "Portfolio at Risk 1 -30 days (in INR)",
//         "Portfolio at Risk > 30 days (in INR)",
//         "Portfolio at Risk > 60 days (in INR)",
//         "Portfolio at Risk > 90 days (in INR)",
//         "Portfolio at Risk > 180 days (in INR)",
//         "Net Loan Portfolio (Balance Sheet Portfolio) (in INR)",
//         "On Balance Sheet Portfolio at Risk 1 -30 days (in INR)",
//         "On Balance Sheet Portfolio at Risk > 30 days (in INR)",
//         "On Balance Sheet Portfolio at Risk > 60 days (in INR)",
//         "On Balance Sheet Portfolio at Risk > 90 days (in INR)",
//         "On Balance Sheet Portfolio at Risk > 180 days (in INR)",
//         "Off Balance Sheet Portfolio / Managed Portfolio (in INR)",
//         "Off Balance Sheet Portfolio at Risk 1 -30 days (in INR)",
//         "Off Balance Sheet Portfolio at Risk > 30 days (in INR)",
//         "Off Balance Sheet Portfolio at Risk > 60 days (in INR)",
//         "Off Balance Sheet Portfolio at Risk > 90 days (in INR)",
//         "Off Balance Sheet Portfolio at Risk > 180 days (in INR)",
//         "Number of Loan Disbursed (in Numbers) (Quarter)",
//         "Loan Amount Disbursed (in INR) (Quarter)",
//         "Repayment amount due (excluding overdue, prepayment and foreclosure demand) (in INR)",
//         "Repayment amount collected (excluding overdue, prepayment and foreclosure collected) (in INR)",
//         "Pre-payment amount collected (in INR)",
//     ];

//     const stateList = [
//         "Andhra Pradesh",
//         "Arunachal Pradesh",
//         "Assam",
//         "Bihar",
//         "Chhattisgarh",
//         "Goa",
//         "Gujarat",
//         "Haryana",
//         "Himachal Pradesh",
//         "Jharkhand",
//         "Karnataka",
//         "Kerala",
//         "Madhya Pradesh",
//         "Maharashtra",
//         "Manipur",
//         "Meghalaya",
//         "Mizoram",
//         "Nagaland",
//         "Odisha",
//         "Punjab",
//         "Rajasthan",
//         "Sikkim",
//         "Tamil Nadu",
//         "Telangana",
//         "Tripura",
//         "Uttar Pradesh",
//         "Uttarakhand",
//         "West Bengal",
//     ];

//     const mapIndicatorToKey = (indicator) => {
//         const mappings = {
//             State: "StateName",
//             "Number of Employees (in numbers)": "NumberOfEmployees",
//             "Number of Districts (in numbers)": "NumberOfDistricts",
//             "Number of Offices / Branches (in numbers)": "NumberOfBranches",
//             "Assets under management AUM (On BS + Off BS) (in INR)":
//                 "AssetsUnderManagement",
//             "Number of Active Borrowers (in numbers)": "NumberOfActiveBorrowers",
//             "Portfolio at Risk 1 -30 days (in INR)": "PortfolioRisk1_30",
//             "Portfolio at Risk > 30 days (in INR)": "PortfolioRisk30",
//             "Portfolio at Risk > 60 days (in INR)": "PortfolioRisk60",
//             "Portfolio at Risk > 90 days (in INR)": "PortfolioRisk90",
//             "Portfolio at Risk > 180 days (in INR)": "PortfolioRisk180",
//             "Net Loan Portfolio (Balance Sheet Portfolio) (in INR)":
//                 "NetLoanPortfolio",
//             "On Balance Sheet Portfolio at Risk 1 -30 days (in INR)":
//                 "OnBalanceSheetRisk1_30",
//             "On Balance Sheet Portfolio at Risk > 30 days (in INR)":
//                 "OnBalanceSheetRisk30",
//             "On Balance Sheet Portfolio at Risk > 60 days (in INR)":
//                 "OnBalanceSheetRisk60",
//             "On Balance Sheet Portfolio at Risk > 90 days (in INR)":
//                 "OnBalanceSheetRisk90",
//             "On Balance Sheet Portfolio at Risk > 180 days (in INR)":
//                 "OnBalanceSheetRisk180",
//             "Off Balance Sheet Portfolio / Managed Portfolio (in INR)":
//                 "OffBalanceSheetPortfolio",
//             "Off Balance Sheet Portfolio at Risk 1 -30 days (in INR)":
//                 "OffBalanceSheetRisk1_30",
//             "Off Balance Sheet Portfolio at Risk > 30 days (in INR)":
//                 "OffBalanceSheetRisk30",
//             "Off Balance Sheet Portfolio at Risk > 60 days (in INR)":
//                 "OffBalanceSheetRisk60",
//             "Off Balance Sheet Portfolio at Risk > 90 days (in INR)":
//                 "OffBalanceSheetRisk90",
//             "Off Balance Sheet Portfolio at Risk > 180 days (in INR)":
//                 "OffBalanceSheetRisk180",
//             "Number of Loan Disbursed (in Numbers) (Quarter)": "LoanDisbursedQuarter",
//             "Loan Amount Disbursed (in INR) (Quarter)": "LoanAmountDisbursedQuarter",
//             "Repayment amount due (excluding overdue, prepayment and foreclosure demand) (in INR)":
//                 "RepaymentAmountDue",
//             "Repayment amount collected (excluding overdue, prepayment and foreclosure collected) (in INR)":
//                 "RepaymentAmountCollected",
//             "Pre-payment amount collected (in INR)": "PrePaymentAmountCollected",
//             "Total Funding Received (in INR)": "TotalFundingReceived",
//             "Funding Received from Banks (in INR)": "FundingReceivedFromBanks",
//             "Funding Received from Other Financial Institutions (in INR)":
//                 "FundingReceivedFromOtherFIs",
//             "Securitization During Period (in INR)": "SecuritizationDuringPeriod",
//             "Percentage of Loans Disbursed Cashless (%)":
//                 "PercentLoanDisbursedCashless",
//             "Percentage of Loans Collected Cashless (%)":
//                 "PercentLoanCollectedCashless",
//         };

//         return mappings[indicator] || indicator; // Return the mapped key or default to itself
//     };
//     useEffect(() => {
//         setFormData(prev => {
//             const states = prev.States || [];

//             if (states.length === numStates) return prev;

//             let updated = [...states];

//             // increase
//             while (updated.length < numStates) {
//                 updated.push({});
//             }

//             // decrease
//             if (updated.length > numStates) {
//                 updated = updated.slice(0, numStates);
//             }

//             return { ...prev, States: updated };
//         });
//     }, [numStates, setFormData]);


//     // Update formData.States whenever numStates changes
//     // useEffect(() => {
//     //     setFormData((prevData) => {
//     //         let updatedStates = [...(prevData.States || [])];

//     //         // Increase array length if needed
//     //         while (updatedStates.length < numStates) {
//     //             updatedStates.push({ StateName: "" });
//     //         }

//     //         // Trim array if numStates is reduced
//     //         updatedStates = updatedStates.slice(0, numStates);

//     //         return { ...prevData, States: updatedStates };
//     //     });
//     // }, [numStates]);




//     // const handleStateChange = (index, value) => {
//     //     const newStates = [...selectedStates];
//     //     newStates[index] = value;
//     //     setSelectedStates(newStates);
//     // };

//     return (
//         <div
//             style={{
//                 width: "80%",
//                 backgroundColor: "#fff",
//                 padding: "20px",
//             }}
//         >

//             <form>


//                 {/* state data started */}
//                 <table
//                     className="table table-light table-bordered border-primary"
//                     style={{ width: "100%" }}
//                 >
//                     <thead>
//                         <tr className="blue-row">
//                             <th>Number of States and Union Territories Operational</th>
//                             <th>
//                                 <select
//                                     value={numStates}
//                                     onChange={(e) => setNumStates(Number(e.target.value))}
//                                 >
//                                     {[...Array(36)].map((_, index) => (
//                                         <option value={index + 1} key={index + 1}>
//                                             {index + 1}
//                                         </option>
//                                     ))}
//                                 </select>
//                             </th>
//                         </tr>

//                         <tr className="blue-row">
//                             <th>
//                                 <label className="form-label">Indicator</label>
//                             </th>
//                             <th></th>
//                             {formData.States.map((_, i) => (
//                                 <th key={i}>State {i + 1}</th>
//                             ))}

//                             <th>Total</th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {indicators.map((indicator, rowIndex) => (
//                             <tr key={rowIndex}>
//                                 <td>{indicator}</td>
//                                 <td>{indicator === "State" ? "" : ""} {selectedMonthName
//                   ? selectedMonthName
//                   : ""}</td>
//                                 {/* 
//                                 {formData.States.map((_, i) => (
//                                     <td key={i}>

//                                         <td key={i}>
//                                             {indicator === "State" ? (
//                                                 <select
//                                                     value={
//                                                         formData.States[i] && formData.States[i].StateName
//                                                             ? formData.States[i].StateName
//                                                             : ""
//                                                     }
//                                                     onChange={(e) =>
//                                                         handleStateDataChange(
//                                                             i,
//                                                             "StateName",
//                                                             e.target.value
//                                                         )
//                                                     }
//                                                 >
//                                                     <option value="">Select State</option>
//                                                     {stateList.map((state, index) => (
//                                                         <option key={index} value={state}>
//                                                             {state}
//                                                         </option>
//                                                     ))}
//                                                 </select>
//                                             ) : (
//                                                 <input
//                                                     type="text"
//                                                     className="form-control"
//                                                     value={
//                                                         formData.States[i] &&
//                                                             formData.States[i][mapIndicatorToKey(indicator)]
//                                                             ? formData.States[i][mapIndicatorToKey(indicator)]
//                                                             : ""
//                                                     }
//                                                     onChange={(e) =>
//                                                         handleStateDataChange(
//                                                             i,
//                                                             mapIndicatorToKey(indicator),
//                                                             e.target.value
//                                                         )
//                                                     }
//                                                 />
//                                             )}
//                                         </td>


//                                     </td>
//                                 ))} */}
//                                 {formData.States.map((_, i) => (
//                                     <td key={i}>
//                                         {indicator === "State" ? (
//                                             <select
//                                                 value={
//                                                     formData.States &&
//                                                         formData.States[i] &&
//                                                         formData.States[i].StateName
//                                                         ? formData.States[i].StateName
//                                                         : ""
//                                                 }
//                                                 onChange={(e) =>
//                                                     handleStateDataChange(i, "StateName", e.target.value)
//                                                 }
//                                             >
//                                                 <option value="">Select State</option>
//                                                 {stateList.map((state, index) => (
//                                                     <option key={index} value={state}>
//                                                         {state}
//                                                     </option>
//                                                 ))}
//                                             </select>
//                                         ) : (
//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 value={
//                                                     formData.States &&
//                                                         formData.States[i] &&
//                                                         formData.States[i][mapIndicatorToKey(indicator)]
//                                                         ? formData.States[i][mapIndicatorToKey(indicator)]
//                                                         : ""
//                                                 }
//                                                 onChange={(e) =>
//                                                     handleStateDataChange(
//                                                         i,
//                                                         mapIndicatorToKey(indicator),
//                                                         e.target.value
//                                                     )
//                                                 }
//                                             />
//                                         )}
//                                     </td>
//                                 ))}


//                                 <td>0</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>



//             </form>
//         </div>
//     );
// }

// export default StateEquity;


// import React, { useState, useEffect } from "react";
// import { loadUserFormData } from "../utils/StorageHelper";

// function StateEquity({
//     formData,
//     handleChange,
//     handleStateDataChange,
//     setFormData,
//     numStates,
//     setNumStates,
//     selectedMonthName,
// }) {

//     const indicators = [
//         "State",
//         "Number of Employees (in numbers)",
//         "Number of Districts (in numbers)",
//         "Number of Offices / Branches (in numbers)",
//         "Assets under management AUM (On BS + Off BS) (in INR)",
//         "Number of Active Borrowers (in numbers)",
//         "Portfolio at Risk 1 -30 days (in INR)",
//         "Portfolio at Risk > 30 days (in INR)",
//         "Portfolio at Risk > 60 days (in INR)",
//         "Portfolio at Risk > 90 days (in INR)",
//         "Portfolio at Risk > 180 days (in INR)",
//         "Net Loan Portfolio (Balance Sheet Portfolio) (in INR)",
//         "On Balance Sheet Portfolio at Risk 1 -30 days (in INR)",
//         "On Balance Sheet Portfolio at Risk > 30 days (in INR)",
//         "On Balance Sheet Portfolio at Risk > 60 days (in INR)",
//         "On Balance Sheet Portfolio at Risk > 90 days (in INR)",
//         "On Balance Sheet Portfolio at Risk > 180 days (in INR)",
//         "Off Balance Sheet Portfolio / Managed Portfolio (in INR)",
//         "Off Balance Sheet Portfolio at Risk 1 -30 days (in INR)",
//         "Off Balance Sheet Portfolio at Risk > 30 days (in INR)",
//         "Off Balance Sheet Portfolio at Risk > 60 days (in INR)",
//         "Off Balance Sheet Portfolio at Risk > 90 days (in INR)",
//         "Off Balance Sheet Portfolio at Risk > 180 days (in INR)",
//         "Number of Loan Disbursed (in Numbers) (Quarter)",
//         "Loan Amount Disbursed (in INR) (Quarter)",
//         "Repayment amount due (excluding overdue, prepayment and foreclosure demand) (in INR)",
//         "Repayment amount collected (excluding overdue, prepayment and foreclosure collected) (in INR)",
//         "Pre-payment amount collected (in INR)",
//     ];

//     const stateList = [
//         "Andhra Pradesh",
//         "Arunachal Pradesh",
//         "Assam",
//         "Bihar",
//         "Chhattisgarh",
//         "Goa",
//         "Gujarat",
//         "Haryana",
//         "Himachal Pradesh",
//         "Jharkhand",
//         "Karnataka",
//         "Kerala",
//         "Madhya Pradesh",
//         "Maharashtra",
//         "Manipur",
//         "Meghalaya",
//         "Mizoram",
//         "Nagaland",
//         "Odisha",
//         "Punjab",
//         "Rajasthan",
//         "Sikkim",
//         "Tamil Nadu",
//         "Telangana",
//         "Tripura",
//         "Uttar Pradesh",
//         "Uttarakhand",
//         "West Bengal",
//     ];

//     const mapIndicatorToKey = (indicator) => {
//         const mappings = {
//             State: "StateName",
//             "Number of Employees (in numbers)": "NumberOfEmployees",
//             "Number of Districts (in numbers)": "NumberOfDistricts",
//             "Number of Offices / Branches (in numbers)": "NumberOfBranches",
//             "Assets under management AUM (On BS + Off BS) (in INR)":
//                 "AssetsUnderManagement",
//             "Number of Active Borrowers (in numbers)": "NumberOfActiveBorrowers",
//             "Portfolio at Risk 1 -30 days (in INR)": "PortfolioRisk1_30",
//             "Portfolio at Risk > 30 days (in INR)": "PortfolioRisk30",
//             "Portfolio at Risk > 60 days (in INR)": "PortfolioRisk60",
//             "Portfolio at Risk > 90 days (in INR)": "PortfolioRisk90",
//             "Portfolio at Risk > 180 days (in INR)": "PortfolioRisk180",
//             "Net Loan Portfolio (Balance Sheet Portfolio) (in INR)":
//                 "NetLoanPortfolio",
//             "On Balance Sheet Portfolio at Risk 1 -30 days (in INR)":
//                 "OnBalanceSheetRisk1_30",
//             "On Balance Sheet Portfolio at Risk > 30 days (in INR)":
//                 "OnBalanceSheetRisk30",
//             "On Balance Sheet Portfolio at Risk > 60 days (in INR)":
//                 "OnBalanceSheetRisk60",
//             "On Balance Sheet Portfolio at Risk > 90 days (in INR)":
//                 "OnBalanceSheetRisk90",
//             "On Balance Sheet Portfolio at Risk > 180 days (in INR)":
//                 "OnBalanceSheetRisk180",
//             "Off Balance Sheet Portfolio / Managed Portfolio (in INR)":
//                 "OffBalanceSheetPortfolio",
//             "Off Balance Sheet Portfolio at Risk 1 -30 days (in INR)":
//                 "OffBalanceSheetRisk1_30",
//             "Off Balance Sheet Portfolio at Risk > 30 days (in INR)":
//                 "OffBalanceSheetRisk30",
//             "Off Balance Sheet Portfolio at Risk > 60 days (in INR)":
//                 "OffBalanceSheetRisk60",
//             "Off Balance Sheet Portfolio at Risk > 90 days (in INR)":
//                 "OffBalanceSheetRisk90",
//             "Off Balance Sheet Portfolio at Risk > 180 days (in INR)":
//                 "OffBalanceSheetRisk180",
//             "Number of Loan Disbursed (in Numbers) (Quarter)": "LoanDisbursedQuarter",
//             "Loan Amount Disbursed (in INR) (Quarter)": "LoanAmountDisbursedQuarter",
//             "Repayment amount due (excluding overdue, prepayment and foreclosure demand) (in INR)":
//                 "RepaymentAmountDue",
//             "Repayment amount collected (excluding overdue, prepayment and foreclosure collected) (in INR)":
//                 "RepaymentAmountCollected",
//             "Pre-payment amount collected (in INR)": "PrePaymentAmountCollected",
//         };

//         return mappings[indicator] || indicator;
//     };

//     useEffect(() => {
//         setFormData(prev => {
//             const states = prev.States || [];

//             if (states.length === numStates) return prev;

//             let updated = [...states];

//             while (updated.length < numStates) {
//                 updated.push({});
//             }

//             if (updated.length > numStates) {
//                 updated = updated.slice(0, numStates);
//             }

//             return { ...prev, States: updated };
//         });
//     }, [numStates, setFormData]);

//     // Section header component matching Overview
//     const SectionHeader = ({ title, date }) => (
//         <div style={{
//             background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
//             padding: "14px 20px",
//             borderRadius: "10px 10px 0 0",
//             marginTop: "24px",
//             marginBottom: "0",
//         }}>
//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                 <h6 style={{
//                     color: "#ffffff",
//                     fontSize: "13px",
//                     fontWeight: "800",
//                     margin: 0,
//                     textTransform: "uppercase",
//                     letterSpacing: "1px"
//                 }}>
//                     {title}
//                 </h6>
//                 {date && (
//                     <span style={{
//                         color: "#ffffff",
//                         fontSize: "12px",
//                         fontWeight: "600",
//                         backgroundColor: "rgba(255,255,255,0.2)",
//                         padding: "5px 14px",
//                         borderRadius: "20px"
//                     }}>
//                         {date}
//                     </span>
//                 )}
//             </div>
//         </div>
//     );

//     return (
//         <div style={{
//             backgroundColor: "#f8f9fa",
//             padding: "20px",
//             fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//         }}>

//             {/* STATE-WISE DATA */}
//             <SectionHeader title="State-wise Operational Data" date={selectedMonthName} />
//             <div style={{
//                 backgroundColor: "#ffffff",
//                 padding: "24px",
//                 borderRadius: "0 0 10px 10px",
//                 boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//                 marginBottom: "8px"
//             }}>
//                 {/* Number of States Selector */}
//                 <div style={{ marginBottom: "24px" }}>
//                     <label style={{
//                         display: "block",
//                         fontSize: "12px",
//                         fontWeight: "700",
//                         color: "#1f2937",
//                         marginBottom: "8px",
//                         letterSpacing: "0.3px"
//                     }}>
//                         Number of States and Union Territories Operational
//                     </label>
//                     <select
//                         style={{
//                             padding: "8px 12px",
//                             border: "1px solid #e5e7eb",
//                             borderRadius: "6px",
//                             fontSize: "13px",
//                             fontWeight: "500",
//                             color: "#111827",
//                             outline: "none",
//                             backgroundColor: "#ffffff",
//                             cursor: "pointer",
//                             minWidth: "100px"
//                         }}
//                         value={numStates}
//                         onChange={(e) => setNumStates(Number(e.target.value))}
//                         onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                         onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     >
//                         {[...Array(36)].map((_, index) => (
//                             <option value={index + 1} key={index + 1}>
//                                 {index + 1}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 {/* State Data Table */}
//                 <div style={{
//                     border: "1px solid #e5e7eb",
//                     borderRadius: "8px",
//                     overflow: "auto",
//                     maxHeight: "800px"
//                 }}>
//                     <table style={{ 
//                         width: "100%", 
//                         borderCollapse: "collapse",
//                         minWidth: `${400 + (numStates * 150)}px`
//                     }}>
//                         <thead style={{ position: "sticky", top: 0, zIndex: 10 }}>
//                             <tr style={{
//                                 background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
//                             }}>
//                                 <th style={{
//                                     padding: "12px 16px",
//                                     textAlign: "left",
//                                     color: "#ffffff",
//                                     fontSize: "12px",
//                                     fontWeight: "700",
//                                     textTransform: "uppercase",
//                                     letterSpacing: "0.5px",
//                                     minWidth: "300px",
//                                     position: "sticky",
//                                     left: 0,
//                                     background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
//                                     zIndex: 11
//                                 }}>Indicator</th>
//                                 <th style={{
//                                     padding: "12px 16px",
//                                     textAlign: "center",
//                                     color: "#ffffff",
//                                     fontSize: "12px",
//                                     fontWeight: "700",
//                                     textTransform: "uppercase",
//                                     letterSpacing: "0.5px",
//                                     minWidth: "100px"
//                                 }}>Period</th>
//                                 {formData.States.map((_, i) => (
//                                     <th key={i} style={{
//                                         padding: "12px 16px",
//                                         textAlign: "center",
//                                         color: "#ffffff",
//                                         fontSize: "12px",
//                                         fontWeight: "700",
//                                         textTransform: "uppercase",
//                                         letterSpacing: "0.5px",
//                                         minWidth: "150px"
//                                     }}>
//                                         State {i + 1}
//                                     </th>
//                                 ))}
//                                 <th style={{
//                                     padding: "12px 16px",
//                                     textAlign: "center",
//                                     color: "#ffffff",
//                                     fontSize: "12px",
//                                     fontWeight: "700",
//                                     textTransform: "uppercase",
//                                     letterSpacing: "0.5px",
//                                     minWidth: "100px"
//                                 }}>Total</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {indicators.map((indicator, rowIndex) => (
//                                 <tr key={rowIndex} style={{
//                                     borderBottom: "1px solid #f3f4f6",
//                                     backgroundColor: rowIndex % 2 === 0 ? "#ffffff" : "#f9fafb"
//                                 }}>
//                                     <td style={{
//                                         padding: "12px 16px",
//                                         fontSize: "12px",
//                                         fontWeight: "600",
//                                         color: "#374151",
//                                         position: "sticky",
//                                         left: 0,
//                                         backgroundColor: rowIndex % 2 === 0 ? "#ffffff" : "#f9fafb",
//                                         zIndex: 9,
//                                         borderRight: "1px solid #e5e7eb"
//                                     }}>
//                                         {indicator}
//                                     </td>
//                                     <td style={{
//                                         padding: "8px",
//                                         textAlign: "center",
//                                         fontSize: "11px",
//                                         fontWeight: "500",
//                                         color: "#6b7280"
//                                     }}>
//                                         {indicator === "State" ? "" : selectedMonthName || ""}
//                                     </td>
//                                     {formData.States.map((_, i) => (
//                                         <td key={i} style={{ padding: "8px" }}>
//                                             {indicator === "State" ? (
//                                                 <select
//                                                     style={{
//                                                         width: "100%",
//                                                         height: "36px",
//                                                         padding: "0 10px",
//                                                         border: "1px solid #e5e7eb",
//                                                         borderRadius: "6px",
//                                                         fontSize: "13px",
//                                                         fontWeight: "500",
//                                                         color: "#111827",
//                                                         outline: "none",
//                                                         transition: "border 0.2s",
//                                                         backgroundColor: "#ffffff",
//                                                         cursor: "pointer"
//                                                     }}
//                                                     value={
//                                                         formData.States &&
//                                                         formData.States[i] &&
//                                                         formData.States[i].StateName
//                                                             ? formData.States[i].StateName
//                                                             : ""
//                                                     }
//                                                     onChange={(e) =>
//                                                         handleStateDataChange(i, "StateName", e.target.value)
//                                                     }
//                                                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                                                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                                                 >
//                                                     <option value="">Select State</option>
//                                                     {stateList.map((state, index) => (
//                                                         <option key={index} value={state}>
//                                                             {state}
//                                                         </option>
//                                                     ))}
//                                                 </select>
//                                             ) : (
//                                                 <input
//                                                     type="text"
//                                                     style={{
//                                                         width: "100%",
//                                                         height: "36px",
//                                                         padding: "0 10px",
//                                                         border: "1px solid #e5e7eb",
//                                                         borderRadius: "6px",
//                                                         fontSize: "13px",
//                                                         fontWeight: "500",
//                                                         color: "#111827",
//                                                         outline: "none",
//                                                         transition: "border 0.2s",
//                                                         backgroundColor: "#ffffff"
//                                                     }}
//                                                     value={
//                                                         formData.States &&
//                                                         formData.States[i] &&
//                                                         formData.States[i][mapIndicatorToKey(indicator)]
//                                                             ? formData.States[i][mapIndicatorToKey(indicator)]
//                                                             : ""
//                                                     }
//                                                     onChange={(e) =>
//                                                         handleStateDataChange(
//                                                             i,
//                                                             mapIndicatorToKey(indicator),
//                                                             e.target.value
//                                                         )
//                                                     }
//                                                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                                                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                                                 />
//                                             )}
//                                         </td>
//                                     ))}
//                                     <td style={{
//                                         padding: "12px 16px",
//                                         textAlign: "center",
//                                         fontSize: "13px",
//                                         fontWeight: "600",
//                                         color: "#1e40af",
//                                         backgroundColor: "#f0f9ff"
//                                     }}>
//                                         0
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//         </div>
//     );
// }

// export default StateEquity;






// import React, { useState, useEffect } from "react";
// import { loadUserFormData } from "../utils/StorageHelper";

// function StateEquity({
//     formData,
//     handleChange,
//     handleStateDataChange,
//     setFormData,
//     numStates,
//     setNumStates,
//     selectedMonthName,
// }) {

//     const indicators = [
//         "State",
//         "Number of Employees (in numbers)",
//         "Number of Districts (in numbers)",
//         "Number of Offices / Branches (in numbers)",
//         "Assets under management AUM (On BS + Off BS) (in INR)",
//         "Number of Active Borrowers (in numbers)",
//         "Portfolio at Risk 1 -30 days (in INR)",
//         "Portfolio at Risk > 30 days (in INR)",
//         "Portfolio at Risk > 60 days (in INR)",
//         "Portfolio at Risk > 90 days (in INR)",
//         "Portfolio at Risk > 180 days (in INR)",
//         "Net Loan Portfolio (Balance Sheet Portfolio) (in INR)",
//         "On Balance Sheet Portfolio at Risk 1 -30 days (in INR)",
//         "On Balance Sheet Portfolio at Risk > 30 days (in INR)",
//         "On Balance Sheet Portfolio at Risk > 60 days (in INR)",
//         "On Balance Sheet Portfolio at Risk > 90 days (in INR)",
//         "On Balance Sheet Portfolio at Risk > 180 days (in INR)",
//         "Off Balance Sheet Portfolio / Managed Portfolio (in INR)",
//         "Off Balance Sheet Portfolio at Risk 1 -30 days (in INR)",
//         "Off Balance Sheet Portfolio at Risk > 30 days (in INR)",
//         "Off Balance Sheet Portfolio at Risk > 60 days (in INR)",
//         "Off Balance Sheet Portfolio at Risk > 90 days (in INR)",
//         "Off Balance Sheet Portfolio at Risk > 180 days (in INR)",
//         "Number of Loan Disbursed (in Numbers) (Quarter)",
//         "Loan Amount Disbursed (in INR) (Quarter)",
//         "Repayment amount due (excluding overdue, prepayment and foreclosure demand) (in INR)",
//         "Repayment amount collected (excluding overdue, prepayment and foreclosure collected) (in INR)",
//         "Pre-payment amount collected (in INR)",
//     ];

//     const stateList = [
//         "Andhra Pradesh",
//         "Arunachal Pradesh",
//         "Assam",
//         "Bihar",
//         "Chhattisgarh",
//         "Goa",
//         "Gujarat",
//         "Haryana",
//         "Himachal Pradesh",
//         "Jharkhand",
//         "Karnataka",
//         "Kerala",
//         "Madhya Pradesh",
//         "Maharashtra",
//         "Manipur",
//         "Meghalaya",
//         "Mizoram",
//         "Nagaland",
//         "Odisha",
//         "Punjab",
//         "Rajasthan",
//         "Sikkim",
//         "Tamil Nadu",
//         "Telangana",
//         "Tripura",
//         "Uttar Pradesh",
//         "Uttarakhand",
//         "West Bengal",
//     ];

//     const mapIndicatorToKey = (indicator) => {
//         const mappings = {
//             State: "StateName",
//             "Number of Employees (in numbers)": "NumberOfEmployees",
//             "Number of Districts (in numbers)": "NumberOfDistricts",
//             "Number of Offices / Branches (in numbers)": "NumberOfBranches",
//             "Assets under management AUM (On BS + Off BS) (in INR)":
//                 "AssetsUnderManagement",
//             "Number of Active Borrowers (in numbers)": "NumberOfActiveBorrowers",
//             "Portfolio at Risk 1 -30 days (in INR)": "PortfolioRisk1_30",
//             "Portfolio at Risk > 30 days (in INR)": "PortfolioRisk30",
//             "Portfolio at Risk > 60 days (in INR)": "PortfolioRisk60",
//             "Portfolio at Risk > 90 days (in INR)": "PortfolioRisk90",
//             "Portfolio at Risk > 180 days (in INR)": "PortfolioRisk180",
//             "Net Loan Portfolio (Balance Sheet Portfolio) (in INR)":
//                 "NetLoanPortfolio",
//             "On Balance Sheet Portfolio at Risk 1 -30 days (in INR)":
//                 "OnBalanceSheetRisk1_30",
//             "On Balance Sheet Portfolio at Risk > 30 days (in INR)":
//                 "OnBalanceSheetRisk30",
//             "On Balance Sheet Portfolio at Risk > 60 days (in INR)":
//                 "OnBalanceSheetRisk60",
//             "On Balance Sheet Portfolio at Risk > 90 days (in INR)":
//                 "OnBalanceSheetRisk90",
//             "On Balance Sheet Portfolio at Risk > 180 days (in INR)":
//                 "OnBalanceSheetRisk180",
//             "Off Balance Sheet Portfolio / Managed Portfolio (in INR)":
//                 "OffBalanceSheetPortfolio",
//             "Off Balance Sheet Portfolio at Risk 1 -30 days (in INR)":
//                 "OffBalanceSheetRisk1_30",
//             "Off Balance Sheet Portfolio at Risk > 30 days (in INR)":
//                 "OffBalanceSheetRisk30",
//             "Off Balance Sheet Portfolio at Risk > 60 days (in INR)":
//                 "OffBalanceSheetRisk60",
//             "Off Balance Sheet Portfolio at Risk > 90 days (in INR)":
//                 "OffBalanceSheetRisk90",
//             "Off Balance Sheet Portfolio at Risk > 180 days (in INR)":
//                 "OffBalanceSheetRisk180",
//             "Number of Loan Disbursed (in Numbers) (Quarter)": "LoanDisbursedQuarter",
//             "Loan Amount Disbursed (in INR) (Quarter)": "LoanAmountDisbursedQuarter",
//             "Repayment amount due (excluding overdue, prepayment and foreclosure demand) (in INR)":
//                 "RepaymentAmountDue",
//             "Repayment amount collected (excluding overdue, prepayment and foreclosure collected) (in INR)":
//                 "RepaymentAmountCollected",
//             "Pre-payment amount collected (in INR)": "PrePaymentAmountCollected",
//         };

//         return mappings[indicator] || indicator;
//     };

//     // Handle state data change - FIXED
//     const handleStateChange = (stateIndex, field, value) => {
//         setFormData(prev => {
//             const updatedStates = [...(prev.States || [])];
//             if (!updatedStates[stateIndex]) {
//                 updatedStates[stateIndex] = {};
//             }
//             updatedStates[stateIndex] = {
//                 ...updatedStates[stateIndex],
//                 [field]: value
//             };
//             return { ...prev, States: updatedStates };
//         });
//     };

//     // Get available states for a dropdown (excluding already selected ones)
//     const getAvailableStates = (currentIndex) => {
//         const selectedStates = (formData.States || [])
//             .map((state, idx) => idx !== currentIndex && state && state.StateName ? state.StateName : null)
//             .filter(Boolean);
        
//         return stateList.filter(state => !selectedStates.includes(state));
//     };

//     useEffect(() => {
//         setFormData(prev => {
//             const states = prev.States || [];

//             if (states.length === numStates) return prev;

//             let updated = [...states];

//             while (updated.length < numStates) {
//                 updated.push({});
//             }

//             if (updated.length > numStates) {
//                 updated = updated.slice(0, numStates);
//             }

//             return { ...prev, States: updated };
//         });
//     }, [numStates, setFormData]);

//     // Section header component - compact
//     const SectionHeader = ({ title, date }) => (
//         <div style={{
//             background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
//             padding: "10px 16px",
//             borderRadius: "8px 8px 0 0",
//             marginTop: "16px",
//             marginBottom: "0",
//         }}>
//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                 <h6 style={{
//                     color: "#ffffff",
//                     fontSize: "12px",
//                     fontWeight: "800",
//                     margin: 0,
//                     textTransform: "uppercase",
//                     letterSpacing: "0.8px",
//                     textAlign: "left"
//                 }}>
//                     {title}
//                 </h6>
//                 {date && (
//                     <span style={{
//                         color: "#ffffff",
//                         fontSize: "11px",
//                         fontWeight: "600",
//                         backgroundColor: "rgba(255,255,255,0.2)",
//                         padding: "4px 12px",
//                         borderRadius: "16px"
//                     }}>
//                         {date}
//                     </span>
//                 )}
//             </div>
//         </div>
//     );

//     return (
//         <div style={{
//             backgroundColor: "#f8f9fa",
//             padding: "16px",
//             fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//         }}>

//             {/* STATE-WISE DATA */}
//             <SectionHeader title="State-wise Operational Data" date={selectedMonthName} />
//             <div style={{
//                 backgroundColor: "#ffffff",
//                 padding: "16px",
//                 borderRadius: "0 0 8px 8px",
//                 boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
//                 marginBottom: "4px"
//             }}>
//                 {/* Number of States Selector */}
//                 <div style={{ marginBottom: "16px" }}>
//                     <label style={{
//                         display: "block",
//                         fontSize: "11px",
//                         fontWeight: "700",
//                         color: "#1f2937",
//                         marginBottom: "6px",
//                         letterSpacing: "0.2px",
//                         textAlign: "left"
//                     }}>
//                         Number of States and Union Territories Operational
//                     </label>
//                     <select
//                         style={{
//                             padding: "6px 10px",
//                             border: "1px solid #e5e7eb",
//                             borderRadius: "6px",
//                             fontSize: "12px",
//                             fontWeight: "500",
//                             color: "#111827",
//                             outline: "none",
//                             backgroundColor: "#ffffff",
//                             cursor: "pointer",
//                             minWidth: "100px"
//                         }}
//                         value={numStates}
//                         onChange={(e) => setNumStates(Number(e.target.value))}
//                         onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                         onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     >
//                         {[...Array(36)].map((_, index) => (
//                             <option value={index + 1} key={index + 1}>
//                                 {index + 1}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 {/* State Data Table */}
//                 <div style={{
//                     border: "1px solid #e5e7eb",
//                     borderRadius: "6px",
//                     overflow: "auto",
//                     maxHeight: "700px"
//                 }}>
//                     <table style={{ 
//                         width: "100%", 
//                         borderCollapse: "collapse",
//                         minWidth: `${350 + (numStates * 140)}px`
//                     }}>
//                         <thead style={{ position: "sticky", top: 0, zIndex: 10 }}>
//                             <tr style={{
//                                 background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
//                             }}>
//                                 <th style={{
//                                     padding: "10px 12px",
//                                     textAlign: "left",
//                                     color: "#ffffff",
//                                     fontSize: "11px",
//                                     fontWeight: "700",
//                                     textTransform: "uppercase",
//                                     letterSpacing: "0.4px",
//                                     minWidth: "280px",
//                                     position: "sticky",
//                                     left: 0,
//                                     background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
//                                     zIndex: 11
//                                 }}>Indicator</th>
//                                 <th style={{
//                                     padding: "10px 12px",
//                                     textAlign: "left",
//                                     color: "#ffffff",
//                                     fontSize: "11px",
//                                     fontWeight: "700",
//                                     textTransform: "uppercase",
//                                     letterSpacing: "0.4px",
//                                     minWidth: "90px"
//                                 }}>Period</th>
//                                 {formData.States && formData.States.map((_, i) => (
//                                     <th key={i} style={{
//                                         padding: "10px 12px",
//                                         textAlign: "left",
//                                         color: "#ffffff",
//                                         fontSize: "11px",
//                                         fontWeight: "700",
//                                         textTransform: "uppercase",
//                                         letterSpacing: "0.4px",
//                                         minWidth: "140px"
//                                     }}>
//                                         State {i + 1}
//                                     </th>
//                                 ))}
//                                 <th style={{
//                                     padding: "10px 12px",
//                                     textAlign: "left",
//                                     color: "#ffffff",
//                                     fontSize: "11px",
//                                     fontWeight: "700",
//                                     textTransform: "uppercase",
//                                     letterSpacing: "0.4px",
//                                     minWidth: "90px"
//                                 }}>Total</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {indicators.map((indicator, rowIndex) => (
//                                 <tr key={rowIndex} style={{
//                                     borderBottom: "1px solid #f3f4f6",
//                                     backgroundColor: rowIndex % 2 === 0 ? "#ffffff" : "#f9fafb"
//                                 }}>
//                                     <td style={{
//                                         padding: "10px 12px",
//                                         fontSize: "11px",
//                                         fontWeight: "600",
//                                         color: "#374151",
//                                         position: "sticky",
//                                         left: 0,
//                                         backgroundColor: rowIndex % 2 === 0 ? "#ffffff" : "#f9fafb",
//                                         zIndex: 9,
//                                         borderRight: "1px solid #e5e7eb",
//                                         textAlign: "left"
//                                     }}>
//                                         {indicator}
//                                     </td>
//                                     <td style={{
//                                         padding: "8px",
//                                         textAlign: "left",
//                                         fontSize: "10px",
//                                         fontWeight: "500",
//                                         color: "#6b7280"
//                                     }}>
//                                         {indicator === "State" ? "" : selectedMonthName || ""}
//                                     </td>
//                                     {formData.States && formData.States.map((_, i) => (
//                                         <td key={i} style={{ padding: "6px" }}>
//                                             {indicator === "State" ? (
//                                                 <select
//                                                     style={{
//                                                         width: "100%",
//                                                         height: "32px",
//                                                         padding: "0 8px",
//                                                         border: "1px solid #e5e7eb",
//                                                         borderRadius: "5px",
//                                                         fontSize: "12px",
//                                                         fontWeight: "500",
//                                                         color: "#111827",
//                                                         outline: "none",
//                                                         transition: "border 0.2s",
//                                                         backgroundColor: "#ffffff",
//                                                         cursor: "pointer",
//                                                         textAlign: "left"
//                                                     }}
//                                                     value={
//                                                         formData.States &&
//                                                         formData.States[i] &&
//                                                         formData.States[i].StateName
//                                                             ? formData.States[i].StateName
//                                                             : ""
//                                                     }
//                                                     onChange={(e) => handleStateChange(i, "StateName", e.target.value)}
//                                                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                                                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                                                 >
//                                                     <option value="">Select State</option>
//                                                     {formData.States[i] && formData.States[i].StateName && (
//                                                         <option value={formData.States[i].StateName}>
//                                                             {formData.States[i].StateName}
//                                                         </option>
//                                                     )}
//                                                     {getAvailableStates(i).map((state, index) => (
//                                                         <option key={index} value={state}>
//                                                             {state}
//                                                         </option>
//                                                     ))}
//                                                 </select>
//                                             ) : (
//                                                 <input
//                                                     type="text"
//                                                     style={{
//                                                         width: "100%",
//                                                         height: "32px",
//                                                         padding: "0 8px",
//                                                         border: "1px solid #e5e7eb",
//                                                         borderRadius: "5px",
//                                                         fontSize: "12px",
//                                                         fontWeight: "500",
//                                                         color: "#111827",
//                                                         outline: "none",
//                                                         transition: "border 0.2s",
//                                                         backgroundColor: "#ffffff",
//                                                         textAlign: "left"
//                                                     }}
//                                                     value={
//                                                         formData.States &&
//                                                         formData.States[i] &&
//                                                         formData.States[i][mapIndicatorToKey(indicator)]
//                                                             ? formData.States[i][mapIndicatorToKey(indicator)]
//                                                             : ""
//                                                     }
//                                                     onChange={(e) => handleStateChange(i, mapIndicatorToKey(indicator), e.target.value)}
//                                                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                                                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                                                 />
//                                             )}
//                                         </td>
//                                     ))}
//                                     <td style={{
//                                         padding: "10px 12px",
//                                         textAlign: "left",
//                                         fontSize: "12px",
//                                         fontWeight: "600",
//                                         color: "#1e40af",
//                                         backgroundColor: "#f0f9ff"
//                                     }}>
//                                         0
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//         </div>
//     );
// }

// export default StateEquity;
import React, { useState, useEffect } from "react";
import { loadUserFormData } from "../utils/StorageHelper";

function StateEquity({
    formData,
    handleChange,
    handleStateDataChange,
    setFormData,
    numStates,
    setNumStates,
    selectedMonthName,
}) {

    const indicators = [
        "State",
        "Number of Employees (in numbers)",
        "Number of Districts (in numbers)",
        "Number of Offices / Branches (in numbers)",
        "Assets under management AUM (On BS + Off BS) (in INR)",
        "Number of Active Borrowers (in numbers)",
        "Portfolio at Risk 1 -30 days (in INR)",
        "Portfolio at Risk > 30 days (in INR)",
        "Portfolio at Risk > 60 days (in INR)",
        "Portfolio at Risk > 90 days (in INR)",
        "Portfolio at Risk > 180 days (in INR)",
        "Net Loan Portfolio (Balance Sheet Portfolio) (in INR)",
        "On Balance Sheet Portfolio at Risk 1 -30 days (in INR)",
        "On Balance Sheet Portfolio at Risk > 30 days (in INR)",
        "On Balance Sheet Portfolio at Risk > 60 days (in INR)",
        "On Balance Sheet Portfolio at Risk > 90 days (in INR)",
        "On Balance Sheet Portfolio at Risk > 180 days (in INR)",
        "Off Balance Sheet Portfolio / Managed Portfolio (in INR)",
        "Off Balance Sheet Portfolio at Risk 1 -30 days (in INR)",
        "Off Balance Sheet Portfolio at Risk > 30 days (in INR)",
        "Off Balance Sheet Portfolio at Risk > 60 days (in INR)",
        "Off Balance Sheet Portfolio at Risk > 90 days (in INR)",
        "Off Balance Sheet Portfolio at Risk > 180 days (in INR)",
        "Number of Loan Disbursed (in Numbers) (Quarter)",
        "Loan Amount Disbursed (in INR) (Quarter)",
        "Repayment amount due (excluding overdue, prepayment and foreclosure demand) (in INR)",
        "Repayment amount collected (excluding overdue, prepayment and foreclosure collected) (in INR)",
        "Pre-payment amount collected (in INR)",
    ];

    const stateList = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal",
    ];



const [numOfOnBalanceMP, setNumOfOnBalanceMP] = useState(
  formData.ManagedPortfolioPP && formData.ManagedPortfolioPP.length
    ? formData.ManagedPortfolioPP.length
    : 1
);

const handleMicroFinanceRowChange = (e, key, emptyRow) => {
  const count = Number(e.target.value);

  setFormData(prev => {
    const rows = prev[key] ? [...prev[key]] : [];

    while (rows.length < count) {
      rows.push({ ...emptyRow });
    }

    if (rows.length > count) {
      rows.length = count;
    }

    return { ...prev, [key]: rows };
  });
};



const handleRepeaterChange = (key, index, field, value) => {
  setFormData(prev => {
    const rows = prev[key] ? [...prev[key]] : [];
    if (!rows[index]) rows[index] = {};
    rows[index][field] = value;
    return { ...prev, [key]: rows };
  });
};


    const mapIndicatorToKey = function(indicator) {
        const mappings = {
            State: "StateName",
            "Number of Employees (in numbers)": "NumberOfEmployees",
            "Number of Districts (in numbers)": "NumberOfDistricts",
            "Number of Offices / Branches (in numbers)": "NumberOfBranches",
            "Assets under management AUM (On BS + Off BS) (in INR)":
                "AssetsUnderManagement",
            "Number of Active Borrowers (in numbers)": "NumberOfActiveBorrowers",
            "Portfolio at Risk 1 -30 days (in INR)": "PortfolioRisk1_30",
            "Portfolio at Risk > 30 days (in INR)": "PortfolioRisk30",
            "Portfolio at Risk > 60 days (in INR)": "PortfolioRisk60",
            "Portfolio at Risk > 90 days (in INR)": "PortfolioRisk90",
            "Portfolio at Risk > 180 days (in INR)": "PortfolioRisk180",
            "Net Loan Portfolio (Balance Sheet Portfolio) (in INR)":
                "NetLoanPortfolio",
            "On Balance Sheet Portfolio at Risk 1 -30 days (in INR)":
                "OnBalanceSheetRisk1_30",
            "On Balance Sheet Portfolio at Risk > 30 days (in INR)":
                "OnBalanceSheetRisk30",
            "On Balance Sheet Portfolio at Risk > 60 days (in INR)":
                "OnBalanceSheetRisk60",
            "On Balance Sheet Portfolio at Risk > 90 days (in INR)":
                "OnBalanceSheetRisk90",
            "On Balance Sheet Portfolio at Risk > 180 days (in INR)":
                "OnBalanceSheetRisk180",
            "Off Balance Sheet Portfolio / Managed Portfolio (in INR)":
                "OffBalanceSheetPortfolio",
            "Off Balance Sheet Portfolio at Risk 1 -30 days (in INR)":
                "OffBalanceSheetRisk1_30",
            "Off Balance Sheet Portfolio at Risk > 30 days (in INR)":
                "OffBalanceSheetRisk30",
            "Off Balance Sheet Portfolio at Risk > 60 days (in INR)":
                "OffBalanceSheetRisk60",
            "Off Balance Sheet Portfolio at Risk > 90 days (in INR)":
                "OffBalanceSheetRisk90",
            "Off Balance Sheet Portfolio at Risk > 180 days (in INR)":
                "OffBalanceSheetRisk180",
            "Number of Loan Disbursed (in Numbers) (Quarter)": "LoanDisbursedQuarter",
            "Loan Amount Disbursed (in INR) (Quarter)": "LoanAmountDisbursedQuarter",
            "Repayment amount due (excluding overdue, prepayment and foreclosure demand) (in INR)":
                "RepaymentAmountDue",
            "Repayment amount collected (excluding overdue, prepayment and foreclosure collected) (in INR)":
                "RepaymentAmountCollected",
            "Pre-payment amount collected (in INR)": "PrePaymentAmountCollected",
        };

        return mappings[indicator] || indicator;
    };

    // Handle state data change
    const handleStateChange = function(stateIndex, field, value) {
        setFormData(function(prev) {
            const updatedStates = [].concat(prev.States || []);
            if (!updatedStates[stateIndex]) {
                updatedStates[stateIndex] = {};
            }
            updatedStates[stateIndex] = Object.assign({}, updatedStates[stateIndex], {
                [field]: value
            });
            return Object.assign({}, prev, { States: updatedStates });
        });
    };

    // Get available states for a dropdown (excluding already selected ones)
    const getAvailableStates = function(currentIndex) {
        const selectedStates = (formData.States || [])
            .map(function(state, idx) {
                return idx !== currentIndex && state && state.StateName ? state.StateName : null;
            })
            .filter(Boolean);
        
        return stateList.filter(function(state) {
            return !selectedStates.includes(state);
        });
    };

    useEffect(function() {
        setFormData(function(prev) {
            const states = prev.States || [];

            if (states.length === numStates) return prev;

            var updated = [].concat(states);

            while (updated.length < numStates) {
                updated.push({});
            }

            if (updated.length > numStates) {
                updated = updated.slice(0, numStates);
            }

            return Object.assign({}, prev, { States: updated });
        });
    }, [numStates, setFormData]);

    // Section header component
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
                        textAlign: "left",
                        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
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

    return (
        <div style={{
            backgroundColor: "#F7F9FB",
            padding: "20px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            minHeight: "100vh"
        }}>

            {/* STATE-WISE DATA */}
            <SectionHeader title="State-wise Operational Data" date={selectedMonthName} />
            <div style={{
                backgroundColor: "#FFFFFF",
                padding: "20px",
                borderRadius: "0 0 8px 8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                marginBottom: "6px",
                border: "1px solid #F3F4F6",
                borderTop: "none"
            }}>
                {/* Number of States Selector with Plus Button */}
                <div style={{ 
                    marginBottom: "18px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px"
                }}>
                    <div style={{ flex: 1 }}>
                        <label style={{
                            display: "block",
                            fontSize: "11px",
                            fontWeight: "700",
                            color: "#374151",
                            marginBottom: "8px",
                            letterSpacing: "0.5px",
                            textAlign: "left",
                            textTransform: "uppercase",
                            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                        }}>
                            Number of States and Union Territories Operational
                        </label>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px"
                        }}>
                            <select
                                style={{
                                    padding: "8px 12px",
                                    border: "2px solid #E8E8E8",
                                    borderRadius: "6px",
                                    fontSize: "13px",
                                    fontWeight: "500",
                                    color: "#1F2937",
                                    outline: "none",
                                    backgroundColor: "#FFFFFF",
                                    cursor: "pointer",
                                    minWidth: "80px",
                                    transition: "all 0.25s ease",
                                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                    textAlign: "left"
                                }}
                                value={numStates}
                                onChange={function(e) { setNumStates(Number(e.target.value)); }}
                                onFocus={function(e) { 
                                    e.target.style.borderColor = "#39B1AC";
                                    e.target.style.boxShadow = "0 0 0 3px rgba(57, 177, 172, 0.1)";
                                }}
                                onBlur={function(e) { 
                                    e.target.style.borderColor = "#E8E8E8";
                                    e.target.style.boxShadow = "none";
                                }}
                            >
                                {[].concat(Array(36)).map(function(_, index) {
                                    return (
                                        <option value={index + 1} key={index + 1}>
                                            {index + 1}
                                        </option>
                                    );
                                })}
                            </select>
                            <button
                                onClick={function() {
                                    if (numStates < 36) {
                                        setNumStates(numStates + 1);
                                    }
                                }}
                                style={{
                                    width: "36px",
                                    height: "36px",
                                    border: "none",
                                    borderRadius: "6px",
                                    background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
                                    color: "#FFFFFF",
                                    fontSize: "20px",
                                    fontWeight: "700",
                                    cursor: numStates < 36 ? "pointer" : "not-allowed",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transition: "all 0.25s ease",
                                    opacity: numStates < 36 ? 1 : 0.5,
                                    boxShadow: "0 2px 6px rgba(43, 96, 173, 0.2)"
                                }}
                                onMouseOver={function(e) {
                                    if (numStates < 36) {
                                        e.target.style.transform = "scale(1.05)";
                                        e.target.style.boxShadow = "0 4px 10px rgba(43, 96, 173, 0.3)";
                                    }
                                }}
                                onMouseOut={function(e) {
                                    e.target.style.transform = "scale(1)";
                                    e.target.style.boxShadow = "0 2px 6px rgba(43, 96, 173, 0.2)";
                                }}
                                disabled={numStates >= 36}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>

                {/* State Data Table */}
                <div style={{
                    border: "1px solid #E8E8E8",
                    borderRadius: "8px",
                    overflow: "auto",
                    maxHeight: "700px"
                }}>
                    <table style={{ 
                        width: "100%", 
                        borderCollapse: "collapse",
                        minWidth: (350 + (numStates * 140)) + "px"
                    }}>
                        <thead style={{ position: "sticky", top: 0, zIndex: 10 }}>
                            <tr style={{
                                background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
                            }}>
                                <th style={{
                                    padding: "12px 16px",
                                    textAlign: "left",
                                    color: "#FFFFFF",
                                    fontSize: "12px",
                                    fontWeight: "700",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.6px",
                                    minWidth: "280px",
                                    position: "sticky",
                                    left: 0,
                                    background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
                                    zIndex: 11,
                                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                                }}>Indicator</th>
                                <th style={{
                                    padding: "12px 16px",
                                    textAlign: "left",
                                    color: "#FFFFFF",
                                    fontSize: "12px",
                                    fontWeight: "700",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.6px",
                                    minWidth: "90px",
                                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                                }}>Period</th>
                                {formData.States && formData.States.map(function(_, i) {
                                    return (
                                        <th key={i} style={{
                                            padding: "12px 16px",
                                            textAlign: "left",
                                            color: "#FFFFFF",
                                            fontSize: "12px",
                                            fontWeight: "700",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.6px",
                                            minWidth: "140px",
                                            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                                        }}>
                                            State {i + 1}
                                        </th>
                                    );
                                })}
                                <th style={{
                                    padding: "12px 16px",
                                    textAlign: "left",
                                    color: "#FFFFFF",
                                    fontSize: "12px",
                                    fontWeight: "700",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.6px",
                                    minWidth: "90px",
                                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                                }}>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {indicators.map(function(indicator, rowIndex) {
                                return (
                                    <tr key={rowIndex} style={{
                                        borderBottom: "1px solid #F3F4F6",
                                        backgroundColor: rowIndex % 2 === 0 ? "#FFFFFF" : "#FAFBFC"
                                    }}>
                                        <td style={{
                                            padding: "12px 16px",
                                            fontSize: "12px",
                                            fontWeight: "600",
                                            color: "#374151",
                                            position: "sticky",
                                            left: 0,
                                            backgroundColor: rowIndex % 2 === 0 ? "#FFFFFF" : "#FAFBFC",
                                            zIndex: 9,
                                            borderRight: "1px solid #E8E8E8",
                                            textAlign: "left",
                                            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                                        }}>
                                            {indicator}
                                        </td>
                                        <td style={{
                                            padding: "10px 12px",
                                            textAlign: "left",
                                            fontSize: "11px",
                                            fontWeight: "500",
                                            color: "#6B7280",
                                            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                                        }}>
                                            {indicator === "State" ? "" : selectedMonthName || ""}
                                        </td>
                                        {formData.States && formData.States.map(function(_, i) {
                                            const cellId = "cell-" + rowIndex + "-" + i + "-" + Math.random();
                                            
                                            return (
                                                <td key={i} style={{ padding: "8px" }}>
                                                    {indicator === "State" ? (
                                                        <select
                                                            id={cellId}
                                                            style={{
                                                                width: "100%",
                                                                height: "36px",
                                                                padding: "0 10px",
                                                                border: "2px solid #E8E8E8",
                                                                borderRadius: "5px",
                                                                fontSize: "13px",
                                                                fontWeight: "500",
                                                                color: "#1F2937",
                                                                outline: "none",
                                                                transition: "all 0.25s ease",
                                                                backgroundColor: "#FFFFFF",
                                                                cursor: "pointer",
                                                                textAlign: "left",
                                                                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                                                            }}
                                                            value={
                                                                formData.States &&
                                                                formData.States[i] &&
                                                                formData.States[i].StateName
                                                                    ? formData.States[i].StateName
                                                                    : ""
                                                            }
                                                            onChange={function(e) { handleStateChange(i, "StateName", e.target.value); }}
                                                            onFocus={function(e) { 
                                                                e.target.style.borderColor = "#39B1AC";
                                                                e.target.style.boxShadow = "0 0 0 3px rgba(57, 177, 172, 0.1)";
                                                            }}
                                                            onBlur={function(e) { 
                                                                e.target.style.borderColor = "#E8E8E8";
                                                                e.target.style.boxShadow = "none";
                                                            }}
                                                        >
                                                            <option value="">Select State</option>
                                                            {formData.States[i] && formData.States[i].StateName && (
                                                                <option value={formData.States[i].StateName}>
                                                                    {formData.States[i].StateName}
                                                                </option>
                                                            )}
                                                            {getAvailableStates(i).map(function(state, index) {
                                                                return (
                                                                    <option key={index} value={state}>
                                                                        {state}
                                                                    </option>
                                                                );
                                                            })}
                                                        </select>
                                                    ) : (
                                                        <input
                                                            id={cellId}
                                                            type="text"
                                                            style={{
                                                                width: "100%",
                                                                height: "36px",
                                                                padding: "0 10px",
                                                                border: "2px solid #E8E8E8",
                                                                borderRadius: "5px",
                                                                fontSize: "13px",
                                                                fontWeight: "500",
                                                                color: "#1F2937",
                                                                outline: "none",
                                                                transition: "all 0.25s ease",
                                                                backgroundColor: "#FFFFFF",
                                                                textAlign: "left",
                                                                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                                                            }}
                                                            value={
                                                                formData.States &&
                                                                formData.States[i] &&
                                                                formData.States[i][mapIndicatorToKey(indicator)]
                                                                    ? formData.States[i][mapIndicatorToKey(indicator)]
                                                                    : ""
                                                            }
                                                            onChange={function(e) { handleStateChange(i, mapIndicatorToKey(indicator), e.target.value); }}
                                                            onFocus={function(e) { 
                                                                e.target.style.borderColor = "#39B1AC";
                                                                e.target.style.boxShadow = "0 0 0 3px rgba(57, 177, 172, 0.1)";
                                                            }}
                                                            onBlur={function(e) { 
                                                                e.target.style.borderColor = "#E8E8E8";
                                                                e.target.style.boxShadow = "none";
                                                            }}
                                                        />
                                                    )}
                                                </td>
                                            );
                                        })}
                                        <td style={{
                                            padding: "12px 16px",
                                            textAlign: "left",
                                            fontSize: "13px",
                                            fontWeight: "700",
                                            color: "#0F766E",
                                            background: "linear-gradient(135deg, #E0F7F6 0%, #CCF3F1 100%)",
                                            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                                        }}>
                                            0
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

               {/* ON-BALANCE SHEET MANAGED PORTFOLIO */}
      <SectionHeader title="Details of existing equity" date={selectedMonthName} />
      <div style={{
        backgroundColor: "#FFFFFF",
        padding: "20px",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        marginBottom: "6px",
        border: "1px solid #F3F4F6",
        borderTop: "none",
        
      }}>
        <div style={{ marginBottom: "20px" }}>
          <label style={{
            fontSize: "11px",
            fontWeight: "700",
            color: "#374151",
            marginRight: "10px",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            textAlign: "left",

          }}>
            Number of rows:
          </label>
          <select
            style={{
              padding: "8px 14px",
              border: "2px solid #E8E8E8",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "500",
              color: "#1F2937",
              outline: "none",
              backgroundColor: "#FFFFFF",
              cursor: "pointer",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              transition: "all 0.25s ease"
            }}
            value={numOfOnBalanceMP}
            onChange={(e) => {
              setNumOfOnBalanceMP(Number(e.target.value));
              handleMicroFinanceRowChange(e, "ManagedPortfolioPP", {
                SNo: "",
                ProductName: "",
                ProductType: "",
                AmountOutstanding: "",
                InterestRate: "",
              });
            }}
            onFocus={(e) => { 
              e.target.style.borderColor = "#39B1AC";
              e.target.style.boxShadow = "0 0 0 3px rgba(57, 177, 172, 0.1)";
            }}
            onBlur={(e) => { 
              e.target.style.borderColor = "#E8E8E8";
              e.target.style.boxShadow = "none";
            }}
          >
            {[...Array(150)].map((_, i) => (
              <option value={i + 1} key={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        <div style={{
          border: "1px solid #E8E8E8",
          borderRadius: "8px",
          overflow: "hidden"
        }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{
                background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
              }}>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                  width: "70px"
                }}>S. No.</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Equity provider</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}> Type</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Amount</th>
                {/* <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Interest Rates (%) (Declining Basis)</th> */}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: numOfOnBalanceMP }).map((_, index) => (
                <tr key={index + 1} style={{
                  borderBottom: "1px solid #F3F4F6",
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F9FAFB"
                }}>
                  <td style={{ 
                    padding: "12px 16px",
                    textAlign: "left",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#6B7280",
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                  }}>{index + 1}</td>
                  <td style={{ padding: "12px 16px" }}>
                    <input
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
                      value={formData.ManagedPortfolioPP[index].ProductName || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "ManagedPortfolioPP",
                          index,
                          "ProductName",
                          e.target.value
                        )
                      }
                      onFocus={(e) => { 
                        e.target.style.borderColor = "#39B1AC";
                        e.target.style.boxShadow = "0 0 0 3px rgba(57, 177, 172, 0.1)";
                      }}
                      onBlur={(e) => { 
                        e.target.style.borderColor = "#E8E8E8";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </td>
                  <td style={{ padding: "12px 16px" }}>
                    <input
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
                      value={formData.ManagedPortfolioPP[index].ProductType || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "ManagedPortfolioPP",
                          index,
                          "ProductType",
                          e.target.value
                        )
                      }
                      onFocus={(e) => { 
                        e.target.style.borderColor = "#39B1AC";
                        e.target.style.boxShadow = "0 0 0 3px rgba(57, 177, 172, 0.1)";
                      }}
                      onBlur={(e) => { 
                        e.target.style.borderColor = "#E8E8E8";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </td>
                  <td style={{ padding: "12px 16px" }}>
                    <input
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
                      value={formData.ManagedPortfolioPP[index].AmountOutstanding || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "ManagedPortfolioPP",
                          index,
                          "AmountOutstanding",
                          e.target.value
                        )
                      }
                      onFocus={(e) => { 
                        e.target.style.borderColor = "#39B1AC";
                        e.target.style.boxShadow = "0 0 0 3px rgba(57, 177, 172, 0.1)";
                      }}
                      onBlur={(e) => { 
                        e.target.style.borderColor = "#E8E8E8";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </td>
              
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
           {/* ON-BALANCE SHEET MANAGED PORTFOLIO */}
      <SectionHeader title="Details of fresh equity received during the period" date={selectedMonthName} />
        <div style={{
        backgroundColor: "#FFFFFF",
        padding: "20px",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        marginBottom: "6px",
        border: "1px solid #F3F4F6",
        borderTop: "none",
        
      }}>
        <div style={{ marginBottom: "20px" }}>
          <label style={{
            fontSize: "11px",
            fontWeight: "700",
            color: "#374151",
            marginRight: "10px",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            textAlign: "left",

          }}>
            Number of rows:
          </label>
          <select
            style={{
              padding: "8px 14px",
              border: "2px solid #E8E8E8",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "500",
              color: "#1F2937",
              outline: "none",
              backgroundColor: "#FFFFFF",
              cursor: "pointer",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              transition: "all 0.25s ease"
            }}
            value={numOfOnBalanceMP}
            onChange={(e) => {
              setNumOfOnBalanceMP(Number(e.target.value));
              handleMicroFinanceRowChange(e, "ManagedPortfolioPP", {
                SNo: "",
                ProductName: "",
                ProductType: "",
                AmountOutstanding: "",
                InterestRate: "",
              });
            }}
            onFocus={(e) => { 
              e.target.style.borderColor = "#39B1AC";
              e.target.style.boxShadow = "0 0 0 3px rgba(57, 177, 172, 0.1)";
            }}
            onBlur={(e) => { 
              e.target.style.borderColor = "#E8E8E8";
              e.target.style.boxShadow = "none";
            }}
          >
            {[...Array(5)].map((_, i) => (
              <option value={i + 1} key={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        <div style={{
          border: "1px solid #E8E8E8",
          borderRadius: "8px",
          overflow: "hidden"
        }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{
                background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
              }}>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                  width: "70px"
                }}>S. No.</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Equity provider</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}> Type</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Amount</th>
                {/* <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Interest Rates (%) (Declining Basis)</th> */}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: numOfOnBalanceMP }).map((_, index) => (
                <tr key={index + 1} style={{
                  borderBottom: "1px solid #F3F4F6",
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F9FAFB"
                }}>
                  <td style={{ 
                    padding: "12px 16px",
                    textAlign: "left",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#6B7280",
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                  }}>{index + 1}</td>
                  <td style={{ padding: "12px 16px" }}>
                    <input
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
                      value={formData.ManagedPortfolioPP[index].ProductName || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "ManagedPortfolioPP",
                          index,
                          "ProductName",
                          e.target.value
                        )
                      }
                      onFocus={(e) => { 
                        e.target.style.borderColor = "#39B1AC";
                        e.target.style.boxShadow = "0 0 0 3px rgba(57, 177, 172, 0.1)";
                      }}
                      onBlur={(e) => { 
                        e.target.style.borderColor = "#E8E8E8";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </td>
                  <td style={{ padding: "12px 16px" }}>
                    <input
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
                      value={formData.ManagedPortfolioPP[index].ProductType || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "ManagedPortfolioPP",
                          index,
                          "ProductType",
                          e.target.value
                        )
                      }
                      onFocus={(e) => { 
                        e.target.style.borderColor = "#39B1AC";
                        e.target.style.boxShadow = "0 0 0 3px rgba(57, 177, 172, 0.1)";
                      }}
                      onBlur={(e) => { 
                        e.target.style.borderColor = "#E8E8E8";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </td>
                  <td style={{ padding: "12px 16px" }}>
                    <input
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
                      value={formData.ManagedPortfolioPP[index].AmountOutstanding || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "ManagedPortfolioPP",
                          index,
                          "AmountOutstanding",
                          e.target.value
                        )
                      }
                      onFocus={(e) => { 
                        e.target.style.borderColor = "#39B1AC";
                        e.target.style.boxShadow = "0 0 0 3px rgba(57, 177, 172, 0.1)";
                      }}
                      onBlur={(e) => { 
                        e.target.style.borderColor = "#E8E8E8";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </td>
              
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

                 {/* ON-BALANCE SHEET MANAGED PORTFOLIO */}
      <SectionHeader title="Details of equity bought back/redeemed during the period" date={selectedMonthName} />
      <div style={{
        backgroundColor: "#FFFFFF",
        padding: "20px",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        marginBottom: "6px",
        border: "1px solid #F3F4F6",
        borderTop: "none",
        
      }}>
        <div style={{ marginBottom: "20px" }}>
          <label style={{
            fontSize: "11px",
            fontWeight: "700",
            color: "#374151",
            marginRight: "10px",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            textAlign: "left",

          }}>
            Number of rows:
          </label>
          <select
            style={{
              padding: "8px 14px",
              border: "2px solid #E8E8E8",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "500",
              color: "#1F2937",
              outline: "none",
              backgroundColor: "#FFFFFF",
              cursor: "pointer",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              transition: "all 0.25s ease"
            }}
            value={numOfOnBalanceMP}
            onChange={(e) => {
              setNumOfOnBalanceMP(Number(e.target.value));
              handleMicroFinanceRowChange(e, "ManagedPortfolioPP", {
                SNo: "",
                ProductName: "",
                ProductType: "",
                AmountOutstanding: "",
                InterestRate: "",
              });
            }}
            onFocus={(e) => { 
              e.target.style.borderColor = "#39B1AC";
              e.target.style.boxShadow = "0 0 0 3px rgba(57, 177, 172, 0.1)";
            }}
            onBlur={(e) => { 
              e.target.style.borderColor = "#E8E8E8";
              e.target.style.boxShadow = "none";
            }}
          >
            {[...Array(5)].map((_, i) => (
              <option value={i + 1} key={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        <div style={{
          border: "1px solid #E8E8E8",
          borderRadius: "8px",
          overflow: "hidden"
        }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{
                background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
              }}>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                  width: "70px"
                }}>S. No.</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Equity provider</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}> Type</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Amount</th>
                {/* <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Interest Rates (%) (Declining Basis)</th> */}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: numOfOnBalanceMP }).map((_, index) => (
                <tr key={index + 1} style={{
                  borderBottom: "1px solid #F3F4F6",
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F9FAFB"
                }}>
                  <td style={{ 
                    padding: "12px 16px",
                    textAlign: "left",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#6B7280",
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                  }}>{index + 1}</td>
                  <td style={{ padding: "12px 16px" }}>
                    <input
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
                      value={formData.ManagedPortfolioPP[index].ProductName || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "ManagedPortfolioPP",
                          index,
                          "ProductName",
                          e.target.value
                        )
                      }
                      onFocus={(e) => { 
                        e.target.style.borderColor = "#39B1AC";
                        e.target.style.boxShadow = "0 0 0 3px rgba(57, 177, 172, 0.1)";
                      }}
                      onBlur={(e) => { 
                        e.target.style.borderColor = "#E8E8E8";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </td>
                  <td style={{ padding: "12px 16px" }}>
                    <input
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
                      value={formData.ManagedPortfolioPP[index].ProductType || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "ManagedPortfolioPP",
                          index,
                          "ProductType",
                          e.target.value
                        )
                      }
                      onFocus={(e) => { 
                        e.target.style.borderColor = "#39B1AC";
                        e.target.style.boxShadow = "0 0 0 3px rgba(57, 177, 172, 0.1)";
                      }}
                      onBlur={(e) => { 
                        e.target.style.borderColor = "#E8E8E8";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </td>
                  <td style={{ padding: "12px 16px" }}>
                    <input
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
                      value={formData.ManagedPortfolioPP[index].AmountOutstanding || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "ManagedPortfolioPP",
                          index,
                          "AmountOutstanding",
                          e.target.value
                        )
                      }
                      onFocus={(e) => { 
                        e.target.style.borderColor = "#39B1AC";
                        e.target.style.boxShadow = "0 0 0 3px rgba(57, 177, 172, 0.1)";
                      }}
                      onBlur={(e) => { 
                        e.target.style.borderColor = "#E8E8E8";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </td>
              
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        </div>
    );
}

export default StateEquity;