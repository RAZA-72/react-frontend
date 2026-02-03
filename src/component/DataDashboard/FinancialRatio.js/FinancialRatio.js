// import React from "react";
// import "./FinancialRatio.css";

// function FinancialRatio({formData,handleChange,handleNestedChange,quarterList, selectedMonthName,        // ✅ YEH LINE MISS THI
//   setSelectedMonthName,Quarter, setQuarter ,
//   selectedDuring_FY,
//   setselectedDuring_FY }) {
//   return (
//     <div
//       style={{
//         width: "80%",
//         backgroundColor: "fff",
//         padding: "20px",
//       }}
//     >

//       <form>
//         <table
//           class="table table-light table-bordered border-primary"
//           style={{ width: "100%" }}
//         >
//           <thead>
//             <tr className="blue-row">
//               <th>S No</th>
//               <th>Parameter</th>
//               <th>Formula</th>
// <th>{Quarter 
// ? Quarter
// : ""}</th>
//             </tr>

//             <tr className="note">
//               <th colSpan={3} >
//                 Note: Gross NPA, Net NPA and LCR are as on date ratios. Please
//                 refer to the below formulae for calculation of average assets,
//                 average GLP and average AUM.
//               </th>
//               <th >As on 31 December 2024</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* subheading */}
//             <tr className="subheading">
//               <td colSpan={4}>Operational efficiency</td>
//             </tr>
//             <tr>
//               <td>1</td>
//               <td>Personnel Expense Ratio (PER), %</td>
//               <td>Personnel expense to Average AUM</td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.operational_efficiency.personnel_expense_ratio || ""}
//                   onChange={(e) =>
//                     handleChange("operational_efficiency","personnel_expense_ratio", e.target.value)
//                   }
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td>2</td>
//               <td>Operating Expense Ratio (OER), %</td>
//               <td>Operating expense to Average AUM</td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.operational_efficiency.per || ""}
//                   onChange={(e) =>
//                     handleChange("operational_efficiency","per", e.target.value)
//                   }
//                 />              </td>
//             </tr>

//             <tr>
//               <td>3</td>
//               <td>Cost of funds (CoF), % (Annualized)</td>
//               <td>
//                 All Cost incurred on the borrowings (like interest, processing
//                 fee, GST, bank charges etc.) / Average borrowings balance O/s
//               </td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.operational_efficiency.cost_of_funds || ""}
//                   onChange={(e) =>
//                     handleChange("operational_efficiency","cost_of_funds", e.target.value)
//                   }
//                 />              </td>
//             </tr>

//             <tr>
//               <td>4</td>
//               <td>Funding Cost Ratio (FCR), %</td>
//               <td>
//                 Interest and fee expense on funding liability to Average GLP
//               </td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.operational_efficiency.funding_cost_ratio || ""}
//                   onChange={(e) =>
//                     handleChange("operational_efficiency","funding_cost_ratio", e.target.value)
//                   }
//                 />              </td>
//             </tr>

//             <tr>
//               <td>5</td>
//               <td>Cost/Borrower, Rs</td>
//               <td>Operating expense to Average number of active clients</td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.operational_efficiency.cost_per_borrower || ""}
//                   onChange={(e) =>
//                     handleChange("operational_efficiency","cost_per_borrower", e.target.value)
//                   }
//                 />              </td>
//             </tr>

//             {/* subheading */}
//             <tr className="subheading">
//               <td colSpan={4}>Capital adequacy & liquidity</td>
//             </tr>

//             <tr>
//               <td>6</td>
//               <td>Liquidity Coverage Ratio (LCR), %</td>
//               <td>
//                 Stock of high quality liquid asset to Total net cash flows over
//                 the next 30 calendar days
//               </td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.capital_adequacy.liquidity_coverage_ratio || ""}
//                   onChange={(e) =>
//                     handleChange("capital_adequacy","liquidity_coverage_ratio", e.target.value)
//                   }
//                 />    
//               </td>
//             </tr>

//             <tr>
//               <td>7</td>
//               <td>Capital Adequacy, %</td>
//               <td>Tier 1 CRAR % (as reported to RBI)</td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.capital_adequacy.tier_1_crar || ""}
//                   onChange={(e) =>
//                     handleChange("capital_adequacy","tier_1_crar", e.target.value)
//                   }
//                 />               </td>
//             </tr>

//             <tr>
//               <td>8</td>
//               <td>Capital Adequacy, %</td>
//               <td>Tier 2 CRAR % (as reported to RBI)</td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.capital_adequacy.tier_2_crar || ""}
//                   onChange={(e) =>
//                     handleChange("capital_adequacy","tier_2_crar", e.target.value)
//                   }
//                 />               </td>
//             </tr>

//             {/* subheading */}
//             <tr className="subheading">
//               <td colSpan={4}>Profitability</td>
//             </tr>

//             <tr>
//               <td>9</td>
//               <td>Return on Asset (RoA), %</td>
//               <td>(Net operating income - Taxes) to Average Asset</td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.profitability.return_on_asset || ""}
//                   onChange={(e) =>
//                     handleChange("profitability","return_on_asset", e.target.value)
//                   }
//                 />  
//               </td>
//             </tr>

//             <tr>
//               <td>10</td>
//               <td>Return on Equity (RoE), %</td>
//               <td>(Net operating income - Taxes) to Average Equity</td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.profitability.return_on_equity || ""}
//                   onChange={(e) =>
//                     handleChange("profitability","return_on_equity", e.target.value)
//                   }
//                 />                </td>
//             </tr>

//             <tr>
//               <td>11</td>
//               <td>Yield on portfolio, %</td>
//               <td>Total interest earned on all loans to Average GLP</td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.profitability.yield_on_portfolio || ""}
//                   onChange={(e) =>
//                     handleChange("profitability","yield_on_portfolio", e.target.value)
//                   }
//                 />                </td>
//             </tr>

