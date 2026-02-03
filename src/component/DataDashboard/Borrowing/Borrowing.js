// import React from "react";
// import "./Borrowing.css";

// function Borrowing({ formData, handleChange, handleNestedChange,handleArrayChange,
//   selectedMonthName,        // ✅ YEH LINE MISS THI
//   setSelectedMonthName,
//   selectedDuring_FY,
//   setselectedDuring_FY  ,
  

//  }) {
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
//               <th>Total outstanding borrowings </th>
//               <th>AIFIs</th>
//               <th>Banks</th>
//               <th>Non Bank Entities</th>
//               <th>External commercial borrowing</th>
//               <th>Others</th>
//               <th>Specify others (if any)</th>
//             </tr>

//             <tr className="blue-row">
//               <th>(In INR)</th>
//               <th>  {selectedMonthName
//                   ? selectedMonthName
//                   : ""}</th>
//               <th>  {selectedMonthName
//                   ? selectedMonthName
//                   : ""}</th>
//      <th>  {selectedMonthName
//                   ? selectedMonthName
//                   : ""}</th>              
//      <th>  {selectedMonthName
//                   ? selectedMonthName
//                   : ""}</th>         
//      <th>  {selectedMonthName
//                   ? selectedMonthName
//                   : ""}</th>             
//      <th>  {selectedMonthName
//                   ? selectedMonthName
//                   : ""}</th>            </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Term loan</td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={formData.TotalOutstandingBorrowing.AIFI.TermLoan || ""}
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.AIFI.TermLoan",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={formData.TotalOutstandingBorrowing.Bank.TermLoan || ""}
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.Bank.TermLoan",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.NonBankEntity.TermLoan ||
//                     ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.NonBankEntity.TermLoan",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.ExternalCBorrowing
//                       .TermLoan || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.ExternalCBorrowing.TermLoan",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.Others.TermLoan || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.Others.TermLoan",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.SpecifyOther.TermLoan ||
//                     ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.SpecifyOther.TermLoan",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td>Debentures</td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.AIFI.Debentures || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.AIFI.Debentures",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.Bank.Debentures || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.Bank.Debentures",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.NonBankEntity
//                       .Debentures || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.NonBankEntity.Debentures",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.ExternalCBorrowing
//                       .Debentures || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.ExternalCBorrowing.Debentures",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.Others.Debentures || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.Others.Debentures",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.SpecifyOther
//                       .Debentures || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.SpecifyOther.Debentures",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td>Subordinated Debt</td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.AIFI.SubordinatedDebt ||
//                     ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.AIFI.SubordinatedDebt",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.Bank.SubordinatedDebt ||
//                     ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.Bank.SubordinatedDebt",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.NonBankEntity
//                       .SubordinatedDebt || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.NonBankEntity.SubordinatedDebt",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.ExternalCBorrowing
//                       .SubordinatedDebt || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.ExternalCBorrowing.SubordinatedDebt",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.Others
//                       .SubordinatedDebt || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.Others.SubordinatedDebt",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.SpecifyOther
//                       .SubordinatedDebt || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.SpecifyOther.SubordinatedDebt",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td>Commercial Papers</td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.AIFI.CommercialPaper ||
//                     ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.AIFI.CommercialPaper",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.Bank.CommercialPaper ||
//                     ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.Bank.CommercialPaper",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.NonBankEntity
//                       .CommercialPaper || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.NonBankEntity.CommercialPaper",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.ExternalCBorrowing
//                       .CommercialPaper || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.ExternalCBorrowing.CommercialPaper",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.Others.CommercialPaper ||
//                     ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.Others.CommercialPaper",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.SpecifyOther
//                       .CommercialPaper || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.SpecifyOther.CommercialPaper",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td>Any other (specify)</td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={formData.TotalOutstandingBorrowing.AIFI.AnyOther || ""}
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.AIFI.AnyOther",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={formData.TotalOutstandingBorrowing.Bank.AnyOther || ""}
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.Bank.AnyOther",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.NonBankEntity.AnyOther ||
//                     ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.NonBankEntity.AnyOther",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.ExternalCBorrowing
//                       .AnyOther || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.ExternalCBorrowing.AnyOther",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.Others.AnyOther || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.Others.AnyOther",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalOutstandingBorrowing.SpecifyOther.AnyOther ||
//                     ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalOutstandingBorrowing.SpecifyOther.AnyOther",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>

