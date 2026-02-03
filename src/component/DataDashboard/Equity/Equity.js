// import "./Equity.css";
// import { loadUserFormData } from "../utils/StorageHelper";
// import React, { useState } from "react";

// function Equity({
//   formData,
//   handleChange,
//   handleNestedChange,
//   handleRowCountChange,
//   handleInputChange,
//   setFormData,
//   selectedMonthName,        
//   setSelectedMonthName
// }) {
//   // const [detailOfExistingNums, setDetailOfExistingNums] = useState(1);
//   const [detailOfExistingNums, setDetailOfExistingNums] = useState(() => {
//     const storedData = loadUserFormData();
//     return storedData.ExistingEquityProviders
//       ? storedData.ExistingEquityProviders.length
//       : 1;
//   });

//   const [detailOfFreshNums, setDetailOfFreshNums] = useState(() => {
//     const storedData = loadUserFormData();
//     return storedData.equityreceivedExistingEquityProviders
//       ? storedData.equityreceivedExistingEquityProviders.length
//       : 1;
//   });
//   const [detailOfEquityNums, setDetailOfEquityNums] = useState(() => {
//     const storedData = loadUserFormData();
//     return storedData.equityboughtExistingEquityProviders
//       ? storedData.equityboughtExistingEquityProviders.length
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
//         <table
//           class="table table-light table-bordered border-primary"
//           style={{ width: "100%" }}
//         >
//           <tbody>
//             {/* sub heading */}

//             <tr class="blue-row">
//               <td></td>
//               <td style={{ backgroundColor: "#1f4a90" }}>
//                 {selectedMonthName
//                   ? selectedMonthName
//                   : ""}
//               </td>


//             </tr>
//             <tr class="blue-row ">
//               <td style={{ backgroundColor: "#fbe5fd", color: "black" }}>
//                 Shareholders' Funds
//               </td>
//               <td
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   color: "black",
//                   backgroundColor: "#fbe5fd",
//                 }}
//               >
//                 INR
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <label for="" class="form-label">
//                   Share capital
//                 </label>
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"

//                   value={formData.ShareholdersFunds.ShareCapital || ""}
//                   readOnly
//                   onChange={(e) =>
//                     handleChange(
//                       "ShareholdersFunds",
//                       "ShareCapital",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td>
//                 <label for="" class="form-label">
//                   Reserves and Surplus
//                 </label>
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={formData.ShareholdersFunds.ReservesAndSurplus || ""}
//                   onChange={(e) =>
//                     handleChange(
//                       "ShareholdersFunds",
//                       "ReservesAndSurplus",
//                       e.target.value
//                     )
//                   }
//                   readOnly
//                 />
//               </td>
//             </tr>

//             {/* <tr><td></td><td></td></tr> */}

//             <tr>
//               <td style={{ backgroundColor: "#fbe5fd", color: "black" }}>
//                 <label for="" class="form-label">
//                   Share of equity (Rs)
//                 </label>
//               </td>
//               <td style={{ backgroundColor: "#fbe5fd", color: "black" }}>
//                 {/* here will be this: ShareOfEquity */}
//                 <b style={{ display: "flex", justifyContent: "center" }}>
//                   {formData.ShareholdersFunds.ShareOfEquity || 0}
//                 </b>
//               </td>
//             </tr>

//             <tr>
//               <td style={{ backgroundColor: "#fbe5fd", color: "black" }}>
//                 <label for="" class="form-label">
//                   Foreign (Total)
//                 </label>
//               </td>
//               <td
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   backgroundColor: "#fbe5fd",
//                   color: "black",
//                 }}
//               >
//                 {/* //ShareholdersFunds.Foreign.Total */}
//                 <b>{formData.ShareholdersFunds.Foreign.Total || 0}</b>
//               </td>
//             </tr>

//             {/* sub heading */}
//             <tr>
//               <td>Foreign Direct Investment (FDI)</td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={formData.ShareholdersFunds.Foreign.FDI || ""}
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "ShareholdersFunds.Foreign.FDI",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td>
//                 <label for="" class="form-label">
//                   Foreign portfolio investment (FPI)
//                 </label>
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={formData.ShareholdersFunds.Foreign.FPI || ""}
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "ShareholdersFunds.Foreign.FPI",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td>
//                 <label for="" class="form-label">
//                   Foreign Institutional Investment (FII)
//                 </label>
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={formData.ShareholdersFunds.Foreign.FII || ""}
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "ShareholdersFunds.Foreign.FII",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td>
//                 <label for="" class="form-label">
//                   Foreign Promoter
//                 </label>
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.ShareholdersFunds.Foreign.ForeignPromoter || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "ShareholdersFunds.Foreign.ForeignPromoter",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td>
//                 <label for="" class="form-label">
//                   Others
//                 </label>
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={formData.ShareholdersFunds.Foreign.Others || ""}
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "ShareholdersFunds.Foreign.Others",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td>
//                 <label for="" class="form-label">
//                   Domestic (Total)
//                 </label>
//               </td>
//               <td>
//                 {/* formData.ShareholdersFunds.Domestic.Total */}
//                 <b style={{ display: "flex", justifyContent: "center" }}>
//                   {formData.ShareholdersFunds.Domestic.Total || 0}
//                 </b>
//               </td>
//             </tr>

//             <tr>
//               <td>
//                 <label for="" class="form-label">
//                   Domestic Promoter
//                 </label>
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.ShareholdersFunds.Domestic.DomesticPromoter || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "ShareholdersFunds.Domestic.DomesticPromoter",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td>
//                 <label for="" class="form-label">
//                   Others
//                 </label>
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={formData.ShareholdersFunds.Domestic.Others || ""}
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "ShareholdersFunds.Domestic.Others",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>

//             {/* sub heading */}

//             {/* sub heading */}
//             <br />
//             <tr class="blue-row">
//               <td style={{ backgroundColor: "#1f4a90" }}>
//                 Amount of fresh equity received during the Quarter (Rs)
//               </td>
//               <td style={{ backgroundColor: "#1f4a90" }}>
//                 {selectedMonthName
//                   ? selectedMonthName
//                   : ""}
//               </td>            </tr>

//             <tr>
//               <td>
//                 <label for="" class="form-label">
//                   Total
//                 </label>
//               </td>
//               <td>
//                 {/* FreshEquityReceived.Total */}
//                 <b style={{ display: "flex", justifyContent: "center" }}>{formData.FreshEquityReceived.Total || 0}</b>
//               </td>
//             </tr>

//             <tr>
//               <td>
//                 <label for="" class="form-label">
//                   Foreign
//                 </label>
//               </td>
//               <td>
//                 {/* FreshEquityReceived.Foreign.Total */}
//                 <b style={{ display: "flex", justifyContent: "center" }}>{formData.FreshEquityReceived.Foreign.Total || 0}</b>
//               </td>
//             </tr>

//             {/* sub heading */}
//             <tr class="blue-r">
//               <td>Foreign Direct Investment (FDI)</td>
//               <td>
//                 {" "}
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={formData.FreshEquityReceived.Foreign.FDI || ""}
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "FreshEquityReceived.Foreign.FDI",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td>
//                 <label for="" class="form-label">
//                   Foreign portfolio investment (FPI)
//                 </label>
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={formData.FreshEquityReceived.Foreign.FPI || ""}
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "FreshEquityReceived.Foreign.FPI",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td>
//                 <label for="" class="form-label">
//                   Foreign Institutional Investment (FII){" "}
//                 </label>
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={formData.FreshEquityReceived.Foreign.FII || ""}
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "FreshEquityReceived.Foreign.FII",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td>
//                 <label for="" class="form-label">
//                   Promoter
//                 </label>
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.FreshEquityReceived.Foreign.ForeignPromoter || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "FreshEquityReceived.Foreign.ForeignPromoter",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td>
//                 <label for="" class="form-label">
//                   Others
//                 </label>
//               </td>
//               {/* this field is not in api */}
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={formData.FreshEquityReceived.Foreign.Others || ""}
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "FreshEquityReceived.Foreign.Others",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>

