// import React from "react";
// import "./ALM.css";

// function ALM({ formData, handleChange ,handleNestedChange,
//     selectedMonthName        // ✅ YEH LINE MISS THI

// }) {
//   return (
//     <div
//       style={{
//         width: "80%",
//         backgroundColor: "#fff",
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
//               <th>A</th>
//               <th>Indicators - Liquidity position</th>
//               <th>Remarks/ guidance to fill</th>
//               <th colSpan={6}>
//                 Maturity buckets (months) In Rupees -         {selectedMonthName
//                   ? selectedMonthName
//                   : ""}
//               </th>
//             </tr>
//             <tr className="blue-row">
//               <th></th>
//               <th></th>
//               <th>0</th>
//               <th>{"<1"}</th>
//               <th>{"1 to <3"}</th>
//               <th>{"3 to <6"}</th>
//               <th>{"6 to <12"}</th>
//               <th>{">12"}</th>
//               <th>Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>1</td>
//               <td>
//                 <b>Assets</b>
//               </td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//             </tr>

//             <tr>
//               <td>1.1</td>
//               <td>Cash & bank balances</td>
//               <td>
//                 Include cash, other bank deposits (savings/current account, FDs
//                 etc.)
//               </td>
//               <td>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.cash_bank_balances["<1"] || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.cash_bank_balances.<1", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.cash_bank_balances["1_to_3"] || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.cash_bank_balances.1_to_3", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.cash_bank_balances["3_to_6"] || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.cash_bank_balances.3_to_6", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.cash_bank_balances["6_to_12"] || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.cash_bank_balances.6_to_12", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.cash_bank_balances.over_12 || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.cash_bank_balances.over_12", e.target.value)
//                   }
//                 />
//               </td>
//               <td>0.0</td>
//             </tr>

//             <tr>
//               <td>1.2</td>
//               <td>Cash collateral</td>
//               <td>
//                 Security deposits against loans - would have maturity similar to
//                 that of external loans
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.cash_collateral["<1"] || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.cash_collateral.<1", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.cash_collateral["1_to_3"] || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.cash_collateral.1_to_3", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.cash_collateral["3_to_6"] || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.cash_collateral.3_to_6", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.cash_collateral["6_to_12"] || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.cash_collateral.6_to_12", e.target.value)
//                   }
//                 />
//               </td>
             
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.cash_collateral.over_12 || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.cash_collateral.over_12", e.target.value)
//                   }
//                 />
//               </td>
//               <td>0.0</td>
//             </tr>

//             <tr>
//               <td>1.3</td>
//               <td>Investments</td>
//               <td>In equity, mutual funds etc.</td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.investments["<1"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.investments.<1", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.investments["1_to_3"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.investments.1_to_3", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.investments["3_to_6"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.investments.3_to_6", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.investments["6_to_12"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.investments.6_to_12", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.investments.over_12  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.investments.over_12", e.target.value)
//                   }
//                 />
//               </td>
//               <td>0.0</td>
//             </tr>

//             <tr>
//               <td>1.4</td>
//               <td>On-balance sheet loan portfolio</td>
//               <td>
//                 Principal amount of loans to clients maturing in various buckets
//               </td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.on_balance_sheet_loan_portfolio["<1"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.on_balance_sheet_loan_portfolio.<1", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.on_balance_sheet_loan_portfolio["1_to_3"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.on_balance_sheet_loan_portfolio.1_to_3", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.on_balance_sheet_loan_portfolio["3_to_6"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.on_balance_sheet_loan_portfolio.3_to_6", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.on_balance_sheet_loan_portfolio["6_to_12"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.on_balance_sheet_loan_portfolio.6_to_12", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.on_balance_sheet_loan_portfolio.over_12  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.on_balance_sheet_loan_portfolio.over_12", e.target.value)
//                   }
//                 />
//               </td>
//               <td>0.0</td>
//             </tr>

//             <tr>
//               <td>1.5</td>
//               <td>Interest on loan portfolio</td>
//               <td>
//                 Interest amount of loans to clients maturing in various buckets
//               </td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.interest_on_loan_portfolio["<1"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.interest_on_loan_portfolio.<1", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.interest_on_loan_portfolio["1_to_3"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.interest_on_loan_portfolio.1_to_3", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.interest_on_loan_portfolio["3_to_6"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.interest_on_loan_portfolio.3_to_6", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.interest_on_loan_portfolio["6_to_12"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.interest_on_loan_portfolio.6_to_12", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.interest_on_loan_portfolio.over_12  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.interest_on_loan_portfolio.over_12", e.target.value)
//                   }
//                 />
//               </td>
//               <td>0.0</td>
//             </tr>

//             <tr>
//               <td>1.6</td>
//               <td>Fixed assets</td>
//               <td>
//                 Total fixed assets of the MFI - would fall under the{" >"}12
//                 month category
//               </td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.fixed_assets["<1"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.fixed_assets.<1", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.fixed_assets["1_to_3"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.fixed_assets.1_to_3", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.fixed_assets["3_to_6"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.fixed_assets.3_to_6", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.fixed_assets["6_to_12"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.fixed_assets.6_to_12", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.fixed_assets.over_12  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.fixed_assets.over_12", e.target.value)
//                   }
//                 />
//               </td>
//               <td>0.0</td>
//             </tr>

//             <tr>
//               <td>1.7</td>
//               <td>Other assets</td>
//               <td>Includes other accounts receivable</td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.other_assets["<1"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.other_assets.<1", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.other_assets["1_to_3"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.other_assets.1_to_3", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.other_assets["3_to_6"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.other_assets.3_to_6", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.other_assets["6_to_12"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.other_assets.6_to_12", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.assets.other_assets.over_12  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("assets.other_assets.over_12", e.target.value)
//                   }
//                 />
//               </td>
//               <td>0.0</td>
//             </tr>

//             <tr className="pink-row">
//               <td></td>
//               <td>
//                 <b>Total assets</b>
//               </td>
//               <td></td>
//               <td>0.0</td>
//               <td>0.0</td>
//               <td>0.0</td>
//               <td>0.0</td>
//               <td>0.0</td>
//               <td>0.0</td>
//             </tr>

//             <tr className="pink-row">
//               <td>2</td>
//               <td>
//                 <b>Liabilities</b>
//               </td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//             </tr>

//             <tr>
//               <td>2.1</td>
//               <td>Loan repayable</td>
//               <td>Principal amount of loans repayable to lenders</td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.liabilities.loan_repayable["<1"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("liabilities.loan_repayable.<1", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.liabilities.loan_repayable["1_to_3"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("liabilities.loan_repayable.1_to_3", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.liabilities.loan_repayable["3_to_6"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("liabilities.loan_repayable.3_to_6", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.liabilities.loan_repayable["6_to_12"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("liabilities.loan_repayable.6_to_12", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.liabilities.loan_repayable.over_12  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("liabilities.loan_repayable.over_12", e.target.value)
//                   }
//                 />
//               </td>
//               <td>0.0</td>
//             </tr>

//             <tr>
//               <td>2.2</td>
//               <td>Interest payable</td>
//               <td>Interest payable on loans from lenders</td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.liabilities.interest_payable["<1"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("liabilities.interest_payable.<1", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.liabilities.interest_payable["1_to_3"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("liabilities.interest_payable.1_to_3", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.liabilities.interest_payable["3_to_6"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("liabilities.interest_payable.3_to_6", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.liabilities.interest_payable["6_to_12"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("liabilities.interest_payable.6_to_12", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.liabilities.interest_payable.over_12  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("liabilities.interest_payable.over_12", e.target.value)
//                   }
//                 />
//               </td>
//               <td>0.0</td>
//             </tr>

//             <tr>
//               <td>2.3</td>
//               <td>Operational expenses payable</td>
//               <td>
//                 Staff salaries, rent, travel, communication and other fixed
//                 expenses payable
//               </td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.liabilities.operational_expenses_payable["<1"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("liabilities.operational_expenses_payable.<1", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.liabilities.operational_expenses_payable["1_to_3"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("liabilities.operational_expenses_payable.1_to_3", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.liabilities.operational_expenses_payable["3_to_6"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("liabilities.operational_expenses_payable.3_to_6", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.liabilities.operational_expenses_payable["6_to_12"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("liabilities.operational_expenses_payable.6_to_12", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.liabilities.operational_expenses_payable.over_12  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("liabilities.operational_expenses_payable.over_12", e.target.value)
//                   }
//                 />
//               </td>
//               <td>0.0</td>
//             </tr>

//             <tr>
//               <td>2.4</td>
//               <td>Other liabilities</td>
//               <td>Includes other accounts payable</td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.liabilities.other_liabilities["<1"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("liabilities.other_liabilities.<1", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.liabilities.other_liabilities["1_to_3"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("liabilities.other_liabilities.1_to_3", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.liabilities.other_liabilities["3_to_6"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("liabilities.other_liabilities.3_to_6", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.liabilities.other_liabilities["6_to_12"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("liabilities.other_liabilities.6_to_12", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.liabilities.other_liabilities.over_12  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("liabilities.other_liabilities.over_12", e.target.value)
//                   }
//                 />
//               </td>
//               <td>0.0</td>
//             </tr>

