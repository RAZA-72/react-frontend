// import "./PortfolioBreakup.css";
// import React, { useState } from "react";

// function PortfolioBreakup({ formData, handleChange, handleNestedChange,  selectedMonthName,        // ✅ YEH LINE MISS THI
//   setSelectedMonthName,
//   selectedDuring_FY,
//   setselectedDuring_FY,
//   Quarter, setQuarter ,
//   }) {
//   return (
//     <div style={{ width: "80%", padding: "20px" }}>


// <table
//         style={{
//           width: "100%",
//           borderCollapse: "collapse",
//           border: "1px solid black",
//         }}
//       >


//         <thead>
//           <tr style={{ backgroundColor: "#2c3e50", color: "white" }}>
//             {/* <th style={{ border: '1px solid black', padding: '10px', textAlign: 'left' }}></th> */}
//             <th
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 backgroundColor: "#1f4a90",
//               }}
//               colSpan={2}
//             ></th>
//             <th style={{ padding: "10px", backgroundColor: "#1f4a90" }}>
//               {" "}
//               AUM(INR)
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr
//             style={{
//               backgroundColor: "#2c3e50",
//               color: "white",
//               backgroundColor: "#1f4a90",
//             }}
//           >
//             <th
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 backgroundColor: "1f4a90",
//               }}
//             >
//               Purpose
//             </th>

//             <th style={{ float: "right", padding: "10px" }}></th>
//             <th>
//   {selectedMonthName
//                   ? selectedMonthName
//                   : ""}            </th>
//           </tr>

//           <tr style={{ backgroundColor: "#ecf0f1", fontWeight: "bold" }}>
//             <td className="TDCOLUMN"> A</td>
//             <td style={{ border: "1px solid black", padding: "10px" }}>
//               Agriculture and Allied Activities (total)
//             </td>
//             <td
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 textAlign: "center",
//               }}
//             >
//               {/*here: formData.AgricultureAndAlliedActivitiesTotal */}
//               {formData.AgricultureAndAlliedActivitiesTotal || 0}
//             </td>
//           </tr>

//           <tr style={{ fontWeight: "bold" }}>
//             <td className="TDCOLUMN"></td>
//             <td
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 backgroundColor: "#fff",
//               }}
//             >
//               Agriculture and Allied Activities
//             </td>
//             <td
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 textAlign: "center",
//                 backgroundColor: "#fff",
//               }}
//             >
//               <input
//                 type="text"
//                 class="form-control"
//                 value={formData.AgricultureAndAlliedActivities || ""}
//                 onChange={(e) =>
//                   handleChange("", "AgricultureAndAlliedActivities", e.target.value)
//                 }
//               />
//             </td>
//           </tr>

//           <tr style={{ backgroundColor: "#fff", fontWeight: "bold" }}>
//             <td
//               className="TDCOLUMN"
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 textAlign: "center",
//               }}
//             >
//               B
//             </td>
//             <td style={{ border: "1px solid black", padding: "10px" }}>
//               Non-agriculture (total)
//             </td>
//             <td
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 textAlign: "center",
//               }}
//             >
//               {/* here : NonAgricultureTotal */}
//               {formData.NonAgricultureTotal || 0}
//             </td>
//           </tr>

//           <tr style={{ fontWeight: "bold" }}>
//             <td className="TDCOLUMN"></td>
//             <td
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 backgroundColor: "#fff",
//               }}
//             >
//               Trade and services
//             </td>
//             <td
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 textAlign: "center",
//                 backgroundColor: "#fff",
//               }}
//             >
//               <input
//                 type="text"
//                 class="form-control"
//                 value={formData.TradeAndServices || ""}
//                 onChange={(e) =>
//                   handleChange("", "TradeAndServices", e.target.value)
//                 }
//               />
//             </td>
//           </tr>