//             <tr>
//               <td>12</td>
//               <td>NIM %</td>
//               <td>(Interest income – Interest expenses) / Average GLP</td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.profitability.net_interest_margin || ""}
//                   onChange={(e) =>
//                     handleChange("profitability","net_interest_margin", e.target.value)
//                   }
//                 />                </td>
//             </tr>

//             <tr>
//               <td>13</td>
//               <td>Operating Self-Sufficiency (OSS), %</td>
//               <td>
//                 Operating income (interest income + processing fee + any other
//                 income) to total expenses (Financial expense + Loan loss
//                 provision + Operating expense)
//               </td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.profitability.operating_self_sufficiency || ""}
//                   onChange={(e) =>
//                     handleChange("profitability","operating_self_sufficiency", e.target.value)
//                   }
//                 />                </td>
//             </tr>

//             <tr>
//               <td>14</td>
//               <td>Other income to total income, %</td>
//               <td>Total other income to Total income for the period</td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.profitability.other_income_to_total_income || ""}
//                   onChange={(e) =>
//                     handleChange("profitability","other_income_to_total_income", e.target.value)
//                   }
//                 />                </td>
//             </tr>

//             {/* subheading */}
//             <tr className="subheading">
//               <td colSpan={4}>Portfolio quality</td>
//             </tr>

//             <tr>
//               <td>15</td>
//               <td>Gross NPA, %</td>
//               <td>Gross NPA to GLP</td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.portfolio_quality.gross_npa || ""}
//                   onChange={(e) =>
//                     handleChange("portfolio_quality","gross_npa", e.target.value)
//                   }
//                 />                </td>
//             </tr>

//             <tr>
//               <td>16</td>
//               <td>Net NPA, %</td>
//               <td>Net NPA to GLP</td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.portfolio_quality.net_npa || ""}
//                   onChange={(e) =>
//                     handleChange("portfolio_quality","net_npa", e.target.value)
//                   }
//                 />                 </td>
//             </tr>

//             <tr>
//               <td>17</td>
//               <td>Loan Loss Reserve Ratio (LLR), %</td>
//               <td>Loan loss reserve to GLP</td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.portfolio_quality.loan_loss_reserve_ratio || ""}
//                   onChange={(e) =>
//                     handleChange("portfolio_quality","loan_loss_reserve_ratio", e.target.value)
//                   }
//                 />                 </td>
//             </tr>

//             <tr>
//               <td>18</td>
//               <td>Write-off- Value, Rs</td>
//               <td>Amount of portfolio written off during the period</td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.portfolio_quality.write_off_value || ""}
//                   onChange={(e) =>
//                     handleChange("portfolio_quality","write_off_value", e.target.value)
//                   }
//                 />                 </td>
//             </tr>

//             <tr>
//               <td>19</td>
//               <td>Write-off ratio, %</td>
//               <td>Write-off to average GLP</td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.portfolio_quality.write_off_ratio || ""}
//                   onChange={(e) =>
//                     handleChange("portfolio_quality","write_off_ratio", e.target.value)
//                   }
//                 />                 </td>
//             </tr>

//              {/* subheading */}
//              <tr className="subheading">
//               <td colSpan={4}>Pricing of loans			
//               </td>
//             </tr>

//             <tr>
//               <td>20</td>
//               <td>Wt. Avg. lending rate
//               </td>
//               <td>(Reducing RoI * Loan disbursed during the quarter Product 1 + Reducing ROI * Loan disbursed during the quarter Product 2 +…& So on)/Total loans disbursed during the quarter
//               </td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.pricing_of_loans.weighted_avg_lending_rate || ""}
//                   onChange={(e) =>
//                     handleChange("pricing_of_loans","weighted_avg_lending_rate", e.target.value)
//                   }
//                 /> 
//               </td>
//             </tr>

//             <tr>
//               <td>21</td>
//               <td>Wt. Avg. processing fee
//               </td>
//               <td>Total processing fee charged on all loans /Total loan amount disbursed during the quarter
//               </td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.pricing_of_loans.weighted_avg_processing_fee || ""}
//                   onChange={(e) =>
//                     handleChange("pricing_of_loans","weighted_avg_processing_fee", e.target.value)
//                   }
//                 />               </td>
//             </tr>


//           </tbody>
//         </table>
//       </form>
//     </div>
//   );
// }

// export default FinancialRatio;

// import React from "react";

// const FinancialRatio = () => {
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
//           <b style={{ float: "left" }}>Operational efficiency</b>
//           <br />

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Personnel Expense Ratio (PER), %
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Operating Expense Ratio (OER), %
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Cost of funds (CoF), % (quarter)
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Cost of funds (CoF), % (FY)
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Funding Cost Ratio (FCR), %
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Cost/Borrower, Rs
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           {/* sub heading */}
//           <b style={{ float: "left" }}>Capital adequacy & liquidity</b>
//           <br />

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Liquidity Coverage Ratio (LCR), %
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Capital Adequacy, %
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Capital Adequacy, %
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           {/* sub heading */}
//           <b style={{ float: "left" }}>Profitability</b>
//           <br />

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Return on Asset (RoA), %
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Return on Equity (RoE), %
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Yield on portfolio, %
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Operating Self-Sufficiency (OSS), %
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Other income to total income, %
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           {/* sub heading */}
//           <b style={{ float: "left" }}>Portfolio quality</b>
//           <br />

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Gross NPA, %
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Net NPA, %
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Loan Loss Reserve Ratio (LLR), %
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Write-off- Value, Rs
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Write-off ratio, %
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           {/* sub heading */}
//           <b style={{ float: "left" }}>Pricing of loans</b>
//           <br />

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Wt. Avg. lending rate
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           <div class="mb-3">
//             <label
//               for="formGroupExampleInput"
//               class="form-label"
//               style={{ float: "left" }}
//             >
//               Wt. Avg. processing fee
//             </label>
//             <input type="text" class="form-control" />
//           </div>