//             <tr className="pink-row">
//               <td></td>
//               <td>
//                 <b>Total liabilities</b>
//               </td>
//               <td></td>
//               <td>0.0</td>
//               <td>0.0</td>
//               <td>0.0</td>
//               <td>0.0</td>
//               <td>0.0</td>
//               <td>0.0</td>
//             </tr>

//             <tr>
//               <td>3</td>
//               <td>
//                 <b>Total equity</b>
//               </td>
//               <td>
//                 Shareholder's equity + accumulated surplus - would fall under
//                 {" >"}12 month category
//               </td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.total_equity["<1"] || ""}
//                   onChange={(e) =>
//                     handleChange("total_equity", "<1", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.total_equity["1_to_3"] || ""}
//                   onChange={(e) =>
//                     handleChange("total_equity", "1_to_3", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.total_equity["3_to_6"] || ""}
//                   onChange={(e) =>
//                     handleChange("total_equity", "3_to_6", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.total_equity["6_to_12"] || ""}
//                   onChange={(e) =>
//                     handleChange("total_equity", "6_to_12", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.total_equity["over_12"] || ""}
//                   onChange={(e) =>
//                     handleChange("total_equity", "over_12", e.target.value)
//                   }
//                 />
//               </td>
//               <td>0.0</td>
//             </tr>

//             <tr className="pink-row">
//               <td>4</td>
//               <td>
//                 <b>Total liabilities & equity</b> 
//               </td>
//               {/* implement logic */}
//               <td></td>
//               <td>0.0</td>
//               <td>0.0</td>
//               <td>0.0</td>
//               <td>0.0</td>
//               <td>0.0</td>
//               <td>0.0</td>
//             </tr>

//             <tr className="pink-row">
//               <td>5</td>
//               <td>
//                 <b>Asset – (Total Liability + Equity) Gap</b>
//               </td>
//                {/* implement logic */}
//               <td></td>
//               <td>0.0</td>
//               <td>0.0</td>
//               <td>0.0</td>
//               <td>0.0</td>
//               <td>0.0</td>
//               <td>0.0</td>
//             </tr>

//             {/* B section */}
//             <tr className="blue-row">
//               <td>B</td>
//               <td>
//                 <b>Funding requirements</b>
//               </td>
//               <td></td>
//               <td>{"<1"}</td>
//               <td>{"1 to <3"}</td>
//               <td>{"3 to <6"}</td>
//               <td>{"6 to <12"}</td>
//               <td>{">12"}</td>
//               <td>Total</td>
//             </tr>

//             <tr>
//               <td></td>
//               <td>Loan disbursements</td>
//               <td>
//                 Disbursement targets as per the MFI's business plan, in each
//                 bucket
//               </td>
//               <td>
//               <input
//                   type="text"
//                   class="form-control"
//                   value={formData.funding_requirements.loan_disbursements["<1"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("funding_requirements.loan_disbursements.<1", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.funding_requirements.loan_disbursements["1_to_3"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("funding_requirements.loan_disbursements.1_to_3", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.funding_requirements.loan_disbursements["3_to_6"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("funding_requirements.loan_disbursements.3_to_6", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.funding_requirements.loan_disbursements["6_to_12"]  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("funding_requirements.loan_disbursements.6_to_12", e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                <input
//                   type="text"
//                   class="form-control"
//                   value={formData.funding_requirements.loan_disbursements.over_12  || ""}
//                   onChange={(e) =>
//                     handleNestedChange("funding_requirements.loan_disbursements.over_12", e.target.value)
//                   }
//                 />
//               </td>
//               <td>0.0</td>
//             </tr>
//           </tbody>
//         </table>
//       </form>
//     </div>
//   );
// }

// export default ALM;

// // import React from "react";

// // const ALM = () => {
// //   return (
// //     <div
// //       style={{
// //         width: "80%",
// //         backgroundColor: "#fff",
// //         padding: "60px",
// //       }}
// //     >
// //       <form>
// //         <div>
// //           <b style={{ float: "left" }}> 1:Aseets</b>
// //           <br />
// //           {/* sub heading */}
// //           <b style={{ float: "left" }}>{/* (total) : 0 */}</b>
// //           <br />
// //           <div class="mb-3">
// //             <label
// //               for="formGroupExampleInput"
// //               class="form-label"
// //               style={{ float: "left" }}
// //             >
// //               1:1Cash & bank balances
// //             </label>
// //             <input type="text" class="form-control" />
// //           </div>

// //           <div class="mb-3">
// //             <label
// //               for="formGroupExampleInput"
// //               class="form-label"
// //               style={{ float: "left" }}
// //             >
// //               1:2 Cash collateral
// //             </label>
// //             <input type="text" class="form-control" />
// //           </div>

// //           <div class="mb-3">
// //             <label
// //               for="formGroupExampleInput"
// //               class="form-label"
// //               style={{ float: "left" }}
// //             >
// //               1:3 Investments
// //             </label>
// //             <input type="text" class="form-control" />
// //           </div>

// //           <div class="mb-3">
// //             <label
// //               for="formGroupExampleInput"
// //               class="form-label"
// //               style={{ float: "left" }}
// //             >
// //               1:4 On-balance sheet loan portfolio
// //             </label>
// //             <input type="text" class="form-control" />
// //           </div>

// //           <div class="mb-3">
// //             <label
// //               for="formGroupExampleInput"
// //               class="form-label"
// //               style={{ float: "left" }}
// //             >
// //               1:5 Interest on loan portfolio
// //             </label>
// //             <input type="text" class="form-control" />
// //           </div>

// //           <div class="mb-3">
// //             <label
// //               for="formGroupExampleInput"
// //               class="form-label"
// //               style={{ float: "left" }}
// //             >
// //               1:6 Fixed assets
// //             </label>
// //             <input type="text" class="form-control" />
// //           </div>

// //           <div class="mb-3">
// //             <label
// //               for="formGroupExampleInput"
// //               class="form-label"
// //               style={{ float: "left" }}
// //             >
// //               1:7 Other assets
// //             </label>
// //             <input type="text" class="form-control" />
// //           </div>

// //           {/* sub heading */}
// //           <b style={{ float: "left" }}> Total Assets : 0</b>
// //           <br />
// //           <br></br>
// //           <b style={{ float: "left" }}> 2:Liabilities</b>
// //           <br />
// //           {/* sub heading */}
// //           <b style={{ float: "left" }}>{/* (total) : 0 */}</b>
// //           <br />

// //           <div class="mb-3">
// //             <label
// //               for="formGroupExampleInput"
// //               class="form-label"
// //               style={{ float: "left", marginTop: "10px" }}
// //             >
// //               2:1Loan repayable
// //             </label>
// //             <input type="text" class="form-control" />
// //           </div>

// //           <div class="mb-3">
// //             <label
// //               for="formGroupExampleInput"
// //               class="form-label"
// //               style={{ float: "left", marginTop: "10px" }}
// //             >
// //               2:2 Interest payable
// //             </label>
// //             <input type="text" class="form-control" />
// //           </div>

// //           <div class="mb-3">
// //             <label
// //               for="formGroupExampleInput"
// //               class="form-label"
// //               style={{ float: "left", marginTop: "10px" }}
// //             >
// //               2:3 Operational expenses payable
// //             </label>
// //             <input type="text" class="form-control" />
// //           </div>

// //           <div class="mb-3">
// //             <label
// //               for="formGroupExampleInput"
// //               class="form-label"
// //               style={{ float: "left", marginTop: "10px" }}
// //             >
// //               2:3 Other liabilities
// //             </label>
// //             <input type="text" class="form-control" />
// //           </div>

// //           <b style={{ float: "left" }}> Total liabilities: 0</b>
// //           <br />

// //           <div class="mb-3">
// //             <label
// //               for="formGroupExampleInput"
// //               class="form-label"
// //               style={{ float: "left", marginTop: "10px" }}
// //             >
// //               3 Total equity
// //             </label>
// //             <input type="text" class="form-control" />
// //           </div>
// //           <b style={{float: "left" }}>4.Total liabilities & equity: 0</b>
// //           <br></br>

// //           <br></br>
// //           <b style={{ float: "left" }}>
// //             5.Asset – (Total Liability + Equity) Gap:0
// //           </b>

// //           <br></br>
// //           <b style={{ float: "left" }}> Funding requirements</b>
// //           <br></br>
// //           <br></br>
// //           <div class="mb-3">
// //             <label
// //               for="formGroupExampleInput"
// //               class="form-label"
// //               style={{ float: "left", marginTop: "10px" }}
// //             >
// //               3 Loan disbursements
// //             </label>
// //             <input type="text" class="form-control" />
// //           </div>
// //           {/* submit button */}
// //           <div class="mb-3">
// //             <button
// //               type="submit"
// //               class="btn btn-primary"
// //               style={{ marginTop: "10px" }}
// //             >
// //               Submit
// //             </button>
// //           </div>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };
// // export default ALM;
import React from "react";
// import "./HR.css";

// function ALM({ 
//   formData, 
//   handleChange, 
//   handleNestedChange,
//   selectedMonthName
// }) {
//   // Helper function to safely access nested values
//   const getNestedValue = (obj, ...keys) => {
//     return keys.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
//   };