//           <tr style={{ fontWeight: "bold" }}>
//             <td className="TDCOLUMN"></td>
//             <td
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 backgroundColor: "#fff",
//               }}
//             >
//               Manufacturing / production
//             </td>
//             <td
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 textAlign: "center",
//                 backgroundColor: "#fff",
//               }}
//             >
//               <input
//                 type="text"
//                 class="form-control"
//                 value={formData.ManufacturingProduction || ""}
//                 onChange={(e) =>
//                   handleChange("", "ManufacturingProduction", e.target.value)
//                 }
//               />
//             </td>
//           </tr>

//           <tr style={{ backgroundColor: "#ecf0f1", fontWeight: "bold" }}>
//             <td
//               className="TDCOLUMN"
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 textAlign: "center",
//               }}
//             >
//               C
//             </td>
//             <td style={{ border: "1px solid black", padding: "10px" }}>
//               Household Finance (total)
//             </td>
//             <td
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 textAlign: "center",
//               }}
//             >
//               {/* here : HouseholdFinanceTotal */}
//               {formData.HouseholdFinanceTotal || 0}
//             </td>
//           </tr>

//           <tr style={{ fontWeight: "bold" }}>
//             <td className="TDCOLUMN"></td>
//             <td
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 backgroundColor: "#fff",
//               }}
//             >
//               Education
//             </td>
//             <td
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 textAlign: "center",
//                 backgroundColor: "#fff",
//               }}
//             >
//               <input
//                 type="text"
//                 class="form-control"
//                 value={formData.Education || ""}
//                 onChange={(e) =>
//                   handleChange("", "Education", e.target.value)
//                 }
//               />
//             </td>
//           </tr>
//           <tr style={{ fontWeight: "bold" }}>
//             <td className="TDCOLUMN"></td>
//             <td
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 backgroundColor: "#fff",
//               }}
//             >
//               Medical
//             </td>
//             <td
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 textAlign: "center",
//                 backgroundColor: "#fff",
//               }}
//             >
//               <input
//                 type="text"
//                 class="form-control"
//                 value={formData.Medical || ""}
//                 onChange={(e) =>
//                   handleChange("", "Medical", e.target.value)
//                 }
//               />
//             </td>
//           </tr>

//           <tr style={{ fontWeight: "bold" }}>
//             <td className="TDCOLUMN"></td>
//             <td
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 backgroundColor: "#fff",
//               }}
//             >
//               Housing / home improvement
//             </td>
//             <td
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 textAlign: "center",
//                 backgroundColor: "#fff",
//               }}
//             >
//               <input
//                 type="text"
//                 class="form-control"
//                 value={formData.HousingHomeImprovement || ""}
//                 onChange={(e) =>
//                   handleChange("", "HousingHomeImprovement", e.target.value)
//                 }
//               />
//             </td>
//           </tr>

//           <tr style={{ fontWeight: "bold" }}>
//             <td className="TDCOLUMN"></td>
//             <td
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 backgroundColor: "#fff",
//               }}
//             >
//               Other household finance
//             </td>
//             <td
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 textAlign: "center",
//                 backgroundColor: "#fff",
//               }}
//             >
//               <input
//                 type="text"
//                 class="form-control"
//                 value={formData.OtherHouseholdFinance || ""}
//                 onChange={(e) =>
//                   handleChange("", "OtherHouseholdFinance", e.target.value)
//                 }
//               />
//             </td>
//           </tr>

//           <tr style={{ backgroundColor: "#ecf0f1", fontWeight: "bold" }}>
//             <td
//               className="TDCOLUMN"
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 textAlign: "center",
//                 backgroundColor: "#fff",
//               }}
//             >
//               {" "}
//               D
//             </td>
//             <td style={{ border: "1px solid black", padding: "10px" }}>
//               Total
//             </td>
//             <td
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 textAlign: "center",
//                 backgroundColor: "#fff",
//               }}
//             >
//               {/* here : Total */}
//               {formData.Total || 0}
//             </td>
//           </tr>

