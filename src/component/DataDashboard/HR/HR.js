// import "./HR.css";
// import React from "react"

// function Hr({ formData, handleChange ,handleNestedChange,  selectedMonthName,    selectedDuring_FY,
      
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
//           <tbody>
//             {/* sub heading */}

//             <tr class="blue-row">
//               <td style={{ backgroundColor: "#1f4a90" }}>
//                 {" "}
//                 Active number of staff
//               </td>
              
//               <td></td>
//               <td style={{ backgroundColor: "#1f4a90",columnSpan:"3"}}>
//                {selectedMonthName
//                   ? selectedMonthName
//                   : ""}
//               </td>
//               <td></td>
//             </tr>
//             <tr class="blue-row ">
//               <td style={{ backgroundColor: "#1f4a90", color: "#fff" }}>
//                 No of Staff
//               </td>
//               <td style={{ backgroundColor: "#1f4a90", color: "#fff" }}>
//                 HO level
//               </td>
//               <td
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   color: "#fff",
//                   backgroundColor: "#1f4a90",
//                 }}
//               >
//                 Branch/Regional Level
//               </td>
//               <td style={{ backgroundColor: "#1f4a90", color: "#fff" }}>
//                 Total
//               </td>
//             </tr>

//             <tr class="blue-row ">
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                 Field Officers
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.active.ho.field_officers || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.active.ho.field_officers", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.active.branch.field_officers || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.active.branch.field_officers", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>0</td>
//             </tr>

//             <tr class="blue-row ">
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//               Management (BM Level)
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.active.ho.management || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.active.ho.management", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.active.branch.management || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.active.branch.management", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>0</td>
//             </tr>

//             <tr class="blue-row ">
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//               Senior Management
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.active.ho.senior_management || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.active.ho.senior_management", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.active.branch.senior_management || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.active.branch.senior_management", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>0</td>
//             </tr>

//             <tr class="blue-row ">
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//               Probational
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.active.ho.probational || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.active.ho.probational", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.active.branch.probational || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.active.branch.probational", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>0</td>
//             </tr>

//             <tr class="blue-row ">
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//               Others (support staff)
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.active.ho.others || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.active.ho.others", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.recruitment.ho.field_officers || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.recruitment.ho.field_officers", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>0</td>
//             </tr>

//             <tr class="blue-row ">
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//              Total
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
// 0
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//               {/* {formData.staff.active.ho.others || ""} */}
//               0
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//               {/* {formData.staff.recruitment.ho.field_officers || ""} */}
//               0</td>
//             </tr>

// <br></br>
//             {/* 2nd form */}

//              {/* sub heading */}

//              <tr class="blue-row">
//               <td style={{ backgroundColor: "#1f4a90" }}>
//                 {" "}
//                 Staff Recruitment
//               </td>
              
//               <td></td>
//               <td style={{ backgroundColor: "#1f4a90" }}>
//                 {selectedDuring_FY
//                   ? selectedDuring_FY
//                   : ""}	
//               </td>
//               <td></td>
//             </tr>
//             <tr class="blue-row ">
//               <td style={{ backgroundColor: "#1f4a90", color: "fff" }}>
//                 No of Staff
//               </td>
//               <td style={{ backgroundColor: "#1f4a90", color: "#fff" }}>
//                 HO level
//               </td>
//               <td
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   color: "#fff",
//                   backgroundColor: "#1f4a90",
//                 }}
//               >
//                 Branch/Regional Level
//               </td>
//               <td style={{ backgroundColor: "#1f4a90", color: "#fff" }}>
//                 Total
//               </td>
//             </tr>

//             <tr class="blue-row ">
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                 Field Officers
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.active.ho.field_officers || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.recruitment.ho.field_officers", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.recruitment.branch.others || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.recruitment.branch.others", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>0</td>
//             </tr>

//             <tr class="blue-row ">
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//               Management (BM Level)
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.recruitment.ho.management || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.recruitment.ho.management", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.recruitment.branch.management || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.recruitment.branch.management", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>0</td>
//             </tr>

