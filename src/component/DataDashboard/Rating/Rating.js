// import React, { useState } from "react";
// import { loadUserFormData } from "../utils/StorageHelper";

// function Rating({
//   formData,
//   handleRowCountChangeRating,
//   handleInputChangeRating,
// }) {
//   const [numOfRating, setNumOfRating] = useState(() => {
//     const storedData = loadUserFormData();
//     return storedData.MostRecentRatingInformation
//       ? storedData.MostRecentRatingInformation.length
//       : 1;
//   });

//   const [numOfGrading, setNumOfGrading] = useState(() => {
//     const storedData = loadUserFormData();
//     return storedData.MostRecentGradingInformation
//       ? storedData.MostRecentGradingInformation.length
//       : 1;
//   });

//   const [numOfConductA, setNumOfConductA] = useState(() => {
//     const storedData = loadUserFormData();
//     return storedData.CodeOfConductAssessment
//       ? storedData.CodeOfConductAssessment.length
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
//         {/* Most recent rating information (except the rating of debt instruments)						
//  table */}
//         <label>Choose number of rows: </label>
//         <select
//           onChange={(e) =>
//             handleRowCountChangeRating(
//               e,
//               "MostRecentRatingInformation",
//               setNumOfRating,
//               {
//                 RatingAgency: "",
//                 RatingScale: "",
//                 Degree: "",
//                 Outlook: "",
//                 DateOfRating: "",
//                 ValidUpTo: "",
//               }
//             )
//           }
//           value={numOfRating}
//         >
//           {[...Array(4)].map((_, i) => (
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
//               <th>S. No.</th>
//               <th colSpan={7}>
//                 Most recent rating information (except the rating of debt
//                 instruments){" "}
//               </th>
//             </tr>

//             <tr className="pink-row">
//               <th></th>
//               <th></th>
//               <th>Rating agency</th>
//               <th>Rating Scale</th>
//               <th>Degree</th>
//               <th>Outlook</th>
//               <th>Date of rating</th>
//               <th>Valid up to (DD/MMM/YY)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {formData.MostRecentRatingInformation.length &&
//               formData.MostRecentRatingInformation.map((item, index) => (
//                 <tr key={index + 1}>
//                   <td>{index + 1}</td>
//                   <td>Rating</td>
//                   <td>
//                     {/* <input
//                       type="text"
//                       class="form-control"
//                       value={item.RatingAgency}
//                       placeholder="rat"
//                       onChange={(e) =>
//                         handleInputChangeRating(
//                           index,
//                           "RatingAgency",
//                           e.target.value,
//                           "MostRecentRatingInformation"
//                         )
//                       }
//                     /> */}
//                     <select
//                       className="form-control"
//                       value={item.RatingAgency}
//                       onChange={(e) =>
//                         handleInputChangeRating(
//                           index,
//                           "RatingAgency",
//                           e.target.value,
//                           "MostRecentRatingInformation"
//                         )
//                       }
//                     >
//                       <option value="">Select Agency</option>
//                       <option value="Acuite">Acuite</option>
//                       <option value="Care">Care</option>
//                       <option value="CRISIL">CRISIL</option>
//                       <option value="ICRA">ICRA</option>
//                       <option value="India Ratings">India Ratings</option>
//                       <option value="Infomerics Rating">
//                         Infomerics Rating
//                       </option>
//                     </select>
//                   </td>
//                   <td>
//                     <select
//                       className="form-control"
//                       value={item.RatingScale}
//                       onChange={(e) =>
//                         handleInputChangeRating(
//                           index,
//                           "RatingScale",
//                           e.target.value,
//                           "MostRecentRatingInformation"
//                         )
//                       }
//                     >
//                       <option value="">Select Scale</option>
//                       <option value="AAA">AAA</option>
//                       <option value="AA">AA</option>
//                       <option value="A">A</option>
//                       <option value="BBB">BBB</option>
//                       <option value="BB">BB</option>
//                       <option value="B">B</option>
//                       <option value="C">C</option>
//                       <option value="D">D</option>
//                     </select>
//                     {/* <input
//                       type="text"
//                       class="form-control"
//                       value={item.RatingScale}
//                       onChange={(e) =>
//                         handleInputChangeRating(
//                           index,
//                           "RatingScale",
//                           e.target.value,
//                           "MostRecentRatingInformation"
//                         )
//                       }
//                     /> */}
//                   </td>
//                   <td>
//                     <select
//                       className="form-control"
//                       value={item.Degree}
//                       onChange={(e) =>
//                         handleInputChangeRating(
//                           index,
//                           "Degree",
//                           e.target.value,
//                           "MostRecentRatingInformation"
//                         )
//                       }
//                     >
//                       <option value="">Select Degree</option>
//                       <option value="Neutral">Neutral</option>
//                       <option value="Plus (+)">Plus (+)</option>
//                       <option value="Double Plus (++)">Double Plus (++)</option>
//                       <option value="Minus (-)">Minus (-)</option>
//                     </select>
//                     {/* <input
//                       type="text"
//                       class="form-control"
//                       value={item.Degree}
//                       onChange={(e) =>
//                         handleInputChangeRating(
//                           index,
//                           "Degree",
//                           e.target.value,
//                           "MostRecentRatingInformation"
//                         )
//                       }
//                     /> */}
//                   </td>
//                   <td>
//                     <select
//                       className="form-control"
//                       value={item.Outlook}
//                       onChange={(e) =>
//                         handleInputChangeRating(
//                           index,
//                           "Outlook",
//                           e.target.value,
//                           "MostRecentRatingInformation"
//                         )
//                       }
//                     >
//                       <option value="">Select Outlook</option>
//                       <option value="Stable">Stable</option>
//                       <option value="Positive">Positive</option>
//                       <option value="Negative">Negative</option>
//                     </select>
//                     {/* <input
//                       type="text"
//                       class="form-control"
//                       value={item.Outlook}
//                       onChange={(e) =>
//                         handleInputChangeRating(
//                           index,
//                           "Outlook",
//                           e.target.value,
//                           "MostRecentRatingInformation"
//                         )
//                       }
//                     /> */}
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       class="form-control"
//                       value={item.DateOfRating}
//                       onChange={(e) =>
//                         handleInputChangeRating(
//                           index,
//                           "DateOfRating",
//                           e.target.value,
//                           "MostRecentRatingInformation"
//                         )
//                       }
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       class="form-control"
//                       value={item.ValidUpTo}
//                       onChange={(e) =>
//                         handleInputChangeRating(
//                           index,
//                           "ValidUpTo",
//                           e.target.value,
//                           "MostRecentRatingInformation"
//                         )
//                       }
//                     />
//                   </td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//         <br />
//         <br />