//           <tr style={{ backgroundColor: "#ecf0f1", fontWeight: "bold" }}>
//             <td
//               className="TDCOLUMN"
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 textAlign: "center",
//                 background: "#1f4a90",
//                 color: "white",
//               }}
//             >
//               {" "}
//               Location
//             </td>
//             <td
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 background: "#1f4a90",
//               }}
//             ></td>
//             <td
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 textAlign: "center",
//                 backgroundColor: "#fff",
//               }}
//             >
//               {/* here : Location */}
//               {formData.Location || 0}
//             </td>
//           </tr>

//           <tr style={{ fontWeight: "bold" }}>
//             <td className="TDCOLUMN"></td>
//             <td
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 backgroundColor: "#fff",
//               }}
//             >
//               Rural
//             </td>

//             <td
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 textAlign: "center",
//                 backgroundColor: "#fff",
//               }}
//             >
//               <input
//                 type="text"
//                 class="form-control"
//                 value={formData.Location1.Rural || ""}
//                 onChange={(e) =>
//                   handleChange("Location1", "Rural", e.target.value)
//                 }
//               />
//             </td>
//           </tr>

//           <tr style={{ fontWeight: "bold" }}>
//             <td className="TDCOLUMN"></td>
//             <td
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 backgroundColor: "#fff",
//               }}
//             >
//               Metropolitan / Urban / Semi-urban{" "}
//             </td>

//             <td
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 textAlign: "center",
//                 backgroundColor: "#fff",
//               }}
//             >
//               <input
//                 type="text"
//                 class="form-control"
//                 value={formData.Location1.MetropolitanUrbanSemiUrban || ""}
//                 onChange={(e) =>
//                   handleChange("Location1", "MetropolitanUrbanSemiUrban", e.target.value)
//                 }
//               />
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default PortfolioBreakup;

// import React from "react";

// const PortfolioBreakup = () => {
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
//           <b>Purpose</b>
//           <br />
//           {/* sub heading */}
//           <b style={{ float: "left" }}>
//             A. Agriculture and Allied Activities (total) : 0
//           </b>
//           <br />

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Agriculture and Allied Activities
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           {/* sub heading */}
//           <b style={{ float: "left" }}>B. Non-agriculture (total) : 0</b>
//           <br />

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Trade and services
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Manufacturing / production
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           {/* sub heading */}
//           <b style={{ float: "left" }}>C. Household Finance (total) : 0</b>
//           <br />
//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Education
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Medical
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Housing / home improvement
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Other household finance
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           {/* sub heading */}
//           <b style={{ float: "left" }}>D. Total : 0</b>
//           <br />

//           <b>Location</b>
//           <br />

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Rural
//             </label>
//             <input type="text" class="form-control" />
//           </div>
//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Metropolitan / Urban / Semi-urban
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           {/* submit button */}
//           <div class="mb-3">
//             <button type="submit" class="btn btn-primary">
//               Submit
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PortfolioBreakup;
// import "./PortfolioBreakup.css";
// import React, { useState } from "react";

// function PortfolioBreakup({ 
//   formData, 
//   handleChange, 
//   handleNestedChange,  
//   selectedMonthName,
//   setSelectedMonthName,
//   selectedDuring_FY,
//   setselectedDuring_FY,
//   Quarter, 
//   setQuarter,
// }) {

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

//   // Calculated field component matching Overview
//   const CalculatedField = ({ label, value, category = "" }) => (
//     <div style={{
//       padding: "14px 18px",
//       backgroundColor: "#f0f9ff",
//       borderRadius: "8px",
//       borderLeft: "4px solid #2B60AD",
//       marginBottom: "16px"
//     }}>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//           {category && (
//             <span style={{
//               fontSize: "14px",
//               fontWeight: "800",
//               color: "#2B60AD",
//               minWidth: "24px",
//               textAlign: "center"
//             }}>
//               {category}
//             </span>
//           )}
//           <span style={{ fontSize: "13px", fontWeight: "700", color: "#1e40af", letterSpacing: "0.2px" }}>
//             {label}
//           </span>
//         </div>
//         <span style={{ fontSize: "16px", fontWeight: "800", color: "#1e40af" }}>
//           {value || 0}
//         </span>
//       </div>
//     </div>
//   );