//   // Section header component matching HR
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
//   const CalculatedField = ({ value }) => (
//     <div style={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "36px",
//       fontSize: "14px",
//       fontWeight: "700",
//       color: "#1e40af",
//       backgroundColor: "#f0f9ff",
//       borderRadius: "6px",
//       padding: "0 12px"
//     }}>
//       {value || 0}
//     </div>
//   );

//   // Calculate totals for assets
//   const calculateAssetTotals = () => {
//     const assetTypes = [
//       'cash_bank_balances',
//       'cash_collateral',
//       'investments',
//       'on_balance_sheet_loan_portfolio',
//       'interest_on_loan_portfolio',
//       'fixed_assets',
//       'other_assets'
//     ];
    
//     const buckets = ['<1', '1_to_3', '3_to_6', '6_to_12', 'over_12'];
//     const totals = {};
    
//     buckets.forEach(bucket => {
//       totals[bucket] = 0;
//       assetTypes.forEach(type => {
//         const data = getNestedValue(formData, 'assets', type, bucket);
//         const value = parseFloat(data || 0);
//         if (!isNaN(value)) {
//           totals[bucket] += value;
//         }
//       });
//     });
    
//     // Calculate total column
//     totals.total = buckets.reduce((sum, bucket) => sum + totals[bucket], 0);
    
//     return totals;
//   };

//   // Calculate totals for liabilities
//   const calculateLiabilityTotals = () => {
//     const liabilityTypes = [
//       'loan_repayable',
//       'interest_payable',
//       'operational_expenses_payable',
//       'other_liabilities'
//     ];
    
//     const buckets = ['<1', '1_to_3', '3_to_6', '6_to_12', 'over_12'];
//     const totals = {};
    
//     buckets.forEach(bucket => {
//       totals[bucket] = 0;
//       liabilityTypes.forEach(type => {
//         const data = getNestedValue(formData, 'liabilities', type, bucket);
//         const value = parseFloat(data || 0);
//         if (!isNaN(value)) {
//           totals[bucket] += value;
//         }
//       });
//     });
    
//     // Calculate total column
//     totals.total = buckets.reduce((sum, bucket) => sum + totals[bucket], 0);
    
//     return totals;
//   };

//   // Calculate totals for total equity
//   const calculateEquityTotals = () => {
//     const buckets = ['<1', '1_to_3', '3_to_6', '6_to_12', 'over_12'];
//     const totals = {};
    
//     buckets.forEach(bucket => {
//       const data = getNestedValue(formData, 'total_equity', bucket);
//       totals[bucket] = parseFloat(data || 0);
//     });
    
//     // Calculate total column
//     totals.total = buckets.reduce((sum, bucket) => sum + totals[bucket], 0);
    
//     return totals;
//   };

//   // Calculate totals for loan disbursements
//   const calculateDisbursementTotals = () => {
//     const buckets = ['<1', '1_to_3', '3_to_6', '6_to_12', 'over_12'];
//     const totals = {};
    
//     buckets.forEach(bucket => {
//       const data = getNestedValue(formData, 'funding_requirements', 'loan_disbursements', bucket);
//       totals[bucket] = parseFloat(data || 0);
//     });
    
//     // Calculate total column
//     totals.total = buckets.reduce((sum, bucket) => sum + totals[bucket], 0);
    
//     return totals;
//   };

//   // Calculate totals for Total Liabilities & Equity
//   const calculateTotalLiabilitiesEquity = () => {
//     const liabilityTotals = calculateLiabilityTotals();
//     const equityTotals = calculateEquityTotals();
//     const buckets = ['<1', '1_to_3', '3_to_6', '6_to_12', 'over_12'];
//     const totals = {};
    
//     buckets.forEach(bucket => {
//       totals[bucket] = (liabilityTotals[bucket] || 0) + (equityTotals[bucket] || 0);
//     });
    
//     totals.total = (liabilityTotals.total || 0) + (equityTotals.total || 0);
    
//     return totals;
//   };

//   // Calculate Asset - (Total Liability + Equity) Gap
//   const calculateAssetLiabilityGap = () => {
//     const assetTotals = calculateAssetTotals();
//     const totalLiabilitiesEquity = calculateTotalLiabilitiesEquity();
//     const buckets = ['<1', '1_to_3', '3_to_6', '6_to_12', 'over_12'];
//     const gaps = {};
    
//     buckets.forEach(bucket => {
//       gaps[bucket] = (assetTotals[bucket] || 0) - (totalLiabilitiesEquity[bucket] || 0);
//     });
    
//     gaps.total = (assetTotals.total || 0) - (totalLiabilitiesEquity.total || 0);
    
//     return gaps;
//   };

//   const assetTotals = calculateAssetTotals();
//   const liabilityTotals = calculateLiabilityTotals();
//   const equityTotals = calculateEquityTotals();
//   const totalLiabilitiesEquity = calculateTotalLiabilitiesEquity();
//   const assetLiabilityGap = calculateAssetLiabilityGap();
//   const disbursementTotals = calculateDisbursementTotals();

//   return (
//     <div style={{
//       backgroundColor: "#f8f9fa",
//       padding: "20px",
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     }}>

//       {/* LIQUIDITY POSITION */}
//       <SectionHeader title="Indicators - Liquidity position" date={selectedMonthName} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "24px",
//         borderRadius: "0 0 10px 10px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//         marginBottom: "24px"
//       }}>
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
//                   width: "5%"
//                 }}>A</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px",
//                   width: "25%"
//                 }}>Indicators - Liquidity position</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px",
//                   width: "30%"
//                 }}>Remarks/ guidance to fill</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>{"<1 month"}</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>{"1 to <3 months"}</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>{"3 to <6 months"}</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>{"6 to <12 months"}</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>{">12 months"}</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* ASSETS HEADER */}
//               <tr style={{
//                 backgroundColor: "#f0f9ff",
//                 borderBottom: "1px solid #e5e7eb"
//               }}>
//                 <td style={{
//                   padding: "14px 16px",
//                   fontSize: "13px",
//                   fontWeight: "800",
//                   color: "#1e40af",
//                   textAlign: "center"
//                 }}>1</td>
//                 <td style={{
//                   padding: "14px 16px",
//                   fontSize: "13px",
//                   fontWeight: "800",
//                   color: "#1e40af"
//                 }}>
//                   <b>Assets</b>
//                 </td>
//                 <td style={{
//                   padding: "14px 16px",
//                   fontSize: "13px",
//                   fontWeight: "500",
//                   color: "#6b7280"
//                 }}></td>
//                 <td style={{ padding: "14px 16px" }}></td>
//                 <td style={{ padding: "14px 16px" }}></td>
//                 <td style={{ padding: "14px 16px" }}></td>
//                 <td style={{ padding: "14px 16px" }}></td>
//                 <td style={{ padding: "14px 16px" }}></td>
//                 <td style={{ padding: "14px 16px" }}></td>
//               </tr>