//         {/* Most recent grading information
//  table */}

//         <label>Choose number of rows: </label>
//         <select
//           onChange={(e) =>
//             handleRowCountChangeRating(
//               e,
//               "MostRecentGradingInformation",
//               setNumOfGrading,
//               {
//                 GradingAgency: "",
//                 GradingScale: "",
//                 DateOfGrading: "",
//                 ValidUpTo: "",
//               }
//             )
//           }
//           value={numOfGrading}
//         >
//           {[...Array(4)].map((_, i) => (
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
//               <th>S. No.</th>
//               <th colSpan={7}>Most recent grading information</th>
//             </tr>

//             <tr className="pink-row">
//               <th></th>
//               <th></th>
//               <th>Grading agency</th>
//               <th>Grading Scale</th>
//               <th>Date of grading</th>
//               <th>Valid up to (DD/MMM/YY)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {formData.MostRecentGradingInformation.length &&
//               formData.MostRecentGradingInformation.map((item, index) => (
//                 <tr key={index + 1}>
//                   <td>{index + 1}</td>
//                   <td>Grading</td>
//                   <td>
//                     <select
//                       className="form-control"
//                       value={item.GradingAgency}
//                       onChange={(e) =>
//                         handleInputChangeRating(
//                           index,
//                           "GradingAgency",
//                           e.target.value,
//                           "MostRecentGradingInformation"
//                         )
//                       }
//                     >
//                       <option value="">Select Grading</option>
//                       <option value="ICRA">ICRA</option>
//                       <option value="CARE">CARE</option>
//                       <option value="Acuite">Acuite</option>
//                       <option value="CRISIL">CRISIL</option>
//                       <option value="M-CRIL">M-CRIL</option>
//                       <option value="IRR">IRR</option>
//                       <option value="IVR">IVR</option>
//                     </select>
//                     {/* <input
//                       type="text"
//                       class="form-control"
//                       value={item.GradingAgency}
//                       placeholder="g drop"
//                       onChange={(e) =>
//                         handleInputChangeRating(
//                           index,
//                           "GradingAgency",
//                           e.target.value,
//                           "MostRecentGradingInformation"
//                         )
//                       }
//                     /> */}
//                   </td>
//                   <td>
//                     <select
//                       className="form-control"
//                       value={item.GradingScale}
//                       onChange={(e) =>
//                         handleInputChangeRating(
//                           index,
//                           "GradingScale",
//                           e.target.value,
//                           "MostRecentGradingInformation"
//                         )
//                       }
//                     >
//                       <option value="">Select Scale</option>
//                       <option value="M1">M1</option>
//                       <option value="M2">M2</option>
//                       <option value="M3">M3</option>
//                       <option value="M4">M4</option>
//                       <option value="M5">M5</option>
//                       <option value="M6">M6</option>
//                       <option value="M7">M7</option>
//                       <option value="M8">M8</option>
//                     </select>
//                     {/* <input
//                       type="text"
//                       class="form-control"
//                       value={item.GradingScale}
//                       onChange={(e) =>
//                         handleInputChangeRating(
//                           index,
//                           "GradingScale",
//                           e.target.value,
//                           "MostRecentGradingInformation"
//                         )
//                       }
//                     /> */}
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       class="form-control"
//                       value={item.DateOfGrading}
//                       onChange={(e) =>
//                         handleInputChangeRating(
//                           index,
//                           "DateOfGrading",
//                           e.target.value,
//                           "MostRecentGradingInformation"
//                         )
//                       }
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       class="form-control"
//                       value={item.ValidUpTo}
//                       onChange={(e) =>
//                         handleInputChangeRating(
//                           index,
//                           "ValidUpTo",
//                           e.target.value,
//                           "MostRecentGradingInformation"
//                         )
//                       }
//                     />
//                   </td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//         <br />
//         <br />