//             <tr class="blue-row ">
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//               Senior Management
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.recruitment.ho.senior_management || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.recruitment.ho.senior_management", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.recruitment.branch.senior_management || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.recruitment.branch.senior_management", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>0</td>
//             </tr>

//             <tr class="blue-row ">
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//               Probational
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.recruitment.ho.probational || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.recruitment.ho.probational", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.recruitment.branch.probational || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.recruitment.branch.probational", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>0</td>
//             </tr>

//             <tr class="blue-row ">
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//               Others (support staff)
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.recruitment.ho.others || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.recruitment.ho.others", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.recruitment.branch.others || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.recruitment.branch.others", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>0</td>
//             </tr>

//             <tr class="blue-row ">
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//              Total
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//               {/* formData.staff.recruitment.branch.total */}
//                    0
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//               0
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>0</td>
//             </tr>


//             {/* 3rd form */}

//            <br></br>

//              {/* sub heading */}

//              <tr class="blue-row">
//               <td style={{ backgroundColor: "#1f4a90" }}>
//                 {" "}
//                 Staff Attrition
//               </td>
              
//               <td></td>
//               <td style={{ backgroundColor: "#1f4a90" }}>
//                 {selectedDuring_FY
//                   ? selectedDuring_FY
//                   : ""}	
//               </td>
//               <td></td>
//             </tr>
//             <tr class="blue-row ">
//               <td style={{ backgroundColor: "#1f4a90", color: "#fff" }}>
//                 No of Staff
//               </td>
//               <td style={{ backgroundColor: "#1f4a90", color: "#fff" }}>
//                 HO level
//               </td>
//               <td
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   color: "#fff",
//                   backgroundColor: "#1f4a90",
//                 }}
//               >
//                 Branch/Regional Level
//               </td>
//               <td style={{ backgroundColor: "#1f4a90", color: "#fff" }}>
//                 Total
//               </td>
//             </tr>

//             <tr class="blue-row ">
//               <td style={{ backgroundColor: "#fff", color:"black"}}>
//                 Field Officers
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.attrition.ho.field_officers || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.attrition.ho.field_officers", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.attrition.branch.field_officers || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.attrition.branch.field_officers", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>0</td>
//             </tr>

//             <tr class="blue-row ">
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//               Management (BM Level)
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.attrition.ho.management || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.attrition.ho.management", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.attrition.branch.management || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.attrition.branch.management", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>0</td>
//             </tr>

//             <tr class="blue-row ">
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//               Senior Management
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.attrition.ho.senior_management || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.attrition.ho.senior_management", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.attrition.branch.senior_management || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.attrition.branch.senior_management", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>0</td>
//             </tr>

//             <tr class="blue-row ">
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//               Probational
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.attrition.ho.probational || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.attrition.ho.probational", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.attrition.branch.probational || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.attrition.branch.probational", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>0</td>
//             </tr>

//             <tr class="blue-row ">
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//               Others (support staff)
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.attrition.ho.total || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.attrition.ho.total", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//                  <input
//                   type="text"
//                   class="form-control"
//                   value={formData.staff.attrition.branch.total || ""}
//                   onChange={(e) =>
//                     handleNestedChange("staff.attrition.branch.total", e.target.value)
//                   }
//                 />
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>0</td>
//             </tr>

//             <tr class="blue-row ">
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//              Total
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//               {/* {formData.staff.attrition.branch.total || ""} */}
// 0
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>
//               0
//               </td>
//               <td style={{ backgroundColor: "#fff", color: "black" }}>0</td>
//             </tr>

//             <br></br>
          
//           </tbody>
//         </table>
//       </form>
//     </div>
//   );
// }
// export default Hr;

// import "./HR.css";
// import React from "react";

// function Hr({ 
//   formData, 
//   handleChange, 
//   handleNestedChange, 
//   selectedMonthName, 
//   selectedDuring_FY 
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