//               {/* Cash & bank balances */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#ffffff"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>1.1</td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Cash & bank balances</td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "12px",
//                   fontWeight: "500",
//                   color: "#6b7280"
//                 }}>Include cash, other bank deposits (savings/current account, FDs etc.)</td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'cash_bank_balances', '<1') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.cash_bank_balances.<1", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'cash_bank_balances', '1_to_3') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.cash_bank_balances.1_to_3", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'cash_bank_balances', '3_to_6') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.cash_bank_balances.3_to_6", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'cash_bank_balances', '6_to_12') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.cash_bank_balances.6_to_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'cash_bank_balances', 'over_12') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.cash_bank_balances.over_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* Cash collateral */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#f9fafb"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>1.2</td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Cash collateral</td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "12px",
//                   fontWeight: "500",
//                   color: "#6b7280"
//                 }}>Security deposits against loans - would have maturity similar to that of external loans</td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'cash_collateral', '<1') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.cash_collateral.<1", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'cash_collateral', '1_to_3') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.cash_collateral.1_to_3", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'cash_collateral', '3_to_6') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.cash_collateral.3_to_6", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'cash_collateral', '6_to_12') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.cash_collateral.6_to_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'cash_collateral', 'over_12') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.cash_collateral.over_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* Investments */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#ffffff"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>1.3</td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Investments</td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "12px",
//                   fontWeight: "500",
//                   color: "#6b7280"
//                 }}>In equity, mutual funds etc.</td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'investments', '<1') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.investments.<1", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'investments', '1_to_3') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.investments.1_to_3", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'investments', '3_to_6') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.investments.3_to_6", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'investments', '6_to_12') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.investments.6_to_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'investments', 'over_12') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.investments.over_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* On-balance sheet loan portfolio */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#f9fafb"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>1.4</td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>On-balance sheet loan portfolio</td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "12px",
//                   fontWeight: "500",
//                   color: "#6b7280"
//                 }}>Principal amount of loans to clients maturing in various buckets</td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'on_balance_sheet_loan_portfolio', '<1') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.on_balance_sheet_loan_portfolio.<1", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'on_balance_sheet_loan_portfolio', '1_to_3') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.on_balance_sheet_loan_portfolio.1_to_3", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'on_balance_sheet_loan_portfolio', '3_to_6') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.on_balance_sheet_loan_portfolio.3_to_6", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'on_balance_sheet_loan_portfolio', '6_to_12') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.on_balance_sheet_loan_portfolio.6_to_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'on_balance_sheet_loan_portfolio', 'over_12') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.on_balance_sheet_loan_portfolio.over_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* Interest on loan portfolio */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#ffffff"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>1.5</td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Interest on loan portfolio</td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "12px",
//                   fontWeight: "500",
//                   color: "#6b7280"
//                 }}>Interest amount of loans to clients maturing in various buckets</td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'interest_on_loan_portfolio', '<1') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.interest_on_loan_portfolio.<1", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'interest_on_loan_portfolio', '1_to_3') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.interest_on_loan_portfolio.1_to_3", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'interest_on_loan_portfolio', '3_to_6') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.interest_on_loan_portfolio.3_to_6", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'interest_on_loan_portfolio', '6_to_12') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.interest_on_loan_portfolio.6_to_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'interest_on_loan_portfolio', 'over_12') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.interest_on_loan_portfolio.over_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* Fixed assets */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#f9fafb"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>1.6</td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Fixed assets</td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "12px",
//                   fontWeight: "500",
//                   color: "#6b7280"
//                 }}>Total fixed assets of the MFI - would fall under the {">"}12 month category</td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'fixed_assets', '<1') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.fixed_assets.<1", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'fixed_assets', '1_to_3') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.fixed_assets.1_to_3", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'fixed_assets', '3_to_6') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.fixed_assets.3_to_6", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'fixed_assets', '6_to_12') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.fixed_assets.6_to_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'fixed_assets', 'over_12') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.fixed_assets.over_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* Other assets */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#ffffff"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>1.7</td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Other assets</td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "12px",
//                   fontWeight: "500",
//                   color: "#6b7280"
//                 }}>Includes other accounts receivable</td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'other_assets', '<1') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.other_assets.<1", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'other_assets', '1_to_3') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.other_assets.1_to_3", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'other_assets', '3_to_6') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.other_assets.3_to_6", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'other_assets', '6_to_12') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.other_assets.6_to_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'assets', 'other_assets', 'over_12') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("assets.other_assets.over_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* Total Assets */}
//               <tr style={{
//                 backgroundColor: "#fef3f2",
//                 borderTop: "2px solid #dc2626"
//               }}>
//                 <td style={{
//                   padding: "14px 16px",
//                   fontSize: "13px",
//                   fontWeight: "800",
//                   color: "#dc2626"
//                 }}></td>
//                 <td style={{
//                   padding: "14px 16px",
//                   fontSize: "13px",
//                   fontWeight: "800",
//                   color: "#dc2626"
//                 }}>
//                   <b>Total assets</b>
//                 </td>
//                 <td style={{
//                   padding: "14px 16px",
//                   fontSize: "12px",
//                   fontWeight: "500",
//                   color: "#6b7280"
//                 }}></td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={assetTotals['<1']} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={assetTotals['1_to_3']} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={assetTotals['3_to_6']} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={assetTotals['6_to_12']} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={assetTotals['over_12']} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={assetTotals.total} />
//                 </td>
//               </tr>

//               {/* LIABILITIES HEADER */}
//               <tr style={{
//                 backgroundColor: "#f0f9ff",
//                 borderBottom: "1px solid #e5e7eb"
//               }}>
//                 <td style={{
//                   padding: "14px 16px",
//                   fontSize: "13px",
//                   fontWeight: "800",
//                   color: "#1e40af",
//                   textAlign: "center"
//                 }}>2</td>
//                 <td style={{
//                   padding: "14px 16px",
//                   fontSize: "13px",
//                   fontWeight: "800",
//                   color: "#1e40af"
//                 }}>
//                   <b>Liabilities</b>
//                 </td>
//                 <td style={{
//                   padding: "14px 16px",
//                   fontSize: "13px",
//                   fontWeight: "500",
//                   color: "#6b7280"
//                 }}></td>
//                 <td style={{ padding: "14px 16px" }}></td>
//                 <td style={{ padding: "14px 16px" }}></td>
//                 <td style={{ padding: "14px 16px" }}></td>
//                 <td style={{ padding: "14px 16px" }}></td>
//                 <td style={{ padding: "14px 16px" }}></td>
//                 <td style={{ padding: "14px 16px" }}></td>
//               </tr>

//               {/* Loan repayable */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#ffffff"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>2.1</td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Loan repayable</td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "12px",
//                   fontWeight: "500",
//                   color: "#6b7280"
//                 }}>Principal amount of loans repayable to lenders</td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'liabilities', 'loan_repayable', '<1') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("liabilities.loan_repayable.<1", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'liabilities', 'loan_repayable', '1_to_3') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("liabilities.loan_repayable.1_to_3", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'liabilities', 'loan_repayable', '3_to_6') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("liabilities.loan_repayable.3_to_6", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'liabilities', 'loan_repayable', '6_to_12') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("liabilities.loan_repayable.6_to_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'liabilities', 'loan_repayable', 'over_12') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("liabilities.loan_repayable.over_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* Interest payable */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#f9fafb"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>2.2</td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Interest payable</td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "12px",
//                   fontWeight: "500",
//                   color: "#6b7280"
//                 }}>Interest payable on loans from lenders</td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'liabilities', 'interest_payable', '<1') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("liabilities.interest_payable.<1", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'liabilities', 'interest_payable', '1_to_3') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("liabilities.interest_payable.1_to_3", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'liabilities', 'interest_payable', '3_to_6') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("liabilities.interest_payable.3_to_6", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'liabilities', 'interest_payable', '6_to_12') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("liabilities.interest_payable.6_to_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'liabilities', 'interest_payable', 'over_12') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("liabilities.interest_payable.over_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* Operational expenses payable */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#ffffff"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>2.3</td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Operational expenses payable</td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "12px",
//                   fontWeight: "500",
//                   color: "#6b7280"
//                 }}>Staff salaries, rent, travel, communication and other fixed expenses payable</td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'liabilities', 'operational_expenses_payable', '<1') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("liabilities.operational_expenses_payable.<1", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'liabilities', 'operational_expenses_payable', '1_to_3') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("liabilities.operational_expenses_payable.1_to_3", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'liabilities', 'operational_expenses_payable', '3_to_6') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("liabilities.operational_expenses_payable.3_to_6", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'liabilities', 'operational_expenses_payable', '6_to_12') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("liabilities.operational_expenses_payable.6_to_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'liabilities', 'operational_expenses_payable', 'over_12') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("liabilities.operational_expenses_payable.over_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* Other liabilities */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#f9fafb"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>2.4</td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Other liabilities</td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "12px",
//                   fontWeight: "500",
//                   color: "#6b7280"
//                 }}>Includes other accounts payable</td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'liabilities', 'other_liabilities', '<1') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("liabilities.other_liabilities.<1", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'liabilities', 'other_liabilities', '1_to_3') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("liabilities.other_liabilities.1_to_3", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'liabilities', 'other_liabilities', '3_to_6') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("liabilities.other_liabilities.3_to_6", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'liabilities', 'other_liabilities', '6_to_12') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("liabilities.other_liabilities.6_to_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'liabilities', 'other_liabilities', 'over_12') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("liabilities.other_liabilities.over_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* Total Liabilities */}
//               <tr style={{
//                 backgroundColor: "#fef3f2",
//                 borderTop: "2px solid #dc2626"
//               }}>
//                 <td style={{
//                   padding: "14px 16px",
//                   fontSize: "13px",
//                   fontWeight: "800",
//                   color: "#dc2626"
//                 }}></td>
//                 <td style={{
//                   padding: "14px 16px",
//                   fontSize: "13px",
//                   fontWeight: "800",
//                   color: "#dc2626"
//                 }}>
//                   <b>Total liabilities</b>
//                 </td>
//                 <td style={{
//                   padding: "14px 16px",
//                   fontSize: "12px",
//                   fontWeight: "500",
//                   color: "#6b7280"
//                 }}></td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={liabilityTotals['<1']} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={liabilityTotals['1_to_3']} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={liabilityTotals['3_to_6']} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={liabilityTotals['6_to_12']} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={liabilityTotals['over_12']} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={liabilityTotals.total} />
//                 </td>
//               </tr>

//               {/* Total Equity */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#ffffff"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>3</td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "800",
//                   color: "#374151"
//                 }}>
//                   <b>Total equity</b>
//                 </td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "12px",
//                   fontWeight: "500",
//                   color: "#6b7280"
//                 }}>Shareholder's equity + accumulated surplus - would fall under {">"}12 month category</td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'total_equity', '<1') || ""}
//                     onChange={(e) =>
//                       handleChange("total_equity", "<1", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'total_equity', '1_to_3') || ""}
//                     onChange={(e) =>
//                       handleChange("total_equity", "1_to_3", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'total_equity', '3_to_6') || ""}
//                     onChange={(e) =>
//                       handleChange("total_equity", "3_to_6", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'total_equity', '6_to_12') || ""}
//                     onChange={(e) =>
//                       handleChange("total_equity", "6_to_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'total_equity', 'over_12') || ""}
//                     onChange={(e) =>
//                       handleChange("total_equity", "over_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={equityTotals.total} />
//                 </td>
//               </tr>