//         {/* most recent grading information coca grade */}
//         {/*  table */}
//         <label>Choose number of rows: </label>
//         <select
//           onChange={(e) =>
//             handleRowCountChangeRating(
//               e,
//               "CodeOfConductAssessment",
//               setNumOfConductA,
//               {
//                 GradingAgency: "",
//                 CoCAGrade: "",
//                 DateOfGrading: "",
//                 ValidUpTo: "",
//               }
//             )
//           }
//           value={numOfConductA}
//         >
//           {[...Array(4)].map((_, i) => (
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
//               <th>S. No.</th>
//               <th colSpan={7}>Most recent grading information</th>
//             </tr>

//             <tr className="pink-row">
//               <th></th>
//               <th></th>
//               <th>Grading agency</th>
//               <th>CoCA Grade</th>
//               <th>Date of grading</th>
//               <th>Valid up to (DD/MMM/YY)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {formData.CodeOfConductAssessment.length &&
//               formData.CodeOfConductAssessment.map((item, index) => (
//                 <tr key={index + 1}>
//                   <td>{index + 1}</td>
//                   <td>Grading</td>
//                   <td>
//                     <select
//                       className="form-control"
//                       value={item.GradingAgency}
//                       onChange={(e) =>
//                         handleInputChangeRating(
//                           index,
//                           "GradingAgency",
//                           e.target.value,
//                           "CodeOfConductAssessment"
//                         )
//                       }
//                     >
//                       <option value="">Select Agency</option>
//                       <option value="ICRA">ICRA</option>
//                       <option value="CARE">CARE</option>
//                       <option value="Acuite">Acuite</option>
//                       <option value="CRISIL">CRISIL</option>
//                       <option value="M-CRIL">M-CRIL</option>
//                       <option value="IRR">IRR</option>
//                       <option value="IVR">IVR</option>
//                     </select>
//                     {/* <input
//                       type="text"
//                       class="form-control"
//                       value={item.GradingAgency}
//                       onChange={(e) =>
//                         handleInputChangeRating(
//                           index,
//                           "GradingAgency",
//                           e.target.value,
//                           "CodeOfConductAssessment"
//                         )
//                       }
//                     /> */}
//                   </td>
//                   <td>
//                     <select
//                       className="form-control"
//                       value={item.CoCAGrade}
//                       onChange={(e) =>
//                         handleInputChangeRating(
//                           index,
//                           "CoCAGrade",
//                           e.target.value,
//                           "CodeOfConductAssessment"
//                         )
//                       }
//                     >
//                       <option value="">Select Grading</option>
//                       <option value="C1">C1</option>
//                       <option value="C2">C2</option>
//                       <option value="C3">C3</option>
//                       <option value="C4">C4</option>
//                       <option value="C5">C5</option>
//                       <option value="C6">C6</option>
//                       <option value="C7">C7</option>
//                       <option value="C8">C8</option>
//                     </select>
//                     {/* <input
//                       type="text"
//                       class="form-control"
//                       value={item.CoCAGrade}
//                       onChange={(e) =>
//                         handleInputChangeRating(
//                           index,
//                           "CoCAGrade",
//                           e.target.value,
//                           "CodeOfConductAssessment"
//                         )
//                       }
//                     /> */}
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       class="form-control"
//                       value={item.DateOfGrading}
//                       onChange={(e) =>
//                         handleInputChangeRating(
//                           index,
//                           "DateOfGrading",
//                           e.target.value,
//                           "CodeOfConductAssessment"
//                         )
//                       }
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       class="form-control"
//                       value={item.ValidUpTo}
//                       onChange={(e) =>
//                         handleInputChangeRating(
//                           index,
//                           "ValidUpTo",
//                           e.target.value,
//                           "CodeOfConductAssessment"
//                         )
//                       }
//                     />
//                   </td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//         <br />
//         <br />
//       </form>
//     </div>
//   );
// }

// export default Rating;
// import React, { useState } from "react";
// import { loadUserFormData } from "../utils/StorageHelper";

// function Rating({
//   formData,
//   handleRowCountChangeRating,
//   handleInputChangeRating,
// }) {
//   const [numOfRating, setNumOfRating] = useState(() => {
//     const storedData = loadUserFormData();
//     return storedData.MostRecentRatingInformation
//       ? storedData.MostRecentRatingInformation.length
//       : 1;
//   });

//   const [numOfGrading, setNumOfGrading] = useState(() => {
//     const storedData = loadUserFormData();
//     return storedData.MostRecentGradingInformation
//       ? storedData.MostRecentGradingInformation.length
//       : 1;
//   });