//   // FormInput component matching Overview
//   const FormInput = ({ label, value, section, field, category = "" }) => (
//     <div style={{ marginBottom: "16px" }}>
//       <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
//         {category && (
//           <span style={{
//             fontSize: "12px",
//             fontWeight: "700",
//             color: "#6b7280",
//             minWidth: "24px",
//             textAlign: "center"
//           }}>
//             {category}
//           </span>
//         )}
//         <label style={{
//           display: "block",
//           fontSize: "12px",
//           fontWeight: "700",
//           color: "#1f2937",
//           letterSpacing: "0.3px"
//         }}>
//           {label}
//         </label>
//       </div>
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

//   return (
//     <div style={{
//       backgroundColor: "#f8f9fa",
//       padding: "20px",
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     }}>

//       {/* PORTFOLIO BREAKUP BY PURPOSE */}
//       <SectionHeader title="Portfolio Breakup by Purpose - AUM (INR)" date={selectedMonthName} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "24px",
//         borderRadius: "0 0 10px 10px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//         marginBottom: "8px"
//       }}>

//         {/* Agriculture and Allied Activities */}
//         <CalculatedField 
//           category="A"
//           label="Agriculture and Allied Activities (Total)" 
//           value={formData.AgricultureAndAlliedActivitiesTotal}
//         />

//         <FormInput 
//           label="Agriculture and Allied Activities" 
//           value={formData.AgricultureAndAlliedActivities}
//           section=""
//           field="AgricultureAndAlliedActivities"
//         />

//         {/* Non-agriculture */}
//         <CalculatedField 
//           category="B"
//           label="Non-agriculture (Total)" 
//           value={formData.NonAgricultureTotal}
//         />

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "1fr",
//           gap: "0",
//         }}>
//           <FormInput 
//             label="Trade and Services" 
//             value={formData.TradeAndServices}
//             section=""
//             field="TradeAndServices"
//           />
//           <FormInput 
//             label="Manufacturing / Production" 
//             value={formData.ManufacturingProduction}
//             section=""
//             field="ManufacturingProduction"
//           />
//         </div>

//         {/* Household Finance */}
//         <CalculatedField 
//           category="C"
//           label="Household Finance (Total)" 
//           value={formData.HouseholdFinanceTotal}
//         />

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "1fr",
//           gap: "0",
//         }}>
//           <FormInput 
//             label="Education" 
//             value={formData.Education}
//             section=""
//             field="Education"
//           />
//           <FormInput 
//             label="Medical" 
//             value={formData.Medical}
//             section=""
//             field="Medical"
//           />
//           <FormInput 
//             label="Housing / Home Improvement" 
//             value={formData.HousingHomeImprovement}
//             section=""
//             field="HousingHomeImprovement"
//           />
//           <FormInput 
//             label="Other Household Finance" 
//             value={formData.OtherHouseholdFinance}
//             section=""
//             field="OtherHouseholdFinance"
//           />
//         </div>

//         {/* Total */}
//         <CalculatedField 
//           category="D"
//           label="Total" 
//           value={formData.Total}
//         />
//       </div>

//       {/* PORTFOLIO BREAKUP BY LOCATION */}
//       <SectionHeader title="Portfolio Breakup by Location" date={selectedMonthName} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "24px",
//         borderRadius: "0 0 10px 10px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//         marginBottom: "8px"
//       }}>

//         <CalculatedField 
//           label="Total (INR)" 
//           value={formData.Location}
//         />

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "1fr",
//           gap: "0",
//         }}>
//           <FormInput 
//             label="Rural" 
//             value={formData.Location1.Rural}
//             section="Location1"
//             field="Rural"
//           />
//           <FormInput 
//             label="Metropolitan / Urban / Semi-urban" 
//             value={formData.Location1.MetropolitanUrbanSemiUrban}
//             section="Location1"
//             field="MetropolitanUrbanSemiUrban"
//           />
//         </div>
//       </div>

//     </div>
//   );
// }