//           {/* submit button */}
//           <div class="mb-3">
//             <button type="button" class="btn btn-success">submit</button>

//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default FinancialRatio;
// import React from "react";
// import "./FinancialRatio.css";

// function FinancialRatio({
//   formData,
//   handleChange,
//   handleNestedChange,
//   quarterList, 
//   selectedMonthName,
//   setSelectedMonthName,
//   Quarter, 
//   setQuarter,
//   selectedDuring_FY,
//   setselectedDuring_FY 
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

//   // Category header component
//   const CategoryHeader = ({ title, color = "#fef3c7" }) => (
//     <div style={{
//       padding: "12px 18px",
//       backgroundColor: color,
//       borderRadius: "6px",
//       marginBottom: "12px",
//       marginTop: "16px",
//       borderLeft: "4px solid #f59e0b"
//     }}>
//       <h6 style={{
//         fontSize: "13px",
//         fontWeight: "800",
//         color: "#78350f",
//         margin: 0,
//         textTransform: "uppercase",
//         letterSpacing: "0.5px"
//       }}>
//         {title}
//       </h6>
//     </div>
//   );

//   // Ratio row component
//   const RatioRow = ({ number, parameter, formula, value, section, field }) => (
//     <div style={{
//       display: "grid",
//       gridTemplateColumns: "60px 1fr 1.2fr 200px",
//       gap: "16px",
//       padding: "16px",
//       backgroundColor: "#ffffff",
//       borderBottom: "1px solid #f3f4f6",
//       alignItems: "center"
//     }}>
//       <div style={{
//         fontSize: "13px",
//         fontWeight: "700",
//         color: "#6b7280",
//         textAlign: "center"
//       }}>
//         {number}
//       </div>
//       <div style={{
//         fontSize: "13px",
//         fontWeight: "600",
//         color: "#111827",
//         letterSpacing: "0.2px"
//       }}>
//         {parameter}
//       </div>
//       <div style={{
//         fontSize: "12px",
//         fontWeight: "400",
//         color: "#6b7280",
//         lineHeight: "1.5"
//       }}>
//         {formula}
//       </div>
//       <div>
//         <input
//           type="text"
//           style={{
//             width: "100%",
//             height: "38px",
//             padding: "0 12px",
//             border: "1px solid #e5e7eb",
//             borderRadius: "6px",
//             fontSize: "13px",
//             fontWeight: "500",
//             color: "#111827",
//             outline: "none",
//             transition: "border 0.2s",
//             backgroundColor: "#ffffff"
//           }}
//           value={value || ""}
//           onChange={(e) => handleChange(section, field, e.target.value)}
//           onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//           onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//         />
//       </div>
//     </div>
//   );

//   return (
//     <div style={{
//       backgroundColor: "#f8f9fa",
//       padding: "20px",
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     }}>

//       {/* FINANCIAL RATIOS */}
//       <SectionHeader title="Financial Ratios" date={Quarter || ""} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         borderRadius: "0 0 10px 10px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//         marginBottom: "8px",
//         overflow: "hidden"
//       }}>
//         {/* Note Section */}
//         <div style={{
//           padding: "16px 20px",
//           backgroundColor: "#dbeafe",
//           borderBottom: "2px solid #93c5fd"
//         }}>
//           <p style={{
//             fontSize: "12px",
//             fontWeight: "600",
//             color: "#1e40af",
//             margin: 0,
//             lineHeight: "1.6"
//           }}>
//             <strong>Note:</strong> Gross NPA, Net NPA and LCR are as on date ratios. Please refer to the below formulae for calculation of average assets, average GLP and average AUM.
//           </p>
//         </div>

//         {/* Table Header */}
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "60px 1fr 1.2fr 200px",
//           gap: "16px",
//           padding: "14px 16px",
//           background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
//           color: "#ffffff"
//         }}>
//           <div style={{
//             fontSize: "12px",
//             fontWeight: "700",
//             textTransform: "uppercase",
//             letterSpacing: "0.5px",
//             textAlign: "center"
//           }}>S No</div>
//           <div style={{
//             fontSize: "12px",
//             fontWeight: "700",
//             textTransform: "uppercase",
//             letterSpacing: "0.5px"
//           }}>Parameter</div>
//           <div style={{
//             fontSize: "12px",
//             fontWeight: "700",
//             textTransform: "uppercase",
//             letterSpacing: "0.5px"
//           }}>Formula</div>
//           <div style={{
//             fontSize: "12px",
//             fontWeight: "700",
//             textTransform: "uppercase",
//             letterSpacing: "0.5px",
//             textAlign: "center"
//           }}>As on 31 December 2024</div>
//         </div>

//         <div style={{ padding: "16px" }}>
//           {/* OPERATIONAL EFFICIENCY */}
//           <CategoryHeader title="Operational Efficiency" />
//           <div style={{
//             border: "1px solid #e5e7eb",
//             borderRadius: "8px",
//             overflow: "hidden",
//             marginBottom: "8px"
//           }}>
//             <RatioRow
//               number="1"
//               parameter="Personnel Expense Ratio (PER), %"
//               formula="Personnel expense to Average AUM"
//               value={formData.operational_efficiency.personnel_expense_ratio}
//               section="operational_efficiency"
//               field="personnel_expense_ratio"
//             />
//             <RatioRow
//               number="2"
//               parameter="Operating Expense Ratio (OER), %"
//               formula="Operating expense to Average AUM"
//               value={formData.operational_efficiency.per}
//               section="operational_efficiency"
//               field="per"
//             />
//             <RatioRow
//               number="3"
//               parameter="Cost of funds (CoF), % (Annualized)"
//               formula="All Cost incurred on the borrowings (like interest, processing fee, GST, bank charges etc.) / Average borrowings balance O/s"
//               value={formData.operational_efficiency.cost_of_funds}
//               section="operational_efficiency"
//               field="cost_of_funds"
//             />
//             <RatioRow
//               number="4"
//               parameter="Funding Cost Ratio (FCR), %"
//               formula="Interest and fee expense on funding liability to Average GLP"
//               value={formData.operational_efficiency.funding_cost_ratio}
//               section="operational_efficiency"
//               field="funding_cost_ratio"
//             />
//             <RatioRow
//               number="5"
//               parameter="Cost/Borrower, Rs"
//               formula="Operating expense to Average number of active clients"
//               value={formData.operational_efficiency.cost_per_borrower}
//               section="operational_efficiency"
//               field="cost_per_borrower"
//             />
//           </div>