//   const [numOfConductA, setNumOfConductA] = useState(() => {
//     const storedData = loadUserFormData();
//     return storedData.CodeOfConductAssessment
//       ? storedData.CodeOfConductAssessment.length
//       : 1;
//   });

//   // Section header component matching Overview
//   const SectionHeader = ({ title }) => (
//     <div style={{
//       background: "linear-gradient(135deg, #2B60AD 0%, #39B1AC 100%)",
//       padding: "14px 20px",
//       borderRadius: "10px 10px 0 0",
//       marginTop: "24px",
//       marginBottom: "0",
//     }}>
//       <h6 style={{
//         color: "#ffffff",
//         fontSize: "13px",
//         fontWeight: "800",
//         margin: 0,
//         textTransform: "uppercase",
//         letterSpacing: "1px"
//       }}>
//         {title}
//       </h6>
//     </div>
//   );

//   return (
//     <div style={{
//       backgroundColor: "#f8f9fa",
//       padding: "20px",
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     }}>

//       {/* MOST RECENT RATING INFORMATION */}
//       <SectionHeader title="Most Recent Rating Information (except the rating of debt instruments)" />
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
//             onChange={(e) =>
//               handleRowCountChangeRating(
//                 e,
//                 "MostRecentRatingInformation",
//                 setNumOfRating,
//                 {
//                   RatingAgency: "",
//                   RatingScale: "",
//                   Degree: "",
//                   Outlook: "",
//                   DateOfRating: "",
//                   ValidUpTo: "",
//                 }
//               )
//             }
//             value={numOfRating}
//           >
//             {[...Array(4)].map((_, i) => (
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
//                   width: "60px"
//                 }}>S. No.</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px",
//                   width: "80px"
//                 }}>Type</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Rating Agency</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Rating Scale</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Degree</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Outlook</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Date of Rating</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Valid Up To</th>
//               </tr>
//             </thead>
//             <tbody>
//               {formData.MostRecentRatingInformation.length &&
//                 formData.MostRecentRatingInformation.map((item, index) => (
//                   <tr key={index + 1} style={{
//                     borderBottom: "1px solid #f3f4f6",
//                     backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9fafb"
//                   }}>
//                     <td style={{ 
//                       padding: "12px 16px",
//                       textAlign: "center",
//                       fontSize: "13px",
//                       fontWeight: "600",
//                       color: "#6b7280"
//                     }}>{index + 1}</td>
//                     <td style={{ 
//                       padding: "12px 16px",
//                       textAlign: "center",
//                       fontSize: "12px",
//                       fontWeight: "500",
//                       color: "#374151"
//                     }}>Rating</td>
//                     <td style={{ padding: "12px 16px" }}>
//                       <select
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
//                           backgroundColor: "#ffffff",
//                           cursor: "pointer"
//                         }}
//                         value={item.RatingAgency}
//                         onChange={(e) =>
//                           handleInputChangeRating(
//                             index,
//                             "RatingAgency",
//                             e.target.value,
//                             "MostRecentRatingInformation"
//                           )
//                         }
//                         onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                         onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                       >
//                         <option value="">Select Agency</option>
//                         <option value="Acuite">Acuite</option>
//                         <option value="Care">Care</option>
//                         <option value="CRISIL">CRISIL</option>
//                         <option value="ICRA">ICRA</option>
//                         <option value="India Ratings">India Ratings</option>
//                         <option value="Infomerics Rating">Infomerics Rating</option>
//                       </select>
//                     </td>
//                     <td style={{ padding: "12px 16px" }}>
//                       <select
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
//                           backgroundColor: "#ffffff",
//                           cursor: "pointer"
//                         }}
//                         value={item.RatingScale}
//                         onChange={(e) =>
//                           handleInputChangeRating(
//                             index,
//                             "RatingScale",
//                             e.target.value,
//                             "MostRecentRatingInformation"
//                           )
//                         }
//                         onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                         onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                       >
//                         <option value="">Select Scale</option>
//                         <option value="AAA">AAA</option>
//                         <option value="AA">AA</option>
//                         <option value="A">A</option>
//                         <option value="BBB">BBB</option>
//                         <option value="BB">BB</option>
//                         <option value="B">B</option>
//                         <option value="C">C</option>
//                         <option value="D">D</option>
//                       </select>
//                     </td>
//                     <td style={{ padding: "12px 16px" }}>
//                       <select
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
//                           backgroundColor: "#ffffff",
//                           cursor: "pointer"
//                         }}
//                         value={item.Degree}
//                         onChange={(e) =>
//                           handleInputChangeRating(
//                             index,
//                             "Degree",
//                             e.target.value,
//                             "MostRecentRatingInformation"
//                           )
//                         }
//                         onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                         onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                       >
//                         <option value="">Select Degree</option>
//                         <option value="Neutral">Neutral</option>
//                         <option value="Plus (+)">Plus (+)</option>
//                         <option value="Double Plus (++)">Double Plus (++)</option>
//                         <option value="Minus (-)">Minus (-)</option>
//                       </select>
//                     </td>
//                     <td style={{ padding: "12px 16px" }}>
//                       <select
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
//                           backgroundColor: "#ffffff",
//                           cursor: "pointer"
//                         }}
//                         value={item.Outlook}
//                         onChange={(e) =>
//                           handleInputChangeRating(
//                             index,
//                             "Outlook",
//                             e.target.value,
//                             "MostRecentRatingInformation"
//                           )
//                         }
//                         onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                         onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                       >
//                         <option value="">Select Outlook</option>
//                         <option value="Stable">Stable</option>
//                         <option value="Positive">Positive</option>
//                         <option value="Negative">Negative</option>
//                       </select>
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
//                         value={item.DateOfRating}
//                         onChange={(e) =>
//                           handleInputChangeRating(
//                             index,
//                             "DateOfRating",
//                             e.target.value,
//                             "MostRecentRatingInformation"
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
//                         value={item.ValidUpTo}
//                         onChange={(e) =>
//                           handleInputChangeRating(
//                             index,
//                             "ValidUpTo",
//                             e.target.value,
//                             "MostRecentRatingInformation"
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

