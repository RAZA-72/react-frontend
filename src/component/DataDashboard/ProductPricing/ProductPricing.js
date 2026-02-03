// import React, { useState } from "react";

// function ProductPricing({
//   formData,
//   handleRepeaterChange,
//   handleMicroFinanceRowChange,
//   selectedMonthName,        // ✅ YEH LINE MISS THI
//   setSelectedMonthName,
//   selectedDuring_FY,
//   setselectedDuring_FY,
//   Quarter, setQuarter ,
  
// }) {
//   const [numOfMicroFinanceLoans, setNumOfMicroFinanceLoans] = useState(
//     formData.MicrofinanceLoansPP.length || 1
//   );
//   const [numOfNonMicroFinanceLoans, setNumOfNonMicroFinanceLoans] = useState(
//     formData.NonMicrofinanceLoansPP.length || 1
//   );
//   const [numOfOnBalanceMP, setNumOfOnBalanceMP] = useState(
//     formData.ManagedPortfolioPP.length || 1
//   );
//   const [numOfOffBalanceMP, setNumOfOffBalanceMP] = useState(
//     formData.OffBalanceManagedPortfolioPP.length || 1
//   );

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
//           value={numOfMicroFinanceLoans}
//           onChange={(e) => {
//             setNumOfMicroFinanceLoans(Number(e.target.value));
//             handleMicroFinanceRowChange(e, "MicrofinanceLoansPP", {
//               SNo: "",
//               ProductName: "",
//               AmountOutstanding: "",
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
//               <th colSpan={2}> 
//                 {selectedMonthName
//                   ? selectedMonthName
//                   : ""}
//               </th>
//             </tr>
//             <tr className="blue-row">
//               <th></th>
//               <th></th>
//               <th colSpan={2}>On-Balance Sheet (Microfinance Loans)</th>
//             </tr>
//             <tr className="pink-row">
//               <th>S. No.</th>
//               <th>Product Name</th>
//               <th>Amount of portfolio outstanding (in INR)</th>
//               <th>
//                 Interest Rates (%) (declining basis), (NOT including any other
//                 fees)
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {Array.from({ length: numOfMicroFinanceLoans }).map((_, index) => (
//               <tr key={index + 1}>
//                 <td>{index + 1}</td>
//                 <td>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={
//                       formData.MicrofinanceLoansPP[index].ProductName || ""
//                     }
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "MicrofinanceLoansPP",
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
//                       formData.MicrofinanceLoansPP[index].AmountOutstanding ||
//                       ""
//                     }
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "MicrofinanceLoansPP",
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
//                     value={
//                       formData.MicrofinanceLoansPP[index].InterestRates || ""
//                     }
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "MicrofinanceLoansPP",
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
//             {Array.from({ length: numOfMicroFinanceLoans }).map((_, index) => (
//               <tr key={index + 1}>
//                 <td>{index + 1}</td>
//                 <td>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={
//                       (formData.MicrofinanceLoansPP.ProductName &&
//                         formData.MicrofinanceLoansPP[index].ProductName) ||
//                       ""
//                     }
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "MicrofinanceLoansPP",
//                         index,
//                         "ProductName",
//                         e.target.value
//                       )
//                     }
//                   />
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

//         {/* On-Balance Sheet (Non Microfinance Loans) table */}
//         <label>Choose number of rows : </label>
//         <select
//           value={numOfNonMicroFinanceLoans}
//           onChange={(e) => {
//             setNumOfNonMicroFinanceLoans(Number(e.target.value));
//             handleMicroFinanceRowChange(e, "NonMicrofinanceLoansPP", {
//               SNo: "",
//               ProductName: "",
//               AmountOutstanding: "",
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
//         {/* <select onChange={(e) => setNumOfNonMicroFinanceLoans(e.target.value)}>
//           {[...Array(400)].map((_, i) => (
//             <option value={i + 1} key={i + 1}>
//               {i + 1}
//             </option>
//           ))}
//         </select> */}

//         <table
//           class="table table-light table-bordered border-primary"
//           style={{ width: "100%" }}
//         >
//           <thead>
//             <tr className="blue-row">
//               <th colSpan={2}>List of products offered</th>
//               <th colSpan={2}>      {selectedMonthName
//                   ? selectedMonthName
//                   : ""}</th>
//             </tr>
//             <tr className="blue-row">
//               <th></th>
//               <th></th>
//               <th colSpan={2}>On-Balance Sheet (Non-Microfinance Loans)</th>
//             </tr>
//             <tr className="pink-row">
//               <th>S. No.</th>
//               <th>Product Name</th>
//               <th>Amount of portfolio outstanding (in INR)</th>
//               <th>
//                 Interest Rates (%) (declining basis), (NOT including any other
//                 fees)
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {Array.from({ length: numOfNonMicroFinanceLoans }).map(
//               (_, index) => (
//                 <tr key={index + 1}>
//                   <td>{index + 1}</td>
//                   <td>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={
//                         formData.NonMicrofinanceLoansPP[index].ProductName || ""
//                       }
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "NonMicrofinanceLoansPP",
//                           index,
//                           "ProductName",
//                           e.target.value
//                         )
//                       }
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={
//                         formData.NonMicrofinanceLoansPP[index]
//                           .AmountOutstanding || ""
//                       }
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "NonMicrofinanceLoansPP",
//                           index,
//                           "AmountOutstanding",
//                           e.target.value
//                         )
//                       }
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={
//                         formData.NonMicrofinanceLoansPP[index].InterestRates ||
//                         ""
//                       }
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "NonMicrofinanceLoansPP",
//                           index,
//                           "InterestRates",
//                           e.target.value
//                         )
//                       }
//                     />
//                   </td>
//                 </tr>
//               )
//             )}
//           </tbody>
//           {/* <tbody>
//             {Array.from({ length: numOfNonMicroFinanceLoans }).map(
//               (_, index) => (
//                 <tr key={index + 1}>
//                   <td>{index + 1}</td>
//                   <td>
//                     <input type="text" class="form-control" />
//                   </td>
//                   <td>
//                     <input type="text" class="form-control" />
//                   </td>
//                   <td>
//                     <input type="text" class="form-control" />
//                   </td>
//                 </tr>
//               )
//             )}
//           </tbody> */}
//         </table>
//         <br />
//         <br />

//         {/* On-Balance Sheet Managed portfolio	
//  table */}
//         <label>Choose number of rows : </label>
//         <select
//           value={numOfOffBalanceMP}
//           onChange={(e) => {
//             setNumOfOnBalanceMP(Number(e.target.value));
//             handleMicroFinanceRowChange(e, "ManagedPortfolioPP", {
//               SNo: "",
//               ProductName: "",
//               ProductType: "",
//               AmountOutstanding: "",
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
//         {/* <select onChange={(e) => setNumOfOnBalanceMP(e.target.value)}>
//           {[...Array(400)].map((_, i) => (
//             <option value={i + 1} key={i + 1}>
//               {i + 1}
//             </option>
//           ))}
//         </select> */}

//         <table
//           class="table table-light table-bordered border-primary"
//           style={{ width: "100%" }}
//         >
//           <thead>
//             <tr className="blue-row">
//               <th colSpan={2}>List of products offered</th>
//               <th colSpan={3}>      {selectedMonthName
//                   ? selectedMonthName
//                   : ""}</th>
//             </tr>
//             <tr className="blue-row">
//               <th></th>
//               <th></th>
//               <th colSpan={3}>On-Balance Sheet Managed portfolio</th>
//             </tr>
//             <tr className="pink-row">
//               <th>S. No.</th>
//               <th>Product Name</th>
//               <th>Product Type</th>
//               <th>Amount of portfolio outstanding (in INR)</th>
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
//                     value={formData.ManagedPortfolioPP[index].ProductName || ""}
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "ManagedPortfolioPP",
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
//                     value={formData.ManagedPortfolioPP[index].ProductType || ""}
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "ManagedPortfolioPP",
//                         index,
//                         "ProductType",
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
//                       formData.ManagedPortfolioPP[index].AmountOutstanding || ""
//                     }
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "ManagedPortfolioPP",
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
//                     value={
//                       formData.ManagedPortfolioPP[index].InterestRate || ""
//                     }
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "ManagedPortfolioPP",
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

//         {/*Off-Balance Sheet Managed portfolio table
//          */}
//         <label>Choose number of rows : </label>
//         {/* <select onChange={(e) => setNumOfOffBalanceMP(e.target.value)}>
//           {[...Array(400)].map((_, i) => (
//             <option value={i + 1} key={i + 1}>
//               {i + 1}
//             </option>
//           ))}
//         </select> */}
//         <select
//           value={numOfOffBalanceMP}
//           onChange={(e) => {
//             setNumOfOffBalanceMP(Number(e.target.value));
//             handleMicroFinanceRowChange(e, "OffBalanceManagedPortfolioPP", {
//               SNo: "",
//               ProductName: "",
//               AmountOutstanding: "",
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
//    <th colSpan={2}>      {selectedMonthName
//                   ? selectedMonthName
//                   : ""}</th>            </tr>
//             <tr className="blue-row">
//               <th></th>
//               <th></th>
//               <th colSpan={2}>Off-Balance Sheet Managed portfolio</th>
//             </tr>
//             <tr className="pink-row">
//               <th>S. No.</th>
//               <th>Product Name</th>
//               <th>Amount of portfolio outstanding (in INR)</th>
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
//                     value={formData.OffBalanceManagedPortfolioPP[index].ProductName || ""}
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "OffBalanceManagedPortfolioPP",
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
//                       formData.OffBalanceManagedPortfolioPP[index].AmountOutstanding || ""
//                     }
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "OffBalanceManagedPortfolioPP",
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
//                     value={
//                       formData.OffBalanceManagedPortfolioPP[index].InterestRate || ""
//                     }
//                     onChange={(e) =>
//                       handleRepeaterChange(
//                         "OffBalanceManagedPortfolioPP",
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

// export default ProductPricing;

// import React from "react";

// const ProductPricing = () => {
//   return (
//     <div
//       style={{
//         width: "80%",
//         backgroundColor: "#fff",
//         padding: "20px",
//       }}
//     >
//       <form>
//         <div>
//           {/* sub heading */}
//           <b style={{ float: "left" }}>List of products offered</b>
//           <br />

//           {/* sub heading */}
//           <b style={{ float: "left" }}>On-Balance Sheet (Microfinance Loans)</b>
//           <br />

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               S. No.
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Product Name
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Amount of portfolio outstanding (in INR)
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Interest Rates (%) (declining basis), (NOT including any other
//               fees)
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           {/* sub heading */}
//           <b style={{ float: "left" }}>
//             On-Balance Sheet (Non-Microfinance Loans)
//           </b>
//           <br />

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               S. No.
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Product Name
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Amount of portfolio outstanding (in INR)
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Interest Rates (%) (declining basis), (NOT including any other
//               fees)
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           {/* sub heading */}
//           <b style={{ float: "left" }}>On-Balance Sheet Managed portfolio</b>
//           <br />

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               S. No.
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Product Name
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Product Type
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Amount of portfolio outstanding (in INR)
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Interest Rates (%) (declining basis), (NOT including any other
//               fees)
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           {/* sub heading */}
//           <b style={{ float: "left" }}>Off-Balance Sheet Managed portfolio</b>
//           <br />

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               S. No.
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Product Name
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Amount of portfolio outstanding (in INR)
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Interest Rates (%) (declining basis), (NOT including any other
//               fees)
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//            {/* submit button */}
//            <div class="mb-3">
//             <button type="submit" class="btn btn-primary">
//               Submit
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ProductPricing;
// import React, { useState } from "react";

// function ProductPricing({
//   formData,
//   handleRepeaterChange,
//   handleMicroFinanceRowChange,
//   selectedMonthName,
//   setSelectedMonthName,
//   selectedDuring_FY,
//   setselectedDuring_FY,
//   Quarter, 
//   setQuarter,
// }) {
//   const [numOfMicroFinanceLoans, setNumOfMicroFinanceLoans] = useState(
//     formData.MicrofinanceLoansPP.length || 1
//   );
//   const [numOfNonMicroFinanceLoans, setNumOfNonMicroFinanceLoans] = useState(
//     formData.NonMicrofinanceLoansPP.length || 1
//   );
//   const [numOfOnBalanceMP, setNumOfOnBalanceMP] = useState(
//     formData.ManagedPortfolioPP.length || 1
//   );
//   const [numOfOffBalanceMP, setNumOfOffBalanceMP] = useState(
//     formData.OffBalanceManagedPortfolioPP.length || 1
//   );

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
//             {date}
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
//       <SectionHeader title="On-Balance Sheet (Microfinance Loans)" date={selectedMonthName} />
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
//             value={numOfMicroFinanceLoans}
//             onChange={(e) => {
//               setNumOfMicroFinanceLoans(Number(e.target.value));
//               handleMicroFinanceRowChange(e, "MicrofinanceLoansPP", {
//                 SNo: "",
//                 ProductName: "",
//                 AmountOutstanding: "",
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
//                 }}>Amount of Portfolio Outstanding (INR)</th>
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
//               {Array.from({ length: numOfMicroFinanceLoans }).map((_, index) => (
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
//                       value={formData.MicrofinanceLoansPP[index].ProductName || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "MicrofinanceLoansPP",
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
//                       value={formData.MicrofinanceLoansPP[index].AmountOutstanding || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "MicrofinanceLoansPP",
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
//                       value={formData.MicrofinanceLoansPP[index].InterestRates || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "MicrofinanceLoansPP",
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
//       <SectionHeader title="On-Balance Sheet (Non-Microfinance Loans)" date={selectedMonthName} />
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
//             value={numOfNonMicroFinanceLoans}
//             onChange={(e) => {
//               setNumOfNonMicroFinanceLoans(Number(e.target.value));
//               handleMicroFinanceRowChange(e, "NonMicrofinanceLoansPP", {
//                 SNo: "",
//                 ProductName: "",
//                 AmountOutstanding: "",
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
//                 }}>Amount of Portfolio Outstanding (INR)</th>
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
//               {Array.from({ length: numOfNonMicroFinanceLoans }).map((_, index) => (
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
//                       value={formData.NonMicrofinanceLoansPP[index].ProductName || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "NonMicrofinanceLoansPP",
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
//                       value={formData.NonMicrofinanceLoansPP[index].AmountOutstanding || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "NonMicrofinanceLoansPP",
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
//                       value={formData.NonMicrofinanceLoansPP[index].InterestRates || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "NonMicrofinanceLoansPP",
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

//       {/* ON-BALANCE SHEET MANAGED PORTFOLIO */}
//       <SectionHeader title="On-Balance Sheet Managed Portfolio" date={selectedMonthName} />
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
//               handleMicroFinanceRowChange(e, "ManagedPortfolioPP", {
//                 SNo: "",
//                 ProductName: "",
//                 ProductType: "",
//                 AmountOutstanding: "",
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
//                 }}>Product Type</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Amount of Portfolio Outstanding (INR)</th>
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
//                       value={formData.ManagedPortfolioPP[index].ProductName || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "ManagedPortfolioPP",
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
//                       value={formData.ManagedPortfolioPP[index].ProductType || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "ManagedPortfolioPP",
//                           index,
//                           "ProductType",
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
//                       value={formData.ManagedPortfolioPP[index].AmountOutstanding || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "ManagedPortfolioPP",
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
//                       value={formData.ManagedPortfolioPP[index].InterestRate || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "ManagedPortfolioPP",
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

//       {/* OFF-BALANCE SHEET MANAGED PORTFOLIO */}
//       <SectionHeader title="Off-Balance Sheet Managed Portfolio" date={selectedMonthName} />
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
//               handleMicroFinanceRowChange(e, "OffBalanceManagedPortfolioPP", {
//                 SNo: "",
//                 ProductName: "",
//                 AmountOutstanding: "",
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
//                 }}>Amount of Portfolio Outstanding (INR)</th>
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
//                       value={formData.OffBalanceManagedPortfolioPP[index].ProductName || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "OffBalanceManagedPortfolioPP",
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
//                       value={formData.OffBalanceManagedPortfolioPP[index].AmountOutstanding || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "OffBalanceManagedPortfolioPP",
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
//                       value={formData.OffBalanceManagedPortfolioPP[index].InterestRate || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "OffBalanceManagedPortfolioPP",
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

// export default ProductPricing;


// import React, { useState } from "react";

// function ProductPricing({
//   formData,
//   handleRepeaterChange,
//   handleMicroFinanceRowChange,
//   selectedMonthName,
//   setSelectedMonthName,
//   selectedDuring_FY,
//   setselectedDuring_FY,
//   Quarter, 
//   setQuarter,
// }) {
//   const [numOfMicroFinanceLoans, setNumOfMicroFinanceLoans] = useState(
//     formData.MicrofinanceLoansPP.length || 1
//   );
//   const [numOfNonMicroFinanceLoans, setNumOfNonMicroFinanceLoans] = useState(
//     formData.NonMicrofinanceLoansPP.length || 1
//   );
//   const [numOfOnBalanceMP, setNumOfOnBalanceMP] = useState(
//     formData.ManagedPortfolioPP.length || 1
//   );
//   const [numOfOffBalanceMP, setNumOfOffBalanceMP] = useState(
//     formData.OffBalanceManagedPortfolioPP.length || 1
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

//   return (
//     <div style={{
//       backgroundColor: "#f8f9fa",
//       padding: "16px",
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     }}>

//       {/* ON-BALANCE SHEET (MICROFINANCE LOANS) */}
//       <SectionHeader title="On-Balance Sheet (Microfinance Loans)" date={selectedMonthName} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "16px",
//         borderRadius: "0 0 8px 8px",
//         boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
//         marginBottom: "4px"
//       }}>
//         <div style={{ marginBottom: "14px" }}>
//           <label style={{
//             fontSize: "11px",
//             fontWeight: "700",
//             color: "#1f2937",
//             marginRight: "8px",
//             letterSpacing: "0.2px",
//             textAlign: "left"
//           }}>
//             Number of rows:
//           </label>
//           <select
//             style={{
//               padding: "6px 10px",
//               border: "1px solid #e5e7eb",
//               borderRadius: "6px",
//               fontSize: "12px",
//               fontWeight: "500",
//               color: "#111827",
//               outline: "none",
//               backgroundColor: "#ffffff",
//               cursor: "pointer"
//             }}
//             value={numOfMicroFinanceLoans}
//             onChange={(e) => {
//               setNumOfMicroFinanceLoans(Number(e.target.value));
//               handleMicroFinanceRowChange(e, "MicrofinanceLoansPP", {
//                 SNo: "",
//                 ProductName: "",
//                 AmountOutstanding: "",
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
//           borderRadius: "6px",
//           overflow: "hidden"
//         }}>
//           <table style={{ width: "100%", borderCollapse: "collapse" }}>
//             <thead>
//               <tr style={{
//                 background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
//               }}>
//                 <th style={{
//                   padding: "10px 12px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "11px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.4px",
//                   width: "70px"
//                 }}>S. No.</th>
//                 <th style={{
//                   padding: "10px 12px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "11px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.4px"
//                 }}>Product Name</th>
//                 <th style={{
//                   padding: "10px 12px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "11px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.4px"
//                 }}>Amount of Portfolio Outstanding (INR)</th>
//                 <th style={{
//                   padding: "10px 12px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "11px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.4px"
//                 }}>Interest Rates (%) (Declining Basis)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Array.from({ length: numOfMicroFinanceLoans }).map((_, index) => (
//                 <tr key={index + 1} style={{
//                   borderBottom: "1px solid #f3f4f6",
//                   backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9fafb"
//                 }}>
//                   <td style={{ 
//                     padding: "8px 12px",
//                     textAlign: "left",
//                     fontSize: "12px",
//                     fontWeight: "600",
//                     color: "#6b7280"
//                   }}>{index + 1}</td>
//                   <td style={{ padding: "8px 12px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "32px",
//                         padding: "0 8px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "5px",
//                         fontSize: "12px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff",
//                         textAlign: "left"
//                       }}
//                       value={formData.MicrofinanceLoansPP[index].ProductName || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "MicrofinanceLoansPP",
//                           index,
//                           "ProductName",
//                           e.target.value
//                         )
//                       }
//                       onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                       onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     />
//                   </td>
//                   <td style={{ padding: "8px 12px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "32px",
//                         padding: "0 8px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "5px",
//                         fontSize: "12px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff",
//                         textAlign: "left"
//                       }}
//                       value={formData.MicrofinanceLoansPP[index].AmountOutstanding || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "MicrofinanceLoansPP",
//                           index,
//                           "AmountOutstanding",
//                           e.target.value
//                         )
//                       }
//                       onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                       onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     />
//                   </td>
//                   <td style={{ padding: "8px 12px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "32px",
//                         padding: "0 8px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "5px",
//                         fontSize: "12px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff",
//                         textAlign: "left"
//                       }}
//                       value={formData.MicrofinanceLoansPP[index].InterestRates || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "MicrofinanceLoansPP",
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
//       <SectionHeader title="On-Balance Sheet (Non-Microfinance Loans)" date={selectedMonthName} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "16px",
//         borderRadius: "0 0 8px 8px",
//         boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
//         marginBottom: "4px"
//       }}>
//         <div style={{ marginBottom: "14px" }}>
//           <label style={{
//             fontSize: "11px",
//             fontWeight: "700",
//             color: "#1f2937",
//             marginRight: "8px",
//             letterSpacing: "0.2px",
//             textAlign: "left"
//           }}>
//             Number of rows:
//           </label>
//           <select
//             style={{
//               padding: "6px 10px",
//               border: "1px solid #e5e7eb",
//               borderRadius: "6px",
//               fontSize: "12px",
//               fontWeight: "500",
//               color: "#111827",
//               outline: "none",
//               backgroundColor: "#ffffff",
//               cursor: "pointer"
//             }}
//             value={numOfNonMicroFinanceLoans}
//             onChange={(e) => {
//               setNumOfNonMicroFinanceLoans(Number(e.target.value));
//               handleMicroFinanceRowChange(e, "NonMicrofinanceLoansPP", {
//                 SNo: "",
//                 ProductName: "",
//                 AmountOutstanding: "",
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
//           borderRadius: "6px",
//           overflow: "hidden"
//         }}>
//           <table style={{ width: "100%", borderCollapse: "collapse" }}>
//             <thead>
//               <tr style={{
//                 background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
//               }}>
//                 <th style={{
//                   padding: "10px 12px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "11px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.4px",
//                   width: "70px"
//                 }}>S. No.</th>
//                 <th style={{
//                   padding: "10px 12px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "11px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.4px"
//                 }}>Product Name</th>
//                 <th style={{
//                   padding: "10px 12px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "11px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.4px"
//                 }}>Amount of Portfolio Outstanding (INR)</th>
//                 <th style={{
//                   padding: "10px 12px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "11px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.4px"
//                 }}>Interest Rates (%) (Declining Basis)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Array.from({ length: numOfNonMicroFinanceLoans }).map((_, index) => (
//                 <tr key={index + 1} style={{
//                   borderBottom: "1px solid #f3f4f6",
//                   backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9fafb"
//                 }}>
//                   <td style={{ 
//                     padding: "8px 12px",
//                     textAlign: "left",
//                     fontSize: "12px",
//                     fontWeight: "600",
//                     color: "#6b7280"
//                   }}>{index + 1}</td>
//                   <td style={{ padding: "8px 12px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "32px",
//                         padding: "0 8px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "5px",
//                         fontSize: "12px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff",
//                         textAlign: "left"
//                       }}
//                       value={formData.NonMicrofinanceLoansPP[index].ProductName || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "NonMicrofinanceLoansPP",
//                           index,
//                           "ProductName",
//                           e.target.value
//                         )
//                       }
//                       onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                       onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     />
//                   </td>
//                   <td style={{ padding: "8px 12px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "32px",
//                         padding: "0 8px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "5px",
//                         fontSize: "12px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff",
//                         textAlign: "left"
//                       }}
//                       value={formData.NonMicrofinanceLoansPP[index].AmountOutstanding || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "NonMicrofinanceLoansPP",
//                           index,
//                           "AmountOutstanding",
//                           e.target.value
//                         )
//                       }
//                       onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                       onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     />
//                   </td>
//                   <td style={{ padding: "8px 12px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "32px",
//                         padding: "0 8px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "5px",
//                         fontSize: "12px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff",
//                         textAlign: "left"
//                       }}
//                       value={formData.NonMicrofinanceLoansPP[index].InterestRates || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "NonMicrofinanceLoansPP",
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

//       {/* ON-BALANCE SHEET MANAGED PORTFOLIO */}
//       <SectionHeader title="On-Balance Sheet Managed Portfolio" date={selectedMonthName} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "16px",
//         borderRadius: "0 0 8px 8px",
//         boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
//         marginBottom: "4px"
//       }}>
//         <div style={{ marginBottom: "14px" }}>
//           <label style={{
//             fontSize: "11px",
//             fontWeight: "700",
//             color: "#1f2937",
//             marginRight: "8px",
//             letterSpacing: "0.2px",
//             textAlign: "left"
//           }}>
//             Number of rows:
//           </label>
//           <select
//             style={{
//               padding: "6px 10px",
//               border: "1px solid #e5e7eb",
//               borderRadius: "6px",
//               fontSize: "12px",
//               fontWeight: "500",
//               color: "#111827",
//               outline: "none",
//               backgroundColor: "#ffffff",
//               cursor: "pointer"
//             }}
//             value={numOfOnBalanceMP}
//             onChange={(e) => {
//               setNumOfOnBalanceMP(Number(e.target.value));
//               handleMicroFinanceRowChange(e, "ManagedPortfolioPP", {
//                 SNo: "",
//                 ProductName: "",
//                 ProductType: "",
//                 AmountOutstanding: "",
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
//           borderRadius: "6px",
//           overflow: "hidden"
//         }}>
//           <table style={{ width: "100%", borderCollapse: "collapse" }}>
//             <thead>
//               <tr style={{
//                 background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
//               }}>
//                 <th style={{
//                   padding: "10px 12px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "11px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.4px",
//                   width: "70px"
//                 }}>S. No.</th>
//                 <th style={{
//                   padding: "10px 12px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "11px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.4px"
//                 }}>Product Name</th>
//                 <th style={{
//                   padding: "10px 12px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "11px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.4px"
//                 }}>Product Type</th>
//                 <th style={{
//                   padding: "10px 12px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "11px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.4px"
//                 }}>Amount of Portfolio Outstanding (INR)</th>
//                 <th style={{
//                   padding: "10px 12px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "11px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.4px"
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
//                     padding: "8px 12px",
//                     textAlign: "left",
//                     fontSize: "12px",
//                     fontWeight: "600",
//                     color: "#6b7280"
//                   }}>{index + 1}</td>
//                   <td style={{ padding: "8px 12px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "32px",
//                         padding: "0 8px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "5px",
//                         fontSize: "12px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff",
//                         textAlign: "left"
//                       }}
//                       value={formData.ManagedPortfolioPP[index].ProductName || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "ManagedPortfolioPP",
//                           index,
//                           "ProductName",
//                           e.target.value
//                         )
//                       }
//                       onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                       onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     />
//                   </td>
//                   <td style={{ padding: "8px 12px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "32px",
//                         padding: "0 8px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "5px",
//                         fontSize: "12px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff",
//                         textAlign: "left"
//                       }}
//                       value={formData.ManagedPortfolioPP[index].ProductType || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "ManagedPortfolioPP",
//                           index,
//                           "ProductType",
//                           e.target.value
//                         )
//                       }
//                       onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                       onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     />
//                   </td>
//                   <td style={{ padding: "8px 12px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "32px",
//                         padding: "0 8px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "5px",
//                         fontSize: "12px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff",
//                         textAlign: "left"
//                       }}
//                       value={formData.ManagedPortfolioPP[index].AmountOutstanding || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "ManagedPortfolioPP",
//                           index,
//                           "AmountOutstanding",
//                           e.target.value
//                         )
//                       }
//                       onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                       onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     />
//                   </td>
//                   <td style={{ padding: "8px 12px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "32px",
//                         padding: "0 8px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "5px",
//                         fontSize: "12px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff",
//                         textAlign: "left"
//                       }}
//                       value={formData.ManagedPortfolioPP[index].InterestRate || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "ManagedPortfolioPP",
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

//       {/* OFF-BALANCE SHEET MANAGED PORTFOLIO */}
//       <SectionHeader title="Off-Balance Sheet Managed Portfolio" date={selectedMonthName} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "16px",
//         borderRadius: "0 0 8px 8px",
//         boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
//         marginBottom: "4px"
//       }}>
//         <div style={{ marginBottom: "14px" }}>
//           <label style={{
//             fontSize: "11px",
//             fontWeight: "700",
//             color: "#1f2937",
//             marginRight: "8px",
//             letterSpacing: "0.2px",
//             textAlign: "left"
//           }}>
//             Number of rows:
//           </label>
//           <select
//             style={{
//               padding: "6px 10px",
//               border: "1px solid #e5e7eb",
//               borderRadius: "6px",
//               fontSize: "12px",
//               fontWeight: "500",
//               color: "#111827",
//               outline: "none",
//               backgroundColor: "#ffffff",
//               cursor: "pointer"
//             }}
//             value={numOfOffBalanceMP}
//             onChange={(e) => {
//               setNumOfOffBalanceMP(Number(e.target.value));
//               handleMicroFinanceRowChange(e, "OffBalanceManagedPortfolioPP", {
//                 SNo: "",
//                 ProductName: "",
//                 AmountOutstanding: "",
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
//           borderRadius: "6px",
//           overflow: "hidden"
//         }}>
//           <table style={{ width: "100%", borderCollapse: "collapse" }}>
//             <thead>
//               <tr style={{
//                 background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
//               }}>
//                 <th style={{
//                   padding: "10px 12px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "11px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.4px",
//                   width: "70px"
//                 }}>S. No.</th>
//                 <th style={{
//                   padding: "10px 12px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "11px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.4px"
//                 }}>Product Name</th>
//                 <th style={{
//                   padding: "10px 12px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "11px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.4px"
//                 }}>Amount of Portfolio Outstanding (INR)</th>
//                 <th style={{
//                   padding: "10px 12px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "11px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.4px"
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
//                     padding: "8px 12px",
//                     textAlign: "left",
//                     fontSize: "12px",
//                     fontWeight: "600",
//                     color: "#6b7280"
//                   }}>{index + 1}</td>
//                   <td style={{ padding: "8px 12px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "32px",
//                         padding: "0 8px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "5px",
//                         fontSize: "12px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff",
//                         textAlign: "left"
//                       }}
//                       value={formData.OffBalanceManagedPortfolioPP[index].ProductName || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "OffBalanceManagedPortfolioPP",
//                           index,
//                           "ProductName",
//                           e.target.value
//                         )
//                       }
//                       onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                       onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     />
//                   </td>
//                   <td style={{ padding: "8px 12px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "32px",
//                         padding: "0 8px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "5px",
//                         fontSize: "12px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff",
//                         textAlign: "left"
//                       }}
//                       value={formData.OffBalanceManagedPortfolioPP[index].AmountOutstanding || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "OffBalanceManagedPortfolioPP",
//                           index,
//                           "AmountOutstanding",
//                           e.target.value
//                         )
//                       }
//                       onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                       onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                     />
//                   </td>
//                   <td style={{ padding: "8px 12px" }}>
//                     <input
//                       type="text"
//                       style={{
//                         width: "100%",
//                         height: "32px",
//                         padding: "0 8px",
//                         border: "1px solid #e5e7eb",
//                         borderRadius: "5px",
//                         fontSize: "12px",
//                         fontWeight: "500",
//                         color: "#111827",
//                         outline: "none",
//                         transition: "border 0.2s",
//                         backgroundColor: "#ffffff",
//                         textAlign: "left"
//                       }}
//                       value={formData.OffBalanceManagedPortfolioPP[index].InterestRate || ""}
//                       onChange={(e) =>
//                         handleRepeaterChange(
//                           "OffBalanceManagedPortfolioPP",
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

// export default ProductPricing;

import React, { useState } from "react";

function ProductPricing({
  formData,
  handleRepeaterChange,
  handleMicroFinanceRowChange,
  selectedMonthName,
  setSelectedMonthName,
  selectedDuring_FY,
  setselectedDuring_FY,
  Quarter, 
  setQuarter,
}) {
  const [numOfMicroFinanceLoans, setNumOfMicroFinanceLoans] = useState(
    formData.MicrofinanceLoansPP.length || 1
  );
  const [numOfNonMicroFinanceLoans, setNumOfNonMicroFinanceLoans] = useState(
    formData.NonMicrofinanceLoansPP.length || 1
  );
  const [numOfOnBalanceMP, setNumOfOnBalanceMP] = useState(
    formData.ManagedPortfolioPP.length || 1
  );
  const [numOfOffBalanceMP, setNumOfOffBalanceMP] = useState(
    formData.OffBalanceManagedPortfolioPP.length || 1
  );

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
            {date}
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
      <SectionHeader title="On-Balance Sheet (Microfinance Loans)" date={selectedMonthName} />
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
            value={numOfMicroFinanceLoans}
            onChange={(e) => {
              setNumOfMicroFinanceLoans(Number(e.target.value));
              handleMicroFinanceRowChange(e, "MicrofinanceLoansPP", {
                SNo: "",
                ProductName: "",
                AmountOutstanding: "",
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
                }}>Amount of Portfolio Outstanding (INR)</th>
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
              {Array.from({ length: numOfMicroFinanceLoans }).map((_, index) => (
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
                      value={formData.MicrofinanceLoansPP[index].ProductName || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "MicrofinanceLoansPP",
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
                      value={formData.MicrofinanceLoansPP[index].AmountOutstanding || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "MicrofinanceLoansPP",
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
                      value={formData.MicrofinanceLoansPP[index].InterestRates || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "MicrofinanceLoansPP",
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
      <SectionHeader title="On-Balance Sheet (Non-Microfinance Loans)" date={selectedMonthName} />
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
            value={numOfNonMicroFinanceLoans}
            onChange={(e) => {
              setNumOfNonMicroFinanceLoans(Number(e.target.value));
              handleMicroFinanceRowChange(e, "NonMicrofinanceLoansPP", {
                SNo: "",
                ProductName: "",
                AmountOutstanding: "",
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
                }}>Amount of Portfolio Outstanding (INR)</th>
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
              {Array.from({ length: numOfNonMicroFinanceLoans }).map((_, index) => (
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
                      value={formData.NonMicrofinanceLoansPP[index].ProductName || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "NonMicrofinanceLoansPP",
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
                      value={formData.NonMicrofinanceLoansPP[index].AmountOutstanding || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "NonMicrofinanceLoansPP",
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
                      value={formData.NonMicrofinanceLoansPP[index].InterestRates || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "NonMicrofinanceLoansPP",
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

      {/* ON-BALANCE SHEET MANAGED PORTFOLIO */}
      <SectionHeader title="On-Balance Sheet Managed Portfolio" date={selectedMonthName} />
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
                }}>Product Type</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Amount of Portfolio Outstanding (INR)</th>
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
                      value={formData.ManagedPortfolioPP[index].InterestRate || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "ManagedPortfolioPP",
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

      {/* OFF-BALANCE SHEET MANAGED PORTFOLIO */}
      <SectionHeader title="Off-Balance Sheet Managed Portfolio" date={selectedMonthName} />
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
              handleMicroFinanceRowChange(e, "OffBalanceManagedPortfolioPP", {
                SNo: "",
                ProductName: "",
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
                }}>Amount of Portfolio Outstanding (INR)</th>
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
                      value={formData.OffBalanceManagedPortfolioPP[index].ProductName || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "OffBalanceManagedPortfolioPP",
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
                      value={formData.OffBalanceManagedPortfolioPP[index].AmountOutstanding || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "OffBalanceManagedPortfolioPP",
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
                      value={formData.OffBalanceManagedPortfolioPP[index].InterestRate || ""}
                      onChange={(e) =>
                        handleRepeaterChange(
                          "OffBalanceManagedPortfolioPP",
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

export default ProductPricing;