//               {/* Total liabilities & equity */}
//               <tr style={{
//                 backgroundColor: "#fef3f2",
//                 borderTop: "2px solid #dc2626"
//               }}>
//                 <td style={{
//                   padding: "14px 16px",
//                   fontSize: "13px",
//                   fontWeight: "800",
//                   color: "#dc2626"
//                 }}>4</td>
//                 <td style={{
//                   padding: "14px 16px",
//                   fontSize: "13px",
//                   fontWeight: "800",
//                   color: "#dc2626"
//                 }}>
//                   <b>Total liabilities & equity</b>
//                 </td>
//                 <td style={{
//                   padding: "14px 16px",
//                   fontSize: "12px",
//                   fontWeight: "500",
//                   color: "#6b7280"
//                 }}></td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={totalLiabilitiesEquity['<1']} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={totalLiabilitiesEquity['1_to_3']} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={totalLiabilitiesEquity['3_to_6']} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={totalLiabilitiesEquity['6_to_12']} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={totalLiabilitiesEquity['over_12']} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={totalLiabilitiesEquity.total} />
//                 </td>
//               </tr>

//               {/* Asset – (Total Liability + Equity) Gap */}
//               <tr style={{
//                 backgroundColor: "#fef3f2",
//                 borderTop: "2px solid #dc2626"
//               }}>
//                 <td style={{
//                   padding: "14px 16px",
//                   fontSize: "13px",
//                   fontWeight: "800",
//                   color: "#dc2626"
//                 }}>5</td>
//                 <td style={{
//                   padding: "14px 16px",
//                   fontSize: "13px",
//                   fontWeight: "800",
//                   color: "#dc2626"
//                 }}>
//                   <b>Asset – (Total Liability + Equity) Gap</b>
//                 </td>
//                 <td style={{
//                   padding: "14px 16px",
//                   fontSize: "12px",
//                   fontWeight: "500",
//                   color: "#6b7280"
//                 }}></td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={assetLiabilityGap['<1']} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={assetLiabilityGap['1_to_3']} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={assetLiabilityGap['3_to_6']} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={assetLiabilityGap['6_to_12']} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={assetLiabilityGap['over_12']} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={assetLiabilityGap.total} />
//                 </td>
//               </tr>

//               {/* FUNDING REQUIREMENTS HEADER */}
//               <tr style={{
//                 backgroundColor: "#f0f9ff",
//                 borderBottom: "1px solid #e5e7eb",
//                 borderTop: "2px solid #2B60AD"
//               }}>
//                 <td style={{
//                   padding: "14px 16px",
//                   fontSize: "13px",
//                   fontWeight: "800",
//                   color: "#1e40af",
//                   textAlign: "center"
//                 }}>B</td>
//                 <td style={{
//                   padding: "14px 16px",
//                   fontSize: "13px",
//                   fontWeight: "800",
//                   color: "#1e40af"
//                 }}>
//                   <b>Funding requirements</b>
//                 </td>
//                 <td style={{
//                   padding: "14px 16px",
//                   fontSize: "13px",
//                   fontWeight: "500",
//                   color: "#6b7280"
//                 }}></td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <div style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     height: "36px",
//                     fontSize: "12px",
//                     fontWeight: "700",
//                     color: "#2B60AD",
//                     backgroundColor: "#f0f9ff",
//                     borderRadius: "6px",
//                     padding: "0 12px"
//                   }}>
//                     {"<1 month"}
//                   </div>
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <div style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     height: "36px",
//                     fontSize: "12px",
//                     fontWeight: "700",
//                     color: "#2B60AD",
//                     backgroundColor: "#f0f9ff",
//                     borderRadius: "6px",
//                     padding: "0 12px"
//                   }}>
//                     {"1 to <3 months"}
//                   </div>
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <div style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     height: "36px",
//                     fontSize: "12px",
//                     fontWeight: "700",
//                     color: "#2B60AD",
//                     backgroundColor: "#f0f9ff",
//                     borderRadius: "6px",
//                     padding: "0 12px"
//                   }}>
//                     {"3 to <6 months"}
//                   </div>
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <div style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     height: "36px",
//                     fontSize: "12px",
//                     fontWeight: "700",
//                     color: "#2B60AD",
//                     backgroundColor: "#f0f9ff",
//                     borderRadius: "6px",
//                     padding: "0 12px"
//                   }}>
//                     {"6 to <12 months"}
//                   </div>
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <div style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     height: "36px",
//                     fontSize: "12px",
//                     fontWeight: "700",
//                     color: "#2B60AD",
//                     backgroundColor: "#f0f9ff",
//                     borderRadius: "6px",
//                     padding: "0 12px"
//                   }}>
//                     {">12 months"}
//                   </div>
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <div style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     height: "36px",
//                     fontSize: "12px",
//                     fontWeight: "700",
//                     color: "#2B60AD",
//                     backgroundColor: "#f0f9ff",
//                     borderRadius: "6px",
//                     padding: "0 12px"
//                   }}>
//                     Total
//                   </div>
//                 </td>
//               </tr>

//               {/* Loan disbursements */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#ffffff"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}></td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Loan disbursements</td>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "12px",
//                   fontWeight: "500",
//                   color: "#6b7280"
//                 }}>Disbursement targets as per the MFI's business plan, in each bucket</td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'funding_requirements', 'loan_disbursements', '<1') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("funding_requirements.loan_disbursements.<1", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'funding_requirements', 'loan_disbursements', '1_to_3') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("funding_requirements.loan_disbursements.1_to_3", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'funding_requirements', 'loan_disbursements', '3_to_6') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("funding_requirements.loan_disbursements.3_to_6", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'funding_requirements', 'loan_disbursements', '6_to_12') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("funding_requirements.loan_disbursements.6_to_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <input
//                     type="text"
//                     style={{
//                       width: "100%",
//                       height: "36px",
//                       padding: "0 10px",
//                       border: "1px solid #e5e7eb",
//                       borderRadius: "6px",
//                       fontSize: "13px",
//                       fontWeight: "500",
//                       color: "#111827",
//                       outline: "none",
//                       transition: "border 0.2s",
//                       backgroundColor: "#ffffff"
//                     }}
//                     value={getNestedValue(formData, 'funding_requirements', 'loan_disbursements', 'over_12') || ""}
//                     onChange={(e) =>
//                       handleNestedChange("funding_requirements.loan_disbursements.over_12", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={disbursementTotals.total} />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default ALM;

// import "./HR.css";