//           {/* CAPITAL ADEQUACY & LIQUIDITY */}
//           <CategoryHeader title="Capital Adequacy & Liquidity" />
//           <div style={{
//             border: "1px solid #e5e7eb",
//             borderRadius: "8px",
//             overflow: "hidden",
//             marginBottom: "8px"
//           }}>
//             <RatioRow
//               number="6"
//               parameter="Liquidity Coverage Ratio (LCR), %"
//               formula="Stock of high quality liquid asset to Total net cash flows over the next 30 calendar days"
//               value={formData.capital_adequacy.liquidity_coverage_ratio}
//               section="capital_adequacy"
//               field="liquidity_coverage_ratio"
//             />
//             <RatioRow
//               number="7"
//               parameter="Capital Adequacy, %"
//               formula="Tier 1 CRAR % (as reported to RBI)"
//               value={formData.capital_adequacy.tier_1_crar}
//               section="capital_adequacy"
//               field="tier_1_crar"
//             />
//             <RatioRow
//               number="8"
//               parameter="Capital Adequacy, %"
//               formula="Tier 2 CRAR % (as reported to RBI)"
//               value={formData.capital_adequacy.tier_2_crar}
//               section="capital_adequacy"
//               field="tier_2_crar"
//             />
//           </div>

//           {/* PROFITABILITY */}
//           <CategoryHeader title="Profitability" />
//           <div style={{
//             border: "1px solid #e5e7eb",
//             borderRadius: "8px",
//             overflow: "hidden",
//             marginBottom: "8px"
//           }}>
//             <RatioRow
//               number="9"
//               parameter="Return on Asset (RoA), %"
//               formula="(Net operating income - Taxes) to Average Asset"
//               value={formData.profitability.return_on_asset}
//               section="profitability"
//               field="return_on_asset"
//             />
//             <RatioRow
//               number="10"
//               parameter="Return on Equity (RoE), %"
//               formula="(Net operating income - Taxes) to Average Equity"
//               value={formData.profitability.return_on_equity}
//               section="profitability"
//               field="return_on_equity"
//             />
//             <RatioRow
//               number="11"
//               parameter="Yield on portfolio, %"
//               formula="Total interest earned on all loans to Average GLP"
//               value={formData.profitability.yield_on_portfolio}
//               section="profitability"
//               field="yield_on_portfolio"
//             />
//             <RatioRow
//               number="12"
//               parameter="NIM %"
//               formula="(Interest income – Interest expenses) / Average GLP"
//               value={formData.profitability.net_interest_margin}
//               section="profitability"
//               field="net_interest_margin"
//             />
//             <RatioRow
//               number="13"
//               parameter="Operating Self-Sufficiency (OSS), %"
//               formula="Operating income (interest income + processing fee + any other income) to total expenses (Financial expense + Loan loss provision + Operating expense)"
//               value={formData.profitability.operating_self_sufficiency}
//               section="profitability"
//               field="operating_self_sufficiency"
//             />
//             <RatioRow
//               number="14"
//               parameter="Other income to total income, %"
//               formula="Total other income to Total income for the period"
//               value={formData.profitability.other_income_to_total_income}
//               section="profitability"
//               field="other_income_to_total_income"
//             />
//           </div>

//           {/* PORTFOLIO QUALITY */}
//           <CategoryHeader title="Portfolio Quality" />
//           <div style={{
//             border: "1px solid #e5e7eb",
//             borderRadius: "8px",
//             overflow: "hidden",
//             marginBottom: "8px"
//           }}>
//             <RatioRow
//               number="15"
//               parameter="Gross NPA, %"
//               formula="Gross NPA to GLP"
//               value={formData.portfolio_quality.gross_npa}
//               section="portfolio_quality"
//               field="gross_npa"
//             />
//             <RatioRow
//               number="16"
//               parameter="Net NPA, %"
//               formula="Net NPA to GLP"
//               value={formData.portfolio_quality.net_npa}
//               section="portfolio_quality"
//               field="net_npa"
//             />
//             <RatioRow
//               number="17"
//               parameter="Loan Loss Reserve Ratio (LLR), %"
//               formula="Loan loss reserve to GLP"
//               value={formData.portfolio_quality.loan_loss_reserve_ratio}
//               section="portfolio_quality"
//               field="loan_loss_reserve_ratio"
//             />
//             <RatioRow
//               number="18"
//               parameter="Write-off- Value, Rs"
//               formula="Amount of portfolio written off during the period"
//               value={formData.portfolio_quality.write_off_value}
//               section="portfolio_quality"
//               field="write_off_value"
//             />
//             <RatioRow
//               number="19"
//               parameter="Write-off ratio, %"
//               formula="Write-off to average GLP"
//               value={formData.portfolio_quality.write_off_ratio}
//               section="portfolio_quality"
//               field="write_off_ratio"
//             />
//           </div>

//           {/* PRICING OF LOANS */}
//           <CategoryHeader title="Pricing of Loans" />
//           <div style={{
//             border: "1px solid #e5e7eb",
//             borderRadius: "8px",
//             overflow: "hidden",
//             marginBottom: "8px"
//           }}>
//             <RatioRow
//               number="20"
//               parameter="Wt. Avg. lending rate"
//               formula="(Reducing RoI * Loan disbursed during the quarter Product 1 + Reducing ROI * Loan disbursed during the quarter Product 2 +…& So on)/Total loans disbursed during the quarter"
//               value={formData.pricing_of_loans.weighted_avg_lending_rate}
//               section="pricing_of_loans"
//               field="weighted_avg_lending_rate"
//             />
//             <RatioRow
//               number="21"
//               parameter="Wt. Avg. processing fee"
//               formula="Total processing fee charged on all loans /Total loan amount disbursed during the quarter"
//               value={formData.pricing_of_loans.weighted_avg_processing_fee}
//               section="pricing_of_loans"
//               field="weighted_avg_processing_fee"
//             />
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default FinancialRatio;