// export default PortfolioBreakup;

// import "./PortfolioBreakup.css";
// import React, { useState } from "react";

// function PortfolioBreakup({ 
//   formData, 
//   handleChange, 
//   handleNestedChange,  
//   selectedMonthName,
//   setSelectedMonthName,
//   selectedDuring_FY,
//   setselectedDuring_FY,
//   Quarter, 
//   setQuarter,
// }) {

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
//   const CalculatedField = ({ label, value, category = "" }) => (
//     <div style={{
//       padding: "10px 14px",
//       backgroundColor: "#f0f9ff",
//       borderRadius: "6px",
//       borderLeft: "3px solid #2B60AD",
//       marginBottom: "10px"
//     }}>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//           {category && (
//             <span style={{
//               fontSize: "13px",
//               fontWeight: "800",
//               color: "#2B60AD",
//               minWidth: "20px",
//               textAlign: "left"
//             }}>
//               {category}
//             </span>
//           )}
//           <span style={{ 
//             fontSize: "12px", 
//             fontWeight: "700", 
//             color: "#1e40af", 
//             letterSpacing: "0.2px",
//             textAlign: "left"
//           }}>
//             {label}
//           </span>
//         </div>
//         <span style={{ fontSize: "15px", fontWeight: "800", color: "#1e40af" }}>
//           {value || 0}
//         </span>
//       </div>
//     </div>
//   );

//   // FormInput component - compact
//   const FormInput = ({ label, value, section, field, category = "" }) => (
//     <div>
//       <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
//         {category && (
//           <span style={{
//             fontSize: "11px",
//             fontWeight: "700",
//             color: "#6b7280",
//             minWidth: "20px",
//             textAlign: "left"
//           }}>
//             {category}
//           </span>
//         )}
//         <label style={{
//           display: "block",
//           fontSize: "11px",
//           fontWeight: "700",
//           color: "#1f2937",
//           letterSpacing: "0.2px",
//           textAlign: "left"
//         }}>
//           {label}
//         </label>
//       </div>
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

//   return (
//     <div style={{
//       backgroundColor: "#f8f9fa",
//       padding: "16px",
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     }}>

//       {/* PORTFOLIO BREAKUP BY PURPOSE */}
//       <SectionHeader title="Portfolio Breakup by Purpose - AUM (INR)" date={selectedMonthName} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "16px",
//         borderRadius: "0 0 8px 8px",
//         boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
//         marginBottom: "4px"
//       }}>

//         {/* Agriculture and Allied Activities */}
//         <CalculatedField 
//           category="A"
//           label="Agriculture and Allied Activities (Total)" 
//           value={formData.AgricultureAndAlliedActivitiesTotal}
//         />

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px",
//           marginBottom: "10px"
//         }}>
//           <FormInput 
//             label="Agriculture and Allied Activities" 
//             value={formData.AgricultureAndAlliedActivities}
//             section=""
//             field="AgricultureAndAlliedActivities"
//           />
//         </div>

//         {/* Non-agriculture */}
//         <CalculatedField 
//           category="B"
//           label="Non-agriculture (Total)" 
//           value={formData.NonAgricultureTotal}
//         />

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px",
//           marginBottom: "10px"
//         }}>
//           <FormInput 
//             label="Trade and Services" 
//             value={formData.TradeAndServices}
//             section=""
//             field="TradeAndServices"
//           />
//           <FormInput 
//             label="Manufacturing / Production" 
//             value={formData.ManufacturingProduction}
//             section=""
//             field="ManufacturingProduction"
//           />
//         </div>

//         {/* Household Finance */}
//         <CalculatedField 
//           category="C"
//           label="Household Finance (Total)" 
//           value={formData.HouseholdFinanceTotal}
//         />

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px",
//           marginBottom: "10px"
//         }}>
//           <FormInput 
//             label="Education" 
//             value={formData.Education}
//             section=""
//             field="Education"
//           />
//           <FormInput 
//             label="Medical" 
//             value={formData.Medical}
//             section=""
//             field="Medical"
//           />
//           <FormInput 
//             label="Housing / Home Improvement" 
//             value={formData.HousingHomeImprovement}
//             section=""
//             field="HousingHomeImprovement"
//           />
//           <FormInput 
//             label="Other Household Finance" 
//             value={formData.OtherHouseholdFinance}
//             section=""
//             field="OtherHouseholdFinance"
//           />
//         </div>