//             <tr className="pink-row">
//               <td>Total</td>
//               <td>0</td>
//               <td>0</td>
//               <td>0</td>
//               <td>0</td>
//               <td>0</td>
//               <td></td>
//             </tr>
//           </tbody>
//         </table>

//         <br />
//         <p>
//           Note: All India Financial Institutions (AIFIs) include EXIM Bank,
//           NABARD, NHB and SIDBI/MUDRA and other similar institutions (Master
//           Direction DBR.FID.No.108/01.02.000/2015-16)
//         </p>
//         <br />
//         <br />

//         <table
//           class="table table-light table-bordered border-primary"
//           style={{ width: "100%" }}
//         >
//           <thead>
//             <tr className="blue-row">
//               <th>Break-up of borrowing outstanding</th>
//               <th>Name of AIFI</th>
//               <th>
//                 Total outstanding borrowing (in INR)      {selectedMonthName
//                   ? selectedMonthName
//                   : ""}
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>1</td>
//               <td>SIDBI</td>
//               <td>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={
//                     formData.BreakUpOfBorrowingOutstanding &&
//                     formData.BreakUpOfBorrowingOutstanding[0] &&
//                     formData.BreakUpOfBorrowingOutstanding[0]["SIDBI"]
//                       ? formData.BreakUpOfBorrowingOutstanding[0]["SIDBI"]
//                       : ""
//                   }
//                   onChange={(e) =>
//                     handleArrayChange(
//                       "BreakUpOfBorrowingOutstanding",
//                       0,
//                       "SIDBI",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>

//               {/* <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                    value={
//                     formData.BreakUpOfBorrowingOutstanding.length > 0
//                       ? formData.BreakUpOfBorrowingOutstanding[0]["SIDBI"] || ""
//                       : ""
//                   }
//                   onChange={(e) =>
//                     handleChange(
//                       "BreakUpOfBorrowingOutstanding",
//                       "SIDBI",
//                       e.target.value
//                     )
//                   }
//                 />
                
//               </td> */}
//             </tr>

//             <tr>
//               <td>2</td>
//               <td>NABARD</td>
//               <td>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={
//                     formData.BreakUpOfBorrowingOutstanding &&
//                     formData.BreakUpOfBorrowingOutstanding[0] &&
//                     formData.BreakUpOfBorrowingOutstanding[0]["NABARD"]
//                       ? formData.BreakUpOfBorrowingOutstanding[0]["NABARD"]
//                       : ""
//                   }
//                   onChange={(e) =>
//                     handleArrayChange(
//                       "BreakUpOfBorrowingOutstanding",
//                       0,
//                       "NABARD",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               {/* <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   // value={formData.BreakUpOfBorrowingOutstanding.NABARD || ""}
//                   value={
//                     formData.BreakUpOfBorrowingOutstanding.length > 0
//                       ? formData.BreakUpOfBorrowingOutstanding[0]["NABARD"] ||
//                         ""
//                       : ""
//                   }
//                   onChange={(e) =>
//                     handleChange(
//                       "BreakUpOfBorrowingOutstanding",
//                       "NABARD",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td> */}
//             </tr>

//             <tr>
//               <td>3</td>
//               <td>MUDRA</td>
//               <td>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={
//                     formData.BreakUpOfBorrowingOutstanding &&
//                     formData.BreakUpOfBorrowingOutstanding[0] &&
//                     formData.BreakUpOfBorrowingOutstanding[0]["MUDRA"]
//                       ? formData.BreakUpOfBorrowingOutstanding[0]["MUDRA"]
//                       : ""
//                   }
//                   onChange={(e) =>
//                     handleArrayChange(
//                       "BreakUpOfBorrowingOutstanding",
//                       0,
//                       "MUDRA",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               {/* <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   // value={formData.BreakUpOfBorrowingOutstanding.MUDRA || ""}
//                   value={
//                     formData.BreakUpOfBorrowingOutstanding.length > 0
//                       ? formData.BreakUpOfBorrowingOutstanding[0]["MUDRA"] || ""
//                       : ""
//                   }
//                   onChange={(e) =>
//                     handleChange(
//                       "BreakUpOfBorrowingOutstanding",
//                       "MUDRA",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td> */}
//             </tr>

