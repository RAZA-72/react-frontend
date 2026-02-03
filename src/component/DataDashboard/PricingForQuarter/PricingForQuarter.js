// import React, { useState } from "react";
// import { loadUserFormData } from "../utils/StorageHelper";

// function PricingForQuarter({
//   formData,
//   handleRepeaterChange,
//   handleMicroFinanceRowChange,
//   quarterList, selectedMonthName,        // ✅ YEH LINE MISS THI
//   setSelectedMonthName,Quarter, setQuarter ,
//   selectedDuring_FY,
//   setselectedDuring_FY
// }) {
//   // const [numOfMicroFinance, setNumOfMicroFinance] = useState(1);
//   const [numOfMicroFinance, setNumOfMicroFinance] = useState(
//     formData.MicrofinanceLoans.length || 1
//   );
//   const [numOfNonMicroFinance, setNumOfNonMicroFinance] = useState(() => {
//     const storedData = loadUserFormData();
//     return storedData.NonMicrofinanceLoans
//       ? storedData.NonMicrofinanceLoans.length
//       : 1;
//   });

//   const [numOfOnBalanceMP, setNumOfOnBalanceMP] = useState(() => {
//     const storedData = loadUserFormData();
//     return storedData.ManagedPortfolio ? storedData.ManagedPortfolio.length : 1;
//   });
//   const [numOfOffBalanceMP, setNumOfOffBalanceMP] = useState(() => {
//     const storedData = loadUserFormData();
//     return storedData.OffBalanceManagedPortfolio
//       ? storedData.OffBalanceManagedPortfolio.length
//       : 1;
//   });

//   return (
//     <div
//       style={{
//         width: "80%",
//         backgroundColor: "fff",
//         padding: "20px",
//       }}
//     >

    
//       <form>
//         {/* On-Balance Sheet (Microfinance Loans) table */}
//         <label>Choose number of rows : </label>
//         <select
//           value={numOfMicroFinance}
//           onChange={(e) => {
//             setNumOfMicroFinance(Number(e.target.value));
//             handleMicroFinanceRowChange(e, "MicrofinanceLoans", {
//               SNo: "",
//               ProductName: "",
//               AmountDisbursed: "",
//               NoOfAccounts: "",
//               InterestRates: "",
//             });
//           }}
//         >
//           {[...Array(400)].map((_, i) => (
//             <option value={i + 1} key={i + 1}>
//               {i + 1}
//             </option>
//           ))}
//         </select>

//         <table
//           class="table table-light table-bordered border-primary"
//           style={{ width: "100%" }}
//         >
//           <thead>
//             <tr className="blue-row">
//               <th colSpan={2}>List of products offered</th>
//               <th colSpan={3}>During the quarter {Quarter 
// ? Quarter
// : ""}</th>
//             </tr>

//             <tr className="blue-row">
//               <th></th>
//               <th></th>
//               <th colSpan={3}>On-Balance Sheet (Microfinance Loans)</th>
//             </tr>