//       {/* MOST RECENT GRADING INFORMATION */}
//       <SectionHeader title="Most Recent Grading Information" />
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
//             onChange={(e) =>
//               handleRowCountChangeRating(
//                 e,
//                 "MostRecentGradingInformation",
//                 setNumOfGrading,
//                 {
//                   GradingAgency: "",
//                   GradingScale: "",
//                   DateOfGrading: "",
//                   ValidUpTo: "",
//                 }
//               )
//             }
//             value={numOfGrading}
//           >
//             {[...Array(4)].map((_, i) => (
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
//                   width: "60px"
//                 }}>S. No.</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px",
//                   width: "80px"
//                 }}>Type</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Grading Agency</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Grading Scale</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Date of Grading</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Valid Up To</th>
//               </tr>
//             </thead>
//             <tbody>
//               {formData.MostRecentGradingInformation.length &&
//                 formData.MostRecentGradingInformation.map((item, index) => (
//                   <tr key={index + 1} style={{
//                     borderBottom: "1px solid #f3f4f6",
//                     backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9fafb"
//                   }}>
//                     <td style={{ 
//                       padding: "12px 16px",
//                       textAlign: "center",
//                       fontSize: "13px",
//                       fontWeight: "600",
//                       color: "#6b7280"
//                     }}>{index + 1}</td>
//                     <td style={{ 
//                       padding: "12px 16px",
//                       textAlign: "center",
//                       fontSize: "12px",
//                       fontWeight: "500",
//                       color: "#374151"
//                     }}>Grading</td>
//                     <td style={{ padding: "12px 16px" }}>
//                       <select
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
//                           backgroundColor: "#ffffff",
//                           cursor: "pointer"
//                         }}
//                         value={item.GradingAgency}
//                         onChange={(e) =>
//                           handleInputChangeRating(
//                             index,
//                             "GradingAgency",
//                             e.target.value,
//                             "MostRecentGradingInformation"
//                           )
//                         }
//                         onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                         onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                       >
//                         <option value="">Select Grading</option>
//                         <option value="ICRA">ICRA</option>
//                         <option value="CARE">CARE</option>
//                         <option value="Acuite">Acuite</option>
//                         <option value="CRISIL">CRISIL</option>
//                         <option value="M-CRIL">M-CRIL</option>
//                         <option value="IRR">IRR</option>
//                         <option value="IVR">IVR</option>
//                       </select>
//                     </td>
//                     <td style={{ padding: "12px 16px" }}>
//                       <select
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
//                           backgroundColor: "#ffffff",
//                           cursor: "pointer"
//                         }}
//                         value={item.GradingScale}
//                         onChange={(e) =>
//                           handleInputChangeRating(
//                             index,
//                             "GradingScale",
//                             e.target.value,
//                             "MostRecentGradingInformation"
//                           )
//                         }
//                         onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                         onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                       >
//                         <option value="">Select Scale</option>
//                         <option value="M1">M1</option>
//                         <option value="M2">M2</option>
//                         <option value="M3">M3</option>
//                         <option value="M4">M4</option>
//                         <option value="M5">M5</option>
//                         <option value="M6">M6</option>
//                         <option value="M7">M7</option>
//                         <option value="M8">M8</option>
//                       </select>
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
//                         value={item.DateOfGrading}
//                         onChange={(e) =>
//                           handleInputChangeRating(
//                             index,
//                             "DateOfGrading",
//                             e.target.value,
//                             "MostRecentGradingInformation"
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
//                         value={item.ValidUpTo}
//                         onChange={(e) =>
//                           handleInputChangeRating(
//                             index,
//                             "ValidUpTo",
//                             e.target.value,
//                             "MostRecentGradingInformation"
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