//         {/* Total */}
//         <CalculatedField 
//           category="D"
//           label="Total" 
//           value={formData.Total}
//         />
//       </div>

//       {/* PORTFOLIO BREAKUP BY LOCATION */}
//       <SectionHeader title="Portfolio Breakup by Location" date={selectedMonthName} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "16px",
//         borderRadius: "0 0 8px 8px",
//         boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
//         marginBottom: "4px"
//       }}>

//         <CalculatedField 
//           label="Total (INR)" 
//           value={formData.Location}
//         />

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px",
//         }}>
//           <FormInput 
//             label="Rural" 
//             value={formData.Location1.Rural}
//             section="Location1"
//             field="Rural"
//           />
//           <FormInput 
//             label="Metropolitan / Urban / Semi-urban" 
//             value={formData.Location1.MetropolitanUrbanSemiUrban}
//             section="Location1"
//             field="MetropolitanUrbanSemiUrban"
//           />
//         </div>
//       </div>

//     </div>
//   );
// }

// export default PortfolioBreakup;

// import "./PortfolioBreakup.css";
// import React, { useState } from "react";

// function PortfolioBreakup({
//   formData,
//   handleChange,
//   handleNestedChange,
//   selectedMonthName,
//   setSelectedMonthName,
//   selectedDuring_FY,
//   setselectedDuring_FY,
//   Quarter,
//   setQuarter,
// }) {

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
//   const CalculatedField = ({ label, value, category = "" }) => (
//     <div style={{
//       padding: "10px 14px",
//       backgroundColor: "#f0f9ff",
//       borderRadius: "6px",
//       borderLeft: "3px solid #2B60AD",
//       marginBottom: "10px"
//     }}>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//           {category && (
//             <span style={{
//               fontSize: "13px",
//               fontWeight: "800",
//               color: "#2B60AD",
//               minWidth: "20px",
//               textAlign: "left"
//             }}>
//               {category}
//             </span>
//           )}
//           <span style={{
//             fontSize: "12px",
//             fontWeight: "700",
//             color: "#1e40af",
//             letterSpacing: "0.2px",
//             textAlign: "left"
//           }}>
//             {label}
//           </span>
//         </div>
//         <span style={{ fontSize: "15px", fontWeight: "800", color: "#1e40af" }}>
//           {value || 0}
//         </span>
//       </div>
//     </div>
//   );

//   // FormInput component - compact
//   const FormInput = ({ label, value, section, field, category = "" }) => (
//     <div>
//       <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
//         {category && (
//           <span style={{
//             fontSize: "11px",
//             fontWeight: "700",
//             color: "#6b7280",
//             minWidth: "20px",
//             textAlign: "left"
//           }}>
//             {category}
//           </span>
//         )}
//         <label style={{
//           display: "block",
//           fontSize: "11px",
//           fontWeight: "700",
//           color: "#1f2937",
//           letterSpacing: "0.2px",
//           textAlign: "left"
//         }}>
//           {label}
//         </label>
//       </div>
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

//   return (
//     <div style={{
//       backgroundColor: "#f8f9fa",
//       padding: "16px",
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     }}>

//       {/* PORTFOLIO BREAKUP BY PURPOSE */}
//       <SectionHeader title="Portfolio Breakup by Purpose - AUM (INR)" date={selectedMonthName} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "16px",
//         borderRadius: "0 0 8px 8px",
//         boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
//         marginBottom: "4px"
//       }}>