//             <tr className="pink-row">
//               <th>S. No.</th>
//               <th>Product Name</th>
//               <th>Amount disbursed during the quarter (in INR)</th>
//               <th>No. of accounts disbursed during the quarter</th>
//               <th>
//                 Interest Rates (%) (declining basis), (NOT including any other
//                 fees)
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {Array.from({ length: numOfMicroFinance }).map((_, index) => (
//               <tr key={index + 1}>
//                 <td>{index + 1}</td>
//                 <td>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={formData.MicrofinanceLoans[index].ProductName || ""}
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "MicrofinanceLoans",
//                         index,
//                         "ProductName",
//                         e.target.value
//                       )
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={
//                       formData.MicrofinanceLoans[index].AmountDisbursed || ""
//                     }
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "MicrofinanceLoans",
//                         index,
//                         "AmountDisbursed",
//                         e.target.value
//                       )
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={formData.MicrofinanceLoans[index].NoOfAccounts || ""}
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "MicrofinanceLoans",
//                         index,
//                         "NoOfAccounts",
//                         e.target.value
//                       )
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={
//                       formData.MicrofinanceLoans[index].InterestRates || ""
//                     }
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "MicrofinanceLoans",
//                         index,
//                         "InterestRates",
//                         e.target.value
//                       )
//                     }
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>

//           {/* <tbody>
//             {Array.from({ length: numOfMicroFinance }).map((_, index) => (
//               <tr key={index + 1}>
//                 <td>{index + 1}</td>
//                 <td>
//                   <input type="text" class="form-control" />
//                 </td>
//                 <td>
//                   <input type="text" class="form-control" />
//                 </td>
//                 <td>
//                   <input type="text" class="form-control" />
//                 </td>
//                 <td>
//                   <input type="text" class="form-control" />
//                 </td>
//               </tr>
//             ))}
//           </tbody> */}
//         </table>
//         <br />
//         <br />

//         {/* On-Balance Sheet (Non-Microfinance Loans)		
//  table */}

//         <label>Choose number of rows : </label>
//         <select
//           value={numOfNonMicroFinance}
//           onChange={(e) => {
//             setNumOfNonMicroFinance(Number(e.target.value));
//             handleMicroFinanceRowChange(e, "NonMicrofinanceLoans", {
//               SNo: "",
//               ProductName: "",
//               AmountOutstanding: "",
//               NoOfAccounts: "",
//               InterestRate: "",
//             });
//           }}
//         >
//           {[...Array(400)].map((_, i) => (
//             <option value={i + 1} key={i + 1}>
//               {i + 1}
//             </option>
//           ))}
//         </select>

//         <table
//           class="table table-light table-bordered border-primary"
//           style={{ width: "100%" }}
//         >
//           <thead>
//             <tr className="blue-row">
//               <th colSpan={2}>List of products offered</th>
//               <th colSpan={3}>During the quarter {Quarter 
// ? Quarter
// : ""}</th>
//             </tr>

//             <tr className="blue-row">
//               <th></th>
//               <th></th>
//               <th colSpan={3}>On-Balance Sheet (Non-Microfinance Loans)</th>
//             </tr>

//             <tr className="pink-row">
//               <th>S. No.</th>
//               <th>Product Name</th>
//               <th>Amount disbursed during the quarter (in INR)</th>
//               <th>No. of accounts disbursed during the quarter</th>
//               <th>
//                 Interest Rates (%) (declining basis), (NOT including any other
//                 fees)
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {Array.from({ length: numOfNonMicroFinance }).map((_, index) => (
//               <tr key={index + 1}>
//                 <td>{index + 1}</td>
//                 <td>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={
//                       formData.NonMicrofinanceLoans[index].ProductName || ""
//                     }
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "NonMicrofinanceLoans",
//                         index,
//                         "ProductName",
//                         e.target.value
//                       )
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={
//                       formData.NonMicrofinanceLoans[index].AmountDisbursed || ""
//                     }
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "NonMicrofinanceLoans",
//                         index,
//                         "AmountDisbursed",
//                         e.target.value
//                       )
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={
//                       formData.NonMicrofinanceLoans[index].NoOfAccounts || ""
//                     }
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "NonMicrofinanceLoans",
//                         index,
//                         "NoOfAccounts",
//                         e.target.value
//                       )
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={
//                       formData.NonMicrofinanceLoans[index].InterestRate || ""
//                     }
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "NonMicrofinanceLoans",
//                         index,
//                         "InterestRate",
//                         e.target.value
//                       )
//                     }
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//           {/* <tbody>
//             {Array.from({ length: numOfNonMicroFinance }).map((_, index) => (
//               <tr key={index + 1}>
//                 <td>{index + 1}</td>
//                 <td>
//                   <input type="text" class="form-control" />
//                 </td>
//                 <td>
//                   <input type="text" class="form-control" />
//                 </td>
//                 <td>
//                   <input type="text" class="form-control" />
//                 </td>
//                 <td>
//                   <input type="text" class="form-control" />
//                 </td>
//               </tr>
//             ))}
//           </tbody> */}
//         </table>
//         <br />
//         <br />

//         {/* On-BS Managed portfolio table */}
//         {/* <label>Choose number of rows : </label>
//         <select onChange={(e) => setNumOfOnBalanceMP(e.target.value)}>
//           {[...Array(400)].map((_, i) => (
//             <option value={i + 1} key={i + 1}>
//               {i + 1}
//             </option>
//           ))}
//         </select> */}
//         <label>Choose number of rows : </label>
//         <select
//           value={numOfOnBalanceMP}
//           onChange={(e) => {
//             setNumOfOnBalanceMP(Number(e.target.value));
//             handleMicroFinanceRowChange(e, "ManagedPortfolio", {
//               SNo: "",
//               ProductName: "",
//               AmountOutstanding: "",
//               NoOfAccounts: "",
//               InterestRate: "",
//             });
//           }}
//         >
//           {[...Array(400)].map((_, i) => (
//             <option value={i + 1} key={i + 1}>
//               {i + 1}
//             </option>
//           ))}
//         </select>

//         <table
//           class="table table-light table-bordered border-primary"
//           style={{ width: "100%" }}
//         >
//           <thead>
//             <tr className="blue-row">
//               <th colSpan={2}>List of products offered</th>
//               <th colSpan={3}>During the quarter {Quarter 
// ? Quarter
// : ""}</th>
//             </tr>

//             <tr className="blue-row">
//               <th></th>
//               <th></th>
//               <th colSpan={3}>On-BS Managed portfolio</th>
//             </tr>

//             <tr className="pink-row">
//               <th>S. No.</th>
//               <th>Product Name</th>
//               <th>Amount disbursed during the quarter (in INR)</th>
//               <th>No. of accounts disbursed during the quarter</th>
//               <th>
//                 Interest Rates (%) (declining basis), (NOT including any other
//                 fees)
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {Array.from({ length: numOfOnBalanceMP }).map((_, index) => (
//               <tr key={index + 1}>
//                 <td>{index + 1}</td>
//                 <td>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={formData.ManagedPortfolio[index].ProductName || ""}
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "ManagedPortfolio",
//                         index,
//                         "ProductName",
//                         e.target.value
//                       )
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={
//                       formData.ManagedPortfolio[index].AmountDisbursed || ""
//                     }
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "ManagedPortfolio",
//                         index,
//                         "AmountDisbursed",
//                         e.target.value
//                       )
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={formData.ManagedPortfolio[index].NoOfAccounts || ""}
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "ManagedPortfolio",
//                         index,
//                         "NoOfAccounts",
//                         e.target.value
//                       )
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={formData.ManagedPortfolio[index].InterestRate || ""}
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "ManagedPortfolio",
//                         index,
//                         "InterestRate",
//                         e.target.value
//                       )
//                     }
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//           {/* <tbody>
//             {Array.from({ length: numOfOnBalanceMP }).map((_, index) => (
//               <tr key={index + 1}>
//                 <td>{index + 1}</td>
//                 <td>
//                   <input type="text" class="form-control" />
//                 </td>
//                 <td>
//                   <input type="text" class="form-control" />
//                 </td>
//                 <td>
//                   <input type="text" class="form-control" />
//                 </td>
//                 <td>
//                   <input type="text" class="form-control" />
//                 </td>
//               </tr>
//             ))}
//           </tbody> */}
//         </table>
//         <br />
//         <br />

//         {/* Off-BS Managed portfolio		 table */}
//         {/* <label>Choose number of rows : </label>
//         <select onChange={(e) => setNumOfOffBalanceMP(e.target.value)}>
//           {[...Array(400)].map((_, i) => (
//             <option value={i + 1} key={i + 1}>
//               {i + 1}
//             </option>
//           ))}
//         </select> */}
//         <label>Choose number of rows : </label>
//         <select
//           value={numOfOffBalanceMP}
//           onChange={(e) => {
//             setNumOfOffBalanceMP(Number(e.target.value));
//             handleMicroFinanceRowChange(e, "OffBalanceManagedPortfolio", {
//               SNo: "",
//               ProductName: "",
//               AmountOutstanding: "",
//               NoOfAccounts: "",
//               InterestRate: "",
//             });
//           }}
//         >
//           {[...Array(400)].map((_, i) => (
//             <option value={i + 1} key={i + 1}>
//               {i + 1}
//             </option>
//           ))}
//         </select>

//         <table
//           class="table table-light table-bordered border-primary"
//           style={{ width: "100%" }}
//         >
//           <thead>
//             <tr className="blue-row">
//               <th colSpan={2}>List of products offered</th>
//               <th colSpan={3}>During the quarter {Quarter 
// ? Quarter
// : ""}</th>
//             </tr>

//             <tr className="blue-row">
//               <th></th>
//               <th></th>
//               <th colSpan={3}>Off-BS Managed portfolio</th>
//             </tr>

//             <tr className="pink-row">
//               <th>S. No.</th>
//               <th>Product Name</th>
//               <th>Amount disbursed during the quarter (in INR)</th>
//               <th>No. of accounts disbursed during the quarter</th>
//               <th>
//                 Interest Rates (%) (declining basis), (NOT including any other
//                 fees)
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {Array.from({ length: numOfOffBalanceMP }).map((_, index) => (
//               <tr key={index + 1}>
//                 <td>{index + 1}</td>
//                 <td>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={formData.OffBalanceManagedPortfolio[index].ProductName || ""}
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "OffBalanceManagedPortfolio",
//                         index,
//                         "ProductName",
//                         e.target.value
//                       )
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={
//                       formData.OffBalanceManagedPortfolio[index].AmountOutstanding || ""
//                     }
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "OffBalanceManagedPortfolio",
//                         index,
//                         "AmountOutstanding",
//                         e.target.value
//                       )
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={formData.OffBalanceManagedPortfolio[index].NoOfAccounts || ""}
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "OffBalanceManagedPortfolio",
//                         index,
//                         "NoOfAccounts",
//                         e.target.value
//                       )
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={formData.OffBalanceManagedPortfolio[index].InterestRate || ""}
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "OffBalanceManagedPortfolio",
//                         index,
//                         "InterestRate",
//                         e.target.value
//                       )
//                     }
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//           {/* <tbody>
//             {Array.from({ length: numOfOffBalanceMP }).map((_, index) => (
//               <tr key={index + 1}>
//                 <td>{index + 1}</td>
//                 <td>
//                   <input type="text" class="form-control" />
//                 </td>
//                 <td>
//                   <input type="text" class="form-control" />
//                 </td>
//                 <td>
//                   <input type="text" class="form-control" />
//                 </td>
//                 <td>
//                   <input type="text" class="form-control" />
//                 </td>
//               </tr>
//             ))}
//           </tbody> */}
//         </table>
//         <br />
//         <br />
//       </form>
//     </div>
//   );
// }

// export default PricingForQuarter;

// import React, { useState } from "react";
// import { loadUserFormData } from "../utils/StorageHelper";

// function PricingForQuarter({
//   formData,
//   handleRepeaterChange,
//   handleMicroFinanceRowChange,
//   quarterList, 
//   selectedMonthName,
//   setSelectedMonthName,
//   Quarter, 
//   setQuarter,
//   selectedDuring_FY,
//   setselectedDuring_FY
// }) {
//   const [numOfMicroFinance, setNumOfMicroFinance] = useState(
//     formData.MicrofinanceLoans.length || 1
//   );
//   const [numOfNonMicroFinance, setNumOfNonMicroFinance] = useState(() => {
//     const storedData = loadUserFormData();
//     return storedData.NonMicrofinanceLoans
//       ? storedData.NonMicrofinanceLoans.length
//       : 1;
//   });

//   const [numOfOnBalanceMP, setNumOfOnBalanceMP] = useState(() => {
//     const storedData = loadUserFormData();
//     return storedData.ManagedPortfolio ? storedData.ManagedPortfolio.length : 1;
//   });
//   const [numOfOffBalanceMP, setNumOfOffBalanceMP] = useState(() => {
//     const storedData = loadUserFormData();
//     return storedData.OffBalanceManagedPortfolio
//       ? storedData.OffBalanceManagedPortfolio.length
//       : 1;
//   });

//   // Section header component matching Overview
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
//             During the Quarter: {date}
//           </span>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div style={{
//       backgroundColor: "#f8f9fa",
//       padding: "20px",
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     }}>

//       {/* ON-BALANCE SHEET (MICROFINANCE LOANS) */}
//       <SectionHeader title="On-Balance Sheet (Microfinance Loans)" date={Quarter} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "24px",
//         borderRadius: "0 0 10px 10px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//         marginBottom: "8px"
//       }}>
//         <div style={{ marginBottom: "20px" }}>
//           <label style={{
//             fontSize: "12px",
//             fontWeight: "700",
//             color: "#1f2937",
//             marginRight: "10px",
//             letterSpacing: "0.3px"
//           }}>
//             Number of rows:
//           </label>
//           <select
//             style={{
//               padding: "8px 12px",
//               border: "1px solid #e5e7eb",
//               borderRadius: "6px",
//               fontSize: "13px",
//               fontWeight: "500",
//               color: "#111827",
//               outline: "none",
//               backgroundColor: "#ffffff",
//               cursor: "pointer"
//             }}
//             value={numOfMicroFinance}
//             onChange={(e) => {
//               setNumOfMicroFinance(Number(e.target.value));
//               handleMicroFinanceRowChange(e, "MicrofinanceLoans", {
//                 SNo: "",
//                 ProductName: "",
//                 AmountDisbursed: "",
//                 NoOfAccounts: "",
//                 InterestRates: "",
//               });
//             }}
//             onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//             onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//           >
//             {[...Array(400)].map((_, i) => (
//               <option value={i + 1} key={i + 1}>
//                 {i + 1}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div style={{
//           border: "1px solid #e5e7eb",
//           borderRadius: "8px",
//           overflow: "hidden"
//         }}>
//           <table style={{ width: "100%", borderCollapse: "collapse" }}>
//             <thead>
//               <tr style={{
//                 background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
//               }}>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px",
//                   width: "80px"
//                 }}>S. No.</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Product Name</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Amount Disbursed (INR)</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>No. of Accounts</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Interest Rates (%) (Declining Basis)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Array.from({ length: numOfMicroFinance }).map((_, index) => (
//                 <tr key={index + 1} style={{
//                   borderBottom: "1px solid #f3f4f6",
//                   backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9fafb"
//                 }}>
//                   <td style={{ 
//                     padding: "12px 16px",
//                     textAlign: "center",
//                     fontSize: "13px",
//                     fontWeight: "600",
//                     color: "#6b7280"
//                   }}>{index + 1}</td>
//                   <td style={{ padding: "12px 16px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "36px",
//                         padding: "0 10px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "6px",
//                         fontSize: "13px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff"
//                       }}
//                       value={formData.MicrofinanceLoans[index].ProductName || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "MicrofinanceLoans",
//                           index,
//                           "ProductName",
//                           e.target.value
//                         )
//                       }
//                       onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                       onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     />
//                   </td>
//                   <td style={{ padding: "12px 16px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "36px",
//                         padding: "0 10px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "6px",
//                         fontSize: "13px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff"
//                       }}
//                       value={formData.MicrofinanceLoans[index].AmountDisbursed || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "MicrofinanceLoans",
//                           index,
//                           "AmountDisbursed",
//                           e.target.value
//                         )
//                       }
//                       onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                       onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     />
//                   </td>
//                   <td style={{ padding: "12px 16px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "36px",
//                         padding: "0 10px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "6px",
//                         fontSize: "13px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff"
//                       }}
//                       value={formData.MicrofinanceLoans[index].NoOfAccounts || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "MicrofinanceLoans",
//                           index,
//                           "NoOfAccounts",
//                           e.target.value
//                         )
//                       }
//                       onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                       onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     />
//                   </td>
//                   <td style={{ padding: "12px 16px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "36px",
//                         padding: "0 10px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "6px",
//                         fontSize: "13px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff"
//                       }}
//                       value={formData.MicrofinanceLoans[index].InterestRates || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "MicrofinanceLoans",
//                           index,
//                           "InterestRates",
//                           e.target.value
//                         )
//                       }
//                       onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                       onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* ON-BALANCE SHEET (NON-MICROFINANCE LOANS) */}
//       <SectionHeader title="On-Balance Sheet (Non-Microfinance Loans)" date={Quarter} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "24px",
//         borderRadius: "0 0 10px 10px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//         marginBottom: "8px"
//       }}>
//         <div style={{ marginBottom: "20px" }}>
//           <label style={{
//             fontSize: "12px",
//             fontWeight: "700",
//             color: "#1f2937",
//             marginRight: "10px",
//             letterSpacing: "0.3px"
//           }}>
//             Number of rows:
//           </label>
//           <select
//             style={{
//               padding: "8px 12px",
//               border: "1px solid #e5e7eb",
//               borderRadius: "6px",
//               fontSize: "13px",
//               fontWeight: "500",
//               color: "#111827",
//               outline: "none",
//               backgroundColor: "#ffffff",
//               cursor: "pointer"
//             }}
//             value={numOfNonMicroFinance}
//             onChange={(e) => {
//               setNumOfNonMicroFinance(Number(e.target.value));
//               handleMicroFinanceRowChange(e, "NonMicrofinanceLoans", {
//                 SNo: "",
//                 ProductName: "",
//                 AmountOutstanding: "",
//                 NoOfAccounts: "",
//                 InterestRate: "",
//               });
//             }}
//             onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//             onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//           >
//             {[...Array(400)].map((_, i) => (
//               <option value={i + 1} key={i + 1}>
//                 {i + 1}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div style={{
//           border: "1px solid #e5e7eb",
//           borderRadius: "8px",
//           overflow: "hidden"
//         }}>
//           <table style={{ width: "100%", borderCollapse: "collapse" }}>
//             <thead>
//               <tr style={{
//                 background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
//               }}>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px",
//                   width: "80px"
//                 }}>S. No.</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Product Name</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Amount Disbursed (INR)</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>No. of Accounts</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Interest Rates (%) (Declining Basis)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Array.from({ length: numOfNonMicroFinance }).map((_, index) => (
//                 <tr key={index + 1} style={{
//                   borderBottom: "1px solid #f3f4f6",
//                   backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9fafb"
//                 }}>
//                   <td style={{ 
//                     padding: "12px 16px",
//                     textAlign: "center",
//                     fontSize: "13px",
//                     fontWeight: "600",
//                     color: "#6b7280"
//                   }}>{index + 1}</td>
//                   <td style={{ padding: "12px 16px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "36px",
//                         padding: "0 10px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "6px",
//                         fontSize: "13px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff"
//                       }}
//                       value={formData.NonMicrofinanceLoans[index].ProductName || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "NonMicrofinanceLoans",
//                           index,
//                           "ProductName",
//                           e.target.value
//                         )
//                       }
//                       onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                       onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     />
//                   </td>
//                   <td style={{ padding: "12px 16px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "36px",
//                         padding: "0 10px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "6px",
//                         fontSize: "13px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff"
//                       }}
//                       value={formData.NonMicrofinanceLoans[index].AmountDisbursed || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "NonMicrofinanceLoans",
//                           index,
//                           "AmountDisbursed",
//                           e.target.value
//                         )
//                       }
//                       onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                       onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     />
//                   </td>
//                   <td style={{ padding: "12px 16px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "36px",
//                         padding: "0 10px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "6px",
//                         fontSize: "13px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff"
//                       }}
//                       value={formData.NonMicrofinanceLoans[index].NoOfAccounts || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "NonMicrofinanceLoans",
//                           index,
//                           "NoOfAccounts",
//                           e.target.value
//                         )
//                       }
//                       onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                       onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     />
//                   </td>
//                   <td style={{ padding: "12px 16px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "36px",
//                         padding: "0 10px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "6px",
//                         fontSize: "13px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff"
//                       }}
//                       value={formData.NonMicrofinanceLoans[index].InterestRate || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "NonMicrofinanceLoans",
//                           index,
//                           "InterestRate",
//                           e.target.value
//                         )
//                       }
//                       onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                       onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* ON-BS MANAGED PORTFOLIO */}
//       <SectionHeader title="On-BS Managed Portfolio" date={Quarter} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "24px",
//         borderRadius: "0 0 10px 10px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//         marginBottom: "8px"
//       }}>
//         <div style={{ marginBottom: "20px" }}>
//           <label style={{
//             fontSize: "12px",
//             fontWeight: "700",
//             color: "#1f2937",
//             marginRight: "10px",
//             letterSpacing: "0.3px"
//           }}>
//             Number of rows:
//           </label>
//           <select
//             style={{
//               padding: "8px 12px",
//               border: "1px solid #e5e7eb",
//               borderRadius: "6px",
//               fontSize: "13px",
//               fontWeight: "500",
//               color: "#111827",
//               outline: "none",
//               backgroundColor: "#ffffff",
//               cursor: "pointer"
//             }}
//             value={numOfOnBalanceMP}
//             onChange={(e) => {
//               setNumOfOnBalanceMP(Number(e.target.value));
//               handleMicroFinanceRowChange(e, "ManagedPortfolio", {
//                 SNo: "",
//                 ProductName: "",
//                 AmountOutstanding: "",
//                 NoOfAccounts: "",
//                 InterestRate: "",
//               });
//             }}
//             onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//             onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//           >
//             {[...Array(400)].map((_, i) => (
//               <option value={i + 1} key={i + 1}>
//                 {i + 1}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div style={{
//           border: "1px solid #e5e7eb",
//           borderRadius: "8px",
//           overflow: "hidden"
//         }}>
//           <table style={{ width: "100%", borderCollapse: "collapse" }}>
//             <thead>
//               <tr style={{
//                 background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
//               }}>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px",
//                   width: "80px"
//                 }}>S. No.</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Product Name</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Amount Disbursed (INR)</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>No. of Accounts</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Interest Rates (%) (Declining Basis)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Array.from({ length: numOfOnBalanceMP }).map((_, index) => (
//                 <tr key={index + 1} style={{
//                   borderBottom: "1px solid #f3f4f6",
//                   backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9fafb"
//                 }}>
//                   <td style={{ 
//                     padding: "12px 16px",
//                     textAlign: "center",
//                     fontSize: "13px",
//                     fontWeight: "600",
//                     color: "#6b7280"
//                   }}>{index + 1}</td>
//                   <td style={{ padding: "12px 16px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "36px",
//                         padding: "0 10px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "6px",
//                         fontSize: "13px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff"
//                       }}
//                       value={formData.ManagedPortfolio[index].ProductName || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "ManagedPortfolio",
//                           index,
//                           "ProductName",
//                           e.target.value
//                         )
//                       }
//                       onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                       onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     />
//                   </td>
//                   <td style={{ padding: "12px 16px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "36px",
//                         padding: "0 10px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "6px",
//                         fontSize: "13px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff"
//                       }}
//                       value={formData.ManagedPortfolio[index].AmountDisbursed || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "ManagedPortfolio",
//                           index,
//                           "AmountDisbursed",
//                           e.target.value
//                         )
//                       }
//                       onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                       onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     />
//                   </td>
//                   <td style={{ padding: "12px 16px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "36px",
//                         padding: "0 10px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "6px",
//                         fontSize: "13px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff"
//                       }}
//                       value={formData.ManagedPortfolio[index].NoOfAccounts || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "ManagedPortfolio",
//                           index,
//                           "NoOfAccounts",
//                           e.target.value
//                         )
//                       }
//                       onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                       onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     />
//                   </td>
//                   <td style={{ padding: "12px 16px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "36px",
//                         padding: "0 10px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "6px",
//                         fontSize: "13px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff"
//                       }}
//                       value={formData.ManagedPortfolio[index].InterestRate || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "ManagedPortfolio",
//                           index,
//                           "InterestRate",
//                           e.target.value
//                         )
//                       }
//                       onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                       onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* OFF-BS MANAGED PORTFOLIO */}
//       <SectionHeader title="Off-BS Managed Portfolio" date={Quarter} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "24px",
//         borderRadius: "0 0 10px 10px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//         marginBottom: "8px"
//       }}>
//         <div style={{ marginBottom: "20px" }}>
//           <label style={{
//             fontSize: "12px",
//             fontWeight: "700",
//             color: "#1f2937",
//             marginRight: "10px",
//             letterSpacing: "0.3px"
//           }}>
//             Number of rows:
//           </label>
//           <select
//             style={{
//               padding: "8px 12px",
//               border: "1px solid #e5e7eb",
//               borderRadius: "6px",
//               fontSize: "13px",
//               fontWeight: "500",
//               color: "#111827",
//               outline: "none",
//               backgroundColor: "#ffffff",
//               cursor: "pointer"
//             }}
//             value={numOfOffBalanceMP}
//             onChange={(e) => {
//               setNumOfOffBalanceMP(Number(e.target.value));
//               handleMicroFinanceRowChange(e, "OffBalanceManagedPortfolio", {
//                 SNo: "",
//                 ProductName: "",
//                 AmountOutstanding: "",
//                 NoOfAccounts: "",
//                 InterestRate: "",
//               });
//             }}
//             onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//             onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//           >
//             {[...Array(400)].map((_, i) => (
//               <option value={i + 1} key={i + 1}>
//                 {i + 1}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div style={{
//           border: "1px solid #e5e7eb",
//           borderRadius: "8px",
//           overflow: "hidden"
//         }}>
//           <table style={{ width: "100%", borderCollapse: "collapse" }}>
//             <thead>
//               <tr style={{
//                 background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
//               }}>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px",
//                   width: "80px"
//                 }}>S. No.</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Product Name</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Amount Outstanding (INR)</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>No. of Accounts</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Interest Rates (%) (Declining Basis)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Array.from({ length: numOfOffBalanceMP }).map((_, index) => (
//                 <tr key={index + 1} style={{
//                   borderBottom: "1px solid #f3f4f6",
//                   backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9fafb"
//                 }}>
//                   <td style={{ 
//                     padding: "12px 16px",
//                     textAlign: "center",
//                     fontSize: "13px",
//                     fontWeight: "600",
//                     color: "#6b7280"
//                   }}>{index + 1}</td>
//                   <td style={{ padding: "12px 16px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "36px",
//                         padding: "0 10px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "6px",
//                         fontSize: "13px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff"
//                       }}
//                       value={formData.OffBalanceManagedPortfolio[index].ProductName || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "OffBalanceManagedPortfolio",
//                           index,
//                           "ProductName",
//                           e.target.value
//                         )
//                       }
//                       onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                       onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     />
//                   </td>
//                   <td style={{ padding: "12px 16px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "36px",
//                         padding: "0 10px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "6px",
//                         fontSize: "13px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff"
//                       }}
//                       value={formData.OffBalanceManagedPortfolio[index].AmountOutstanding || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "OffBalanceManagedPortfolio",
//                           index,
//                           "AmountOutstanding",
//                           e.target.value
//                         )
//                       }
//                       onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                       onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     />
//                   </td>
//                   <td style={{ padding: "12px 16px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "36px",
//                         padding: "0 10px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "6px",
//                         fontSize: "13px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff"
//                       }}
//                       value={formData.OffBalanceManagedPortfolio[index].NoOfAccounts || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "OffBalanceManagedPortfolio",
//                           index,
//                           "NoOfAccounts",
//                           e.target.value
//                         )
//                       }
//                       onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                       onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     />
//                   </td>
//                   <td style={{ padding: "12px 16px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "36px",
//                         padding: "0 10px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "6px",
//                         fontSize: "13px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff"
//                       }}
//                       value={formData.OffBalanceManagedPortfolio[index].InterestRate || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "OffBalanceManagedPortfolio",
//                           index,
//                           "InterestRate",
//                           e.target.value
//                         )
//                       }
//                       onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                       onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default PricingForQuarter;

import React, { useState } from "react";
import { loadUserFormData } from "../utils/StorageHelper";

function PricingForQuarter({
  formData,
  handleRepeaterChange,
  handleMicroFinanceRowChange,
  quarterList, 
  selectedMonthName,
  setSelectedMonthName,
  Quarter, 
  setQuarter,
  selectedDuring_FY,
  setselectedDuring_FY
}) {
  const [numOfMicroFinance, setNumOfMicroFinance] = useState(
    formData.MicrofinanceLoans.length || 1
  );
  const [numOfNonMicroFinance, setNumOfNonMicroFinance] = useState(() => {
    const storedData = loadUserFormData();
    return storedData.NonMicrofinanceLoans
      ? storedData.NonMicrofinanceLoans.length
      : 1;
  });

  const [numOfOnBalanceMP, setNumOfOnBalanceMP] = useState(() => {
    const storedData = loadUserFormData();
    return storedData.ManagedPortfolio ? storedData.ManagedPortfolio.length : 1;
  });
  const [numOfOffBalanceMP, setNumOfOffBalanceMP] = useState(() => {
    const storedData = loadUserFormData();
    return storedData.OffBalanceManagedPortfolio
      ? storedData.OffBalanceManagedPortfolio.length
      : 1;
  });

  // Section header with gradient using palette colors
  const SectionHeader = ({ title, date }) => (
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
            During the Quarter: {date}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div style={{
      backgroundColor: "#F7F9FB",
      padding: "20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      minHeight: "100vh"
    }}>

      {/* ON-BALANCE SHEET (MICROFINANCE LOANS) */}
      <SectionHeader title="On-Balance Sheet (Microfinance Loans)" date={Quarter} />
      <div style={{
        backgroundColor: "#FFFFFF",
        padding: "20px",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        marginBottom: "6px",
        border: "1px solid #F3F4F6",
        borderTop: "none"
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
            textAlign: "left"
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
            value={numOfMicroFinance}
            onChange={(e) => {
              setNumOfMicroFinance(Number(e.target.value));
              handleMicroFinanceRowChange(e, "MicrofinanceLoans", {
                SNo: "",
                ProductName: "",
                AmountDisbursed: "",
                NoOfAccounts: "",
                InterestRates: "",
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
            {[...Array(400)].map((_, i) => (
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
                  width: "80px"
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
                }}>Product Name</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Amount Disbursed (INR)</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>No. of Accounts</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Interest Rates (%) (Declining Basis)</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: numOfMicroFinance }).map((_, index) => (
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
                      value={formData.MicrofinanceLoans[index].ProductName || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "MicrofinanceLoans",
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
                      value={formData.MicrofinanceLoans[index].AmountDisbursed || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "MicrofinanceLoans",
                          index,
                          "AmountDisbursed",
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
                      value={formData.MicrofinanceLoans[index].NoOfAccounts || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "MicrofinanceLoans",
                          index,
                          "NoOfAccounts",
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
                      value={formData.MicrofinanceLoans[index].InterestRates || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "MicrofinanceLoans",
                          index,
                          "InterestRates",
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

      {/* ON-BALANCE SHEET (NON-MICROFINANCE LOANS) */}
      <SectionHeader title="On-Balance Sheet (Non-Microfinance Loans)" date={Quarter} />
      <div style={{
        backgroundColor: "#FFFFFF",
        padding: "20px",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        marginBottom: "6px",
        border: "1px solid #F3F4F6",
        borderTop: "none"
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
            textAlign: "left"
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
            value={numOfNonMicroFinance}
            onChange={(e) => {
              setNumOfNonMicroFinance(Number(e.target.value));
              handleMicroFinanceRowChange(e, "NonMicrofinanceLoans", {
                SNo: "",
                ProductName: "",
                AmountOutstanding: "",
                NoOfAccounts: "",
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
            {[...Array(400)].map((_, i) => (
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
                  width: "80px"
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
                }}>Product Name</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Amount Disbursed (INR)</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>No. of Accounts</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Interest Rates (%) (Declining Basis)</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: numOfNonMicroFinance }).map((_, index) => (
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
                      value={formData.NonMicrofinanceLoans[index].ProductName || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "NonMicrofinanceLoans",
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
                      value={formData.NonMicrofinanceLoans[index].AmountDisbursed || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "NonMicrofinanceLoans",
                          index,
                          "AmountDisbursed",
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
                      value={formData.NonMicrofinanceLoans[index].NoOfAccounts || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "NonMicrofinanceLoans",
                          index,
                          "NoOfAccounts",
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
                      value={formData.NonMicrofinanceLoans[index].InterestRate || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "NonMicrofinanceLoans",
                          index,
                          "InterestRate",
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

      {/* ON-BS MANAGED PORTFOLIO */}
      <SectionHeader title="On-BS Managed Portfolio" date={Quarter} />
      <div style={{
        backgroundColor: "#FFFFFF",
        padding: "20px",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        marginBottom: "6px",
        border: "1px solid #F3F4F6",
        borderTop: "none"
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
            textAlign: "left"
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
              handleMicroFinanceRowChange(e, "ManagedPortfolio", {
                SNo: "",
                ProductName: "",
                AmountOutstanding: "",
                NoOfAccounts: "",
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
            {[...Array(400)].map((_, i) => (
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
                  width: "80px"
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
                }}>Product Name</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Amount Disbursed (INR)</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>No. of Accounts</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Interest Rates (%) (Declining Basis)</th>
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
                      value={formData.ManagedPortfolio[index].ProductName || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "ManagedPortfolio",
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
                      value={formData.ManagedPortfolio[index].AmountDisbursed || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "ManagedPortfolio",
                          index,
                          "AmountDisbursed",
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
                      value={formData.ManagedPortfolio[index].NoOfAccounts || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "ManagedPortfolio",
                          index,
                          "NoOfAccounts",
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
                      value={formData.ManagedPortfolio[index].InterestRate || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "ManagedPortfolio",
                          index,
                          "InterestRate",
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

      {/* OFF-BS MANAGED PORTFOLIO */}
      <SectionHeader title="Off-BS Managed Portfolio" date={Quarter} />
      <div style={{
        backgroundColor: "#FFFFFF",
        padding: "20px",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        marginBottom: "6px",
        border: "1px solid #F3F4F6",
        borderTop: "none"
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
            textAlign: "left"
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
            value={numOfOffBalanceMP}
            onChange={(e) => {
              setNumOfOffBalanceMP(Number(e.target.value));
              handleMicroFinanceRowChange(e, "OffBalanceManagedPortfolio", {
                SNo: "",
                ProductName: "",
                AmountOutstanding: "",
                NoOfAccounts: "",
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
            {[...Array(400)].map((_, i) => (
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
                  width: "80px"
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
                }}>Product Name</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Amount Outstanding (INR)</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>No. of Accounts</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Interest Rates (%) (Declining Basis)</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: numOfOffBalanceMP }).map((_, index) => (
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
                      value={formData.OffBalanceManagedPortfolio[index].ProductName || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "OffBalanceManagedPortfolio",
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
                      value={formData.OffBalanceManagedPortfolio[index].AmountOutstanding || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "OffBalanceManagedPortfolio",
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
                      value={formData.OffBalanceManagedPortfolio[index].NoOfAccounts || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "OffBalanceManagedPortfolio",
                          index,
                          "NoOfAccounts",
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
                      value={formData.OffBalanceManagedPortfolio[index].InterestRate || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "OffBalanceManagedPortfolio",
                          index,
                          "InterestRate",
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

export default PricingForQuarter;