//             <tr>
//               <td>4</td>
//               <td>NHB</td>
//               <td>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={
//                     formData.BreakUpOfBorrowingOutstanding &&
//                     formData.BreakUpOfBorrowingOutstanding[0] &&
//                     formData.BreakUpOfBorrowingOutstanding[0]["NHB"]
//                       ? formData.BreakUpOfBorrowingOutstanding[0]["NHB"]
//                       : ""
//                   }
//                   onChange={(e) =>
//                     handleArrayChange(
//                       "BreakUpOfBorrowingOutstanding",
//                       0,
//                       "NHB",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>
//           </tbody>
//         </table>

//         {/* table borrowngs obtainer */}
//         <table
//           class="table table-light table-bordered border-primary"
//           style={{ width: "100%" }}
//         >
//           <thead>
//             <tr className="grey-row">
//               <th>Total borrowings obtained</th>
//               <th>AIFIs</th>
//               <th>Banks</th>
//               <th>Non Bank Entities</th>
//               <th>External commercial borrowing</th>
//               <th>Others/Individuals</th>
//               <th>Specify others (if any)</th>
//             </tr>

//             <tr className="grey-row">
//               <th>(In INR)</th>
//               <th>    {selectedDuring_FY
//                   ? selectedDuring_FY
//                   : ""}</th>
//   <th>    {selectedDuring_FY
//                   ? selectedDuring_FY
//                   : ""}</th>           
//   <th>    {selectedDuring_FY
//                   ? selectedDuring_FY
//                   : ""}</th>            
//   <th>    {selectedDuring_FY
//                   ? selectedDuring_FY
//                   : ""}</th>             
//   <th>    {selectedDuring_FY
//                   ? selectedDuring_FY
//                   : ""}</th>          
//   <th>    {selectedDuring_FY
//                   ? selectedDuring_FY
//                   : ""}</th>            </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Term loan</td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={formData.TotalBorrowingObtained.AIFI.TermLoan || ""}
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.AIFI.TermLoan",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={formData.TotalBorrowingObtained.Bank.TermLoan || ""}
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.Bank.TermLoan",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalBorrowingObtained.NonBankEntity.TermLoan || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.NonBankEntity.TermLoan",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalBorrowingObtained.ExternalCBorrowing
//                       .TermLoan || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.ExternalCBorrowing.TermLoan",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={formData.TotalBorrowingObtained.Others.TermLoan || ""}
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.Others.TermLoan",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalBorrowingObtained.SpecifyOther.TermLoan || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.SpecifyOther.TermLoan",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td>Debentures</td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={formData.TotalBorrowingObtained.AIFI.Debentures || ""}
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.AIFI.Debentures",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={formData.TotalBorrowingObtained.Bank.Debentures || ""}
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.Bank.Debentures",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalBorrowingObtained.NonBankEntity.Debentures ||
//                     ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.NonBankEntity.Debentures",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalBorrowingObtained.ExternalCBorrowing
//                       .Debentures || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.ExternalCBorrowing.Debentures",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalBorrowingObtained.Others.Debentures || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.Others.Debentures",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalBorrowingObtained.SpecifyOther.Debentures ||
//                     ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.SpecifyOther.Debentures",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td>Subordinated Debt</td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalBorrowingObtained.AIFI.SubordinatedDebt || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.AIFI.SubordinatedDebt",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalBorrowingObtained.Bank.SubordinatedDebt || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.Bank.SubordinatedDebt",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalBorrowingObtained.NonBankEntity
//                       .SubordinatedDebt || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.NonBankEntity.SubordinatedDebt",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalBorrowingObtained.ExternalCBorrowing
//                       .SubordinatedDebt || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.ExternalCBorrowing.SubordinatedDebt",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalBorrowingObtained.Others.SubordinatedDebt ||
//                     ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.Others.SubordinatedDebt",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalBorrowingObtained.SpecifyOther
//                       .SubordinatedDebt || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.SpecifyOther.SubordinatedDebt",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td>Commercial Papers</td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalBorrowingObtained.AIFI.CommercialPaper || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.AIFI.CommercialPaper",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalBorrowingObtained.Bank.CommercialPaper || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.Bank.CommercialPaper",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalBorrowingObtained.NonBankEntity
//                       .CommercialPaper || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.NonBankEntity.CommercialPaper",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalBorrowingObtained.ExternalCBorrowing
//                       .CommercialPaper || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.ExternalCBorrowing.CommercialPaper",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalBorrowingObtained.Others.CommercialPaper || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.Others.CommercialPaper",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalBorrowingObtained.SpecifyOther
//                       .CommercialPaper || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.SpecifyOther.CommercialPaper",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td>Any other (specify)</td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={formData.TotalBorrowingObtained.AIFI.AnyOther || ""}
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.AIFI.AnyOther",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={formData.TotalBorrowingObtained.Bank.AnyOther || ""}
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.Bank.AnyOther",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalBorrowingObtained.NonBankEntity.AnyOther || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.NonBankEntity.AnyOther",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalBorrowingObtained.ExternalCBorrowing
//                       .AnyOther || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.ExternalCBorrowing.AnyOther",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={formData.TotalBorrowingObtained.Others.AnyOther || ""}
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.Others.AnyOther",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.TotalBorrowingObtained.SpecifyOther.AnyOther || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "TotalBorrowingObtained.SpecifyOther.AnyOther",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>