//         {/* Agriculture and Allied Activities */}
//         <CalculatedField
//           category="A"
//           label="Agriculture and Allied Activities (Total)"
//           value={formData.AgricultureAndAlliedActivitiesTotal}
//         />

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px",
//           marginBottom: "10px"
//         }}>
//           <FormInput
//             label="Agriculture and Allied Activities"
//             value={formData.AgricultureAndAlliedActivities}
//             section=""
//             field="AgricultureAndAlliedActivities"
//           />
//         </div>

//         {/* Non-agriculture */}
//         <CalculatedField
//           category="B"
//           label="Non-agriculture (Total)"
//           value={formData.NonAgricultureTotal}
//         />

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px",
//           marginBottom: "10px"
//         }}>
//           <FormInput
//             label="Trade and Services"
//             value={formData.TradeAndServices}
//             section=""
//             field="TradeAndServices"
//           />
//           <FormInput
//             label="Manufacturing / Production"
//             value={formData.ManufacturingProduction}
//             section=""
//             field="ManufacturingProduction"
//           />
//         </div>

//         {/* Household Finance */}
//         <CalculatedField
//           category="C"
//           label="Household Finance (Total)"
//           value={formData.HouseholdFinanceTotal}
//         />

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px",
//           marginBottom: "10px"
//         }}>
//           <FormInput
//             label="Education"
//             value={formData.Education}
//             section=""
//             field="Education"
//           />
//           <FormInput
//             label="Medical"
//             value={formData.Medical}
//             section=""
//             field="Medical"
//           />
//           <FormInput
//             label="Housing / Home Improvement"
//             value={formData.HousingHomeImprovement}
//             section=""
//             field="HousingHomeImprovement"
//           />
//           <FormInput
//             label="Other Household Finance"
//             value={formData.OtherHouseholdFinance}
//             section=""
//             field="OtherHouseholdFinance"
//           />
//         </div>

//         {/* Total */}
//         <CalculatedField
//           category="D"
//           label="Total"
//           value={formData.Total}
//         />
//       </div>

//       {/* PORTFOLIO BREAKUP BY LOCATION */}
//       <SectionHeader title="Portfolio Breakup by Location" date={selectedMonthName} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "16px",
//         borderRadius: "0 0 8px 8px",
//         boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
//         marginBottom: "4px"
//       }}>

//         <CalculatedField
//           label="Total (INR)"
//           value={formData.Location}
//         />

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px",
//         }}>
//           <FormInput
//             label="Rural"
//             value={formData.Location1.Rural}
//             section="Location1"
//             field="Rural"
//           />
//           <FormInput
//             label="Metropolitan / Urban / Semi-urban"
//             value={formData.Location1.MetropolitanUrbanSemiUrban}
//             section="Location1"
//             field="MetropolitanUrbanSemiUrban"
//           />
//         </div>
//       </div>

//     </div>
//   );
// }

// export default PortfolioBreakup;

import "./PortfolioBreakup.css";
import React, { useState } from "react";