//   return (
//     <div style={{
//       backgroundColor: "#f8f9fa",
//       padding: "20px",
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     }}>

//       {/* ACTIVE NUMBER OF STAFF */}
//       <SectionHeader title="Active Number of Staff" date={selectedMonthName} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "24px",
//         borderRadius: "0 0 10px 10px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//         marginBottom: "8px"
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
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px",
//                   width: "40%"
//                 }}>No. of Staff</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>HO Level</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Branch/Regional Level</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px",
//                   width: "15%"
//                 }}>Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Field Officers */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#ffffff"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Field Officers</td>
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
//                     value={formData.staff.active.ho.field_officers || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.active.ho.field_officers", e.target.value)
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
//                     value={formData.staff.active.branch.field_officers || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.active.branch.field_officers", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* Management */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#f9fafb"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Management (BM Level)</td>
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
//                     value={formData.staff.active.ho.management || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.active.ho.management", e.target.value)
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
//                     value={formData.staff.active.branch.management || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.active.branch.management", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* Senior Management */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#ffffff"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Senior Management</td>
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
//                     value={formData.staff.active.ho.senior_management || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.active.ho.senior_management", e.target.value)
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
//                     value={formData.staff.active.branch.senior_management || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.active.branch.senior_management", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* Probational */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#f9fafb"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Probational</td>
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
//                     value={formData.staff.active.ho.probational || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.active.ho.probational", e.target.value)
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
//                     value={formData.staff.active.branch.probational || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.active.branch.probational", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* Others */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#ffffff"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Others (Support Staff)</td>
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
//                     value={formData.staff.active.ho.others || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.active.ho.others", e.target.value)
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
//                     value={formData.staff.recruitment.ho.field_officers || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.recruitment.ho.field_officers", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* Total Row */}
//               <tr style={{
//                 backgroundColor: "#f0f9ff",
//                 borderTop: "2px solid #2B60AD"
//               }}>
//                 <td style={{
//                   padding: "14px 16px",
//                   fontSize: "13px",
//                   fontWeight: "800",
//                   color: "#1e40af"
//                 }}>Total</td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* STAFF RECRUITMENT */}
//       <SectionHeader title="Staff Recruitment" date={selectedDuring_FY} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "24px",
//         borderRadius: "0 0 10px 10px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//         marginBottom: "8px"
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
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px",
//                   width: "40%"
//                 }}>No. of Staff</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>HO Level</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Branch/Regional Level</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px",
//                   width: "15%"
//                 }}>Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Field Officers */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#ffffff"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Field Officers</td>
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
//                     value={formData.staff.recruitment.ho.field_officers || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.recruitment.ho.field_officers", e.target.value)
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
//                     value={formData.staff.recruitment.branch.field_officers || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.recruitment.branch.field_officers", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* Management */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#f9fafb"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Management (BM Level)</td>
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
//                     value={formData.staff.recruitment.ho.management || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.recruitment.ho.management", e.target.value)
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
//                     value={formData.staff.recruitment.branch.management || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.recruitment.branch.management", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* Senior Management */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#ffffff"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Senior Management</td>
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
//                     value={formData.staff.recruitment.ho.senior_management || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.recruitment.ho.senior_management", e.target.value)
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
//                     value={formData.staff.recruitment.branch.senior_management || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.recruitment.branch.senior_management", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* Probational */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#f9fafb"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Probational</td>
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
//                     value={formData.staff.recruitment.ho.probational || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.recruitment.ho.probational", e.target.value)
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
//                     value={formData.staff.recruitment.branch.probational || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.recruitment.branch.probational", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* Others */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#ffffff"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Others (Support Staff)</td>
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
//                     value={formData.staff.recruitment.ho.others || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.recruitment.ho.others", e.target.value)
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
//                     value={formData.staff.recruitment.branch.others || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.recruitment.branch.others", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* Total Row */}
//               <tr style={{
//                 backgroundColor: "#f0f9ff",
//                 borderTop: "2px solid #2B60AD"
//               }}>
//                 <td style={{
//                   padding: "14px 16px",
//                   fontSize: "13px",
//                   fontWeight: "800",
//                   color: "#1e40af"
//                 }}>Total</td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* STAFF ATTRITION */}
//       <SectionHeader title="Staff Attrition" date={selectedDuring_FY} />
//       <div style={{
//         backgroundColor: "#ffffff",
//         padding: "24px",
//         borderRadius: "0 0 10px 10px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
//         marginBottom: "8px"
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
//                   textAlign: "left",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px",
//                   width: "40%"
//                 }}>No. of Staff</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>HO Level</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px"
//                 }}>Branch/Regional Level</th>
//                 <th style={{
//                   padding: "12px 16px",
//                   textAlign: "center",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px",
//                   width: "15%"
//                 }}>Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Field Officers */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#ffffff"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Field Officers</td>
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
//                     value={formData.staff.attrition.ho.field_officers || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.attrition.ho.field_officers", e.target.value)
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
//                     value={formData.staff.attrition.branch.field_officers || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.attrition.branch.field_officers", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* Management */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#f9fafb"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Management (BM Level)</td>
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
//                     value={formData.staff.attrition.ho.management || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.attrition.ho.management", e.target.value)
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
//                     value={formData.staff.attrition.branch.management || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.attrition.branch.management", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* Senior Management */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#ffffff"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Senior Management</td>
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
//                     value={formData.staff.attrition.ho.senior_management || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.attrition.ho.senior_management", e.target.value)
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
//                     value={formData.staff.attrition.branch.senior_management || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.attrition.branch.senior_management", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* Probational */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#f9fafb"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Probational</td>
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
//                     value={formData.staff.attrition.ho.probational || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.attrition.ho.probational", e.target.value)
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
//                     value={formData.staff.attrition.branch.probational || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.attrition.branch.probational", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* Others */}
//               <tr style={{
//                 borderBottom: "1px solid #f3f4f6",
//                 backgroundColor: "#ffffff"
//               }}>
//                 <td style={{
//                   padding: "12px 16px",
//                   fontSize: "13px",
//                   fontWeight: "600",
//                   color: "#374151"
//                 }}>Others (Support Staff)</td>
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
//                     value={formData.staff.attrition.ho.total || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.attrition.ho.total", e.target.value)
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
//                     value={formData.staff.attrition.branch.total || ""}
//                     onChange={(e) =>
//                       handleNestedChange("staff.attrition.branch.total", e.target.value)
//                     }
//                     onFocus={(e) => { e.target.style.borderColor = "#2B60AD"; }}
//                     onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; }}
//                   />
//                 </td>
//                 <td style={{ padding: "12px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>