//             <tr className="pink-row">
//               <td>Total</td>
//               <td>0</td>
//               <td>0</td>
//               <td>0</td>
//               <td>0</td>
//               <td>0</td>
//               <td></td>
//             </tr>
//           </tbody>
//         </table>

//         <br></br>

//         {/* breakup of borrowing obtained */}
//         <table
//           class="table table-light table-bordered border-primary"
//           style={{ width: "100%" }}
//         >
//           <thead>
//             <tr className="grey-row">
//               <th>Break-up of borrowings obtained</th>
//               <th>Name of AIFI</th>
//               <th>"Total borrowing from1     {selectedDuring_FY
//                   ? selectedDuring_FY
//                   : ""}"</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>1</td>
//               <td>SIDBI</td>
//               <td>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={
//                     formData.BreakUpOfBorrowingObtained &&
//                     formData.BreakUpOfBorrowingObtained[0] &&
//                     formData.BreakUpOfBorrowingObtained[0]["SIDBI"]
//                       ? formData.BreakUpOfBorrowingObtained[0]["SIDBI"]
//                       : ""
//                   }
//                   onChange={(e) =>
//                     handleArrayChange(
//                       "BreakUpOfBorrowingObtained",
//                       0,
//                       "SIDBI",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               {/* <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   // value={formData.BreakUpOfBorrowingObtained.SIDBI || ""}
//                   value={
//                     formData.BreakUpOfBorrowingObtained.length > 0
//                       ? formData.BreakUpOfBorrowingObtained[0]["SIDBI"] || ""
//                       : ""
//                   }
//                   onChange={(e) =>
//                     handleChange(
//                       "BreakUpOfBorrowingObtained",
//                       "SIDBI",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td> */}
//             </tr>
//             <tr>
//               <td>2</td>
//               <td>NABARD</td>
//               <td>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={
//                     formData.BreakUpOfBorrowingObtained &&
//                     formData.BreakUpOfBorrowingObtained[0] &&
//                     formData.BreakUpOfBorrowingObtained[0]["NABARD"]
//                       ? formData.BreakUpOfBorrowingObtained[0]["NABARD"]
//                       : ""
//                   }
//                   onChange={(e) =>
//                     handleArrayChange(
//                       "BreakUpOfBorrowingObtained",
//                       0,
//                       "NABARD",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//               {/* <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   // value={formData.BreakUpOfBorrowingObtained.NABARD || ""}
//                   value={
//                     formData.BreakUpOfBorrowingObtained.length > 0
//                       ? formData.BreakUpOfBorrowingObtained[0]["NABARD"] || ""
//                       : ""
//                   }
//                   onChange={(e) =>
//                     handleChange(
//                       "BreakUpOfBorrowingObtained",
//                       "NABARD",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td> */}
//             </tr>
//             <tr>
//               <td>3</td>
//               <td>MUDRA</td>
//               <td>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={
//                     formData.BreakUpOfBorrowingObtained &&
//                     formData.BreakUpOfBorrowingObtained[0] &&
//                     formData.BreakUpOfBorrowingObtained[0]["MUDRA"]
//                       ? formData.BreakUpOfBorrowingObtained[0]["MUDRA"]
//                       : ""
//                   }
//                   onChange={(e) =>
//                     handleArrayChange(
//                       "BreakUpOfBorrowingObtained",
//                       0,
//                       "MUDRA",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td>4</td>
//               <td>NHB</td>
//               <td>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={
//                     formData.BreakUpOfBorrowingObtained &&
//                     formData.BreakUpOfBorrowingObtained[0] &&
//                     formData.BreakUpOfBorrowingObtained[0]["NHB"]
//                       ? formData.BreakUpOfBorrowingObtained[0]["NHB"]
//                       : ""
//                   }
//                   onChange={(e) =>
//                     handleArrayChange(
//                       "BreakUpOfBorrowingObtained",
//                       0,
//                       "NHB",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>
//                     
//           </tbody>
//         </table>
//       </form>
//     </div>
//   );
// }