function PortfolioBreakup({
  formData,
  handleChange,
  handleNestedChange,
  selectedMonthName,
  setSelectedMonthName,
  selectedDuring_FY,
  setselectedDuring_FY,
  Quarter,
  setQuarter,
}) {

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

  // Calculated field with teal accent
  const CalculatedField = ({ label, value, category = "" }) => (
    <div style={{
      padding: "12px 16px",
      background: "linear-gradient(135deg, #F0FDFC 0%, #E6F9F7 100%)",
      borderRadius: "8px",
      borderLeft: "4px solid #39B1AC",
      marginBottom: "12px",
      boxShadow: "0 2px 6px rgba(57, 177, 172, 0.08)"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {category && (
            <span style={{
              fontSize: "12px",
              fontWeight: "700",
              color: "#0F766E",
              minWidth: "20px",
              textAlign: "left",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            }}>
              {category}
            </span>
          )}
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
        </div>
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

  // FormInput component
  const FormInput = ({ label, value, section, field, category = "" }) => {
    const inputId = "input-" + section + "-" + field + "-" + Math.random();
    
    return (
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
          {category && (
            <span style={{
              fontSize: "11px",
              fontWeight: "700",
              color: "#374151",
              minWidth: "20px",
              textAlign: "left",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            }}>
              {category}
            </span>
          )}
          <label 
            htmlFor={inputId}
            style={{
              display: "block",
              fontSize: "11px",
              fontWeight: "700",
              color: "#374151",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              textAlign: "left"
            }}
          >
            {label}
          </label>
        </div>
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
          onChange={(e) => handleChange(section, field, e.target.value)}
          onFocus={(e) => { 
            e.target.style.borderColor = "#39B1AC";
            e.target.style.backgroundColor = "#FFFFFF";
            e.target.style.boxShadow = "0 0 0 3px rgba(57, 177, 172, 0.1)";
          }}
          onBlur={(e) => { 
            e.target.style.borderColor = "#E8E8E8";
            e.target.style.backgroundColor = "#FFFFFF";
            e.target.style.boxShadow = "none";
          }}
        />
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

      {/* PORTFOLIO BREAKUP BY PURPOSE */}
      <SectionHeader title="Portfolio Breakup by Purpose - AUM (INR)" date={selectedMonthName} />
      <div style={{
        backgroundColor: "#FFFFFF",
        padding: "20px",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        marginBottom: "6px",
        border: "1px solid #F3F4F6",
        borderTop: "none"
      }}>

        {/* Agriculture and Allied Activities */}
        <CalculatedField
          category="A"
          label="Agriculture and Allied Activities (Total)"
          value={formData.AgricultureAndAlliedActivitiesTotal}
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px",
          marginBottom: "12px"
        }}>
          <FormInput
            label="Agriculture and Allied Activities"
            value={formData.AgricultureAndAlliedActivities}
            section=""
            field="AgricultureAndAlliedActivities"
          />
        </div>

        {/* Non-agriculture */}
        <CalculatedField
          category="B"
          label="Non-agriculture (Total)"
          value={formData.NonAgricultureTotal}
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px",
          marginBottom: "12px"
        }}>
          <FormInput
            label="Trade and Services"
            value={formData.TradeAndServices}
            section=""
            field="TradeAndServices"
          />
          <FormInput
            label="Manufacturing / Production"
            value={formData.ManufacturingProduction}
            section=""
            field="ManufacturingProduction"
          />
        </div>

        {/* Household Finance */}
        <CalculatedField
          category="C"
          label="Household Finance (Total)"
          value={formData.HouseholdFinanceTotal}
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px",
          marginBottom: "12px"
        }}>
          <FormInput
            label="Education"
            value={formData.Education}
            section=""
            field="Education"
          />
          <FormInput
            label="Medical"
            value={formData.Medical}
            section=""
            field="Medical"
          />
          <FormInput
            label="Housing / Home Improvement"
            value={formData.HousingHomeImprovement}
            section=""
            field="HousingHomeImprovement"
          />
          <FormInput
            label="Other Household Finance"
            value={formData.OtherHouseholdFinance}
            section=""
            field="OtherHouseholdFinance"
          />
        </div>

        {/* Total */}
        <CalculatedField
          category="D"
          label="Total"
          value={formData.Total}
        />
      </div>

      {/* PORTFOLIO BREAKUP BY LOCATION */}
      <SectionHeader title="Portfolio Breakup by Location" date={selectedMonthName} />
      <div style={{
        backgroundColor: "#FFFFFF",
        padding: "20px",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        marginBottom: "6px",
        border: "1px solid #F3F4F6",
        borderTop: "none"
      }}>

        <CalculatedField
          label="Total (INR)"
          value={formData.Location}
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px",
        }}>
          <FormInput
            label="Rural"
            value={formData.Location1.Rural}
            section="Location1"
            field="Rural"
          />
          <FormInput
            label="Metropolitan / Urban / Semi-urban"
            value={formData.Location1.MetropolitanUrbanSemiUrban}
            section="Location1"
            field="MetropolitanUrbanSemiUrban"
          />
        </div>
      </div>

    </div>
  );
}

export default PortfolioBreakup;