//               {/* Total Row */}
//               <tr style={{
//                 backgroundColor: "#f0f9ff",
//                 borderTop: "2px solid #2B60AD"
//               }}>
//                 <td style={{
//                   padding: "14px 16px",
//                   fontSize: "13px",
//                   fontWeight: "800",
//                   color: "#1e40af"
//                 }}>Total</td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//                 <td style={{ padding: "14px 16px" }}>
//                   <CalculatedField value={0} />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Hr;


import "./HR.css";
import React from "react";

function Hr({ 
  formData, 
  handleChange, 
  handleNestedChange, 
  selectedMonthName, 
  selectedDuring_FY 
}) {

  // Section header component matching Overview exactly
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

  // Calculated field component matching Overview
  const CalculatedField = ({ value }) => (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "40px",
      fontSize: "14px",
      fontWeight: "700",
      color: "#0D5653",
      background: "linear-gradient(135deg, #F0FDFC 0%, #E6F9F7 100%)",
      borderRadius: "6px",
      padding: "0 12px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      {value || 0}
    </div>
  );

  return (
    <div style={{
      backgroundColor: "#F7F9FB",
      padding: "20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      minHeight: "100vh"
    }}>

      {/* ACTIVE NUMBER OF STAFF */}
      <SectionHeader title="Active Number of Staff" date={selectedMonthName} />
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
          border: "1px solid #F3F4F6",
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
                  width: "40%",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>No. of Staff</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>HO Level</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Branch/Regional Level</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  width: "15%",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* Field Officers */}
              <tr style={{
                borderBottom: "1px solid #F3F4F6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Field Officers</td>
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.active.ho.field_officers || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.active.ho.field_officers", e.target.value)
                    }
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.active.branch.field_officers || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.active.branch.field_officers", e.target.value)
                    }
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
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* Management */}
              <tr style={{
                borderBottom: "1px solid #F3F4F6",
                backgroundColor: "#F9FAFB"
              }}>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Management (BM Level)</td>
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.active.ho.management || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.active.ho.management", e.target.value)
                    }
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.active.branch.management || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.active.branch.management", e.target.value)
                    }
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
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* Senior Management */}
              <tr style={{
                borderBottom: "1px solid #F3F4F6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Senior Management</td>
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.active.ho.senior_management || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.active.ho.senior_management", e.target.value)
                    }
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.active.branch.senior_management || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.active.branch.senior_management", e.target.value)
                    }
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
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* Probational */}
              <tr style={{
                borderBottom: "1px solid #F3F4F6",
                backgroundColor: "#F9FAFB"
              }}>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Probational</td>
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.active.ho.probational || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.active.ho.probational", e.target.value)
                    }
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.active.branch.probational || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.active.branch.probational", e.target.value)
                    }
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
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* Others */}
              <tr style={{
                borderBottom: "1px solid #F3F4F6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Others (Support Staff)</td>
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.active.ho.others || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.active.ho.others", e.target.value)
                    }
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.active.branch.others || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.active.branch.others", e.target.value)
                    }
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
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* Total Row */}
              <tr style={{
                background: "linear-gradient(135deg, #F0FDFC 0%, #E6F9F7 100%)",
                borderTop: "2px solid #39B1AC"
              }}>
                <td style={{
                  padding: "14px 16px",
                  fontSize: "13px",
                  fontWeight: "800",
                  color: "#0F766E",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Total</td>
                <td style={{ padding: "14px 16px" }}>
                  <CalculatedField value={0} />
                </td>
                <td style={{ padding: "14px 16px" }}>
                  <CalculatedField value={0} />
                </td>
                <td style={{ padding: "14px 16px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* STAFF RECRUITMENT */}
      <SectionHeader title="Staff Recruitment" date={selectedDuring_FY} />
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
          border: "1px solid #F3F4F6",
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
                  width: "40%",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>No. of Staff</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>HO Level</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Branch/Regional Level</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  width: "15%",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* Field Officers */}
              <tr style={{
                borderBottom: "1px solid #F3F4F6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Field Officers</td>
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.recruitment.ho.field_officers || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.recruitment.ho.field_officers", e.target.value)
                    }
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.recruitment.branch.field_officers || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.recruitment.branch.field_officers", e.target.value)
                    }
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
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* Management */}
              <tr style={{
                borderBottom: "1px solid #F3F4F6",
                backgroundColor: "#F9FAFB"
              }}>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Management (BM Level)</td>
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.recruitment.ho.management || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.recruitment.ho.management", e.target.value)
                    }
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.recruitment.branch.management || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.recruitment.branch.management", e.target.value)
                    }
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
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* Senior Management */}
              <tr style={{
                borderBottom: "1px solid #F3F4F6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Senior Management</td>
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.recruitment.ho.senior_management || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.recruitment.ho.senior_management", e.target.value)
                    }
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.recruitment.branch.senior_management || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.recruitment.branch.senior_management", e.target.value)
                    }
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
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* Probational */}
              <tr style={{
                borderBottom: "1px solid #F3F4F6",
                backgroundColor: "#F9FAFB"
              }}>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Probational</td>
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.recruitment.ho.probational || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.recruitment.ho.probational", e.target.value)
                    }
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.recruitment.branch.probational || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.recruitment.branch.probational", e.target.value)
                    }
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
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* Others */}
              <tr style={{
                borderBottom: "1px solid #F3F4F6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Others (Support Staff)</td>
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.recruitment.ho.others || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.recruitment.ho.others", e.target.value)
                    }
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.recruitment.branch.others || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.recruitment.branch.others", e.target.value)
                    }
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
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* Total Row */}
              <tr style={{
                background: "linear-gradient(135deg, #F0FDFC 0%, #E6F9F7 100%)",
                borderTop: "2px solid #39B1AC"
              }}>
                <td style={{
                  padding: "14px 16px",
                  fontSize: "13px",
                  fontWeight: "800",
                  color: "#0F766E",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Total</td>
                <td style={{ padding: "14px 16px" }}>
                  <CalculatedField value={0} />
                </td>
                <td style={{ padding: "14px 16px" }}>
                  <CalculatedField value={0} />
                </td>
                <td style={{ padding: "14px 16px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* STAFF ATTRITION */}
      <SectionHeader title="Staff Attrition" date={selectedDuring_FY} />
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
          border: "1px solid #F3F4F6",
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
                  width: "40%",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>No. of Staff</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>HO Level</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Branch/Regional Level</th>
                <th style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  width: "15%",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* Field Officers */}
              <tr style={{
                borderBottom: "1px solid #F3F4F6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Field Officers</td>
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.attrition.ho.field_officers || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.attrition.ho.field_officers", e.target.value)
                    }
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.attrition.branch.field_officers || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.attrition.branch.field_officers", e.target.value)
                    }
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
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* Management */}
              <tr style={{
                borderBottom: "1px solid #F3F4F6",
                backgroundColor: "#F9FAFB"
              }}>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Management (BM Level)</td>
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.attrition.ho.management || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.attrition.ho.management", e.target.value)
                    }
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.attrition.branch.management || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.attrition.branch.management", e.target.value)
                    }
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
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* Senior Management */}
              <tr style={{
                borderBottom: "1px solid #F3F4F6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Senior Management</td>
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.attrition.ho.senior_management || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.attrition.ho.senior_management", e.target.value)
                    }
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.attrition.branch.senior_management || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.attrition.branch.senior_management", e.target.value)
                    }
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
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* Probational */}
              <tr style={{
                borderBottom: "1px solid #F3F4F6",
                backgroundColor: "#F9FAFB"
              }}>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Probational</td>
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.attrition.ho.probational || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.attrition.ho.probational", e.target.value)
                    }
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.attrition.branch.probational || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.attrition.branch.probational", e.target.value)
                    }
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
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* Others */}
              <tr style={{
                borderBottom: "1px solid #F3F4F6",
                backgroundColor: "#ffffff"
              }}>
                <td style={{
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#374151",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Others (Support Staff)</td>
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.attrition.ho.others || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.attrition.ho.others", e.target.value)
                    }
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
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    }}
                    value={formData.staff.attrition.branch.others || ""}
                    onChange={(e) =>
                      handleNestedChange("staff.attrition.branch.others", e.target.value)
                    }
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
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>

              {/* Total Row */}
              <tr style={{
                background: "linear-gradient(135deg, #F0FDFC 0%, #E6F9F7 100%)",
                borderTop: "2px solid #39B1AC"
              }}>
                <td style={{
                  padding: "14px 16px",
                  fontSize: "13px",
                  fontWeight: "800",
                  color: "#0F766E",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}>Total</td>
                <td style={{ padding: "14px 16px" }}>
                  <CalculatedField value={0} />
                </td>
                <td style={{ padding: "14px 16px" }}>
                  <CalculatedField value={0} />
                </td>
                <td style={{ padding: "14px 16px" }}>
                  <CalculatedField value={0} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default Hr;