// import React from "react";
// import "./FinancialRatio.css";

// function FinancialRatio({
//   formData,
//   handleChange,
//   handleNestedChange,
//   quarterList, 
//   selectedMonthName,
//   setSelectedMonthName,
//   Quarter, 
//   setQuarter,
//   selectedDuring_FY,
//   setselectedDuring_FY 
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

//   // Category header component - compact
//   const CategoryHeader = ({ title, color = "#fef3c7" }) => (
//     <div style={{
//       padding: "8px 14px",
//       backgroundColor: color,
//       borderRadius: "5px",
//       marginBottom: "8px",
//       marginTop: "12px",
//       borderLeft: "3px solid #f59e0b"
//     }}>
//       <h6 style={{
//         fontSize: "11px",
//         fontWeight: "800",
//         color: "#78350f",
//         margin: 0,
//         textTransform: "uppercase",
//         letterSpacing: "0.4px",
//         textAlign: "left"
//       }}>
//         {title}
//       </h6>
//     </div>
//   );

//   // Ratio row component - compact
//   const RatioRow = ({ number, parameter, formula, value, section, field }) => (
//     <div style={{
//       display: "grid",
//       gridTemplateColumns: "50px 1fr 1.2fr 180px",
//       gap: "12px",
//       padding: "12px",
//       backgroundColor: "#ffffff",
//       borderBottom: "1px solid #f3f4f6",
//       alignItems: "center"
//     }}>
//       <div style={{
//         fontSize: "12px",
//         fontWeight: "700",
//         color: "#6b7280",
//         textAlign: "left"
//       }}>
//         {number}
//       </div>
//       <div style={{
//         fontSize: "12px",
//         fontWeight: "600",
//         color: "#111827",
//         letterSpacing: "0.1px",
//         textAlign: "left"
//       }}>
//         {parameter}
//       </div>
//       <div style={{
//         fontSize: "11px",
//         fontWeight: "400",
//         color: "#6b7280",
//         lineHeight: "1.4",
//         textAlign: "left"
//       }}>
//         {formula}
//       </div>
//       <div>
//         <input
//           type="text"
//           style={{
//             width: "100%",
//             height: "34px",
//             padding: "0 10px",
//             border: "1px solid #e5e7eb",
//             borderRadius: "6px",
//             fontSize: "13px",
//             fontWeight: "500",
//             color: "#111827",
//             outline: "none",
//             transition: "border 0.2s",
//             backgroundColor: "#ffffff",
//             textAlign: "left"
//           }}
//           value={value || ""}
//           onChange={(e) => handleChange(section, field, e.target.value)}
//           onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//           onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//         />
//       </div>
//     </div>
//   );

//   return (
//     <div style={{
//       backgroundColor: "#f8f9fa",
//       padding: "16px",
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     }}>

//       {/* FINANCIAL RATIOS */}
//       <SectionHeader title="Financial Ratios" date={Quarter || ""} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         borderRadius: "0 0 8px 8px",
//         boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
//         marginBottom: "4px",
//         overflow: "hidden"
//       }}>
//         {/* Note Section */}
//         <div style={{
//           padding: "12px 16px",
//           backgroundColor: "#dbeafe",
//           borderBottom: "2px solid #93c5fd"
//         }}>
//           <p style={{
//             fontSize: "11px",
//             fontWeight: "600",
//             color: "#1e40af",
//             margin: 0,
//             lineHeight: "1.5",
//             textAlign: "left"
//           }}>
//             <strong>Note:</strong> Gross NPA, Net NPA and LCR are as on date ratios. Please refer to the below formulae for calculation of average assets, average GLP and average AUM.
//           </p>
//         </div>

//         {/* Table Header */}
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "50px 1fr 1.2fr 180px",
//           gap: "12px",
//           padding: "10px 12px",
//           background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
//           color: "#ffffff"
//         }}>
//           <div style={{
//             fontSize: "11px",
//             fontWeight: "700",
//             textTransform: "uppercase",
//             letterSpacing: "0.4px",
//             textAlign: "left"
//           }}>S No</div>
//           <div style={{
//             fontSize: "11px",
//             fontWeight: "700",
//             textTransform: "uppercase",
//             letterSpacing: "0.4px",
//             textAlign: "left"
//           }}>Parameter</div>
//           <div style={{
//             fontSize: "11px",
//             fontWeight: "700",
//             textTransform: "uppercase",
//             letterSpacing: "0.4px",
//             textAlign: "left"
//           }}>Formula</div>
//           <div style={{
//             fontSize: "11px",
//             fontWeight: "700",
//             textTransform: "uppercase",
//             letterSpacing: "0.4px",
//             textAlign: "left"
//           }}>As on 31 December 2024</div>
//         </div>