function ALM({ 
  formData, 
  handleChange, 
  handleNestedChange,
  selectedMonthName
}) {
  // Helper function to safely access nested values
  const getNestedValue = (obj, ...keys) => {
    return keys.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
  };

  // Section header component matching HR
  const SectionHeader = ({ title, date }) => (
    <div style={{
      background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
      padding: "14px 20px",
      borderRadius: "10px 10px 0 0",
      marginTop: "24px",
      marginBottom: "0",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h6 style={{
          color: "#ffffff",
          fontSize: "13px",
          fontWeight: "800",
          margin: 0,
          textTransform: "uppercase",
          letterSpacing: "1px"
        }}>
          {title}
        </h6>
        {date && (
          <span style={{
            color: "#ffffff",
            fontSize: "12px",
            fontWeight: "600",
            backgroundColor: "rgba(255,255,255,0.2)",
            padding: "5px 14px",
            borderRadius: "20px"
          }}>
            {date}
          </span>
        )}
      </div>
    </div>
  );

  // Calculated field component
  const CalculatedField = ({ value }) => (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "36px",
      fontSize: "14px",
      fontWeight: "700",
      color: "#1e40af",
      backgroundColor: "#f0f9ff",
      borderRadius: "6px",
      padding: "0 12px"
    }}>
      {value || 0}
    </div>
  );

  // Calculate totals for assets
  const calculateAssetTotals = () => {
    const assetTypes = [
      'cash_bank_balances',
      'cash_collateral',
      'investments',
      'on_balance_sheet_loan_portfolio',
      'interest_on_loan_portfolio',
      'fixed_assets',
      'other_assets'
    ];
    
    const buckets = ['<1', '1_to_3', '3_to_6', '6_to_12', 'over_12'];
    const totals = {};
    
    buckets.forEach(bucket => {
      totals[bucket] = 0;
      assetTypes.forEach(type => {
        const data = getNestedValue(formData, 'assets', type, bucket);
        const value = parseFloat(data || 0);
        if (!isNaN(value)) {
          totals[bucket] += value;
        }
      });
    });
    
    // Calculate total column
    totals.total = buckets.reduce((sum, bucket) => sum + totals[bucket], 0);
    
    return totals;
  };

  // Calculate totals for liabilities
  const calculateLiabilityTotals = () => {
    const liabilityTypes = [
      'loan_repayable',
      'interest_payable',
      'operational_expenses_payable',
      'other_liabilities'
    ];
    
    const buckets = ['<1', '1_to_3', '3_to_6', '6_to_12', 'over_12'];
    const totals = {};
    
    buckets.forEach(bucket => {
      totals[bucket] = 0;
      liabilityTypes.forEach(type => {
        const data = getNestedValue(formData, 'liabilities', type, bucket);
        const value = parseFloat(data || 0);
        if (!isNaN(value)) {
          totals[bucket] += value;
        }
      });
    });
    
    // Calculate total column
    totals.total = buckets.reduce((sum, bucket) => sum + totals[bucket], 0);
    
    return totals;
  };

  // Calculate totals for total equity
  const calculateEquityTotals = () => {
    const buckets = ['<1', '1_to_3', '3_to_6', '6_to_12', 'over_12'];
    const totals = {};
    
    buckets.forEach(bucket => {
      const data = getNestedValue(formData, 'total_equity', bucket);
      totals[bucket] = parseFloat(data || 0);
    });
    
    // Calculate total column
    totals.total = buckets.reduce((sum, bucket) => sum + totals[bucket], 0);
    
    return totals;
  };

  // Calculate totals for loan disbursements
  const calculateDisbursementTotals = () => {
    const buckets = ['<1', '1_to_3', '3_to_6', '6_to_12', 'over_12'];
    const totals = {};
    
    buckets.forEach(bucket => {
      const data = getNestedValue(formData, 'funding_requirements', 'loan_disbursements', bucket);
      totals[bucket] = parseFloat(data || 0);
    });
    
    // Calculate total column
    totals.total = buckets.reduce((sum, bucket) => sum + totals[bucket], 0);
    
    return totals;
  };

  // Calculate totals for Total Liabilities & Equity
  const calculateTotalLiabilitiesEquity = () => {
    const liabilityTotals = calculateLiabilityTotals();
    const equityTotals = calculateEquityTotals();
    const buckets = ['<1', '1_to_3', '3_to_6', '6_to_12', 'over_12'];
    const totals = {};
    
    buckets.forEach(bucket => {
      totals[bucket] = (liabilityTotals[bucket] || 0) + (equityTotals[bucket] || 0);
    });
    
    totals.total = (liabilityTotals.total || 0) + (equityTotals.total || 0);
    
    return totals;
  };

  // Calculate Asset - (Total Liability + Equity) Gap
  const calculateAssetLiabilityGap = () => {
    const assetTotals = calculateAssetTotals();
    const totalLiabilitiesEquity = calculateTotalLiabilitiesEquity();
    const buckets = ['<1', '1_to_3', '3_to_6', '6_to_12', 'over_12'];
    const gaps = {};
    
    buckets.forEach(bucket => {
      gaps[bucket] = (assetTotals[bucket] || 0) - (totalLiabilitiesEquity[bucket] || 0);
    });
    
    gaps.total = (assetTotals.total || 0) - (totalLiabilitiesEquity.total || 0);
    
    return gaps;
  };

  const assetTotals = calculateAssetTotals();
  const liabilityTotals = calculateLiabilityTotals();
  const equityTotals = calculateEquityTotals();
  const totalLiabilitiesEquity = calculateTotalLiabilitiesEquity();
  const assetLiabilityGap = calculateAssetLiabilityGap();
  const disbursementTotals = calculateDisbursementTotals();

  return (
    <div style={{
      backgroundColor: "#f8f9fa",
      padding: "20px",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>

      {/* LIQUIDITY POSITION */}
      <SectionHeader title="Indicators - Liquidity position" date={selectedMonthName} />
      <div style={{
        backgroundColor: "#ffffff",
        padding: "24px",
        borderRadius: "0 0 10px 10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        marginBottom: "24px"
      }}>
        <div style={{
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          overflow: "hidden"
        }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{
                background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
              }}>
                <th style={{
                  padding: "12px 8px",
                  textAlign: "center",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  width: "4%"
                }}>A</th>
                <th style={{
                  padding: "12px 10px",
                  textAlign: "left",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  width: "22%"
                }}>Indicators - Liquidity position</th>
                <th style={{
                  padding: "12px 10px",
                  textAlign: "left",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  width: "28%"
                }}>Remarks/ guidance to fill</th>
                <th style={{
                  padding: "12px 8px",
                  textAlign: "center",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>{"<1 month"}</th>
                <th style={{
                  padding: "12px 8px",
                  textAlign: "center",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>{"1 to <3 months"}</th>
                <th style={{
                  padding: "12px 8px",
                  textAlign: "center",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>{"3 to <6 months"}</th>
                <th style={{
                  padding: "12px 8px",
                  textAlign: "center",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>{"6 to <12 months"}</th>
                <th style={{
                  padding: "12px 8px",
                  textAlign: "center",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>{">12 months"}</th>
                <th style={{
                  padding: "12px 8px",
                  textAlign: "center",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* ASSETS HEADER */}
              <tr style={{
                backgroundColor: "#f0f9ff",
                borderBottom: "1px solid #e5e7eb"
              }}>
                <td style={{
                  padding: "12px 8px",
                  fontSize: "12px",
                  fontWeight: "800",
                  color: "#1e40af",
                  textAlign: "center"
                }}>1</td>
                <td style={{
                  padding: "12px 10px",
                  fontSize: "12px",
                  fontWeight: "800",
                  color: "#1e40af"
                }}>
                  <b>Assets</b>
                </td>
                <td style={{
                  padding: "12px 10px",
                  fontSize: "11px",
                  fontWeight: "500",
                  color: "#6b7280"
                }}></td>
                <td style={{ padding: "12px 8px" }}></td>
                <td style={{ padding: "12px 8px" }}></td>
                <td style={{ padding: "12px 8px" }}></td>
                <td style={{ padding: "12px 8px" }}></td>
                <td style={{ padding: "12px 8px" }}></td>
                <td style={{ padding: "12px 8px" }}></td>
              </tr>

              {/* Cash & bank balances */}
              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "10px 8px",
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#374151"
                }}>1.1</td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#374151"
                }}>Cash & bank balances</td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "11px",
                  fontWeight: "500",
                  color: "#6b7280",
                  lineHeight: "1.3"
                }}>Include cash, other bank deposits (savings/current account, FDs etc.)</td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'cash_bank_balances', '<1') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.cash_bank_balances.<1", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'cash_bank_balances', '1_to_3') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.cash_bank_balances.1_to_3", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'cash_bank_balances', '3_to_6') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.cash_bank_balances.3_to_6", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'cash_bank_balances', '6_to_12') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.cash_bank_balances.6_to_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'cash_bank_balances', 'over_12') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.cash_bank_balances.over_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* Cash collateral */}
              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#f9fafb"
              }}>
                <td style={{
                  padding: "10px 8px",
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#374151"
                }}>1.2</td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#374151"
                }}>Cash collateral</td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "11px",
                  fontWeight: "500",
                  color: "#6b7280",
                  lineHeight: "1.3"
                }}>Security deposits against loans - would have maturity similar to that of external loans</td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'cash_collateral', '<1') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.cash_collateral.<1", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'cash_collateral', '1_to_3') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.cash_collateral.1_to_3", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'cash_collateral', '3_to_6') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.cash_collateral.3_to_6", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'cash_collateral', '6_to_12') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.cash_collateral.6_to_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'cash_collateral', 'over_12') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.cash_collateral.over_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* Investments */}
              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "10px 8px",
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#374151"
                }}>1.3</td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#374151"
                }}>Investments</td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "11px",
                  fontWeight: "500",
                  color: "#6b7280",
                  lineHeight: "1.3"
                }}>In equity, mutual funds etc.</td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'investments', '<1') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.investments.<1", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'investments', '1_to_3') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.investments.1_to_3", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'investments', '3_to_6') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.investments.3_to_6", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'investments', '6_to_12') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.investments.6_to_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'investments', 'over_12') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.investments.over_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* On-balance sheet loan portfolio */}
              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#f9fafb"
              }}>
                <td style={{
                  padding: "10px 8px",
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#374151"
                }}>1.4</td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#374151"
                }}>On-balance sheet loan portfolio</td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "11px",
                  fontWeight: "500",
                  color: "#6b7280",
                  lineHeight: "1.3"
                }}>Principal amount of loans to clients maturing in various buckets</td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'on_balance_sheet_loan_portfolio', '<1') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.on_balance_sheet_loan_portfolio.<1", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'on_balance_sheet_loan_portfolio', '1_to_3') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.on_balance_sheet_loan_portfolio.1_to_3", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'on_balance_sheet_loan_portfolio', '3_to_6') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.on_balance_sheet_loan_portfolio.3_to_6", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'on_balance_sheet_loan_portfolio', '6_to_12') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.on_balance_sheet_loan_portfolio.6_to_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'on_balance_sheet_loan_portfolio', 'over_12') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.on_balance_sheet_loan_portfolio.over_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* Interest on loan portfolio */}
              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "10px 8px",
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#374151"
                }}>1.5</td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#374151"
                }}>Interest on loan portfolio</td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "11px",
                  fontWeight: "500",
                  color: "#6b7280",
                  lineHeight: "1.3"
                }}>Interest amount of loans to clients maturing in various buckets</td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'interest_on_loan_portfolio', '<1') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.interest_on_loan_portfolio.<1", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'interest_on_loan_portfolio', '1_to_3') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.interest_on_loan_portfolio.1_to_3", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'interest_on_loan_portfolio', '3_to_6') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.interest_on_loan_portfolio.3_to_6", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'interest_on_loan_portfolio', '6_to_12') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.interest_on_loan_portfolio.6_to_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'interest_on_loan_portfolio', 'over_12') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.interest_on_loan_portfolio.over_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* Fixed assets */}
              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#f9fafb"
              }}>
                <td style={{
                  padding: "10px 8px",
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#374151"
                }}>1.6</td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#374151"
                }}>Fixed assets</td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "11px",
                  fontWeight: "500",
                  color: "#6b7280",
                  lineHeight: "1.3"
                }}>Total fixed assets of the MFI - would fall under the {">"}12 month category</td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'fixed_assets', '<1') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.fixed_assets.<1", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'fixed_assets', '1_to_3') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.fixed_assets.1_to_3", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'fixed_assets', '3_to_6') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.fixed_assets.3_to_6", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'fixed_assets', '6_to_12') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.fixed_assets.6_to_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'fixed_assets', 'over_12') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.fixed_assets.over_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* Other assets */}
              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "10px 8px",
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#374151"
                }}>1.7</td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#374151"
                }}>Other assets</td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "11px",
                  fontWeight: "500",
                  color: "#6b7280",
                  lineHeight: "1.3"
                }}>Includes other accounts receivable</td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'other_assets', '<1') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.other_assets.<1", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'other_assets', '1_to_3') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.other_assets.1_to_3", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'other_assets', '3_to_6') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.other_assets.3_to_6", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'other_assets', '6_to_12') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.other_assets.6_to_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'assets', 'other_assets', 'over_12') || ""}
                    onChange={(e) =>
                      handleNestedChange("assets.other_assets.over_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* Total Assets */}
              <tr style={{
                backgroundColor: "#eff6ff",
                borderTop: "2px solid #2B60AD"
              }}>
                <td style={{
                  padding: "12px 8px",
                  fontSize: "12px",
                  fontWeight: "800",
                  color: "#1e40af"
                }}></td>
                <td style={{
                  padding: "12px 10px",
                  fontSize: "12px",
                  fontWeight: "800",
                  color: "#1e40af"
                }}>
                  <b>Total assets</b>
                </td>
                <td style={{
                  padding: "12px 10px",
                  fontSize: "11px",
                  fontWeight: "500",
                  color: "#6b7280"
                }}></td>
                <td style={{ padding: "12px 8px" }}>
                  <CalculatedField value={assetTotals['<1']} />
                </td>
                <td style={{ padding: "12px 8px" }}>
                  <CalculatedField value={assetTotals['1_to_3']} />
                </td>
                <td style={{ padding: "12px 8px" }}>
                  <CalculatedField value={assetTotals['3_to_6']} />
                </td>
                <td style={{ padding: "12px 8px" }}>
                  <CalculatedField value={assetTotals['6_to_12']} />
                </td>
                <td style={{ padding: "12px 8px" }}>
                  <CalculatedField value={assetTotals['over_12']} />
                </td>
                <td style={{ padding: "12px 8px" }}>
                  <CalculatedField value={assetTotals.total} />
                </td>
              </tr>

              {/* LIABILITIES HEADER */}
              <tr style={{
                backgroundColor: "#f0f9ff",
                borderBottom: "1px solid #e5e7eb"
              }}>
                <td style={{
                  padding: "12px 8px",
                  fontSize: "12px",
                  fontWeight: "800",
                  color: "#1e40af",
                  textAlign: "center"
                }}>2</td>
                <td style={{
                  padding: "12px 10px",
                  fontSize: "12px",
                  fontWeight: "800",
                  color: "#1e40af"
                }}>
                  <b>Liabilities</b>
                </td>
                <td style={{
                  padding: "12px 10px",
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#6b7280"
                }}></td>
                <td style={{ padding: "12px 8px" }}></td>
                <td style={{ padding: "12px 8px" }}></td>
                <td style={{ padding: "12px 8px" }}></td>
                <td style={{ padding: "12px 8px" }}></td>
                <td style={{ padding: "12px 8px" }}></td>
                <td style={{ padding: "12px 8px" }}></td>
              </tr>

              {/* Loan repayable */}
              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "10px 8px",
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#374151"
                }}>2.1</td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#374151"
                }}>Loan repayable</td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "11px",
                  fontWeight: "500",
                  color: "#6b7280",
                  lineHeight: "1.3"
                }}>Principal amount of loans repayable to lenders</td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'liabilities', 'loan_repayable', '<1') || ""}
                    onChange={(e) =>
                      handleNestedChange("liabilities.loan_repayable.<1", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'liabilities', 'loan_repayable', '1_to_3') || ""}
                    onChange={(e) =>
                      handleNestedChange("liabilities.loan_repayable.1_to_3", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'liabilities', 'loan_repayable', '3_to_6') || ""}
                    onChange={(e) =>
                      handleNestedChange("liabilities.loan_repayable.3_to_6", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'liabilities', 'loan_repayable', '6_to_12') || ""}
                    onChange={(e) =>
                      handleNestedChange("liabilities.loan_repayable.6_to_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'liabilities', 'loan_repayable', 'over_12') || ""}
                    onChange={(e) =>
                      handleNestedChange("liabilities.loan_repayable.over_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* Interest payable */}
              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#f9fafb"
              }}>
                <td style={{
                  padding: "10px 8px",
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#374151"
                }}>2.2</td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#374151"
                }}>Interest payable</td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "11px",
                  fontWeight: "500",
                  color: "#6b7280",
                  lineHeight: "1.3"
                }}>Interest payable on loans from lenders</td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'liabilities', 'interest_payable', '<1') || ""}
                    onChange={(e) =>
                      handleNestedChange("liabilities.interest_payable.<1", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'liabilities', 'interest_payable', '1_to_3') || ""}
                    onChange={(e) =>
                      handleNestedChange("liabilities.interest_payable.1_to_3", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'liabilities', 'interest_payable', '3_to_6') || ""}
                    onChange={(e) =>
                      handleNestedChange("liabilities.interest_payable.3_to_6", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'liabilities', 'interest_payable', '6_to_12') || ""}
                    onChange={(e) =>
                      handleNestedChange("liabilities.interest_payable.6_to_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'liabilities', 'interest_payable', 'over_12') || ""}
                    onChange={(e) =>
                      handleNestedChange("liabilities.interest_payable.over_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* Operational expenses payable */}
              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "10px 8px",
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#374151"
                }}>2.3</td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#374151"
                }}>Operational expenses payable</td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "11px",
                  fontWeight: "500",
                  color: "#6b7280",
                  lineHeight: "1.3"
                }}>Staff salaries, rent, travel, communication and other fixed expenses payable</td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'liabilities', 'operational_expenses_payable', '<1') || ""}
                    onChange={(e) =>
                      handleNestedChange("liabilities.operational_expenses_payable.<1", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'liabilities', 'operational_expenses_payable', '1_to_3') || ""}
                    onChange={(e) =>
                      handleNestedChange("liabilities.operational_expenses_payable.1_to_3", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'liabilities', 'operational_expenses_payable', '3_to_6') || ""}
                    onChange={(e) =>
                      handleNestedChange("liabilities.operational_expenses_payable.3_to_6", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'liabilities', 'operational_expenses_payable', '6_to_12') || ""}
                    onChange={(e) =>
                      handleNestedChange("liabilities.operational_expenses_payable.6_to_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'liabilities', 'operational_expenses_payable', 'over_12') || ""}
                    onChange={(e) =>
                      handleNestedChange("liabilities.operational_expenses_payable.over_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* Other liabilities */}
              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#f9fafb"
              }}>
                <td style={{
                  padding: "10px 8px",
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#374151"
                }}>2.4</td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#374151"
                }}>Other liabilities</td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "11px",
                  fontWeight: "500",
                  color: "#6b7280",
                  lineHeight: "1.3"
                }}>Includes other accounts payable</td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'liabilities', 'other_liabilities', '<1') || ""}
                    onChange={(e) =>
                      handleNestedChange("liabilities.other_liabilities.<1", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'liabilities', 'other_liabilities', '1_to_3') || ""}
                    onChange={(e) =>
                      handleNestedChange("liabilities.other_liabilities.1_to_3", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'liabilities', 'other_liabilities', '3_to_6') || ""}
                    onChange={(e) =>
                      handleNestedChange("liabilities.other_liabilities.3_to_6", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'liabilities', 'other_liabilities', '6_to_12') || ""}
                    onChange={(e) =>
                      handleNestedChange("liabilities.other_liabilities.6_to_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'liabilities', 'other_liabilities', 'over_12') || ""}
                    onChange={(e) =>
                      handleNestedChange("liabilities.other_liabilities.over_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* Total Liabilities */}
              <tr style={{
                backgroundColor: "#eff6ff",
                borderTop: "2px solid #2B60AD"
              }}>
                <td style={{
                  padding: "12px 8px",
                  fontSize: "12px",
                  fontWeight: "800",
                  color: "#1e40af"
                }}></td>
                <td style={{
                  padding: "12px 10px",
                  fontSize: "12px",
                  fontWeight: "800",
                  color: "#1e40af"
                }}>
                  <b>Total liabilities</b>
                </td>
                <td style={{
                  padding: "12px 10px",
                  fontSize: "11px",
                  fontWeight: "500",
                  color: "#6b7280"
                }}></td>
                <td style={{ padding: "12px 8px" }}>
                  <CalculatedField value={liabilityTotals['<1']} />
                </td>
                <td style={{ padding: "12px 8px" }}>
                  <CalculatedField value={liabilityTotals['1_to_3']} />
                </td>
                <td style={{ padding: "12px 8px" }}>
                  <CalculatedField value={liabilityTotals['3_to_6']} />
                </td>
                <td style={{ padding: "12px 8px" }}>
                  <CalculatedField value={liabilityTotals['6_to_12']} />
                </td>
                <td style={{ padding: "12px 8px" }}>
                  <CalculatedField value={liabilityTotals['over_12']} />
                </td>
                <td style={{ padding: "12px 8px" }}>
                  <CalculatedField value={liabilityTotals.total} />
                </td>
              </tr>

              {/* Total Equity */}
              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "10px 8px",
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#374151"
                }}>3</td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "12px",
                  fontWeight: "800",
                  color: "#374151"
                }}>
                  <b>Total equity</b>
                </td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "11px",
                  fontWeight: "500",
                  color: "#6b7280",
                  lineHeight: "1.3"
                }}>Shareholder's equity + accumulated surplus - would fall under {">"}12 month category</td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'total_equity', '<1') || ""}
                    onChange={(e) =>
                      handleChange("total_equity", "<1", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'total_equity', '1_to_3') || ""}
                    onChange={(e) =>
                      handleChange("total_equity", "1_to_3", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'total_equity', '3_to_6') || ""}
                    onChange={(e) =>
                      handleChange("total_equity", "3_to_6", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'total_equity', '6_to_12') || ""}
                    onChange={(e) =>
                      handleChange("total_equity", "6_to_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'total_equity', 'over_12') || ""}
                    onChange={(e) =>
                      handleChange("total_equity", "over_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <CalculatedField value={equityTotals.total} />
                </td>
              </tr>

              {/* Total liabilities & equity */}
              <tr style={{
                backgroundColor: "#eff6ff",
                borderTop: "2px solid #2B60AD"
              }}>
                <td style={{
                  padding: "12px 8px",
                  fontSize: "12px",
                  fontWeight: "800",
                  color: "#1e40af"
                }}>4</td>
                <td style={{
                  padding: "12px 10px",
                  fontSize: "12px",
                  fontWeight: "800",
                  color: "#1e40af"
                }}>
                  <b>Total liabilities & equity</b>
                </td>
                <td style={{
                  padding: "12px 10px",
                  fontSize: "11px",
                  fontWeight: "500",
                  color: "#6b7280"
                }}></td>
                <td style={{ padding: "12px 8px" }}>
                  <CalculatedField value={totalLiabilitiesEquity['<1']} />
                </td>
                <td style={{ padding: "12px 8px" }}>
                  <CalculatedField value={totalLiabilitiesEquity['1_to_3']} />
                </td>
                <td style={{ padding: "12px 8px" }}>
                  <CalculatedField value={totalLiabilitiesEquity['3_to_6']} />
                </td>
                <td style={{ padding: "12px 8px" }}>
                  <CalculatedField value={totalLiabilitiesEquity['6_to_12']} />
                </td>
                <td style={{ padding: "12px 8px" }}>
                  <CalculatedField value={totalLiabilitiesEquity['over_12']} />
                </td>
                <td style={{ padding: "12px 8px" }}>
                  <CalculatedField value={totalLiabilitiesEquity.total} />
                </td>
              </tr>

              {/* Asset – (Total Liability + Equity) Gap */}
              <tr style={{
                backgroundColor: "#eff6ff",
                borderTop: "2px solid #2B60AD"
              }}>
                <td style={{
                  padding: "12px 8px",
                  fontSize: "12px",
                  fontWeight: "800",
                  color: "#1e40af"
                }}>5</td>
                <td style={{
                  padding: "12px 10px",
                  fontSize: "12px",
                  fontWeight: "800",
                  color: "#1e40af"
                }}>
                  <b>Asset – (Total Liability + Equity) Gap</b>
                </td>
                <td style={{
                  padding: "12px 10px",
                  fontSize: "11px",
                  fontWeight: "500",
                  color: "#6b7280"
                }}></td>
                <td style={{ padding: "12px 8px" }}>
                  <CalculatedField value={assetLiabilityGap['<1']} />
                </td>
                <td style={{ padding: "12px 8px" }}>
                  <CalculatedField value={assetLiabilityGap['1_to_3']} />
                </td>
                <td style={{ padding: "12px 8px" }}>
                  <CalculatedField value={assetLiabilityGap['3_to_6']} />
                </td>
                <td style={{ padding: "12px 8px" }}>
                  <CalculatedField value={assetLiabilityGap['6_to_12']} />
                </td>
                <td style={{ padding: "12px 8px" }}>
                  <CalculatedField value={assetLiabilityGap['over_12']} />
                </td>
                <td style={{ padding: "12px 8px" }}>
                  <CalculatedField value={assetLiabilityGap.total} />
                </td>
              </tr>

              {/* FUNDING REQUIREMENTS HEADER */}
              <tr style={{
                backgroundColor: "#f0f9ff",
                borderBottom: "1px solid #e5e7eb",
                borderTop: "2px solid #2B60AD"
              }}>
                <td style={{
                  padding: "12px 8px",
                  fontSize: "12px",
                  fontWeight: "800",
                  color: "#1e40af",
                  textAlign: "center"
                }}>B</td>
                <td style={{
                  padding: "12px 10px",
                  fontSize: "12px",
                  fontWeight: "800",
                  color: "#1e40af"
                }}>
                  <b>Funding requirements</b>
                </td>
                <td style={{
                  padding: "12px 10px",
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#6b7280"
                }}></td>
                <td style={{ padding: "12px 8px" }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "34px",
                    fontSize: "11px",
                    fontWeight: "700",
                    color: "#2B60AD",
                    backgroundColor: "#f0f9ff",
                    borderRadius: "6px",
                    padding: "0 8px"
                  }}>
                    {"<1 month"}
                  </div>
                </td>
                <td style={{ padding: "12px 8px" }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "34px",
                    fontSize: "11px",
                    fontWeight: "700",
                    color: "#2B60AD",
                    backgroundColor: "#f0f9ff",
                    borderRadius: "6px",
                    padding: "0 8px"
                  }}>
                    {"1 to <3 months"}
                  </div>
                </td>
                <td style={{ padding: "12px 8px" }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "34px",
                    fontSize: "11px",
                    fontWeight: "700",
                    color: "#2B60AD",
                    backgroundColor: "#f0f9ff",
                    borderRadius: "6px",
                    padding: "0 8px"
                  }}>
                    {"3 to <6 months"}
                  </div>
                </td>
                <td style={{ padding: "12px 8px" }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "34px",
                    fontSize: "11px",
                    fontWeight: "700",
                    color: "#2B60AD",
                    backgroundColor: "#f0f9ff",
                    borderRadius: "6px",
                    padding: "0 8px"
                  }}>
                    {"6 to <12 months"}
                  </div>
                </td>
                <td style={{ padding: "12px 8px" }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "34px",
                    fontSize: "11px",
                    fontWeight: "700",
                    color: "#2B60AD",
                    backgroundColor: "#f0f9ff",
                    borderRadius: "6px",
                    padding: "0 8px"
                  }}>
                    {">12 months"}
                  </div>
                </td>
                <td style={{ padding: "12px 8px" }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "34px",
                    fontSize: "11px",
                    fontWeight: "700",
                    color: "#2B60AD",
                    backgroundColor: "#f0f9ff",
                    borderRadius: "6px",
                    padding: "0 8px"
                  }}>
                    Total
                  </div>
                </td>
              </tr>

              {/* Loan disbursements */}
              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "10px 8px",
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#374151"
                }}></td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#374151"
                }}>Loan disbursements</td>
                <td style={{
                  padding: "10px 10px",
                  fontSize: "11px",
                  fontWeight: "500",
                  color: "#6b7280",
                  lineHeight: "1.3"
                }}>Disbursement targets as per the MFI's business plan, in each bucket</td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'funding_requirements', 'loan_disbursements', '<1') || ""}
                    onChange={(e) =>
                      handleNestedChange("funding_requirements.loan_disbursements.<1", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'funding_requirements', 'loan_disbursements', '1_to_3') || ""}
                    onChange={(e) =>
                      handleNestedChange("funding_requirements.loan_disbursements.1_to_3", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'funding_requirements', 'loan_disbursements', '3_to_6') || ""}
                    onChange={(e) =>
                      handleNestedChange("funding_requirements.loan_disbursements.3_to_6", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'funding_requirements', 'loan_disbursements', '6_to_12') || ""}
                    onChange={(e) =>
                      handleNestedChange("funding_requirements.loan_disbursements.6_to_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "34px",
                      padding: "0 8px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'funding_requirements', 'loan_disbursements', 'over_12') || ""}
                    onChange={(e) =>
                      handleNestedChange("funding_requirements.loan_disbursements.over_12", e.target.value)
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <CalculatedField value={disbursementTotals.total} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default ALM;