//       {/* CODE OF CONDUCT ASSESSMENT */}
//       <SectionHeader title="Code of Conduct Assessment (CoCA)" />
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
//             onChange={(e) =>
//               handleRowCountChangeRating(
//                 e,
//                 "CodeOfConductAssessment",
//                 setNumOfConductA,
//                 {
//                   GradingAgency: "",
//                   CoCAGrade: "",
//                   DateOfGrading: "",
//                   ValidUpTo: "",
//                 }
//               )
//             }
//             value={numOfConductA}
//           >
//             {[...Array(4)].map((_, i) => (
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
//                   width: "60px"
//                 }}>S. No.</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px",
//                   width: "80px"
//                 }}>Type</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Grading Agency</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>CoCA Grade</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Date of Grading</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Valid Up To</th>
//               </tr>
//             </thead>
//             <tbody>
//               {formData.CodeOfConductAssessment.length &&
//                 formData.CodeOfConductAssessment.map((item, index) => (
//                   <tr key={index + 1} style={{
//                     borderBottom: "1px solid #f3f4f6",
//                     backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9fafb"
//                   }}>
//                     <td style={{ 
//                       padding: "12px 16px",
//                       textAlign: "center",
//                       fontSize: "13px",
//                       fontWeight: "600",
//                       color: "#6b7280"
//                     }}>{index + 1}</td>
//                     <td style={{ 
//                       padding: "12px 16px",
//                       textAlign: "center",
//                       fontSize: "12px",
//                       fontWeight: "500",
//                       color: "#374151"
//                     }}>Grading</td>
//                     <td style={{ padding: "12px 16px" }}>
//                       <select
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
//                           backgroundColor: "#ffffff",
//                           cursor: "pointer"
//                         }}
//                         value={item.GradingAgency}
//                         onChange={(e) =>
//                           handleInputChangeRating(
//                             index,
//                             "GradingAgency",
//                             e.target.value,
//                             "CodeOfConductAssessment"
//                           )
//                         }
//                         onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                         onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                       >
//                         <option value="">Select Agency</option>
//                         <option value="ICRA">ICRA</option>
//                         <option value="CARE">CARE</option>
//                         <option value="Acuite">Acuite</option>
//                         <option value="CRISIL">CRISIL</option>
//                         <option value="M-CRIL">M-CRIL</option>
//                         <option value="IRR">IRR</option>
//                         <option value="IVR">IVR</option>
//                       </select>
//                     </td>
//                     <td style={{ padding: "12px 16px" }}>
//                       <select
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
//                           backgroundColor: "#ffffff",
//                           cursor: "pointer"
//                         }}
//                         value={item.CoCAGrade}
//                         onChange={(e) =>
//                           handleInputChangeRating(
//                             index,
//                             "CoCAGrade",
//                             e.target.value,
//                             "CodeOfConductAssessment"
//                           )
//                         }
//                         onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                         onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                       >
//                         <option value="">Select Grading</option>
//                         <option value="C1">C1</option>
//                         <option value="C2">C2</option>
//                         <option value="C3">C3</option>
//                         <option value="C4">C4</option>
//                         <option value="C5">C5</option>
//                         <option value="C6">C6</option>
//                         <option value="C7">C7</option>
//                         <option value="C8">C8</option>
//                       </select>
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
//                         value={item.DateOfGrading}
//                         onChange={(e) =>
//                           handleInputChangeRating(
//                             index,
//                             "DateOfGrading",
//                             e.target.value,
//                             "CodeOfConductAssessment"
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
//                         value={item.ValidUpTo}
//                         onChange={(e) =>
//                           handleInputChangeRating(
//                             index,
//                             "ValidUpTo",
//                             e.target.value,
//                             "CodeOfConductAssessment"
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

//     </div>
//   );
// }

// export default Rating;

import React, { useState } from "react";
import { loadUserFormData } from "../utils/StorageHelper";