//         <div style={{ padding: "12px" }}>
//           {/* OPERATIONAL EFFICIENCY */}
//           <CategoryHeader title="Operational Efficiency" />
//           <div style={{
//             border: "1px solid #e5e7eb",
//             borderRadius: "6px",
//             overflow: "hidden",
//             marginBottom: "6px"
//           }}>
//             <RatioRow
//               number="1"
//               parameter="Personnel Expense Ratio (PER), %"
//               formula="Personnel expense to Average AUM"
//               value={formData.operational_efficiency.personnel_expense_ratio}
//               section="operational_efficiency"
//               field="personnel_expense_ratio"
//             />
//             <RatioRow
//               number="2"
//               parameter="Operating Expense Ratio (OER), %"
//               formula="Operating expense to Average AUM"
//               value={formData.operational_efficiency.per}
//               section="operational_efficiency"
//               field="per"
//             />
//             <RatioRow
//               number="3"
//               parameter="Cost of funds (CoF), % (Annualized)"
//               formula="All Cost incurred on the borrowings (like interest, processing fee, GST, bank charges etc.) / Average borrowings balance O/s"
//               value={formData.operational_efficiency.cost_of_funds}
//               section="operational_efficiency"
//               field="cost_of_funds"
//             />
//             <RatioRow
//               number="4"
//               parameter="Funding Cost Ratio (FCR), %"
//               formula="Interest and fee expense on funding liability to Average GLP"
//               value={formData.operational_efficiency.funding_cost_ratio}
//               section="operational_efficiency"
//               field="funding_cost_ratio"
//             />
//             <RatioRow
//               number="5"
//               parameter="Cost/Borrower, Rs"
//               formula="Operating expense to Average number of active clients"
//               value={formData.operational_efficiency.cost_per_borrower}
//               section="operational_efficiency"
//               field="cost_per_borrower"
//             />
//           </div>

//           {/* CAPITAL ADEQUACY & LIQUIDITY */}
//           <CategoryHeader title="Capital Adequacy & Liquidity" />
//           <div style={{
//             border: "1px solid #e5e7eb",
//             borderRadius: "6px",
//             overflow: "hidden",
//             marginBottom: "6px"
//           }}>
//             <RatioRow
//               number="6"
//               parameter="Liquidity Coverage Ratio (LCR), %"
//               formula="Stock of high quality liquid asset to Total net cash flows over the next 30 calendar days"
//               value={formData.capital_adequacy.liquidity_coverage_ratio}
//               section="capital_adequacy"
//               field="liquidity_coverage_ratio"
//             />
//             <RatioRow
//               number="7"
//               parameter="Capital Adequacy, %"
//               formula="Tier 1 CRAR % (as reported to RBI)"
//               value={formData.capital_adequacy.tier_1_crar}
//               section="capital_adequacy"
//               field="tier_1_crar"
//             />
//             <RatioRow
//               number="8"
//               parameter="Capital Adequacy, %"
//               formula="Tier 2 CRAR % (as reported to RBI)"
//               value={formData.capital_adequacy.tier_2_crar}
//               section="capital_adequacy"
//               field="tier_2_crar"
//             />
//           </div>

//           {/* PROFITABILITY */}
//           <CategoryHeader title="Profitability" />
//           <div style={{
//             border: "1px solid #e5e7eb",
//             borderRadius: "6px",
//             overflow: "hidden",
//             marginBottom: "6px"
//           }}>
//             <RatioRow
//               number="9"
//               parameter="Return on Asset (RoA), %"
//               formula="(Net operating income - Taxes) to Average Asset"
//               value={formData.profitability.return_on_asset}
//               section="profitability"
//               field="return_on_asset"
//             />
//             <RatioRow
//               number="10"
//               parameter="Return on Equity (RoE), %"
//               formula="(Net operating income - Taxes) to Average Equity"
//               value={formData.profitability.return_on_equity}
//               section="profitability"
//               field="return_on_equity"
//             />
//             <RatioRow
//               number="11"
//               parameter="Yield on portfolio, %"
//               formula="Total interest earned on all loans to Average GLP"
//               value={formData.profitability.yield_on_portfolio}
//               section="profitability"
//               field="yield_on_portfolio"
//             />
//             <RatioRow
//               number="12"
//               parameter="NIM %"
//               formula="(Interest income – Interest expenses) / Average GLP"
//               value={formData.profitability.net_interest_margin}
//               section="profitability"
//               field="net_interest_margin"
//             />
//             <RatioRow
//               number="13"
//               parameter="Operating Self-Sufficiency (OSS), %"
//               formula="Operating income (interest income + processing fee + any other income) to total expenses (Financial expense + Loan loss provision + Operating expense)"
//               value={formData.profitability.operating_self_sufficiency}
//               section="profitability"
//               field="operating_self_sufficiency"
//             />
//             <RatioRow
//               number="14"
//               parameter="Other income to total income, %"
//               formula="Total other income to Total income for the period"
//               value={formData.profitability.other_income_to_total_income}
//               section="profitability"
//               field="other_income_to_total_income"
//             />
//           </div>

//           {/* PORTFOLIO QUALITY */}
//           <CategoryHeader title="Portfolio Quality" />
//           <div style={{
//             border: "1px solid #e5e7eb",
//             borderRadius: "6px",
//             overflow: "hidden",
//             marginBottom: "6px"
//           }}>
//             <RatioRow
//               number="15"
//               parameter="Gross NPA, %"
//               formula="Gross NPA to GLP"
//               value={formData.portfolio_quality.gross_npa}
//               section="portfolio_quality"
//               field="gross_npa"
//             />
//             <RatioRow
//               number="16"
//               parameter="Net NPA, %"
//               formula="Net NPA to GLP"
//               value={formData.portfolio_quality.net_npa}
//               section="portfolio_quality"
//               field="net_npa"
//             />
//             <RatioRow
//               number="17"
//               parameter="Loan Loss Reserve Ratio (LLR), %"
//               formula="Loan loss reserve to GLP"
//               value={formData.portfolio_quality.loan_loss_reserve_ratio}
//               section="portfolio_quality"
//               field="loan_loss_reserve_ratio"
//             />
//             <RatioRow
//               number="18"
//               parameter="Write-off- Value, Rs"
//               formula="Amount of portfolio written off during the period"
//               value={formData.portfolio_quality.write_off_value}
//               section="portfolio_quality"
//               field="write_off_value"
//             />
//             <RatioRow
//               number="19"
//               parameter="Write-off ratio, %"
//               formula="Write-off to average GLP"
//               value={formData.portfolio_quality.write_off_ratio}
//               section="portfolio_quality"
//               field="write_off_ratio"
//             />
//           </div>