// export default Borrowing;
import React from "react";

function Borrowing({
  formData,
  handleChange,
  handleNestedChange,
  handleArrayChange,
  selectedMonthName,
  setSelectedMonthName,
  selectedDuring_FY,
  setselectedDuring_FY,
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

  // Calculate totals for first table
  const calculateFirstTableTotals = () => {
    const categories = ['AIFI', 'Bank', 'NonBankEntity', 'ExternalCBorrowing', 'Others'];
    const types = ['TermLoan', 'Debentures', 'SubordinatedDebt', 'CommercialPaper', 'AnyOther'];
    
    const totals = {};
    categories.forEach(cat => {
      totals[cat] = 0;
      types.forEach(type => {
        const data = getNestedValue(formData, 'TotalOutstandingBorrowing', cat, type);
        const value = parseFloat(data || 0);
        if (!isNaN(value)) {
          totals[cat] += value;
        }
      });
    });
    
    return totals;
  };

  // Calculate totals for second table (Total borrowings obtained)
  const calculateSecondTableTotals = () => {
    const categories = ['AIFI', 'Bank', 'NonBankEntity', 'ExternalCBorrowing', 'Others'];
    const types = ['TermLoan', 'Debentures', 'SubordinatedDebt', 'CommercialPaper', 'AnyOther'];
    
    const totals = {};
    categories.forEach(cat => {
      totals[cat] = 0;
      types.forEach(type => {
        const data = getNestedValue(formData, 'TotalBorrowingObtained', cat, type);
        const value = parseFloat(data || 0);
        if (!isNaN(value)) {
          totals[cat] += value;
        }
      });
    });
    
    return totals;
  };

  const firstTableTotals = calculateFirstTableTotals();
  const secondTableTotals = calculateSecondTableTotals();

  return (
    <div style={{
      backgroundColor: "#f8f9fa",
      padding: "20px",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>

      {/* TOTAL OUTSTANDING BORROWINGS */}
      <SectionHeader title="Total outstanding borrowings" date={selectedMonthName} />
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
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  width: "20%"
                }}>Type</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>AIFIs</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>Banks</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>Non Bank Entities</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>External Commercial Borrowing</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>Others</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>Specify others (if any)</th>
              </tr>
            </thead>
            <tbody>
              {/* Term Loan */}
              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>Term loan</td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'AIFI', 'TermLoan') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.AIFI.TermLoan",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'Bank', 'TermLoan') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.Bank.TermLoan",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'NonBankEntity', 'TermLoan') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.NonBankEntity.TermLoan",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'ExternalCBorrowing', 'TermLoan') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.ExternalCBorrowing.TermLoan",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'Others', 'TermLoan') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.Others.TermLoan",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'SpecifyOther', 'TermLoan') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.SpecifyOther.TermLoan",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
              </tr>

              {/* Debentures */}
              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#f9fafb"
              }}>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>Debentures</td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'AIFI', 'Debentures') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.AIFI.Debentures",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'Bank', 'Debentures') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.Bank.Debentures",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'NonBankEntity', 'Debentures') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.NonBankEntity.Debentures",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'ExternalCBorrowing', 'Debentures') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.ExternalCBorrowing.Debentures",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'Others', 'Debentures') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.Others.Debentures",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'SpecifyOther', 'Debentures') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.SpecifyOther.Debentures",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
              </tr>

              {/* Subordinated Debt */}
              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>Subordinated Debt</td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'AIFI', 'SubordinatedDebt') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.AIFI.SubordinatedDebt",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'Bank', 'SubordinatedDebt') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.Bank.SubordinatedDebt",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'NonBankEntity', 'SubordinatedDebt') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.NonBankEntity.SubordinatedDebt",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'ExternalCBorrowing', 'SubordinatedDebt') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.ExternalCBorrowing.SubordinatedDebt",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'Others', 'SubordinatedDebt') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.Others.SubordinatedDebt",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'SpecifyOther', 'SubordinatedDebt') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.SpecifyOther.SubordinatedDebt",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
              </tr>

              {/* Commercial Papers */}
              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#f9fafb"
              }}>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>Commercial Papers</td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'AIFI', 'CommercialPaper') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.AIFI.CommercialPaper",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'Bank', 'CommercialPaper') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.Bank.CommercialPaper",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'NonBankEntity', 'CommercialPaper') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.NonBankEntity.CommercialPaper",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'ExternalCBorrowing', 'CommercialPaper') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.ExternalCBorrowing.CommercialPaper",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'Others', 'CommercialPaper') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.Others.CommercialPaper",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'SpecifyOther', 'CommercialPaper') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.SpecifyOther.CommercialPaper",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
              </tr>

              {/* Any other (specify) */}
              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>Any other (specify)</td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'AIFI', 'AnyOther') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.AIFI.AnyOther",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'Bank', 'AnyOther') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.Bank.AnyOther",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'NonBankEntity', 'AnyOther') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.NonBankEntity.AnyOther",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'ExternalCBorrowing', 'AnyOther') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.ExternalCBorrowing.AnyOther",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'Others', 'AnyOther') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.Others.AnyOther",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalOutstandingBorrowing', 'SpecifyOther', 'AnyOther') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalOutstandingBorrowing.SpecifyOther.AnyOther",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
              </tr>

              {/* Total Row */}
              <tr style={{
                backgroundColor: "#f0f9ff",
                borderTop: "2px solid #2B60AD"
              }}>
                <td style={{
                  padding: "14px 16px",
                  fontSize: "13px",
                  fontWeight: "800",
                  color: "#1e40af"
                }}>Total</td>
                <td style={{ padding: "14px 16px" }}>
                  <CalculatedField value={firstTableTotals.AIFI} />
                </td>
                <td style={{ padding: "14px 16px" }}>
                  <CalculatedField value={firstTableTotals.Bank} />
                </td>
                <td style={{ padding: "14px 16px" }}>
                  <CalculatedField value={firstTableTotals.NonBankEntity} />
                </td>
                <td style={{ padding: "14px 16px" }}>
                  <CalculatedField value={firstTableTotals.ExternalCBorrowing} />
                </td>
                <td style={{ padding: "14px 16px" }}>
                  <CalculatedField value={firstTableTotals.Others} />
                </td>
                <td style={{ padding: "14px 16px" }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "36px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#6b7280",
                    backgroundColor: "#f9fafb",
                    borderRadius: "6px",
                    padding: "0 12px"
                  }}>
                    N/A
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{
          fontSize: "12px",
          color: "#6b7280",
          marginTop: "12px",
          fontStyle: "italic"
        }}>
          Note: All India Financial Institutions (AIFIs) include EXIM Bank, NABARD, NHB and SIDBI/MUDRA and other similar institutions (Master Direction DBR.FID.No.108/01.02.000/2015-16)
        </p>
      </div>

      {/* BREAK-UP OF BORROWING OUTSTANDING */}
      <SectionHeader title="Break-up of borrowing outstanding" date={selectedMonthName} />
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
                  padding: "12px 16px",
                  textAlign: "center",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  width: "10%"
                }}>#</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  width: "40%"
                }}>Name of AIFI</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  width: "50%"
                }}>Total outstanding borrowing (in INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>1</td>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>SIDBI</td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={
                      (formData && formData.BreakUpOfBorrowingOutstanding && formData.BreakUpOfBorrowingOutstanding[0] && formData.BreakUpOfBorrowingOutstanding[0]["SIDBI"]) || ""
                    }
                    onChange={(e) =>
                      handleArrayChange(
                        "BreakUpOfBorrowingOutstanding",
                        0,
                        "SIDBI",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
              </tr>

              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#f9fafb"
              }}>
                <td style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>2</td>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>NABARD</td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={
                      (formData && formData.BreakUpOfBorrowingOutstanding && formData.BreakUpOfBorrowingOutstanding[0] && formData.BreakUpOfBorrowingOutstanding[0]["NABARD"]) || ""
                    }
                    onChange={(e) =>
                      handleArrayChange(
                        "BreakUpOfBorrowingOutstanding",
                        0,
                        "NABARD",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
              </tr>

              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>3</td>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>MUDRA</td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={
                      (formData && formData.BreakUpOfBorrowingOutstanding && formData.BreakUpOfBorrowingOutstanding[0] && formData.BreakUpOfBorrowingOutstanding[0]["MUDRA"]) || ""
                    }
                    onChange={(e) =>
                      handleArrayChange(
                        "BreakUpOfBorrowingOutstanding",
                        0,
                        "MUDRA",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
              </tr>

              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#f9fafb"
              }}>
                <td style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>4</td>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>NHB</td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={
                      (formData && formData.BreakUpOfBorrowingOutstanding && formData.BreakUpOfBorrowingOutstanding[0] && formData.BreakUpOfBorrowingOutstanding[0]["NHB"]) || ""
                    }
                    onChange={(e) =>
                      handleArrayChange(
                        "BreakUpOfBorrowingOutstanding",
                        0,
                        "NHB",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* TOTAL BORROWINGS OBTAINED */}
      <SectionHeader title="Total borrowings obtained" date={selectedDuring_FY} />
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
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  width: "20%"
                }}>Type</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>AIFIs</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>Banks</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>Non Bank Entities</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>External Commercial Borrowing</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>Others/Individuals</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>Specify others (if any)</th>
              </tr>
            </thead>
            <tbody>
              {/* Term Loan */}
              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>Term loan</td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'AIFI', 'TermLoan') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.AIFI.TermLoan",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'Bank', 'TermLoan') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.Bank.TermLoan",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'NonBankEntity', 'TermLoan') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.NonBankEntity.TermLoan",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'ExternalCBorrowing', 'TermLoan') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.ExternalCBorrowing.TermLoan",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'Others', 'TermLoan') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.Others.TermLoan",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'SpecifyOther', 'TermLoan') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.SpecifyOther.TermLoan",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
              </tr>

              {/* Debentures */}
              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#f9fafb"
              }}>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>Debentures</td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'AIFI', 'Debentures') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.AIFI.Debentures",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'Bank', 'Debentures') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.Bank.Debentures",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'NonBankEntity', 'Debentures') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.NonBankEntity.Debentures",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'ExternalCBorrowing', 'Debentures') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.ExternalCBorrowing.Debentures",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'Others', 'Debentures') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.Others.Debentures",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'SpecifyOther', 'Debentures') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.SpecifyOther.Debentures",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
              </tr>

              {/* Subordinated Debt */}
              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>Subordinated Debt</td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'AIFI', 'SubordinatedDebt') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.AIFI.SubordinatedDebt",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'Bank', 'SubordinatedDebt') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.Bank.SubordinatedDebt",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'NonBankEntity', 'SubordinatedDebt') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.NonBankEntity.SubordinatedDebt",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'ExternalCBorrowing', 'SubordinatedDebt') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.ExternalCBorrowing.SubordinatedDebt",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'Others', 'SubordinatedDebt') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.Others.SubordinatedDebt",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'SpecifyOther', 'SubordinatedDebt') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.SpecifyOther.SubordinatedDebt",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
              </tr>

              {/* Commercial Papers */}
              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#f9fafb"
              }}>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>Commercial Papers</td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'AIFI', 'CommercialPaper') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.AIFI.CommercialPaper",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'Bank', 'CommercialPaper') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.Bank.CommercialPaper",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'NonBankEntity', 'CommercialPaper') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.NonBankEntity.CommercialPaper",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'ExternalCBorrowing', 'CommercialPaper') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.ExternalCBorrowing.CommercialPaper",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'Others', 'CommercialPaper') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.Others.CommercialPaper",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'SpecifyOther', 'CommercialPaper') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.SpecifyOther.CommercialPaper",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
              </tr>

              {/* Any other (specify) */}
              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>Any other (specify)</td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'AIFI', 'AnyOther') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.AIFI.AnyOther",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'Bank', 'AnyOther') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.Bank.AnyOther",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'NonBankEntity', 'AnyOther') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.NonBankEntity.AnyOther",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'ExternalCBorrowing', 'AnyOther') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.ExternalCBorrowing.AnyOther",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'Others', 'AnyOther') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.Others.AnyOther",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={getNestedValue(formData, 'TotalBorrowingObtained', 'SpecifyOther', 'AnyOther') || ""}
                    onChange={(e) =>
                      handleNestedChange(
                        "TotalBorrowingObtained.SpecifyOther.AnyOther",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
              </tr>

              {/* Total Row */}
              <tr style={{
                backgroundColor: "#f0f9ff",
                borderTop: "2px solid #2B60AD"
              }}>
                <td style={{
                  padding: "14px 16px",
                  fontSize: "13px",
                  fontWeight: "800",
                  color: "#1e40af"
                }}>Total</td>
                <td style={{ padding: "14px 16px" }}>
                  <CalculatedField value={secondTableTotals.AIFI} />
                </td>
                <td style={{ padding: "14px 16px" }}>
                  <CalculatedField value={secondTableTotals.Bank} />
                </td>
                <td style={{ padding: "14px 16px" }}>
                  <CalculatedField value={secondTableTotals.NonBankEntity} />
                </td>
                <td style={{ padding: "14px 16px" }}>
                  <CalculatedField value={secondTableTotals.ExternalCBorrowing} />
                </td>
                <td style={{ padding: "14px 16px" }}>
                  <CalculatedField value={secondTableTotals.Others} />
                </td>
                <td style={{ padding: "14px 16px" }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "36px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#6b7280",
                    backgroundColor: "#f9fafb",
                    borderRadius: "6px",
                    padding: "0 12px"
                  }}>
                    N/A
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* BREAK-UP OF BORROWINGS OBTAINED */}
      <SectionHeader title="Break-up of borrowings obtained" date={selectedDuring_FY} />
      <div style={{
        backgroundColor: "#ffffff",
        padding: "24px",
        borderRadius: "0 0 10px 10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        marginBottom: "8px"
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
                  padding: "12px 16px",
                  textAlign: "center",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  width: "10%"
                }}>#</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  width: "40%"
                }}>Name of AIFI</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  width: "50%"
                }}>Total borrowing from {selectedDuring_FY}</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>1</td>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>SIDBI</td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={
                      (formData && formData.BreakUpOfBorrowingObtained && formData.BreakUpOfBorrowingObtained[0] && formData.BreakUpOfBorrowingObtained[0]["SIDBI"]) || ""
                    }
                    onChange={(e) =>
                      handleArrayChange(
                        "BreakUpOfBorrowingObtained",
                        0,
                        "SIDBI",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
              </tr>

              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#f9fafb"
              }}>
                <td style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>2</td>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>NABARD</td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={
                      (formData && formData.BreakUpOfBorrowingObtained && formData.BreakUpOfBorrowingObtained[0] && formData.BreakUpOfBorrowingObtained[0]["NABARD"]) || ""
                    }
                    onChange={(e) =>
                      handleArrayChange(
                        "BreakUpOfBorrowingObtained",
                        0,
                        "NABARD",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
              </tr>

              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>3</td>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>MUDRA</td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={
                      (formData && formData.BreakUpOfBorrowingObtained && formData.BreakUpOfBorrowingObtained[0] && formData.BreakUpOfBorrowingObtained[0]["MUDRA"]) || ""
                    }
                    onChange={(e) =>
                      handleArrayChange(
                        "BreakUpOfBorrowingObtained",
                        0,
                        "MUDRA",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
              </tr>

              <tr style={{
                borderBottom: "1px solid #f3f4f6",
                backgroundColor: "#f9fafb"
              }}>
                <td style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>4</td>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151"
                }}>NHB</td>
                <td style={{ padding: "12px 16px" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      padding: "0 10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#111827",
                      outline: "none",
                      transition: "border 0.2s",
                      backgroundColor: "#ffffff"
                    }}
                    value={
                      (formData && formData.BreakUpOfBorrowingObtained && formData.BreakUpOfBorrowingObtained[0] && formData.BreakUpOfBorrowingObtained[0]["NHB"]) || ""
                    }
                    onChange={(e) =>
                      handleArrayChange(
                        "BreakUpOfBorrowingObtained",
                        0,
                        "NHB",
                        e.target.value
                      )
                    }
                    onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
                    onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default Borrowing;