function Rating({
  formData,
  handleRowCountChangeRating,
  handleInputChangeRating,
}) {
  const [numOfRating, setNumOfRating] = useState(() => {
    const storedData = loadUserFormData();
    return storedData.MostRecentRatingInformation
      ? storedData.MostRecentRatingInformation.length
      : 1;
  });

  const [numOfGrading, setNumOfGrading] = useState(() => {
    const storedData = loadUserFormData();
    return storedData.MostRecentGradingInformation
      ? storedData.MostRecentGradingInformation.length
      : 1;
  });

  const [numOfConductA, setNumOfConductA] = useState(() => {
    const storedData = loadUserFormData();
    return storedData.CodeOfConductAssessment
      ? storedData.CodeOfConductAssessment.length
      : 1;
  });

  // Section header with gradient using palette colors
  const SectionHeader = ({ title }) => (
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

      {/* MOST RECENT RATING INFORMATION */}
      <SectionHeader title="Most Recent Rating Information (except the rating of debt instruments)" />
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
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
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
            onChange={(e) =>
              handleRowCountChangeRating(
                e,
                "MostRecentRatingInformation",
                setNumOfRating,
                {
                  RatingAgency: "",
                  RatingScale: "",
                  Degree: "",
                  Outlook: "",
                  DateOfRating: "",
                  ValidUpTo: "",
                }
              )
            }
            value={numOfRating}
            onFocus={(e) => { 
              e.target.style.borderColor = "#39B1AC";
              e.target.style.boxShadow = "0 0 0 3px rgba(57, 177, 172, 0.1)";
            }}
            onBlur={(e) => { 
              e.target.style.borderColor = "#E8E8E8";
              e.target.style.boxShadow = "none";
            }}
          >
            {[...Array(4)].map((_, i) => (
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
                  width: "60px"
                }}>S. No.</th>
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
                }}>Type</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Rating Agency</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Rating Scale</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Degree</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Outlook</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Date of Rating</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Valid Up To</th>
              </tr>
            </thead>
            <tbody>
              {formData.MostRecentRatingInformation.length &&
                formData.MostRecentRatingInformation.map((item, index) => (
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
                    <td style={{ 
                      padding: "12px 16px",
                      textAlign: "left",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#374151",
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}>Rating</td>
                    <td style={{ padding: "12px 16px" }}>
                      <select
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
                          cursor: "pointer",
                          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                        }}
                        value={item.RatingAgency}
                        onChange={(e) =>
                          handleInputChangeRating(
                            index,
                            "RatingAgency",
                            e.target.value,
                            "MostRecentRatingInformation"
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
                      >
                        <option value="">Select Agency</option>
                        <option value="Acuite">Acuite</option>
                        <option value="Care">Care</option>
                        <option value="CRISIL">CRISIL</option>
                        <option value="ICRA">ICRA</option>
                        <option value="India Ratings">India Ratings</option>
                        <option value="Infomerics Rating">Infomerics Rating</option>
                      </select>
                    </td>
                    <td style={{ padding: "12px 16px" }}>
                      <select
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
                          cursor: "pointer",
                          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                        }}
                        value={item.RatingScale}
                        onChange={(e) =>
                          handleInputChangeRating(
                            index,
                            "RatingScale",
                            e.target.value,
                            "MostRecentRatingInformation"
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
                      >
                        <option value="">Select Scale</option>
                        <option value="AAA">AAA</option>
                        <option value="AA">AA</option>
                        <option value="A">A</option>
                        <option value="BBB">BBB</option>
                        <option value="BB">BB</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                      </select>
                    </td>
                    <td style={{ padding: "12px 16px" }}>
                      <select
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
                          cursor: "pointer",
                          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                        }}
                        value={item.Degree}
                        onChange={(e) =>
                          handleInputChangeRating(
                            index,
                            "Degree",
                            e.target.value,
                            "MostRecentRatingInformation"
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
                      >
                        <option value="">Select Degree</option>
                        <option value="Neutral">Neutral</option>
                        <option value="Plus (+)">Plus (+)</option>
                        <option value="Double Plus (++)">Double Plus (++)</option>
                        <option value="Minus (-)">Minus (-)</option>
                      </select>
                    </td>
                    <td style={{ padding: "12px 16px" }}>
                      <select
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
                          cursor: "pointer",
                          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                        }}
                        value={item.Outlook}
                        onChange={(e) =>
                          handleInputChangeRating(
                            index,
                            "Outlook",
                            e.target.value,
                            "MostRecentRatingInformation"
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
                      >
                        <option value="">Select Outlook</option>
                        <option value="Stable">Stable</option>
                        <option value="Positive">Positive</option>
                        <option value="Negative">Negative</option>
                      </select>
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
                        value={item.DateOfRating}
                        onChange={(e) =>
                          handleInputChangeRating(
                            index,
                            "DateOfRating",
                            e.target.value,
                            "MostRecentRatingInformation"
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
                        value={item.ValidUpTo}
                        onChange={(e) =>
                          handleInputChangeRating(
                            index,
                            "ValidUpTo",
                            e.target.value,
                            "MostRecentRatingInformation"
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

      {/* MOST RECENT GRADING INFORMATION */}
      <SectionHeader title="Most Recent Grading Information" />
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
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
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
            onChange={(e) =>
              handleRowCountChangeRating(
                e,
                "MostRecentGradingInformation",
                setNumOfGrading,
                {
                  GradingAgency: "",
                  GradingScale: "",
                  DateOfGrading: "",
                  ValidUpTo: "",
                }
              )
            }
            value={numOfGrading}
            onFocus={(e) => { 
              e.target.style.borderColor = "#39B1AC";
              e.target.style.boxShadow = "0 0 0 3px rgba(57, 177, 172, 0.1)";
            }}
            onBlur={(e) => { 
              e.target.style.borderColor = "#E8E8E8";
              e.target.style.boxShadow = "none";
            }}
          >
            {[...Array(4)].map((_, i) => (
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
                  width: "60px"
                }}>S. No.</th>
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
                }}>Type</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Grading Agency</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Grading Scale</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Date of Grading</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Valid Up To</th>
              </tr>
            </thead>
            <tbody>
              {formData.MostRecentGradingInformation.length &&
                formData.MostRecentGradingInformation.map((item, index) => (
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
                    <td style={{ 
                      padding: "12px 16px",
                      textAlign: "left",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#374151",
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}>Grading</td>
                    <td style={{ padding: "12px 16px" }}>
                      <select
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
                          cursor: "pointer",
                          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                        }}
                        value={item.GradingAgency}
                        onChange={(e) =>
                          handleInputChangeRating(
                            index,
                            "GradingAgency",
                            e.target.value,
                            "MostRecentGradingInformation"
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
                      >
                        <option value="">Select Grading</option>
                        <option value="ICRA">ICRA</option>
                        <option value="CARE">CARE</option>
                        <option value="Acuite">Acuite</option>
                        <option value="CRISIL">CRISIL</option>
                        <option value="M-CRIL">M-CRIL</option>
                        <option value="IRR">IRR</option>
                        <option value="IVR">IVR</option>
                      </select>
                    </td>
                    <td style={{ padding: "12px 16px" }}>
                      <select
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
                          cursor: "pointer",
                          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                        }}
                        value={item.GradingScale}
                        onChange={(e) =>
                          handleInputChangeRating(
                            index,
                            "GradingScale",
                            e.target.value,
                            "MostRecentGradingInformation"
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
                      >
                        <option value="">Select Scale</option>
                        <option value="M1">M1</option>
                        <option value="M2">M2</option>
                        <option value="M3">M3</option>
                        <option value="M4">M4</option>
                        <option value="M5">M5</option>
                        <option value="M6">M6</option>
                        <option value="M7">M7</option>
                        <option value="M8">M8</option>
                      </select>
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
                        value={item.DateOfGrading}
                        onChange={(e) =>
                          handleInputChangeRating(
                            index,
                            "DateOfGrading",
                            e.target.value,
                            "MostRecentGradingInformation"
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
                        value={item.ValidUpTo}
                        onChange={(e) =>
                          handleInputChangeRating(
                            index,
                            "ValidUpTo",
                            e.target.value,
                            "MostRecentGradingInformation"
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

      {/* CODE OF CONDUCT ASSESSMENT */}
      <SectionHeader title="Code of Conduct Assessment (CoCA)" />
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
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
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
            onChange={(e) =>
              handleRowCountChangeRating(
                e,
                "CodeOfConductAssessment",
                setNumOfConductA,
                {
                  GradingAgency: "",
                  CoCAGrade: "",
                  DateOfGrading: "",
                  ValidUpTo: "",
                }
              )
            }
            value={numOfConductA}
            onFocus={(e) => { 
              e.target.style.borderColor = "#39B1AC";
              e.target.style.boxShadow = "0 0 0 3px rgba(57, 177, 172, 0.1)";
            }}
            onBlur={(e) => { 
              e.target.style.borderColor = "#E8E8E8";
              e.target.style.boxShadow = "none";
            }}
          >
            {[...Array(4)].map((_, i) => (
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
                  width: "60px"
                }}>S. No.</th>
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
                }}>Type</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Grading Agency</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>CoCA Grade</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Date of Grading</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Valid Up To</th>
              </tr>
            </thead>
            <tbody>
              {formData.CodeOfConductAssessment.length &&
                formData.CodeOfConductAssessment.map((item, index) => (
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
                    <td style={{ 
                      padding: "12px 16px",
                      textAlign: "left",
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#374151",
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}>Grading</td>
                    <td style={{ padding: "12px 16px" }}>
                      <select
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
                          cursor: "pointer",
                          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                        }}
                        value={item.GradingAgency}
                        onChange={(e) =>
                          handleInputChangeRating(
                            index,
                            "GradingAgency",
                            e.target.value,
                            "CodeOfConductAssessment"
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
                      >
                        <option value="">Select Agency</option>
                        <option value="ICRA">ICRA</option>
                        <option value="CARE">CARE</option>
                        <option value="Acuite">Acuite</option>
                        <option value="CRISIL">CRISIL</option>
                        <option value="M-CRIL">M-CRIL</option>
                        <option value="IRR">IRR</option>
                        <option value="IVR">IVR</option>
                      </select>
                    </td>
                    <td style={{ padding: "12px 16px" }}>
                      <select
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
                          cursor: "pointer",
                          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                        }}
                        value={item.CoCAGrade}
                        onChange={(e) =>
                          handleInputChangeRating(
                            index,
                            "CoCAGrade",
                            e.target.value,
                            "CodeOfConductAssessment"
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
                      >
                        <option value="">Select Grading</option>
                        <option value="C1">C1</option>
                        <option value="C2">C2</option>
                        <option value="C3">C3</option>
                        <option value="C4">C4</option>
                        <option value="C5">C5</option>
                        <option value="C6">C6</option>
                        <option value="C7">C7</option>
                        <option value="C8">C8</option>
                      </select>
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
                        value={item.DateOfGrading}
                        onChange={(e) =>
                          handleInputChangeRating(
                            index,
                            "DateOfGrading",
                            e.target.value,
                            "CodeOfConductAssessment"
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
                        value={item.ValidUpTo}
                        onChange={(e) =>
                          handleInputChangeRating(
                            index,
                            "ValidUpTo",
                            e.target.value,
                            "CodeOfConductAssessment"
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

export default Rating;