//           {/* PRICING OF LOANS */}
//           <CategoryHeader title="Pricing of Loans" />
//           <div style={{
//             border: "1px solid #e5e7eb",
//             borderRadius: "6px",
//             overflow: "hidden",
//             marginBottom: "6px"
//           }}>
//             <RatioRow
//               number="20"
//               parameter="Wt. Avg. lending rate"
//               formula="(Reducing RoI * Loan disbursed during the quarter Product 1 + Reducing ROI * Loan disbursed during the quarter Product 2 +…& So on)/Total loans disbursed during the quarter"
//               value={formData.pricing_of_loans.weighted_avg_lending_rate}
//               section="pricing_of_loans"
//               field="weighted_avg_lending_rate"
//             />
//             <RatioRow
//               number="21"
//               parameter="Wt. Avg. processing fee"
//               formula="Total processing fee charged on all loans /Total loan amount disbursed during the quarter"
//               value={formData.pricing_of_loans.weighted_avg_processing_fee}
//               section="pricing_of_loans"
//               field="weighted_avg_processing_fee"
//             />
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default FinancialRatio;

import React from "react";
import "./FinancialRatio.css";

function FinancialRatio({
  formData,
  handleChange,
  handleNestedChange,
  quarterList, 
  selectedMonthName,
  setSelectedMonthName,
  Quarter, 
  setQuarter,
  selectedDuring_FY,
  setselectedDuring_FY 
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

  // Category header component with teal accent
  const CategoryHeader = ({ title }) => (
    <div style={{
      padding: "12px 16px",
      background: "linear-gradient(135deg, #F0FDFC 0%, #E6F9F7 100%)",
      borderRadius: "8px",
      borderLeft: "4px solid #39B1AC",
      marginBottom: "12px",
      marginTop: "16px",
      boxShadow: "0 2px 6px rgba(57, 177, 172, 0.08)"
    }}>
      <h6 style={{
        fontSize: "12px",
        fontWeight: "700",
        color: "#0F766E",
        margin: 0,
        textTransform: "uppercase",
        letterSpacing: "0.3px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "left"
      }}>
        {title}
      </h6>
    </div>
  );

  // Ratio row component
  const RatioRow = ({ number, parameter, formula, value, section, field }) => (
    <div style={{
      display: "grid",
      gridTemplateColumns: "50px 1fr 1.2fr 180px",
      gap: "14px",
      padding: "14px",
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #F3F4F6",
      alignItems: "center"
    }}>
      <div style={{
        fontSize: "13px",
        fontWeight: "700",
        color: "#6B7280",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "left"
      }}>
        {number}
      </div>
      <div style={{
        fontSize: "13px",
        fontWeight: "600",
        color: "#1F2937",
        letterSpacing: "0.1px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "left"
      }}>
        {parameter}
      </div>
      <div style={{
        fontSize: "12px",
        fontWeight: "400",
        color: "#6B7280",
        lineHeight: "1.5",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "left"
      }}>
        {formula}
      </div>
      <div>
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
    </div>
  );

  return (
    <div style={{
      backgroundColor: "#F7F9FB",
      padding: "20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      minHeight: "100vh"
    }}>

      {/* FINANCIAL RATIOS */}
      <SectionHeader title="Financial Ratios" date={Quarter || ""} />
      <div style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        marginBottom: "6px",
        border: "1px solid #F3F4F6",
        borderTop: "none",
        overflow: "hidden"
      }}>
        {/* Note Section */}
        <div style={{
          padding: "14px 20px",
          background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
          borderBottom: "2px solid #93C5FD"
        }}>
          <p style={{
            fontSize: "12px",
            fontWeight: "600",
            color: "#1E40AF",
            margin: 0,
            lineHeight: "1.6",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            textAlign: "left"
          }}>
            <strong>Note:</strong> Gross NPA, Net NPA and LCR are as on date ratios. Please refer to the below formulae for calculation of average assets, average GLP and average AUM.
          </p>
        </div>

        {/* Table Header */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "50px 1fr 1.2fr 180px",
          gap: "14px",
          padding: "12px 14px",
          background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
          color: "#FFFFFF"
        }}>
          <div style={{
            fontSize: "11px",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            textAlign: "left"
          }}>S No</div>
          <div style={{
            fontSize: "11px",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            textAlign: "left"
          }}>Parameter</div>
          <div style={{
            fontSize: "11px",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            textAlign: "left"
          }}>Formula</div>
          <div style={{
            fontSize: "11px",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            textAlign: "left"
          }}>As on 31 December 2024</div>
        </div>

        <div style={{ padding: "16px" }}>
          {/* OPERATIONAL EFFICIENCY */}
          <CategoryHeader title="Operational Efficiency" />
          <div style={{
            border: "1px solid #E8E8E8",
            borderRadius: "8px",
            overflow: "hidden",
            marginBottom: "8px"
          }}>
            <RatioRow
              number="1"
              parameter="Personnel Expense Ratio (PER), %"
              formula="Personnel expense to Average AUM"
              value={formData.operational_efficiency.personnel_expense_ratio}
              section="operational_efficiency"
              field="personnel_expense_ratio"
            />
            <RatioRow
              number="2"
              parameter="Operating Expense Ratio (OER), %"
              formula="Operating expense to Average AUM"
              value={formData.operational_efficiency.per}
              section="operational_efficiency"
              field="per"
            />
            <RatioRow
              number="3"
              parameter="Cost of funds (CoF), % (Annualized)"
              formula="All Cost incurred on the borrowings (like interest, processing fee, GST, bank charges etc.) / Average borrowings balance O/s"
              value={formData.operational_efficiency.cost_of_funds}
              section="operational_efficiency"
              field="cost_of_funds"
            />
            <RatioRow
              number="4"
              parameter="Funding Cost Ratio (FCR), %"
              formula="Interest and fee expense on funding liability to Average GLP"
              value={formData.operational_efficiency.funding_cost_ratio}
              section="operational_efficiency"
              field="funding_cost_ratio"
            />
            <RatioRow
              number="5"
              parameter="Cost/Borrower, Rs"
              formula="Operating expense to Average number of active clients"
              value={formData.operational_efficiency.cost_per_borrower}
              section="operational_efficiency"
              field="cost_per_borrower"
            />
          </div>

          {/* CAPITAL ADEQUACY & LIQUIDITY */}
          <CategoryHeader title="Capital Adequacy & Liquidity" />
          <div style={{
            border: "1px solid #E8E8E8",
            borderRadius: "8px",
            overflow: "hidden",
            marginBottom: "8px"
          }}>
            <RatioRow
              number="6"
              parameter="Liquidity Coverage Ratio (LCR), %"
              formula="Stock of high quality liquid asset to Total net cash flows over the next 30 calendar days"
              value={formData.capital_adequacy.liquidity_coverage_ratio}
              section="capital_adequacy"
              field="liquidity_coverage_ratio"
            />
            <RatioRow
              number="7"
              parameter="Capital Adequacy, %"
              formula="Tier 1 CRAR % (as reported to RBI)"
              value={formData.capital_adequacy.tier_1_crar}
              section="capital_adequacy"
              field="tier_1_crar"
            />
            <RatioRow
              number="8"
              parameter="Capital Adequacy, %"
              formula="Tier 2 CRAR % (as reported to RBI)"
              value={formData.capital_adequacy.tier_2_crar}
              section="capital_adequacy"
              field="tier_2_crar"
            />
          </div>

          {/* PROFITABILITY */}
          <CategoryHeader title="Profitability" />
          <div style={{
            border: "1px solid #E8E8E8",
            borderRadius: "8px",
            overflow: "hidden",
            marginBottom: "8px"
          }}>
            <RatioRow
              number="9"
              parameter="Return on Asset (RoA), %"
              formula="(Net operating income - Taxes) to Average Asset"
              value={formData.profitability.return_on_asset}
              section="profitability"
              field="return_on_asset"
            />
            <RatioRow
              number="10"
              parameter="Return on Equity (RoE), %"
              formula="(Net operating income - Taxes) to Average Equity"
              value={formData.profitability.return_on_equity}
              section="profitability"
              field="return_on_equity"
            />
            <RatioRow
              number="11"
              parameter="Yield on portfolio, %"
              formula="Total interest earned on all loans to Average GLP"
              value={formData.profitability.yield_on_portfolio}
              section="profitability"
              field="yield_on_portfolio"
            />
            <RatioRow
              number="12"
              parameter="NIM %"
              formula="(Interest income – Interest expenses) / Average GLP"
              value={formData.profitability.net_interest_margin}
              section="profitability"
              field="net_interest_margin"
            />
            <RatioRow
              number="13"
              parameter="Operating Self-Sufficiency (OSS), %"
              formula="Operating income (interest income + processing fee + any other income) to total expenses (Financial expense + Loan loss provision + Operating expense)"
              value={formData.profitability.operating_self_sufficiency}
              section="profitability"
              field="operating_self_sufficiency"
            />
            <RatioRow
              number="14"
              parameter="Other income to total income, %"
              formula="Total other income to Total income for the period"
              value={formData.profitability.other_income_to_total_income}
              section="profitability"
              field="other_income_to_total_income"
            />
          </div>

          {/* PORTFOLIO QUALITY */}
          <CategoryHeader title="Portfolio Quality" />
          <div style={{
            border: "1px solid #E8E8E8",
            borderRadius: "8px",
            overflow: "hidden",
            marginBottom: "8px"
          }}>
            <RatioRow
              number="15"
              parameter="Gross NPA, %"
              formula="Gross NPA to GLP"
              value={formData.portfolio_quality.gross_npa}
              section="portfolio_quality"
              field="gross_npa"
            />
            <RatioRow
              number="16"
              parameter="Net NPA, %"
              formula="Net NPA to GLP"
              value={formData.portfolio_quality.net_npa}
              section="portfolio_quality"
              field="net_npa"
            />
            <RatioRow
              number="17"
              parameter="Loan Loss Reserve Ratio (LLR), %"
              formula="Loan loss reserve to GLP"
              value={formData.portfolio_quality.loan_loss_reserve_ratio}
              section="portfolio_quality"
              field="loan_loss_reserve_ratio"
            />
            <RatioRow
              number="18"
              parameter="Write-off- Value, Rs"
              formula="Amount of portfolio written off during the period"
              value={formData.portfolio_quality.write_off_value}
              section="portfolio_quality"
              field="write_off_value"
            />
            <RatioRow
              number="19"
              parameter="Write-off ratio, %"
              formula="Write-off to average GLP"
              value={formData.portfolio_quality.write_off_ratio}
              section="portfolio_quality"
              field="write_off_ratio"
            />
          </div>

          {/* PRICING OF LOANS */}
          <CategoryHeader title="Pricing of Loans" />
          <div style={{
            border: "1px solid #E8E8E8",
            borderRadius: "8px",
            overflow: "hidden",
            marginBottom: "8px"
          }}>
            <RatioRow
              number="20"
              parameter="Wt. Avg. lending rate"
              formula="(Reducing RoI * Loan disbursed during the quarter Product 1 + Reducing ROI * Loan disbursed during the quarter Product 2 +…& So on)/Total loans disbursed during the quarter"
              value={formData.pricing_of_loans.weighted_avg_lending_rate}
              section="pricing_of_loans"
              field="weighted_avg_lending_rate"
            />
            <RatioRow
              number="21"
              parameter="Wt. Avg. processing fee"
              formula="Total processing fee charged on all loans /Total loan amount disbursed during the quarter"
              value={formData.pricing_of_loans.weighted_avg_processing_fee}
              section="pricing_of_loans"
              field="weighted_avg_processing_fee"
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default FinancialRatio;