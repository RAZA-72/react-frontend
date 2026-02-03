// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import DataTable from "react-data-table-component";
// import { Button } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import UpdateIcon from "@mui/icons-material/Update";
// import InfoIcon from "@mui/icons-material/Info";
// import * as XLSX from "xlsx";
// import DownloadIcon from "@mui/icons-material/Download";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import OpenInNewIcon from "@mui/icons-material/OpenInNew";
// import VisibilityIcon from "@mui/icons-material/Visibility";

// const SCMList = () => {
//   const user = localStorage.getItem("user");
//   const userData = JSON.parse(user);
//   const userName = userData.data.user.name || "";
//   const userRole = userData.data.role_name || "";
//   const userEmail = userData.data.user.email;

//   const location = useLocation();
//   const navigate = useNavigate();
//   const searchParams = new URLSearchParams(location.search);
//   const status = searchParams.get("status") || ""; // "open" or "closed"

//   const [regionalHead, setRegionalHead] = useState([]);

//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [toggleCleared, setToggleCleared] = useState(false);
//   const [selectedRegionalHead, setSelectedRegionalHead] = useState("");
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const response = await axios.get(
//           "https://api.mfinindia.org/api/auth/meetings/count/activity_type",
//           {
//             params: {
//               user_role: userRole,
//               username: userName,
//               activity_type: "SCM",
//             },
//           }
//         );

//         console.log("API Response:", response.data);

//         if (!response.data || !response.data.data) {
//           throw new Error("Invalid data structure from API");
//         }

//         // Filter data based on status (case-insensitive)
//         const statusFilteredData = response.data.data.filter(
//           (item) =>
//             item.hod_observation &&
//             item.hod_observation.toLowerCase() === status.toLowerCase()
//         );

//         console.log("Filtered Data:", statusFilteredData);

//         setData(statusFilteredData);
//         setFilteredData(statusFilteredData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError(error.message || "Failed to fetch data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [status, userRole, userName]);

//   useEffect(() => {
//     if (selectedRegionalHead) {
//       const filtered = data.filter(
//         (item) => item.regional_head === selectedRegionalHead
//       );
//       setFilteredData(filtered);
//     } else {
//       setFilteredData(data);
//     }
//   }, [data, selectedRegionalHead]);

//   //fetching regional head data
//   useEffect(() => {
//     const fetchRegionalHead = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.mfinindia.org/api/auth/meetings/user/getRole18Users"
//         );
//         console.log("regionalhead", response.data.names);
//         setRegionalHead(response.data.names);
//       } catch (err) {
//         console.log("regionalhead-err", err.response);
//       }
//     };

//     fetchRegionalHead();
//   }, []);

//   const handleEdit = (row) => {
//     navigate(`/edit-meeting/${row.id}`);
//   };

//   const handleUpdateClick = (row) => {
//     navigate(`/update-meeting/${row.id}`);
//   };

//   const handleDelete = async (row) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this? This action cannot be undone."
//     );
//     if (confirmDelete) {
//       try {
//         await axios.delete(
//           `https://api.mfinindia.org/api/auth/meetings/delete/${row.id}`
//         );
//         const updatedData = data.filter((item) => item.id !== row.id);
//         setData(updatedData);
//         setFilteredData(updatedData);
//       } catch (error) {
//         console.error("Error deleting meeting:", error);
//       }
//     }
//   };

//   const handleBulkDelete = async () => {
//     try {
//       await Promise.all(
//         selectedRows.map((row) =>
//           axios.delete(`https://api.mfinindia.org/api/auth/meetings/${row.id}`)
//         )
//       );
//       const updatedData = data.filter(
//         (item) => !selectedRows.some((row) => row.id === item.id)
//       );
//       setData(updatedData);
//       setFilteredData(updatedData);
//       setToggleCleared(!toggleCleared);
//     } catch (error) {
//       console.error("Error deleting meetings:", error);
//     }
//   };

//   // decide if Edit column should be shown
//   const shouldShowEditColumn =
//     !(
//       userRole === "Admin" ||
//       userRole === "Vertical-Head" ||
//       userRole === "SI_Admin"
//     ) &&
//     data &&
//     data.some(function (row) {
//       return (
//         row &&
//         row.hod_observation &&
//         row.hod_observation.toLowerCase() !== "closed"
//       );
//     });

//   // decide if Update column should be shown
//   const shouldShowUpdateColumn =
//     !(
//       userRole === "Admin" ||
//       userRole === "Vertical-Head" ||
//       userRole === "SI_Admin"
//     ) &&
//     data &&
//     data.some(function (row) {
//       return (
//         row &&
//         row.hod_observation &&
//         row.hod_observation.toLowerCase() !== "open"
//       );
//     });

//   const columns = [
//     {
//       name: "M.ID",
//       selector: (row) => row.id,
//       sortable: true,
//       width: "100px",
//     },
//     {
//       name: "Region",
//       selector: (row) => row.region || "-",
//       sortable: true,
//       width: "100px",
//     },
//     {
//       name: "Regional Head",
//       selector: (row) => row.regional_head || "-",
//       sortable: true,
//       width: "165px",
//       omit: !(
//         userRole === "Admin" ||
//         userRole === "Vertical-Head" ||
//         userRole === "SI_Admin"
//       ),
//     },
//     {
//       name: "State",
//       selector: (row) => row.state || "-",
//       sortable: true,
//       width: "150px",
//     },
//     {
//       name: "District",
//       // selector: (row) => row.district || "-",
//       selector: (row) => "All" || "-",
//       sortable: true,
//       width: "150px",
//     },
//     {
//       name: "Date Of Entry",
//       selector: (row) => row.created_at,
//       sortable: true,
//       cell: (row) =>
//         row.created_at
//           ? new Date(row.created_at).toLocaleString("en-IN", {
//               timeZone: "Asia/Kolkata",
//               day: "2-digit",
//               month: "long",
//               year: "numeric",
//               hour: "2-digit",
//               minute: "2-digit",
//               hour12: true, // ✅ 12-hour format
//             })
//           : "-",
//       width: "160px", // increased width to accommodate longer text like "23 April 2025"
//     },
//     {
//       name: "Meeting Date",
//       selector: (row) => row.dateOfMeeting,
//       sortable: true,
//       cell: (row) =>
//         row.dateOfMeeting
//           ? new Date(row.dateOfMeeting).toLocaleDateString("en-GB", {
//               day: "numeric",
//               month: "long",
//               year: "numeric",
//             })
//           : "-",
//       width: "160px",
//     },

//     {
//       name: "Planned/Unplanned",
//       selector: (row) => row.type || "-",
//       sortable: true,
//       width: "165px",
//     },
//     {
//       name: "Online/Physical",
//       selector: (row) => row.mode || "-",
//       sortable: true,
//       width: "150px",
//     },
//     {
//       name: "Meeting Place",
//       selector: (row) => row.placeOfMeeting || "-",
//       sortable: true,
//       width: "180px",
//     },
//     {
//       name: "Activity Detail(s)",
//       cell: (row) =>
//         row.activity_details ? (
//           <div
//             dangerouslySetInnerHTML={{ __html: row.activity_details || "-" }}
//             style={{ maxHeight: "15px", overflow: "auto" }}
//           />
//         ) : (
//           "-"
//         ),
//       sortable: true,
//       width: "150px",
//     },
//     {
//       name: "Important Decision(s)",
//       selector: (row) => row.important_decision || "-",
//       sortable: true,
//       width: "180px",
//     },
//     {
//       name: "Status Update",
//       cell: (row) =>
//         row.status_update ? (
//           <div
//             dangerouslySetInnerHTML={{ __html: row.status_update || "-" }}
//             style={{ maxHeight: "15px", overflow: "auto" }}
//           />
//         ) : (
//           "-"
//         ),
//       sortable: true,
//       width: "180px",
//     },
//     {
//       name: "HOD Observation(s)",
//       selector: (row) => row.hod_observation || "-",
//       sortable: true,
//       width: "170px",
//     },
//     {
//       name: "URL",
//       cell: (row) =>
//         row.url ? (
//           <a
//             href={row.url.startsWith("http") ? row.url : `https://${row.url}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             title={row.url}
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               justifyContent: "center",
//               cursor: "pointer",
//               color: "#1976d2",
//             }}
//           >
//             <OpenInNewIcon fontSize="small" />
//           </a>
//         ) : (
//           <span>—</span>
//         ),
//       sortable: false,
//       width: "70px",
//       center: true,
//     },
//     {
//       name: "View",
//       cell: (row) => (
//         <Button
//           variant="contained"
//           color="info"
//           size="small"
//           onClick={() => handleViewClick(row)}
//           sx={{
//             minWidth: "32px",
//             px: 0,
//           }}
//         >
//           <VisibilityIcon fontSize="small" />
//         </Button>
//       ),
//       sortable: true,
//       ignoreRowClick: true,
//       allowOverflow: true,
//       button: true,
//       width: "80px",
//       center: true,
//     },
//     shouldShowEditColumn && {
//       name: "Edit",
//       cell: (row) => (
//         <Button
//           variant="contained"
//           color="primary"
//           size="small"
//           onClick={() => handleEdit(row)}
//           sx={{
//             minWidth: "32px",
//             px: 0,
//           }}
//         >
//           <EditIcon fontSize="small" />
//         </Button>
//       ),
//       ignoreRowClick: true,
//       allowOverflow: true,
//       button: true,
//       width: "80px",
//       center: true,
//       omit:
//         userRole === "Admin" ||
//         userRole === "Vertical-Head" ||
//         userRole === "SI_Admin",
//     },
//     shouldShowUpdateColumn && {
//       name: "Update",
//       cell: (row) => (
//         <Button
//           variant="contained"
//           color="primary"
//           size="small"
//           onClick={() => handleUpdateClick(row)}
//           sx={{
//             minWidth: "32px",
//             px: 0,
//           }}
//         >
//           <EditIcon fontSize="small" />
//         </Button>
//       ),
//       ignoreRowClick: true,
//       allowOverflow: true,
//       button: true,
//       width: "80px",
//       center: true,
//       omit:
//         userRole === "Admin" ||
//         userRole === "Vertical-Head" ||
//         userRole === "SI_Admin",
//     },
//     {
//       name: "Delete",
//       cell: (row) => (
//         <Button
//           variant="contained"
//           color="error"
//           size="small"
//           onClick={() => handleDelete(row)}
//           sx={{
//             minWidth: "32px",
//             px: 0,
//           }}
//         >
//           <DeleteIcon fontSize="small" />
//         </Button>
//       ),
//       ignoreRowClick: true,
//       allowOverflow: true,
//       button: true,
//       width: "80px",
//       center: true,
//     },
//     {
//       name: "Track",
//       cell: (row) => (
//         <Button
//           variant="contained"
//           color="info"
//           size="small"
//           onClick={() => handleInfoClick(row)}
//           sx={{
//             minWidth: "32px",
//             px: 0,
//           }}
//         >
//           <InfoIcon fontSize="small" />
//         </Button>
//       ),
//       sortable: true,
//       ignoreRowClick: true,
//       allowOverflow: true,
//       button: true,
//       width: "80px",
//       center: true,
//     },
//     {
//       name: "HOD_SI_Remark",
//       cell: (row) => {
//         const [comment, setComment] = useState(row.comment || "");
//         const [status, setStatus] = useState(row.status || "");

//         // Get the URL status parameter
//         const urlStatus = searchParams.get("status") || "";

//         const handleUpdate = async () => {
//           if (!status) {
//             alert("There is no changes to update.");
//             return;
//           }
//           try {
//             await axios.post(
//               `https://api.mfinindia.org/api/auth/meetings/archmeeting_update_new/${row.id}`,
//               {
//                 regional_head: row.regional_head,
//                 hodObservation: status,
//                 statusUpdate: comment,
//                 loginemail: userEmail,
//                 username: userName,
//                 activity_type: row.activity_type,
//               }
//             );
//             alert("Data Updated Successfully!");
//             window.location.reload();
//           } catch (error) {
//             console.error("Update failed:", error);
//           }
//         };

//         return (
//           <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//             <select
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               style={{
//                 padding: "6px 12px",
//                 borderRadius: "4px",
//                 border: "1px solid #ccc",
//                 minWidth: "100px",
//               }}
//             >
//               <option value="">Select Status</option>
//               <option value="Open">Open</option>
//               <option value="Closed">Closed</option>
//             </select>

//             <textarea
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//               placeholder="comment..."
//               style={{
//                 padding: "6px",
//                 borderRadius: "4px",
//                 border: "1px solid #ccc",
//                 minWidth: "150px",
//                 resize: "vertical",
//                 minHeight: "36px",
//               }}
//             />

//             <Button
//               variant="contained"
//               color="primary"
//               size="small"
//               onClick={handleUpdate}
//               sx={{
//                 minWidth: "32px",
//                 px: 0,
//               }}
//             >
//               <UpdateIcon fontSize="small" />
//             </Button>
//           </div>
//         );
//       },
//       ignoreRowClick: true,
//       allowOverflow: true,
//       width: "400px",
//       center: true,
//       omit: !(
//         userRole === "Admin" ||
//         userRole === "Vertical-Head" ||
//         userRole === "SI_Admin"
//       ),
//     },
//   ].filter(Boolean);

//   const contextActions = (
//     <Button
//       key="delete"
//       onClick={handleBulkDelete}
//       variant="contained"
//       color="error"
//       startIcon={<DeleteIcon />}
//     >
//       Delete Selected
//     </Button>
//   );

//   // const exportToExcel = () => {
//   //   if (data.length === 0) {
//   //     alert("No data to export");
//   //     return;
//   //   }

//   //   const columnsToExclude = ["updated_at"];

//   //   const exportData = data.map((item) => {
//   //     const newItem = { ...item };
//   //     columnsToExclude.forEach((col) => delete newItem[col]);

//   //     // Format date
//   //     if (newItem.dateOfMeeting) {
//   //       newItem.dateOfMeeting = new Date(
//   //         newItem.dateOfMeeting
//   //       ).toLocaleDateString();
//   //     }

//   //     // Rename head_and_si_remark → Head_SI_Remark
//   //     if (newItem.hasOwnProperty("head_and_si_remark")) {
//   //       newItem["Head_SI_Remark"] = newItem["head_and_si_remark"];
//   //       delete newItem["head_and_si_remark"];
//   //     }

//   //     let dateOfEntry = null;
//   //     if (newItem.hasOwnProperty("created_at")) {
//   //       const utcDate = new Date(newItem["created_at"]);
//   //       dateOfEntry = utcDate.toLocaleString("en-IN", {
//   //         timeZone: "Asia/Kolkata",
//   //         day: "2-digit",
//   //         month: "long",
//   //         year: "numeric",
//   //         hour: "2-digit",
//   //         minute: "2-digit",
//   //         hour12: true,
//   //       });
//   //       delete newItem["created_at"];
//   //     }

//   //     // Reorder keys
//   //     const reorderedItem = {};
//   //     for (const key in newItem) {
//   //       if (key === "dateOfMeeting" && dateOfEntry) {
//   //         reorderedItem["Date of entry"] = dateOfEntry;
//   //       }
//   //       reorderedItem[key] = newItem[key];

//   //       // Place Head_SI_Remark after status_update
//   //       if (
//   //         key === "status_update" &&
//   //         newItem["Head_SI_Remark"] !== undefined
//   //       ) {
//   //         reorderedItem["Head_SI_Remark"] = newItem["Head_SI_Remark"];
//   //       }
//   //     }

//   //     // If dateOfMeeting doesn't exist, still add Date of entry at start
//   //     if (!newItem.dateOfMeeting && dateOfEntry) {
//   //       reorderedItem["Date of entry"] = dateOfEntry;
//   //     }

//   //     return reorderedItem;
//   //   });

//   //   const ws = XLSX.utils.json_to_sheet(exportData);
//   //   const wb = XLSX.utils.book_new();
//   //   XLSX.utils.book_append_sheet(wb, ws, "SIT");

//   //   const randomNum = Math.floor(Math.random() * 9000) + 1000;
//   //   const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
//   //   const filename = `SIT_SCM${timestamp}_${randomNum}.xlsx`;

//   //   XLSX.writeFile(wb, filename);
//   // };

//   // const exportToExcel = () => {
//   //   if (data.length === 0) {
//   //     alert("No data to export");
//   //     return;
//   //   }

//   //   const columnsToExclude = ["updated_at"];

//   //   // Function to convert HTML to plain text
//   //   const htmlToText = (html) => {
//   //     if (!html) return "";
//   //     const temp = document.createElement("div");
//   //     temp.innerHTML = html;
//   //     return temp.textContent || temp.innerText || "";
//   //   };

//   //   // Function to format date as 08-Aug-25
//   //   const formatDate = (dateString) => {
//   //     if (!dateString) return "";
//   //     const date = new Date(dateString);
//   //     const day = String(date.getDate()).padStart(2, "0");
//   //     const month = date.toLocaleString("default", { month: "short" });
//   //     const year = String(date.getFullYear()).slice(-2);
//   //     return `${day}-${month}-${year}`;
//   //   };

//   //   const exportData = data.map((item) => {
//   //     const newItem = { ...item };
//   //     columnsToExclude.forEach((col) => delete newItem[col]);

//   //     // Format date as 08-Aug-25
//   //     if (newItem.dateOfMeeting) {
//   //       newItem.dateOfMeeting = formatDate(newItem.dateOfMeeting);
//   //     }

//   //     // Convert HTML to plain text for activity_details
//   //     if (newItem.activity_details) {
//   //       newItem.activity_details = htmlToText(newItem.activity_details);
//   //     }
//   //     // Convert HTML to plain text for status_update
//   //     if (newItem.status_update) {
//   //       newItem.status_update = htmlToText(newItem.status_update);
//   //     }

//   //     // Rename head_and_si_remark → Head_SI_Remark
//   //     if (newItem.hasOwnProperty("head_and_si_remark")) {
//   //       newItem["Head_SI_Remark"] = newItem["head_and_si_remark"];
//   //       delete newItem["head_and_si_remark"];
//   //     }

//   //     let dateOfEntry = null;
//   //     if (newItem.hasOwnProperty("created_at")) {
//   //       const utcDate = new Date(newItem["created_at"]);
//   //       dateOfEntry =
//   //         formatDate(utcDate) +
//   //         " " +
//   //         utcDate.toLocaleTimeString("en-IN", {
//   //           timeZone: "Asia/Kolkata",
//   //           hour: "2-digit",
//   //           minute: "2-digit",
//   //           hour12: true,
//   //         });
//   //       delete newItem["created_at"];
//   //     }

//   //     // Reorder keys
//   //     const reorderedItem = {};
//   //     for (const key in newItem) {
//   //       if (key === "dateOfMeeting" && dateOfEntry) {
//   //         reorderedItem["Date of entry"] = dateOfEntry;
//   //       }
//   //       reorderedItem[key] = newItem[key];

//   //       // Place Head_SI_Remark after status_update
//   //       if (
//   //         key === "status_update" &&
//   //         newItem["Head_SI_Remark"] !== undefined
//   //       ) {
//   //         reorderedItem["Head_SI_Remark"] = newItem["Head_SI_Remark"];
//   //       }
//   //     }

//   //     // If dateOfMeeting doesn't exist, still add Date of entry at start
//   //     if (!newItem.dateOfMeeting && dateOfEntry) {
//   //       reorderedItem["Date of entry"] = dateOfEntry;
//   //     }

//   //     return reorderedItem;
//   //   });

//   //   const ws = XLSX.utils.json_to_sheet(exportData);
//   //   const wb = XLSX.utils.book_new();
//   //   XLSX.utils.book_append_sheet(wb, ws, "SIT");

//   //   const randomNum = Math.floor(Math.random() * 9000) + 1000;
//   //   const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
//   //   const filename = `SIT_SCM${timestamp}_${randomNum}.xlsx`;

//   //   XLSX.writeFile(wb, filename);
//   // };

//   const exportToExcel = () => {
//     if (data.length === 0) {
//       alert("No data to export");
//       return;
//     }

//     const columnsToExclude = ["updated_at"];

//     const htmlToText = (html) => {
//       if (!html) return "";
//       const temp = document.createElement("div");
//       temp.innerHTML = html;
//       return temp.textContent || temp.innerText || "";
//     };

//     const parseSafeDateTime = (value) => {
//       if (!value) return null;
//       const d = new Date(value);
//       if (!isNaN(d)) return d; // Keep full datetime
//       return null;
//     };

//     const exportData = data.map((item) => {
//       const newItem = { ...item };
//       columnsToExclude.forEach((col) => delete newItem[col]);

//       // ✅ Keep full datetime for Excel
//       newItem.dateOfMeeting = parseSafeDateTime(newItem.dateOfMeeting);

//       if (newItem.activity_details) {
//         newItem.activity_details = htmlToText(newItem.activity_details);
//       }
//       if (newItem.status_update) {
//         newItem.status_update = htmlToText(newItem.status_update);
//       }

//       if (newItem.hasOwnProperty("head_and_si_remark")) {
//         newItem["Head_SI_Remark"] = newItem["head_and_si_remark"];
//         delete newItem["head_and_si_remark"];
//       }

//       let dateOfEntry = null;
//       if (newItem.hasOwnProperty("created_at")) {
//         dateOfEntry = parseSafeDateTime(newItem["created_at"]);
//         delete newItem["created_at"];
//       }

//       const reorderedItem = {};
//       for (const key in newItem) {
//         if (key === "dateOfMeeting" && dateOfEntry) {
//           reorderedItem["dateOfEntry"] = dateOfEntry;
//         }
//         reorderedItem[key] = newItem[key];

//         if (
//           key === "status_update" &&
//           newItem["Head_SI_Remark"] !== undefined
//         ) {
//           reorderedItem["Head_SI_Remark"] = newItem["Head_SI_Remark"];
//         }
//       }

//       if (!newItem.dateOfMeeting && dateOfEntry) {
//         reorderedItem["dateOfEntry"] = dateOfEntry;
//       }

//       return reorderedItem;
//     });

//     const ws = XLSX.utils.json_to_sheet(exportData);

//     // ✅ Apply Excel datetime format
//     const headers = Object.keys(exportData[0]);
//     ["dateOfMeeting", "dateOfEntry"].forEach((colName) => {
//       const colIndex = headers.indexOf(colName);
//       if (colIndex !== -1) {
//         const range = XLSX.utils.decode_range(ws["!ref"]);
//         for (let R = range.s.r + 1; R <= range.e.r; R++) {
//           const cellAddress = XLSX.utils.encode_cell({ r: R, c: colIndex });
//           const cell = ws[cellAddress];
//           if (cell && cell.v instanceof Date) {
//             cell.t = "d"; // Date type for Excel
//             cell.z = "dd-mmm-yyyy  hh:mm:ss"; // Keep time
//           }
//         }
//       }
//     });

//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "SIT");

//     const randomNum = Math.floor(Math.random() * 9000) + 1000;
//     const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
//     const filename = `SIT_SCM${timestamp}_${randomNum}.xlsx`;

//     XLSX.writeFile(wb, filename);
//   };

//   const handleInfoClick = (row) => {
//     navigate(`/meeting-tracking/${row.id}`);
//   };

//   const handleViewClick = (row) => {
//     navigate("/view-content", { state: { rowData: row } });
//   };

//   const applyFilter = () => {
//     if (selectedRegionalHead) {
//       const filtered = data.filter(
//         (item) => item.regional_head === selectedRegionalHead
//       );
//       setFilteredData(filtered);
//     } else {
//       setFilteredData(data);
//     }
//   };

//   return (
//     <div className="AddMeeting mt-6">
//       <div className="container-fluid">
//         <div className="row g-0">
//           <div className="col-12">
//             <div className="col-sm-6">
//               <div className="col-sm-6 mb-3">
//                 <button
//                   onClick={() => navigate(-1)}
//                   className="back-button"
//                   style={{
//                     background: "none",
//                     border: "none",
//                     cursor: "pointer",
//                     display: "flex",
//                     alignItems: "center",
//                     marginBottom: "1rem",
//                   }}
//                 >
//                   <ArrowBackIcon />
//                 </button>
//               </div>
//             </div>
//             <div style={{ padding: "20px", position: "relative" }}>
//               <h3 style={{ position: "sticky", left: 0 }}>
//                 SCM Meetings -{" "}
//                 {status.charAt(0).toUpperCase() + status.slice(1)}
//               </h3>

//               {error && (
//                 <div style={{ color: "red", margin: "10px 0" }}>
//                   Error: {error}
//                 </div>
//               )}

//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   margin: "20px 0",
//                 }}
//               >
//                 <div style={{ display: "flex", gap: "10px" }}>
//                   {(userRole === "Admin" ||
//                     userRole === "Vertical-Head" ||
//                     userRole === "SI_Admin") && (
//                     <>
//                       <select
//                         value={selectedRegionalHead}
//                         onChange={(e) =>
//                           setSelectedRegionalHead(e.target.value)
//                         }
//                         style={{
//                           padding: "8px 12px",
//                           borderRadius: "4px",
//                           border: "1px solid #ccc",
//                           minWidth: "200px",
//                         }}
//                       >
//                         <option value="">All Regional Heads</option>
//                         {regionalHead.map((head) => (
//                           <option key={head} value={head}>
//                             {head}
//                           </option>
//                         ))}
//                       </select>
//                       <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={applyFilter}
//                         style={{
//                           fontWeight: "bold",
//                         }}
//                       >
//                         Apply Filter
//                       </Button>
//                     </>
//                   )}
//                 </div>

//                 <Button
//                   variant="contained"
//                   color="success"
//                   startIcon={<DownloadIcon />}
//                   onClick={exportToExcel}
//                   style={{
//                     backgroundColor: "rgb(25 118 210)",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Excel / Print
//                 </Button>
//               </div>

//               {loading ? (
//                 <div>Loading...</div>
//               ) : filteredData.length === 0 ? (
//                 <div>No meetings found matching your criteria</div>
//               ) : (
//                 <DataTable
//                   columns={columns}

//                   data={filteredData}
//                   pagination
//                   highlightOnHover
//                   progressPending={loading}
//                   paginationPerPage={10}
//                   paginationRowsPerPageOptions={[10, 20, 30, 50]}
//                   noDataComponent="No meetings found"
//                   customStyles={{
//                     table: {
//                       style: {
//                         border: "1px solid #000",
//                       },
//                     },
//                     headCells: {
//                       style: {
//                         backgroundColor: "#307eac",
//                         fontWeight: "bold",
//                         color: "#fff",
//                         borderRight: "1px solid #fff",
//                         borderBottom: "1px solid #000",
//                       },
//                     },
//                     cells: {
//                       style: {
//                         borderRight: "1px solid #000",
//                         borderBottom: "1px solid #000",
//                       },
//                     },
//                     rows: {
//                       style: {
//                         "&:not(:last-child)": {
//                           borderBottom: "none",
//                         },
//                       },
//                     },
//                   }}
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SCMList;

import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import DataTable from "react-data-table-component";
import {
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  Grid,
  Chip,
  CircularProgress,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";
import * as XLSX from "xlsx";
import InfoIcon from "@mui/icons-material/Info";
import UpdateIcon from "@mui/icons-material/Update";
import VisibilityIcon from "@mui/icons-material/Visibility";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import RefreshIcon from "@mui/icons-material/Refresh";
import TableViewIcon from "@mui/icons-material/TableView";

const SCMList = () => {
  const isInternalNav = useRef(false);
  const location = useLocation();

  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const userName = userData.data.user.name || "";
  const userRole = userData.data.role_name || "";
  const userEmail = userData.data.user.email;

  const [searchParams, setSearchParams] = useSearchParams();

  const status = searchParams.get("status") || "";
  const pageFromUrl = Number(searchParams.get("page")) || 1;
  const midFromUrl = searchParams.get("mid") || "";
  const rhFromUrl = searchParams.get("regional_head") || "";

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [regionalHead, setRegionalHead] = useState([]);
  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  const navigate = useNavigate();

  const [draftFilters, setDraftFilters] = useState({
    mid: midFromUrl,
    regional_head: rhFromUrl,
  });

  const [appliedFilters, setAppliedFilters] = useState({
    mid: midFromUrl,
    regional_head: rhFromUrl,
  });

  const [filterOptions, setFilterOptions] = useState({
    mids: [],
  });

  const [loading, setLoading] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);
  const [error, setError] = useState(null);
  const [showAllColumns, setShowAllColumns] = useState(false);

  useEffect(() => {
    const count = Object.values(appliedFilters).filter(v => v !== "").length;
    setActiveFiltersCount(count);
  }, [appliedFilters]);

  const fetchData = async (params = {}) => {
    setLoading(true);
    setError(null);
    try {
      const baseParams = {
        user_role: userRole,
        username: userName,
        activity_type: "SCM",
      };

      const response = await axios.get(
        "https://api.mfinindia.org/api/auth/meetings/count/activity_type",
        {
          params: { ...baseParams, ...params },
        }
      );

      console.log("API Response:", response.data);

      if (!response.data || !response.data.data) {
        throw new Error("Invalid data structure from API");
      }

      const statusFilteredData = response.data.data.filter((item) => {
        if (!item.hod_observation) return false;
        const obs = item.hod_observation.toLowerCase();
        const statusLower = status.toLowerCase();
        return obs === statusLower || obs === "reopen";
      });

      statusFilteredData.sort((a, b) => {
        const obsA = a.hod_observation ? a.hod_observation.toLowerCase() : "";
        const obsB = b.hod_observation ? b.hod_observation.toLowerCase() : "";
        if (obsA === "reopen" && obsB !== "reopen") return -1;
        if (obsA !== "reopen" && obsB === "reopen") return 1;
        return 0;
      });

      console.log("SCM Filtered Data:", statusFilteredData);
      setData(statusFilteredData);
      setFilteredData(statusFilteredData);

      setFilterOptions((prev) => ({
        ...prev,
        mids: response.data.data
          .map((item) => item.id)
          .filter(Boolean),
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message || "Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let mids = data;

    if (appliedFilters.regional_head) {
      mids = mids.filter(
        (item) => item.regional_head === appliedFilters.regional_head
      );
    }

    const uniqueMids = [...new Set(mids.map(item => item.id))];

    setFilterOptions((prev) => ({
      ...prev,
      mids: uniqueMids,
    }));
  }, [appliedFilters.regional_head, data]);

  useEffect(() => {
    let tempData = [...data];

    if (appliedFilters.mid) {
      tempData = tempData.filter(
        (item) => String(item.id) === String(appliedFilters.mid)
      );
    }

    if (appliedFilters.regional_head) {
      tempData = tempData.filter(
        (item) => item.regional_head === appliedFilters.regional_head
      );
    }

    setFilteredData(tempData);
  }, [appliedFilters, data]);

  useEffect(() => {
    const fetchRegionalHead = async () => {
      try {
        const response = await axios.get(
          "https://api.mfinindia.org/api/auth/meetings/user/getRole18Users"
        );
        console.log("regionalhead", response.data.names);
        setRegionalHead(response.data.names);
      } catch (err) {
        console.log("regionalhead-err", err.response);
      }
    };

    fetchRegionalHead();
  }, []);

  useEffect(() => {
    if (isInternalNav.current) {
      isInternalNav.current = false;
      return;
    }

    setCurrentPage(pageFromUrl);

    const newApplied = {
      mid: midFromUrl,
      regional_head: rhFromUrl,
    };

    setAppliedFilters(newApplied);
    setDraftFilters(newApplied);

    const apiFilters = {};
    if (midFromUrl) apiFilters.id = midFromUrl;
    if (rhFromUrl) apiFilters.regional_head = rhFromUrl;

    fetchData(apiFilters);
  }, [location.search, status]);

  useEffect(() => {
    if (location && location.state && location.state.listingState) {
      const { appliedFilters, currentPage } = location.state.listingState;

      setAppliedFilters(appliedFilters);
      setDraftFilters(appliedFilters);
      setCurrentPage(currentPage);

      fetchData({
        ...(appliedFilters.mid && { id: appliedFilters.mid }),
        ...(appliedFilters.regional_head && {
          regional_head: appliedFilters.regional_head,
        }),
      });
    } else {
      fetchData();
    }
  }, []);

  const applyFilters = () => {
    setAppliedFilters(draftFilters);

    setSearchParams({
      status,
      mid: draftFilters.mid || "",
      regional_head: draftFilters.regional_head || "",
      page: 1,
    });
  };

  const resetFilters = () => {
    const empty = { mid: "", regional_head: "" };

    setDraftFilters(empty);
    setAppliedFilters(empty);

    setSearchParams({ status, page: 1 });
  };

  const handleEdit = (row) => {
    navigate(`/edit-meeting/${row.id}`);
  };

  const handleUpdateClick = (row) => {
    navigate(`/update-meeting/${row.id}`);
  };

  const handleViewClick = (row) => {
    navigate("/view-content", {
      state: {
        rowData: row,
        listingState: {
          appliedFilters,
          currentPage,
        },
      },
    });
  };

  const handleDelete = async (row) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this? This action cannot be undone."
    );
    if (confirmDelete) {
      try {
        await axios.delete(
          `https://api.mfinindia.org/api/auth/meetings/delete/${row.id}`
        );
        setData((prev) => prev.filter((item) => item.id !== row.id));
      } catch (error) {
        console.error("Error deleting meeting:", error);
        alert("Failed to delete. Please try again.");
      }
    }
  };

  const handleBulkDelete = async () => {
    if (selectedRows.length === 0) return;

    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${selectedRows.length} selected items?`
    );
    if (!confirmDelete) return;

    try {
      await Promise.all(
        selectedRows.map((row) =>
          axios.delete(
            `https://api.mfinindia.org/api/auth/meetings/delete/${row.id}`
          )
        )
      );
      setData((prev) =>
        prev.filter((item) => !selectedRows.some((row) => row.id === item.id))
      );
      setSelectedRows([]);
      setToggleCleared(!toggleCleared);
    } catch (error) {
      console.error("Error deleting meetings:", error);
      alert("Failed to delete some items. Please try again.");
    }
  };

  const exportToExcel = () => {
    if (data.length === 0) {
      alert("No data to export");
      return;
    }

    const columnsToExclude = ["updated_at"];

    const htmlToText = (html) => {
      if (!html) return "";
      const temp = document.createElement("div");
      temp.innerHTML = html;
      return temp.textContent || temp.innerText || "";
    };

    const parseSafeDateTime = (value) => {
      if (!value) return null;
      const d = new Date(value);
      if (!isNaN(d)) return d;
      return null;
    };

    const exportData = data.map((item) => {
      const newItem = { ...item };
      columnsToExclude.forEach((col) => delete newItem[col]);

      newItem.dateOfMeeting = parseSafeDateTime(newItem.dateOfMeeting);

      if (newItem.activity_details) {
        newItem.activity_details = htmlToText(newItem.activity_details);
      }
      if (newItem.status_update) {
        newItem.status_update = htmlToText(newItem.status_update);
      }

      if (newItem.hasOwnProperty("head_and_si_remark")) {
        newItem["Head_SI_Remark"] = newItem["head_and_si_remark"];
        delete newItem["head_and_si_remark"];
      }

      let dateOfEntry = null;
      if (newItem.hasOwnProperty("created_at")) {
        dateOfEntry = parseSafeDateTime(newItem["created_at"]);
        delete newItem["created_at"];
      }

      const reorderedItem = {};
      for (const key in newItem) {
        if (key === "dateOfMeeting" && dateOfEntry) {
          reorderedItem["dateOfEntry"] = dateOfEntry;
        }
        reorderedItem[key] = newItem[key];

        if (
          key === "status_update" &&
          newItem["Head_SI_Remark"] !== undefined
        ) {
          reorderedItem["Head_SI_Remark"] = newItem["Head_SI_Remark"];
        }
      }

      if (!newItem.dateOfMeeting && dateOfEntry) {
        reorderedItem["dateOfEntry"] = dateOfEntry;
      }

      return reorderedItem;
    });

    const ws = XLSX.utils.json_to_sheet(exportData);

    const headers = Object.keys(exportData[0]);
    ["dateOfMeeting", "dateOfEntry"].forEach((colName) => {
      const colIndex = headers.indexOf(colName);
      if (colIndex !== -1) {
        const range = XLSX.utils.decode_range(ws["!ref"]);
        for (let R = range.s.r + 1; R <= range.e.r; R++) {
          const cellAddress = XLSX.utils.encode_cell({ r: R, c: colIndex });
          const cell = ws[cellAddress];
          if (cell && cell.v instanceof Date) {
            cell.t = "d";
            cell.z = "dd-mmm-yyyy hh:mm:ss";
          }
        }
      }
    });

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "SCM");

    const randomNum = Math.floor(Math.random() * 9000) + 1000;
    const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const filename = `SCM_${timestamp}_${randomNum}.xlsx`;

    XLSX.writeFile(wb, filename);
  };

  const handleInfoClick = (row) => {
    navigate(`/meeting-tracking/${row.id}`);
  };

  const hodSiRemarkColumn = {
    name: "HOD/SI Remark",
    cell: (row) => {
      const [comment, setComment] = useState(row.comment || "");
      const [status, setStatus] = useState(row.status || "");

      const handleUpdate = async () => {
        if (!status) {
          alert("Please select a status");
          return;
        }
        try {
          await axios.post(
            `https://api.mfinindia.org/api/auth/meetings/archmeeting_update_new/${row.id}`,
            {
              id: row.id,
              regional_head: row.regional_head,
              hodObservation: status,
              statusUpdate: comment,
              loginemail: userEmail,
              username: userName,
              activity_type: row.activity_type,
            }
          );

          setData((prevData) =>
            prevData.map((item) =>
              item.id === row.id
                ? {
                    ...item,
                    hod_observation: status,
                    head_and_si_remark: comment,
                  }
                : item
            )
          );

          alert("Data Updated Successfully!");
          fetchData();
        } catch (error) {
          console.error("Update failed:", error);
          alert("Update failed. Please try again.");
        }
      };

      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
            minWidth: "220px",
            maxWidth: "220px",
          }}
        >
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={{
              padding: "3px 6px",
              borderRadius: "3px",
              border: "1px solid #ccc",
              minWidth: "75px",
              fontSize: "10px",
              textAlign: "left",
              height: "28px",
            }}
          >
            <option value="">Status</option>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>

          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comments..."
            style={{
              padding: "3px 5px",
              borderRadius: "3px",
              border: "1px solid #ccc",
              width: "90px",
              minWidth: "90px",
              resize: "vertical",
              minHeight: "28px",
              maxHeight: "60px",
              fontSize: "10px",
              textAlign: "left",
              fontFamily: "inherit",
              lineHeight: "1.2",
            }}
          />

          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleUpdate}
            sx={{
              minWidth: "26px",
              width: "26px",
              height: "26px",
              minHeight: "26px",
              p: 0,
            }}
          >
            <UpdateIcon fontSize="small" />
          </Button>
        </div>
      );
    },
    ignoreRowClick: true,
    width: "220px",
    minWidth: "220px",
    maxWidth: "220px",
    center: false,
    omit: !(
      userRole === "Admin" ||
      userRole === "Vertical-Head" ||
      userRole === "SI_Admin"
    ),
  };

  const viewColumn = {
    name: "View",
    cell: (row) => (
      <Tooltip title="View Details">
        <IconButton
          color="info"
          size="small"
          onClick={() => handleViewClick(row)}
          sx={{ minWidth: "32px", width: "32px", height: "32px" }}
        >
          <VisibilityIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    ),
    ignoreRowClick: true,
    width: "80px",
    minWidth: "80px",
    maxWidth: "80px",
    center: true,
  };

  const editColumn = {
    name: "Edit",
    cell: (row) => {
      const isClosed =
        row.hod_observation && row.hod_observation.toLowerCase() === "closed";
      if (isClosed) return null;

      return (
        <Tooltip title="Edit">
          <IconButton
            color="primary"
            size="small"
            onClick={() => handleEdit(row)}
            sx={{ minWidth: "32px", width: "32px", height: "32px" }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      );
    },
    ignoreRowClick: true,
    width: "80px",
    minWidth: "80px",
    maxWidth: "80px",
    center: true,
    omit:
      userRole === "Admin" ||
      userRole === "Vertical-Head" ||
      userRole === "SI_Admin",
  };

  const updateColumn = {
    name: "Update",
    cell: (row) => {
      const isOpen =
        row.hod_observation && row.hod_observation.toLowerCase() === "open";
      if (isOpen) return null;

      return (
        <Tooltip title="Update">
          <IconButton
            color="primary"
            size="small"
            onClick={() => handleUpdateClick(row)}
            sx={{ minWidth: "32px", width: "32px", height: "32px" }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      );
    },
    ignoreRowClick: true,
    width: "80px",
    minWidth: "80px",
    maxWidth: "80px",
    center: true,
    omit:
      userRole === "Admin" ||
      userRole === "Vertical-Head" ||
      userRole === "SI_Admin",
  };

  const deleteColumn = {
    name: "Delete",
    cell: (row) => (
      <Tooltip title="Delete">
        <IconButton
          color="error"
          size="small"
          onClick={() => handleDelete(row)}
          sx={{ minWidth: "32px", width: "32px", height: "32px" }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    ),
    ignoreRowClick: true,
    width: "80px",
    minWidth: "80px",
    maxWidth: "80px",
    center: true,
  };

  const trackColumn = {
    name: "Track",
    cell: (row) => {
      const isReopen =
        row.hod_observation && row.hod_observation.toLowerCase() === "reopen";

      return (
        <Tooltip title="Track Meeting">
          <IconButton
            size="small"
            onClick={() => handleInfoClick(row)}
            sx={{
              minWidth: "38px",
              width: "38px",
              height: "32px",
              backgroundColor: isReopen ? "#ff4444" : "transparent",
              color: isReopen ? "#ffffff" : "#1976d2",
              fontWeight: isReopen ? "bold" : "normal",
              animation: isReopen ? "pulse 1.5s ease-in-out infinite" : "none",
              "&:hover": {
                backgroundColor: isReopen
                  ? "#ff2222"
                  : "rgba(25, 118, 210, 0.04)",
                transform: isReopen ? "scale(1.1)" : "scale(1.05)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <InfoIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      );
    },
    ignoreRowClick: true,
    width: "80px",
    minWidth: "80px",
    maxWidth: "80px",
    center: true,
  };

  const allColumns = [
    {
      name: "M.ID",
      selector: (row) => row.id,
      sortable: true,
      width: "80px",
      minWidth: "80px",
      maxWidth: "80px",
    },
    {
      name: "Region",
      selector: (row) => row.region || "-",
      sortable: true,
      width: "120px",
      minWidth: "120px",
    },
    {
      name: "Regional Head",
      selector: (row) => row.regional_head || "-",
      sortable: true,
      width: "150px",
      minWidth: "150px",
      omit: !(
        userRole === "Admin" ||
        userRole === "Vertical-Head" ||
        userRole === "SI_Admin"
      ),
    },
    {
      name: "State",
      selector: (row) => row.state || "-",
      sortable: true,
      width: "130px",
      minWidth: "130px",
    },
    {
      name: "District",
      selector: (row) => "All",
      sortable: true,
      width: "130px",
      minWidth: "130px",
    },
    {
      name: "Date Of Entry",
      selector: (row) => row.created_at,
      sortable: true,
      cell: (row) =>
        row.created_at
          ? new Date(row.created_at).toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
              day: "2-digit",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })
          : "-",
      width: "180px",
      minWidth: "180px",
    },
    {
      name: "Meeting Date",
      selector: (row) => row.dateOfMeeting,
      sortable: true,
      cell: (row) =>
        row.dateOfMeeting
          ? new Date(row.dateOfMeeting).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : "-",
      width: "140px",
      minWidth: "140px",
    },
    {
      name: "Planned/Unplanned",
      selector: (row) => row.type || "-",
      sortable: true,
      width: "165px",
      minWidth: "165px",
    },
    {
      name: "Online/Physical",
      selector: (row) => row.mode || "-",
      sortable: true,
      width: "150px",
      minWidth: "150px",
    },
    {
      name: "Meeting Place",
      selector: (row) => row.placeOfMeeting || "-",
      sortable: true,
      width: "180px",
      minWidth: "180px",
    },
    {
      name: "Activity Detail(s)",
      cell: (row) => {
        if (!row.activity_details) return "-";
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = row.activity_details;
        const plainText = tempDiv.textContent || tempDiv.innerText || "";
        return (
          <div
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "100%",
              fontSize: "12px",
              textAlign: "left",
            }}
            title={plainText}
          >
            {plainText}
          </div>
        );
      },
      sortable: true,
      width: "200px",
      minWidth: "200px",
    },
    {
      name: "Important Decision(s)",
      selector: (row) => row.important_decision || "-",
      sortable: true,
      width: "180px",
      minWidth: "180px",
    },
    {
      name: "Status Update(s)",
      cell: (row) => {
        if (!row.status_update) return "-";
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = row.status_update;
        const plainText = tempDiv.textContent || tempDiv.innerText || "";
        return (
          <div
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "100%",
              fontSize: "12px",
              textAlign: "left",
            }}
            title={plainText}
          >
            {plainText}
          </div>
        );
      },
      sortable: true,
      width: "180px",
      minWidth: "180px",
    },
    {
      name: "HOD Remark",
      selector: (row) => row.head_and_si_remark || "-",
      sortable: true,
      width: "130px",
      minWidth: "130px",
    },
    {
      name: "HOD Observation(s)",
      selector: (row) => row.hod_observation,
      sortable: true,
      width: "198px",
      minWidth: "150px",
      maxWidth: "150px",
      cell: (row) => {
        const isReopen =
          row.hod_observation && row.hod_observation.toLowerCase() === "reopen";

        return (
          <div
            title={row.hod_observation}
            style={{
              color: isReopen ? "#ff4444" : "inherit",
              fontWeight: isReopen ? "bold" : "normal",
              textTransform: isReopen ? "uppercase" : "none",
              animation: isReopen ? "pulse 1.5s ease-in-out infinite" : "none",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "block",
              width: "100%",
              textAlign: "left",
              padding: "4px 0",
              fontSize: "12px",
            }}
          >
            {row.hod_observation || "-"}
          </div>
        );
      },
    },
    {
      name: "URL",
      cell: (row) =>
        row.url ? (
          <a
            href={row.url.startsWith("http") ? row.url : `https://${row.url}`}
            target="_blank"
            rel="noopener noreferrer"
            title={row.url}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#1976d2",
            }}
          >
            <OpenInNewIcon fontSize="small" />
          </a>
        ) : (
          <span>—</span>
        ),
      sortable: false,
      width: "70px",
      minWidth: "70px",
      maxWidth: "70px",
      center: true,
    },
    viewColumn,
    editColumn,
    updateColumn,
    deleteColumn,
    trackColumn,
    hodSiRemarkColumn,
  ].filter(Boolean);

  const defaultViewColumns = allColumns.map((col) => {
    const hideColumns = [
      "Region",
      "Date Of Entry",
      "Planned/Unplanned",
      "Online/Physical",
      "Meeting Place",
      "Activity Detail(s)",
      "Important Decision(s)",
      "Status Update(s)",
      "HOD Remark",
      "URL",
      "Edit",
      "Update",
    ];

    if (hideColumns.includes(col.name)) {
      return { ...col, omit: true };
    }
    return col;
  });

  const columns = showAllColumns ? allColumns : defaultViewColumns;

  const contextActions = (
    <Button
      key="delete"
      onClick={handleBulkDelete}
      variant="contained"
      color="error"
      startIcon={<DeleteIcon />}
      disabled={selectedRows.length === 0}
    >
      Delete Selected ({selectedRows.length})
    </Button>
  );

  const toggleAllColumns = () => {
    setShowAllColumns(!showAllColumns);
  };

  const handleBack = () => {
    isInternalNav.current = true;
    navigate(`/scm-lists?status=${status}`);
  };

  return (
    <div className="AddMeeting mt-6">
      <div className="container-fluid">
        <div className="row g-0">
          <div className="col-12">
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Button
                onClick={handleBack}
                startIcon={<ArrowBackIcon />}
                sx={{ mr: 2 }}
              >
                {/* Back */}
              </Button>
              <Typography
                variant="h4"
                component="h1"
                sx={{ textAlign: "center", width: "100%" }}
              >
                SCM Meetings
              </Typography>

              {activeFiltersCount > 0 && (
                <Chip
                  label={`${activeFiltersCount} active filter(s)`}
                  color="primary"
                  size="small"
                  sx={{ ml: 2 }}
                />
              )}

              <Box
                sx={{
                  ml: "auto",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  variant={showAllColumns ? "contained" : "outlined"}
                  color="primary"
                  onClick={toggleAllColumns}
                  startIcon={<TableViewIcon />}
                >
                  {showAllColumns ? "Default View" : "View All Columns"}
                </Button>
              </Box>
            </Box>

            <Box
              sx={{
                mb: 3,
                p: 2,
                border: "1px solid #e0e0e0",
                borderRadius: 1,
                backgroundColor: "#f9f9f9",
              }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6} md={2}>
                  <Autocomplete
                    options={filterOptions.mids}
                    value={draftFilters.mid || null}
                    onChange={(e, val) =>
                      setDraftFilters((prev) => ({
                        ...prev,
                        mid: val || "",
                      }))
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="MID"
                        size="small"
                        placeholder="Search MID"
                      />
                    )}
                    clearOnEscape
                  />
                </Grid>

                {(userRole === "Admin" ||
                  userRole === "Vertical-Head" ||
                  userRole === "SI_Admin") && (
                  <Grid item xs={12} sm={6} md={3}>
                    <FormControl fullWidth size="small">
                      <InputLabel>Regional Head</InputLabel>
                      <Select
                        name="regional_head"
                        value={draftFilters.regional_head}
                        onChange={(e) =>
                          setDraftFilters((prev) => ({
                            ...prev,
                            regional_head: e.target.value,
                            mid: "",
                          }))
                        }
                        label="Regional Head"
                      >
                        <MenuItem value="">All Regional Heads</MenuItem>
                        {regionalHead.map((head) => (
                          <MenuItem key={head} value={head}>
                            {head}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                )}

                <Grid item xs={12} sm={6} md={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={applyFilters}
                    fullWidth
                    startIcon={<FilterAltIcon />}
                    disabled={loading}
                  >
                    Apply Filters
                  </Button>
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                  <Button
                    variant="outlined"
                    onClick={resetFilters}
                    fullWidth
                    startIcon={<FilterAltOffIcon />}
                    disabled={loading}
                  >
                    Reset
                  </Button>
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                  <Button
                    variant="outlined"
                    onClick={() => fetchData()}
                    fullWidth
                    startIcon={<RefreshIcon />}
                    disabled={loading}
                  >
                    Refresh
                  </Button>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<DownloadIcon />}
                    onClick={exportToExcel}
                    fullWidth
                    disabled={loading || data.length === 0}
                    style={{
                      backgroundColor: "rgb(25 118 210)",
                      fontWeight: "bold",
                    }}
                  >
                    Export Excel
                  </Button>
                </Grid>
              </Grid>
            </Box>

            {error ? (
              <Box
                sx={{
                  p: 3,
                  border: "1px solid #ffebee",
                  backgroundColor: "#ffebee",
                  borderRadius: 1,
                  textAlign: "center",
                }}
              >
                <Typography color="error">{error}</Typography>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => fetchData()}
                  sx={{ mt: 2 }}
                >
                  Retry
                </Button>
              </Box>
            ) : loading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 3,
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
              <>
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="subtitle1">
                    Showing {filteredData.length} records
                    {showAllColumns ? " (All Columns)" : " (Default View)"}
                  </Typography>
                  {selectedRows.length > 0 && contextActions}
                </Box>

                <Box
                  sx={{
                    border: "1px solid #e0e0e0",
                    borderRadius: 1,
                    overflow: "hidden",
                  }}
                >
                  <DataTable
                    key={currentPage}
                    columns={columns}
                    data={filteredData}
                    pagination
                    paginationServer={false}
                    paginationDefaultPage={currentPage}
                    onChangePage={(page) => {
                      setCurrentPage(page);
                      setSearchParams({
                        status,
                        mid: appliedFilters.mid || "",
                        regional_head: appliedFilters.regional_head || "",
                        page,
                      });
                    }}
                    highlightOnHover
                    progressPending={loading}
                    paginationPerPage={10}
                    paginationRowsPerPageOptions={[10, 20, 30, 50]}
                    noDataComponent={
                      <Typography sx={{ p: 3, textAlign: "center" }}>
                        No SCM meetings found. Try adjusting your filters.
                      </Typography>
                    }
                    customStyles={{
                      table: {
                        style: {
                          minWidth: showAllColumns ? "fit-content" : "100%",
                        },
                      },
                      headCells: {
                        style: {
                          backgroundColor: "#307eac",
                          fontWeight: "bold",
                          color: "#fff",
                          borderRight: "1px solid #fff",
                          borderBottom: "1px solid #e0e0e0",
                          padding: "8px 12px",
                          fontSize: "14px",
                        },
                      },
                      cells: {
                        style: {
                          borderRight: "1px solid #e0e0e0",
                          borderBottom: "1px solid #e0e0e0",
                          padding: "8px 12px",
                          fontSize: "13px",
                        },
                      },
                    }}
                    fixedHeader
                    fixedHeaderScrollHeight="calc(100vh - 300px)"
                  />
                </Box>

                <style jsx global>{`
                  @keyframes pulse {
                    0% {
                      opacity: 1;
                      box-shadow: 0 0 0 0 rgba(255, 68, 68, 0.7);
                    }
                    50% {
                      opacity: 0.8;
                      box-shadow: 0 0 0 10px rgba(106, 148, 227, 0);
                    }
                    100% {
                      opacity: 1;
                      box-shadow: 0 0 0 0 rgba(53, 154, 212, 0);
                    }
                  }
                `}</style>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SCMList;