//             {/* sub heading */}
//             <tr style={{ backgroundColor: "#f4a90" }}>
//               <td>Domestic (Total)</td>
//               <td>
//                 {/*here :  formData.FreshEquityReceived.Domestic.Total */}
//                 <b style={{ display: "flex", justifyContent: "center" }}>{formData.FreshEquityReceived.Domestic.Total || 0}</b>
//               </td>
//             </tr>

//             <tr>
//               <td>
//                 <label for="" class="form-label">
//                   Domestic Promoter
//                 </label>
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={
//                     formData.FreshEquityReceived.Domestic.DomesticPromoter || ""
//                   }
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "FreshEquityReceived.Domestic.DomesticPromoter",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td>
//                 <label for="" class="form-label">
//                   Others
//                 </label>
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   value={formData.FreshEquityReceived.Domestic.Others || ""}
//                   onChange={(e) =>
//                     handleNestedChange(
//                       "FreshEquityReceived.Domestic.Others",
//                       e.target.value
//                     )
//                   }
//                 />
//               </td>
//             </tr>
//           </tbody>
//         </table>

//         {/* details of existing equity table */}
//         <label>Choose number of rows : </label>
//         {/* <select onChange={(e) => setDetailOfExistingNums(e.target.value)}>
//           {[...Array(150)].map((_, i) => (
//             <option value={i + 1} key={i + 1}>
//               {i + 1}
//             </option>
//           ))}
//         </select> */}
//         <select
//           onChange={(e) => {
//             setDetailOfExistingNums(Number(e.target.value));
//             handleRowCountChange(e, "ExistingEquityProviders");
//           }}
//           value={detailOfExistingNums}
//         >
//           {[...Array(150)].map((_, i) => (
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
//               <th colSpan={3}>
//                 Details of existing equity    <td style={{ backgroundColor: "#1f4a90" }}>
//               {selectedMonthName
//                   ? selectedMonthName
//                   : ""}
//               </td>
//               </th>
//             </tr>
//             <tr className="pink-row">
//               <th>Equity provider</th>
//               <th>Type</th>
//               <th>Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {formData.ExistingEquityProviders.length > 0 &&
//               formData.ExistingEquityProviders.map((provider, index) => (
//                 <tr key={index}>
//                   <td>
//                     <input
//                       type="text"
//                       class="form-control"
//                       value={provider.Name}
//                       onChange={(e) =>
//                         handleInputChange(
//                           index,
//                           "Name",
//                           e.target.value,
//                           "ExistingEquityProviders"
//                         )
//                       }
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       class="form-control"
//                       value={provider.Type}
//                       onChange={(e) =>
//                         handleInputChange(
//                           index,
//                           "Type",
//                           e.target.value,
//                           "ExistingEquityProviders"
//                         )
//                       }
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       class="form-control"
//                       value={provider.AmountReported}
//                       onChange={(e) =>
//                         handleInputChange(
//                           index,
//                           "AmountReported",
//                           e.target.value,
//                           "ExistingEquityProviders"
//                         )
//                       }
//                     />
//                   </td>
//                 </tr>
//               ))}
//           </tbody>

//           {/* <tbody>
//             {Array.from({ length: detailOfExistingNums }).map((_, index) => (
//               <tr key={index}>
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

//         {/*  Details of fresh equity received during the quarter (1 Oct 2024
//                 - 31 Dec 2024) */}

//         <label>Choose number of rows : </label>
//         {/* <select onChange={(e) => setDetailOfFreshNums(e.target.value)}>
//           {[...Array(150)].map((_, i) => (
//             <option value={i + 1} key={i + 1}>
//               {i + 1}
//             </option>
//           ))}
//         </select> */}
//         <select
//           onChange={(e) => {
//             setDetailOfFreshNums(Number(e.target.value));
//             handleRowCountChange(e, "equityreceivedExistingEquityProviders");
//           }}
//           value={detailOfFreshNums}
//         >
//           {[...Array(150)].map((_, i) => (
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
//               <th colSpan={3}>
//                 Details of fresh equity received during the quarter  <td style={{ backgroundColor: "#1f4a90" }}>
//               {selectedMonthName
//                   ? selectedMonthName
//                   : ""}
//               </td>
//               </th>
//             </tr>
//             <tr className="pink-row">
//               <th>Equity provider</th>
//               <th>Type</th>
//               <th>Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {formData.equityreceivedExistingEquityProviders.length &&
//               formData.equityreceivedExistingEquityProviders.map(
//                 (provider, index) => (
//                   <tr key={index}>
//                     <td>
//                       <input
//                         type="text"
//                         class="form-control"
//                         value={provider.Name}
//                         onChange={(e) =>
//                           handleInputChange(
//                             index,
//                             "Name",
//                             e.target.value,
//                             "equityreceivedExistingEquityProviders"
//                           )
//                         }
//                       />
//                     </td>
//                     <td>
//                       <input
//                         type="text"
//                         class="form-control"
//                         value={provider.Type}
//                         onChange={(e) =>
//                           handleInputChange(
//                             index,
//                             "Type",
//                             e.target.value,
//                             "equityreceivedExistingEquityProviders"
//                           )
//                         }
//                       />
//                     </td>
//                     <td>
//                       <input
//                         type="text"
//                         class="form-control"
//                         value={provider.AmountReported}
//                         onChange={(e) =>
//                           handleInputChange(
//                             index,
//                             "AmountReported",
//                             e.target.value,
//                             "equityreceivedExistingEquityProviders"
//                           )
//                         }
//                       />
//                     </td>
//                   </tr>
//                 )
//               )}
//           </tbody>
//           {/* <tbody>
//             {Array.from({ length: detailOfFreshNums }).map((_, index) => (
//               <tr key={index}>
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

//         {/*  Details of equity bought back/redeemed during the quarter (1 Oct
//                 2024 - 31 Dec 2024) */}
//         <label>Choose number of rows : </label>
//         {/* <select onChange={(e) => setDetailOfEquityNums(e.target.value)}>
//           {[...Array(150)].map((_, i) => (
//             <option value={i + 1} key={i + 1}>
//               {i + 1}
//             </option>
//           ))}
//         </select> */}
//         <select
//           onChange={(e) => {
//             setDetailOfEquityNums(Number(e.target.value));
//             handleRowCountChange(e, "equityboughtExistingEquityProviders");
//           }}
//           value={detailOfEquityNums}
//         >
//           {[...Array(150)].map((_, i) => (
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
//               <th colSpan={3}>
//                 Details of equity bought back/redeemed during the quarter  <td style={{ backgroundColor: "#1f4a90" }}>
//               {selectedMonthName
//                   ? selectedMonthName
//                   : ""}
//               </td>
//               </th>
//             </tr>
//             <tr className="pink-row">
//               <th>Equity provider</th>
//               <th>Type</th>
//               <th>Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {formData.equityboughtExistingEquityProviders.length &&
//               formData.equityboughtExistingEquityProviders.map(
//                 (provider, index) => (
//                   <tr key={index}>
//                     <td>
//                       <input
//                         type="text"
//                         class="form-control"
//                         value={provider.Name}
//                         onChange={(e) =>
//                           handleInputChange(
//                             index,
//                             "Name",
//                             e.target.value,
//                             "equityboughtExistingEquityProviders"
//                           )
//                         }
//                       />
//                     </td>
//                     <td>
//                       <input
//                         type="text"
//                         class="form-control"
//                         value={provider.Type}
//                         onChange={(e) =>
//                           handleInputChange(
//                             index,
//                             "Type",
//                             e.target.value,
//                             "equityboughtExistingEquityProviders"
//                           )
//                         }
//                       />
//                     </td>
//                     <td>
//                       <input
//                         type="text"
//                         class="form-control"
//                         value={provider.AmountReported}
//                         onChange={(e) =>
//                           handleInputChange(
//                             index,
//                             "AmountReported",
//                             e.target.value,
//                             "equityboughtExistingEquityProviders"
//                           )
//                         }
//                       />
//                     </td>
//                   </tr>
//                 )
//               )}
//           </tbody>
//           {/* <tbody>
//             {Array.from({ length: detailOfEquityNums }).map((_, index) => (
//               <tr key={index}>
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
//       </form>
//     </div>
//   );
// }
// export default Equity;
// import "./Equity.css";
// import { loadUserFormData } from "../utils/StorageHelper";
// import React, { useState } from "react";

// function Equity({
//   formData,
//   handleChange,
//   handleNestedChange,
//   handleRowCountChange,
//   handleInputChange,
//   setFormData,
//   selectedMonthName,        
//   setSelectedMonthName
// }) {
//   const [detailOfExistingNums, setDetailOfExistingNums] = useState(() => {
//     const storedData = loadUserFormData();
//     return storedData.ExistingEquityProviders
//       ? storedData.ExistingEquityProviders.length
//       : 1;
//   });

//   const [detailOfFreshNums, setDetailOfFreshNums] = useState(() => {
//     const storedData = loadUserFormData();
//     return storedData.equityreceivedExistingEquityProviders
//       ? storedData.equityreceivedExistingEquityProviders.length
//       : 1;
//   });

//   const [detailOfEquityNums, setDetailOfEquityNums] = useState(() => {
//     const storedData = loadUserFormData();
//     return storedData.equityboughtExistingEquityProviders
//       ? storedData.equityboughtExistingEquityProviders.length
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
//             {date}
//           </span>
//         )}
//       </div>
//     </div>
//   );

//   // Calculated field component matching Overview
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

//   // FormInput component matching Overview
//   const FormInput = ({ label, value, section, field, readOnly = false }) => (
//     <div style={{ marginBottom: "20px" }}>
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
//           backgroundColor: readOnly ? "#f9fafb" : "#ffffff",
//           cursor: readOnly ? "not-allowed" : "text"
//         }}
//         value={value || ""}
//         readOnly={readOnly}
//         onChange={(e) => {
//           if (section) {
//             handleChange(section, field, e.target.value);
//           } else {
//             handleNestedChange(field, e.target.value);
//           }
//         }}
//         onFocus={(e) => { if (!readOnly) e.target.style.borderColor = "#2B60AD"; }}
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

//       {/* SHAREHOLDERS' FUNDS SECTION */}
//       <SectionHeader title="Shareholders' Funds" date={selectedMonthName} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "24px",
//         borderRadius: "0 0 10px 10px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//         marginBottom: "8px"
//       }}>
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(2, 1fr)",
//           gap: "20px",
//         }}>
//           <FormInput 
//             label="Share Capital (INR)" 
//             value={formData.ShareholdersFunds.ShareCapital}
//             section="ShareholdersFunds"
//             field="ShareCapital"
//             readOnly
//           />
//           <FormInput 
//             label="Reserves and Surplus (INR)" 
//             value={formData.ShareholdersFunds.ReservesAndSurplus}
//             section="ShareholdersFunds"
//             field="ReservesAndSurplus"
//             readOnly
//           />
//         </div>

//         <CalculatedField 
//           label="Share of Equity (INR)" 
//           value={formData.ShareholdersFunds.ShareOfEquity}
//         />

//         <CalculatedField 
//           label="Foreign (Total)" 
//           value={formData.ShareholdersFunds.Foreign.Total}
//         />

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(2, 1fr)",
//           gap: "20px",
//           marginBottom: "16px"
//         }}>
//           <FormInput 
//             label="Foreign Direct Investment (FDI)" 
//             value={formData.ShareholdersFunds.Foreign.FDI}
//             field="ShareholdersFunds.Foreign.FDI"
//           />
//           <FormInput 
//             label="Foreign Portfolio Investment (FPI)" 
//             value={formData.ShareholdersFunds.Foreign.FPI}
//             field="ShareholdersFunds.Foreign.FPI"
//           />
//           <FormInput 
//             label="Foreign Institutional Investment (FII)" 
//             value={formData.ShareholdersFunds.Foreign.FII}
//             field="ShareholdersFunds.Foreign.FII"
//           />
//           <FormInput 
//             label="Foreign Promoter" 
//             value={formData.ShareholdersFunds.Foreign.ForeignPromoter}
//             field="ShareholdersFunds.Foreign.ForeignPromoter"
//           />
//         </div>

//         <FormInput 
//           label="Others" 
//           value={formData.ShareholdersFunds.Foreign.Others}
//           field="ShareholdersFunds.Foreign.Others"
//         />

//         <CalculatedField 
//           label="Domestic (Total)" 
//           value={formData.ShareholdersFunds.Domestic.Total}
//         />

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(2, 1fr)",
//           gap: "20px",
//         }}>
//           <FormInput 
//             label="Domestic Promoter" 
//             value={formData.ShareholdersFunds.Domestic.DomesticPromoter}
//             field="ShareholdersFunds.Domestic.DomesticPromoter"
//           />
//           <FormInput 
//             label="Others" 
//             value={formData.ShareholdersFunds.Domestic.Others}
//             field="ShareholdersFunds.Domestic.Others"
//           />
//         </div>
//       </div>

//       {/* FRESH EQUITY RECEIVED SECTION */}
//       <SectionHeader title="Amount of Fresh Equity Received During the Quarter" date={selectedMonthName} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "24px",
//         borderRadius: "0 0 10px 10px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//         marginBottom: "8px"
//       }}>
//         <CalculatedField 
//           label="Total (INR)" 
//           value={formData.FreshEquityReceived.Total}
//         />

//         <CalculatedField 
//           label="Foreign (Total)" 
//           value={formData.FreshEquityReceived.Foreign.Total}
//         />

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(2, 1fr)",
//           gap: "20px",
//           marginBottom: "16px"
//         }}>
//           <FormInput 
//             label="Foreign Direct Investment (FDI)" 
//             value={formData.FreshEquityReceived.Foreign.FDI}
//             field="FreshEquityReceived.Foreign.FDI"
//           />
//           <FormInput 
//             label="Foreign Portfolio Investment (FPI)" 
//             value={formData.FreshEquityReceived.Foreign.FPI}
//             field="FreshEquityReceived.Foreign.FPI"
//           />
//           <FormInput 
//             label="Foreign Institutional Investment (FII)" 
//             value={formData.FreshEquityReceived.Foreign.FII}
//             field="FreshEquityReceived.Foreign.FII"
//           />
//           <FormInput 
//             label="Foreign Promoter" 
//             value={formData.FreshEquityReceived.Foreign.ForeignPromoter}
//             field="FreshEquityReceived.Foreign.ForeignPromoter"
//           />
//         </div>

//         <FormInput 
//           label="Others" 
//           value={formData.FreshEquityReceived.Foreign.Others}
//           field="FreshEquityReceived.Foreign.Others"
//         />

//         <CalculatedField 
//           label="Domestic (Total)" 
//           value={formData.FreshEquityReceived.Domestic.Total}
//         />

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(2, 1fr)",
//           gap: "20px",
//         }}>
//           <FormInput 
//             label="Domestic Promoter" 
//             value={formData.FreshEquityReceived.Domestic.DomesticPromoter}
//             field="FreshEquityReceived.Domestic.DomesticPromoter"
//           />
//           <FormInput 
//             label="Others" 
//             value={formData.FreshEquityReceived.Domestic.Others}
//             field="FreshEquityReceived.Domestic.Others"
//           />
//         </div>
//       </div>

//       {/* DETAILS OF EXISTING EQUITY */}
//       <SectionHeader title="Details of Existing Equity" date={selectedMonthName} />
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
//             onChange={(e) => {
//               setDetailOfExistingNums(Number(e.target.value));
//               handleRowCountChange(e, "ExistingEquityProviders");
//             }}
//             value={detailOfExistingNums}
//           >
//             {[...Array(150)].map((_, i) => (
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
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Equity Provider</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Type</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Amount (INR)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {formData.ExistingEquityProviders.length > 0 &&
//                 formData.ExistingEquityProviders.map((provider, index) => (
//                   <tr key={index} style={{
//                     borderBottom: "1px solid #f3f4f6",
//                     backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9fafb"
//                   }}>
//                     <td style={{ padding: "12px 16px" }}>
//                       <input
//                         type="text"
//                         style={{
//                           width: "100%",
//                           height: "36px",
//                           padding: "0 10px",
//                           border: "1px solid #e5e7eb",
//                           borderRadius: "6px",
//                           fontSize: "13px",
//                           fontWeight: "500",
//                           color: "#111827",
//                           outline: "none",
//                           transition: "border 0.2s",
//                           backgroundColor: "#ffffff"
//                         }}
//                         value={provider.Name}
//                         onChange={(e) =>
//                           handleInputChange(
//                             index,
//                             "Name",
//                             e.target.value,
//                             "ExistingEquityProviders"
//                           )
//                         }
//                         onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                         onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                       />
//                     </td>
//                     <td style={{ padding: "12px 16px" }}>
//                       <input
//                         type="text"
//                         style={{
//                           width: "100%",
//                           height: "36px",
//                           padding: "0 10px",
//                           border: "1px solid #e5e7eb",
//                           borderRadius: "6px",
//                           fontSize: "13px",
//                           fontWeight: "500",
//                           color: "#111827",
//                           outline: "none",
//                           transition: "border 0.2s",
//                           backgroundColor: "#ffffff"
//                         }}
//                         value={provider.Type}
//                         onChange={(e) =>
//                           handleInputChange(
//                             index,
//                             "Type",
//                             e.target.value,
//                             "ExistingEquityProviders"
//                           )
//                         }
//                         onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                         onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                       />
//                     </td>
//                     <td style={{ padding: "12px 16px" }}>
//                       <input
//                         type="text"
//                         style={{
//                           width: "100%",
//                           height: "36px",
//                           padding: "0 10px",
//                           border: "1px solid #e5e7eb",
//                           borderRadius: "6px",
//                           fontSize: "13px",
//                           fontWeight: "500",
//                           color: "#111827",
//                           outline: "none",
//                           transition: "border 0.2s",
//                           backgroundColor: "#ffffff"
//                         }}
//                         value={provider.AmountReported}
//                         onChange={(e) =>
//                           handleInputChange(
//                             index,
//                             "AmountReported",
//                             e.target.value,
//                             "ExistingEquityProviders"
//                           )
//                         }
//                         onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                         onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                       />
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* DETAILS OF FRESH EQUITY RECEIVED */}
//       <SectionHeader title="Details of Fresh Equity Received During the Quarter" date={selectedMonthName} />
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
//             onChange={(e) => {
//               setDetailOfFreshNums(Number(e.target.value));
//               handleRowCountChange(e, "equityreceivedExistingEquityProviders");
//             }}
//             value={detailOfFreshNums}
//           >
//             {[...Array(150)].map((_, i) => (
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
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Equity Provider</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Type</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Amount (INR)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {formData.equityreceivedExistingEquityProviders.length &&
//                 formData.equityreceivedExistingEquityProviders.map(
//                   (provider, index) => (
//                     <tr key={index} style={{
//                       borderBottom: "1px solid #f3f4f6",
//                       backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9fafb"
//                     }}>
//                       <td style={{ padding: "12px 16px" }}>
//                         <input
//                           type="text"
//                           style={{
//                             width: "100%",
//                             height: "36px",
//                             padding: "0 10px",
//                             border: "1px solid #e5e7eb",
//                             borderRadius: "6px",
//                             fontSize: "13px",
//                             fontWeight: "500",
//                             color: "#111827",
//                             outline: "none",
//                             transition: "border 0.2s",
//                             backgroundColor: "#ffffff"
//                           }}
//                           value={provider.Name}
//                           onChange={(e) =>
//                             handleInputChange(
//                               index,
//                               "Name",
//                               e.target.value,
//                               "equityreceivedExistingEquityProviders"
//                             )
//                           }
//                           onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                           onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                         />
//                       </td>
//                       <td style={{ padding: "12px 16px" }}>
//                         <input
//                           type="text"
//                           style={{
//                             width: "100%",
//                             height: "36px",
//                             padding: "0 10px",
//                             border: "1px solid #e5e7eb",
//                             borderRadius: "6px",
//                             fontSize: "13px",
//                             fontWeight: "500",
//                             color: "#111827",
//                             outline: "none",
//                             transition: "border 0.2s",
//                             backgroundColor: "#ffffff"
//                           }}
//                           value={provider.Type}
//                           onChange={(e) =>
//                             handleInputChange(
//                               index,
//                               "Type",
//                               e.target.value,
//                               "equityreceivedExistingEquityProviders"
//                             )
//                           }
//                           onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                           onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                         />
//                       </td>
//                       <td style={{ padding: "12px 16px" }}>
//                         <input
//                           type="text"
//                           style={{
//                             width: "100%",
//                             height: "36px",
//                             padding: "0 10px",
//                             border: "1px solid #e5e7eb",
//                             borderRadius: "6px",
//                             fontSize: "13px",
//                             fontWeight: "500",
//                             color: "#111827",
//                             outline: "none",
//                             transition: "border 0.2s",
//                             backgroundColor: "#ffffff"
//                           }}
//                           value={provider.AmountReported}
//                           onChange={(e) =>
//                             handleInputChange(
//                               index,
//                               "AmountReported",
//                               e.target.value,
//                               "equityreceivedExistingEquityProviders"
//                             )
//                           }
//                           onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                           onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                         />
//                       </td>
//                     </tr>
//                   )
//                 )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* DETAILS OF EQUITY BOUGHT BACK */}
//       <SectionHeader title="Details of Equity Bought Back/Redeemed During the Quarter" date={selectedMonthName} />
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
//             onChange={(e) => {
//               setDetailOfEquityNums(Number(e.target.value));
//               handleRowCountChange(e, "equityboughtExistingEquityProviders");
//             }}
//             value={detailOfEquityNums}
//           >
//             {[...Array(150)].map((_, i) => (
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
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Equity Provider</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Type</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Amount (INR)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {formData.equityboughtExistingEquityProviders.length &&
//                 formData.equityboughtExistingEquityProviders.map(
//                   (provider, index) => (
//                     <tr key={index} style={{
//                       borderBottom: "1px solid #f3f4f6",
//                       backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9fafb"
//                     }}>
//                       <td style={{ padding: "12px 16px" }}>
//                         <input
//                           type="text"
//                           style={{
//                             width: "100%",
//                             height: "36px",
//                             padding: "0 10px",
//                             border: "1px solid #e5e7eb",
//                             borderRadius: "6px",
//                             fontSize: "13px",
//                             fontWeight: "500",
//                             color: "#111827",
//                             outline: "none",
//                             transition: "border 0.2s",
//                             backgroundColor: "#ffffff"
//                           }}
//                           value={provider.Name}
//                           onChange={(e) =>
//                             handleInputChange(
//                               index,
//                               "Name",
//                               e.target.value,
//                               "equityboughtExistingEquityProviders"
//                             )
//                           }
//                           onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                           onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                         />
//                       </td>
//                       <td style={{ padding: "12px 16px" }}>
//                         <input
//                           type="text"
//                           style={{
//                             width: "100%",
//                             height: "36px",
//                             padding: "0 10px",
//                             border: "1px solid #e5e7eb",
//                             borderRadius: "6px",
//                             fontSize: "13px",
//                             fontWeight: "500",
//                             color: "#111827",
//                             outline: "none",
//                             transition: "border 0.2s",
//                             backgroundColor: "#ffffff"
//                           }}
//                           value={provider.Type}
//                           onChange={(e) =>
//                             handleInputChange(
//                               index,
//                               "Type",
//                               e.target.value,
//                               "equityboughtExistingEquityProviders"
//                             )
//                           }
//                           onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                           onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                         />
//                       </td>
//                       <td style={{ padding: "12px 16px" }}>
//                         <input
//                           type="text"
//                           style={{
//                             width: "100%",
//                             height: "36px",
//                             padding: "0 10px",
//                             border: "1px solid #e5e7eb",
//                             borderRadius: "6px",
//                             fontSize: "13px",
//                             fontWeight: "500",
//                             color: "#111827",
//                             outline: "none",
//                             transition: "border 0.2s",
//                             backgroundColor: "#ffffff"
//                           }}
//                           value={provider.AmountReported}
//                           onChange={(e) =>
//                             handleInputChange(
//                               index,
//                               "AmountReported",
//                               e.target.value,
//                               "equityboughtExistingEquityProviders"
//                             )
//                           }
//                           onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                           onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                         />
//                       </td>
//                     </tr>
//                   )
//                 )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Equity;

// import "./Equity.css";
// import { loadUserFormData } from "../utils/StorageHelper";
// import React, { useState } from "react";

// function Equity({
//   formData,
//   handleChange,
//   handleNestedChange,
//   handleRowCountChange,
//   handleInputChange,
//   setFormData,
//   selectedMonthName,        
//   setSelectedMonthName
// }) {
//   const [detailOfExistingNums, setDetailOfExistingNums] = useState(() => {
//     const storedData = loadUserFormData();
//     return storedData.ExistingEquityProviders
//       ? storedData.ExistingEquityProviders.length
//       : 1;
//   });

//   const [detailOfFreshNums, setDetailOfFreshNums] = useState(() => {
//     const storedData = loadUserFormData();
//     return storedData.equityreceivedExistingEquityProviders
//       ? storedData.equityreceivedExistingEquityProviders.length
//       : 1;
//   });

//   const [detailOfEquityNums, setDetailOfEquityNums] = useState(() => {
//     const storedData = loadUserFormData();
//     return storedData.equityboughtExistingEquityProviders
//       ? storedData.equityboughtExistingEquityProviders.length
//       : 1;
//   });

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

//   // FormInput component - compact
//   const FormInput = ({ label, value, section, field, readOnly = false }) => (
//     <div>
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
//           backgroundColor: readOnly ? "#f9fafb" : "#ffffff",
//           cursor: readOnly ? "not-allowed" : "text",
//           textAlign: "left"
//         }}
//         value={value || ""}
//         readOnly={readOnly}
//         onChange={(e) => {
//           if (section) {
//             handleChange(section, field, e.target.value);
//           } else {
//             handleNestedChange(field, e.target.value);
//           }
//         }}
//         onFocus={(e) => { if (!readOnly) e.target.style.borderColor = "#2B60AD"; }}
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

//       {/* SHAREHOLDERS' FUNDS SECTION */}
//       <SectionHeader title="Shareholders' Funds" date={selectedMonthName} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "16px",
//         borderRadius: "0 0 8px 8px",
//         boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
//         marginBottom: "4px"
//       }}>
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px",
//           marginBottom: "10px"
//         }}>
//           <FormInput 
//             label="Share Capital (INR)" 
//             value={formData.ShareholdersFunds.ShareCapital}
//             section="ShareholdersFunds"
//             field="ShareCapital"
//             readOnly
//           />
//           <FormInput 
//             label="Reserves and Surplus (INR)" 
//             value={formData.ShareholdersFunds.ReservesAndSurplus}
//             section="ShareholdersFunds"
//             field="ReservesAndSurplus"
//             readOnly
//           />
//         </div>

//         <CalculatedField 
//           label="Share of Equity (INR)" 
//           value={formData.ShareholdersFunds.ShareOfEquity}
//         />

//         <CalculatedField 
//           label="Foreign (Total)" 
//           value={formData.ShareholdersFunds.Foreign.Total}
//         />

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px",
//           marginBottom: "10px"
//         }}>
//           <FormInput 
//             label="Foreign Direct Investment (FDI)" 
//             value={formData.ShareholdersFunds.Foreign.FDI}
//             field="ShareholdersFunds.Foreign.FDI"
//           />
//           <FormInput 
//             label="Foreign Portfolio Investment (FPI)" 
//             value={formData.ShareholdersFunds.Foreign.FPI}
//             field="ShareholdersFunds.Foreign.FPI"
//           />
//           <FormInput 
//             label="Foreign Institutional Investment (FII)" 
//             value={formData.ShareholdersFunds.Foreign.FII}
//             field="ShareholdersFunds.Foreign.FII"
//           />
//           <FormInput 
//             label="Foreign Promoter" 
//             value={formData.ShareholdersFunds.Foreign.ForeignPromoter}
//             field="ShareholdersFunds.Foreign.ForeignPromoter"
//           />
//         </div>

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px",
//           marginBottom: "10px"
//         }}>
//           <FormInput 
//             label="Others" 
//             value={formData.ShareholdersFunds.Foreign.Others}
//             field="ShareholdersFunds.Foreign.Others"
//           />
//         </div>

//         <CalculatedField 
//           label="Domestic (Total)" 
//           value={formData.ShareholdersFunds.Domestic.Total}
//         />

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px",
//         }}>
//           <FormInput 
//             label="Domestic Promoter" 
//             value={formData.ShareholdersFunds.Domestic.DomesticPromoter}
//             field="ShareholdersFunds.Domestic.DomesticPromoter"
//           />
//           <FormInput 
//             label="Others" 
//             value={formData.ShareholdersFunds.Domestic.Others}
//             field="ShareholdersFunds.Domestic.Others"
//           />
//         </div>
//       </div>

//       {/* FRESH EQUITY RECEIVED SECTION */}
//       <SectionHeader title="Amount of Fresh Equity Received During the Quarter" date={selectedMonthName} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "16px",
//         borderRadius: "0 0 8px 8px",
//         boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
//         marginBottom: "4px"
//       }}>
//         <CalculatedField 
//           label="Total (INR)" 
//           value={formData.FreshEquityReceived.Total}
//         />

//         <CalculatedField 
//           label="Foreign (Total)" 
//           value={formData.FreshEquityReceived.Foreign.Total}
//         />

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px",
//           marginBottom: "10px"
//         }}>
//           <FormInput 
//             label="Foreign Direct Investment (FDI)" 
//             value={formData.FreshEquityReceived.Foreign.FDI}
//             field="FreshEquityReceived.Foreign.FDI"
//           />
//           <FormInput 
//             label="Foreign Portfolio Investment (FPI)" 
//             value={formData.FreshEquityReceived.Foreign.FPI}
//             field="FreshEquityReceived.Foreign.FPI"
//           />
//           <FormInput 
//             label="Foreign Institutional Investment (FII)" 
//             value={formData.FreshEquityReceived.Foreign.FII}
//             field="FreshEquityReceived.Foreign.FII"
//           />
//           <FormInput 
//             label="Foreign Promoter" 
//             value={formData.FreshEquityReceived.Foreign.ForeignPromoter}
//             field="FreshEquityReceived.Foreign.ForeignPromoter"
//           />
//         </div>

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px",
//           marginBottom: "10px"
//         }}>
//           <FormInput 
//             label="Others" 
//             value={formData.FreshEquityReceived.Foreign.Others}
//             field="FreshEquityReceived.Foreign.Others"
//           />
//         </div>

//         <CalculatedField 
//           label="Domestic (Total)" 
//           value={formData.FreshEquityReceived.Domestic.Total}
//         />

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "12px",
//         }}>
//           <FormInput 
//             label="Domestic Promoter" 
//             value={formData.FreshEquityReceived.Domestic.DomesticPromoter}
//             field="FreshEquityReceived.Domestic.DomesticPromoter"
//           />
//           <FormInput 
//             label="Others" 
//             value={formData.FreshEquityReceived.Domestic.Others}
//             field="FreshEquityReceived.Domestic.Others"
//           />
//         </div>
//       </div>

//       {/* DETAILS OF EXISTING EQUITY */}
//       <SectionHeader title="Details of Existing Equity" date={selectedMonthName} />
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
//             onChange={(e) => {
//               setDetailOfExistingNums(Number(e.target.value));
//               handleRowCountChange(e, "ExistingEquityProviders");
//             }}
//             value={detailOfExistingNums}
//           >
//             {[...Array(150)].map((_, i) => (
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
//                   letterSpacing: "0.4px"
//                 }}>Equity Provider</th>
//                 <th style={{
//                   padding: "10px 12px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "11px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.4px"
//                 }}>Type</th>
//                 <th style={{
//                   padding: "10px 12px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "11px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.4px"
//                 }}>Amount (INR)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {formData.ExistingEquityProviders.length > 0 &&
//                 formData.ExistingEquityProviders.map((provider, index) => (
//                   <tr key={index} style={{
//                     borderBottom: "1px solid #f3f4f6",
//                     backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9fafb"
//                   }}>
//                     <td style={{ padding: "8px 12px" }}>
//                       <input
//                         type="text"
//                         style={{
//                           width: "100%",
//                           height: "32px",
//                           padding: "0 8px",
//                           border: "1px solid #e5e7eb",
//                           borderRadius: "5px",
//                           fontSize: "12px",
//                           fontWeight: "500",
//                           color: "#111827",
//                           outline: "none",
//                           transition: "border 0.2s",
//                           backgroundColor: "#ffffff",
//                           textAlign: "left"
//                         }}
//                         value={provider.Name}
//                         onChange={(e) =>
//                           handleInputChange(
//                             index,
//                             "Name",
//                             e.target.value,
//                             "ExistingEquityProviders"
//                           )
//                         }
//                         onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                         onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                       />
//                     </td>
//                     <td style={{ padding: "8px 12px" }}>
//                       <input
//                         type="text"
//                         style={{
//                           width: "100%",
//                           height: "32px",
//                           padding: "0 8px",
//                           border: "1px solid #e5e7eb",
//                           borderRadius: "5px",
//                           fontSize: "12px",
//                           fontWeight: "500",
//                           color: "#111827",
//                           outline: "none",
//                           transition: "border 0.2s",
//                           backgroundColor: "#ffffff",
//                           textAlign: "left"
//                         }}
//                         value={provider.Type}
//                         onChange={(e) =>
//                           handleInputChange(
//                             index,
//                             "Type",
//                             e.target.value,
//                             "ExistingEquityProviders"
//                           )
//                         }
//                         onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                         onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                       />
//                     </td>
//                     <td style={{ padding: "8px 12px" }}>
//                       <input
//                         type="text"
//                         style={{
//                           width: "100%",
//                           height: "32px",
//                           padding: "0 8px",
//                           border: "1px solid #e5e7eb",
//                           borderRadius: "5px",
//                           fontSize: "12px",
//                           fontWeight: "500",
//                           color: "#111827",
//                           outline: "none",
//                           transition: "border 0.2s",
//                           backgroundColor: "#ffffff",
//                           textAlign: "left"
//                         }}
//                         value={provider.AmountReported}
//                         onChange={(e) =>
//                           handleInputChange(
//                             index,
//                             "AmountReported",
//                             e.target.value,
//                             "ExistingEquityProviders"
//                           )
//                         }
//                         onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                         onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                       />
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* DETAILS OF FRESH EQUITY RECEIVED */}
//       <SectionHeader title="Details of Fresh Equity Received During the Quarter" date={selectedMonthName} />
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
//             onChange={(e) => {
//               setDetailOfFreshNums(Number(e.target.value));
//               handleRowCountChange(e, "equityreceivedExistingEquityProviders");
//             }}
//             value={detailOfFreshNums}
//           >
//             {[...Array(150)].map((_, i) => (
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
//                   letterSpacing: "0.4px"
//                 }}>Equity Provider</th>
//                 <th style={{
//                   padding: "10px 12px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "11px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.4px"
//                 }}>Type</th>
//                 <th style={{
//                   padding: "10px 12px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "11px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.4px"
//                 }}>Amount (INR)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {formData.equityreceivedExistingEquityProviders.length &&
//                 formData.equityreceivedExistingEquityProviders.map(
//                   (provider, index) => (
//                     <tr key={index} style={{
//                       borderBottom: "1px solid #f3f4f6",
//                       backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9fafb"
//                     }}>
//                       <td style={{ padding: "8px 12px" }}>
//                         <input
//                           type="text"
//                           style={{
//                             width: "100%",
//                             height: "32px",
//                             padding: "0 8px",
//                             border: "1px solid #e5e7eb",
//                             borderRadius: "5px",
//                             fontSize: "12px",
//                             fontWeight: "500",
//                             color: "#111827",
//                             outline: "none",
//                             transition: "border 0.2s",
//                             backgroundColor: "#ffffff",
//                             textAlign: "left"
//                           }}
//                           value={provider.Name}
//                           onChange={(e) =>
//                             handleInputChange(
//                               index,
//                               "Name",
//                               e.target.value,
//                               "equityreceivedExistingEquityProviders"
//                             )
//                           }
//                           onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                           onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                         />
//                       </td>
//                       <td style={{ padding: "8px 12px" }}>
//                         <input
//                           type="text"
//                           style={{
//                             width: "100%",
//                             height: "32px",
//                             padding: "0 8px",
//                             border: "1px solid #e5e7eb",
//                             borderRadius: "5px",
//                             fontSize: "12px",
//                             fontWeight: "500",
//                             color: "#111827",
//                             outline: "none",
//                             transition: "border 0.2s",
//                             backgroundColor: "#ffffff",
//                             textAlign: "left"
//                           }}
//                           value={provider.Type}
//                           onChange={(e) =>
//                             handleInputChange(
//                               index,
//                               "Type",
//                               e.target.value,
//                               "equityreceivedExistingEquityProviders"
//                             )
//                           }
//                           onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                           onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                         />
//                       </td>
//                       <td style={{ padding: "8px 12px" }}>
//                         <input
//                           type="text"
//                           style={{
//                             width: "100%",
//                             height: "32px",
//                             padding: "0 8px",
//                             border: "1px solid #e5e7eb",
//                             borderRadius: "5px",
//                             fontSize: "12px",
//                             fontWeight: "500",
//                             color: "#111827",
//                             outline: "none",
//                             transition: "border 0.2s",
//                             backgroundColor: "#ffffff",
//                             textAlign: "left"
//                           }}
//                           value={provider.AmountReported}
//                           onChange={(e) =>
//                             handleInputChange(
//                               index,
//                               "AmountReported",
//                               e.target.value,
//                               "equityreceivedExistingEquityProviders"
//                             )
//                           }
//                           onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                           onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                         />
//                       </td>
//                     </tr>
//                   )
//                 )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* DETAILS OF EQUITY BOUGHT BACK */}
//       <SectionHeader title="Details of Equity Bought Back/Redeemed During the Quarter" date={selectedMonthName} />
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
//             onChange={(e) => {
//               setDetailOfEquityNums(Number(e.target.value));
//               handleRowCountChange(e, "equityboughtExistingEquityProviders");
//             }}
//             value={detailOfEquityNums}
//           >
//             {[...Array(150)].map((_, i) => (
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
//                   letterSpacing: "0.4px"
//                 }}>Equity Provider</th>
//                 <th style={{
//                   padding: "10px 12px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "11px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.4px"
//                 }}>Type</th>
//                 <th style={{
//                   padding: "10px 12px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "11px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.4px"
//                 }}>Amount (INR)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {formData.equityboughtExistingEquityProviders.length &&
//                 formData.equityboughtExistingEquityProviders.map(
//                   (provider, index) => (
//                     <tr key={index} style={{
//                       borderBottom: "1px solid #f3f4f6",
//                       backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9fafb"
//                     }}>
//                       <td style={{ padding: "8px 12px" }}>
//                         <input
//                           type="text"
//                           style={{
//                             width: "100%",
//                             height: "32px",
//                             padding: "0 8px",
//                             border: "1px solid #e5e7eb",
//                             borderRadius: "5px",
//                             fontSize: "12px",
//                             fontWeight: "500",
//                             color: "#111827",
//                             outline: "none",
//                             transition: "border 0.2s",
//                             backgroundColor: "#ffffff",
//                             textAlign: "left"
//                           }}
//                           value={provider.Name}
//                           onChange={(e) =>
//                             handleInputChange(
//                               index,
//                               "Name",
//                               e.target.value,
//                               "equityboughtExistingEquityProviders"
//                             )
//                           }
//                           onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                           onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                         />
//                       </td>
//                       <td style={{ padding: "8px 12px" }}>
//                         <input
//                           type="text"
//                           style={{
//                             width: "100%",
//                             height: "32px",
//                             padding: "0 8px",
//                             border: "1px solid #e5e7eb",
//                             borderRadius: "5px",
//                             fontSize: "12px",
//                             fontWeight: "500",
//                             color: "#111827",
//                             outline: "none",
//                             transition: "border 0.2s",
//                             backgroundColor: "#ffffff",
//                             textAlign: "left"
//                           }}
//                           value={provider.Type}
//                           onChange={(e) =>
//                             handleInputChange(
//                               index,
//                               "Type",
//                               e.target.value,
//                               "equityboughtExistingEquityProviders"
//                             )
//                           }
//                           onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                           onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                         />
//                       </td>
//                       <td style={{ padding: "8px 12px" }}>
//                         <input
//                           type="text"
//                           style={{
//                             width: "100%",
//                             height: "32px",
//                             padding: "0 8px",
//                             border: "1px solid #e5e7eb",
//                             borderRadius: "5px",
//                             fontSize: "12px",
//                             fontWeight: "500",
//                             color: "#111827",
//                             outline: "none",
//                             transition: "border 0.2s",
//                             backgroundColor: "#ffffff",
//                             textAlign: "left"
//                           }}
//                           value={provider.AmountReported}
//                           onChange={(e) =>
//                             handleInputChange(
//                               index,
//                               "AmountReported",
//                               e.target.value,
//                               "equityboughtExistingEquityProviders"
//                             )
//                           }
//                           onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                           onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                         />
//                       </td>
//                     </tr>
//                   )
//                 )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Equity;


import "./Equity.css";
import { loadUserFormData } from "../utils/StorageHelper";
import React, { useState } from "react";

function Equity({
  formData,
  handleChange,
  handleNestedChange,
  handleRowCountChange,
  handleInputChange,
  setFormData,
  selectedMonthName,        
  setSelectedMonthName
}) {
  const [detailOfExistingNums, setDetailOfExistingNums] = useState(function() {
    const storedData = loadUserFormData();
    return storedData.ExistingEquityProviders
      ? storedData.ExistingEquityProviders.length
      : 1;
  });

  const [detailOfFreshNums, setDetailOfFreshNums] = useState(function() {
    const storedData = loadUserFormData();
    return storedData.equityreceivedExistingEquityProviders
      ? storedData.equityreceivedExistingEquityProviders.length
      : 1;
  });

  const [detailOfEquityNums, setDetailOfEquityNums] = useState(function() {
    const storedData = loadUserFormData();
    return storedData.equityboughtExistingEquityProviders
      ? storedData.equityboughtExistingEquityProviders.length
      : 1;
  });

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

  // Calculated field component
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
            textAlign: "left",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
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

  // FormInput component with unique IDs to prevent focus loss
  const FormInput = function({ label, value, section, field, readOnly }) {
    const isReadOnly = readOnly || false;
    const inputId = "input-" + section + "-" + field + "-" + Math.random();
    
    return (
      <div>
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
            textAlign: "left",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
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
            backgroundColor: isReadOnly ? "#F9FAFB" : "#FFFFFF",
            cursor: isReadOnly ? "not-allowed" : "text",
            textAlign: "left",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
          }}
          value={value || ""}
          readOnly={isReadOnly}
          onChange={function(e) {
            if (section) {
              handleChange(section, field, e.target.value);
            } else {
              handleNestedChange(field, e.target.value);
            }
          }}
          onFocus={function(e) { 
            if (!isReadOnly) {
              e.target.style.borderColor = "#39B1AC";
              e.target.style.backgroundColor = "#FFFFFF";
              e.target.style.boxShadow = "0 0 0 3px rgba(57, 177, 172, 0.1)";
            }
          }}
          onBlur={function(e) { 
            e.target.style.borderColor = "#E8E8E8";
            e.target.style.backgroundColor = isReadOnly ? "#F9FAFB" : "#FFFFFF";
            e.target.style.boxShadow = "none";
          }}
        />
      </div>
    );
  };

  // Table input component with unique IDs
  const TableInput = function({ value, onChange, onFocus, onBlur, rowIndex, colName, tableName }) {
    const inputId = "table-" + tableName + "-" + rowIndex + "-" + colName + "-" + Math.random();
    
    return (
      <input
        id={inputId}
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
        value={value}
        onChange={onChange}
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
    );
  };

  return (
    <div style={{
      backgroundColor: "#F7F9FB",
      padding: "20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      minHeight: "100vh"
    }}>

      {/* SHAREHOLDERS' FUNDS SECTION */}
      <SectionHeader title="Shareholders' Funds" date={selectedMonthName} />
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
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px",
          marginBottom: "12px"
        }}>
          <FormInput 
            label="Share Capital (INR)" 
            value={formData.ShareholdersFunds.ShareCapital}
            section="ShareholdersFunds"
            field="ShareCapital"
            readOnly={true}
          />
          <FormInput 
            label="Reserves and Surplus (INR)" 
            value={formData.ShareholdersFunds.ReservesAndSurplus}
            section="ShareholdersFunds"
            field="ReservesAndSurplus"
            readOnly={true}
          />
        </div>

        <CalculatedField 
          label="Share of Equity (INR)" 
          value={formData.ShareholdersFunds.ShareOfEquity}
        />

        <CalculatedField 
          label="Foreign (Total)" 
          value={formData.ShareholdersFunds.Foreign.Total}
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px",
          marginBottom: "12px"
        }}>
          <FormInput 
            label="Foreign Direct Investment (FDI)" 
            value={formData.ShareholdersFunds.Foreign.FDI}
            field="ShareholdersFunds.Foreign.FDI"
          />
          <FormInput 
            label="Foreign Portfolio Investment (FPI)" 
            value={formData.ShareholdersFunds.Foreign.FPI}
            field="ShareholdersFunds.Foreign.FPI"
          />
          <FormInput 
            label="Foreign Institutional Investment (FII)" 
            value={formData.ShareholdersFunds.Foreign.FII}
            field="ShareholdersFunds.Foreign.FII"
          />
          <FormInput 
            label="Foreign Promoter" 
            value={formData.ShareholdersFunds.Foreign.ForeignPromoter}
            field="ShareholdersFunds.Foreign.ForeignPromoter"
          />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px",
          marginBottom: "12px"
        }}>
          <FormInput 
            label="Others" 
            value={formData.ShareholdersFunds.Foreign.Others}
            field="ShareholdersFunds.Foreign.Others"
          />
        </div>

        <CalculatedField 
          label="Domestic (Total)" 
          value={formData.ShareholdersFunds.Domestic.Total}
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px",
        }}>
          <FormInput 
            label="Domestic Promoter" 
            value={formData.ShareholdersFunds.Domestic.DomesticPromoter}
            field="ShareholdersFunds.Domestic.DomesticPromoter"
          />
          <FormInput 
            label="Others" 
            value={formData.ShareholdersFunds.Domestic.Others}
            field="ShareholdersFunds.Domestic.Others"
          />
        </div>
      </div>

      {/* FRESH EQUITY RECEIVED SECTION */}
      <SectionHeader title="Amount of Fresh Equity Received During the Quarter" date={selectedMonthName} />
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
          value={formData.FreshEquityReceived.Total}
        />

        <CalculatedField 
          label="Foreign (Total)" 
          value={formData.FreshEquityReceived.Foreign.Total}
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px",
          marginBottom: "12px"
        }}>
          <FormInput 
            label="Foreign Direct Investment (FDI)" 
            value={formData.FreshEquityReceived.Foreign.FDI}
            field="FreshEquityReceived.Foreign.FDI"
          />
          <FormInput 
            label="Foreign Portfolio Investment (FPI)" 
            value={formData.FreshEquityReceived.Foreign.FPI}
            field="FreshEquityReceived.Foreign.FPI"
          />
          <FormInput 
            label="Foreign Institutional Investment (FII)" 
            value={formData.FreshEquityReceived.Foreign.FII}
            field="FreshEquityReceived.Foreign.FII"
          />
          <FormInput 
            label="Foreign Promoter" 
            value={formData.FreshEquityReceived.Foreign.ForeignPromoter}
            field="FreshEquityReceived.Foreign.ForeignPromoter"
          />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px",
          marginBottom: "12px"
        }}>
          <FormInput 
            label="Others" 
            value={formData.FreshEquityReceived.Foreign.Others}
            field="FreshEquityReceived.Foreign.Others"
          />
        </div>

        <CalculatedField 
          label="Domestic (Total)" 
          value={formData.FreshEquityReceived.Domestic.Total}
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px",
        }}>
          <FormInput 
            label="Domestic Promoter" 
            value={formData.FreshEquityReceived.Domestic.DomesticPromoter}
            field="FreshEquityReceived.Domestic.DomesticPromoter"
          />
          <FormInput 
            label="Others" 
            value={formData.FreshEquityReceived.Domestic.Others}
            field="FreshEquityReceived.Domestic.Others"
          />
        </div>
      </div>

      {/* DETAILS OF EXISTING EQUITY */}
      <SectionHeader title="Details of Existing Equity" date={selectedMonthName} />
      <div style={{
        backgroundColor: "#FFFFFF",
        padding: "20px",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        marginBottom: "6px",
        border: "1px solid #F3F4F6",
        borderTop: "none"
      }}>
        <div style={{ marginBottom: "16px" }}>
          <label style={{
            fontSize: "11px",
            fontWeight: "700",
            color: "#374151",
            marginRight: "10px",
            letterSpacing: "0.5px",
            textAlign: "left",
            textTransform: "uppercase",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
          }}>
            Number of rows:
          </label>
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
              transition: "all 0.25s ease",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            }}
            onChange={function(e) {
              setDetailOfExistingNums(Number(e.target.value));
              handleRowCountChange(e, "ExistingEquityProviders");
            }}
            value={detailOfExistingNums}
          >
            {[].concat(Array(150)).map(function(_, i) {
              return (
                <option value={i + 1} key={i + 1}>
                  {i + 1}
                </option>
              );
            })}
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
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.6px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Equity Provider</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.6px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Type</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.6px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Amount (INR)</th>
              </tr>
            </thead>
            <tbody>
              {formData.ExistingEquityProviders.length > 0 &&
                formData.ExistingEquityProviders.map(function(provider, index) {
                  return (
                    <tr key={index} style={{
                      borderBottom: "1px solid #F3F4F6",
                      backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#FAFBFC"
                    }}>
                      <td style={{ padding: "10px 16px" }}>
                        <TableInput
                          value={provider.Name}
                          onChange={function(e) {
                            handleInputChange(
                              index,
                              "Name",
                              e.target.value,
                              "ExistingEquityProviders"
                            );
                          }}
                          rowIndex={index}
                          colName="Name"
                          tableName="ExistingEquityProviders"
                        />
                      </td>
                      <td style={{ padding: "10px 16px" }}>
                        <TableInput
                          value={provider.Type}
                          onChange={function(e) {
                            handleInputChange(
                              index,
                              "Type",
                              e.target.value,
                              "ExistingEquityProviders"
                            );
                          }}
                          rowIndex={index}
                          colName="Type"
                          tableName="ExistingEquityProviders"
                        />
                      </td>
                      <td style={{ padding: "10px 16px" }}>
                        <TableInput
                          value={provider.AmountReported}
                          onChange={function(e) {
                            handleInputChange(
                              index,
                              "AmountReported",
                              e.target.value,
                              "ExistingEquityProviders"
                            );
                          }}
                          rowIndex={index}
                          colName="AmountReported"
                          tableName="ExistingEquityProviders"
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>

      {/* DETAILS OF FRESH EQUITY RECEIVED */}
      <SectionHeader title="Details of Fresh Equity Received During the Quarter" date={selectedMonthName} />
      <div style={{
        backgroundColor: "#FFFFFF",
        padding: "20px",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        marginBottom: "6px",
        border: "1px solid #F3F4F6",
        borderTop: "none"
      }}>
        <div style={{ marginBottom: "16px" }}>
          <label style={{
            fontSize: "11px",
            fontWeight: "700",
            color: "#374151",
            marginRight: "10px",
            letterSpacing: "0.5px",
            textAlign: "left",
            textTransform: "uppercase",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
          }}>
            Number of rows:
          </label>
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
              transition: "all 0.25s ease",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            }}
            onChange={function(e) {
              setDetailOfFreshNums(Number(e.target.value));
              handleRowCountChange(e, "equityreceivedExistingEquityProviders");
            }}
            value={detailOfFreshNums}
          >
            {[].concat(Array(150)).map(function(_, i) {
              return (
                <option value={i + 1} key={i + 1}>
                  {i + 1}
                </option>
              );
            })}
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
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.6px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Equity Provider</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.6px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Type</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.6px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Amount (INR)</th>
              </tr>
            </thead>
            <tbody>
              {formData.equityreceivedExistingEquityProviders.length &&
                formData.equityreceivedExistingEquityProviders.map(
                  function(provider, index) {
                    return (
                      <tr key={index} style={{
                        borderBottom: "1px solid #F3F4F6",
                        backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#FAFBFC"
                      }}>
                        <td style={{ padding: "10px 16px" }}>
                          <TableInput
                            value={provider.Name}
                            onChange={function(e) {
                              handleInputChange(
                                index,
                                "Name",
                                e.target.value,
                                "equityreceivedExistingEquityProviders"
                              );
                            }}
                            rowIndex={index}
                            colName="Name"
                            tableName="equityreceivedExistingEquityProviders"
                          />
                        </td>
                        <td style={{ padding: "10px 16px" }}>
                          <TableInput
                            value={provider.Type}
                            onChange={function(e) {
                              handleInputChange(
                                index,
                                "Type",
                                e.target.value,
                                "equityreceivedExistingEquityProviders"
                              );
                            }}
                            rowIndex={index}
                            colName="Type"
                            tableName="equityreceivedExistingEquityProviders"
                          />
                        </td>
                        <td style={{ padding: "10px 16px" }}>
                          <TableInput
                            value={provider.AmountReported}
                            onChange={function(e) {
                              handleInputChange(
                                index,
                                "AmountReported",
                                e.target.value,
                                "equityreceivedExistingEquityProviders"
                              );
                            }}
                            rowIndex={index}
                            colName="AmountReported"
                            tableName="equityreceivedExistingEquityProviders"
                          />
                        </td>
                      </tr>
                    );
                  }
                )}
            </tbody>
          </table>
        </div>
      </div>

      {/* DETAILS OF EQUITY BOUGHT BACK */}
      <SectionHeader title="Details of Equity Bought Back/Redeemed During the Quarter" date={selectedMonthName} />
      <div style={{
        backgroundColor: "#FFFFFF",
        padding: "20px",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        marginBottom: "6px",
        border: "1px solid #F3F4F6",
        borderTop: "none"
      }}>
        <div style={{ marginBottom: "16px" }}>
          <label style={{
            fontSize: "11px",
            fontWeight: "700",
            color: "#374151",
            marginRight: "10px",
            letterSpacing: "0.5px",
            textAlign: "left",
            textTransform: "uppercase",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
          }}>
            Number of rows:
          </label>
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
              transition: "all 0.25s ease",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            }}
            onChange={function(e) {
              setDetailOfEquityNums(Number(e.target.value));
              handleRowCountChange(e, "equityboughtExistingEquityProviders");
            }}
            value={detailOfEquityNums}
          >
            {[].concat(Array(150)).map(function(_, i) {
              return (
                <option value={i + 1} key={i + 1}>
                  {i + 1}
                </option>
              );
            })}
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
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.6px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Equity Provider</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.6px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Type</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.6px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Amount (INR)</th>
              </tr>
            </thead>
            <tbody>
              {formData.equityboughtExistingEquityProviders.length &&
                formData.equityboughtExistingEquityProviders.map(
                  function(provider, index) {
                    return (
                      <tr key={index} style={{
                        borderBottom: "1px solid #F3F4F6",
                        backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#FAFBFC"
                      }}>
                        <td style={{ padding: "10px 16px" }}>
                          <TableInput
                            value={provider.Name}
                            onChange={function(e) {
                              handleInputChange(
                                index,
                                "Name",
                                e.target.value,
                                "equityboughtExistingEquityProviders"
                              );
                            }}
                            rowIndex={index}
                            colName="Name"
                            tableName="equityboughtExistingEquityProviders"
                          />
                        </td>
                        <td style={{ padding: "10px 16px" }}>
                          <TableInput
                            value={provider.Type}
                            onChange={function(e) {
                              handleInputChange(
                                index,
                                "Type",
                                e.target.value,
                                "equityboughtExistingEquityProviders"
                              );
                            }}
                            rowIndex={index}
                            colName="Type"
                            tableName="equityboughtExistingEquityProviders"
                          />
                        </td>
                        <td style={{ padding: "10px 16px" }}>
                          <TableInput
                            value={provider.AmountReported}
                            onChange={function(e) {
                              handleInputChange(
                                index,
                                "AmountReported",
                                e.target.value,
                                "equityboughtExistingEquityProviders"
                              );
                            }}
                            rowIndex={index}
                            colName="AmountReported"
                            tableName="equityboughtExistingEquityProviders"
                          />
                        </td>
                      </tr>
                    );
                  }
                )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default Equity;